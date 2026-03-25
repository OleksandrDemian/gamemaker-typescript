import fs from "fs-extra";
import path from "node:path";
import ts from "typescript";
import { objectEvents } from "../../events";
import { createObjectEvent, IObjectEvent } from "../../entities/objectEvent";
import { createObject, IObject } from "../../entities/object";
import { DEFAULT_OBJECT_FOLDER, DEFAULT_SCRIPT_FOLDER } from "../../const";
import { createScript, IScript } from "../../entities/script";
import {transpileObjectConfig} from "../../config/transpiler";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ICollectedObject {
  obj: IObject;
  scripts: { scriptName: string; code: string }[];
}

interface ICollectedScript {
  script: IScript;
  code: string;
}

export interface IProcessedObjectFile {
  objects: ICollectedObject[];
  script?: ICollectedScript;
  name: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Build a lookup from handler name → event metadata for fast access. */
const eventByHandler = new Map(objectEvents.map((e) => [e.handler, e]));

/**
 * Emit a single AST node back to source text.
 * We reuse the printer + a throwaway source file so we don't need an
 * external dependency.
 */
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

function emitNode(node: ts.Node, sourceFile: ts.SourceFile): string {
  return printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
}

/**
 * Extract the *body statements* of a function/method as printed source,
 * without the surrounding braces.  Returns undefined if the node has no body.
 */
function extractFunctionBody(
  node:
    | ts.FunctionExpression
    | ts.ArrowFunction
    | ts.MethodDeclaration
    | ts.FunctionDeclaration,
  sourceFile: ts.SourceFile
): string | undefined {
  const body = node.body;
  if (!body || !ts.isBlock(body)) return undefined;

  return body.statements
    .map((stmt) => emitNode(stmt, sourceFile))
    .join("\n");
}

// ---------------------------------------------------------------------------
// AST analysis: collect defineObject calls + the remaining "plain" code
// ---------------------------------------------------------------------------

interface IAnalysisResult {
  objects: ICollectedObject[];
  remainingStatements: ts.Statement[];
}

/**
 * Walk the top-level statements of a source file and split them into:
 *  - defineObject variable declarations  →  ICollectedObject entries
 *  - everything else                     →  remainingStatements
 *
 * Recognised patterns:
 *   const foo = defineObject({ ... });
 *   let   foo = defineObject({ ... });
 *   var   foo = defineObject({ ... });
 */
function analyzeSourceFile(sourceFile: ts.SourceFile): IAnalysisResult {
  const objects: ICollectedObject[] = [];
  const remainingStatements: ts.Statement[] = [];

  for (const stmt of sourceFile.statements) {
    const objectName = tryExtractDefineObjectName(stmt);

    if (objectName !== undefined) {
      const callExpr = getDefineObjectCall(stmt)!;
      const collected = buildCollectedObject(objectName, callExpr, sourceFile);
      if (collected) {
        objects.push(collected);
      }
      // The entire variable declaration is consumed — do NOT add to remaining.
    } else {
      remainingStatements.push(stmt);
    }
  }

  return { objects, remainingStatements };
}

/**
 * If `stmt` is a variable declaration whose initialiser is a `defineObject(...)`
 * call, return the declared variable name.  Otherwise return undefined.
 */
function tryExtractDefineObjectName(stmt: ts.Statement): string | undefined {
  if (!ts.isVariableStatement(stmt)) return undefined;

  const { declarations } = stmt.declarationList;
  if (declarations.length !== 1) return undefined;

  const [decl] = declarations;
  if (!decl.initializer || !ts.isCallExpression(decl.initializer)) return undefined;

  const callee = decl.initializer.expression;
  if (!ts.isIdentifier(callee) || callee.text !== "defineObject") return undefined;

  if (!ts.isIdentifier(decl.name)) return undefined;

  return decl.name.text;
}

/** Pull out the CallExpression for defineObject from the statement (after we already know it's there). */
function getDefineObjectCall(stmt: ts.Statement): ts.CallExpression | undefined {
  if (!ts.isVariableStatement(stmt)) return undefined;
  const decl = stmt.declarationList.declarations[0];
  if (!decl?.initializer || !ts.isCallExpression(decl.initializer)) return undefined;
  return decl.initializer;
}

/**
 * Given the object name and the `defineObject(schema)` call expression,
 * build the ICollectedObject by iterating over the schema's properties and
 * matching them against known event handlers.
 */
function buildCollectedObject(
  name: string,
  callExpr: ts.CallExpression,
  sourceFile: ts.SourceFile
): ICollectedObject | undefined {
  if (callExpr.arguments.length === 0) return undefined;

  const schemaArg = callExpr.arguments[0];
  if (!ts.isObjectLiteralExpression(schemaArg)) return undefined;

  const eventList: IObjectEvent[] = [];
  const scripts: ICollectedObject["scripts"] = [];

  for (const prop of schemaArg.properties) {
    if (!ts.isMethodDeclaration(prop) && !ts.isPropertyAssignment(prop)) continue;

    // Resolve property key name
    const keyName = resolvePropertyName(prop);
    if (!keyName) continue;

    const eventMeta = eventByHandler.get(keyName);
    if (!eventMeta) continue;

    // Extract the function body
    const fnNode = ts.isPropertyAssignment(prop)
      ? asFunctionLike(prop.initializer)
      : prop;

    if (!fnNode) continue;

    const bodyCode = extractFunctionBody(fnNode as any, sourceFile);
    if (bodyCode === undefined) continue;

    eventList.push(
      createObjectEvent({
        eventNum: eventMeta.eventNum,
        eventType: eventMeta.eventType,
      })
    );

    scripts.push({
      scriptName: eventMeta.name + ".gml",
      code: bodyCode,
    });
  }

  return {
    obj: createObject({
      name,
      eventList,
      folder: DEFAULT_OBJECT_FOLDER,
    }),
    scripts,
  };
}

function resolvePropertyName(
  prop: ts.ObjectLiteralElementLike
): string | undefined {
  if (ts.isMethodDeclaration(prop) || ts.isPropertyAssignment(prop)) {
    const { name } = prop;
    if (ts.isIdentifier(name)) return name.text;
    if (ts.isStringLiteral(name)) return name.text;
  }
  return undefined;
}

function asFunctionLike(
  node: ts.Expression
): ts.FunctionExpression | ts.ArrowFunction | undefined {
  if (ts.isFunctionExpression(node) || ts.isArrowFunction(node)) return node;
  return undefined;
}

// ---------------------------------------------------------------------------
// Main entry point
// ---------------------------------------------------------------------------

export const processObjectFile = (filePath: string): IProcessedObjectFile => {
  const source = fs.readFileSync(filePath, "utf-8");
  const fileName = path.parse(filePath).name;

  // Parse to AST (no type-checking needed, so we use createSourceFile)
  const sourceFile = ts.createSourceFile(
    filePath,
    source,
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ true
  );

  // Split into objects and leftover statements
  const { objects, remainingStatements } = analyzeSourceFile(sourceFile);

  // Re-emit the remaining statements and transpile them with our GML transformers
  let script: ICollectedScript | undefined;

  if (remainingStatements.length > 0) {
    const remainingSource = remainingStatements
      .map((stmt) => emitNode(stmt, sourceFile))
      .join("\n\n");

    const transpiled = ts.transpileModule(remainingSource, transpileObjectConfig);

    if (transpiled.outputText.length > 0) {
      // do not generate empty files
      script = {
        script: createScript({
          name: "__gen_" + fileName + "_script",
          folder: DEFAULT_SCRIPT_FOLDER,
        }),
        code: transpiled.outputText,
      };
    }
  }

  // The object event bodies also need to go through the GML transformers.
  // We do this by transpiling each script's code individually.
  const transpiledObjects: ICollectedObject[] = objects.map((collected) => ({
    ...collected,
    scripts: collected.scripts.map(({ scriptName, code }) => ({
      scriptName,
      code: ts.transpileModule(code, transpileObjectConfig).outputText,
    })),
  }));

  return {
    name: fileName,
    objects: transpiledObjects,
    script,
  };
};

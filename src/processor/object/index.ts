import fs from "fs-extra";
import ts from "typescript";
import {eventByHandler} from "../../events";
import {transpilerConfig} from "../../config/transpiler";

interface ICollectedObject {
  scripts: { scriptName: string; code: string }[];
}

export interface IProcessedObjectFile {
  objects: ICollectedObject[];
}

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

function emitNode(node: ts.Node, sourceFile: ts.SourceFile): string {
  return printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
}

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
}

function analyzeSourceFile(sourceFile: ts.SourceFile): IAnalysisResult {
  const objects: ICollectedObject[] = [];

  for (const stmt of sourceFile.statements) {
    const objectName = tryExtractDefineObjectName(stmt);

    if (objectName !== undefined) {
      const callExpr = getDefineObjectCall(stmt)!;
      const collected = buildCollectedObject(callExpr, sourceFile);
      if (collected) {
        objects.push(collected);
      }
      // The entire variable declaration is consumed — do NOT add to remaining.
    }
  }

  return { objects };
}

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

function getDefineObjectCall(stmt: ts.Statement): ts.CallExpression | undefined {
  if (!ts.isVariableStatement(stmt)) return undefined;
  const decl = stmt.declarationList.declarations[0];
  if (!decl?.initializer || !ts.isCallExpression(decl.initializer)) return undefined;
  return decl.initializer;
}

function buildCollectedObject(
  callExpr: ts.CallExpression,
  sourceFile: ts.SourceFile
): ICollectedObject | undefined {
  if (callExpr.arguments.length === 0) return undefined;

  const schemaArg = callExpr.arguments[0];
  if (!ts.isObjectLiteralExpression(schemaArg)) return undefined;

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

    scripts.push({
      scriptName: keyName,
      code: bodyCode,
    });
  }

  return {
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

export const processObjectFile = (filePath: string): IProcessedObjectFile => {
  const source = fs.readFileSync(filePath, "utf-8");

  const sourceFile = ts.createSourceFile(
    filePath,
    source,
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ true
  );

  const { objects } = analyzeSourceFile(sourceFile);

  // The object event bodies also need to go through the GML transformers.
  // We do this by transpiling each script's code individually.
  const transpiledObjects: ICollectedObject[] = objects.map((collected) => ({
    ...collected,
    scripts: collected.scripts.map(({ scriptName, code }) => ({
      scriptName,
      code: ts.transpileModule(code, transpilerConfig).outputText,
    })),
  }));

  return {
    objects: transpiledObjects,
  };
};

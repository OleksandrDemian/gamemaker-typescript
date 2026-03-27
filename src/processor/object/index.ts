import fs from "fs-extra";
import ts from "typescript";
import {eventByHandler} from "../../events";
import {transpilerConfig} from "../../config/transpiler";

interface ICollectedObject {
  scripts: { scriptName: string; code: string }[];
  className: string;
}

function applyGMLVisitor<T extends ts.Statement>(node: T, context: ts.TransformationContext): T {
  const visitor = (node: ts.Node): ts.Node => {
    // this.property → property
    if (ts.isPropertyAccessExpression(node) && node.expression.kind === ts.SyntaxKind.ThisKeyword) {
      return node.name;
    }
    // === → ==
    if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken) {
      return context.factory.updateBinaryExpression(
        node,
        ts.visitEachChild(node.left, visitor, context),
        context.factory.createToken(ts.SyntaxKind.EqualsEqualsToken),
        ts.visitEachChild(node.right, visitor, context)
      );
    }
    // !== → !=
    if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.ExclamationEqualsEqualsToken) {
      return context.factory.updateBinaryExpression(
        node,
        ts.visitEachChild(node.left, visitor, context),
        context.factory.createToken(ts.SyntaxKind.ExclamationEqualsToken),
        ts.visitEachChild(node.right, visitor, context)
      );
    }
    // this → id
    if (node.kind === ts.SyntaxKind.ThisKeyword) {
      return ts.factory.createIdentifier("id");
    }
    return ts.visitEachChild(node, visitor, context);
  };

  return ts.visitNode(node, visitor) as T;
}

export function processObjectFile(filePath: string): ICollectedObject | null {
  const sourceCode = fs.readFileSync(filePath, "utf-8");
  const sourceFile = ts.createSourceFile(
    "temp.ts",
    sourceCode,
    ts.ScriptTarget.ES5,
    true
  );

  const result: ICollectedObject = {
    scripts: [],
    className: '',
  };

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  for (const statement of sourceFile.statements) {
    if (!ts.isClassDeclaration(statement) || !statement.name) continue;
    //
    // const extendsGMObject = statement.heritageClauses?.some((clause) =>
    //   clause.token === ts.SyntaxKind.ExtendsKeyword &&
    //   clause.types.some(
    //     (t) => ts.isIdentifier(t.expression) && t.expression.text === "GMObject"
    //   )
    // );
    // if (!extendsGMObject) continue;

    result.className = statement.name.text;

    for (const member of statement.members) {
      if (!ts.isMethodDeclaration(member) || !ts.isIdentifier(member.name)) continue;

      const methodName = member.name.text;
      if (!eventByHandler.has(methodName)) continue;

      const bodyStatements = member.body?.statements ?? [];
      const code = bodyStatements
        .map((s) => printer.printNode(ts.EmitHint.Unspecified, s, sourceFile))
        .join("\n");

      result.scripts.push({
        scriptName: methodName,
        code: ts.transpileModule(code, transpilerConfig).outputText,
      });
    }
  }

  return result;
}

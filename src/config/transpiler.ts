import ts from "typescript";

const baseTranspileOptions: ts.TranspileOptions = {
  compilerOptions: {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    preserveConstEnums: true,
    useDefineForClassFields: false,
  },
};

export const transpileObjectConfig: ts.TranspileOptions = {
  ...baseTranspileOptions,
  transformers: {
    before: [
      (context) => (rootNode: any) => {
        const visitor = (node: ts.Node): ts.Node => {
          // this.property → property
          if (
            ts.isPropertyAccessExpression(node) &&
            node.expression.kind === ts.SyntaxKind.ThisKeyword
          ) {
            return node.name;
          }

          // === → ==
          if (
            ts.isBinaryExpression(node) &&
            node.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken
          ) {
            return context.factory.updateBinaryExpression(
              node,
              ts.visitEachChild(node.left, visitor, context),
              context.factory.createToken(ts.SyntaxKind.EqualsEqualsToken),
              ts.visitEachChild(node.right, visitor, context)
            );
          }

          // !== → !=
          if (
            ts.isBinaryExpression(node) &&
            node.operatorToken.kind === ts.SyntaxKind.ExclamationEqualsEqualsToken
          ) {
            return context.factory.updateBinaryExpression(
              node,
              ts.visitEachChild(node.left, visitor, context),
              context.factory.createToken(ts.SyntaxKind.ExclamationEqualsToken),
              ts.visitEachChild(node.right, visitor, context)
            );
          }

          // this (standalone) → id
          if (node.kind === ts.SyntaxKind.ThisKeyword) {
            return ts.factory.createIdentifier("id");
          }

          return ts.visitEachChild(node, visitor, context);
        };

        return ts.visitNode(rootNode, visitor);
      },
    ]
  },
};

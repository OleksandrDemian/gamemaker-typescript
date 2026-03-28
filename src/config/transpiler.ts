import ts from "typescript";

export const transpilerConfig: ts.TranspileOptions = {
  compilerOptions: {
    target: ts.ScriptTarget.ES2015,
    module: ts.ModuleKind.CommonJS,
  },
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

          if (ts.isVariableDeclarationList(node)) {
            // If it's 'const' or 'let', we swap the flag to 0 (which is 'var')
            if (ts.isVariableDeclarationList(node)) {
              return ts.factory.createVariableDeclarationList(
                node.declarations,
                ts.NodeFlags.None // This is where you force it to 'var'
              );
            }
          }

          return ts.visitEachChild(node, visitor, context);
        };

        return ts.visitNode(rootNode, visitor);
      },
    ]
  },
};

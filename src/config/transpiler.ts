import ts from "typescript";

const baseTranspileOptions: ts.TranspileOptions = {
  compilerOptions: {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    preserveConstEnums: true,
    useDefineForClassFields: false,
  },
};

export const transpileScriptConfig: ts.TranspileOptions = {
  ...baseTranspileOptions
};

export const transpileObjectConfig: ts.TranspileOptions = {
  ...baseTranspileOptions,
  transformers: {
    before: [
      (context) => (rootNode) => {
        const visitor = (node: any) => {
          // this replacer
          if (ts.isPropertyAccessExpression(node) && node.expression.kind === ts.SyntaxKind.ThisKeyword) {
            return node.name; // Return just 'property'
          }

          // === replacer
          if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken) {
            return context.factory.updateBinaryExpression(
              node,
              node.left,
              context.factory.createToken(ts.SyntaxKind.EqualsEqualsToken),
              node.right
            );
          }

          // !== replacer
          if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.ExclamationEqualsEqualsToken) {
            return context.factory.updateBinaryExpression(
              node,
              node.left,
              context.factory.createToken(ts.SyntaxKind.ExclamationEqualsToken),
              node.right
            );
          }

          // Handle this as an argument -> "id"
          // We check if the node itself is the 'this' keyword
          if (node.kind === ts.SyntaxKind.ThisKeyword) {
            // If you want the literal string "id", use ts.factory.createStringLiteral("id")
            // If you want the variable name id, use ts.factory.createIdentifier("id")
            return ts.factory.createIdentifier("id");
          }

          return ts.visitEachChild(node, visitor, context);
        };
        return ts.visitNode(rootNode, visitor);
      }
    ]
  },
};

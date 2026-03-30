import ts from "typescript";
import {eventByHandler} from "../events";

// export const transpilerConfig: ts.TranspileOptions = {
//   compilerOptions: {
//     noLib: true,
//     target: ts.ScriptTarget.ES2015,
//     module: ts.ModuleKind.CommonJS,
//   },
//   transformers: {
//     before: [
//       (context) => (rootNode: any) => {
//         const visitor = (node: ts.Node): ts.Node => {
//           // this.property → property
//           if (
//             ts.isPropertyAccessExpression(node) &&
//             node.expression.kind === ts.SyntaxKind.ThisKeyword
//           ) {
//             return node.name;
//           }
//
//           // === → ==
//           if (
//             ts.isBinaryExpression(node) &&
//             node.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken
//           ) {
//             return context.factory.updateBinaryExpression(
//               node,
//               ts.visitEachChild(node.left, visitor, context),
//               context.factory.createToken(ts.SyntaxKind.EqualsEqualsToken),
//               ts.visitEachChild(node.right, visitor, context)
//             );
//           }
//
//           // !== → !=
//           if (
//             ts.isBinaryExpression(node) &&
//             node.operatorToken.kind === ts.SyntaxKind.ExclamationEqualsEqualsToken
//           ) {
//             return context.factory.updateBinaryExpression(
//               node,
//               ts.visitEachChild(node.left, visitor, context),
//               context.factory.createToken(ts.SyntaxKind.ExclamationEqualsToken),
//               ts.visitEachChild(node.right, visitor, context)
//             );
//           }
//
//           // this (standalone) → id
//           if (node.kind === ts.SyntaxKind.ThisKeyword) {
//             return ts.factory.createIdentifier("id");
//           }
//
//           if (ts.isVariableDeclarationList(node)) {
//             // If it's 'const' or 'let', we swap the flag to 0 (which is 'var')
//             if (ts.isVariableDeclarationList(node)) {
//               return ts.factory.createVariableDeclarationList(
//                 node.declarations,
//                 ts.NodeFlags.None // This is where you force it to 'var'
//               );
//             }
//           }
//
//           return ts.visitEachChild(node, visitor, context);
//         };
//
//         return ts.visitNode(rootNode, visitor);
//       },
//     ]
//   },
// };

export interface ICreateTranspilerConfigProps {
  className?: string;
}

export const createTranspilerConfig = (props?: ICreateTranspilerConfigProps): ts.TranspileOptions => {
  return {
    compilerOptions: {
      target: ts.ScriptTarget.ES2015,
      module: ts.ModuleKind.CommonJS,
    },
    transformers: {
      before: [
        (context) => (rootNode: any) => {
          const visitor = (node: ts.Node): ts.Node => {
            // this.property → self.property
            if (
              ts.isPropertyAccessExpression(node) &&
              node.expression.kind === ts.SyntaxKind.ThisKeyword
            ) {
              return ts.factory.createPropertyAccessExpression(
                ts.factory.createIdentifier("self"), // The new receiver
                node.name                                 // The original property name
              );
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

            // this (standalone) → self
            if (node.kind === ts.SyntaxKind.ThisKeyword) {
              return ts.factory.createIdentifier("self");
            }

            if (
              ts.isPropertyAccessExpression(node) &&
              node.expression.kind === ts.SyntaxKind.SuperKeyword
            ) {
              const methodName = node.name.text;
              if (eventByHandler.has(methodName)) {
                return ts.factory.createIdentifier(`event_inherited`);
              } else {
                return ts.factory.createIdentifier(`__super_${props?.className}_${methodName}`);
              }
            }

            return ts.visitEachChild(node, visitor, context);
          };

          return ts.visitNode(rootNode, visitor);
        },
      ],
      after: [
        (context) => (rootNode: any) => {
          const visitor = (node: ts.Node): ts.Node => {
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
      ],
    },
  }
};

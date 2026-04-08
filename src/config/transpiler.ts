import ts from "typescript";
import {eventByHandler} from "../events";

export interface ICreateObjectTranspilerConfigProps {
  className?: string;
}

export const createObjectTranspilerConfig = (props?: ICreateObjectTranspilerConfigProps): ts.TranspileOptions => {
  return {
    compilerOptions: {
      target: ts.ScriptTarget.ES2015,
      module: ts.ModuleKind.CommonJS,
      alwaysStrict: false,
      strict: false,
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

export const createScriptTranspilerConfig = (): ts.TranspileOptions => {
  return {
    compilerOptions: {
      target: ts.ScriptTarget.ES2015,
      module: ts.ModuleKind.CommonJS,
      alwaysStrict: false,
      strict: false,
    },
    transformers: {
      before: [
        (context) => (rootNode: any) => {
          const visitor = (node: ts.Node): ts.Node => {
            if (ts.isClassDeclaration(node) && node.name) {
              const className = node.name.text;

              let parentClassName = "";
              if (node.heritageClauses) {
                for (const clause of node.heritageClauses) {
                  if (clause.token === ts.SyntaxKind.ExtendsKeyword) {
                    parentClassName = clause.types[0].expression.getText();
                  }
                }
              }

              let constructorParams: ts.NodeArray<ts.ParameterDeclaration> = ts.factory.createNodeArray();
              let constructorBody: ts.Statement[] = [];
              let superArgs: string = "";
              const bodyStatements: ts.Statement[] = [];

              node.members.forEach((member) => {
                // 1. Constructor: Get params and body
                if (ts.isConstructorDeclaration(member)) {
                  constructorParams = member.parameters;
                  member.body?.statements.forEach(stmt => {
                    // 2. Extract super() arguments and remove the statement from the body
                    if (ts.isExpressionStatement(stmt) &&
                      ts.isCallExpression(stmt.expression) &&
                      stmt.expression.expression.kind === ts.SyntaxKind.SuperKeyword) {

                      superArgs = stmt.expression.arguments.map(arg => arg.getText()).join(", ");
                    } else {
                      bodyStatements.push(stmt);
                    }
                  });
                }

                else if (ts.isMethodDeclaration(member)) {
                  const methodName = member.name.getText();
                  const methodFunc = ts.factory.createFunctionExpression(
                    undefined, undefined, undefined, undefined,
                    member.parameters, member.type, member.body!
                  );

                  if (parentClassName) {
                    const superMethod = ts.factory.createExpressionStatement(
                      ts.factory.createBinaryExpression(
                        ts.factory.createIdentifier(`static __super_${className}_${methodName}`),
                        ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                        ts.factory.createIdentifier(methodName),
                      ),
                    );
                    bodyStatements.push(superMethod);
                  }

                  const staticMethod = ts.factory.createExpressionStatement(
                    ts.factory.createBinaryExpression(
                      ts.factory.createIdentifier(`static ${methodName}`),
                      ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                      methodFunc
                    )
                  );
                  bodyStatements.push(staticMethod);
                }

                else if (ts.isPropertyDeclaration(member) && member.initializer) {
                  const propName = member.name.getText();
                  const propAssignment = ts.factory.createExpressionStatement(
                    ts.factory.createBinaryExpression(
                      ts.factory.createPropertyAccessExpression(
                        ts.factory.createIdentifier("self"),
                        propName
                      ),
                      ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                      member.initializer
                    )
                  );
                  bodyStatements.push(propAssignment);
                }
              });

              const fullBody = ts.factory.createBlock(
                [...bodyStatements, ...constructorBody],
                true
              );

              const inheritanceSuffix = parentClassName
                ? `__GML_EXTENDS_${parentClassName}_ARGS_${superArgs}_GML_END`
                : "";
              const gmlHeader = ts.factory.createIdentifier(`__TS_CTR__${className}__TS_CTR_END${inheritanceSuffix}`);

              const funcDecl = ts.factory.createFunctionDeclaration(
                undefined,
                undefined,
                gmlHeader,
                undefined,
                constructorParams,
                undefined,
                fullBody
              );

              return ts.visitEachChild(funcDecl, visitor, context);
            }

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

            // super.methodName(...) → __super_ClassName_methodName(...)
            if (
              ts.isPropertyAccessExpression(node) &&
              node.expression.kind === ts.SyntaxKind.SuperKeyword
            ) {
              // We need to find the enclosing class to get the 'className'
              // todo: see if this can be improved
              let parent: ts.Node | undefined = node.parent;
              let className = "Unknown";

              while (parent) {
                if (ts.isClassDeclaration(parent) && parent.name) {
                  className = parent.name.text;
                  break;
                }
                parent = parent.parent;
              }

              return ts.factory.createIdentifier(`__super_${className}_${node.name.text}`);
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

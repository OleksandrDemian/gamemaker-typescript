import ts from "typescript";
import {eventByHandler, OnCreateHandler} from "../../events";
import {createTranspilerConfig} from "../../config/transpiler";
import {readFileSync} from "../../utils/files";

interface ICollectedObject {
  scripts: { scriptName: string; code: string }[];
  className: string;
  extendedClassName?: string;
}

const getExtendedClass = (statement: ts.ClassDeclaration) => {
  if (statement.heritageClauses) {
    for (const clause of statement.heritageClauses) {
      // 2. We only care about the 'extends' keyword
      if (clause.token === ts.SyntaxKind.ExtendsKeyword) {
        // 3. 'extends' can only have one type in TS, so we take the first expression
        const parentType = clause.types[0];

        // 4. Get the text of the identifier (e.g., "Player" or "GMObject")
        if (ts.isIdentifier(parentType.expression)) {
          return parentType.expression.text;
        }
      }
    }
  }

  return undefined;
}

export function processObjectFile(filePath: string): ICollectedObject | null {
  const sourceCode = readFileSync(filePath);
  const sourceFile = ts.createSourceFile(
    "temp.ts",
    sourceCode,
    ts.ScriptTarget.ES5,
    true
  );

  const result: ICollectedObject = {
    scripts: [],
    className: '',
    extendedClassName: '',
  };

  const preCreateScripts: string[] = [];
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed, removeComments: false });

  for (const statement of sourceFile.statements) {
    if (!ts.isClassDeclaration(statement) || !statement.name) continue;

    result.extendedClassName = getExtendedClass(statement);
    result.className = statement.name.text;

    for (const member of statement.members) {
      if (!ts.isMethodDeclaration(member) || !ts.isIdentifier(member.name)) continue;

      const methodName = member.name.text;
      const transpilerConfig = createTranspilerConfig({
        className: result.className,
      });

      const bodyStatements = member.body?.statements ?? [];
      const bodyCode = bodyStatements
        .map((s) => printer.printNode(ts.EmitHint.Unspecified, s, sourceFile))
        .join("\n");

      if (eventByHandler.has(methodName)) {
        result.scripts.push({
          scriptName: methodName,
          code: ts.transpileModule(bodyCode, transpilerConfig).outputText,
        });
      } else {
        const params = member.parameters
          .map((p) => {
            // Create a synthetic version of the parameter that HAS an initializer
            // but NO type annotation.
            const cleanParam = ts.factory.createParameterDeclaration(
              undefined,
              p.dotDotDotToken,
              p.name,
              undefined, // This removes the '?' optional marker
              undefined, // This removes the ': type' annotation
              p.initializer // This KEEPS the '= 3'
            );

            // Print this "clean" node using ESNext target
            return printer.printNode(ts.EmitHint.Unspecified, cleanParam, sourceFile);
          })
          .join(", ");

        const methodDefinition = [
          result.extendedClassName === "GMObject" ? "" : `__super_${result.className}_${methodName} = ${methodName};`,
          `${methodName} = function(${params}) {\n${bodyCode}}`,
        ].join("\n");
        preCreateScripts.push(
          ts.transpileModule(methodDefinition, transpilerConfig).outputText
        );
      }
    }

    break; // only compile first class
  }

  /**
   * SPAGHETTI CODE SECTION
   * might fix at some point, maybe not, will see. If it ain't broken don't fix it
   */
  const onCreateScript = result.scripts.find((scr) => scr.scriptName === OnCreateHandler);

  if (preCreateScripts.length > 0) {
    const pre = preCreateScripts.join("\n\n");

    if (onCreateScript) {
      onCreateScript.code = [
        `event_inherited();`, // always call event_inherited() when onCreate
        `// Object methods from ${result.className}`,
        pre,
        "// End object methods\n",
        onCreateScript.code,
      ].join("\n");
    } else {
      result.scripts.push({
        scriptName: OnCreateHandler,
        code: `event_inherited();\n\n${pre}`,
      });
    }
  } else {
    if (onCreateScript) {
      onCreateScript.code = [
        "event_inherited();", // onCreate event_inherited alwasy first!
        onCreateScript.code.replace("event_inherited();", ""), // remove event_inherited(); if present
      ].join("\n\n");
    } else {
      result.scripts.push({
        scriptName: OnCreateHandler,
        code: `event_inherited();`,
      });
    }
  }

  return result;
}

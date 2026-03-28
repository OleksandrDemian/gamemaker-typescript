import ts from "typescript";
import {eventByHandler, OnCreateHandler} from "../../events";
import {transpilerConfig} from "../../config/transpiler";
import {readFileSync} from "../../utils/files";

interface ICollectedObject {
  scripts: { scriptName: string; code: string }[];
  className: string;
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
  };

  const preCreateScripts: string[] = [];
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed, removeComments: false });

  for (const statement of sourceFile.statements) {
    if (!ts.isClassDeclaration(statement) || !statement.name) continue;

    result.className = statement.name.text;

    for (const member of statement.members) {
      if (!ts.isMethodDeclaration(member) || !ts.isIdentifier(member.name)) continue;

      const methodName = member.name.text;

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

        const methodDefinition = `${methodName} = function(${params}) {\n${bodyCode}}`;
        preCreateScripts.push(
          ts.transpileModule(methodDefinition, transpilerConfig).outputText
        );
      }
    }

    break; // only compile first class
  }

  if (preCreateScripts.length > 0) {
    const onCreateScript = result.scripts.find((scr) => scr.scriptName === OnCreateHandler);
    const pre = preCreateScripts.join("\n\n");
    if (onCreateScript) {
      onCreateScript.code = [
        `// Object methods from ${result.className}`,
        pre,
        "// End object methods\n",
        onCreateScript.code,
      ].join("\n");
    } else {
      result.scripts.push({
        scriptName: OnCreateHandler,
        code: pre,
      })
    }
  }

  return result;
}

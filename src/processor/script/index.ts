import ts from "typescript";
import fs from "fs-extra";
import {createScriptTranspilerConfig} from "../../config/transpiler";

export interface IProcessedScriptFile {
  code: string;
}

export const processScriptFile = (filePath: string): IProcessedScriptFile => {
  const source = fs.readFileSync(filePath, "utf-8");
  const script = ts.transpileModule(source, createScriptTranspilerConfig());
  const code = script.outputText
    // Classes with inheritance
    .replace(
      /function\s+__TS_CTR__(\w+)__TS_CTR_END__GML_EXTENDS_(\w+)_ARGS_(.*?)_GML_END\s*\(([^)]*)\)\s*\{/g,
      'function $1($4) : $2($3) constructor {'
    )
    // Classes without inheritance
    .replace(
      /function\s+__TS_CTR__(\w+)__TS_CTR_END\s*\(([^)]*)\)\s*\{/g,
      'function $1($2) constructor {'
    );

  return {
    code,
  };
};

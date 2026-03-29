import ts from "typescript";
import fs from "fs-extra";
import {createTranspilerConfig} from "../../config/transpiler";

export interface IProcessedScriptFile {
  code: string;
}
export const processScriptFile = (filePath: string): IProcessedScriptFile => {
  const source = fs.readFileSync(filePath, "utf-8");
  const script = ts.transpileModule(source, createTranspilerConfig());

  return {
    code: script.outputText,
  };
};

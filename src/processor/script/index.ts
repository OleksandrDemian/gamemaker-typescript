import ts from "typescript";
import fs from "fs-extra";
import {transpilerConfig} from "../../config/transpiler";

export interface IProcessedScriptFile {
  code: string;
}
export const processScriptFile = (filePath: string): IProcessedScriptFile => {
  const source = fs.readFileSync(filePath, "utf-8");
  const script = ts.transpileModule(source, transpilerConfig);

  return {
    code: script.outputText,
  };
};

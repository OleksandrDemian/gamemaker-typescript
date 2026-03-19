import ts from "typescript";
import fs from "fs-extra";
import {transpileOptions} from "../../config/transpiler";
import path from "node:path";
import {createScript, IScript} from "../../entities/script";
import {DEFAULT_SCRIPT_FOLDER} from "../../const";

export interface IProcessScriptFile {
  script: IScript;
  code: string;
}

export const processScriptFile = (filePath: string) : IProcessScriptFile=> {
  const source = fs.readFileSync(filePath, "utf-8");

  const fileName = path.parse(filePath).name;
  const result = ts.transpileModule(source, transpileOptions);

  return {
    script: createScript({
      name: fileName,
      folder: DEFAULT_SCRIPT_FOLDER, // for now mock folder
    }),
    code: result.outputText,
  };
};

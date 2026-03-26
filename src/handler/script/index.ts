import path from "node:path";
import fs from "fs-extra";
import {IProjectHandler} from "../project";
import {processScriptFile} from "../../processor/script";

const findTsFile = (folder: string): string | undefined => {
  // find .ts file
  const files = fs.readdirSync(folder);
  for (const file of files) {
    if (file.endsWith(".ts")) {
      // our code file
      return file;
    }
  }

  return undefined;
}

const cleanupScriptFolder = (scriptFolder: string) => {
  fs.readdirSync(scriptFolder).forEach(file => {
    if (file.endsWith(".gml")) {
      // gml script, remove
      fs.removeSync(path.join(scriptFolder, file));
    }
  });
};

export interface IScriptHandler {
  compile(): boolean;
}

export const createScriptHandler = (project: IProjectHandler, name: string): IScriptHandler => {
  const resource = project.getResource("scripts", name);
  if (!resource) {
    throw new Error(`Unable to create object handler for ${name}`);
  }

  return {
    compile () {
      const folder = path.dirname(resource.id.path); // resource folder
      const tsSource = findTsFile(folder);

      if (!tsSource) {
        return false;
      }

      const result = processScriptFile(path.join(folder, tsSource));

      cleanupScriptFolder(folder);
      fs.outputFileSync(path.join(folder, resource.id.name + ".gml"), result.code, "utf8");
      return true;
    },
  };
};

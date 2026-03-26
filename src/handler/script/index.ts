import path from "node:path";
import fs from "fs-extra";
import {IProjectHandler} from "../project";
import {IScript} from "../../entities/script";
import {IProjectResource} from "../../entities/project";

const cleanupScriptFolder = (scriptFolder: string) => {
  fs.readdirSync(scriptFolder).forEach(file => {
    if (file.endsWith(".gml")) {
      // gml script, remove
      fs.removeSync(path.join(scriptFolder, file));
    }
  });
};

export interface IScriptHandler {
  exists(): boolean;
  create (script: IScript): IProjectResource;
  attachScript(script: string): void;
}

export const createScriptHandler = (project: IProjectHandler, name: string): IScriptHandler => {
  return {
    exists: () => project.hasRes("scripts", name),
    create: (script: IScript) => {
      const metaPath = path.join("scripts", name, name + ".yy");
      fs.outputFileSync(metaPath, JSON.stringify(script));
      return project.addResource(name, metaPath);
    },
    attachScript: (code: string) => {
      const res = project.getRes("scripts", name);
      if (res) {
        const folder = path.dirname(res.id.path); // resource folder
        cleanupScriptFolder(folder);
        fs.outputFileSync(path.join(folder, res.id.name + ".gml"), code, "utf8");
      }
    },
  };
};

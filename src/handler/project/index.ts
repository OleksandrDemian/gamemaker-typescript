import fs from "fs-extra";
import {createProjectFolder, IProject, IProjectResource} from "../../entities/project";
import js5 from "json5";
import {createObjectHandler, IObjectHandler} from "../object";
import {createScriptHandler, IScriptHandler} from "../script";

const findProjectFile = (): string => {
  // find .yyp file
  const files = fs.readdirSync(".");
  for (const file of files) {
    if (file.endsWith(".yyp")) {
      // project file
      return file;
    }
  }

  throw new Error("Project file not found");
}

const readProjectFile = (path: string): IProject => {
  const file = fs.readFileSync(path, "utf8");
  return js5.parse(file) as IProject;
};

export interface IProjectHandler {
  flush (reload?: boolean): void;
  addResource (name: string, path: string): IProjectResource;
  addFolder (name: string): void;
  getObjectHandler (name: string): IObjectHandler;
  getScriptHandler (name: string): IScriptHandler;
  iterateResources (cb: (res: IProjectResource) => void): void;
  getResource(type: 'scripts' | 'objects', name: string): IProjectResource | undefined;
}

export const createProjectHandler = (): IProjectHandler => {
  const projectFilePath = findProjectFile();
  let project = readProjectFile(projectFilePath);

  const flush = (reload = true) => {
    fs.writeFileSync(projectFilePath, JSON.stringify(project, null, 2), {
      encoding: "utf8"
    });

    if (reload) {
      project = readProjectFile(projectFilePath);
    }
  };

  return {
    flush,
    getObjectHandler (name: string) {
      return createObjectHandler(this, name);
    },

    getScriptHandler (name: string) {
      return createScriptHandler(this, name);
    },

    iterateResources (cb: (res: IProjectResource) => void) {
      project.resources.forEach(cb);
    },

    getResource(type, name): IProjectResource | undefined {
      for (const res of project.resources) {
        if (res.id.name === name && res.id.path.startsWith(type)) {
          return res;
        }
      }

      return undefined;
    },
    addResource (name: string, path: string): IProjectResource {
      // check if resource exists
      const res = project.resources.find(resource => {
        return resource.id.name === name;
      });

      if (res) {
        return res;
      }

      const resource: IProjectResource = {
        id: {
          name,
          path,
        }
      };
      project.resources.push(resource);
      return resource;
    },

    addFolder (name: string) {
      // check if resource exists
      const exists = project.Folders.some(folder => {
        return folder.name === name;
      });

      if (!exists) {
        project.Folders.push(createProjectFolder(name));
        return true;
      }

      return false;
    },
  };
};

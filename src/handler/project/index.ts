import fs from "fs-extra";
import {createProjectFolder, IProject, IProjectResource} from "../../entities/project";
import js5 from "json5";
import {createObjectHandler, IObjectHandler} from "../object";
import {createScriptHandler, IScriptHandler} from "../script";
import {GENERATED_PREFIX} from "../../const";

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
  removeResource (name: string): void;
  addFolder (name: string): void;
  addRoom (name: string, path: string): boolean;
  getObjectHandler (name: string): IObjectHandler;
  getScriptHandler (name: string): IScriptHandler;
  iterateResources (cb: (res: IProjectResource) => void): void;
  getRes (type: 'object' | 'scripts', name: string): IProjectResource | undefined;
  hasRes (type: 'object' | 'scripts', name: string): boolean;
  listGeneratedScripts (): IProjectResource[];
}

export interface ICreateProjectHandlerProps {
  autoFlush: boolean;
}
export const createProjectHandler = (props: ICreateProjectHandlerProps): IProjectHandler => {
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
      if (props.autoFlush) {
        flush();
      }

      return resource;
    },
    removeResource (name: string) {
      project.resources = project.resources.filter((res) => {
        return res.id.name !== name;
      });
    },

    addFolder (name: string) {
      // check if resource exists
      const exists = project.Folders.some(folder => {
        return folder.name === name;
      });

      if (!exists) {
        project.Folders.push(createProjectFolder(name));
        if (props.autoFlush) {
          flush();
        }
        return true;
      }

      return false;
    },
    addRoom (name: string, path: string): boolean {
      const exists = project.RoomOrderNodes.some(room => {
        return room.roomId.name === name;
      });

      if (!exists) {
        project.RoomOrderNodes.push({
          roomId: {
            name,
            path,
          }
        });
        if (props.autoFlush) {
          flush();
        }
        return true;
      }

      return false;
    },

    getObjectHandler (name: string) {
      return createObjectHandler(this, name);
    },

    getScriptHandler (name: string) {
      return createScriptHandler(this, name);
    },

    iterateResources (cb: (res: IProjectResource) => void) {
      project.resources.forEach(cb);
    },

    getRes(type, name): IProjectResource | undefined {
      for (const res of project.resources) {
        if (res.id.name === name && res.id.path.startsWith(type)) {
          return res;
        }
      }

      return undefined;
    },
    hasRes(type, name): boolean {
      for (const res of project.resources) {
        if (res.id.name === name && res.id.path.startsWith(type)) {
          return true;
        }
      }

      return false;
    },
    listGeneratedScripts (): IProjectResource[] {
      return project.resources.filter((res) => {
        return res.id.name.startsWith(GENERATED_PREFIX);
      });
    }
  };
};

import fs from "fs-extra";
import {createProjectFolder, IProject, IProjectResource} from "../../entities/project";
import js5 from "json5";
import {createObjectHandler} from "../object";
import {createScriptHandler} from "../script";

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

export const createProjectHandler = () => {
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
    addResource: (name: string, path: string): boolean => {
      // check if resource exists
      const exists = project.resources.some(resource => {
        return resource.id.name === name;
      });

      if (!exists) {
        project.resources.push({
          id: {
            name,
            path,
          }
        });
        flush();
        return true;
      }

      return false;
    },
    addFolder: (name: string) => {
      // check if resource exists
      const exists = project.Folders.some(folder => {
        return folder.name === name;
      });

      if (!exists) {
        project.Folders.push(createProjectFolder(name));
        flush();
        return true;
      }

      return false;
    },
    addRoom: (name: string, path: string): boolean => {
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
        flush();
        return true;
      }

      return false;
    },

    getObjectHandler: (name: string) => {
      return createObjectHandler(name);
    },

    getScriptHandler: (name: string) => {
      return createScriptHandler(name);
    },

    iterateResources: (cb: (res: IProjectResource) => void) => {
      project.resources.forEach(cb);
    },
  };
};

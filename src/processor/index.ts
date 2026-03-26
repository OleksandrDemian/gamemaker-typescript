import path from "node:path";
import {processObjectFile} from "./object";
import {IProjectHandler} from "../handler/project";
import {DEFAULT_OBJECT_FOLDER, DEFAULT_SCRIPT_FOLDER} from "../const";
import {processProjectFile} from "./project";

export interface IProcessTypescriptFileProps {
  filePath: string;
  projectHandler: IProjectHandler;
  onResourceUpdate?: (type: 'object' | 'script', name: string) => void;
  onResourceCreate?: (type: 'object' | 'script', name: string) => void;
}

export const processTypescriptFile = ({
  filePath,
  projectHandler,
  onResourceCreate,
  onResourceUpdate,
}: IProcessTypescriptFileProps) => {
  try {
    const { objects, script } = processObjectFile(filePath);

    projectHandler.addFolder(DEFAULT_OBJECT_FOLDER);

    for (const obj of objects) {
      const objectHandler = projectHandler.getObjectHandler(obj.obj.name);

      if (objectHandler.exists()) {
        objectHandler.attachScripts(obj.scripts);
        onResourceUpdate?.("object", obj.obj.name);
      } else {
        console.log(`Could not bind object "${obj.obj.name}" to a GameMaker object. Create object "${obj.obj.name}" in GameMaker first`);
      }
    }

    if (script) {
      projectHandler.addFolder(DEFAULT_SCRIPT_FOLDER);

      const scriptHandler = projectHandler.getScriptHandler(script.script.name);
      if (scriptHandler.exists()) {
        scriptHandler.attachScript(script.code);
        onResourceUpdate?.("script", script.script.name);
      } else {
        scriptHandler.create(script.script);
        scriptHandler.attachScript(script.code);
        onResourceCreate?.("script", script.script.name);
      }
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("Failed to process file ", filePath, e.message);
    } else {
      console.error("Failed to process file ", filePath);
    }
  }
};

export const processFile = (file: string, projectHandler: IProjectHandler) => {
  const nameInfo = path.parse(file);
  const relative = path.relative(process.cwd(), file);

  if (file.startsWith("src") && nameInfo.ext === ".ts") {
    // sourcecode
    console.time("Process typescript " + relative);
    processTypescriptFile({
      filePath: file,
      projectHandler,
    });
    console.timeEnd("Process typescript " + relative);
  } else if (nameInfo.ext === ".yyp") {
    console.time("Process project");
    processProjectFile(projectHandler);
    console.timeEnd("Process project");
  }
};

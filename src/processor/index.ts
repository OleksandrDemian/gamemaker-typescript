import path from "node:path";
import {processObjectFile} from "./object";
import {createProjectHandler} from "../handler/project";
import {DEFAULT_OBJECT_FOLDER, DEFAULT_SCRIPT_FOLDER} from "../const";
import {processScriptFile} from "./script";

const processObject = (filePath: string) => {
  const result = processObjectFile(filePath);

  const projectHandler = createProjectHandler();
  const objectHandler = projectHandler.getObjectHandler(result.object.name);

  objectHandler.upsertObject(result.object, result.scripts);
  projectHandler.addFolder(DEFAULT_OBJECT_FOLDER);
  projectHandler.addResource(result.object.name, objectHandler.getPath());
};

const processScript = (filePath: string) => {
  const result = processScriptFile(filePath);

  const projectHandler = createProjectHandler();
  const scriptHandler = projectHandler.getScriptHandler(result.script.name);

  scriptHandler.upsertScript(result.script, result.code);
  projectHandler.addFolder(DEFAULT_SCRIPT_FOLDER);
  projectHandler.addResource(result.script.name, scriptHandler.getPath());
};

export const processFile =(file: string) => {
  const baseName = path.basename(file);
  if (baseName.match(new RegExp("^obj_.+\..ts$"))) {
    processObject(file);
  } else if (baseName.match(new RegExp("^scr_.+\..ts$"))) {
    processScript(file);
  }
};
import path from "node:path";
import {processObjectFile} from "./object";
import {createProjectHandler} from "../handler/project";
import {DEFAULT_OBJECT_FOLDER, DEFAULT_SCRIPT_FOLDER} from "../const";
import {processScriptFile} from "./script";
import {processProjectFile} from "./project";

const processObject = (filePath: string) => {
  try {
    const result = processObjectFile(filePath);

    const projectHandler = createProjectHandler();
    const objectHandler = projectHandler.getObjectHandler(result.object.name);

    objectHandler.upsertObject(result.object, result.scripts);
    projectHandler.addFolder(DEFAULT_OBJECT_FOLDER);
    projectHandler.addResource(result.object.name, objectHandler.getPath());
  } catch (e) {
    console.error("Failed to process object ", filePath);
    throw e;
  }
};

const processScript = (filePath: string) => {
  try {
    const result = processScriptFile(filePath);

    const projectHandler = createProjectHandler();
    const scriptHandler = projectHandler.getScriptHandler(result.script.name);

    scriptHandler.upsertScript(result.script, result.code);
    projectHandler.addFolder(DEFAULT_SCRIPT_FOLDER);
    projectHandler.addResource(result.script.name, scriptHandler.getPath());
  } catch (e) {
    console.error("Failed to process object ", filePath);
    throw e;
  }
};

export const processFile = (file: string) => {
  const nameInfo = path.parse(file);
  const relative = path.relative(process.cwd(), file);
  if (nameInfo.ext === ".ts" && nameInfo.name.startsWith("obj_")) {
    console.time("Process object " + relative);
    processObject(file);
    console.timeEnd("Process object " + relative);
  } else if (nameInfo.ext === ".ts" && nameInfo.name.startsWith("scr_")) {
    console.time("Process script " + relative);
    processScript(file);
    console.timeEnd("Process script " + relative);
  } else if (nameInfo.ext === ".yyp") {
    console.time("Process project");
    processProjectFile();
    console.timeEnd("Process project");
  }
};

import path from "node:path";
import {processObjectFile} from "./object";
import {createProjectHandler} from "../handler/project";
import {DEFAULT_OBJECT_FOLDER, DEFAULT_SCRIPT_FOLDER} from "../const";
import {processProjectFile} from "./project";
import {createScriptHandler} from "../handler/script";

const processTypescriptFile = (filePath: string) => {
  try {
    const { objects, script } = processObjectFile(filePath);

    const projectHandler = createProjectHandler();
    projectHandler.addFolder(DEFAULT_OBJECT_FOLDER);

    for (const obj of objects) {
      const objectHandler = projectHandler.getObjectHandler(obj.obj.name);
      objectHandler.upsertObject(obj.obj, obj.scripts);
      projectHandler.addResource(obj.obj.name, objectHandler.getPath());
    }

    if (script) {
      projectHandler.addFolder(DEFAULT_SCRIPT_FOLDER);

      const scriptHandler = createScriptHandler(script.script.name);
      scriptHandler.upsertScript(script.script, script.code);
      projectHandler.addResource(script.script.name, scriptHandler.getPath());
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("Failed to process file ", filePath, e.message);
    } else {
      console.error("Failed to process file ", filePath);
    }
  }
};

export const processFile = (file: string) => {
  const nameInfo = path.parse(file);
  const relative = path.relative(process.cwd(), file);

  if (file.startsWith("src") && nameInfo.ext === ".ts") {
    // sourcecode
    console.time("Process typescript " + relative);
    processTypescriptFile(file);
    console.timeEnd("Process typescript " + relative);
  } else if (nameInfo.ext === ".yyp") {
    console.time("Process project");
    processProjectFile();
    console.timeEnd("Process project");
  }
};

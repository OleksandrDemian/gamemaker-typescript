import {setupTsProject} from "./setup";
import path from "node:path";
import {createProjectHandler} from "./handler/project";
import {OBJECT_PATH_PREFIX, SCRIPT_PATH_PREFIX} from "./const";
import {processProjectFile, writeTypesFile} from "./processor/project";

const compile = () => {
  const srcPath = process.cwd();

  console.log("Compiling TS project", srcPath);
  console.time("Compile project");

  const projectHandler = createProjectHandler();
  const customClassesMap: Map<string, string> = new Map();

  projectHandler.iterateResources((res) => {
    if (res.id.path.startsWith(OBJECT_PATH_PREFIX)) {
      const objectHandler = projectHandler.getObjectHandler(res.id.name);
      objectHandler.compile({
        onEmitClass (objName, className) {
          customClassesMap.set(objName, className);
        },
      });
    } else if (res.id.path.startsWith(SCRIPT_PATH_PREFIX)) {
      const scriptHandler = projectHandler.getScriptHandler(res.id.name);
      scriptHandler.compile();
    }
  });

  processProjectFile(projectHandler, customClassesMap);
  console.timeEnd("Compile project");
};

// const watch = () => {
//   // Watch files
//   console.log("Watching for files");
//   chokidar
//     .watch("./", {
//       // ignoreInitial: true, skip files when starting the service
//       /// todo: ignore useless files
//     })
//     .on("add", compileSingleFile)
//     .on("change", compileSingleFile);
// };

const health = () => {
  console.log("Looks healthy");
};

const setup = (force: string = "false") => {
  setupTsProject({
    currentFolder: process.cwd(),
    librarySourceRoot: path.join(__dirname, ".."),
    forceSetup: force === "true",
  });
};

const [command = "compile", ...rest] = process.argv.slice(2);

switch (command) {
  case "compile": compile(); break;
  // remove watch for now, the extension will build project before running.
  // otherwise run "gmts compile" manually to rebuild when needed
  // on demand compile will come later
  // case "watch": watch(); break;
  case "health": health(); break;
  case "setup": setup(rest[0]); break;
}

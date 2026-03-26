import chokidar from "chokidar";
import fs from "fs-extra";
import {processFile, processTypescriptFile} from "./processor";
import {setupTsProject} from "./setup";
import path from "node:path";
import {createProjectHandler} from "./handler/project";
import {GENERATED_PREFIX} from "./const";

const compile = () => {
  const srcPath = path.join(process.cwd(), "src");

  console.log("Compiling TS project", srcPath);
  console.time("Compile project");
  const result = fs.readdirSync(srcPath, { recursive: true, encoding: "utf8" });
  const generatedScriptsRegistry = new Set<string>; // track all scripts

  const projectHandler = createProjectHandler({
    autoFlush: false,
  });

  // for now let's remove all scripts and rebuild them from scratch
  // not ideal since it will have performance impact, but for now it is "good enough"
  for (const file of result) {
    if (path.extname(file) !== ".ts") {
      // skip non ts files
      continue;
    }

    processTypescriptFile({
      filePath: path.join("src", file),
      projectHandler,
      onResourceCreate: (type, name) => {
        if (type === "script" && name.startsWith(GENERATED_PREFIX)) {
          generatedScriptsRegistry.add(name);
        }
      },
      onResourceUpdate: (type, name) => {
        if (type === "script" && name.startsWith(GENERATED_PREFIX)) {
          generatedScriptsRegistry.add(name);
        }
      },
    });
  }

  const filesToDelete = projectHandler
    // todo: iterates over an array twice, improve
    .listGeneratedScripts()
    .filter((f) => {
      // we will remove this file
      return !generatedScriptsRegistry.has(f.id.name);
    });

  for (const resToDelete of filesToDelete) {
    projectHandler.removeResource(resToDelete.id.name);
    const basePath = path.dirname(resToDelete.id.path);
    fs.removeSync(basePath);
  }

  projectHandler.flush();
  console.timeEnd("Compile project");
};

const compileSingleFile = (filePath: string) => {
  const project = createProjectHandler({
    autoFlush: false,
  });

  processFile(filePath, project);
  project.flush();
};

const watch = () => {
  // Watch files
  console.log("Watching for files");
  chokidar
    .watch("./", {
      // ignoreInitial: true, skip files when starting the service
      /// todo: ignore useless files
    })
    .on("add", compileSingleFile)
    .on("change", compileSingleFile);
};

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

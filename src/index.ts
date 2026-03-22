import chokidar from "chokidar";
import fs from "fs-extra";
import {processFile} from "./processor";
import {setupTsProject} from "./setup";
import path from "node:path";

const compile = () => {
  console.log("Compiling TS project");
  console.time("Compile project");
  const result = fs.readdirSync(process.cwd(), { recursive: true, encoding: "utf8" });

  for (const file of result) {
    processFile(file);
  }

  console.timeEnd("Compile project");
};

const watch = () => {
  // Watch files
  console.log("Watching for files");
  chokidar
    .watch("./", {
      // ignoreInitial: true, skip files when starting the service
      /// todo: ignore useless files
    })
    .on("add", processFile)
    .on("change", processFile);
};

const health = () => {
  console.log("Looks healthy");
};

const setup = (force: string = "false") => {
  setupTsProject({
    currentFolder: process.cwd(),
    assetsFolder: path.join(__dirname, "..", "gamemaker-config"),
    forceSetup: force === "true",
  });
};

const [command = "compile", ...rest] = process.argv.slice(2);

switch (command) {
  case "compile": compile(); break;
  case "watch": watch(); break;
  case "health": health(); break;
  case "setup": setup(rest[0]); break;
}

import chokidar from "chokidar";
import fs from "fs-extra";
import {processFile} from "./processor";

const compile = () => {
  console.log("Compiling TS project");
  fs.readdir(
    "./", { recursive: true, encoding: "utf8" },
    (error, result) => {
      for (const file of result) {
        processFile(file);
      }
    },
  );
};

const watch = () => {
  // Watch files
  console.log("Watching for files");
  chokidar
    .watch("./", {
      ignoreInitial: true,
      /// todo: ignore useless files
    })
    .on("add", processFile)
    .on("change", processFile);
};

const health = () => {
  console.log("Looks healthy");
};

const [command = "compile"] = process.argv.slice(2);

switch (command) {
  case "compile": compile(); break;
  case "watch": watch(); break;
  case "health": health(); break;
}

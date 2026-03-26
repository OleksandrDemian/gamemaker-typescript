import fs from "fs-extra";
import path from "node:path";
import {createExtension, createExtensionFile} from "../entities/extension";
import {DEFAULT_EXTENSIONS_FOLDER} from "../const";
import {createProjectHandler} from "../handler/project";

export interface ISetupProjectProps {
  currentFolder: string;
  librarySourceRoot: string;
  forceSetup: boolean;
}

const extName = "GameMaker_Typescript";

const setupExtension = (props: ISetupProjectProps) => {
  const projectHandler = createProjectHandler();

  const extension = createExtension({
    name: extName,
    folder: DEFAULT_EXTENSIONS_FOLDER,
    files: [
      createExtensionFile({
        filename: "pre_project_step.bat", // windows
      }),
    ],
  });

  const metaFilePath = path.join(props.currentFolder, "extensions", extName, extName + ".yy");

  // copy compilation trigger script
  fs.outputFileSync(
    metaFilePath,
    JSON.stringify(extension, null, 2),
    {
      encoding: "utf8",
    }
  );
  fs.copyFileSync(
    path.join(props.librarySourceRoot, "gamemaker-config", "extensions", "files", "pre_project_step.bat"),
    path.join(props.currentFolder, "extensions", extName, "pre_project_step.bat")
  );

  projectHandler.addFolder(DEFAULT_EXTENSIONS_FOLDER);
  projectHandler.addResource(extName, metaFilePath);
  projectHandler.flush();
};

export const setupTsProject = (props: ISetupProjectProps) => {
  if (!props.forceSetup) {
    try {
      const tsConfig = fs.readFileSync(path.join(props.currentFolder, "tsconfig.json"), "utf8");
      if (tsConfig) {
        console.log("Setup already done");
        return;
      }
    } catch (e) {
      // empty project, proceed
    }
  }

  const newTsConfig = fs.readJsonSync(path.join(props.librarySourceRoot, "gamemaker-config", "tsconfig.json"), "utf8");
  newTsConfig.compilerOptions.typeRoots = [
    path.join(props.librarySourceRoot, "gamemaker-config", ".ts"),
  ];
  newTsConfig.include = [
    path.join(".", ".ts", "**", "*.d.ts"), // generated types
    path.join(".", "global.d.ts"), // user defined globals
    path.join("**", "*.ts"), // code
  ];

  // copy files
  fs.outputJsonSync(path.join(props.currentFolder, "tsconfig.json"), newTsConfig, {
    encoding: "utf8",
    spaces: 2,
  });

  setupExtension(props);
};

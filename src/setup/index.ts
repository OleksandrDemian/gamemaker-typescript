import fs from "fs-extra";
import path from "node:path";

export interface ISetupProjectProps {
  currentFolder: string;
  librarySourceRoot: string;
  forceSetup: boolean;
}

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
    path.join(".", "src", "**", "*.ts"), // code
  ];

  // copy files
  fs.outputJsonSync(path.join(props.currentFolder, "tsconfig.json"), newTsConfig, {
    encoding: "utf8",
    spaces: 2,
  });
};

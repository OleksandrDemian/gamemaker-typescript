import fs from "fs-extra";

export interface ISetupProjectProps {
  currentFolder: string;
  assetsFolder: string;
  forceSetup: boolean;
}

export const setupTsProject = (props: ISetupProjectProps) => {
  if (!props.forceSetup) {
    try {
      const tsConfig = fs.readFileSync("./tsconfig.json", "utf8");
      if (tsConfig) {
        console.log("Setup already done");
        return;
      }
    } catch (e) {
      // empty project, proceed
    }
  }

  // copy files
  fs.copySync(props.assetsFolder, props.currentFolder);
};

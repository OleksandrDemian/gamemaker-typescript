import fs from "fs-extra";

export const readFileSync = (path: string) => {
  return fs.readFileSync(path, "utf-8");
};

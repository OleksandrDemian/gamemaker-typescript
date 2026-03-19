import path from "node:path";
import fs from "fs-extra";
import {IScript} from "../../entities/script";
import js5 from "json5";

const getScriptPath = (name: string, ...rest: string[])=> path.join("scripts", name, ...rest);

// todo: make async
const cleanupScript = (name: string) => {
  fs.readdirSync(getScriptPath(name)).forEach(file => {
    if (file.endsWith(".gml")) {
      // gml script, remove
      fs.removeSync(getScriptPath(name, file));
    }
  });
};

const readScript = (name: string): IScript | undefined => {
  try {
    const file = fs.readFileSync(getScriptPath(name, name + ".yy"), "utf8");
    return js5.parse(file) as IScript;
  } catch (error) {
    return undefined;
  }
};

export const createScriptHandler = (name: string) => {
  let current: IScript | undefined = readScript(name);

  return {
    exists: () => !!current,
    getPath: () => getScriptPath(name, name + ".yy"),
    upsertScript: (script: IScript, code: string) => {
      if (!current) {
        current = script;
      } else {
        // we don't care if something changes, existing script always wins
      }

      fs.ensureDirSync(getScriptPath(name));
      cleanupScript(script.name);
      fs.outputFileSync(getScriptPath(name, script.name + ".gml"), code, "utf8");
      fs.outputFileSync(
        getScriptPath(name, name + ".yy"),
        JSON.stringify(current, null, 2),
        "utf8"
      );
    },
  };
};

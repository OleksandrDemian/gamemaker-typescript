import fs from "fs-extra";
import path from "node:path";
import {IObject} from "../../entities/object";
import js5 from "json5";

const getObjectPath = (name: string, ...rest: string[])=> path.join("objects", name, ...rest);

// todo: make async
const cleanupObject = (name: string) => {
  fs.readdirSync(getObjectPath(name)).forEach(file => {
    if (file.endsWith(".gml")) {
      // gml script, remove
      fs.removeSync(getObjectPath(name, file));
    }
  });
};

const readObject = (name: string): IObject | undefined => {
  try {
    const file = fs.readFileSync(getObjectPath(name, name + ".yy"), "utf8");
    return js5.parse(file) as IObject;
  } catch (error) {
    return undefined;
  }
};

export const createObjectHandler = (name: string) => {
  let current: IObject | undefined = readObject(name);

  return {
    exists: () => !!current,
    getPath: () => getObjectPath(name, name + ".yy"),
    upsertObject: (object: IObject, scripts: { scriptName: string; code: string; }[]) => {
      if (current) {
        // for now, if exist only update events
        current.eventList = object.eventList;
      } else {
        current = object;
      }

      fs.ensureDirSync(getObjectPath(name));
      cleanupObject(name);

      for (const script of scripts) {
        fs.outputFileSync(getObjectPath(name, script.scriptName), script.code, "utf8");
      }

      fs.outputFileSync(
        getObjectPath(name, name + ".yy"),
        JSON.stringify(current, null, 2),
        "utf8"
      );
    },
  };
}

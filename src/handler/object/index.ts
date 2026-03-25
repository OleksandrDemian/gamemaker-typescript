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

const isSameEventsList = (a: IObject, b: IObject): boolean => {
  const aEvents = new Set(a.eventList.map((e) => e.eventNum + "_" + e.eventType));
  const bEvents = new Set(b.eventList.map((e) => e.eventNum + "_" + e.eventType));

  // 1. Check if they have the same number of unique events
  if (aEvents.size !== bEvents.size) return false;

  // 2. Check if every event in Set A exists in Set B
  for (const event of aEvents) {
    if (!bEvents.has(event)) return false;
  }

  return true;
};

export const createObjectHandler = (name: string) => {
  let current: IObject | undefined = readObject(name);

  return {
    exists: () => !!current,
    getPath: () => getObjectPath(name, name + ".yy"),
    upsertObject: (object: IObject, scripts: { scriptName: string; code: string; }[]) => {
      let flush = false;
      if (current) {
        if (!isSameEventsList(current, object)) {
          // for now, if exist only update events
          current.eventList = object.eventList;
          flush = true;
        }
      } else {
        current = object;
        flush = true;
      }

      fs.ensureDirSync(getObjectPath(name));
      cleanupObject(name);

      for (const script of scripts) {
        fs.outputFileSync(getObjectPath(name, script.scriptName), script.code, "utf8");
      }

      if (flush) {
        fs.outputFileSync(
          getObjectPath(name, name + ".yy"),
          JSON.stringify(current, null, 2),
          "utf8"
        );
      }
    },
  };
}

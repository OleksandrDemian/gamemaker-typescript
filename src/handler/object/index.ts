import fs from "fs-extra";
import path from "node:path";
import {IProjectHandler} from "../project";
import {IObject} from "../../entities/object";
import js5 from "json5";
import {createObjectEvent} from "../../entities/objectEvent";
import {eventByHandler} from "../../events";

const cleanupObjectFolder = (objectFolder: string) => {
  fs.readdirSync(objectFolder).forEach(file => {
    if (file.endsWith(".gml")) {
      // gml script, remove
      fs.removeSync(path.join(objectFolder, file));
    }
  });
};

const readObject = (path: string): IObject | undefined => {
  try {
    const file = fs.readFileSync(path, "utf8");
    return js5.parse(file) as IObject;
  } catch (error) {
    return undefined;
  }
};

const isSameEventsList = (a: IObject["eventList"], b: IObject["eventList"]): boolean => {
  const aEvents = new Set(a.map((e) => e.eventNum + "_" + e.eventType));
  const bEvents = new Set(b.map((e) => e.eventNum + "_" + e.eventType));

  // 1. Check if they have the same number of unique events
  if (aEvents.size !== bEvents.size) return false;

  // 2. Check if every event in Set A exists in Set B
  for (const event of aEvents) {
    if (!bEvents.has(event)) return false;
  }
  return true;
};

export interface IObjectHandler {
  exists (): boolean;
  attachScripts (scripts: { scriptName: string; code: string; }[]): void;
}

export const createObjectHandler = (project: IProjectHandler, name: string): IObjectHandler => {
  return {
    exists(): boolean {
      return project.hasRes("object", name);
    },
    attachScripts: (scripts) => {
      const res = project.getRes("object", name);
      const eventList: IObject["eventList"] = [];

      if (res) {
        const folder = path.dirname(res.id.path); // resource folder

        // remove existing .gml
        cleanupObjectFolder(folder);

        // write all new events
        for (const script of scripts) {
          const eventInfo = eventByHandler.get(script.scriptName)!;
          fs.outputFileSync(path.join(folder, eventInfo.name + ".gml"), script.code, "utf8");
          eventList.push(createObjectEvent({
            eventNum: eventInfo.eventNum,
            eventType: eventInfo.eventType,
          }));
        }

        const cur = readObject(res.id.path);
        if (cur && !isSameEventsList(eventList, cur.eventList)) {
          // update events list
          cur.eventList = eventList;
          fs.outputFileSync(
            res.id.path,
            JSON.stringify(cur, null, 2),
            "utf8"
          );
        }
      }
    },
  };
}

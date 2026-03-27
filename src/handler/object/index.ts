import fs from "fs-extra";
import path from "node:path";
import {IProjectHandler} from "../project";
import {IObject} from "../../entities/object";
import js5 from "json5";
import {createObjectEvent} from "../../entities/objectEvent";
import {eventByHandler} from "../../events";
import {processObjectFile} from "../../processor/object";

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

const findTsFile = (folder: string): string | undefined => {
  // find .ts file
  const files = fs.readdirSync(folder);
  for (const file of files) {
    if (file.endsWith(".ts")) {
      // our code file
      return file;
    }
  }

  return undefined;
}

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

export interface IObjectHandlerCompileOptions {
  onEmitClass (objName: string, className: string): void;
}

export interface IObjectHandler {
  compile (opts?: IObjectHandlerCompileOptions): boolean;
}

export const createObjectHandler = (project: IProjectHandler, name: string): IObjectHandler => {
  const resource = project.getResource("objects", name);
  if (!resource) {
    throw new Error(`Unable to create object handler for ${name}`);
  }

  return {
    compile (props) {
      const eventList: IObject["eventList"] = [];

      const folder = path.dirname(resource.id.path); // resource folder
      const resFilePath = resource.id.path;
      const tsFile = findTsFile(folder); // take first .ts

      if (!tsFile) {
        // no file to process, exit
        return false;
      }

      const processResult = processObjectFile(path.join(folder, tsFile));

      if (!processResult) {
        props?.onEmitClass?.(name, "any");
        console.warn(`No GMObject classes detected, skip processing.`);
        return false;
      }

      // remove existing .gml
      cleanupObjectFolder(folder);

      // write all new events
      for (const script of processResult.scripts) {
        const eventInfo = eventByHandler.get(script.scriptName)!;
        fs.outputFileSync(path.join(folder, eventInfo.name + ".gml"), script.code, "utf8");
        eventList.push(createObjectEvent({
          eventNum: eventInfo.eventNum,
          eventType: eventInfo.eventType,
        }));
      }

      const cur = readObject(resFilePath);
      if (cur && !isSameEventsList(eventList, cur.eventList)) {
        cur.eventList = eventList;
        fs.outputFileSync(
          resFilePath,
          JSON.stringify(cur, null, 2),
          "utf8"
        );
      }

      if (processResult?.className) {
        props?.onEmitClass?.(name, processResult.className);
      }

      return true;
    },
  };
}

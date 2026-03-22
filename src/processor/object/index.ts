import fs from "fs-extra";
import path from "node:path";
import ts from "typescript";
import vm, { createContext } from "node:vm";
import {objectEvents} from "../../events";
import {createObjectEvent} from "../../entities/objectEvent";
import {createObject, IObject} from "../../entities/object";
import {DEFAULT_OBJECT_FOLDER} from "../../const";
import {transpileObjectConfig} from "../../config/transpiler";

const trim = (str: string): string => {
  return str.trim();
};

const createObjectInfoCollector = () => {
  const info: any = {};
  const sandbox: any = {
    defineObject: () => ({}),
  };

  for (const { handler } of objectEvents) {
    sandbox[handler] = function (value: any, fn: () => void) {
      const lines = fn.toString().split("\n");
      if (lines.length > 2) {
        info[handler] = lines.slice(1, lines.length - 1).map(trim).join("\n");
      }
    };
  }

  return {
    getSandbox: () => sandbox,
    getInfo: () => info,
  };
};

export interface IProcessedObjectFile {
  object: IObject;
  scripts: { scriptName: string; code: string; }[];
}

export const processObjectFile = (filePath: string): IProcessedObjectFile => {
  const source = fs.readFileSync(filePath, "utf-8");

  const result = ts.transpileModule(source, transpileObjectConfig);

  const script = new vm.Script(result.outputText);
  const collector = createObjectInfoCollector();
  script.runInContext(
    createContext(
      collector.getSandbox(),
    ),
  );

  const fileName = path.parse(filePath).name;
  const info = collector.getInfo();

  const scripts: IProcessedObjectFile["scripts"] = [];
  const eventsList: IObject["eventList"] = [];

  // collect events
  for (const { handler, eventNum, eventType, name } of objectEvents) {
    if (info[handler]) {
      eventsList.push(
        createObjectEvent({
          eventNum: eventNum,
          eventType: eventType,
        })
      );

      scripts.push({
        scriptName: name + ".gml",
        code: info[handler],
      });
    }
  }

  return {
    scripts,
    object: createObject({
      eventList: eventsList,
      name: fileName,
      folder: DEFAULT_OBJECT_FOLDER, // for now mock folder
    }),
  };
};

import fs from "fs-extra";
import os from "node:os";
import path from "node:path";
import {afterEach, describe, expect, it} from "vitest";
import {createObject} from "../../../src/entities/object";
import {createObjectEvent} from "../../../src/entities/objectEvent";
import {EventTypes} from "../../../src/events";
import {IProjectHandler} from "../../../src/handler/project";
import {createObjectHandler, isSameEventsList} from "../../../src/handler/object";

const tempFolders: string[] = [];

afterEach(() => {
  for (const folder of tempFolders.splice(0)) fs.removeSync(folder);
});

const collisionEvent = (name: string) => createObjectEvent({
  eventNum: 0,
  eventType: EventTypes.COLLISION,
  collisionObjectId: {name, path: `objects/${name}/${name}.yy`},
});

describe("isSameEventsList()", () => {
  it("distinguishes collision events by target object", () => {
    expect(isSameEventsList(
      [collisionEvent("obj_enemy")],
      [collisionEvent("obj_pickup")],
    )).toBe(false);
  });

  it("matches identical collision events", () => {
    expect(isSameEventsList(
      [collisionEvent("obj_enemy")],
      [collisionEvent("obj_enemy")],
    )).toBe(true);
  });

  it("ignores event order", () => {
    const create = createObjectEvent({eventNum: 0, eventType: EventTypes.CREATE});
    const step = createObjectEvent({eventNum: 0, eventType: EventTypes.STEP});

    expect(isSameEventsList([create, step], [step, create])).toBe(true);
  });
});

describe("createObjectHandler()", () => {
  it("emits a collision script and collisionObjectId event entry", () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "gmts-collision-"));
    tempFolders.push(root);
    const objectFolder = path.join(root, "objects", "obj_player");
    const objectPath = path.join(objectFolder, "obj_player.yy");
    fs.ensureDirSync(objectFolder);
    fs.writeFileSync(
      path.join(objectFolder, "obj_player.ts"),
      "class Player extends GMObject { onCollision_obj_enemy() { instance_destroy(); } }",
    );
    fs.writeJsonSync(objectPath, createObject({
      name: "obj_player",
      folder: "Objects",
      eventList: [],
    }));

    const resources = {
      obj_player: {id: {name: "obj_player", path: objectPath}},
      obj_enemy: {id: {name: "obj_enemy", path: "objects/obj_enemy/obj_enemy.yy"}},
    };
    const project = {
      getResource: (type: "scripts" | "objects", name: string) =>
        type === "objects" ? resources[name as keyof typeof resources] : undefined,
    } as IProjectHandler;

    expect(createObjectHandler(project, "obj_player").compile()).toBe(true);
    expect(fs.readFileSync(
      path.join(objectFolder, "Collision_obj_enemy.gml"),
      "utf8",
    )).toBe("instance_destroy();\n");

    const outputObject = fs.readJsonSync(objectPath);
    expect(outputObject.eventList).toContainEqual(expect.objectContaining({
      collisionObjectId: resources.obj_enemy.id,
      eventNum: 0,
      eventType: EventTypes.COLLISION,
    }));
  });
});

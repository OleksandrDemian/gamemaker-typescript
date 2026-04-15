import {IProjectHandler} from "../../handler/project";
import {IProjectResource} from "../../entities/project";
import fs from "fs-extra";
import path from "node:path";

const generateSpritesTypes = (sp: IProjectResource[]): string => {
  return sp.reduce((acc, res) => acc + `declare const ${res.id.name}: Id.SpriteElement;\n`, '');
};

const generateSoundTypes = (sn: IProjectResource[]): string => {
  return sn.reduce((acc, res) => acc + `declare const ${res.id.name}: Id.Sound;\n`, '');
};

const generateRoomsTypes = (rm: IProjectResource[]): string => {
  return rm.reduce((acc, res) => acc + `declare const ${res.id.name}: Asset.GMRoom;\n`, '');
};

const generateObjectsTypes = (obj: IProjectResource[], customClasses: Map<string, string>): string => {
  return obj.reduce((acc, res) => acc + `declare const ${res.id.name}: ${customClasses.get(res.id.name) || 'GMObject'};\n`, '');
};

const generateTilesetTypes = (ts: IProjectResource[]): string => {
  return ts.reduce((acc, res) => acc + `declare const ${res.id.name}: Asset.GMTileSet;\n`, '');
};

export const writeTypesFile = (filename: string, file: string) => {
  fs.outputFileSync(
    path.join(process.cwd(), ".ts", "__generated", filename),
    file,
    { encoding: 'utf8' },
  );
};

export const processProjectFile = (project: IProjectHandler, customClasses: Map<string, string>) => {
  // todo: avoid writing types that hasn't changed
  const sprites: IProjectResource[] = [];
  const sounds: IProjectResource[] = [];
  const rooms: IProjectResource[] = [];
  const tileset: IProjectResource[] = [];
  const objects: IProjectResource[] = [];

  project.iterateResources((res) => {
    if (res.id.path.startsWith("sprites")) {
      sprites.push(res);
    } else if (res.id.path.startsWith("sounds")) {
      sounds.push(res);
    } else if (res.id.path.startsWith("rooms")) {
      rooms.push(res);
    } else if (res.id.path.startsWith("tilesets")) {
      tileset.push(res);
    } else if (res.id.path.startsWith("objects")) {
      objects.push(res);
    }
  });

  writeTypesFile("sprites.d.ts", generateSpritesTypes(sprites));
  writeTypesFile("sounds.d.ts", generateSoundTypes(sounds));
  writeTypesFile("tilesets.d.ts", generateTilesetTypes(tileset));
  writeTypesFile("rooms.d.ts", generateRoomsTypes(rooms));
  writeTypesFile("objects.d.ts", generateObjectsTypes(objects, customClasses));
};

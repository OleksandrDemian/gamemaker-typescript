import {createProjectHandler, IProjectHandler} from "../../handler/project";
import {IProjectResource} from "../../entities/project";
import fs from "fs-extra";
import path from "node:path";

const generateSpritesTypes = (sprites: IProjectResource[]): string => {
  return sprites.reduce((acc, res) => acc + `declare const ${res.id.name}: Id.SpriteElement;\n`, '');
};

const generateSoundTypes = (sounds: IProjectResource[]): string => {
  return sounds.reduce((acc, res) => acc + `declare const ${res.id.name}: Id.Sound;\n`, '');
};

const generateRoomsTypes = (sounds: IProjectResource[]): string => {
  return sounds.reduce((acc, res) => acc + `declare const ${res.id.name}: Asset.GMRoom;\n`, '');
};

const generateTilesetTypes = (sounds: IProjectResource[]): string => {
  return sounds.reduce((acc, res) => acc + `declare const ${res.id.name}: Asset.GMTileSet;\n`, '');
};

const writeTypesFile = (filename: string, file: string) => {
  fs.outputFileSync(
    path.join(process.cwd(), ".ts", "__generated", filename),
    file,
    { encoding: 'utf8' },
  );
};

export const processProjectFile = (project: IProjectHandler) => {
  // todo: avoid writing types that hasn't changed
  const sprites: IProjectResource[] = [];
  const sounds: IProjectResource[] = [];
  const rooms: IProjectResource[] = [];
  const tileset: IProjectResource[] = [];

  project.iterateResources((res) => {
    if (res.id.path.startsWith("sprites")) {
      sprites.push(res);
    } else if (res.id.path.startsWith("sounds")) {
      sounds.push(res);
    } else if (res.id.path.startsWith("rooms")) {
      rooms.push(res);
    } else if (res.id.path.startsWith("tilesets")) {
      tileset.push(res);
    }
  });

  writeTypesFile("sprites.d.ts", generateSpritesTypes(sprites));
  writeTypesFile("sounds.d.ts", generateSoundTypes(sounds));
  writeTypesFile("tilesets.d.ts", generateTilesetTypes(tileset));
  writeTypesFile("rooms.d.ts", generateRoomsTypes(rooms));
};

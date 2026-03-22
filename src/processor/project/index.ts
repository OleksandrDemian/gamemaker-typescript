import {createProjectHandler} from "../../handler/project";
import {IProjectResource} from "../../entities/project";
import fs from "fs-extra";

export const processProjectFile = () => {
  const project = createProjectHandler();
  const sprites: IProjectResource[] = [];
  const sounds: IProjectResource[] = [];

  project.iterateResources((res) => {
    if (res.id.path.startsWith("sprites")) {
      sprites.push(res);
    } else if (res.id.path.startsWith("sounds")) {
      sounds.push(res);
    }
  });

  fs.outputFileSync(
    process.cwd() + "/sprites.d.ts",
    sprites.reduce((acc, res) => acc + `declare const ${res.id.name}: Id.SpriteElement;\n`, ''),
    {
      encoding: 'utf8'
    },
  );

  fs.outputFileSync(
    process.cwd() + "/sounds.d.ts",
    sounds.reduce((acc, res) => acc + `declare const ${res.id.name}: Id.Sound;\n`, ''),
    {
      encoding: 'utf8'
    },
  );
};

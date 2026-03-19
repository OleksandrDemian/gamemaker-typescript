export interface IProjectFolder {
  "$GMFolder": string;
  "%Name": string;
  folderPath: string;
  name: string;
  resourceType: "GMFolder";
  resourceVersion: "2.0";
}

export interface IProjectResource {
  id: {
    name: string;
    path: string;
  };
}

export interface IProjectRoom {
  roomId: {
    name: string;
    path: string;
  };
}

export interface IProject {
  "$GMProject": "v1";
  "%Name": string;
  defaultScriptType: number;
  Folders: IProjectFolder[];
  ForcedPrefabProjectReferences: [];
  IncludedFiles: [];
  isEcma: false;
  LibraryEmitters: [];
  MetaData:{
    IDEVersion: string;
  };
  name: string;
  resources: IProjectResource[];
  resourceType: "GMProject",
  resourceVersion: "2.0",
  RoomOrderNodes: IProjectRoom[],
  templateType: "game";
}

export const createProjectFolder = (name: string): IProjectFolder => {
  return {
    "$GMFolder": "",
    "%Name": name,
    folderPath: `folders/${name}.yy`,
    name,
    resourceType: "GMFolder",
    resourceVersion: "2.0"
  }
};

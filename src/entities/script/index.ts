export interface IScriptParent {
  name: string,
  path: string,
}

export interface IScript {
  "$GMScript": "v1";
  "%Name": String;
  isCompatibility: boolean;
  isDnD: boolean;
  name: string;
  parent: IScriptParent;
  resourceType: "GMScript";
  resourceVersion: "2.0";
}

export interface ICreateScriptProps {
  name: string;
  folder: string;
}
export const createScript = (props: ICreateScriptProps): IScript => {
  return {
    "$GMScript": "v1",
    "%Name": props.name,
    isCompatibility: false,
    isDnD: false,
    name: props.name,
    parent: {
      name: props.folder,
      path: `folders/${props.folder}.yy`,
    },
    resourceType: "GMScript",
    resourceVersion: "2.0",
  };
};

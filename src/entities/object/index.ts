import {IObjectEvent} from "../objectEvent";

export interface ICreateObjectProps {
  name: string;
  folder: string;
  eventList: IObjectEvent[];
}

export interface IObjectParent {
  name: string;
  path: string;
}

export interface IObject {
  "$GMObject": string;
  "%Name": string;
  eventList: IObjectEvent[];
  managed: boolean;
  name: string;
  overriddenProperties: any[];
  parent: IObjectParent; // folder
  parentObjectId: IObjectParent | null; // parent object
  persistent: boolean;
  physicsAngularDamping: number;
  physicsDensity: number;
  physicsFriction: number;
  physicsGroup: number;
  physicsKinematic: boolean;
  physicsLinearDamping: number;
  physicsObject: boolean;
  physicsRestitution: number;
  physicsSensor: boolean;
  physicsShape: number;
  physicsShapePoints: [];
  physicsStartAwake: boolean;
  properties: any[];
  resourceType: "GMObject";
  resourceVersion: "2.0";
  solid: boolean;
  spriteId: any;
  spriteMaskId: any;
  visible: boolean;
}

export const createObject = (props: ICreateObjectProps): IObject => {
  return {
    "$GMObject": "",
    "%Name": props.name,
    eventList: props.eventList,
    managed: true,
    name: props.name,
    overriddenProperties: [],
    parent: {
      name: props.folder,
      path: `folders/${props.folder}.yy`,
    },
    parentObjectId: null,
    persistent: false,
    physicsAngularDamping: 0.1,
    physicsDensity: 0.5,
    physicsFriction: 0.2,
    physicsGroup: 1,
    physicsKinematic: false,
    physicsLinearDamping: 0.1,
    physicsObject: false,
    physicsRestitution: 0.1,
    physicsSensor: false,
    physicsShape: 1,
    physicsShapePoints: [],
    physicsStartAwake: true,
    properties: [],
    resourceType: "GMObject",
    resourceVersion: "2.0",
    solid: false,
    spriteId: null,
    spriteMaskId: null,
    visible: true,
  };
}

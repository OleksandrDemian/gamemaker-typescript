export interface IGenerateObjectEventProps {
  eventNum: number;
  eventType: number;
}

export interface IObjectEvent {
  "$GMEvent": string;
  "%Name": string;
  collisionObjectId: any;
  eventNum: number;
  eventType: number;
  isDnD: boolean;
  name: string;
  resourceType: "GMEvent";
  resourceVersion: "2.0";
}

export const createObjectEvent = (props: IGenerateObjectEventProps): IObjectEvent => {
  return {
    "$GMEvent":"v1",
    "%Name":"",
    collisionObjectId: null,
    eventNum: props.eventNum,
    eventType: props.eventType,
    isDnD: false,
    name: "",
    resourceType: "GMEvent",
    resourceVersion: "2.0"
  };
}

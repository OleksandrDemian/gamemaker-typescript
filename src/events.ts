/**
 * Thanks: https://github.com/bscotch/stitch
 */

const EventTypes = {
  CREATE: 0,
  DESTROY: 1,
  ALERT: 2,
  STEP: 3,
  COLLISION: 4,
  KEY_DOWN: 5,
  MOUSE: 6,
  ASYNC: 7,
  ROOM: 7,
  GAME: 7,
  USER_EVENT: 7,
  ANIMATION: 7,
  DRAW: 8,
  KEY_PRESSED: 9,
  KEY_UP: 10,
  CLEAN_UP: 12,
  GESTURE: 13,
  // todo: double check
};

export interface IObjectEvent {
  label: string;
  name: string;
  eventNum: number;
  eventType: number;
  group: string;
  handler: string;
}

const objectAlarmEvents: IObjectEvent[] = [];
for (let i = 0; i < 10; i++) {
  objectAlarmEvents.push({
    label: `Alarm ${i}`,
    name: `Alarm_${i}`,
    eventNum: i,
    eventType: EventTypes.ALERT,
    group: 'alarm',
    handler: `onAlarm_${i}`,
  });
}

export const objectEvents: IObjectEvent[] = [
  {
    label: 'Create',
    name: 'Create_0',
    eventNum: 0,
    eventType: EventTypes.CREATE,
    group: 'main',
    handler: "onCreate",
  },
  {
    label: 'Destroy',
    name: 'Destroy_0',
    eventNum: 0,
    eventType: EventTypes.DESTROY,
    group: 'cleanup',
    handler: "onDestroy",
  },
  {
    label: 'CleanUp',
    name: 'CleanUp_0',
    eventNum: 0,
    eventType: EventTypes.CLEAN_UP,
    group: 'cleanup',
    handler: "onCleanUp",
  },
  {
    label: 'Room Start',
    name: 'Other_4',
    eventNum: 4,
    eventType: EventTypes.ROOM,
    group: 'cleanup',
    handler: "onRoomStart",
  },
  {
    label: 'Room End',
    name: 'Other_5',
    eventNum: 5,
    eventType: EventTypes.ROOM,
    group: 'cleanup',
    handler: "onRoomEnd",
  },
  {
    label: 'Game End',
    name: 'Other_3',
    eventNum: 3,
    eventType: EventTypes.GAME,
    group: 'cleanup',
    handler: "onGameEnd",
  },
  {
    label: 'Pre-Draw',
    name: 'Draw_76',
    eventNum: 76,
    group: 'draw',
    eventType: EventTypes.DRAW,
    handler: "onPreDraw",
  },
  {
    label: 'Draw Begin',
    name: 'Draw_72',
    eventNum: 72,
    eventType: EventTypes.DRAW,
    group: 'draw',
    handler: "onDrawBegin",
  },
  {
    label: 'Draw',
    name: 'Draw_0',
    eventNum: 0,
    eventType: EventTypes.DRAW,
    group: 'draw',
    handler: "onDraw",
  },
  {
    label: 'Draw End',
    name: 'Draw_73',
    eventNum: 73,
    eventType: EventTypes.DRAW,
    group: 'draw',
    handler: "onDrawEnd",
  },
  {
    label: 'Post-Draw',
    name: 'Draw_77',
    eventNum: 77,
    eventType: EventTypes.DRAW,
    group: 'draw',
    handler: "onPostDraw",
  },
  {
    label: 'Draw GUI Begin',
    name: 'Draw_74',
    eventNum: 74,
    eventType: EventTypes.DRAW,
    group: 'draw-gui',
    handler: "onDrawGuiBegin",
  },
  {
    label: 'Draw GUI',
    name: 'Draw_64',
    eventNum: 64,
    eventType: EventTypes.DRAW,
    group: 'draw-gui',
    handler: "onDrawGui",
  },
  {
    label: 'Draw GUI End',
    name: 'Draw_75',
    eventNum: 75,
    eventType: EventTypes.DRAW,
    group: 'draw-gui',
    handler: "onDrawGuiEnd",
  },
  {
    label: 'Begin Step',
    name: 'Step_1',
    eventNum: 1,
    eventType: EventTypes.STEP,
    group: 'step',
    handler: "onBeginStep",
  },
  {
    label: 'Step',
    name: 'Step_0',
    eventNum: 0,
    eventType: EventTypes.STEP,
    group: 'step',
    handler: "onStep"
  },
  {
    label: 'End Step',
    name: 'Step_2',
    eventNum: 2,
    eventType: EventTypes.STEP,
    group: 'step',
    handler: "onEndStep",
  },
  ...Array.from({ length: 16 }, (_, i) => ({
    label: `User Event ${i}`,
    name: `Other_${i + 10}`,
    eventNum: i + 10,
    eventType: EventTypes.USER_EVENT,
    group: 'user',
    handler: `onUserEvent_${i}`,
  })),
  {
    label: 'Animation Update',
    name: 'Other_58',
    eventNum: 58,
    eventType: EventTypes.ANIMATION,
    group: 'animation',
    handler: "onAnimationUpdate",
  },
  {
    label: 'Animation Event',
    name: 'Other_59',
    eventNum: 59,
    eventType: EventTypes.ANIMATION,
    group: 'animation',
    handler: "onAnimationEvent",
  },
  {
    label: 'Async - Image Loaded',
    name: 'Other_60',
    eventNum: 60,
    eventType: EventTypes.ASYNC,
    group: 'async',
    handler: "onAsyncImageLoaded",
  },
  {
    label: 'Async - HTTP',
    name: 'Other_62',
    eventNum: 62,
    eventType: EventTypes.ASYNC,
    group: 'async',
    handler: "onAsyncHttp",
  },
  {
    label: 'Async - System',
    name: 'Other_75',
    eventNum: 75,
    eventType: EventTypes.ASYNC,
    group: 'async',
    handler: "onAsyncSystem",
  },
  {
    label: 'Async - Social',
    name: 'Other_70',
    eventNum: 70,
    eventType: EventTypes.ASYNC,
    group: 'async',
    handler: "onAsyncSocial",
  },
  {
    label: 'Async - Save/Load',
    name: 'Other_72',
    eventNum: 72,
    eventType: EventTypes.ASYNC,
    group: 'async',
    handler: "onAsyncSaveLoad",
  },
  {
    label: 'Async - Steam',
    name: 'Other_69',
    eventNum: 69,
    eventType: EventTypes.ASYNC,
    group: 'async',
    handler: "onAsyncSteam",
  },
  {
    label: 'Async - Dialog',
    name: 'Other_63',
    eventNum: 63,
    eventType: EventTypes.ASYNC,
    group: 'async',
    handler: "onAsyncDialog",
  },
  {
    label: 'Broadcast Message',
    name: 'Other_76',
    eventNum: 76,
    eventType: EventTypes.ASYNC,
    group: 'broadcast message',
    handler: "onBroadcastMessage",
  },
  {
    label: 'Global Left Released',
    name: 'Mouse_56',
    eventNum: 56,
    eventType: EventTypes.MOUSE,
    group: 'mouse',
    handler: "onGlobalLeftReleased",
  },
  {
    label: 'Global Right Released',
    name: 'Mouse_57',
    eventNum: 57,
    eventType: EventTypes.MOUSE,
    group: 'mouse',
    handler: "onGlobalRightReleased",
  },
  {
    label: 'Global Middle Released',
    name: 'Mouse_58',
    eventNum: 58,
    eventType: EventTypes.MOUSE,
    group: 'mouse',
    handler: "onGlobalMiddleReleased",
  },
  ...objectAlarmEvents,
];

export const eventByHandler = new Map(objectEvents.map((e) => [e.handler, e]));

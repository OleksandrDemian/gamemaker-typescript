declare interface IDefineObjectProps <T> {
  // --- Main & Cleanup ---
  onCreate?: (this: T) => void;
  onDestroy?: (this: T) => void;
  onCleanUp?: (this: T) => void;
  onRoomStart?: (this: T) => void;
  onRoomEnd?: (this: T) => void;
  onGameEnd?: (this: T) => void;

  // --- Step ---
  onBeginStep?: (this: T) => void;
  onStep?: (this: T) => void;
  onEndStep?: (this: T) => void;

  // --- Draw ---
  onPreDraw?: (this: T) => void;
  onDrawBegin?: (this: T) => void;
  onDraw?: (this: T) => void;
  onDrawEnd?: (this: T) => void;
  onPostDraw?: (this: T) => void;

  // --- Draw GUI ---
  onDrawGuiBegin?: (this: T) => void;
  onDrawGui?: (this: T) => void;
  onDrawGuiEnd?: (this: T) => void;

  // --- Async & Other ---
  onAnimationUpdate?: (this: T) => void;
  onAnimationEvent?: (this: T) => void;
  onAsyncImageLoaded?: (this: T) => void;
  onAsyncHttp?: (this: T) => void;
  onAsyncSystem?: (this: T) => void;
  onAsyncSocial?: (this: T) => void;
  onAsyncSteam?: (this: T) => void;
  onAsyncDialog?: (this: T) => void;
  onAsyncSaveLoad?: (this: T) => void;
  onBroadcastMessage?: (this: T) => void;

  // --- Input ---
  onGlobalLeftReleased?: (this: T) => void;
  onGlobalRightReleased?: (this: T) => void;
  onGlobalMiddleReleased?: (this: T) => void;

  // --- User Events (0-15) ---
  onUserEvent0?: (this: T) => void;
  onUserEvent1?: (this: T) => void;
  onUserEvent2?: (this: T) => void;
  onUserEvent3?: (this: T) => void;
  onUserEvent4?: (this: T) => void;
  onUserEvent5?: (this: T) => void;
  onUserEvent6?: (this: T) => void;
  onUserEvent7?: (this: T) => void;
  onUserEvent8?: (this: T) => void;
  onUserEvent9?: (this: T) => void;
  onUserEvent10?: (this: T) => void;
  onUserEvent11?: (this: T) => void;
  onUserEvent12?: (this: T) => void;
  onUserEvent13?: (this: T) => void;
  onUserEvent14?: (this: T) => void;
  onUserEvent15?: (this: T) => void;
}

declare function defineObject <T> (props: IDefineObjectProps<T>): T;

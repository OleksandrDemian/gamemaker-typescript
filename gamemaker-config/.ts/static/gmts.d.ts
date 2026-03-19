declare function variables<T>(): T;

declare interface VoidFunction {
  (): void;
}

// --- Main & Cleanup ---
declare function onCreate(fn: VoidFunction): void;
declare function onDestroy(fn: VoidFunction): void;
declare function onCleanUp(fn: VoidFunction): void;
declare function onRoomStart(fn: VoidFunction): void;
declare function onRoomEnd(fn: VoidFunction): void;
declare function onGameEnd(fn: VoidFunction): void;

// --- Step ---
declare function onBeginStep(fn: VoidFunction): void;
declare function onStep(fn: VoidFunction): void;
declare function onEndStep(fn: VoidFunction): void;

// --- Draw ---
declare function onPreDraw(fn: VoidFunction): void;
declare function onDrawBegin(fn: VoidFunction): void;
declare function onDraw(fn: VoidFunction): void;
declare function onDrawEnd(fn: VoidFunction): void;
declare function onPostDraw(fn: VoidFunction): void;

// --- Draw GUI ---
declare function onDrawGuiBegin(fn: VoidFunction): void;
declare function onDrawGui(fn: VoidFunction): void;
declare function onDrawGuiEnd(fn: VoidFunction): void;

// --- Async & Other ---
declare function onAnimationUpdate(fn: VoidFunction): void;
declare function onAnimationEvent(fn: VoidFunction): void;
declare function onAsyncImageLoaded(fn: VoidFunction): void;
declare function onAsyncHttp(fn: VoidFunction): void;
declare function onAsyncSystem(fn: VoidFunction): void;
declare function onAsyncSocial(fn: VoidFunction): void;
declare function onAsyncSaveLoad(fn: VoidFunction): void;
declare function onAsyncSteam(fn: VoidFunction): void;
declare function onAsyncDialog(fn: VoidFunction): void;
declare function onBroadcastMessage(fn: VoidFunction): void;

// --- Input ---
declare function onGlobalLeftReleased(fn: VoidFunction): void;
declare function onGlobalRightReleased(fn: VoidFunction): void;
declare function onGlobalMiddleReleased(fn: VoidFunction): void;

// --- User Events (0-15) ---
declare function onUserEvent0(fn: VoidFunction): void;
declare function onUserEvent1(fn: VoidFunction): void;
declare function onUserEvent2(fn: VoidFunction): void;
declare function onUserEvent3(fn: VoidFunction): void;
declare function onUserEvent4(fn: VoidFunction): void;
declare function onUserEvent5(fn: VoidFunction): void;
declare function onUserEvent6(fn: VoidFunction): void;
declare function onUserEvent7(fn: VoidFunction): void;
declare function onUserEvent8(fn: VoidFunction): void;
declare function onUserEvent9(fn: VoidFunction): void;
declare function onUserEvent10(fn: VoidFunction): void;
declare function onUserEvent11(fn: VoidFunction): void;
declare function onUserEvent12(fn: VoidFunction): void;
declare function onUserEvent13(fn: VoidFunction): void;
declare function onUserEvent14(fn: VoidFunction): void;
declare function onUserEvent15(fn: VoidFunction): void;

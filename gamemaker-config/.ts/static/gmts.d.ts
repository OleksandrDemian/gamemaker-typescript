declare function defineObject <T> (): T;

declare interface TypedCallback <T> {
  (this: T): void;
}

// --- Main & Cleanup ---
declare function onCreate<T>(obj: T, fn: TypedCallback<T>): void;
declare function onDestroy<T>(obj: T, fn: TypedCallback<T>): void;
declare function onCleanUp<T>(obj: T, fn: TypedCallback<T>): void;
declare function onRoomStart<T>(obj: T, fn: TypedCallback<T>): void;
declare function onRoomEnd<T>(obj: T, fn: TypedCallback<T>): void;
declare function onGameEnd<T>(obj: T, fn: TypedCallback<T>): void;

// --- Step ---
declare function onBeginStep<T>(obj: T, fn: TypedCallback<T>): void;
declare function onStep<T>(obj: T, fn: TypedCallback<T>): void;
declare function onEndStep<T>(obj: T, fn: TypedCallback<T>): void;

// --- Draw ---
declare function onPreDraw<T>(obj: T, fn: TypedCallback<T>): void;
declare function onDrawBegin<T>(obj: T, fn: TypedCallback<T>): void;
declare function onDraw<T>(obj: T, fn: TypedCallback<T>): void;
declare function onDrawEnd<T>(obj: T, fn: TypedCallback<T>): void;
declare function onPostDraw<T>(obj: T, fn: TypedCallback<T>): void;

// --- Draw GUI ---
declare function onDrawGuiBegin<T>(obj: T, fn: TypedCallback<T>): void;
declare function onDrawGui<T>(obj: T, fn: TypedCallback<T>): void;
declare function onDrawGuiEnd<T>(obj: T, fn: TypedCallback<T>): void;

// --- Async & Other ---
declare function onAnimationUpdate<T>(obj: T, fn: TypedCallback<T>): void;
declare function onAnimationEvent<T>(obj: T, fn: TypedCallback<T>): void;
declare function onAsyncImageLoaded<T>(obj: T, fn: TypedCallback<T>): void;
declare function onAsyncHttp<T>(obj: T, fn: TypedCallback<T>): void;
declare function onAsyncSystem<T>(obj: T, fn: TypedCallback<T>): void;
declare function onAsyncSocial<T>(obj: T, fn: TypedCallback<T>): void;
declare function onAsyncSaveLoad<T>(obj: T, fn: TypedCallback<T>): void;
declare function onAsyncSteam<T>(obj: T, fn: TypedCallback<T>): void;
declare function onAsyncDialog<T>(obj: T, fn: TypedCallback<T>): void;
declare function onBroadcastMessage<T>(obj: T, fn: TypedCallback<T>): void;

// --- Input ---
declare function onGlobalLeftReleased<T>(obj: T, fn: TypedCallback<T>): void;
declare function onGlobalRightReleased<T>(obj: T, fn: TypedCallback<T>): void;
declare function onGlobalMiddleReleased<T>(obj: T, fn: TypedCallback<T>): void;

// --- User Events (0-15) ---
declare function onUserEvent0<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent1<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent2<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent3<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent4<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent5<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent6<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent7<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent8<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent9<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent10<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent11<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent12<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent13<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent14<T>(obj: T, fn: TypedCallback<T>): void;
declare function onUserEvent15<T>(obj: T, fn: TypedCallback<T>): void;

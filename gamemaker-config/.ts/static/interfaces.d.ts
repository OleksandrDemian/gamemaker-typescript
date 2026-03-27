// declare interface WeakRef {
//     /**
//      * None
//      */
//     ref: ArgumentIdentity
// 
// }

declare interface Sequence {
    /**
     * This is the name of the sequence as a string and you can get or set this value as required. Note that sequences created using the function sequence_create() will not have a name and this will simply be an empty string "".
     */
    name: String

    /**
     * This is the playback mode of the sequence object and can be get or set.
     */
    loopmode: SeqPlay

    /**
     * This specifies the playback speed of the sequence, which is interpreted as either frames-per-second or frames-per-game-frame depending on the playbackSpeedType (see below). You can get or set this value.
     */
    playbackSpeed: Real

    /**
     * This specifies how the playbackSpeed should be interpreted and you can get or set this value.
     */
    playbackSpeedType: SpriteSpeed

    /**
     * The length of the sequence in frames. You can get or set this value, but note that making a sequence shorter may cause issues if a sequence instance referencing this sequence has its playhead set to past the new length.
     */
    length: Real

    /**
     * This is a scalar value from 0 to 1 that is used to scale the volume of all audio tracks in the sequence. You can get or set this value and it will modify the global audio output for all tracks - for example, if you have an audio track with a volume of 0.8 and then set the sequence volume property to 0.5, the audio track will have a final volume of 0.4.
     */
    volume: Real

    /**
     * This is the origin of the sequence along the X axis.
     */
    xorigin: Real

    /**
     * This is the origin of the sequence along the Y axis.
     */
    yorigin: Real

    /**
     * This allows access to the message event keyframes for the sequence. You can get or set these message events, and when getting this property an array of keyframe structs is returned, and for setting the property you           should supply an array of keyframe structs. For more information, please see the page on Sequence Events and Moments.
     */
    messageEventKeyframes: Array<any>

    /**
     * This allows access to the moment event keyframes for the sequence. You can get or set these moment events, and when getting this property an array of keyframe structs is returned, and for setting the property you should supply           an array of keyframe structs. For more information, please see the page on Sequence Events and Moments.
     */
    momentKeyframes: Array<any>

    /**
     * This allows access to the list of asset tracks on the top level of the sequence. You can get or set this property, and when getting this property an array of track structs is returned, and for setting the property you should           supply an array of track structs. For more information, please see the section on Track Structs.
     */
    tracks: Array<any>

}
declare interface SequenceInstance {
    /**
     * None
     */
    sequence: Sequence

    /**
     * None
     */
    headPosition: Real

    /**
     * None
     */
    headDirection: SequenceDirection

    /**
     * None
     */
    speedScale: Real

    /**
     * None
     */
    volume: Real

    /**
     * None
     */
    paused: Bool

    /**
     * None
     */
    finished: Bool

    /**
     * None
     */
    activeTracks: Array<ActiveTrack>

    /**
     * None
     */
    elementID: SequenceElement

}
declare interface Track {
    /**
     * None
     */
    name: String

    /**
     * None
     */
    type: SequenceTrackType

    /**
     * None
     */
    tracks: Array<Track>

    /**
     * None
     */
    visible: Bool

    /**
     * None
     */
    keyframes: Array<Keyframe>

}
declare interface Keyframe {
    /**
     * None
     */
    frame: Real

    /**
     * None
     */
    length: Real

    /**
     * None
     */
    stretch: Bool

    /**
     * None
     */
    disabled: Bool

    /**
     * None
     */
    channels: Array<any>

}
declare interface KeyChannel {
    /**
     * None
     */
    channel: Real

}
declare interface GraphicTrack {
    /**
     * None
     */
    spriteIndex: GMSprite

}
declare interface SequenceTrack {
    /**
     * None
     */
    sequence: Undefined

}
declare interface AudioTrack {
    /**
     * None
     */
    soundIndex: GMSound

    /**
     * None
     */
    emitterIndex: EmitterIndex

    /**
     * None
     */
    playbackMode: Real

}
declare interface SpriteTrack {
    /**
     * None
     */
    imageIndex: Real

}
declare interface BoolTrack {
    /**
     * None
     */
    value: Bool

}
declare interface StringTrack {
    /**
     * None
     */
    value: String

}
declare interface ColourTrack {
    /**
     * None
     */
    colour: Color

}
declare interface ColorTrack {
    /**
     * None
     */
    color: Color

}
declare interface RealTrack {
    /**
     * None
     */
    value: Real

    /**
     * None
     */
    curve: Real

}
declare interface InstanceTrack {
    /**
     * None
     */
    objectIndex: GMObject

}
declare interface TextTrack {
    /**
     * None
     */
    text: String

    /**
     * None
     */
    wrap: Bool

    /**
     * None
     */
    alignmentV: Real

    /**
     * None
     */
    alignmentH: Real

    /**
     * None
     */
    fontIndex: GMFont

    /**
     * None
     */
    effectsEnabled: Bool

    /**
     * None
     */
    glowEnabled: Bool

    /**
     * None
     */
    outlineEnabled: Bool

    /**
     * None
     */
    dropShadowEnabled: Bool

}
declare interface MessageEvent {
    /**
     * None
     */
    events: Array<any>

}
declare interface Moment {
    /**
     * None
     */
    event: Real

}
declare interface AnimCurve {
    /**
     * None
     */
    name: String

    /**
     * None
     */
    graphType: Real

    /**
     * None
     */
    channels: Array<any>

}
declare interface AnimCurveChannel {
    /**
     * None
     */
    type: AnimCurveChannel

    /**
     * None
     */
    iterations: Real

    /**
     * None
     */
    points: Real

}
declare interface AnimCurvePoint {
    /**
     * None
     */
    posx: Real

    /**
     * None
     */
    value: Real

}
declare interface ActiveTrack {
    /**
     * None
     */
    activeTracks: Array<Track>

    /**
     * None
     */
    matrix: Array<any>

    /**
     * None
     */
    posx: Real

    /**
     * None
     */
    posy: Real

    /**
     * None
     */
    scalex: Real

    /**
     * None
     */
    scaley: Real

    /**
     * None
     */
    xorigin: Real

    /**
     * None
     */
    yorigin: Real

    /**
     * None
     */
    gain: Real

    /**
     * None
     */
    pitch: Real

    /**
     * None
     */
    falloffRef: Real

    /**
     * None
     */
    falloffMax: Real

    /**
     * None
     */
    falloffFactor: Real

    /**
     * None
     */
    width: Real

    /**
     * None
     */
    height: Real

    /**
     * None
     */
    imageindex: Real

    /**
     * None
     */
    imagespeed: Real

    /**
     * None
     */
    colorMultiply: Array<any>

    /**
     * None
     */
    colourMultiply: Array<any>

    /**
     * None
     */
    emitterIndex: AudioEmitter

    /**
     * None
     */
    track: Track

    /**
     * None
     */
    parent: SequenceInstance

    /**
     * None
     */
    frameSizeX: Real

    /**
     * None
     */
    frameSizeY: Real

    /**
     * None
     */
    characterSpacing: Real

    /**
     * None
     */
    lineSpacing: Real

    /**
     * None
     */
    paragraphSpacing: Real

    /**
     * None
     */
    thickness: Real

    /**
     * None
     */
    coreColor: Array<any>

    /**
     * None
     */
    coreColour: Array<any>

    /**
     * None
     */
    glowStart: Real

    /**
     * None
     */
    glowEnd: Real

    /**
     * None
     */
    glowColor: Array<any>

    /**
     * None
     */
    glowColour: Array<any>

    /**
     * None
     */
    outlineDist: Real

    /**
     * None
     */
    outlineColor: Array<any>

    /**
     * None
     */
    outlineColour: Array<any>

    /**
     * None
     */
    shadowSoftness: Real

    /**
     * None
     */
    shadowOffsetX: Real

    /**
     * None
     */
    shadowOffsetY: Real

    /**
     * None
     */
    shadowColor: Array<any>

    /**
     * None
     */
    shadowColour: Array<any>

    /**
     * None
     */
    effectsEnabled: Bool

    /**
     * None
     */
    glowEnabled: Bool

    /**
     * None
     */
    outlineEnabled: Bool

    /**
     * None
     */
    dropShadowEnabled: Bool

}
declare interface GCStats {
    /**
     * None
     */
    objects_touched: Real

    /**
     * None
     */
    objects_collected: Real

    /**
     * None
     */
    traversal_time: Real

    /**
     * None
     */
    collection_time: Real

    /**
     * None
     */
    gc_frame: Real

    /**
     * None
     */
    generation_collected: Real

    /**
     * None
     */
    num_generations: Real

    /**
     * None
     */
    num_objects_in_generation: Array<any>

}
declare interface FontInfo {
    /**
     * None
     */
    ascenderOffset: Real

    /**
     * None
     */
    ascender: Real

    /**
     * None
     */
    sdfSpread: Real

    /**
     * None
     */
    sdfEnabled: Bool

    /**
     * None
     */
    freetype: Bool

    /**
     * None
     */
    size: Real

    /**
     * None
     */
    spriteIndex: GMSprite

    /**
     * None
     */
    texture: GMTexturePage

    /**
     * None
     */
    name: String

    /**
     * None
     */
    bold: Bool

    /**
     * None
     */
    italic: Bool

    /**
     * None
     */
    effectsEnabled: Bool

    /**
     * None
     */
    effectParams: Struct

    /**
     * None
     */
    glyphs: Struct

}
declare interface FontInfoGlyph {
    /**
     * None
     */
    char: Real

    /**
     * None
     */
    x: Real

    /**
     * None
     */
    y: Real

    /**
     * None
     */
    w: Real

    /**
     * None
     */
    h: Real

    /**
     * None
     */
    shift: Real

    /**
     * None
     */
    offset: Real

    /**
     * None
     */
    kerning: Array<any>

}
declare interface FontEffectParams {
    /**
     * None
     */
    thickness: Real

    /**
     * None
     */
    coreColour: Real

    /**
     * None
     */
    coreAlpha: Real

    /**
     * None
     */
    glowEnable: Bool

    /**
     * None
     */
    glowColour: Real

    /**
     * None
     */
    glowAlpha: Real

    /**
     * None
     */
    outlineEnable: Bool

    /**
     * None
     */
    outlineDistance: Real

    /**
     * None
     */
    outlineColour: Real

    /**
     * None
     */
    outlineAlpha: Real

    /**
     * None
     */
    dropShadowEnable: Bool

    /**
     * None
     */
    dropShadowSoftness: Real

    /**
     * None
     */
    dropShadowOffsetX: Real

    /**
     * None
     */
    dropShadowOffsetY: Real

    /**
     * None
     */
    dropShadowColour: Real

    /**
     * None
     */
    dropShadowAlpha: Real

}
declare interface Exception {
    /**
     * Short message for this exception.
     */
    message: String

    /**
     * Long message for this exception.
     */
    longMessage: String

    /**
     * Describes the script where this exception came from.
     */
    script: String

    /**
     * The stack frame that the exception was generated from.
     */
    stacktrace: Array<String>

}
declare interface AudioBus {
    /**
     * Whether to bypass all effects and gain scaling of the bus.
     */
    bypass: Bool

    /**
     * The output gain of the bus.
     */
    gain: Real

    /**
     * The chain of audio effects on the bus.
     */
    effects: Array<AudioEffect>

}
declare interface AudioEffect {
    /**
     * The response time to apply the effect.
     */
    attack: Real

    /**
     * Whether to bypass the effect.
     */
    bypass: Bool

    /**
     * The cutoff frequency of the filter.
     */
    cutoff: Real

    /**
     * The amount of higher frequency damping.
     */
    damp: Real

    /**
     * A peak EQ filter.
     */
    eq1: AudioEffect

    /**
     * A peak EQ filter.
     */
    eq2: AudioEffect

    /**
     * A peak EQ filter.
     */
    eq3: AudioEffect

    /**
     * A peak EQ filter.
     */
    eq4: AudioEffect

    /**
     * The factor by which the signal is downsampled.
     */
    factor: Real

    /**
     * The proportion of the signal which is fed back into the delay line.
     */
    feedback: Real

    /**
     * The center frequency of the filter.
     */
    freq: Real

    /**
     * The gain applied to the input signal.
     */
    gain: Real

    /**
     * A low-pass filter.
     */
    hicut: AudioEffect

    /**
     * A high-shelf filter.
     */
    hishelf: AudioEffect

    /**
     * The input gain scalar.
     */
    ingain: Real

    /**
     * The propertion of the signal which is affected by the LFO.
     */
    intensity: Real

    /**
     * A high-pass filter.
     */
    locut: AudioEffect

    /**
     * A low-shelf filter.
     */
    loshelf: AudioEffect

    /**
     * The proportion of the affected signal to output.
     */
    mix: Real

    /**
     * The proportion of the LFO period that the LFOs should be desynced by.
     */
    offset: Real

    /**
     * The output gain scalar.
     */
    outgain: Real

    /**
     * The quality factor of the filter.
     */
    q: Real

    /**
     * The frequency of the modulating LFO.
     */
    rate: Real

    /**
     * The compression ratio.
     */
    ratio: Real

    /**
     * The response time to stop applying the effect.
     */
    release: Real

    /**
     * The bit depth at which the signal is resampled.
     */
    resolution: Real

    /**
     * The waveshape of the LFO.
     */
    shape: AudioLFOType

    /**
     * The size of the space.
     */
    size: Real

    /**
     * The gain threshold over which the effect is applied.
     */
    threshold: Real

    /**
     * The duration of the delay.
     */
    time: Real

    /**
     * The type of the effect.
     */
    type: AudioEffectType

}
declare interface VertexFormatInfo {
    /**
     * None
     */
    stride: Real

    /**
     * None
     */
    num_elements: Real

    /**
     * None
     */
    elements: Array<VertexElementInfo>

}
declare interface VertexElementInfo {
    /**
     * None
     */
    usage: VertexUsage

    /**
     * None
     */
    type: VertexType

    /**
     * None
     */
    size: Real

    /**
     * None
     */
    offset: Real

}
declare interface TileSetInfo {
    /**
     * The width of the whole tile set texture (in pixels).
     */
    width: Real

    /**
     * The height of the whole tile set texture (in pixels).
     */
    height: Real

    /**
     * The texture ID.
     */
    texture: Real

    /**
     * The width of a single tile (in pixels).
     */
    tile_width: Real

    /**
     * The height of a single tile (in pixels).
     */
    tile_height: Real

    /**
     * The number of pixels horizontally on each side of each tile (making the space between two tiles 2 * tile_horizontal_separator).
     */
    tile_horizontal_separator: Real

    /**
     * The number of pixels vertically on each side of each tile (making the space between two tiles 2 * tile_vertical_separator)
     */
    tile_vertical_separator: Real

    /**
     * The number of columns on each row of the tile set.
     */
    tile_columns: Real

    /**
     * The number of tiles.
     */
    tile_count: Real

    /**
     * The number of frames of animation per animation.
     */
    frame_count: Real

    /**
     * The number of milliseconds for frame animation.
     */
    frame_length_ms: Real

    /**
     * A struct containing all the animation frames. Each tile number has a key in the struct, each entry is an array of the frames to use (each array should be frame_count long).
     */
    frames: Struct

}

declare class GMObject {
    // --- Main & Cleanup ---
    onCreate?(): void;
    onDestroy?(): void;
    onCleanUp?(): void;
    onRoomStart?(): void;
    onRoomEnd?(): void;
    onGameEnd?(): void;

    // --- Step ---
    onBeginStep?(): void;
    onStep?(): void;
    onEndStep?(): void;

    // --- Draw ---
    onPreDraw?(): void;
    onDrawBegin?(): void;
    onDraw?(): void;
    onDrawEnd?(): void;
    onPostDraw?(): void;

    // --- Draw GUI ---
    onDrawGuiBegin?(): void;
    onDrawGui?(): void;
    onDrawGuiEnd?(): void;

    // --- Async & Other ---
    onAnimationUpdate?(): void;
    onAnimationEvent?(): void;
    onAsyncImageLoaded?(): void;
    onAsyncHttp?(): void;
    onAsyncSystem?(): void;
    onAsyncSocial?(): void;
    onAsyncSteam?(): void;
    onAsyncDialog?(): void;
    onAsyncSaveLoad?(): void;
    onBroadcastMessage?(): void;

    // --- Input ---
    onGlobalLeftReleased?(): void;
    onGlobalRightReleased?(): void;
    onGlobalMiddleReleased?(): void;

    // --- User Events (0-15) ---
    onUserEvent0?(): void;
    onUserEvent1?(): void;
    onUserEvent2?(): void;
    onUserEvent3?(): void;
    onUserEvent4?(): void;
    onUserEvent5?(): void;
    onUserEvent6?(): void;
    onUserEvent7?(): void;
    onUserEvent8?(): void;
    onUserEvent9?(): void;
    onUserEvent10?(): void;
    onUserEvent11?(): void;
    onUserEvent12?(): void;
    onUserEvent13?(): void;
    onUserEvent14?(): void;
    onUserEvent15?(): void;
    
    /**
     * This 1 dimension array is used to get the current value for any alarms that the instance may have, or it can be used to set those alarms. There are twelve alarms built into each instance of an object, and each one has its own event that will run when this variable reaches 0.
     */
    alarm: Array<Real>

    /**
     * When you create an object you can assign it an initial depth which defines how the instances of that object will be drawn in the room when the game is being played and this variable can be used to get and to change that depth value while the game is running. You would normally not need to use this variable as you should be setting instances to be added to discreet layers, which in turn are set to a specific depth, but it may be that you want to change the depth of an instance using this value, in which case a "temporary layer" will be created specifically for the instance at the given depth. Note that when no instances are on the same depth then this temporary layer will be removed from memory (unlike regular layers which will remain even if they have nothing on them).
     */
    depth: Real

    /**
     * All instances in GameMaker have certain "built in" properties that you can use and set to govern how they look and behave. Direction is one of those properties and can be used to set the direction of movement of the instance when the instance has a speed other than 0. Note that directions in GameMaker are usually calculated as 0░ being right, 90░ being up, 180░ being left and 270░ being down, and that the gravity and gravity_direction variables can modify the direction value when they are used in your games.
     */
    direction: Real

    /**
     * Friction is one of the "built in" properties that instances can have and can be used to slow the instance down over time when the speed is other than zero. It works simply by subtracting an amount from the speed every step until the object has a speed of 0, so if the friction is set to, for example, 0.1 and the speed of the instance is 1 (1 pixel per step), it will slow down and stop after 10 steps have passed. Note too that the friction is applied to positive and negative speeds equally with the net result always being that the object has a speed of 0 after a given time.
     */
    friction: Real

    /**
     * gravity is one of the "built in" variables all instances have and, when set, will apply a constant force in the gravity_direction of the instance, influencing both the instance speed and direction. Note that gravity is a cumulative force and will accelerate the object if you choose not to cap the final speed, and it's usual that you'd set this variable to small decimal values like 0.01. If you set the gravity to 0, then no gravity will be applied to the instance (this is the default value).
     */
    gravity: Real

    /**
     * gravity_direction is one of the "built in" properties all instances have and can be used to set the direction of movement when the instances gravity is greater than 0. Note that directions in GameMaker are usually calculated as 0░ being right, 90░ being up, 180░ being left and 270░ being down.
     */
    gravity_direction: Real

    /**
     * hspeed is one of the "built in" properties that all instances have and defines the horizontal movement speed (along the x-axis) of the instance in pixels per step. So, an hspeed of 3 means 3 pixels of movement to the right (+x) every step, and an hspeed of -3 would mean 3 pixels of movement to the left (-x) every step.
     */
    hspeed: Real

    /**
     * This read-only variable holds the unique identifying number for the instance. Every instance that you create - whether through code or by adding them to a room in the Room Editor - is given a number that is used internally to identify this instance and the variable id is what you can use to reference it. The id is also returned (and can be stored in a variable) when an instance is created using instance_create_layer() or instance_create_depth(), as well as other instance functions.
     */
    id: this

    /**
     * This built-in variable is created for every instance in a room and contains the layer ID value of the layer that the instance is assigned to. This value can then be used in other functions like layer_get_depth() or it can be changed to move the instance to another layer, but note that if the layer being assigned does not exist in the current room, then you will get an error that will force your game to close. When assigning a layer, you must supply the unique layer ID as returned by the function layer_get_id() (when using named room layers), or as returned by the function layer_create() (when you create your own layers at run time).
     */
    layer: Layer

    /**
     * This built-in variable can be read to find out if the instance is currently on a ui layer or not.
     */
    on_ui_layer: Bool

    /**
     * This variable can be read to find out if the instance is flagged as persistent or not, or it can used to set persistence to true (persistent) or false (not persistent) for the instance. A persistent instance is one that will be "carried over" from room to room, meaning (for example) that it only has to be created once at the start of the game and it will be present in all further rooms. Care should be taken with persistence as it is easy to lose track of persistent instances which can lead to problems later in the development of the game.
     */
    persistent: Bool

    /**
     * An instance can be flagged as solid through the object properties in the Object Editor, or by changing the value of this built-in variable. If solid is set to true then, when a collision is detected, the colliding instance is returned automatically to the position it was at in the step previous to the collision (and then any code or actions are run in the collision event). If it is set to false, all positioning must be dealt with through the collision event.
     */
    solid: Bool

    /**
     * All instances in GameMaker have certain "built in" properties that you can use and set to govern how they look and behave. speed is one of those properties and defines how many pixels the instance will move every step. Unlike hspeed and vspeed, speed has no direction associated with it as this is governed by the direction value of the instance, but it can have a negative value, in which case the instance will travel in the opposite direction to that set by the direction function (ie: direction - 180░). Note that setting the speed and/or the direction, will also modify the values of the hspeed and vspeed variables, and that gravity, gravity_direction and friction can all modify the value of this variable when they are used in your games.
     */
    speed: Real

    /**
     * vspeed is one of the "built in" properties that all instances have and defines the vertical movement speed (along the y-axis) of the instance in pixels per step. So, a vspeed of 3 means 3 pixels of movement to the bottom (+y) every step, and a vspeed of -3 would mean 3 pixels of movement to the top (-y) every step.
     */
    vspeed: Real

    /**
     * The x value of an instance is the horizontal position in the current room, measured in pixels. This value can be either 0, positive or minus, where 0 is the left hand side of the room and moving right increases x, moving left decreases x (a negative value for x means that the instance has gone outside the left side of the room). You can even give x a real value like 12.345, but as you cannot get .345 of a pixel, the instance may not appear to have moved, although these values will be maintained and used internally by GameMaker and are perfectly valid.
     */
    x: Real

    /**
     * This built-in variable returns the previous x position for the instance. This variable will be set just before the start of the begin step event but it can also be set through code at any time, meaning you can give it your own custom value should that be necessary.
     */
    xprevious: Real

    /**
     * This variable stores the initial x position of the instance when it is first created in the room. This is not a read-only variable and can be set as well as read.
     */
    xstart: Real

    /**
     * The y value of an instance is the vertical position in the current room, measured in pixels. This value can be either 0, positive or minus, where 0 is the top of the room and moving down increases y, moving up decreases y (a negative value for y means that the instance has gone outside the top of the room). You can even give y a real value like 12.345, but as you cannot get .345 of a pixel, the instance may not appear to have moved, although these values will be maintained and used internally by GameMaker and are perfectly valid.
     */
    y: Real

    /**
     * This built-in variable returns the previous y position for the instance. This variable will be set to the current x position just before the start of the begin step event but it can also be set through code at any time, meaning you can give it your own custom value should that be necessary.
     */
    yprevious: Real

    /**
     * This variable stores the initial y position of the instance when it is first created in the room. This is not a read-only variable and can be set as well as read.
     */
    ystart: Real

    /**
     * This read only variable returns the index of the object that the instance has been created from. This is not the same as the object name, which is a string and can be found using object_get_name(), as this function returns the index number, which is a unique value that GameMaker assigns to every object at the time of creation.
     */
    object_index: GMObject

    /**
     * This read-only variable returns the number of the event currently being called, where the number is actually referring to the "sub event" of the event, ie: for the step event the event number could be any one of the constants ev_step_normal, ev_step_begin, or ev_step_end. For a full list of constants that are available for the specific sub-events see event_perform(), and if you should need to know the main event itself, you should be checking the event_type.
     */
    event_number: EventNumber

    /**
     * This read-only variable returns object index of the instance which is running the event being checked.
     */
    event_object: GMObject

    /**
     * This read-only variable returns the type of event currently being executed, which can be one of the following constants:
     */
    event_type: EventType

    /**
     * This variable can be used to get or to change the reaction of an instance when it reaches the end of the current path. Normally you would set this when you start the path using path_start() but you may wish to change this behaviour depending on any number of events in your game. The available values are expressed using the following constants:
     */
    path_endaction: PathAction

    /**
     * This variable holds the current orientation of the path that has been assigned to the instance when the function path_start() was called. When a path is created, its orientation is the default 0 degrees, but you can set this value to anything you wish using this. Remember that in GameMaker (unless you are using physics) the angles are calculated counter-clockwise, so setting the path orientation to 90░ would rotate the path to the left.
     */
    path_orientation: Real

    /**
     * This function can be used to get or to set the position of an instance along a path. The value is normalised from 0 - 1, so if you set it to, for example, 0.5, the instance will be moved to exactly the middle of the path.
     */
    path_position: Real

    /**
     * This variable can be used to get or to set the position of an instance along its current path in the previous step, and is a normalised value between 0 and 1 ie: 0 is the start position of the path and 1 would be the end position. It is similar to the xprevious and yprevious variables in how it works, only it is specific for paths. It can be useful for things like temporarily stopping a path follower if something is in the way (see the example code below).
     */
    path_positionprevious: Real

    /**
     * This value can be used to get or to set the scale of the currently assigned path for the instance (as set by the function path_start()) with a default value of 1. This is a scalar value, so 1 is a scale of 1:1, while setting it to 2, for example, will be double the scale and setting it to 0.5 would be halving the scale.
     */
    path_scale: Real

    /**
     * You can use this function to get or to set the speed of a path after it has been started using the function path_start(). You can use negative values to signify that the instance should follow the path in reverse.
     */
    path_speed: Real

    /**
     * This is a built-in variable that is part of the instance variables created for every object instance in your game. If the instance is being controlled by a sequence, this variable will return true, otherwise it will return false. This is a read-only variable and cannot be changed.
     */
    in_sequence: Bool

    /**
     * This is a built-in variable that is part of the instance variables created for every object instance in your game. If the instance is being controlled by a sequence, this variable will hold the sequence instance struct for the Sequence controlling the instance, otherwise it will be undefined. This is a read-only variable and cannot be changed.
     */
    sequence_instance: SequenceInstance

    /**
     * This is a built-in variable that is part of the instance variables created for every object instance in your game. This can be changed at any time but will only affect behaviour when the instance is being controlled by a sequence. In this case if this variable is set to true then the sequence will handle the drawing order of the instance, otherwise normal instance drawing will occur.
     */
    drawn_by_sequence: Bool

    /**
     * This read only variable returns the y position (within the room) of the bottom of the bounding box for the instance, where the bounding box is defined by the maximum width and height of the mask for the instance (as set by the sprite_index or by the mask_index). Even when a sprite has a precise collision mask, the bounding box exists and is used for certain things, and so you can use this variable to find it. Please note that when the instance has no sprite assigned the value returned will be the same as the instance Y position.
     */
    bbox_bottom: Real

    /**
     * This read only variable returns the position (along the x-axis) within the room of the left hand bounding box for the instance, where the bounding box is defined by the maximum width and height of the mask for the instance (as set by the sprite_index or by the mask_index). Even when a sprite has a precise collision mask, the bounding box exists and is used for certain things, and so you can use this variable to find it. Please note that when the instance has no sprite assigned the value returned will be the same as the instance X position.
     */
    bbox_left: Real

    /**
     * This read only variable returns the position within the room (along the x-axis) of the right hand side of the bounding box for the instance, where the bounding box is defined by the maximum width and height of the mask for the instance (as set by the sprite_index or by the mask_index). Even when a sprite has a precise collision mask, the bounding box exists and is used for certain things, and so you can use this variable to find it. Please note that when the instance has no sprite assigned the value returned will be the same as the instance X position.
     */
    bbox_right: Real

    /**
     * This read only variable returns the position within the room (along the y-axis) of the top of the bounding box for the instance, where the bounding box is defined by the maximum width and height of the mask for the instance (as set by the sprite_index or by the mask_index). Even when a sprite has a precise collision mask, the bounding box exists and is used for certain things, and so you can use this variable to find it. Please note that when the instance has no sprite assigned the value returned will be the same as the instance Y position.
     */
    bbox_top: Real

    /**
     * This variable is used to get or to set the alpha value for the sprite. Alpha is always calculated as a value between 0 and 1 where 0 is completely transparent and 1 is completely opaque. Please note that for changes in this variable to be visible, the instance should have either no draw event (and so GameMaker will default draw the sprite) or be drawn using one of the extended drawing functions like draw_self() or draw_sprite_ext().
     */
    image_alpha: Real

    /**
     * This value sets the angle (rotation) of the sprite and is measured in degrees, with the right being 0║, up being 90║, left being 180║ and down being 270║. Set this variable to 0 to reset the sprite to be drawn as was defined in the sprite editor. Please note that for changes in this variable to be visible, the instance should have either no draw event (and so GameMaker will default draw the sprite) or be drawn using one of the extended drawing functions like draw_self() or draw_sprite_ext().
     */
    image_angle: Real

    /**
     * This variable controls the "tinting" of the instance sprite and the default value is -1 (but can also be c_white). Any other value (including internal colour constants like c_red, or c_aqua) will blend the specified colour with the original sprite. Please note that for changes in this variable to be visible, the instance should have either no draw event (and so GameMaker will default draw the sprite) or be drawn using one of the extended drawing functions like draw_self() or draw_sprite_ext().
     */
    image_blend: Color

    /**
     * A sprite is made up of one or more sub-images which can make the sprite appear animated as they switch from one to the other, or can they can be switched between in code to give different "states", much like a button has in windows. If the sprite is animated, then you can get the current frame of the animation by checking the image_index variable, or if you want to change the state of a static sprite, you can select a new sub-image by setting this variable to the desired sub-image of the sprite. Please note that for changes in this variable to be visible, the instance should have either no draw event (and so GameMaker will default draw the sprite) or be drawn using one of the drawing functions like draw_self() or draw_sprite_ext() (by supplying the image_index into the appropriate argument).
     */
    image_index: Real

    /**
     * This read only variable can be used to get the number of sub-images in a sprite that has been assigned to an instance (if you need the number of sub-images for a sprite other than the one assigned to the instance you should use sprite_get_number()). Please note that when there is (for example) 1 sub-image this variable will return "1" but the image_index of that sub-image is 0.
     */
    image_number: Real

    /**
     * This variable determines the speed in which GameMaker will cycle through the sub-images for the current instance sprite. The speed value given is a multiplier, with 1 being the default value, and setting it to 0.5 will half the animation speed - as set in the Sprite Editor or Image Editor- while setting it to 2 will double it. If the sprite used has no sub-images, this variable will have no effect.
     */
    image_speed: Real

    /**
     * This value sets the horizontal scaling applied to the sprite that has been assigned to the current instance. A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the width of the sprite), larger values will scale up and negative values will flip the sprite and scale it unless the value used is exactly -1 (in which case the sprite is just flipped about its origin with no scaling).
     */
    image_xscale: Real

    /**
     * This value sets the vertical scaling (along the y-axis) applied to the sprite that has been assigned to the current instance. A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the height of the sprite), larger values will scale up and negative values will mirror the sprite and scale it unless the value used is exactly -1 (in which case the sprite is just mirrored along the y-axis with no scaling).
     */
    image_yscale: Real

    /**
     * When you define an object in GameMaker you can assign it a mask to be used for collisions rather than the one that corresponds to the defined sprite. This variable can be used to find the sprite_index of that mask (or it will return -1 if no sprite has been assigned) or to set the mask for an instance to the chosen sprite. Setting the mask index means that you can have, for example, a sprite for the instance with an irregular shape, yet give it a circular collision mask that is gotten from a different sprite.
     */
    mask_index: GMSprite

    /**
     * This read only variable returns the height of the sprite that has been assigned to the instance. This height is returned in pixels and will be dependent on the image_yscale. If you need the un-scaled height you should use sprite_get_height().
     */
    sprite_height: Real

    /**
     * This variable returns the index of the current sprite for the instance, or -1 if the instance has no sprite associated with it. You can change it to give the instance a different sprite by giving it the name of a sprite from the resource tree or by using a variable that has an externally loaded sprite indexed in it. Changing the sprite does not change the index of the currently visible frame, so if you change the sprite on frame number 3, the new sprite will be drawn with that frame visible (assuming it has the same number of frames).
     */
    sprite_index: GMSprite

    /**
     * This read only variable returns the width of the sprite that has been assigned to the instance. This width is returned in pixels and will be dependent on the image_xscale. If you need the un-scaled width you should use sprite_get_width().
     */
    sprite_width: Real

    /**
     * This read only variable returns the local xoffset (the x component of the origin as defined in the sprite editor) of the sprite that has been assigned to the instance. This xoffset is returned in pixels and will be dependent on the image_xscale, so that (for example) if a square 32x32 sprite is defined as having the x origin at 16, when that sprite is scaled by 2 this variable will return 32. If you need the un-scaled xoffset you should use sprite_get_xoffset().
     */
    sprite_xoffset: Real

    /**
     * This read only variable returns the local yoffset (the y component of the origin as defined in the sprite editor) of the sprite that has been assigned to the instance. This yoffset is returned in pixels and will be dependent on the image_yscale, so that (for example) if a square 32x32 sprite is defined as having the y origin at 16, when that sprite is scaled by 2 this variable will return 32. If you need the un-scaled yoffset you should use sprite_get_yoffset().
     */
    sprite_yoffset: Real

    /**
     * This variable holds the index of the time line currently associated with the instance. You can set this to a particular time line to use that one, or set it to -1 to stop using a time line for the instance (if no time line is defined for the instance, -1 is returned too). Note that this does not start the time line - for that use the variable timeline_running.
     */
    timeline_index: GMTimeline

    /**
     * This variable will return whether the time line is looping (true) or not (false). You can change this variable to switch looping on or off and it works with a negative time line speed (if the time line position goes below 0 it will start again at the last defined moment).
     */
    timeline_loop: Bool

    /**
     * This variable holds the current position (moment) a time line is currently at. You can change this value to skip parts of the time line, or to repeat parts or to start the time line again from the beginning.
     */
    timeline_position: Real

    /**
     * This variable holds current state of the assigned time line and will return true if it is running and false if it is not. You can also set this variable to either true or false to start and stop the time line at any time. it should be noted that a stopped time line is not reset, and so starting it again at a later time will start it from the exact moment that it was stopped at.
     */
    timeline_running: Bool

    /**
     * Normally, in each step the position in the time line is increased by 1, however you can change this amount by setting this variable to a different value. You can use real numbers (like 0.5, or 2.4 for example) and if the value is larger than one, several moments can happen within the same time step (they will all be performed in the same order as defined for the time line, so no actions will be skipped).
     */
    timeline_speed: Real

    /**
     * This variable controls whether or not the instance is currently "active". Setting it to false will prevent the instance from participating in the physics world, and setting it to true will have it participating again. Please note that this is not the same as deactivating the instance, as the instance is still visible on the screen and can still be changed through code, rather this function just prevents it from participating in the physics simulation
     */
    phy_active: Bool

    /**
     * This variable can be used to set the angular damping of the instance, or it can be used to get the current angular damping. The damping is the amount of "resistance" to angular rotation that the physics enabled instance has, with a lower value permitting the instance to rotate faster after a collision (for example) and a higher value making it require a more forceful push and rotate slower
     */
    phy_angular_damping: Real

    /**
     * This variable can be used to set the angular velocity of the instance, or it can be used to get the current angular velocity, in degrees per second and the value used can be either positive (for clockwise rotation) or negative (for anticlockwise rotation). If you set this on an instance that was previously static (ie: it has a density of 0) it will become a kinematic object and begin rotating
     */
    phy_angular_velocity: Real

    /**
     * This variable defines whether or not the instance is extremely fast moving (for example a bullet). The default value is false but if set to true this tells GameMaker that the instance will be moving at such high speeds that it will require more expensive collision detection to ensure it doesn't pass through other instances undetected
     */
    phy_bullet: Bool

    /**
     * This read-only variable returns the number of points of collision detected between the two objects in the collision
     */
    phy_collision_points: Real

    /**
     * This read-only array returns the x position of all points detected in a collision between two physics enabled instances.
     */
    phy_collision_x: Array<Real>

    /**
     * This read-only array returns the y position of all points detected in a collision between two physics enabled instances.
     */
    phy_collision_y: Array<Real>

    /**
     * This read-only variable returns the x component of the collision normal corresponding to the phy_collision_x array value. For each contact point there is an associated contact normal (which is usually the same normal for all points of contact in the collision). This contact normal is a unit vector that points from one instance in the collision to another, and can be used, for example, to calculate the correct "push" direction to resolve collisions
     */
    phy_col_normal_x: Real

    /**
     * This read-only variable returns the y component of the collision normal corresponding to the phy_collision_y array value. For each contact point there is an associated contact normal (which is usually the same normal for all points of contact in the collision). This contact normal is a unit vector that points from one instance in the collision to another, and can be used, for example, to calculate the correct "push" direction to resolve collisions
     */
    phy_col_normal_y: Real

    /**
     * This read-only variable will return the x position of the instance's center of mass. This is calculated automatically based on the density, inertia and mass of the instance as defined by the appropriate functions
     */
    phy_com_x: Real

    /**
     * This read-only variable will return the y position of the instance's center of mass. This is calculated automatically based on the density, inertia and mass of the instance as defined by the appropriate functions
     */
    phy_com_y: Real

    /**
     * A dynamic instance is one that is fully simulated within the physics world and this read-only variable will return true if the instance being checked is fully simulated or false if it is not
     */
    phy_dynamic: Bool

    /**
     * This variable can be used to set whether or not the instance can be affected by rotational forces (default is false). If this is set to true, no external force (either from coded impulses or forces, or from collisions) will affect the rotation value of the instance and this would have to be set manually using the phy_rotation variable
     */
    phy_fixed_rotation: Bool

    /**
     * Inertia is the measure of how hard it is to make something start or stop moving, so the lower the value for this read-only variable and the easier it will be to set the instance in motion, while higher values will require more force to start it moving
     */
    phy_inertia: Real

    /**
     * This read-only variable will return true if the instance is classed as being a kinematic object, or false if it is not. A kinematic instance is one that has infinite mass (a density of 0) but can move. So, to make an instance kinematic, you would first create a static instance and then set one or more of the instance variables related to movement (ie: phy_speed_x, phy_speed_y, or phy_angular_velocity)
     */
    phy_kinematic: Bool

    /**
     * This variable can be used to set the linear damping of the instance, or it can be used to get the current linear damping. The damping is the amount of "resistance" to forward movement that the physics enabled instance has, with a lower value permitting the instance to move and accelerate faster and a higher value making it require a more forceful push
     */
    phy_linear_damping: Real

    /**
     * This variable can be used to get or change the x component of the instance's linear velocity vector and is defined in pixels per second (for pixels per step, see phy_speed_x). Altering this for a static instance (ie: an instance with 0 density) will turn it into a kinematic instance
     */
    phy_linear_velocity_x: Real

    /**
     * This variable can be used to get or change the y component of the instance's linear velocity vector and is defined in pixels per second (for pixels per step, see phy_speed_y). Altering this for a static instance (ie: an instance with 0 density) will turn it into a kinematic instance
     */
    phy_linear_velocity_y: Real

    /**
     * This read-only variable returns the mass of the instance in kilograms. This value is calculated automatically based on the surface area of the assigned fixtures and their density values, but it can be changed using the function physics_mass_properties().
     */
    phy_mass: Real

    /**
     * This variable can be used to get (or to set) the x position of the instance within the game room physics world. Please note that the physics world may present errors when instances are moved by directly setting this variable as it will interrupt the continuous simulation. This variable is the physics equivalent of the instance variable x.
     */
    phy_position_x: Real

    /**
     * This variable can be used to get (or to set) the previous x position of the instance within the game room physics world. This is the position of the instance within the physics world in the previous step to the current one.
     */
    phy_position_xprevious: Real

    /**
     * This variable can be used to get (or to set) the y position of the instance within the game room physics world. Please note that the physics world may present errors when instances are moved by directly setting this variable as it will interrupt the continuous simulation. This variable is the physics equivalent of the instance variable y.
     */
    phy_position_y: Real

    /**
     * This variable can be used to get (or to set) the previous y position of the instance within the game room physics world. This is the position of the instance within the physics world in the previous step to the current one
     */
    phy_position_yprevious: Real

    /**
     * This variable can be used to get (or to set) the angle of the instances fixture in degrees, similar to setting or getting the image_angle. However note that in the physics world rotations are calculated in the opposite way to the normal GameMaker game world, meaning that vector functions like point_direction()should have their return values modified (simply making positive to negative should resolve this).
     */
    phy_rotation: Real

    /**
     * This read-only variable returns whether or not the instance is currently "sleeping" (true) or not (false), A "sleeping" instance is one that is not actively engaged in any physical simulation. GameMaker will put objects to sleep to save simulation cycles when an instance is at rest and not in collision with another instance
     */
    phy_sleeping: Bool

    /**
     * This read-only variable returns the current speed of the physics enabled instance, defined in pixels per step. Should you need to change this value, you must do so by changing the x and y vectors using the variables phy_speed_x and phy_speed_y.
     */
    phy_speed: Real

    /**
     * This variable can be used to get or change the x component of the instance's linear speed vector and is defined in pixels per step (for pixels per second, see phy_linear_velocity_x). Altering this for a static instance (ie: an instance with 0 density) will turn it into a kinematic instance.
     */
    phy_speed_x: Real

    /**
     * This variable can be used to get or change the y component of the instance's linear speed vector and is defined in pixels per step (for pixels per second, see phy_linear_velocity_y). Altering this for a static instance (ie: an instance with 0 density) will turn it into a kinematic instance.
     */
    phy_speed_y: Real

    /**
     * None
     */
    in_collision_tree: Bool

    /**
     * This identifies which player the instance belongs to in the rollback networking system.
     */
    player_id: Real

    /**
     * This identifies if this instance belongs to the local player in the rollback networking system.
     */
    player_local: Bool

    /**
     * The URL to the avatar associated with this player in Opera GX, for rollback networking.
     */
    player_avatar_url: String

    /**
     * A sprite of the avatar associated with this player in Opera GX, for rollback networking.
     */
    player_avatar_sprite: GMSprite

    /**
     * This identifies if this instance belongs a Guest or User account in the rollback networking system.
     */
    player_type: String

    /**
     * This is the user id in Opera GX in the rollback networking system.
     */
    player_user_id: String
}

declare interface GMAnimCurve {}
declare interface GMAudioGroup {}
declare interface GMFont {}
declare interface GMParticleSystem {}
declare interface GMSequence {}
declare interface GMShader {}
declare interface GMSound {}
declare interface GMSprite {}
declare interface GMTileSet {}
declare interface GMTimeline {}
declare interface AssetType {}
declare interface AudioFalloff {}
declare interface All {}
declare interface BufferDataType {}
declare interface AudioChannelType {}
declare interface Color {}
declare interface BlendModeFactor {}
declare interface BlendMode {}
declare interface CullMode {}
declare interface ZFunction {}
declare interface EffectType {}
declare interface ParticleRegionShape {}
declare interface ParticleDistribution {}
declare interface PathAction {}
declare interface EventType {}
declare interface AsyncEventType {}
declare interface EventNumber {}
declare interface VirtualKey {}
declare interface LayerElementType {}
declare interface SequenceDirection {}
declare interface TileMask {}
declare interface SequenceTrackType {}
declare interface BBoxMode {}
declare interface SpriteSpeed {}
declare interface BufferType {}
declare interface SeekOffset {}
declare interface Cursor {}
declare interface DsType {}
declare interface ParticleShape {}
declare interface VertexUsage {}
declare interface VertexType {}
declare interface PrimitiveType {}
declare interface VideoStatus {}
declare interface VideoFormat {}
declare interface SurfaceFormatType {}
declare interface HAlign {}
declare interface VAlign {}
declare interface FileAttribute {}
declare interface MouseButton {}
declare interface GamepadButton {}
declare interface GamepadAxis {}
declare interface VirtualKeyboardType {}
declare interface VirtualKeyboardReturnType {}
declare interface GameSpeed {}
declare interface MatrixType {}
declare interface Other {}
declare interface SocketType {}
declare interface NetworkConfig {}
declare interface ExternalCallType {}
declare interface ExternalArgumentType {}
declare interface NetworkConnectType {}
declare interface PhysicsJointProperty {}
declare interface PhysicsParticleFlag {}
declare interface PhysicsParticleGroupFlag {}
declare interface PhysicsDebugFlag {}
declare interface TimeSourceUnits {}
declare interface AnimCurveChannel {}
declare interface SeqPlay {}
declare interface BrowserType {}
declare interface DeviceType {}
declare interface OperatingSystem {}
declare interface TimeSourceState {}
declare interface TimeSourceExpiryType {}
declare interface VirtualKeyboardAutoCapitalizeType {}
declare interface CollisionMask {}
declare interface Instance extends GMObject {}
declare interface Pointer {}
declare interface GMTexturePage {}
declare interface GMPath {}
declare interface Asset {}
declare interface GMRoom {}
declare interface LayerType {}

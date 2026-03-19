declare namespace Struct {
  interface Sequence {
    name: String;
    loopmode: Constant.SeqPlay;
    playbackSpeed: Real;
    playbackSpeedType: Constant.SpriteSpeed;
    length: Real;
    volume: Real;
    xorigin: Real;
    yorigin: Real;
    messageEventKeyframes: Array<any>;
    momentKeyframes: Array<any>;
    tracks: Array<any>;
  }
  interface SequenceInstance {
    sequence: Struct.Sequence;
    headPosition: Real;
    headDirection: Constant.SequenceDirection;
    speedScale: Real;
    volume: Real;
    paused: Bool;
    finished: Bool;
    activeTracks: Array<Struct.ActiveTrack>;
    elementID: Id.SequenceElement;
  }
  interface Track {
    name: String;
    type: Constant.SequenceTrackType;
    tracks: Array<Struct.Track>;
    visible: Bool;
    keyframes: Array<Struct.Keyframe>;
  }
  interface Keyframe {
    frame: Real;
    length: Real;
    stretch: Bool;
    disabled: Bool;
    channels: Array<any>;
  }
  interface KeyChannel {
    channel: Real;
  }
  interface GraphicTrack {
    spriteIndex: Asset.GMSprite;
  }
  interface SequenceTrack {
    sequence: Undefined;
  }
  interface AudioTrack {
    soundIndex: Asset.GMSound;
    emitterIndex: Id.EmitterIndex;
    playbackMode: Real;
  }
  interface SpriteTrack {
    imageIndex: Real;
  }
  interface BoolTrack {
    value: Bool;
  }
  interface StringTrack {
    value: String;
  }
  interface ColourTrack {
    colour: Constant.Color;
  }
  interface ColorTrack {
    color: Constant.Color;
  }
  interface RealTrack {
    value: Real;
    curve: Real;
  }
  interface InstanceTrack {
    objectIndex: Asset.GMObject;
  }
  interface TextTrack {
    text: String;
  }
  interface MessageEvent {
    events: Array<any>;
  }
  interface Moment {
    event: Real;
  }
  interface AnimCurve {
    name: String;
    graphType: Real;
    channels: Array<any>;
  }
  interface AnimCurveChannel {
    type: Constant.AnimCurveChannel;
    iterations: Real;
    points: Real;
  }
  interface AnimCurvePoint {
    posx: Real;
    value: Real;
  }
  interface ActiveTrack {
    activeTracks: Array<Struct.Track>;
    matrix: Array<any>;
    posx: Real;
    posy: Real;
    scalex: Real;
    scaley: Real;
    xorigin: Real;
    yorigin: Real;
    gain: Real;
    pitch: Real;
    width: Real;
    height: Real;
    imageindex: Real;
    imagespeed: Real;
    colorMultiply: Array<any>;
    colourMultiply: Array<any>;
    emitterIndex: Id.AudioEmitter;
    track: Struct.Track;
    parent: Struct.SequenceInstance;
    frameSizeX: Real;
    frameSizeY: Real;
    characterSpacing: Real;
    lineSpacing: Real;
    paragraphSpacing: Real;
  }
  interface GCStats {
    objects_touched: Real;
    objects_collected: Real;
    traversal_time: Real;
    collection_time: Real;
    gc_frame: Real;
    generation_collected: Real;
    num_generations: Real;
    num_objects_in_generation: Array<any>;
  }
  interface WeakRef {
    ref: ArgumentIdentity;
  }
  interface FontInfo {
    ascenderOffset: Real;
    size: Real;
    spriteIndex: Asset.GMSprite;
    texture: Asset.GMTexturePage;
    name: String;
    bold: Bool;
    italic: Bool;
    glyphs: Struct;
  }
  interface FontInfoGlyph {
    char: Real;
    x: Real;
    y: Real;
    w: Real;
    h: Real;
    shift: Real;
    offset: Real;
    kerning: Array<any>;
  }
  interface Exception {
    message: String;
    longMessage: String;
    script: String;
    stacktrace: Array<String>;
  }
  interface AudioBus {
    bypass: Bool;
    gain: Real;
    effects: Array<Struct.AudioEffect>;
  }
  interface AudioEffect {
    bypass: Bool;
  }

  type Fx = any;
  type SpriteInfo = any;
  type SkeletonSkin = any;
  type NineSlice = any;

  interface Struct extends Record<string, any> {}
}

declare const enum AudioEffectType {
    /**
     * Distorts sound by reducing bandwidth.
     */
    Bitcrusher = 0,

    /**
     * A delay/echo effect.
     */
    Delay = 1,

    /**
     * A smoothed gain scalar effect.
     */
    Gain = 2,

    /**
     * A high-pass filter effect.
     */
    HPF2 = 3,

    /**
     * A low-pass filter effect.
     */
    LPF2 = 4,

    /**
     * A reverberation effect.
     */
    Reverb1 = 5,

    /**
     * A gain modulator effect.
     */
    Tremolo = 6,

    /**
     * A peak EQ filter effect.
     */
    PeakEQ = 7,

    /**
     * A high-shelf filter effect
     */
    HiShelf = 8,

    /**
     * A low-shelf filter effect.
     */
    LoShelf = 9,

    /**
     * A parametric EQ effect.
     */
    EQ= 10,

    /**
     * A dynamic range compressor effect.
     */
    Compressor= 11,

}
declare const enum AudioLFOType {
    /**
     * An inverted sawtooth waveshape.
     */
    InvSawtooth = 0,

    /**
     * A sawtooth waveshape.
     */
    Sawtooth = 1,

    /**
     * A sine waveshape.
     */
    Sine = 2,

    /**
     * A square waveshape.
     */
    Square = 3,

    /**
     * A triangle waveshape.
     */
    Triangle = 4,

}
declare const enum flexpanel_unit {
    /**
     * Number of pixels.
     */
    point = 1,

    /**
     * A Percentage value.
     */
    percent = 2,

    /**
     * auto
     */
    auto = 3,

}
declare const enum flexpanel_position_type {
    /**
     * Static position type
     */
    static= 0,

    /**
     * Relative position type
     */
    relative= 1,

    /**
     * Absolute position type
     */
    absolute= 2,

}
declare const enum flexpanel_justify {
    /**
     * flex_start
     */
    start= 0,

    /**
     * center
     */
    center= 1,

    /**
     * flex_end
     */
    flex_end= 2,

    /**
     * space_between
     */
    space_between= 3,

    /**
     * space_around
     */
    space_around= 4,

    /**
     * space_evenly
     */
    space_evenly= 5,

}
declare const enum flexpanel_direction {
    /**
     * Inherit layout direction from parent
     */
    inherit= 0,

    /**
     * Layout calculated from left to right
     */
    LTR= 1,

    /**
     * Layout calculated from right to left
     */
    RTL= 2,

}
declare const enum flexpanel_gutter {
    /**
     * gapColumn
     */
    column= 0,

    /**
     * gapRow
     */
    row= 1,

    /**
     * gap
     */
    all_gutters= 2,

}
declare const enum flexpanel_display {
    /**
     * Normal display
     */
    flex = 0,

    /**
     * No display
     */
    none = 1,

}
declare const enum flexpanel_flex_direction {
    /**
     * Vertical layout
     */
    column = 0,

    /**
     * Reverse vertical layout
     */
    column_reverse = 1,

    /**
     * Horizontal layout
     */
    row = 2,

    /**
     * Reverse horizontal layout
     */
    row_reverse = 3,

}
declare const enum flexpanel_align {
    /**
     * Auto align
     */
    auto = 0,

    /**
     * flex_start
     */
    flex_start = 1,

    /**
     * center
     */
    center = 2,

    /**
     * flex_end
     */
    flex_end = 3,

    /**
     * stretch
     */
    stretch = 4,

    /**
     * baseline
     */
    baseline = 5,

    /**
     * space_between
     */
    space_between = 6,

    /**
     * space_around
     */
    space_around = 7,

    /**
     * space_evenly
     */
    space_evenly = 8,

}
declare const enum flexpanel_wrap {
    /**
     * Disable wrapping
     */
    no_wrap = 0,

    /**
     * Enable wrapping
     */
    wrap = 1,

    /**
     * Enable reverse wrapping
     */
    reverse = 2,

}
declare const enum flexpanel_edge {
    /**
     * the left edge
     */
    left = 0,

    /**
     * the top edge
     */
    top = 1,

    /**
     * The right edge
     */
    right = 2,

    /**
     * The bottom edge
     */
    bottom = 3,

    /**
     * Start of the node
     */
    start = 4,

    /**
     * End of the node
     */
    _end = 5,

    /**
     * Horizontal edges
     */
    horizontal = 6,

    /**
     * Vertical edges
     */
    vertical = 7,

    /**
     * All edges
     */
    all_edges = 8,

}

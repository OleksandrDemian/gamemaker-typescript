/**
 * 1 (although any value equal to or greater than 1 will evaluate as true)
 */
/// declare const true: Bool
/**
 * 0 (although any value less than 1 will also evaluate as false)
 */
/// declare const false: Bool
/**
 * None
 */
/// declare const self: Instance
/**
 * None
 */
/// declare const global: Real
/**
 * None
 */
/// declare const undefined: Undefined
/**
 * None
 */
/// declare const NaN: Real

/**
 * None
 */
declare const $$implicit_argument$$: Undefined
/**
 * The given name refers to an object.
 */
declare const asset_object: Real
/**
 * The given name refers to a sprite.
 */
declare const asset_sprite: Real
/**
 * The given name refers to a sound.
 */
declare const asset_sound: Real
/**
 * The given name refers to a room.
 */
declare const asset_room: Real
/**
 * The given name refers to a tile set.
 */
declare const asset_tiles: Real
/**
 * The given name refers to a path.
 */
declare const asset_path: Real
/**
 * The given name refers to a script.
 */
declare const asset_script: Real
/**
 * The given name refers to a font.
 */
declare const asset_font: Real
/**
 * The given name refers to a time line.
 */
declare const asset_timeline: Real
/**
 * The given name refers to a shader.
 */
declare const asset_shader: Real
/**
 * The given name refers to an Animation Curve.
 */
declare const asset_animationcurve: Real
/**
 * The given name refers to a Particle System.
 */
declare const asset_particlesystem: Real
/**
 * The given name refers to a Sequence.
 */
declare const asset_sequence: Real
/**
 * The given name refers to an asset that either does not exist, or is not one of the above listed.
 */
declare const asset_unknown: Real
/**
 * Unknown layer type.
 */
declare const layer_type_unknown: Real
/**
 * A layer of room type.
 */
declare const layer_type_room: Real
/**
 * A ui layer using viewports space.
 */
declare const layer_type_ui_viewports: Real
/**
 * A ui layer using display space.
 */
declare const layer_type_ui_display: Real
/**
 *  gain = (listener_distance / reference_distance) ^ (-falloff_factor)
 */
declare const audio_falloff_exponent_distance: Real
/**
 *  distance = clamp(listener_distance, reference_distance, maximum_distance) gain = (distance / reference_distance) ^ (-falloff_factor)
 */
declare const audio_falloff_exponent_distance_clamped: Real
/**
 *  distance = clamp(listener_distance, reference_distance, maximum_distance) gain = ((distance / reference_distance) ^ (-falloff_factor)) * (((maximum_distance - distance) / (maximum_distance - reference_distance)) ^ (distance / maximum_distance))
 */
declare const audio_falloff_exponent_distance_scaled: Real
/**
 *  gain = reference_distance / (reference_distance + falloff_factor * (listener_distance - reference_distance))
 */
declare const audio_falloff_inverse_distance: Real
/**
 *  distance = clamp(listener_distance, reference_distance, maximum_distance) gain = reference_distance / (reference_distance + falloff_factor * (distance - reference_distance))
 */
declare const audio_falloff_inverse_distance_clamped: Real
/**
 *  distance = clamp(listener_distance, reference_distance, maximum_distance) gain = (reference_distance / (reference_distance + falloff_factor * (distance - reference_distance))) * (((maximum_distance - distance) / (maximum_distance - reference_distance)) ^ (distance / maximum_distance))
 */
declare const audio_falloff_inverse_distance_scaled: Real
/**
 *  distance = min(distance, maximum_distance) gain = (1 - falloff_factor * (distance - reference_distance) / (maximum_distance - reference_distance))
 */
declare const audio_falloff_linear_distance: Real
/**
 *  distance = clamp(listener_distance, reference_distance, maximum_distance) gain = (1 - falloff_factor * (distance - reference_distance) / (maximum_distance - reference_distance))
 */
declare const audio_falloff_linear_distance_clamped: Real
/**
 *  gain = 1
 */
declare const audio_falloff_none: Real
/**
 * Mono (single channel) audio.
 */
declare const audio_mono: Real
/**
 * Stereo (dual channel) audio.
 */
declare const audio_stereo: Real
/**
 * 3D (5.1) audio.
 */
declare const audio_3d: Real
/**
 * Create event
 */
declare const ev_create: Real
/**
 * Destroy event
 */
declare const ev_destroy: Real
/**
 * Clean Up Event
 */
declare const ev_cleanup: Real
/**
 * Step event
 */
declare const ev_step: Real
/**
 * Step
 */
declare const ev_step_normal: Real
/**
 * Begin Step
 */
declare const ev_step_begin: Real
/**
 * End Step
 */
declare const ev_step_end: Real
/**
 * Alarm event
 */
declare const ev_alarm: Real
/**
 * Keyboard/Keyboard Pressed/Keyboard Released
 */
declare const ev_keyboard: Real
/**
 * Mouse event
 */
declare const ev_mouse: Real
/**
 * Left button held down on object
 */
declare const ev_left_button: Real
/**
 * Right button held down on object
 */
declare const ev_right_button: Real
/**
 * Middle button (or clickable wheel) held down on object
 */
declare const ev_middle_button: Real
/**
 * No buttons held down
 */
declare const ev_no_button: Real
/**
 * Left button just pressed on object
 */
declare const ev_left_press: Real
/**
 * Right button just pressed on object
 */
declare const ev_right_press: Real
/**
 * Middle button (or clickable wheel) just pressed on object
 */
declare const ev_middle_press: Real
/**
 * Left button just released on object
 */
declare const ev_left_release: Real
/**
 * Right button just released on object
 */
declare const ev_right_release: Real
/**
 * Middle button just released on object
 */
declare const ev_middle_release: Real
/**
 * Mouse just entered object's bounding box
 */
declare const ev_mouse_enter: Real
/**
 * Mouse just left object's bounding box
 */
declare const ev_mouse_leave: Real
/**
 * Mouse wheel scrolled upwards
 */
declare const ev_mouse_wheel_up: Real
/**
 * Mouse wheel scrolled downwards
 */
declare const ev_mouse_wheel_down: Real
/**
 * Left button held down anywhere
 */
declare const ev_global_left_button: Real
/**
 * Right button held down anywhere
 */
declare const ev_global_right_button: Real
/**
 * Middle button (or clickable wheel) held down anywhere
 */
declare const ev_global_middle_button: Real
/**
 * Left button just pressed anywhere
 */
declare const ev_global_left_press: Real
/**
 * Right button just pressed anywhere
 */
declare const ev_global_right_press: Real
/**
 * Middle button (or clickable wheel) just pressed anywhere
 */
declare const ev_global_middle_press: Real
/**
 * Left button just released anywhere
 */
declare const ev_global_left_release: Real
/**
 * Right button just released anywhere
 */
declare const ev_global_right_release: Real
/**
 * Middle button just released anywhere
 */
declare const ev_global_middle_release: Real
/**
 * A gesture event (Tap, Drag, Flick, Pinch or Rotate)
 */
declare const ev_gesture: Real
/**
 * A single click/touch and release has been detected for an instance
 */
declare const ev_gesture_tap: Real
/**
 * Two quick touches/clicks and releases have been detected for an instance
 */
declare const ev_gesture_double_tap: Real
/**
 * The beginning of a drag gesture has been detected for an instance
 */
declare const ev_gesture_drag_start: Real
/**
 * A touch/click has been held and moved for an instance
 */
declare const ev_gesture_dragging: Real
/**
 * The release of the touch/click from a drag has been detected for an instance
 */
declare const ev_gesture_drag_end: Real
/**
 * The release of a touch/click from a drag had enough movement for a flick event to be detected for the instance
 */
declare const ev_gesture_flick: Real
/**
 * Two touches and a straight movement have been detected for an instance
 */
declare const ev_gesture_pinch_start: Real
/**
 * The movement between two touches for an instance has been detected as inwards
 */
declare const ev_gesture_pinch_in: Real
/**
 * The movement between two touches for an instance has been detected as outwards
 */
declare const ev_gesture_pinch_out: Real
/**
 * The release of one (or both) touches for a pinch has been detected for an instance
 */
declare const ev_gesture_pinch_end: Real
/**
 * The movement between two touches for an instance has been detected as a rotation
 */
declare const ev_gesture_rotate_start: Real
/**
 * The movement between two touches for an instance has been detected as rotating
 */
declare const ev_gesture_rotating: Real
/**
 * The release of one (or both) touches for a rotation has been detected for an instance
 */
declare const ev_gesture_rotate_end: Real
/**
 * A single click/touch and release has been detected anywhere in the room
 */
declare const ev_global_gesture_tap: Real
/**
 * Two quick touches/clicks and releases have been detected anywhere in the room
 */
declare const ev_global_gesture_double_tap: Real
/**
 * The beginning of a drag gesture has been detected anywhere in the room
 */
declare const ev_global_gesture_drag_start: Real
/**
 * A touch/click has been held and moved anywhere in the room
 */
declare const ev_global_gesture_dragging: Real
/**
 * The release of the touch/click from a drag has been detected anywhere in the room
 */
declare const ev_global_gesture_drag_end: Real
/**
 * The release of a touch/click from a drag had enough movement for a flick event to be detected anywhere in the room
 */
declare const ev_global_gesture_flick: Real
/**
 * Two touches and a straight movement have been detected anywhere in the room
 */
declare const ev_global_gesture_pinch_start: Real
/**
 * The movement between two touches anywhere in the room has been detected as inwards
 */
declare const ev_global_gesture_pinch_in: Real
/**
 * The movement between two touches anywhere in the room has been detected as outwards
 */
declare const ev_global_gesture_pinch_out: Real
/**
 * The release of one (or both) touches for a pinch has been detected anywhere in the room
 */
declare const ev_global_gesture_pinch_end: Real
/**
 * The movement between two touches anywhere in the room has been detected as a rotation
 */
declare const ev_global_gesture_rotate_start: Real
/**
 * The movement between two touches anywhere in the room has been detected as rotating
 */
declare const ev_global_gesture_rotating: Real
/**
 * The release of one (or both) touches for a rotation has been detected anywhere in the room
 */
declare const ev_global_gesture_rotate_end: Real
/**
 * Collision with an object
 */
declare const ev_collision: Real
/**
 * One of the actions listed under 'Other'
 */
declare const ev_other: Real
/**
 * Whether the instance is outside of the room
 */
declare const ev_outside: Real
/**
 * Whether the instance is intersecting the boundary
 */
declare const ev_boundary: Real
/**
 * Whether the instance is outside the given view (0 to 7)
 */
declare const ev_outside_view0: Real
/**
 * Whether the instance is interesecting with the boundary of the given view (0 to 7)
 */
declare const ev_boundary_view0: Real
/**
 * Only triggered at the start of the game
 */
declare const ev_game_start: Real
/**
 * Only triggered at the end of the game
 */
declare const ev_game_end: Real
/**
 * Only triggered at the start of a room
 */
declare const ev_room_start: Real
/**
 * Only triggered at the end of a room
 */
declare const ev_room_end: Real
/**
 * If the object's sprite has reached the end of its animation
 */
declare const ev_animation_end: Real
/**
 * Animation event that runs every step for objects that use skeletal animations
 */
declare const ev_animation_update: Real
/**
 * Animation event that runs for skeletal animations as assigned in the skeletal animation tool
 */
declare const ev_animation_event: Real
/**
 * If the object has reached the end of a path it is following
 */
declare const ev_end_of_path: Real
/**
 * One of the 16 available user events.
 */
declare const ev_user0: Real
/**
 * Broadcast Message event used for sprites and sequences
 */
declare const ev_broadcast_message: Real
/**
 * Draw event. NOTE: This event cannot be forced outside of a draw event and the constants and the constants are only for identifying the event when performed in these cases.
 */
declare const ev_draw: Real
/**
 * The draw begin event.
 */
declare const ev_draw_begin: Real
/**
 * The draw end event.
 */
declare const ev_draw_end: Real
/**
 * The pre draw event.
 */
declare const ev_draw_pre: Real
/**
 * The normal draw event.
 */
declare const ev_draw_normal: Real
/**
 * The post draw event.
 */
declare const ev_draw_post: Real
/**
 * The draw gui event.
 */
declare const ev_gui: Real
/**
 * The draw gui begin event.
 */
declare const ev_gui_begin: Real
/**
 * The draw gui end event.
 */
declare const ev_gui_end: Real
/**
 * Image Loaded event
 */
declare const ev_async_web_image_load: Real
/**
 * In-App Purchase event
 */
declare const ev_async_web_iap: Real
/**
 * Cloud event
 */
declare const ev_async_web_cloud: Real
/**
 * Networking event
 */
declare const ev_async_web_networking: Real
/**
 * Steam event
 */
declare const ev_async_web_steam: Real
/**
 * Social event
 */
declare const ev_async_social: Real
/**
 * Push Notification event
 */
declare const ev_async_push_notification: Real
/**
 * Save/Load Event
 */
declare const ev_async_save_load: Real
/**
 * Audio Recording event
 */
declare const ev_async_audio_recording: Real
/**
 * Audio Playback event
 */
declare const ev_async_audio_playback: Real
/**
 * Audio Playback Ended event
 */
declare const ev_async_audio_playback_ended: Real
/**
 * System event
 */
declare const ev_async_system_event: Real
/**
 * Dialog event
 */
declare const ev_async_dialog: Real
/**
 * Web event
 */
declare const ev_async_web: Real
/**
 * End the path
 */
declare const path_action_stop: Real
/**
 * Continue the path from the start, jumping to the start position again if the path is not closed
 */
declare const path_action_restart: Real
/**
 * Continue from the current position
 */
declare const path_action_continue: Real
/**
 * Go backwards along the path again (achieved by reversing the path movement speed)
 */
declare const path_action_reverse: Real
/**
 * The element is a background.
 */
declare const layerelementtype_background: Real
/**
 * The element is an instance.
 */
declare const layerelementtype_instance: Real
/**
 * The element is a sprite asset.
 */
declare const layerelementtype_sprite: Real
/**
 * The element is a tilemap.
 */
declare const layerelementtype_tilemap: Real
/**
 * The element is a particle system.
 */
declare const layerelementtype_particlesystem: Real
/**
 * The element is a legacy background tile (this is only valid for projects that have been imported from previous versions of GameMaker).
 */
declare const layerelementtype_tile: Real
/**
 * The element is a sequence asset.
 */
declare const layerelementtype_sequence: Real
/**
 * The element is a text element.
 */
declare const layerelementtype_text: Real
/**
 * Used to set/get the rotate bit of a tile data blob.
 */
declare const tile_rotate: Real
/**
 * Used to set/get the mirror bit of a tile data blob.
 */
declare const tile_mirror: Real
/**
 * Used to set/get the flip bit of a tile data blob.
 */
declare const tile_flip: Real
/**
 * A special constant that is for "and"-ing with the tile data blob to extract the tile index.
 */
declare const tile_index_mask: Real
/**
 * Indicates that text should be aligned to the left of the frame.
 */
declare const textalign_left: Real
/**
 * Indicates that text should be aligned to the right of the frame.
 */
declare const textalign_right: Real
/**
 * Indicates that text should be centred horizontally within the frame.
 */
declare const textalign_center: Real
/**
 * Indicates that text should be justified within the frame.
 */
declare const textalign_justify: Real
/**
 * Indicates that text should be aligned to the top of the frame.
 */
declare const textalign_top: Real
/**
 * Indicates that text should be aligned to the bottom of the frame.
 */
declare const textalign_bottom: Real
/**
 * Indicates that text should be centered vertically within the frame.
 */
declare const textalign_middle: Real
/**
 * This is a graphics (sprite) asset track.
 */
declare const seqtracktype_graphic: Real
/**
 * This is an audio asset track.
 */
declare const seqtracktype_audio: Real
/**
 * This is an audio effect parameter track.
 */
declare const seqtracktype_audioeffect: Real
/**
 * This is an instance asset track.
 */
declare const seqtracktype_instance: Real
/**
 * This is a sequence asset track.
 */
declare const seqtracktype_sequence: Real
/**
 * This is a clip mask group asset track.
 */
declare const seqtracktype_clipmask: Real
/**
 * This is a clip mask sprite asset track used for generating the clip mask.
 */
declare const seqtracktype_clipmask_mask: Real
/**
 * This is a clip mask sprite asset track that is being masked.
 */
declare const seqtracktype_clipmask_subject: Real
/**
 * This group folder asset track.
 */
declare const seqtracktype_group: Real
/**
 * This is a colour data parameter track.
 */
declare const seqtracktype_colour: Real
/**
 * This is a real number value parameter track.
 */
declare const seqtracktype_real: Real
/**
 * This is a broadcast message track.
 */
declare const seqtracktype_message: Real
/**
 * This is an event/moment track.
 */
declare const seqtracktype_moment: Real
/**
 * This is a text track.
 */
declare const seqtracktype_text: Real
/**
 * This is a particle system asset track.
 */
declare const seqtracktype_particlesystem: Real
/**
 * Not used currently.
 */
declare const seqtracktype_bool: Real
/**
 * Not used currently.
 */
declare const seqtracktype_string: Real
/**
 * Not used currently.
 */
declare const seqtracktype_spriteframes: Real
/**
 * Not used currently.
 */
declare const seqtracktype_empty: Real
/**
 * The sound will loop when played.
 */
declare const seqaudiokey_loop: Real
/**
 * The sound will only play once then stop.
 */
declare const seqaudiokey_oneshot: Real
/**
 * The text will be left-aligned.
 */
declare const seqtextkey_left: Real
/**
 * The text will be center-aligned.
 */
declare const seqtextkey_center: Real
/**
 * The text will be right-aligned.
 */
declare const seqtextkey_right: Real
/**
 * The text will be justified.
 */
declare const seqtextkey_justify: Real
/**
 * The text will be vertically aligned to the top of the frame.
 */
declare const seqtextkey_top: Real
/**
 * The text will be vertically aligned to the middle of the frame.
 */
declare const seqtextkey_middle: Real
/**
 * The text will be vertically aligned to the bottom of the frame.
 */
declare const seqtextkey_bottom: Real
/**
 * The sequence will play frames in an incremental order from left to right
 */
declare const seqdir_right: Real
/**
 * The sequence will play frames in a decremental order from right to left
 */
declare const seqdir_left: Real
/**
 * The sequence will play once then stop when finished.
 */
declare const seqplay_oneshot: Real
/**
 * The sequence will loop, with the playhead going back to the start when it reaches the end of the playback region.
 */
declare const seqplay_loop: Real
/**
 * The sequence will loop, with the playhead reversing direction when it reaches the end of the playback region.
 */
declare const seqplay_pingpong: Real
/**
 * Specifies that playbackSpeed should be interpreted as frames-per-second
 */
declare const spritespeed_framespersecond: Real
/**
 * Specifies that playbackSpeed should be interpreted as frames-per-game-frame.
 */
declare const spritespeed_framespergameframe: Real
/**
 * The left edge slice
 */
declare const nineslice_left: Real
/**
 * The top edge slice
 */
declare const nineslice_top: Real
/**
 * The right edge slice
 */
declare const nineslice_right: Real
/**
 * The bottom edge slice
 */
declare const nineslice_bottom: Real
/**
 * The centre slice
 */
declare const nineslice_centre: Real
/**
 * The slice will be stretched
 */
declare const nineslice_stretch: Real
/**
 * The slice will be repeated
 */
declare const nineslice_repeat: Real
/**
 * The slice will be repeated by mirroring
 */
declare const nineslice_mirror: Real
/**
 * The slice will not be stretched or repeated, resulting in a blank area after it
 */
declare const nineslice_blank: Real
/**
 * The slice will not appear at all
 */
declare const nineslice_hide: Real
/**
 * The texture group is unloaded
 */
declare const texturegroup_status_unloaded: Real
/**
 * The texture group is loading
 */
declare const texturegroup_status_loading: Real
/**
 * The texture group is loaded
 */
declare const texturegroup_status_loaded: Real
/**
 * The texture group is decompressed and ready to be used
 */
declare const texturegroup_status_fetched: Real
/**
 * 8 bit integer per channel (normalised) RGBA surface format
 */
declare const surface_rgba8unorm: Real
/**
 * 16 bit float single channel surface format
 */
declare const surface_r16float: Real
/**
 * 32 bit float single channel surface format
 */
declare const surface_r32float: Real
/**
 * 4 bit integer per channel (normalised) RGBA surface format
 */
declare const surface_rgba4unorm: Real
/**
 * 8 bit integer single channel (normalised) surface format
 */
declare const surface_r8unorm: Real
/**
 * 8 bit integer two channel (normalised) surface format
 */
declare const surface_rg8unorm: Real
/**
 * 16 bit float per channel RGBA surface format
 */
declare const surface_rgba16float: Real
/**
 * 32 bit float per channel RGBA surface format
 */
declare const surface_rgba32float: Real
/**
 * Automatic - The bounding box will be calculated automatically, based on the tolerance setting for the sprite
 */
declare const bboxmode_automatic: Real
/**
 * Full Image - The bounding box will be set to use the full width and height of the sprite, regardless of the tolerance and "empty" pixels
 */
declare const bboxmode_fullimage: Real
/**
 * Manual - The bounding box has been set manually to user defined values (either in the sprite editor, or using the function sprite_set_bbox())
 */
declare const bboxmode_manual: Real
/**
 * A rectangular (non-rotating) rectangle collision mask shape
 */
declare const bboxkind_rectangular: Real
/**
 * An elliptical collision mask shape
 */
declare const bboxkind_ellipse: Real
/**
 * A diamond collision mask shape
 */
declare const bboxkind_diamond: Real
/**
 * A precise collision mask, where the mask will conform to the non-transparent pixels of the sprite, based on the tolerance value given (see below))
 */
declare const bboxkind_precise: Real
/**
 * Collision mesh from Spine sprite
 */
declare const bboxkind_spine: Real
/**
 * A buffer of fixed size.
 */
declare const buffer_fixed: Real
/**
 * A buffer that will "grow" dynamically as data is added
 */
declare const buffer_grow: Real
/**
 * A buffer where the data will "wrap". When the data being added reaches the limit of the buffer size, the overwrite will be placed back at the start of the buffer, and further writing will continue from that point.
 */
declare const buffer_wrap: Real
/**
 * Special "stripped" buffer that is extremely fast to read/write to. Can only be used with buffer_u8 data types, and must be 1 byte aligned.
 */
declare const buffer_fast: Real
/**
 * This type of buffer is to be used as a vertex buffer only.
 */
declare const buffer_vbuffer: Real
/**
 * An unsigned, 8bit integer. This is a positive value from 0 to 255.
 */
declare const buffer_u8: Real
/**
 * A signed, 8bit integer. This can be a positive or negative value from -128 to 127 (0 is classed as positive).
 */
declare const buffer_s8: Real
/**
 * An unsigned, 16bit integer. This is a positive value from 0 - 65,535.
 */
declare const buffer_u16: Real
/**
 * A signed, 16bit integer. This can be a positive or negative value from -32,768 to 32,767 (0 is classed as positive).
 */
declare const buffer_s16: Real
/**
 * An unsigned, 32bit integer. This is a positive value from 0 to 4,294,967,295.
 */
declare const buffer_u32: Real
/**
 * A signed, 32bit integer. This can be a positive or negative value from -2,147,483,648 to 2,147,483,647 (0 is classed as positive).
 */
declare const buffer_s32: Real
/**
 * An unsigned 64bit integer.
 */
declare const buffer_u64: Real
/**
 * A 16bit float. This can be a positive or negative value within the range of +/- 65504. (Not currently supported!)
 */
declare const buffer_f16: Real
/**
 * A 32bit float. This can be a positive or negative value within the range of +/-16777216.
 */
declare const buffer_f32: Real
/**
 * A 64bit float.
 */
declare const buffer_f64: Real
/**
 * A boolean value. Can only be either 1 or 0 (true or false)
 */
declare const buffer_bool: Real
/**
 * A string of any size.
 */
declare const buffer_string: Real
/**
 * A string of any size, without the final null terminating character.
 */
declare const buffer_text: Real
/**
 * The start of the buffer
 */
declare const buffer_seek_start: Real
/**
 * A position relative to the current read/write position
 */
declare const buffer_seek_relative: Real
/**
 * The end of the buffer
 */
declare const buffer_seek_end: Real
/**
 * General buffer error.
 */
declare const buffer_error_general: Real
/**
 * Attempting to write to a buffer that doesn't have enough space for the size of the type being written.
 */
declare const buffer_error_out_of_space: Real
/**
 * Attempting to write an invalid type to a buffer.
 */
declare const buffer_error_invalid_type: Real
/**
 * The device is being held horizontally ie: The longest edge is from left to right, and the menu button is on the right.
 */
declare const display_landscape: Real
/**
 * As above, only now the menu button is on the left.
 */
declare const display_landscape_flipped: Real
/**
 * The device is being held vertically ie: The longest edge is from top to bottom, and the menu button is at the bottom.
 */
declare const display_portrait: Real
/**
 * As above, only now the menu button is at the top.
 */
declare const display_portrait_flipped: Real
/**
 * The sleep margin value is the main timing method
 */
declare const tm_sleep: Real
/**
 * Vsync timing is the main timing method (default for all supported platforms)
 */
declare const tm_countvsyncs: Real
/**
 * Ignore gamespeed and allow the system to control framerate
 */
declare const tm_systemtiming: Real
/**
 *  
 */
declare const cr_none: Real
/**
 * None
 */
declare const cr_default: Real
/**
 * None
 */
declare const cr_arrow: Real
/**
 * None
 */
declare const cr_cross: Real
/**
 * None
 */
declare const cr_beam: Real
/**
 * None
 */
declare const cr_size_nesw: Real
/**
 * None
 */
declare const cr_size_ns: Real
/**
 * None
 */
declare const cr_size_nwse: Real
/**
 * None
 */
declare const cr_size_we: Real
/**
 * None
 */
declare const cr_uparrow: Real
/**
 * None
 */
declare const cr_hourglass: Real
/**
 * None
 */
declare const cr_drag: Real
/**
 * None
 */
declare const cr_appstart: Real
/**
 * None
 */
declare const cr_handpoint: Real
/**
 * None
 */
declare const cr_size_all: Real
/**
 * A map data structure
 */
declare const ds_type_map: Real
/**
 * A list data structure
 */
declare const ds_type_list: Real
/**
 * A stack data structure
 */
declare const ds_type_stack: Real
/**
 * A grid data structure
 */
declare const ds_type_grid: Real
/**
 * A queue data structure
 */
declare const ds_type_queue: Real
/**
 * A priority data structure
 */
declare const ds_type_priority: Real
/**
 * #00ffff
 */
declare const c_aqua: Real
/**
 * #000000
 */
declare const c_black: Real
/**
 * #0000ff
 */
declare const c_blue: Real
/**
 * #404040
 */
declare const c_dkgray: Real
/**
 * #ff00ff
 */
declare const c_fuchsia: Real
/**
 * #808080
 */
declare const c_gray: Real
/**
 * #008000
 */
declare const c_green: Real
/**
 * #00ff00
 */
declare const c_lime: Real
/**
 * #c0c0c0
 */
declare const c_ltgray: Real
/**
 * #800000
 */
declare const c_maroon: Real
/**
 * #000080
 */
declare const c_navy: Real
/**
 * #808000
 */
declare const c_olive: Real
/**
 * #ffa040
 */
declare const c_orange: Real
/**
 * #800080
 */
declare const c_purple: Real
/**
 * #ff0000
 */
declare const c_red: Real
/**
 * #c0c0c0
 */
declare const c_silver: Real
/**
 * #008080
 */
declare const c_teal: Real
/**
 * #ffffff
 */
declare const c_white: Real
/**
 * #ffff00
 */
declare const c_yellow: Real
/**
 * #404040
 */
declare const c_dkgrey: Real
/**
 * #808080
 */
declare const c_grey: Real
/**
 * #c0c0c0
 */
declare const c_ltgrey: Real
/**
 * Normal blending (the default blend mode).
 */
declare const bm_normal: Real
/**
 * Additive blending. Luminosity values of light areas are added.
 */
declare const bm_add: Real
/**
 * Subtractive blending where the source colour is subtracted from the destination colour.
 */
declare const bm_subtract: Real
/**
 * Max blending. Similar to additive blending.
 */
declare const bm_max: Real
/**
 * Min blending (Takes the minimum value for each colour component).
 */
declare const bm_min: Real
/**
 * Subtractive blending where the destination colour is subtracted from the source colour.
 */
declare const bm_reverse_subtract: Real
/**
 * (0, 0, 0, 0)
 */
declare const bm_zero: Real
/**
 * (1, 1, 1, 1)
 */
declare const bm_one: Real
/**
 * (Rs, Gs, Bs, As)
 */
declare const bm_src_colour: Real
/**
 * (Rs, Gs, Bs, As)
 */
declare const bm_src_color: Real
/**
 * (1-Rs, 1-Gs, 1-Bs, 1-As)
 */
declare const bm_inv_src_colour: Real
/**
 * (1-Rs, 1-Gs, 1-Bs, 1-As)
 */
declare const bm_inv_src_color: Real
/**
 * (As, As, As, As)
 */
declare const bm_src_alpha: Real
/**
 * (1-As, 1-As, 1-As, 1-As)
 */
declare const bm_inv_src_alpha: Real
/**
 * (Ad, Ad, Ad, Ad)
 */
declare const bm_dest_alpha: Real
/**
 * (1-Ad, 1-Ad, 1-Ad, 1-Ad)
 */
declare const bm_inv_dest_alpha: Real
/**
 * (Rd, Gd, Bd, Ad)
 */
declare const bm_dest_colour: Real
/**
 * (Rd, Gd, Bd, Ad)
 */
declare const bm_dest_color: Real
/**
 * (1-Rd, 1-Gd, 1-Bd, 1-Ad)
 */
declare const bm_inv_dest_colour: Real
/**
 * (1-Rd, 1-Gd, 1-Bd, 1-Ad)
 */
declare const bm_inv_dest_color: Real
/**
 * (f, f, f, 1) where f = min(As, 1-Ad)
 */
declare const bm_src_alpha_sat: Real
/**
 * Additive blending. Luminosity values of light areas are added.
 */
declare const bm_eq_add: Real
/**
 * Subtractive blending where the source colour is subtracted from the destination colour.
 */
declare const bm_eq_subtract: Real
/**
 * Max blending (Takes the maximum value for each colour component).
 */
declare const bm_eq_max: Real
/**
 * Min blending (Takes the minimum value for each colour component).
 */
declare const bm_eq_min: Real
/**
 * Subtractive blending where the destination colour is subtracted from the source colour.
 */
declare const bm_eq_reverse_subtract: Real
/**
 * No culling will be done
 */
declare const cull_noculling: Real
/**
 * All clockwise triangles will be culled
 */
declare const cull_clockwise: Real
/**
 * All counter-clockwise triangles will be culled
 */
declare const cull_counterclockwise: Real
/**
 * The light is a directional light
 */
declare const lighttype_dir: Real
/**
 * The light is a point light
 */
declare const lighttype_point: Real
/**
 * Mipmapping is disabled.
 */
declare const mip_off: Real
/**
 * Mipmapping for all textures is enabled.
 */
declare const mip_on: Real
/**
 * Mipmapping is enabled for textures that have it enabled in the Texture Group options (default).
 */
declare const mip_markedonly: Real
/**
 * This means that blending between mipmap levels is disabled, which can cause visible texture transitions, but gives the best performance.
 */
declare const tf_point: Real
/**
 * This means that blending between mipmap levels is enabled (this is also known as trilinear filtering), which smooths the texture transitions, but it will give a minor hit to performance.
 */
declare const tf_linear: Real
/**
 * This means that anisotropic filtering is enabled, which greatly improves texture transition quality and can reduce the blurring visible with other filtering modes, but it has the highest hit on performance.
 */
declare const tf_anisotropic: Real
/**
 * None
 */
declare const ef_cloud: Real
/**
 * None
 */
declare const ef_ellipse: Real
/**
 * None
 */
declare const ef_explosion: Real
/**
 * None
 */
declare const ef_firework: Real
/**
 * None
 */
declare const ef_flare: Real
/**
 * None
 */
declare const ef_rain: Real
/**
 * None
 */
declare const ef_ring: Real
/**
 * None
 */
declare const ef_smoke: Real
/**
 * None
 */
declare const ef_smokeup: Real
/**
 * None
 */
declare const ef_snow: Real
/**
 * None
 */
declare const ef_spark: Real
/**
 * None
 */
declare const ef_star: Real
/**
 * Emitter streams new particles each frame.
 */
declare const ps_mode_stream: Real
/**
 * Emitter burst particles just once.
 */
declare const ps_mode_burst: Real
/**
 * A rectangular shape that fills the given area.
 */
declare const ps_shape_rectangle: Real
/**
 * An ellipse, with the width and height defined by the area.
 */
declare const ps_shape_ellipse: Real
/**
 * A diamond shape with the points at half width and half height.
 */
declare const ps_shape_diamond: Real
/**
 * A single line, where the start point is the left and top and the end point is the right and bottom.
 */
declare const ps_shape_line: Real
/**
 * A Linear distribution where all particles have an equal chance of appearing anywhere in the area.
 */
declare const ps_distr_linear: Real
/**
 * A gaussian distribution where more particles are generated in the center rather than the edges.
 */
declare const ps_distr_gaussian: Real
/**
 * An inverse gaussian distribution where more particles are generated at the edges than center.
 */
declare const ps_distr_invgaussian: Real
/**
 * A 1x1 pixel. (This is the default setting.)
 */
declare const pt_shape_pixel: Real
/**
 * A filled circle.
 */
declare const pt_shape_disk: Real
/**
 * A filled square.
 */
declare const pt_shape_square: Real
/**
 * An 8px wide horizontal line.
 */
declare const pt_shape_line: Real
/**
 * A five-point filled star.
 */
declare const pt_shape_star: Real
/**
 * A 3px outlined circle.
 */
declare const pt_shape_circle: Real
/**
 * A circle with an inward glow (looks like a bubble).
 */
declare const pt_shape_ring: Real
/**
 * A circle with an outward glow ' solid in the middle, glowing outwards.
 */
declare const pt_shape_sphere: Real
/**
 * A harshly glowing point (looks like an actual star in the night).
 */
declare const pt_shape_flare: Real
/**
 * A spark effect ' like a star with multiple points fading out.
 */
declare const pt_shape_spark: Real
/**
 * A squarish cloud of smoke ' requires multiple colours to resemble an explosion.
 */
declare const pt_shape_explosion: Real
/**
 * A thin cloud, requires up scaling and multiple particles to resemble a cloud.
 */
declare const pt_shape_cloud: Real
/**
 * A smooth version of the explosion effect. Use multiple to create a smoke cloud.
 */
declare const pt_shape_smoke: Real
/**
 * A generic snowflake shape.
 */
declare const pt_shape_snow: Real
/**
 * A single floating point value
 */
declare const vertex_type_float1: Real
/**
 * Two floating point values
 */
declare const vertex_type_float2: Real
/**
 * Three floating point values
 */
declare const vertex_type_float3: Real
/**
 * Four floating point values
 */
declare const vertex_type_float4: Real
/**
 * Four component values (r, g, b, a)
 */
declare const vertex_type_colour: Real
/**
 * Four component unsigned byte values (from 0 to 255)
 */
declare const vertex_type_ubyte4: Real
/**
 * position values (x, y, z)
 */
declare const vertex_usage_position: Real
/**
 * colour values (r, g, b, a)
 */
declare const vertex_usage_colour: Real
/**
 * vertex normal values (nx, ny, nz)
 */
declare const vertex_usage_normal: Real
/**
 * the blendweight of the input matrix (for skeletal animation, for example)
 */
declare const vertex_usage_blendweight: Real
/**
 * the indices of the matrices to use (for skeletal animation, for example)
 */
declare const vertex_usage_blendindices: Real
/**
 * vertex depth buffer value
 */
declare const vertex_usage_depth: Real
/**
 * tangent values
 */
declare const vertex_usage_tangent: Real
/**
 * binormal values
 */
declare const vertex_usage_binormal: Real
/**
 * fog values
 */
declare const vertex_usage_fog: Real
/**
 * sampler index
 */
declare const vertex_usage_sample: Real
/**
 * A primitive consisting of a list of points.
 */
declare const pr_pointlist: Real
/**
 * A primitive made up of a individual lines in a list.
 */
declare const pr_linelist: Real
/**
 * A primitive made up of a consecutive strip of lines.
 */
declare const pr_linestrip: Real
/**
 * A primitive made up of individual triangles in a list.
 */
declare const pr_trianglelist: Real
/**
 * A primitive made up of a consecutive strip of triangles.
 */
declare const pr_trianglestrip: Real
/**
 * None
 */
declare const fa_left: Real
/**
 * None
 */
declare const fa_center: Real
/**
 * None
 */
declare const fa_right: Real
/**
 * None
 */
declare const fa_top: Real
/**
 * None
 */
declare const fa_middle: Real
/**
 * None
 */
declare const fa_bottom: Real
/**
 * No file filter
 */
declare const fa_none: Real
/**
 * Read-only files
 */
declare const fa_readonly: Real
/**
 * Hidden files
 */
declare const fa_hidden: Real
/**
 * System files
 */
declare const fa_sysfile: Real
/**
 * Volume-id files
 */
declare const fa_volumeid: Real
/**
 * Directories
 */
declare const fa_directory: Real
/**
 * Archived files
 */
declare const fa_archive: Real
/**
 * The left mouse button
 */
declare const mb_left: Real
/**
 * The middle mouse button (this may not be valid for all target platforms)
 */
declare const mb_middle: Real
/**
 * The right mouse button
 */
declare const mb_right: Real
/**
 * Mouse side button 1
 */
declare const mb_side1: Real
/**
 * Mouse side button 2
 */
declare const mb_side2: Real
/**
 * Any of the mouse buttons
 */
declare const mb_any: Real
/**
 * No mouse button
 */
declare const mb_none: Real
/**
 * Mouse x-axis position in room coordinates
 */
declare const m_axisx: Real
/**
 * Mouse y-axis position in room coordinates
 */
declare const m_axisy: Real
/**
 * Mouse x-axis position in GUI coordinates
 */
declare const m_axisx_gui: Real
/**
 * Mouse y-axis position in GUI coordinates
 */
declare const m_axisy_gui: Real
/**
 * Mouse scroll direction up
 */
declare const m_scroll_up: Real
/**
 * Mouse scroll direction down
 */
declare const m_scroll_down: Real
/**
 * Top button 1 (this maps to the "A" on an Xbox 360 controller and the cross on a PS controller)
 */
declare const gp_face1: Real
/**
 * Top button 2 (this maps to the "B" on an Xbox 360 controller and the circle on a PS controller)
 */
declare const gp_face2: Real
/**
 * Top button 3 (this maps to the "X" on an Xbox 360 controller and the square on a PS controller)
 */
declare const gp_face3: Real
/**
 * Top button 4 (this maps to the "Y" on an Xbox 360 controller and the triangle on a PS controller)
 */
declare const gp_face4: Real
/**
 * Left shoulder button
 */
declare const gp_shoulderl: Real
/**
 * Left shoulder trigger
 */
declare const gp_shoulderlb: Real
/**
 * Right shoulder button
 */
declare const gp_shoulderr: Real
/**
 * Right shoulder trigger
 */
declare const gp_shoulderrb: Real
/**
 * The select button (on a DS4 controller, this triggers when you press the touchpad down)
 */
declare const gp_select: Real
/**
 * The start button (this is the "options" button on a PS4 controller)
 */
declare const gp_start: Real
/**
 * The left stick pressed (as a button)
 */
declare const gp_stickl: Real
/**
 * The right stick pressed (as a button)
 */
declare const gp_stickr: Real
/**
 * D-pad up
 */
declare const gp_padu: Real
/**
 * D-pad down
 */
declare const gp_padd: Real
/**
 * D-pad left
 */
declare const gp_padl: Real
/**
 * D-pad right
 */
declare const gp_padr: Real
/**
 * Left stick horizontal axis (analog)
 */
declare const gp_axislh: Real
/**
 * Left stick vertical axis (analog)
 */
declare const gp_axislv: Real
/**
 * Right stick horizontal axis (analog)
 */
declare const gp_axisrh: Real
/**
 * Right stick vertical axis (analog)
 */
declare const gp_axisrv: Real
/**
 * The gamepad's acceleration on the X axis
 */
declare const gp_axis_acceleration_x: Real
/**
 * The gamepad's acceleration on the Y axis
 */
declare const gp_axis_acceleration_y: Real
/**
 * The gamepad's acceleration on the Z axis
 */
declare const gp_axis_acceleration_z: Real
/**
 * The gamepad's angular velocity on the X axis
 */
declare const gp_axis_angular_velocity_x: Real
/**
 * The gamepad's angular velocity on the Y axis
 */
declare const gp_axis_angular_velocity_y: Real
/**
 * The gamepad's angular velocity on the Z axis
 */
declare const gp_axis_angular_velocity_z: Real
/**
 * The gamepad's X orientation
 */
declare const gp_axis_orientation_x: Real
/**
 * The gamepad's Y orientation
 */
declare const gp_axis_orientation_y: Real
/**
 * The gamepad's Z orientation
 */
declare const gp_axis_orientation_z: Real
/**
 * The gamepad's W orientation
 */
declare const gp_axis_orientation_w: Real
/**
 * The gamepad's Home button
 */
declare const gp_home: Real
/**
 * A gamepad button used for mapping extra buttons on a device
 */
declare const gp_extra1: Real
/**
 * A gamepad button used for mapping extra buttons on a device
 */
declare const gp_extra2: Real
/**
 * A gamepad button used for mapping extra buttons on a device
 */
declare const gp_extra3: Real
/**
 * A gamepad button used for mapping extra buttons on a device
 */
declare const gp_extra4: Real
/**
 * A gamepad button used for mapping extra buttons on a device
 */
declare const gp_extra5: Real
/**
 * A gamepad button used for mapping extra buttons on a device
 */
declare const gp_extra6: Real
/**
 * A gamepad button used for mapping paddle right button on a device
 */
declare const gp_paddler: Real
/**
 * A gamepad button used for mapping paddle left button on a device
 */
declare const gp_paddlel: Real
/**
 * A gamepad button used for mapping paddle right bottom button on a device
 */
declare const gp_paddlerb: Real
/**
 * A gamepad button used for mapping paddle left bottom button on a device
 */
declare const gp_paddlelb: Real
/**
 * A gamepad button used for mapping the touchpad button on a device (i.e. PS4 and PS5)
 */
declare const gp_touchpadbutton: Real
/**
 * keycode representing that no key is pressed
 */
declare const vk_nokey: Real
/**
 * keycode representing that any key is pressed
 */
declare const vk_anykey: Real
/**
 * keycode for the left arrow key
 */
declare const vk_left: Real
/**
 * keycode for the right arrow key
 */
declare const vk_right: Real
/**
 * keycode for the up arrow key
 */
declare const vk_up: Real
/**
 * keycode for the down arrow key
 */
declare const vk_down: Real
/**
 * enter key
 */
declare const vk_enter: Real
/**
 * escape key
 */
declare const vk_escape: Real
/**
 * space key
 */
declare const vk_space: Real
/**
 * either of the shift keys
 */
declare const vk_shift: Real
/**
 * either of the control keys
 */
declare const vk_control: Real
/**
 * alt key
 */
declare const vk_alt: Real
/**
 * backspace key
 */
declare const vk_backspace: Real
/**
 * tab key
 */
declare const vk_tab: Real
/**
 * home key
 */
declare const vk_home: Real
/**
 * end key
 */
declare const vk_end: Real
/**
 * delete key
 */
declare const vk_delete: Real
/**
 * insert key
 */
declare const vk_insert: Real
/**
 * pageup key
 */
declare const vk_pageup: Real
/**
 * pagedown key
 */
declare const vk_pagedown: Real
/**
 * pause/break key
 */
declare const vk_pause: Real
/**
 * printscreen/sysrq key
 */
declare const vk_printscreen: Real
/**
 * keycode for the function keys F1 to F12
 */
declare const vk_f1: Real
/**
 * number keys on the numeric keypad
 */
declare const vk_numpad0: Real
/**
 * multiply key on the numeric keypad
 */
declare const vk_multiply: Real
/**
 * divide key on the numeric keypad
 */
declare const vk_divide: Real
/**
 * add key on the numeric keypad
 */
declare const vk_add: Real
/**
 * subtract key on the numeric keypad
 */
declare const vk_subtract: Real
/**
 * decimal dot keys on the numeric keypad
 */
declare const vk_decimal: Real
/**
 * left shift key
 */
declare const vk_lshift: Real
/**
 * left control key
 */
declare const vk_lcontrol: Real
/**
 * left alt key
 */
declare const vk_lalt: Real
/**
 * right shift key
 */
declare const vk_rshift: Real
/**
 * right control key
 */
declare const vk_rcontrol: Real
/**
 * right alt key
 */
declare const vk_ralt: Real
/**
 * Gets the game speed using frames per second.
 */
declare const gamespeed_fps: Real
/**
 * Gets the game speed using microseconds per frame.
 */
declare const gamespeed_microseconds: Real
/**
 * 3.141592653589793280etc... (the exact value will depend on various factors like the platform being targeted)
 */
declare const pi: Real
/**
 * use the local time zone as set by the system
 */
declare const timezone_local: Real
/**
 * use Coordinated Universal Time
 */
declare const timezone_utc: Real
/**
 * The current view matrix
 */
declare const matrix_view: Real
/**
 * The current projection matrix
 */
declare const matrix_projection: Real
/**
 * The current world matrix
 */
declare const matrix_world: Real
/**
 * Create a socket using TCP.
 */
declare const network_socket_tcp: Real
/**
 * Create a socket using UDP.
 */
declare const network_socket_udp: Real
/**
 * Create a socket using Secure Websockets.
 */
declare const network_socket_wss: Real
/**
 * Create a web socket (only for connecting to HTML5 projects), using TCP.
 */
declare const network_socket_ws: Real
/**
 * Create a Bluetooth socket (currently unavailable!).
 */
declare const network_socket_bluetooth: Real
/**
 * Set a connection timeout value
 */
declare const network_config_connect_timeout: Real
/**
 * Tell GameMaker not to block on connect.
 */
declare const network_config_use_non_blocking_socket: Real
/**
 * Enables the "reliable UDP" protocol for an existing UDP socket
 */
declare const network_config_enable_reliable_udp: Real
/**
 * Disables the "reliable UDP" protocol for an existing UDP socked.
 */
declare const network_config_disable_reliable_udp: Real
/**
 * Sets the SO_LINGER timeout value to 0 for an exisiting TCP socket
 */
declare const network_config_avoid_time_wait: Real
/**
 * Set the protocol to use on websocket upgrade message, protocol is a string as 3rd parameter
 */
declare const network_config_websocket_protocol: Real
/**
 * Enables use of IPv6 multicast for broadcast discovery on a UDP socket.
 */
declare const network_config_enable_multicast: Real
/**
 * Disables use of IPv6 multicast for broadcast discovery on a UDP socket.
 */
declare const network_config_disable_multicast: Real
/**
 * Send a BINARY message over WeSocket
 */
declare const network_send_binary: Real
/**
 * Send a TEXT message over WebSocket
 */
declare const network_send_text: Real
/**
 * This is the default C, C++ call
 */
declare const dll_cdecl: Real
/**
 * This is the standard WinAPI call (Windows dll only)
 */
declare const dll_stdcall: Real
/**
 * A real number argument
 */
declare const ty_real: Real
/**
 * a null-terminated string argument
 */
declare const ty_string: Real
/**
 * Game is not being played in a browser
 */
declare const browser_not_a_browser: Real
/**
 * Unknown browser
 */
declare const browser_unknown: Real
/**
 * Internet Explorer
 */
declare const browser_ie: Real
/**
 * Internet Explorer on a mobile device
 */
declare const browser_ie_mobile: Real
/**
 * Mozilla Firefox
 */
declare const browser_firefox: Real
/**
 * Google Chrome
 */
declare const browser_chrome: Real
/**
 * Safari
 */
declare const browser_safari: Real
/**
 * Safari on a mobile device
 */
declare const browser_safari_mobile: Real
/**
 * Opera
 */
declare const browser_opera: Real
/**
 * Tizen mobile device browser
 */
declare const browser_tizen: Real
/**
 * Windows App
 */
declare const browser_windows_store: Real
/**
 * This indicates that the permission has been granted
 */
declare const os_permission_granted: Real
/**
 * This indicates that the permission has not been granted
 */
declare const os_permission_denied: Real
/**
 * This indicates that the permission has either been blocked by the phone settings, or that the user has previously denied the request and selected "Don't ask again".
 */
declare const os_permission_denied_dont_request: Real
/**
 * iPad
 */
declare const device_ios_ipad: Real
/**
 * Newer iPad with Retina display size of 2048 x 1536
 */
declare const device_ios_ipad_retina: Real
/**
 * iPhone6 with display size 1334 x 750
 */
declare const device_ios_iphone6: Real
/**
 * Larger iPhone 6 with display 1920 x 1080
 */
declare const device_ios_iphone6plus: Real
/**
 * iPhone5 with display size 640 x 1136)
 */
declare const device_ios_iphone5: Real
/**
 * Older iPhone/iPod Touch (480 x 320 screen) or Android phone
 */
declare const device_ios_iphone: Real
/**
 * Newer iPhone/iPod Touch with Retina display of 960 x 640
 */
declare const device_ios_iphone_retina: Real
/**
 * The device is actually an emulator (Windows Phone or Android)
 */
declare const device_emulator: Real
/**
 * Android tablet
 */
declare const device_tablet: Real
/**
 * Unknown or not iOS
 */
declare const device_ios_unknown: Real
/**
 * Windows OS
 */
declare const os_windows: Real
/**
 * Linux
 */
declare const os_linux: Real
/**
 * macOS X
 */
declare const os_macosx: Real
/**
 * iOS (iPhone, iPad, iPod Touch)
 */
declare const os_ios: Real
/**
 * Apple tvOS
 */
declare const os_tvos: Real
/**
 * Android
 */
declare const os_android: Real
/**
 * Sony PlayStation 4
 */
declare const os_ps4: Real
/**
 * Sony PlayStation 5
 */
declare const os_ps5: Real
/**
 * Microsoft Xbox Series X/S
 */
declare const os_xboxseriesxs: Real
/**
 * Microsoft GDK platform (Xbox One and Series X/S)
 */
declare const os_gdk: Real
/**
 * Nintendo Switch
 */
declare const os_switch: Real
/**
 * Opera GX
 */
declare const os_operagx: Real
/**
 * GX.games
 */
declare const os_gxgames: Real
/**
 * Unknown OS
 */
declare const os_unknown: Real
/**
 * The x coordinate of the first anchor point of the joint in the room
 */
declare const phy_joint_anchor_1_x: Real
/**
 * The y coordinate of the first anchor point of the joint in the room
 */
declare const phy_joint_anchor_1_y: Real
/**
 * The x coordinate of the second anchor point of the joint in the room
 */
declare const phy_joint_anchor_2_x: Real
/**
 * The y coordinate of the second anchor point of the joint in the room
 */
declare const phy_joint_anchor_2_y: Real
/**
 * This is the reaction force being applied to the second instance in a joint at the x anchor position
 */
declare const phy_joint_reaction_force_x: Real
/**
 * This is the reaction force being applied to the second instance in a joint at the y anchor position
 */
declare const phy_joint_reaction_force_y: Real
/**
 * This is the torque being applied to the second instance in a joint at the anchor position
 */
declare const phy_joint_reaction_torque: Real
/**
 * The value specified when the joint was created for the maximum motor force
 */
declare const phy_joint_max_motor_force: Real
/**
 * The value specified when the joint was created for the maximum motor torque
 */
declare const phy_joint_max_motor_torque: Real
/**
 * The current motor force
 */
declare const phy_joint_motor_force: Real
/**
 * The current motor speed
 */
declare const phy_joint_motor_speed: Real
/**
 * The current motor torque
 */
declare const phy_joint_motor_torque: Real
/**
 * The angle that a line between the two anchor points of the joint makes. This is calculated using the physics world coordinates ( not the GameMaker room             coordinates) in radians.
 */
declare const phy_joint_angle: Real
/**
 * Enable or disable angle limiting for the joint. Set the value to true to enable or false to disable.
 */
declare const phy_joint_angle_limits: Real
/**
 * The upper angle limit for the joint in degrees.
 */
declare const phy_joint_upper_angle_limit: Real
/**
 * The lower angle limit for the joint in degrees.
 */
declare const phy_joint_lower_angle_limit: Real
/**
 * Gets the distance between the anchor x/y coordinates and the local x/y coordinates.
 */
declare const phy_joint_translation: Real
/**
 * The current joint movement speed.
 */
declare const phy_joint_speed: Real
/**
 * The damping ratio is non-dimensional and defines the "springiness" of the joint. The value for this constant is typically between 0 and 1, but can be larger, and at 1, the damping is critical meaning that all oscillations should vanish.
 */
declare const phy_joint_damping_ratio: Real
/**
 * This will return (or set) the oscillation frequency for the joint, in hertz, and typically the frequency should be less than a half the frequency of the time step, as set by the function physics_world_update_speed().
 */
declare const phy_joint_frequency: Real
/**
 * This will return the length of the joint from the first local x/y coordinates to the first anchor x/y coordinates (Distance joints only, can only be read from)
 */
declare const phy_joint_length_1: Real
/**
 * This will return the length of the joint from the second local x/y coordinates to the second anchor x/y coordinates (Distance joints only, can only be written to)
 */
declare const phy_joint_length_2: Real
/**
 * The maximum torque value for the joint.
 */
declare const phy_joint_max_torque: Real
/**
 * The maximum force value for the joint.
 */
declare const phy_joint_max_force: Real
/**
 * The maximum extension for the connection between the two anchor points.
 */
declare const phy_joint_max_length: Real
/**
 * The default properties for a soft body particle.
 */
declare const phy_particle_flag_water: Real
/**
 * A zombie particle is one that will be destroyed after a single step with all others flagged in this way.
 */
declare const phy_particle_flag_zombie: Real
/**
 * This defines the particle as static, essentially creating it as an immovable object in the physics simulation, as they will remain in a fixed position no matter what collides with them. You should use this flag rather than set the density            to 0.
 */
declare const phy_particle_flag_wall: Real
/**
 * Spring particles produce the effect of being attached to one another, as if by a spring. Particles created with this flag are "connected" in pairs, with each particle being connected to the one that was closest to it at the time of creation.             Once paired, particles do not change "partners" , and the farther an external force pulls them from one another, the greater the power with which they will collide when that external force is removed. Note that no matter how far paired             particles get from each another, the connection between them will not snap.
 */
declare const phy_particle_flag_spring: Real
/**
 * Elastic particles deform and may also bounce when they collide with other rigid bodies in the physics simulation.
 */
declare const phy_particle_flag_elastic: Real
/**
 * A viscous particle is one that exhibits "clinginess" or "stickiness", like oil. Viscous particles will clump and stick together more.
 */
declare const phy_particle_flag_viscous: Real
/**
 * Powder particles produce a scattering effect such as you might see with sand or dust.
 */
declare const phy_particle_flag_powder: Real
/**
 * Tensile particles are used to produce the effect of surface tension, or the taut curvature on the surface of a body of liquid. They might be used, for example, to create the surface tension you would see on a drop of water. Once the tension is           broken, the particles bounce as if they were elastic, but also continue to attract each other. As a result, particles tend to form clusters as they bounce.
 */
declare const phy_particle_flag_tensile: Real
/**
 * Colour-mixing particles take on some of the colour of other particles with which they collide. Note that if only one of the two colliding particles is a colour-mixing one, the other particle retains its pre-collision colour.
 */
declare const phy_particle_flag_colourmixing: Real
/**
 * The flags value for the particle.
 */
declare const phy_particle_data_flag_typeflags: Real
/**
 * The x and y position of the particle.
 */
declare const phy_particle_data_flag_position: Real
/**
 * The horizontal and vertical speed.
 */
declare const phy_particle_data_flag_velocity: Real
/**
 * The colour and alpha value (hexadecimal).
 */
declare const phy_particle_data_flag_colour: Real
/**
 * The particle category (as defined when you created the particle or group to which it belongs).
 */
declare const phy_particle_data_flag_category: Real
/**
 * A solid particle group prevents other fixtures from lodging inside of it. Should anything penetrate it, the solid particle group pushes the offending fixture back out to its surface, making a a solid particle group possess an especially strong           repulsive force.
 */
declare const phy_particle_group_flag_solid: Real
/**
 * Rigid particle groups are ones whose shape does not change, even when they collide with other fixtures.
 */
declare const phy_particle_group_flag_rigid: Real
/**
 * None
 */
declare const other: Instance
/**
 * None
 */
declare const all: Instance
/**
 * None
 */
declare const noone: Instance
/**
 * None
 */
declare const pointer_invalid: Pointer
/**
 * None
 */
declare const pointer_null: Pointer
/**
 * None
 */
declare const infinity: Real
/**
 * None
 */
declare const GM_build_date: Real
/**
 * None
 */
declare const GM_version: String
/**
 * None
 */
declare const GM_runtime_type: String
/**
 * None
 */
declare const GM_runtime_version: String
/**
 * full path and filename of the YYP project
 */
declare const GM_project_filename: String
/**
 * compile time constant of current build type either "exe" (for create executable) or "run" (for a run)
 */
declare const GM_build_type: String
/**
 * compile time constant of whether game is sandboxed or not (true - sandbox is on, false - sandbox is off)
 */
declare const GM_is_sandboxed: Bool
/**
 * compile time constant that returns the current line number
 */
declare const _GMLINE_: Real
/**
 * compile time constant that returns the current function name
 */
declare const _GMFUNCTION_: String
/**
 * compile time constant that returns the current filename
 */
declare const _GMFILE_: String
/**
 * None
 */
declare const ev_keypress: Real
/**
 * None
 */
declare const ev_keyrelease: Real
/**
 * None
 */
declare const ev_user1: Real
/**
 * None
 */
declare const ev_user2: Real
/**
 * None
 */
declare const ev_user3: Real
/**
 * None
 */
declare const ev_user4: Real
/**
 * None
 */
declare const ev_user5: Real
/**
 * None
 */
declare const ev_user6: Real
/**
 * None
 */
declare const ev_user7: Real
/**
 * None
 */
declare const ev_user8: Real
/**
 * None
 */
declare const ev_user9: Real
/**
 * None
 */
declare const ev_user10: Real
/**
 * None
 */
declare const ev_user11: Real
/**
 * None
 */
declare const ev_user12: Real
/**
 * None
 */
declare const ev_user13: Real
/**
 * None
 */
declare const ev_user14: Real
/**
 * None
 */
declare const ev_user15: Real
/**
 * None
 */
declare const ev_outside_view1: Real
/**
 * None
 */
declare const ev_outside_view2: Real
/**
 * None
 */
declare const ev_outside_view3: Real
/**
 * None
 */
declare const ev_outside_view4: Real
/**
 * None
 */
declare const ev_outside_view5: Real
/**
 * None
 */
declare const ev_outside_view6: Real
/**
 * None
 */
declare const ev_outside_view7: Real
/**
 * None
 */
declare const ev_boundary_view1: Real
/**
 * None
 */
declare const ev_boundary_view2: Real
/**
 * None
 */
declare const ev_boundary_view3: Real
/**
 * None
 */
declare const ev_boundary_view4: Real
/**
 * None
 */
declare const ev_boundary_view5: Real
/**
 * None
 */
declare const ev_boundary_view6: Real
/**
 * None
 */
declare const ev_boundary_view7: Real
/**
 * None
 */
declare const vk_return: Real
/**
 * None
 */
declare const vk_f2: Real
/**
 * None
 */
declare const vk_f3: Real
/**
 * None
 */
declare const vk_f4: Real
/**
 * None
 */
declare const vk_f5: Real
/**
 * None
 */
declare const vk_f6: Real
/**
 * None
 */
declare const vk_f7: Real
/**
 * None
 */
declare const vk_f8: Real
/**
 * None
 */
declare const vk_f9: Real
/**
 * None
 */
declare const vk_f10: Real
/**
 * None
 */
declare const vk_f11: Real
/**
 * None
 */
declare const vk_f12: Real
/**
 * None
 */
declare const vk_numpad1: Real
/**
 * None
 */
declare const vk_numpad2: Real
/**
 * None
 */
declare const vk_numpad3: Real
/**
 * None
 */
declare const vk_numpad4: Real
/**
 * None
 */
declare const vk_numpad5: Real
/**
 * None
 */
declare const vk_numpad6: Real
/**
 * None
 */
declare const vk_numpad7: Real
/**
 * None
 */
declare const vk_numpad8: Real
/**
 * None
 */
declare const vk_numpad9: Real
/**
 * None
 */
declare const pr_trianglefan: Real
/**
 * None
 */
declare const browser_edge: Real
/**
 * None
 */
declare const cmpfunc_never: Real
/**
 * None
 */
declare const cmpfunc_less: Real
/**
 * None
 */
declare const cmpfunc_equal: Real
/**
 * None
 */
declare const cmpfunc_lessequal: Real
/**
 * None
 */
declare const cmpfunc_greater: Real
/**
 * None
 */
declare const cmpfunc_notequal: Real
/**
 * None
 */
declare const cmpfunc_greaterequal: Real
/**
 * None
 */
declare const cmpfunc_always: Real
/**
 * Keeps the current value in the stencil buffer.
 */
declare const stencilop_keep: Real
/**
 * Sets the stencil buffer value to 0.
 */
declare const stencilop_zero: Real
/**
 * Sets the stencil buffer value to the stencil reference value.
 */
declare const stencilop_replace: Real
/**
 * Increments the stencil buffer value, wrapping to 0 at the maximum value.
 */
declare const stencilop_incr_wrap: Real
/**
 * Decrements the stencil buffer value, wrapping to the maximum value at 0.
 */
declare const stencilop_decr_wrap: Real
/**
 * Performs a bitwise inversion on the current stencil buffer value.
 */
declare const stencilop_invert: Real
/**
 * Increments the stencil buffer value, clamping at the maximum value.
 */
declare const stencilop_incr: Real
/**
 * Decrements the stencil buffer value, clamping at 0.
 */
declare const stencilop_decr: Real
/**
 * None
 */
declare const iap_ev_storeload: Real
/**
 * None
 */
declare const iap_ev_product: Real
/**
 * None
 */
declare const iap_ev_purchase: Real
/**
 * None
 */
declare const iap_ev_consume: Real
/**
 * None
 */
declare const iap_ev_restore: Real
/**
 * None
 */
declare const iap_storeload_ok: Real
/**
 * None
 */
declare const iap_storeload_failed: Real
/**
 * None
 */
declare const iap_status_uninitialised: Real
/**
 * None
 */
declare const iap_status_unavailable: Real
/**
 * None
 */
declare const iap_status_loading: Real
/**
 * None
 */
declare const iap_status_available: Real
/**
 * None
 */
declare const iap_status_processing: Real
/**
 * None
 */
declare const iap_status_restoring: Real
/**
 * None
 */
declare const iap_failed: Real
/**
 * None
 */
declare const iap_unavailable: Real
/**
 * None
 */
declare const iap_available: Real
/**
 * None
 */
declare const iap_purchased: Real
/**
 * None
 */
declare const iap_canceled: Real
/**
 * None
 */
declare const iap_refunded: Real
/**
 * None
 */
declare const phy_debug_render_aabb: Real
/**
 * None
 */
declare const phy_debug_render_collision_pairs: Real
/**
 * None
 */
declare const phy_debug_render_coms: Real
/**
 * None
 */
declare const phy_debug_render_core_shapes: Real
/**
 * None
 */
declare const phy_debug_render_joints: Real
/**
 * None
 */
declare const phy_debug_render_obb: Real
/**
 * None
 */
declare const phy_debug_render_shapes: Real
/**
 * None
 */
declare const phy_particle_flag_colormixing: Real
/**
 * None
 */
declare const phy_particle_data_flag_color: Real
/**
 * None
 */
declare const network_type_connect: Real
/**
 * None
 */
declare const network_type_disconnect: Real
/**
 * None
 */
declare const network_type_data: Real
/**
 * None
 */
declare const network_type_non_blocking_connect: Real
/**
 * None
 */
declare const network_type_up: Real
/**
 * None
 */
declare const network_type_up_failed: Real
/**
 * None
 */
declare const network_type_down: Real
/**
 * None
 */
declare const network_connect_none: Real
/**
 * None
 */
declare const network_connect_blocking: Real
/**
 * None
 */
declare const network_connect_nonblocking: Real
/**
 * None
 */
declare const network_connect_active: Real
/**
 * None
 */
declare const network_connect_passive: Real
/**
 * None
 */
declare const vertex_usage_color: Real
/**
 * None
 */
declare const vertex_usage_texcoord: Real
/**
 * None
 */
declare const vertex_usage_psize: Real
/**
 * None
 */
declare const vertex_type_color: Real
/**
 * None
 */
declare const layerelementtype_undefined: Real
/**
 * None
 */
declare const layerelementtype_oldtilemap: Real
/**
 * None
 */
declare const kbv_type_default: Real
/**
 * None
 */
declare const kbv_type_ascii: Real
/**
 * None
 */
declare const kbv_type_url: Real
/**
 * None
 */
declare const kbv_type_email: Real
/**
 * None
 */
declare const kbv_type_numbers: Real
/**
 * None
 */
declare const kbv_type_phone: Real
/**
 * None
 */
declare const kbv_type_phone_name: Real
/**
 * None
 */
declare const kbv_returnkey_default: Real
/**
 * None
 */
declare const kbv_returnkey_go: Real
/**
 * None
 */
declare const kbv_returnkey_google: Real
/**
 * None
 */
declare const kbv_returnkey_join: Real
/**
 * None
 */
declare const kbv_returnkey_next: Real
/**
 * None
 */
declare const kbv_returnkey_route: Real
/**
 * None
 */
declare const kbv_returnkey_search: Real
/**
 * None
 */
declare const kbv_returnkey_send: Real
/**
 * None
 */
declare const kbv_returnkey_yahoo: Real
/**
 * None
 */
declare const kbv_returnkey_done: Real
/**
 * None
 */
declare const kbv_returnkey_continue: Real
/**
 * None
 */
declare const kbv_returnkey_emergency: Real
/**
 * None
 */
declare const kbv_autocapitalize_none: Real
/**
 * None
 */
declare const kbv_autocapitalize_words: Real
/**
 * None
 */
declare const kbv_autocapitalize_sentences: Real
/**
 * None
 */
declare const kbv_autocapitalize_characters: Real
/**
 * None
 */
declare const nineslice_center: Real
/**
 * This is a colour data parameter track.
 */
declare const seqtracktype_color: Real
/**
 * None
 */
declare const seqinterpolation_assign: Real
/**
 * None
 */
declare const seqinterpolation_lerp: Real
/**
 * Used for linear interpolation between points.
 */
declare const animcurvetype_linear: Real
/**
 * Used for smooth interpolation between points using Catmull-Rom interpolation.
 */
declare const animcurvetype_catmullrom: Real
/**
 * Used for Bezier interpolation between points.
 */
declare const animcurvetype_bezier: Real
/**
 * None
 */
declare const video_format_rgba: Real
/**
 * None
 */
declare const video_format_yuv: Real
/**
 * None
 */
declare const video_status_closed: Real
/**
 * None
 */
declare const video_status_preparing: Real
/**
 * None
 */
declare const video_status_playing: Real
/**
 * None
 */
declare const video_status_paused: Real
/**
 * None
 */
declare const time_source_global: Real
/**
 * None
 */
declare const time_source_game: Real
/**
 * None
 */
declare const time_source_units_seconds: Real
/**
 * None
 */
declare const time_source_units_frames: Real
/**
 * None
 */
declare const time_source_expire_nearest: Real
/**
 * None
 */
declare const time_source_expire_after: Real
/**
 * None
 */
declare const time_source_state_initial: Real
/**
 * None
 */
declare const time_source_state_active: Real
/**
 * None
 */
declare const time_source_state_paused: Real
/**
 * None
 */
declare const time_source_state_stopped: Real
/**
 * None
 */
declare const debug_input_filter_keyboard: Real
/**
 * None
 */
declare const debug_input_filter_mouse: Real
/**
 * None
 */
declare const debug_input_filter_touch: Real
/**
 * Fired when the (in rollback_event_param) player_id is connected
 */
declare const rollback_connected_to_peer: Real
/**
 * Fired when the (in rollback_event_param) player_id is synchonizing
 */
declare const rollback_synchronizing_with_peer: Real
/**
 * Fired when the (in rollback_event_param) player_id is done synchonizing
 */
declare const rollback_synchronized_with_peer: Real
/**
 * Fired when the (in rollback_event_param) player_id is disconnected
 */
declare const rollback_disconnected_from_peer: Real
/**
 * Fired when the game is interrupted by a (in rollback_event_param) player_id
 */
declare const rollback_game_interrupted: Real
/**
 * Fired when the game resumes after being interrupted by (in rollback_event_param) player_id
 */
declare const rollback_game_resumed: Real
/**
 * Fired when the game you're trying to join is already full
 */
declare const rollback_game_full: Real
/**
 * Fired when you receive back info about the game (in rollback_event_param) player_id and num_players
 */
declare const rollback_game_info: Real
/**
 * Fired when connection attempt was rejected. The error can be caused by invalid token, mismatch in client versions, mismatch in protocol versions. Multiplayer session is closed automatically before event is fired
 */
declare const rollback_connection_rejected: Real
/**
 * Fired when connection attempt was rejected. The error means that client uses obsolete version of the protocol. Before this event is fired GM will show an error message in the UI. Multiplayer session is closed automatically before event is fired
 */
declare const rollback_protocol_rejected: Real
/**
 * Fired when server wants clients to stop the game. Usually this event means that clients are in inconsistent state. Multiplayer session is closed automatically before event is fired
 */
declare const rollback_end_game: Real
/**
 * Fired when you receive a chat message, including those sent by the local player (in rollback_event_param) message, from and to
 */
declare const rollback_chat_message: Real
/**
 * Fired when you receive new preferences set by any of the players in the game, including those set by the local player (in rollback_event_param) preferences, and player_id
 */
declare const rollback_player_prefs: Real
/**
 * Fired when the latency to the server is too high and it's impossible to run the game. Multiplayer session is closed automatically before event is fired
 */
declare const rollback_high_latency: Real
/**
 * Fired when you get info of where players should connect (in rollback_event_param) share_url
 */
declare const rollback_connect_info: Real
/**
 * Fired when you fail to connect to the backend
 */
declare const rollback_connect_error: Real
/**
 * The main audio bus
 */
declare const audio_bus_main: AudioBus
/**
 * None
 */
declare const sprite_add_ext_error_unknown: Real
/**
 * None
 */
declare const sprite_add_ext_error_cancelled: Real
/**
 * None
 */
declare const sprite_add_ext_error_spritenotfound: Real
/**
 * None
 */
declare const sprite_add_ext_error_loadfailed: Real
/**
 * None
 */
declare const sprite_add_ext_error_decompressfailed: Real
/**
 * None
 */
declare const sprite_add_ext_error_setupfailed: Real
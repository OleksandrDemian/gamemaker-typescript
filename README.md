# GameMaker TypeScript

GameMaker TypeScript is a CLI tool that allows you to transpile TypeScript into GameMaker Language (GML). It provides strong typing, better autocomplete, and compatibility with any IDE, making it easier to develop GameMaker projects with TypeScript.

⚠️ This project is in very early stage of development ⚠️

## Features

- **Compile Typescript files**: Automatically transpile TypeScript files (`.ts`) found in scripts and objects. It follows [resource hoisting](#resource-hoisting).
- **Automatic Asset Scanning**: Automatically scans for sprites, rooms, tilesets and sounds in your project.
- **Strong Typing**: Enforces strong types for better code quality and improved autocomplete.
- **IDE Compatibility**: Works seamlessly with any IDE, including VS Code, WebStorm, and others.

## Example code

⚠️ Before writing any code run `gmts setup` to configure project and create extension to automatically (requires v2024.14.4) compile TS before starting the game.

### Game object creation

Here is an example of how to create an object which can be moved on the map using keyboard (filename: `src/player.ts`):

```typescript
interface IPlayer extends GMObject {
  // Create interface to describe shape of the object
  // extend GMObject to inherit all the base properties, like x, y, etc...

  // movement_speed is a new property unique to our obj_player
  movement_speed: number;
}

// create object using defineObject function
// defineObject is a generic function and it receives in input object type (in this case IPlayer)
const obj_player = defineObject<IPlayer>({

  // inside of the defineObject you can declare all of your events, like onCreate, onStep, onDraw etc...
  onCreate() {
    // use "this." keyword to access object properties in a safe fully typed way
    this.movement_speed = 2;
  },

  onStep() {
    var _hspd = keyboard_check(vk_right) - keyboard_check(vk_left);
    var _vspd = keyboard_check(vk_down) - keyboard_check(vk_up);

    if (_hspd != 0 || _vspd != 0) {
        var _dir = point_direction(0, 0, _hspd, _vspd);
        var _xadd = lengthdir_x(this.movement_speed, _dir);
        var _yadd = lengthdir_y(this.movement_speed, _dir);
        this.x = this.x + _xadd;
        this.y = this.y + _yadd;
    }
  },

});
```

### Script

It is also possible to create a script (filename: `src/player_fns.ts`):

```typescript

// you can fully type arguments, in this case we tell that obj is IPlayer, so only IPlayer can be passed here
function increase_player_speed (obj: IPlayer) {
  // here you have full autocomplete for player object, plus, if you try to pass something that is not IPlayer, the code editor will tell you about your mistake
  obj.movement_speed += 2;
}

```

### Advanced usage

You can also use interfaces to specialize your objects. For example, lets create a shared interface that allows multiple objects to share some properties:

```typescript
interface IDamaggeble {
  // all damaggeble object has health
  hp: number;
}

// in this case we accept in input any entity that implements IDamagable interface, i.e. has hp
function apply_damage (obj: IDamagable) {
  obj.hp -= 1; // we don't care if object is player or enemy, because both implement IDamagable interface
}

interface IPlayer extends GMObject, IDamaggeble {
  // hp is inherited from IDamaggeble
  // ... other player specific properties
}

interface IEnemy extends GMObject, IDamaggeble {
  // hp is inherited from IDamaggeble
  // ... other enemy specific properties
}

// obj_player/code.ts
// Create obj_player, since it extends IDamaggeble it will have 'hp' property
const obj_player = defineObject<IPlayer>({
  onCreate() {
    this.hp = 10; // since IPlayer implements IDamaggeble it has health
  },
});

// obj_enemy/code.ts
// Create obj_enemy, since it extends IDamaggeble it will have 'hp' property
const obj_enemy = defineObject<IEnemy>({
  onCreate() {
    this.hp = 2; // since IPlayer implements IDamaggeble it has health
  },
});

// obj_wrong/code.ts
const obj_wrong = defineObject({
  onCreate() {
    
  },
});

// obj_test/code.ts
const obj_test = defineObject<GMObject>({
  onCreate() {
    apply_damage(obj_player); // ok, because obj_player is IDamaggeble
    apply_damage(obj_enemy); // ok, because obj_enemy is IDamaggeble
    apply_damage(obj_wrong); // not ok, because obj_wrong is not IDamaggeble, so the code editor will tell you there is an error
  },
});

```

## Resource hoisting

⚠️ To make this library stable and fully compatible with GameMaker's inner workings this project uses resource hoisting.
The hoisting requires the `.ts` file to be part of the GM resource such as `Object` or `Script`.
So for example, if I create an object `obj_player`, the relative `.ts` should be placed in `/objects/obj_player/code.ts` (you can use any name for .ts file).

This ensures the library never touches `.yyp` file to prevent corruption or de-synchronization. It also ensures that any changes done to the GM resource, applies to the `.ts` (ex: rename, move, etc...).

## Installation

Install the package globally via NPM:

```bash
npm install -g @odemian/gamemaker-typescript
```

## Usage

## Setup

Before using the tool, you need to set it up. Run the following command to initialize the project:

```bash
gmts setup
```

This will create a `tsconfig.json` file, configure extension to compile TS when you run your app, and copy the necessary static types into your project.

### Automatic compilation

Starting from version `2024.14.4` (April 2026) GameMaker added `pre_project_step` extension hook which allows to compile file before assets collection.
So if you use that version or newer, after running `gmts setup` GameMaker will automatically compile `.ts` files before running the game.

### Compile Once

It is also possible to manually compile from command line:

```bash
gmts compile
```

This is useful if you have older versions that does not support `pre_project_step` hook for automatic compilation.
You can also use this one when creating new sprites, sounds etc..., to get them typed.

## Project Structure

All .ts files should go into `/src` folder in project root.

## Current Limitations

- The package is currently in the Proof of Concept (PoC) stage.
- Types are incomplete, and not all object types are supported yet.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

# GameMaker TypeScript

GameMaker TypeScript is a CLI tool that allows you to transpile TypeScript into GameMaker Language (GML). It provides strong typing, better autocomplete, and compatibility with any IDE, making it easier to develop GameMaker projects with TypeScript.

⚠️ This project is in very early stage of development ⚠️

## Features

- **Compile GameMaker Objects**: Automatically transpile TypeScript files matching the pattern `obj_*.ts` into GameMaker objects.
- **Compile GameMaker Scripts**: Automatically transpile TypeScript files matching the pattern `scr_*.ts` into GameMaker scripts.
- **Automatic Asset Scanning**: Automatically scans for sprites, rooms, tilesets and sounds in your project.
- **Strong Typing**: Enforces strong types for better code quality and improved autocomplete.
- **IDE Compatibility**: Works seamlessly with any IDE, including VS Code, WebStorm, and others.

## Example code

### Game object creation

Here is an example of how to create an object which can be moved on the map using keyboard (filename: `src/obj_player.ts`):

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
    var _left = keyboard_check(vk_left);
    var _right = keyboard_check(vk_right);
    var _up = keyboard_check(vk_up);
    var _down = keyboard_check(vk_down);
    var _hspd = _right - _left;
    var _vspd = _down - _up;

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

If you are using manual compilation (`gmts compile`) you should recompile after each file save. It is better to use `gmts watch` to automatically compile only changed files.

⚠️ In order for gamemaker-typescript library to properly parse your .ts file as object you should prefix the filename with `obj_`.
The filename pattern to enable object generation is: `obj_<your object name>.ts`. Ex: `obj_player.ts`

### Script

It is also possible to create a script (filename: `src/scr_player_fns.ts`):

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

// scr_damagable.ts

interface IDamaggeble {
  // all damaggeble object has health
  hp: number;
}

// in this case we accept in input any entity that implements IDamagable interface, i.e. has hp
function apply_damage (obj: IDamagable) {
  obj.hp -= 1; // we don't care if object is player or enemy, because both implement IDamagable interface
}

// obj_player.ts
interface IPlayer extends GMObject, IDamaggeble {
  // hp is inherited from IDamaggeble
}

// create object using defineObject function
// defineObject is a generic function and it receives in input object type (in this case IPlayer)
const obj_player = defineObject<IPlayer>({
  onCreate() {
    this.hp = 10; // since IPlayer implements IDamaggeble it has health
  },

  onStep () {
    // player logic, at some point you hit enemy
    // var enemy = determine who is hit
    apply_damage(enemy); // ok because enemy implements IDamagable
  }
});

// obj_enemy.ts
interface IEnemy extends GMObject, IDamaggeble { }

// create object using defineObject function
// defineObject is a generic function and it receives in input object type (in this case IPlayer)
const obj_enemy = defineObject<IEnemy>({
  onCreate() {
    this.hp = 2; // since IPlayer implements IDamaggeble it has health
  },

  onStep () {
    // enemy logic, at some point it hits player
    // var player = determine who is hit
    apply_damage(player); // ok because player implements IDamagable
  }
});

```

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

This will create a `tsconfig.json` file and copy the necessary static types into your project.

### Compile Once

To compile your TypeScript files into GML, run:

```bash
gmts compile
```

### Watch Mode

To start the tool in watch mode, which automatically recompiles files on changes, run:

```bash
gmts watch
```

This is preferred to manual compilation because it will only compile files that change (compile will always compile entire project).

## Project Structure

The tool expects your project to follow a specific structure for TypeScript files:

- **GameMaker Objects**: Files should be named `obj_*.ts`.
- **GameMaker Scripts**: Files should be named `scr_*.ts`.

## Current Limitations

- The package is currently in the Proof of Concept (PoC) stage.
- Types are incomplete, and not all object types are supported yet.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

# GameMaker TypeScript

GameMaker TypeScript is a CLI tool that allows you to transpile TypeScript into GameMaker Language (GML). It provides strong typing, better autocomplete, and compatibility with any IDE, making it easier to develop GameMaker projects with TypeScript.

⚠️ This project is in very early stage of development ⚠️

## Features

- **Compile GameMaker Objects**: Automatically transpile TypeScript files matching the pattern `obj_*.ts` into GameMaker objects.
- **Compile GameMaker Scripts**: Automatically transpile TypeScript files matching the pattern `scr_*.ts` into GameMaker scripts.
- **Automatic Asset Scanning**: Automatically scans for sprites and sounds in your project.
- **Strong Typing**: Enforces strong types for better code quality and improved autocomplete.
- **IDE Compatibility**: Works seamlessly with any IDE, including VS Code, WebStorm, and others.

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

This is prefered to manual compilation because it will only compile files that change (compile will always compire entire project).

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

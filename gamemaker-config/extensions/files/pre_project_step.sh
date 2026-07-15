#!/bin/bash

# Move to the project root using the built-in GM variable
cd "$YYprojectDir"

echo "[GameMaker_Typescript] Starting TypeScript compilation..."

# Check if gmts is installed
if ! command -v gmts >/dev/null 2>&1; then
    echo "[ERROR] gmts CLI not found. Please run: npm i -g gmts"
    exit 1
fi

# Run the compilation
gmts compile

if [ $? -ne 0 ]; then
    echo "[GameMaker_Typescript] ERROR: GameMaker_Typescript is not installed"
    exit 1
fi

echo "[GameMaker_Typescript] Typescript project compiled complete."
exit 0

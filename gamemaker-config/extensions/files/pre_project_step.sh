#!/bin/bash

# GUI-launched apps (like GameMaker) don't inherit a full shell PATH on macOS,
# so try sourcing common profile files, then fall back to checking known
# global install locations for common Node version/package managers.

for profile in /etc/profile "$HOME/.bash_profile" "$HOME/.profile" "$HOME/.bashrc"; do
    [ -f "$profile" ] && source "$profile" 2>/dev/null
done

cd "$YYprojectDir"

echo "[GameMaker_Typescript] Starting TypeScript compilation..."

find_gmts() {
    if command -v gmts >/dev/null 2>&1; then
        command -v gmts
        return 0
    fi

    local candidates=(
        "$HOME/.npm-global/bin/gmts"
        "/usr/local/bin/gmts"
        "/opt/homebrew/bin/gmts"
        "$HOME/.yarn/bin/gmts"
        "$HOME/.volta/bin/gmts"
    )

    local npm_prefix
    npm_prefix=$(npm config get prefix 2>/dev/null)
    [ -n "$npm_prefix" ] && candidates+=("$npm_prefix/bin/gmts")

    for path in "${candidates[@]}"; do
        if [ -x "$path" ]; then
            echo "$path"
            return 0
        fi
    done

    return 1
}

GMTS_BIN=$(find_gmts)

if [ -z "$GMTS_BIN" ]; then
    echo "[ERROR] gmts CLI not found. Please run: npm i -g gmts"
    exit 1
fi

"$GMTS_BIN" compile

if [ $? -ne 0 ]; then
    echo "[GameMaker_Typescript] ERROR: GameMaker_Typescript is not installed"
    exit 1
fi

echo "[GameMaker_Typescript] Typescript project compiled complete."
exit 0

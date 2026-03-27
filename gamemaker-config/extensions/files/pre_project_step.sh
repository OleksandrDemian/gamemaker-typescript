@echo off

:: Move to the project root using the built-in GM variable
cd /d "%YYprojectDir%"

echo [GameMaker_Typescript] Starting TypeScript compilation...

:: Check if gmts is installed
where gmts >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] gmts CLI not found. Please run: npm i -g gmts
    exit /b 1
)

:: Run the compilation
call gmts compile

if %errorlevel% neq 0 (
    echo [GameMaker_Typescript] ERROR: GameMaker_Typescript is not installed
    exit /b 1
)

echo [GameMaker_Typescript] Typescript project compiled complete.
exit /b 0

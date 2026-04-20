@echo off
echo ========================================
echo   DEVNAGARI Project Setup
echo   Creating folder structure...
echo ========================================

cd /d "%~dp0"

:: Create directories
mkdir src 2>nul
mkdir src\components 2>nul
mkdir src\components\entry 2>nul
mkdir src\components\city 2>nul
mkdir src\components\darshan 2>nul
mkdir src\components\panchang 2>nul
mkdir src\components\prasad 2>nul
mkdir src\components\ui 2>nul
mkdir src\data 2>nul
mkdir src\store 2>nul
mkdir src\hooks 2>nul
mkdir src\utils 2>nul
mkdir public 2>nul
mkdir public\icons 2>nul
mkdir public\sounds 2>nul

echo Folders created!
echo.
echo Installing dependencies...
call npm install

echo.
echo ========================================
echo   Setup Complete!
echo   Run 'npm run dev' to start
echo ========================================
pause

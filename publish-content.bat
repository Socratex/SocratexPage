@echo off
setlocal

cd /d "%~dp0"

echo.
echo SocratexPage content publish
echo ============================
echo.

where git >nul 2>nul
if errorlevel 1 (
  echo ERROR: Git was not found in PATH.
  echo Install Git or open this script from a Git-enabled shell.
  echo.
  pause
  exit /b 1
)

git rev-parse --is-inside-work-tree >nul 2>nul
if errorlevel 1 (
  echo ERROR: This folder is not a Git repository.
  echo.
  pause
  exit /b 1
)

set "TRACKED_PATHS=content"
if exist "assets\content" set "TRACKED_PATHS=content assets/content"

echo Staging:
echo   %TRACKED_PATHS%
echo.

git add -A -- %TRACKED_PATHS%
if errorlevel 1 (
  echo.
  echo ERROR: Could not stage content changes.
  echo.
  pause
  exit /b 1
)

git diff --cached --quiet -- %TRACKED_PATHS%
if not errorlevel 1 (
  echo No content changes to publish.
  echo.
  pause
  exit /b 0
)

for /f %%i in ('powershell -NoProfile -Command "Get-Date -Format yyyy-MM-dd_HH-mm-ss"') do set "STAMP=%%i"

echo Creating commit...
git commit -m "Update content %STAMP%"
if errorlevel 1 (
  echo.
  echo ERROR: Commit failed.
  echo.
  pause
  exit /b 1
)

echo.
echo Pushing to origin/main...
git push origin main
if errorlevel 1 (
  echo.
  echo ERROR: Push failed. The commit was created locally, but was not uploaded.
  echo You can retry this script after fixing the Git error above.
  echo.
  pause
  exit /b 1
)

echo.
echo Done. Cloudflare Pages should start deployment automatically.
echo.
pause

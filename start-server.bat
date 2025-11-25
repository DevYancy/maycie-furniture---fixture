@echo off
echo ========================================
echo  Maycie Furniture Website Server
echo ========================================
echo.
echo Starting local web server...
echo Your website will open at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Try Python 3 first
python -m http.server 8000 2>nul
if %errorlevel% neq 0 (
    REM If Python 3 fails, try Python 2
    python -m SimpleHTTPServer 8000 2>nul
    if %errorlevel% neq 0 (
        echo ERROR: Python is not installed or not in PATH
        echo.
        echo Please install Python from: https://python.org
        echo Or use VS Code with Live Server extension
        echo.
        pause
        exit /b 1
    )
)
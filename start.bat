@echo off
echo 🚀 Starting HR Management System Frontend...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Install PM2 globally if not installed
pm2 --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 Installing PM2...
    npm install -g pm2
)

REM Create logs directory if it doesn't exist
if not exist "logs" mkdir logs

REM Start the application with PM2
echo 🎯 Starting application with PM2...
pm2 start ecosystem.config.js

REM Save PM2 configuration
pm2 save

REM Show status
echo 📊 Application Status:
pm2 status

echo ✅ HR Management System Frontend is now running!
echo 🌐 Frontend URL: https://hr.mimshack-sourc.com
echo 🔗 Backend API: https://hrbackoofice.mimshack-sourc.com/api
echo.
echo 📋 Useful commands:
echo   - View logs: pm2 logs hr-management-frontend
echo   - Restart: pm2 restart hr-management-frontend
echo   - Stop: pm2 stop hr-management-frontend
echo   - Monitor: pm2 monit

pause

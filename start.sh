#!/bin/bash

# HR Management System - Frontend Startup Script
echo "🚀 Starting HR Management System Frontend..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Install PM2 globally if not installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Create logs directory if it doesn't exist
mkdir -p logs

# Start the application with PM2
echo "🎯 Starting application with PM2..."
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Show status
echo "📊 Application Status:"
pm2 status

echo "✅ HR Management System Frontend is now running!"
echo "🌐 Frontend URL: https://hr.mimshack-sourc.com"
echo "🔗 Backend API: https://hrbackoofice.mimshack-sourc.com/api"
echo ""
echo "📋 Useful commands:"
echo "  - View logs: pm2 logs hr-management-frontend"
echo "  - Restart: pm2 restart hr-management-frontend"
echo "  - Stop: pm2 stop hr-management-frontend"
echo "  - Monitor: pm2 monit"

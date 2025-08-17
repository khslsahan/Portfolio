#!/bin/bash

# Angular Portfolio Deployment Script
echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to GitHub Pages
    echo "🚀 Deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "🌐 Your portfolio is now live at: https://khslsahan.github.io/Portfolio/"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi

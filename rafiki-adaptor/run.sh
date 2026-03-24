#!/bin/bash

# Kanzu Rafiki Adaptor - Run Script
# This script exports environment variables and starts the Docker containers

set -e  # Exit on any error

echo "🚀 Starting Kanzu Rafiki Adaptor..."

# Check if .prod.env exists
if [ ! -f ".prod.env" ]; then
    echo "❌ Error: .prod.env file not found!"
    echo "Please create a .prod.env file with your configuration."
    exit 1
fi

# Source the environment variables from .prod.env
echo "📋 Loading environment variables from .prod.env..."
source .prod.env

# Export all environment variables for docker-compose
export KANZU_API_BASE_URL
export KANZU_API_USERNAME
export KANZU_API_PASSWORD
export GRAPHQL_ENDPOINT
export AUTH_DOMAIN
export AUTH_IDENTITY_SERVER_SECRET
export WALLET_BASE_URL
export MOMO_BASE_URL
export MOCK_MOMO_BASE_URL
export PORT
export NODE_ENV
export EXCHANGE_RATES_URL
export EXCHANGE_RATES_ACCESS_KEY

# Set defaults for any missing variables
export KANZU_API_BASE_URL=${KANZU_API_BASE_URL:-http://localhost:8080}
export KANZU_API_USERNAME=${KANZU_API_USERNAME:-admin}
export KANZU_API_PASSWORD=${KANZU_API_PASSWORD:-admin}
export GRAPHQL_ENDPOINT=${GRAPHQL_ENDPOINT:-http://localhost:3011/graphql}
export AUTH_DOMAIN=${AUTH_DOMAIN:-http://rafiki-auth:3009}
export AUTH_IDENTITY_SERVER_SECRET=${AUTH_IDENTITY_SERVER_SECRET:-2pEcn2kkCclbOHQiGNEwhJ0rucATZhrA807HTm2rNXE=}
export WALLET_BASE_URL=${WALLET_BASE_URL:-https://happy-life-bank-backend}
export MOMO_BASE_URL=${MOMO_BASE_URL:-http://localhost:8000}
export MOCK_MOMO_BASE_URL=${MOCK_MOMO_BASE_URL:-http://localhost:5000}
export PORT=${PORT:-1000}
export NODE_ENV=${NODE_ENV:-production}
export EXCHANGE_RATES_URL=${EXCHANGE_RATES_URL:-http://api.exchangeratesapi.io/v1/}
export EXCHANGE_RATES_ACCESS_KEY=${EXCHANGE_RATES_ACCESS_KEY:-my-exchange-rates-key}
# Display configuration
echo "🔧 Configuration:"
echo "  KANZU_API_BASE_URL: $KANZU_API_BASE_URL"
echo "  GRAPHQL_ENDPOINT: $GRAPHQL_ENDPOINT"
echo "  AUTH_DOMAIN: $AUTH_DOMAIN"
echo "  PORT: $PORT"
echo "  NODE_ENV: $NODE_ENV"
echo "  EXCHANGE_RATES_URL: $EXCHANGE_RATES_URL"
echo "  EXCHANGE_RATES_ACCESS_KEY: $EXCHANGE_RATES_ACCESS_KEY"
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Error: Docker is not running!"
    echo "Please start Docker Desktop and try again."
    exit 1
fi

# Build and start the containers
echo "🐳 Building and starting Docker containers..."
docker compose up --build -d

echo "✅ Kanzu Rafiki Adaptor started successfully!"
echo "🌐 Application available at: http://localhost:$PORT"
echo "🏥 Health check: http://localhost:$PORT/health"

# CiviTrack Deployment Architecture

This document outlines the deployment architecture for the CiviTrack application, with the frontend deployed to Netlify and the backend deployed to Render.

## Recent Updates

- Migrated backend deployment from Vercel to Render for improved reliability
- Updated Netlify API proxy configuration to connect to Render backend
- Fixed theme implementation for consistent UI rendering across environments
- Added deployment scripts and testing utilities

## Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Frontend       │     │  Backend API    │     │  Database       │
│  (Netlify)      │────▶│  (Render)       │────▶│  (PostgreSQL)   │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## Frontend Deployment (Netlify)

### Setup Instructions

1. **Create a Netlify Account**
   - Sign up at [netlify.com](https://www.netlify.com/)

2. **Connect to GitHub Repository**
   - Connect Netlify to your GitHub repository
   - Select the repository and branch to deploy

3. **Configure Build Settings**
   - Build command: `cd frontend && npm install && npm run build`
   - Publish directory: `frontend/build`

4. **Environment Variables**
   - Set the following environment variables in Netlify:
     ```
     REACT_APP_API_URL=https://backend-tau-inky-24.vercel.app/api
     CI=false
     ```
   - These are also configured in the `netlify.toml` file

5. **Netlify Configuration**
   - We've added a `netlify.toml` file with the following configuration:
     ```toml
     [build]
       publish = "build"
       command = "CI=false npm run build"
     
     [build.environment]
       CI = "false"
       REACT_APP_API_URL = "https://backend-tau-inky-24.vercel.app/api"
     
     # API proxy redirect
     [[redirects]]
       from = "/api/*"
       to = "https://backend-tau-inky-24.vercel.app/api/:splat"
       status = 200
       force = true
       headers = {Access-Control-Allow-Origin = "*"}
     
     # SPA redirects for client-side routing
     [[redirects]]
       from = "/*"
       to = "/index.html"
       status = 200
     ```

6. **Deploy Triggers**
   - Configure Netlify to deploy automatically when changes are pushed to the main branch
   - We've added a GitHub Actions workflow for automated deployment

### Deployment Verification

We've created a verification script at `frontend/scripts/verify-deployment.js` that tests connectivity to:

1. Vercel backend API
2. Netlify frontend
3. Netlify API proxy
4. Local API proxy

To run the verification script:

```bash
cd frontend
npm run verify-deployment
```

The script will output the status of each connection test, helping to diagnose any deployment issues.

### GitHub Actions Workflow

We've created a GitHub Actions workflow file at `.github/workflows/netlify-deploy.yml` that automates the deployment process:

```yaml
name: Deploy to Netlify

on:
  push:
    branches:
      - main
    paths:
      - 'frontend/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: frontend
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: frontend/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build
        env:
          CI: false
          REACT_APP_API_URL: https://backend-tau-inky-24.vercel.app/api

      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2
        with:
          publish-dir: './frontend/build'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
          enable-pull-request-comment: true
          enable-commit-comment: true
          overwrites-pull-request-comment: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        timeout-minutes: 5
```

To set up this workflow, you'll need to add the following secrets to your GitHub repository:

- `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
- `NETLIFY_SITE_ID`: The API ID of your Netlify site

See `frontend/GITHUB_ACTIONS_SETUP.md` for detailed instructions on setting up these secrets.

### Netlify Configuration Files

We've created the following configuration files for Netlify deployment:

1. **netlify.toml** in the frontend directory:

```toml
[build]
  publish = "build"
  command = "CI=false npm run build"

[build.environment]
  CI = "false"
  REACT_APP_API_URL = "https://civitrack-backend.vercel.app/api"

# API proxy redirect
[[redirects]]
  from = "/api/*"
  to = "https://civitrack-backend.vercel.app/api/:splat"
  status = 200
  force = true
  headers = {Access-Control-Allow-Origin = "*"}

# SPA redirects for known routes
[[redirects]]
  from = "/issues/*"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/profile/*"
  to = "/index.html"
  status = 200

# Catch-all SPA redirect
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

### Deployment Verification

We've created a verification script to test the deployment connectivity. The script checks:

1. Connectivity to the Vercel backend API
2. Connectivity to the Netlify frontend
3. Functionality of the Netlify API proxy
4. Local API proxy for development testing

To run the verification script:

```bash
cd frontend
npm run verify-deployment
```

The script is located at `frontend/scripts/verify-deployment.js` and has been added as an npm script in `package.json`.

## Backend Deployment (Render)

### Database Migrations

Before deploying new versions, ensure all database migrations are applied:

1. **Profile Image Column Migration**
   - When deploying version 1.3.4 or later, ensure the `profileImage` column is added to the `users` table
   - Run the migration script: `node src/scripts/add-profile-image-column.js`
   - This adds the required column for profile image functionality

### Setup Instructions

1. **Create a Render Account**
   - Sign up at [render.com](https://render.com/)

2. **Connect to GitHub Repository**
   - Connect Render to your GitHub repository
   - Select the repository and branch to deploy

3. **Configure Web Service**
   - Service Type: Web Service
   - Name: civitrack-backend
   - Root Directory: backend
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

4. **Environment Variables**
   - Set the following environment variables in Render:
     ```
     NODE_ENV=production
     RENDER=true
     PORT=10000
     API_URL=https://civitrack-backend.onrender.com
     
     # JWT Configuration
     JWT_SECRET=your_secure_random_string
     JWT_EXPIRES_IN=12h
     JWT_REFRESH_EXPIRES_IN=7d
     JWT_AUDIENCE=civitrack-api
     JWT_ISSUER=civitrack-auth
     
     # Database Configuration
     DB_HOST=your_db_host
     DB_PORT=5432
     DB_NAME=your_db_name
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     DB_SSL=true
     
     # CORS Configuration
     CORS_ORIGIN=https://civitrack-dev.netlify.app
     ```
   - These are also configured in the `render.yaml` file

5. **Render Configuration**
   - We've added a `render.yaml` file with the following configuration:
     ```yaml
     services:
       - type: web
         name: civitrack-backend
         env: node
         buildCommand: npm install && npm run build
         startCommand: npm start
         envVars:
           - key: NODE_ENV
             value: production
           - key: RENDER
             value: true
           - key: PORT
             value: 10000
           - key: CORS_ORIGIN
             value: https://civitrack-dev.netlify.app
         healthCheckPath: /api/health
         autoDeploy: true
     ```

6. **Deploy Triggers**
   - Configure Render to deploy automatically when changes are pushed to the main branch

### Deployment Scripts

We've created deployment scripts to simplify the deployment process:

- `deploy-frontend.js`: Deploys the frontend to Netlify
- `deploy-backend.js`: Provides instructions for deploying the backend to Render
- `test-deployment.js`: Verifies the deployment by testing various aspects of the application

### Running the Deployment Scripts

1. **Frontend Deployment**
   ```bash
   node deploy-frontend.js
   ```

2. **Backend Deployment**
   ```bash
   node deploy-backend.js
   ```

3. **Deployment Verification**
   ```bash
   node test-deployment.js
   ```

## Security Considerations

1. **Environment Variables**
   - Store all sensitive information as environment variables
   - Never commit secrets to the repository

2. **CORS Configuration**
   - Restrict CORS to only allow requests from your Netlify domain

3. **Rate Limiting**
   - Implement rate limiting to prevent abuse
   - Configure stricter limits for authentication endpoints

4. **JWT Security**
   - Use strong, randomly generated secrets
   - Set appropriate token expiration times
   - Implement token refresh mechanism

5. **Database Security**
   - Use SSL for database connections
   - Implement proper access controls
   - Regularly backup your database

## Continuous Integration/Deployment

1. **GitHub Actions**
   - Set up GitHub Actions for CI/CD
   - Run tests before deployment
   - Automate the deployment process

2. **Branch Strategy**
   - `main` branch: Production deployments
   - `dev` branch: Development and testing

## Monitoring and Logging

1. **Netlify Analytics**
   - Monitor frontend performance and user behavior

2. **Render Logs**
   - Track API performance and errors through Render's logging interface

3. **External Monitoring**
   - Consider implementing additional monitoring tools like Sentry for error tracking

## Troubleshooting

### Frontend Issues

- If the frontend fails to connect to the backend, check the `REACT_APP_API_URL` environment variable
- For theme-related issues, clear local storage and refresh the page
- Check Netlify deployment logs for build errors

### Backend Issues

- If the backend fails to start, check the environment variables on Render
- For database connection issues, verify the database URL in the Render dashboard
- Review Render logs for runtime errors
# CiviTrack Deployment Architecture

This document outlines the deployment architecture for the CiviTrack application, with the frontend deployed to Netlify and the backend deployed to Vercel.

## Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Frontend       │     │  Backend API    │     │  Database       │
│  (Netlify)      │────▶│  (Vercel)       │────▶│  (PostgreSQL)   │
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
     REACT_APP_API_URL=https://your-vercel-backend-url.vercel.app/api
     REACT_APP_USE_MOCK_SERVICE=false
     ```

5. **Deploy Triggers**
   - Configure Netlify to deploy automatically when changes are pushed to the main branch

### Netlify Configuration File

Create a `netlify.toml` file in the root of your repository:

```toml
[build]
  base = "frontend/"
  publish = "build/"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "16"
```

## Backend Deployment (Vercel)

### Database Migrations

Before deploying new versions, ensure all database migrations are applied:

1. **Profile Image Column Migration**
   - When deploying version 1.3.4 or later, ensure the `profileImage` column is added to the `users` table
   - Run the migration script: `node src/scripts/add-profile-image-column.js`
   - This adds the required column for profile image functionality

### Setup Instructions

1. **Create a Vercel Account**
   - Sign up at [vercel.com](https://vercel.com/)

2. **Connect to GitHub Repository**
   - Connect Vercel to your GitHub repository
   - Select the repository and branch to deploy

3. **Configure Project Settings**
   - Root directory: `backend`
   - Build command: `npm install && npm run build`
   - Output directory: `dist`

4. **Environment Variables**
   - Set the following environment variables in Vercel:
     ```
     NODE_ENV=production
     PORT=8080
     API_URL=https://your-vercel-backend-url.vercel.app
     
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
     CORS_ORIGIN=https://your-netlify-frontend-url.netlify.app
     ```

### Vercel Configuration File

Create a `vercel.json` file in the backend directory:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/index.js"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
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

2. **Vercel Analytics**
   - Track API performance and errors

3. **External Monitoring**
   - Consider implementing additional monitoring tools like Sentry for error tracking

## Troubleshooting

1. **Deployment Failures**
   - Check build logs in Netlify/Vercel
   - Verify environment variables are correctly set

2. **API Connection Issues**
   - Confirm CORS settings are correct
   - Verify API URL is properly configured in frontend

3. **Database Connection Issues**
   - Check database credentials
   - Verify network access rules
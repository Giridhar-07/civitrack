# Netlify Deployment Guide for CiviTrack Frontend

## Overview

This document provides instructions for deploying the CiviTrack frontend to Netlify. The deployment has been configured to work with the Vercel-hosted backend API.

## Configuration Files

The following files have been set up to ensure proper deployment:

1. **netlify.toml** - Contains build settings and redirect rules
2. **public/_redirects** - Additional redirect rules for Netlify
3. **src/utils/testApiConnection.js** - Utility to test API connectivity

## Environment Variables

The following environment variables are configured in netlify.toml:

- `CI=false` - Prevents treating warnings as errors during build
- `REACT_APP_API_URL=https://civitrack-backend.vercel.app/api` - Points to the Vercel backend

## API Proxy

We've set up two methods to handle API requests:

1. **Netlify Redirects** - The netlify.toml file contains a redirect rule that proxies requests from `/api/*` to the Vercel backend
2. **Environment Variable** - The REACT_APP_API_URL environment variable is used by the application to make direct requests

## Deployment Steps

1. Connect your GitHub repository to Netlify
2. Use the following build settings:
   - Build command: `CI=false npm run build`
   - Publish directory: `build`
3. Add the environment variables mentioned above
4. Deploy the site

## Troubleshooting

If you encounter issues with the API connection:

1. Check the browser console for API connection test results
2. Verify that the CORS headers are properly set in the backend
3. Ensure that the API proxy redirect in netlify.toml is working correctly
4. Test the API connection using the utility in src/utils/testApiConnection.js

## Status Request Functionality

The status request functionality has been updated with improved error handling and logging. If you encounter issues:

1. Check the browser console for detailed error logs
2. Verify that the API endpoints are accessible
3. Ensure that authentication cookies are being properly sent with requests
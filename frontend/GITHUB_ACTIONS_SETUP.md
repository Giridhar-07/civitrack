# GitHub Actions Setup for Netlify Deployment

This guide provides instructions for setting up GitHub Actions to automatically deploy the CiviTrack frontend to Netlify when changes are pushed to the main branch.

## Prerequisites

1. A GitHub repository containing the CiviTrack project
2. A Netlify account with a site already created for the CiviTrack frontend

## Required Secrets

The GitHub Actions workflow requires the following secrets to be set in your GitHub repository:

1. `NETLIFY_AUTH_TOKEN`: A personal access token from Netlify
2. `NETLIFY_SITE_ID`: The ID of your Netlify site

## How to Obtain Netlify Secrets

### Netlify Auth Token

1. Log in to your Netlify account
2. Go to User Settings > Applications > Personal access tokens
3. Click "New access token"
4. Give it a name (e.g., "GitHub Actions Deployment")
5. Copy the generated token

### Netlify Site ID

1. Log in to your Netlify account
2. Go to the site you want to deploy to
3. Go to Site settings > General > Site details
4. Copy the API ID

## Adding Secrets to GitHub

1. Go to your GitHub repository
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Add the following secrets:
   - Name: `NETLIFY_AUTH_TOKEN`, Value: (paste your Netlify auth token)
   - Name: `NETLIFY_SITE_ID`, Value: (paste your Netlify site ID)

## Workflow File

The workflow file is located at `.github/workflows/netlify-deploy.yml` and contains the following configuration:

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
        timeout-minutes: 10
```

## Manual Deployment

If you need to manually deploy the frontend to Netlify, you can do so by running the following commands:

```bash
cd frontend
npm install
npm run build
```

Then, deploy the `build` directory to Netlify using the Netlify CLI or by dragging and dropping the directory to the Netlify dashboard.

## Troubleshooting

- If the GitHub Actions workflow fails, check the workflow logs for error messages
- Ensure that the `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` secrets are correctly set
- Verify that the Netlify site exists and is correctly configured
- Check that the `publish-dir` in the workflow file matches the build output directory of your project
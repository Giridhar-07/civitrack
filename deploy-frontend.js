// Netlify deployment script for frontend
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const FRONTEND_DIR = path.join(__dirname, 'frontend');
const NETLIFY_SITE_NAME = 'civitrak-dev'; // Updated site name from terminal output
const NETLIFY_SITE_ID = '197d1569-0db7-4fdf-803b-82ef734f203d'; // Site ID from terminal output
const BRANCH = 'dev'; // Deploy from dev branch

// Ensure we're in the right directory
process.chdir(FRONTEND_DIR);
console.log(`Working directory: ${process.cwd()}`);

// Check if netlify-cli is installed
try {
  execSync('npx netlify --version', { stdio: 'inherit' });
  console.log('Netlify CLI is available');
} catch (error) {
  console.log('Installing netlify-cli...');
  execSync('npm install -g netlify-cli', { stdio: 'inherit' });
}

// Ensure we're on the dev branch
console.log(`Checking current branch...`);
const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
if (currentBranch !== BRANCH) {
  console.log(`Switching to ${BRANCH} branch...`);
  execSync(`git checkout ${BRANCH}`, { stdio: 'inherit' });
}

// Build the frontend
console.log('Building frontend...');
execSync('npm run build', { stdio: 'inherit' });

// Deploy to Netlify
console.log(`Deploying to Netlify site: ${NETLIFY_SITE_NAME} (${NETLIFY_SITE_ID}) from ${BRANCH} branch...`);
try {
  // Use --prod flag to deploy to production with site ID
  execSync(`npx netlify deploy --dir=build --prod --site=${NETLIFY_SITE_ID}`, { stdio: 'inherit' });
  console.log('Frontend deployed successfully!');
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}
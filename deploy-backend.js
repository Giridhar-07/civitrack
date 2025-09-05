// Render deployment script for backend
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const BACKEND_DIR = path.join(__dirname, 'backend');
const RENDER_SERVICE_NAME = 'civitrack-backend'; // Change this to your Render service name

// Ensure we're in the right directory
process.chdir(BACKEND_DIR);
console.log(`Working directory: ${process.cwd()}`);

// Check if render-cli is installed (if available)
try {
  execSync('npx render --version', { stdio: 'inherit' });
  console.log('Render CLI is available');
} catch (error) {
  console.log('Render CLI not available. Will use Git-based deployment instead.');
}

// Build the backend
console.log('Building backend...');
execSync('npm run build', { stdio: 'inherit' });

// Deploy to Render using Git
console.log(`Deploying to Render service: ${RENDER_SERVICE_NAME}...`);
console.log('Render uses Git-based deployments. Push your changes to the connected repository.');
console.log('Instructions:');
console.log('1. Commit your changes');
console.log('   git add .');
console.log('   git commit -m "Deploy backend to Render"');
console.log('2. Push to your repository');
console.log('   git push origin main');
console.log('3. Render will automatically deploy from the connected repository');
console.log('4. Check deployment status at: https://dashboard.render.com');
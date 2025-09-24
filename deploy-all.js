// Deploy both frontend and backend
const { execSync } = require('child_process');
const path = require('path');

console.log('Starting deployment of CiviTrack application...');

// Deploy backend first
console.log('\n===== DEPLOYING BACKEND =====');
try {
  console.log('Running backend deployment script...');
  execSync('node deploy-backend.js', { stdio: 'inherit' });
  console.log('Backend deployment completed successfully!');
} catch (error) {
  console.error('Backend deployment failed:', error.message);
  process.exit(1);
}

// Then deploy frontend
console.log('\n===== DEPLOYING FRONTEND =====');
try {
  console.log('Running frontend deployment script...');
  execSync('node deploy-frontend.js', { stdio: 'inherit' });
  console.log('Frontend deployment completed successfully!');
} catch (error) {
  console.error('Frontend deployment failed:', error.message);
  process.exit(1);
}

console.log('\n===== DEPLOYMENT COMPLETE =====');
console.log('Frontend: https://civitrack-dev.netlify.app/');
console.log('Backend: https://civitrack.onrender.com/');
console.log('\nRunning deployment tests...');

try {
  console.log('Testing deployment...');
  execSync('node test-deployment.js', { stdio: 'inherit' });
  console.log('Deployment tests passed successfully!');
} catch (error) {
  console.error('Deployment tests failed:', error.message);
  console.log('Please check the logs for more details.');
  process.exit(1);
}

console.log('\n✅ CiviTrack application deployed and tested successfully!');
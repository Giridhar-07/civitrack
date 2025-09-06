// Render deployment script for backend
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from backend/.env
dotenv.config({ path: path.join(__dirname, 'backend', '.env') });

// Configuration
const BACKEND_DIR = path.join(__dirname, 'backend');
const RENDER_SERVICE_ID = process.env.RENDER_SERVICE_ID || 'srv-d2tfaoje5dus73dps86g';
const RENDER_API_KEY = process.env.RENDER_API_KEY || 'rnd_ekciXLNRBnzoqMV6Vk2xvCKywTLL';
const RENDER_API_URL = `https://api.render.com/v1/services/${RENDER_SERVICE_ID}/deploys`;

// Ensure we're in the right directory
process.chdir(BACKEND_DIR);
console.log(`Working directory: ${process.cwd()}`);
console.log(`Using Render Service ID: ${RENDER_SERVICE_ID}`);

// Build the backend
console.log('Building backend...');
execSync('npm run build', { stdio: 'inherit' });

// Deploy to Render using API
async function deployToRender() {
  console.log('Starting deployment to Render...');
  
  try {
    // Trigger a new deployment on Render
    const response = await axios.post(
      RENDER_API_URL,
      { clearCache: 'clear' }, // Clear build cache for a fresh deployment
      {
        headers: {
          'Authorization': `Bearer ${RENDER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Deployment triggered successfully!');
    console.log(`Deploy ID: ${response.data.id}`);
    console.log(`Status: ${response.data.status}`);
    
    // Handle different response formats from Render API
    if (response.data.service) {
      console.log(`Service: ${response.data.service.name || 'civitrack-backend'}`);
      console.log(`Live URL: ${response.data.service.url || 'https://civitrack.onrender.com'}`);
    } else {
      console.log('Service: civitrack-backend');
      console.log('Live URL: https://civitrack.onrender.com');
    }
    
    if (response.data.commit) {
      console.log(`Commit: ${response.data.commit.message || 'N/A'}`);
    }
    
    // Monitor deployment status
    await monitorDeployment(response.data.id);
    
  } catch (error) {
    console.error('Error deploying to Render:', error.response?.data || error.message);
    process.exit(1);
  }
}

async function monitorDeployment(deployId) {
  console.log('\nMonitoring deployment status...');
  
  let deployed = false;
  let attempts = 0;
  const maxAttempts = 30; // Check for up to 15 minutes (30 * 30s)
  
  while (!deployed && attempts < maxAttempts) {
    try {
      const statusResponse = await axios.get(
        `https://api.render.com/v1/services/${RENDER_SERVICE_ID}/deploys/${deployId}`,
        {
          headers: {
            'Authorization': `Bearer ${RENDER_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      const status = statusResponse.data.status;
      console.log(`Deployment status: ${status} (attempt ${attempts + 1}/${maxAttempts})`);
      
      if (status === 'live') {
        deployed = true;
        console.log('\n✅ Deployment completed successfully!');
        const serviceUrl = statusResponse.data.service?.url || 'https://civitrack.onrender.com';
        console.log(`Backend is now live at: ${serviceUrl}`);
        break;
      } else if (status === 'failed' || status === 'canceled') {
        console.error(`\n❌ Deployment ${status}!`);
        console.error('Check the Render dashboard for more details.');
        process.exit(1);
      }
      
      // Wait 30 seconds before checking again
      await new Promise(resolve => setTimeout(resolve, 30000));
      attempts++;
      
    } catch (error) {
      console.error('Error checking deployment status:', error.response?.data || error.message);
      attempts++;
      await new Promise(resolve => setTimeout(resolve, 30000));
    }
  }
  
  if (!deployed) {
    console.error('\n⚠️ Deployment monitoring timed out');
    console.log('The deployment might still be in progress. Check the Render dashboard for status.');
    process.exit(1);
  }
}

// Run the deployment
deployToRender();
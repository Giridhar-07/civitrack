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
const RENDER_SERVICE_ID = process.env.RENDER_SERVICE_ID; // must be provided via env
const RENDER_API_KEY = process.env.RENDER_API_KEY; // must be provided via env
const RENDER_DEPLOY_API_URL = RENDER_SERVICE_ID
  ? `https://api.render.com/v1/services/${RENDER_SERVICE_ID}/deploys`
  : null;
const RENDER_ENV_API_URL = RENDER_SERVICE_ID
  ? `https://api.render.com/v1/services/${RENDER_SERVICE_ID}/env-vars`
  : null;

if (!RENDER_SERVICE_ID || !RENDER_API_KEY) {
  console.error('Missing RENDER_SERVICE_ID and/or RENDER_API_KEY. Please set them in backend/.env or environment.');
  process.exit(1);
}

// Ensure we're in the right directory
process.chdir(BACKEND_DIR);
console.log(`Working directory: ${process.cwd()}`);
console.log(`Using Render Service ID: ${RENDER_SERVICE_ID}`);

// Build the backend
console.log('Building backend...');
execSync('npm run build', { stdio: 'inherit' });

// -------------------------
// ENV VAR SYNC HELPERS
// -------------------------

/**
 * Read required environment variables from backend/.env and return a map.
 * Never logs secret values, only presence flags.
 */
function readLocalEnvForRender() {
  const keys = [
    'IMAGEKIT_URL_ENDPOINT',
    'IMAGEKIT_PUBLIC_KEY',
    'IMAGEKIT_PRIVATE_KEY',
    'EMAIL_HOST',
    'EMAIL_PORT',
    'EMAIL_USER',
    'EMAIL_PASS',
    'EMAIL_FROM',
    'APP_URL',
    'CORS_ORIGIN',
    'JWT_AUDIENCE',
    'JWT_ISSUER'
  ];

  const result = {};
  keys.forEach((k) => {
    if (process.env[k] !== undefined && String(process.env[k]).trim() !== '') {
      result[k] = String(process.env[k]);
    }
  });

  // Minimal diagnostics without secrets
  console.log('[SYNC] Local env summary:');
  console.log(`  IMAGEKIT_URL_ENDPOINT set: ${!!result.IMAGEKIT_URL_ENDPOINT}`);
  console.log(`  IMAGEKIT_PUBLIC_KEY set: ${!!result.IMAGEKIT_PUBLIC_KEY}`);
  console.log(`  IMAGEKIT_PRIVATE_KEY set: ${!!result.IMAGEKIT_PRIVATE_KEY}`);
  console.log(`  EMAIL_HOST set: ${!!result.EMAIL_HOST}`);
  console.log(`  EMAIL_USER set: ${!!result.EMAIL_USER}`);
  console.log(`  EMAIL_FROM set: ${!!result.EMAIL_FROM}`);

  return result;
}

/**
 * Fetch current env vars configured on the Render service.
 */
async function fetchCurrentServiceEnv() {
  const resp = await axios.get(RENDER_ENV_API_URL, {
    headers: { Authorization: `Bearer ${RENDER_API_KEY}` }
  });
  // Some fields may come with extra metadata; normalize to { key, value }
  const list = Array.isArray(resp.data) ? resp.data : resp.data.envVars || [];
  return list.map((item) => ({ key: item.key, value: item.value }));
}

/**
 * Merge existing env vars with local ones.
 * - Updates values for keys provided locally
 * - Adds missing keys from local
 * - Preserves other existing keys
 */
function mergeEnvVars(existingList, localMap) {
  const merged = {};
  existingList.forEach(({ key, value }) => {
    merged[key] = value;
  });
  Object.entries(localMap).forEach(([k, v]) => {
    merged[k] = v; // override/add
  });
  return Object.entries(merged).map(([key, value]) => ({ key, value }));
}

/**
 * Update env vars on Render service.
 * Try common payload shapes for compatibility across API versions.
 */
async function updateServiceEnvVars(envVarsList) {
  try {
    // Attempt with array body first
    await axios.put(RENDER_ENV_API_URL, envVarsList, {
      headers: {
        Authorization: `Bearer ${RENDER_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('[SYNC] Service env vars updated (array payload).');
  } catch (err) {
    const status = err.response?.status;
    const data = err.response?.data;
    console.warn('[SYNC] Array payload failed, retrying with { envVars: [...] } format', status || '', data || '');
    // Retry with wrapped payload
    await axios.put(
      RENDER_ENV_API_URL,
      { envVars: envVarsList },
      {
        headers: {
          Authorization: `Bearer ${RENDER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('[SYNC] Service env vars updated (wrapped payload).');
  }
}

// Deploy to Render using API
async function deployToRender() {
  console.log('Starting deployment to Render...');
  
  try {
    // Trigger a new deployment on Render
    const response = await axios.post(
      RENDER_DEPLOY_API_URL,
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

async function main() {
  try {
    console.log('--- STEP 1: Sync env vars to Render service ---');
    const localEnv = readLocalEnvForRender();
    const current = await fetchCurrentServiceEnv();
    const merged = mergeEnvVars(current, localEnv);
    await updateServiceEnvVars(merged);

    console.log('--- STEP 2: Trigger deployment to apply env changes ---');
    await deployToRender();
  } catch (e) {
    console.error('Fatal error during Render sync/deploy:', e.response?.data || e.message);
    process.exit(1);
  }
}

// Run
main();
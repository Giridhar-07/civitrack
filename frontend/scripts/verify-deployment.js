// Deployment verification script
// Run with: node scripts/verify-deployment.js

const https = require('https');
const http = require('http');

// Configuration
const config = {
  vercelBackend: 'https://backend-tau-inky-24.vercel.app/api/health',
  netlifyFrontend: process.env.NETLIFY_URL || 'https://civitrack.netlify.app',
  netlifyApiProxy: process.env.NETLIFY_URL ? `${process.env.NETLIFY_URL}/api/health` : 'https://civitrack.netlify.app/api/health',
  localApiProxy: 'http://localhost:3000/api/health',
  timeout: 10000 // 10 seconds
};

// Helper function to make HTTP requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    console.log(`Testing connection to: ${url}`);
    
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { timeout: config.timeout }, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          data: data
        });
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Request to ${url} timed out after ${config.timeout}ms`));
    });
  });
}

// Run tests
async function runTests() {
  console.log('=== CiviTrack Deployment Verification ===');
  console.log('Testing connectivity to backend and frontend...');
  console.log('');
  
  try {
    // Test Vercel backend
    console.log('1. Testing Vercel backend API:');
    const backendResult = await makeRequest(config.vercelBackend);
    console.log(`   Status: ${backendResult.status}`);
    console.log(`   Response: ${backendResult.data}`);
    console.log('');
    
    // Test Netlify frontend
    console.log('2. Testing Netlify frontend:');
    try {
      const frontendResult = await makeRequest(config.netlifyFrontend);
      console.log(`   Status: ${frontendResult.status}`);
      console.log(`   Content-Type: ${frontendResult.headers['content-type']}`);
      console.log('');
    } catch (frontendError) {
      console.error(`   Error: ${frontendError.message}`);
      console.log('   Note: The Netlify frontend may not be deployed yet');
      console.log('');
    }
    
    // Test Netlify API proxy
    console.log('3. Testing Netlify API proxy:');
    try {
      const proxyResult = await makeRequest(config.netlifyApiProxy);
      console.log(`   Status: ${proxyResult.status}`);
      console.log(`   Response: ${proxyResult.data}`);
      console.log('');
    } catch (proxyError) {
      console.error(`   Error: ${proxyError.message}`);
      console.log('   Note: The API proxy may not be accessible until deployed to Netlify');
      console.log('');
    }
    
    // Test local API proxy
    console.log('4. Testing local API proxy:');
    try {
      const localProxyResult = await makeRequest(config.localApiProxy);
      console.log(`   Status: ${localProxyResult.status}`);
      console.log(`   Response: ${localProxyResult.data}`);
      console.log('');
    } catch (localProxyError) {
      console.error(`   Error: ${localProxyError.message}`);
      console.log('   Note: The local API proxy may not be running');
      console.log('');
    }
    
    console.log('=== Verification Complete ===');
  } catch (error) {
    console.error('Error during verification:', error.message);
  }
}

// Run the tests
runTests();
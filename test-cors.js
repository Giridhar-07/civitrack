// Test CORS configuration and API connectivity
const axios = require('axios');

// Configuration
const FRONTEND_URL = 'https://civitrack-dev.netlify.app';

// Try multiple possible backend URLs
const BACKEND_URLS = [
  'https://civitrack.onrender.com/api',  // Confirmed working URL
  'https://civitrack.onrender.com',      // Base URL
];

const API_ENDPOINTS = [
  '/health',
  '/',
  '/api/health'
];

async function testCorsConfiguration() {
  console.log('Testing CORS configuration and API connectivity...');
  console.log(`Frontend URL: ${FRONTEND_URL}`);
  
  // Track if any endpoint was successful
  let anySuccess = false;
  
  // Test each backend URL
  for (const baseUrl of BACKEND_URLS) {
    console.log(`\n\n======= Testing Backend URL: ${baseUrl} =======`);
    
    // Test each endpoint for this backend URL
    for (const endpoint of API_ENDPOINTS) {
      // Skip redundant combinations (e.g., /api/health on a URL that already ends with /api)
      if (baseUrl.endsWith('/api') && endpoint.startsWith('/api')) {
        continue;
      }
      
      const url = `${baseUrl}${endpoint}`;
      console.log(`\nTesting endpoint: ${url}`);
      
      try {
        const response = await axios.get(url, {
          headers: {
            'Origin': FRONTEND_URL,
            'Content-Type': 'application/json'
          },
          timeout: 10000 // 10 second timeout
        });
        
        anySuccess = true;
        console.log('✅ SUCCESS - Response status:', response.status);
        console.log('CORS headers:');
        console.log('  Access-Control-Allow-Origin:', response.headers['access-control-allow-origin'] || 'Not present');
        console.log('  Access-Control-Allow-Methods:', response.headers['access-control-allow-methods'] || 'Not present');
        console.log('  Access-Control-Allow-Headers:', response.headers['access-control-allow-headers'] || 'Not present');
        console.log('Response data:', JSON.stringify(response.data, null, 2));
        
        // Check if CORS is properly configured
        if (response.headers['access-control-allow-origin']) {
          const allowedOrigin = response.headers['access-control-allow-origin'];
          if (allowedOrigin === '*' || allowedOrigin === FRONTEND_URL) {
            console.log('✅ CORS is properly configured for this endpoint');
          } else {
            console.log(`⚠️ CORS is configured but may not allow the frontend origin: ${FRONTEND_URL}`);
          }
        } else {
          console.log('❌ CORS headers are not present in the response');
        }
        
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code outside of 2xx range
          console.log(`❌ ERROR ${error.response.status} - ${error.response.statusText}`);
          
          // Check if CORS headers are present even in error responses
          if (error.response.headers['access-control-allow-origin']) {
            console.log('CORS headers (in error response):');
            console.log('  Access-Control-Allow-Origin:', error.response.headers['access-control-allow-origin']);
            console.log('  Access-Control-Allow-Methods:', error.response.headers['access-control-allow-methods'] || 'Not present');
            console.log('  Access-Control-Allow-Headers:', error.response.headers['access-control-allow-headers'] || 'Not present');
            console.log('Response data:', JSON.stringify(error.response.data, null, 2));
          } else {
            console.log('❌ No CORS headers in error response');
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.log('❌ ERROR: No response received - endpoint may not exist or service is down');
        } else {
          // Something happened in setting up the request
          console.log('❌ ERROR:', error.message);
        }
      }
    }
  }
  
  // Print summary at the end
  console.log('\n\n======= TEST SUMMARY =======');
  if (anySuccess) {
    console.log('✅ Successfully connected to at least one backend endpoint!');
    console.log('Check the logs above for details on which URLs and endpoints worked.');
  } else {
    console.log('❌ Failed to connect to any backend endpoint.');
    console.log('Possible issues:');
    console.log('1. The backend service may be down or not deployed');
    console.log('2. The backend URL might be incorrect');
    console.log('3. CORS might not be properly configured');
    console.log('4. Network connectivity issues');
    console.log('\nPlease check the Render dashboard to verify the service status.');
  }
}

// Run the test
testCorsConfiguration();
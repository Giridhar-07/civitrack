// Test script to verify API connectivity

async function testApiConnection() {
  const apiUrl = process.env.REACT_APP_API_URL || 'https://civitrack.onrender.com/api';
  
  console.log('Testing API connection to:', apiUrl);
  
  // Try multiple endpoints with different approaches
  const endpoints = [
    { url: `${apiUrl}/health`, method: 'GET', name: 'Health endpoint' },
    { url: `${apiUrl}/`, method: 'GET', name: 'API root' },
    { url: `${apiUrl.replace('/api', '')}/api/health`, method: 'GET', name: 'Alternative health path' },
    { url: `${apiUrl}/status`, method: 'GET', name: 'Status endpoint' },
    { url: `${apiUrl}/status-requests`, method: 'GET', name: 'Status requests endpoint' }
  ];
  
  let overallSuccess = false;
  const results = [];
  
  // Try each endpoint
  for (const endpoint of endpoints) {
    try {
      console.log(`Testing ${endpoint.name} at: ${endpoint.url}`);
      
      const response = await fetch(endpoint.url, {
        method: endpoint.method,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        },
        cache: 'no-store',
        mode: 'cors',
        credentials: 'include',
        signal: AbortSignal.timeout(8000) // 8 second timeout
      });
      
      let responseData = null;
      try {
        responseData = await response.json();
      } catch (e) {
        // JSON parsing may fail if response is not JSON
        responseData = { text: await response.text() };
      }
      
      const result = {
        endpoint: endpoint.name,
        url: endpoint.url,
        status: response.status,
        ok: response.ok,
        data: responseData
      };
      
      results.push(result);
      console.log(`${endpoint.name} test result:`, result);
      
      if (response.ok) {
        console.log(`✅ ${endpoint.name} is accessible`);
        overallSuccess = true;
      } else {
        console.warn(`❌ ${endpoint.name} returned non-200 status:`, response.status);
      }
    } catch (error) {
      console.error(`❌ Error testing ${endpoint.name}:`, error);
      results.push({
        endpoint: endpoint.name,
        url: endpoint.url,
        error: error.message
      });
    }
  }
  
  // If all API endpoints fail, try a direct domain ping
  if (!overallSuccess) {
    try {
      const domainUrl = apiUrl.split('/api')[0];
      console.log(`Trying direct domain ping at: ${domainUrl}`);
      
      const response = await fetch(domainUrl, {
        method: 'GET',
        mode: 'no-cors', // Use no-cors as a last resort
        cache: 'no-store',
        signal: AbortSignal.timeout(5000)
      });
      
      console.log(`Domain ping completed with status: ${response.type}`);
      results.push({
        endpoint: 'Domain ping',
        url: domainUrl,
        status: 'unknown (no-cors)',
        ok: true
      });
      
      overallSuccess = true;
    } catch (error) {
      console.error('Domain ping failed:', error);
      results.push({
        endpoint: 'Domain ping',
        url: apiUrl.split('/api')[0],
        error: error.message
      });
    }
  }
  
  console.log('API connection test summary:', {
    overallSuccess,
    results
  });
  
  return overallSuccess;
}

// Export for use in other files
export default testApiConnection;

// Auto-run in development
if (process.env.NODE_ENV === 'development') {
  testApiConnection().then(success => {
    console.log('API connection test completed. Success:', success);
  });
}
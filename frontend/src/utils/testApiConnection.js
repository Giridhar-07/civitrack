// Test script to verify API connectivity

async function testApiConnection() {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://backend-tau-inky-24.vercel.app/api';
  
  console.log('Testing API connection to:', apiUrl);
  
  try {
    // Test basic connectivity
    const response = await fetch(`${apiUrl}/health`);
    const data = await response.json();
    
    console.log('API connection test result:', {
      status: response.status,
      ok: response.ok,
      data
    });
    
    // Test status request endpoint
    try {
      const statusResponse = await fetch(`${apiUrl}/status-requests`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      
      console.log('Status request endpoint test:', {
        status: statusResponse.status,
        ok: statusResponse.ok
      });
      
      if (statusResponse.ok) {
        console.log('Status request endpoint is accessible');
      } else {
        console.warn('Status request endpoint returned non-200 status:', statusResponse.status);
      }
    } catch (statusError) {
      console.error('Error testing status request endpoint:', statusError);
    }
    
    return response.ok;
  } catch (error) {
    console.error('API connection test failed:', error);
    return false;
  }
}

// Export for use in other files
export default testApiConnection;

// Auto-run in development
if (process.env.NODE_ENV === 'development') {
  testApiConnection().then(success => {
    console.log('API connection test completed. Success:', success);
  });
}
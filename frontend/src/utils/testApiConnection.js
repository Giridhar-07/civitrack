/**
 * Utility to test API connectivity and find the best working API endpoint
 * This helps the application automatically find working API endpoints
 * and improves reliability when deployed to different environments
 */

const testApiConnection = async () => {
  console.log('Testing API connection...');
  
  // Check if we have a previously successful API URL stored
  const lastSuccessfulUrl = localStorage.getItem('lastSuccessfulApiUrl');
  
  // List of possible API URLs to try
  const possibleApiUrls = [
    // Try the last successful URL first if available
    lastSuccessfulUrl,
    // Then try the environment variable
    process.env.REACT_APP_API_URL,
    // Then try the common deployment URLs
    'https://civitrack.onrender.com/api',
    'https://backend-tau-inky-24.vercel.app/api',
    // Fallback to localhost for development
    'http://localhost:5000/api'
  ].filter(Boolean); // Remove any undefined/null entries
  
  // Endpoints to test on each possible API URL
  const endpoints = [
    '/health',
    '/'
  ];
  
  // Try each API URL with the test endpoints
  for (const baseUrl of possibleApiUrls) {
    console.log(`Testing API URL: ${baseUrl}`);
    
    for (const endpoint of endpoints) {
      try {
        // Create an AbortController to handle timeouts
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 second timeout
        
        const url = `${baseUrl}${endpoint}`;
        console.log(`Testing endpoint: ${url}`);
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal
        });
        
        // Clear the timeout
        clearTimeout(timeoutId);
        
        // Check if the response is OK
        if (response.ok) {
          try {
            // Try to parse the response as JSON
            const data = await response.json();
            console.log(`API connection successful to ${url}`, data);
            
            // Store the successful URL for future use
            localStorage.setItem('lastSuccessfulApiUrl', baseUrl);
            
            return {
              success: true,
              url: baseUrl,
              endpoint,
              data
            };
          } catch (jsonError) {
            // If JSON parsing fails, the response might not be JSON
            console.log(`Response from ${url} is not valid JSON:`, jsonError);
          }
        } else {
          console.log(`API connection failed to ${url} with status: ${response.status}`);
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log(`Request to ${baseUrl}${endpoint} timed out after 12 seconds`);
        } else {
          console.log(`Error connecting to ${baseUrl}${endpoint}:`, error);
        }
      }
    }
  }
  
  // If all API endpoints fail, try a direct domain ping as a last resort
  console.log('All API endpoints failed, trying direct domain ping...');
  
  const domains = [
    'civitrack.onrender.com',
    'backend-tau-inky-24.vercel.app'
  ];
  
  for (const domain of domains) {
    try {
      // Create an AbortController for the domain ping
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
      
      const response = await fetch(`https://${domain}`, {
        method: 'GET',
        signal: controller.signal
      });
      
      // Clear the timeout
      clearTimeout(timeoutId);
      
      console.log(`Domain ping to ${domain} returned status: ${response.status}`);
      
      // Even if the response is not OK, if we got a response, the domain is reachable
      return {
        success: false,
        domainReachable: true,
        domain
      };
    } catch (error) {
      console.log(`Domain ping to ${domain} failed:`, error);
    }
  }
  
  // If we're in development, set up a retry and periodic testing
  if (process.env.NODE_ENV === 'development') {
    console.log('In development environment, will retry connection test in 5 seconds...');
    
    // Retry once after 5 seconds
    setTimeout(() => {
      console.log('Retrying API connection test...');
      testApiConnection().then(result => {
        console.log('Retry result:', result);
      });
    }, 5000);
    
    // Set up periodic testing every 5 minutes
    setInterval(() => {
      console.log('Running periodic API connection test...');
      testApiConnection().then(result => {
        console.log('Periodic test result:', result);
      });
    }, 5 * 60 * 1000); // 5 minutes
  }
  
  return {
    success: false,
    message: 'All API connection attempts failed'
  };
};

export default testApiConnection;
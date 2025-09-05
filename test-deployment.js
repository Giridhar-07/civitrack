// Deployment verification test script
const { execSync } = require('child_process');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Configuration
const FRONTEND_URL = 'https://civitrack-dev.netlify.app';
const BACKEND_URL = 'https://civitrack-backend.onrender.com/api';

// Test functions
async function testFrontendDeployment() {
  console.log('\n=== Testing Frontend Deployment ===');
  try {
    console.log(`Checking frontend at ${FRONTEND_URL}...`);
    const response = await axios.get(FRONTEND_URL);
    console.log(`✅ Frontend is accessible (Status: ${response.status})`);
    return true;
  } catch (error) {
    console.error(`❌ Frontend test failed: ${error.message}`);
    return false;
  }
}

async function testBackendDeployment() {
  console.log('\n=== Testing Backend Deployment ===');
  try {
    console.log(`Checking backend health at ${BACKEND_URL}/health...`);
    const response = await axios.get(`${BACKEND_URL}/health`);
    console.log(`✅ Backend is accessible (Status: ${response.status})`);
    console.log(`Backend response: ${JSON.stringify(response.data)}`);
    return true;
  } catch (error) {
    console.error(`❌ Backend test failed: ${error.message}`);
    return false;
  }
}

async function testAPIIntegration() {
  console.log('\n=== Testing API Integration ===');
  try {
    console.log(`Testing API integration at ${BACKEND_URL}/issues...`);
    const response = await axios.get(`${BACKEND_URL}/issues`, {
      params: { limit: 1 }
    });
    console.log(`✅ API integration successful (Status: ${response.status})`);
    console.log(`Retrieved ${response.data.length || 0} issues`);
    return true;
  } catch (error) {
    console.error(`❌ API integration test failed: ${error.message}`);
    return false;
  }
}

async function testThemeImplementation() {
  console.log('\n=== Testing Theme Implementation ===');
  console.log('Theme implementation requires manual verification:');
  console.log('1. Visit the frontend URL and check both light and dark themes');
  console.log('2. Verify that UI elements render correctly in both themes');
  console.log('3. Check that theme preference is saved between sessions');
  console.log('✅ Manual verification required');
  return true;
}

// Run all tests
async function runAllTests() {
  console.log('Starting deployment verification tests...');
  
  const frontendResult = await testFrontendDeployment();
  const backendResult = await testBackendDeployment();
  const apiResult = await testAPIIntegration();
  const themeResult = await testThemeImplementation();
  
  console.log('\n=== Test Summary ===');
  console.log(`Frontend Deployment: ${frontendResult ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Backend Deployment: ${backendResult ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`API Integration: ${apiResult ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Theme Implementation: ${themeResult ? '✅ MANUAL CHECK' : '❌ FAIL'}`);
  
  const allPassed = frontendResult && backendResult && apiResult && themeResult;
  console.log(`\nOverall Result: ${allPassed ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
  
  return allPassed;
}

// Run the tests
runAllTests().then(result => {
  if (!result) {
    console.log('Please fix the failing tests before proceeding with deployment.');
    process.exit(1);
  }
  console.log('Deployment verification completed successfully!');
});
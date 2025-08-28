/**
 * CiviTrack Fix Verification Script
 * 
 * This script provides functions to test the fixes implemented for various issues.
 * Run these tests in the browser console to verify fixes are working properly.
 */

import api from '../services/api';
import socketService from '../services/socketService';
import { getAllIssues, getIssuesWithMeta } from '../services/issueService';
import loggingService from '../services/loggingService';

/**
 * Test API endpoint validation
 */
export const testApiEndpointValidation = async () => {
  console.log('Testing API endpoint validation...');
  
  try {
    // This should fail with a validation error
    await api.get('/invalid/endpoint');
    console.error('❌ API validation failed - invalid endpoint was accepted');
  } catch (error) {
    console.log('✅ API correctly rejected invalid endpoint:', error.message);
  }
  
  try {
    // This should succeed
    const response = await api.get('/auth/me');
    console.log('✅ Valid API endpoint works correctly');
    return response;
  } catch (error) {
    console.error('❌ Valid API endpoint failed:', error.message);
    return null;
  }
};

/**
 * Test socket connection resilience
 */
export const testSocketReconnection = () => {
  console.log('Testing socket reconnection...');
  
  // Force disconnect to test reconnection
  socketService.disconnect();
  
  // Log reconnection events
  socketService.socket.on('reconnect_attempt', (attempt) => {
    console.log(`Socket reconnect attempt ${attempt}`);
  });
  
  socketService.socket.on('reconnect', () => {
    console.log('✅ Socket successfully reconnected');
  });
  
  // Reconnect after 2 seconds
  setTimeout(() => {
    socketService.connect();
  }, 2000);
};

/**
 * Test issue service error handling
 */
export const testIssueServiceErrorHandling = async () => {
  console.log('Testing issue service error handling...');
  
  try {
    const issues = await getAllIssues();
    console.log(`✅ getAllIssues returned ${issues.length} issues without errors`);
  } catch (error) {
    console.error('❌ getAllIssues failed:', error.message);
  }
  
  try {
    const result = await getIssuesWithMeta();
    console.log(`✅ getIssuesWithMeta returned ${result.issues.length} issues without errors`);
  } catch (error) {
    console.error('❌ getIssuesWithMeta failed:', error.message);
  }
};

/**
 * Test logging service
 */
export const testLoggingService = () => {
  console.log('Testing logging service...');
  
  loggingService.debug('Test debug message');
  loggingService.info('Test info message');
  loggingService.warn('Test warning message');
  loggingService.error('Test error message', new Error('Test error'));
  
  console.log('✅ Logging service test complete - check console for log messages');
};

/**
 * Run all tests
 */
export const runAllTests = async () => {
  console.log('Running all fix verification tests...');
  
  await testApiEndpointValidation();
  testSocketReconnection();
  await testIssueServiceErrorHandling();
  testLoggingService();
  
  console.log('All tests completed');
};

// Make runAllTests globally accessible for direct execution in non-module contexts
window.runAllTests = runAllTests;

// Export individual tests for selective testing
export default {
  testApiEndpointValidation,
  testSocketReconnection,
  testIssueServiceErrorHandling,
  testLoggingService,
  runAllTests
};
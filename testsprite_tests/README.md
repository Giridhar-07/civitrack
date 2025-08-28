# TestSprite MCP Documentation

## Overview
TestSprite MCP (Master Control Program) is a comprehensive testing framework for the CiviTrack application. It provides structured testing for frontend, backend, integration, and performance aspects of the application.

## Features Tested

### Frontend
- **Authentication**: User registration, login, and session management
- **Issue Reporting**: Creating issues with location data and photo uploads
- **Issue Discovery**: Map-based issue browsing with filtering capabilities
- **User Profile**: Profile management and user settings

### Backend
- **Auth API**: Authentication endpoints and JWT handling
- **Issue API**: CRUD operations for civic issues
- **User API**: User management endpoints
- **Admin API**: Administrative functions

### Integration
- **Redis Integration**: Caching layer with resilience patterns
- **End-to-End Workflows**: Complete user journeys

### Performance
- **Load Testing**: Application behavior under concurrent load
- **API Response Time**: Performance metrics for critical endpoints

## Test Results Summary

| Component | Status | Issues |
|-----------|--------|--------|
| Authentication | ✅ Functional | None |
| Issue Reporting | ✅ Functional | None |
| Issue Discovery | ⚠️ Issues | Map markers not updating correctly after filter change |
| User Profile | ✅ Functional | None |
| Redis Integration | ⚠️ Issues | Connection timeout when Redis is under high load |
| API Performance | ✅ Functional | None |

## Running Tests

```bash
# Run all tests
node testsprite_mcp.js

# Run specific test module
node testsprite_mcp.js --module=frontend

# Run with specific environment
node testsprite_mcp.js --env=staging
```

## Configuration
TestSprite MCP can be configured via the `config.json` file, which includes:
- Environment settings (development, staging, production)
- Test parallelization options
- Reporting preferences
- Browser settings for frontend tests

## Deployment Requirements
Based on test results, the following should be addressed before deployment:
1. Fix map marker updates after filter changes in Issue Discovery
2. Improve Redis connection resilience under high load
3. Ensure all API endpoints have appropriate rate limiting
4. Verify SSL certificate configuration for production
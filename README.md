# CiviTrack - Civic Issue Tracking Platform

CiviTrack is a modern web application designed to help citizens report and track civic issues in their communities. The platform enables users to register, log in, report issues with location data, and monitor the status of reported problems.

## Table of Contents
- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
  - [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
  - [Authentication](#authentication)
  - [Issues](#issues)
  - [Status Requests](#status-requests)
  - [AI Integration](#ai-integration)
- [Frontend Implementation](#frontend-implementation)
  - [Axios Implementation](#axios-implementation)
  - [Key Components](#key-components)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contribution Guidelines](#contribution-guidelines)
- [Known Issues and Troubleshooting](#known-issues-and-troubleshooting)

## Project Overview

CiviTrack is a comprehensive platform that bridges the gap between citizens and local authorities by providing an efficient way to report and track civic issues. The application allows users to:

- Register and authenticate securely
- Report issues with detailed descriptions and location data
- Upload photos of issues
- Track the status of reported issues
- Request status changes for issues
- View nearby issues on an interactive map
- Receive AI-assisted help and information

## Architecture

CiviTrack follows a modern client-server architecture:

- **Frontend**: React application with TypeScript, Material UI components, and responsive design
- **Backend**: Node.js with Express, providing RESTful API services
- **Database**: PostgreSQL with Sequelize ORM for data persistence
- **Authentication**: JWT-based user authentication system
- **Mapping**: Interactive maps for issue visualization using Leaflet
- **AI Integration**: AI-powered assistance using Gemini API
- **Image Storage**: ImageKit integration for efficient image handling

## Features

- **User Authentication**
  - Registration with email verification
  - Secure login with JWT
  - Password reset functionality
  - User profile management

- **Issue Management**
  - Create issues with location data
  - Upload multiple photos
  - Track issue status
  - Filter issues by category, status, and location
  - View issues on interactive maps

- **Status Request System**
  - Request status changes for issues
  - Admin review of status requests
  - Status change history tracking

- **Admin Dashboard**
  - User management
  - Issue moderation
  - Status request processing
  - System statistics

- **AI Assistance**
  - AI-powered chat for help
  - Quick help on specific topics

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database
- ImageKit account (optional, for image storage)
- Google Gemini API key (optional, for AI features)

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file (see Environment Variables section)
# Start development server
npm start
```

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Set up database
npx sequelize-cli db:migrate

# Create .env file (see Environment Variables section)
# Start development server
npm run dev
```

### Environment Variables

#### Frontend (.env)

```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your-imagekit-id
REACT_APP_MAPBOX_TOKEN=your-mapbox-token
```

#### Backend (.env)

```
# Server
PORT=5000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_USER=postgres
DB_PASS=your-password
DB_NAME=civitrack
DB_PORT=5432

# JWT
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=7d

# Email (for verification and password reset)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# ImageKit (optional)
IMAGEKIT_PUBLIC_KEY=your-imagekit-public-key
IMAGEKIT_PRIVATE_KEY=your-imagekit-private-key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your-imagekit-id

# AI (optional)
GEMINI_API_KEY=your-gemini-api-key
```

## API Documentation

The backend provides a RESTful API with the following endpoints:

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|--------------|
| POST | /api/auth/register | Register a new user | No |
| POST | /api/auth/login | Authenticate user | No |
| GET | /api/auth/me | Get current user | Yes |
| PUT | /api/auth/profile | Update user profile | Yes |
| PUT | /api/auth/change-password | Change password | Yes |
| POST | /api/auth/verify-email | Verify email address | No |
| POST | /api/auth/resend-verification | Resend verification email | No |
| POST | /api/auth/request-password-reset | Request password reset | No |
| POST | /api/auth/reset-password | Reset password | No |
| POST | /api/auth/profile/image | Upload profile image | Yes |

#### Admin Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|--------------|
| GET | /api/auth/admin/users | Get all users (paginated) | Yes (Admin) |
| GET | /api/auth/admin/users/:id | Get user by ID | Yes (Admin) |
| PUT | /api/auth/admin/users/:id | Update user | Yes (Admin) |
| DELETE | /api/auth/admin/users/:id | Delete user | Yes (Admin) |

### Issues

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|--------------|
| GET | /api/issues | Get all issues (paginated) | No |
| GET | /api/issues/nearby | Get nearby issues | No |
| GET | /api/issues/:id | Get issue by ID | No |
| POST | /api/issues | Create a new issue | Yes |
| PUT | /api/issues/:id | Update an issue | Yes |
| DELETE | /api/issues/:id | Delete an issue | Yes |
| POST | /api/issues/:id/flag | Flag an issue | Yes |
| GET | /api/issues/user/me | Get current user's issues | Yes |
| GET | /api/issues/saved | Get user's saved issues | Yes |
| GET | /api/issues/admin/statistics | Get issue statistics | Yes (Admin) |

### Status Requests

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|--------------|
| POST | /api/status-requests/issue/:id | Create status request | Yes |
| GET | /api/status-requests/issue/:id | Get issue status requests | No |
| GET | /api/status-requests/user/me | Get user status requests | Yes |
| GET | /api/status-requests | Get all status requests | Yes (Admin) |
| PUT | /api/status-requests/:id/review | Review status request | Yes (Admin) |

### AI Integration

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|--------------|
| GET | /api/ai/health | Check AI service health | No |
| POST | /api/ai/chat | Chat with AI | No |
| GET | /api/ai/quick-help | Get quick help on a topic | No |

## Frontend Implementation

### Axios Implementation

The frontend uses Axios for API communication with several enhanced features:

- **Centralized API Service**: All API calls are managed through a centralized service in `src/services/api.ts`
- **Request/Response Interceptors**: Automatically handles authentication tokens and error processing
- **Retry Mechanism**: Implements automatic retry for failed requests with exponential backoff
- **Error Handling**: Standardized error handling with detailed error messages
- **Mock Service**: Supports mock responses for development and testing
- **Type Safety**: Full TypeScript integration for type-safe API calls

Example usage:

```typescript
import api from '../services/api';
import { User } from '../types';

// Get current user
const getCurrentUser = async (): Promise<User> => {
  try {
    const response = await api.get<User>('/auth/me');
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

### Key Components

- **Authentication**: Login, Register, and Profile components
- **Issue Management**: IssueForm, IssueList, IssueDetail components
- **Maps**: Interactive MapView component using Leaflet
- **Layout**: Responsive layout with AppBar, Drawer, and Footer components
- **UI Components**: Custom Material UI themed components

## Testing

The project includes comprehensive test coverage for critical components:

### Authentication Tests
- **RegisterForm**: Tests for form validation, API responses (400, 409, 422, 429), and network errors
- **LoginForm**: Tests for form validation, authentication flow, and error handling

### Running Tests

```bash
# Run all tests
npm test

# Run tests in CI mode
npm test -- --ci

# Run specific component tests
npm test -- --testPathPattern="(RegisterForm|LoginForm)" --ci

# Generate JSON test report
npm test -- --json --outputFile=test-report.json
```

## Deployment

The project can be deployed using various methods:

### Frontend Deployment

- **Netlify**: Configuration provided in `netlify.toml`
- **Vercel**: Configuration in `vercel.json`
- **GitHub Actions**: Workflow defined in `.github/workflows`

### Backend Deployment

- **Render**: Configuration in `render.yaml`
- **Vercel**: Configuration in `vercel.json`

### Combined Deployment

Use the deployment scripts to deploy both frontend and backend:

```bash
# Deploy everything
node deploy-all.js

# Deploy only frontend
node deploy-frontend.js

# Deploy only backend
node deploy-backend.js
```

## Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add some feature"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request**

### Code Style

- Follow the existing code style
- Use TypeScript for type safety
- Write tests for new features
- Document your code with JSDoc comments

## Known Issues and Troubleshooting

### Common Issues

1. **Connection Issues**
   - Ensure backend server is running
   - Check API URL in frontend .env file
   - Verify database connection settings

2. **Authentication Problems**
   - Clear browser cookies and localStorage
   - Ensure JWT_SECRET is properly set
   - Check token expiration settings

3. **Image Upload Failures**
   - Verify ImageKit configuration
   - Check file size limits
   - Ensure proper MIME types are allowed

4. **Map Display Issues**
   - Confirm Mapbox token is valid
   - Check browser console for errors
   - Ensure location permissions are granted

### Getting Help

If you encounter issues not covered here, please:
1. Check the issue tracker on GitHub
2. Search for similar issues in closed tickets
3. Open a new issue with detailed information about the problem

---

For more information, contact the development team at noreplycivitrack@gmail.com

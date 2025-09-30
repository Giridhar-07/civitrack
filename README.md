# CiviTrack - Civic Issue Tracking Platform

CiviTrack is a modern web application designed to help citizens report and track civic issues in their communities. The platform enables users to register, log in, report issues with location data, and monitor the status of reported problems.

## Project Overview

CiviTrack consists of:
- **Frontend**: React application with Material UI components
- **Backend**: RESTful API service
- **Authentication**: JWT-based user authentication system
- **Mapping**: Interactive maps for issue visualization using Leaflet

## Testing

The project includes comprehensive test coverage for critical components:

### Authentication Tests
- **RegisterForm**: Tests for form validation, API responses (400, 409, 422, 429), and network errors
- **LoginForm**: Tests for form validation, authentication flow, and error handling

### Running Tests

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm test -- --ci`

Runs tests in CI mode without watch mode.

### `npm test -- --testPathPattern="(RegisterForm|LoginForm)" --ci`

Runs specific component tests in CI mode.

### `npm test -- --json --outputFile=test-report.json`

Generates a JSON test report.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

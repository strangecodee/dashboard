// Environment Configuration
// This file handles environment-specific settings

const env = process.env.NODE_ENV || 'development';

export const config = {
  // App Settings
  appName: process.env.REACT_APP_NAME || 'Frest Admin',
  appVersion: process.env.REACT_APP_VERSION || '1.0.0',
  
  // API Configuration
  useMockApi: process.env.REACT_APP_USE_MOCK_API !== 'false', // Default to mock API
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  apiTimeout: 30000, // 30 seconds
  
  // Authentication
  tokenKey: 'frest_auth_token',
  tokenExpiry: 3600000, // 1 hour in milliseconds
  
  // Environment
  isDevelopment: env === 'development',
  isProduction: env === 'production',
  isTest: env === 'test',
  
  // Features
  features: {
    enableAnalytics: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
    enableLogging: env !== 'production',
    enableDebug: env === 'development',
  },
  
  // Pagination
  defaultPageSize: 10,
  pageSizeOptions: [10, 25, 50, 100],
  
  // Date Format
  dateFormat: 'MM/DD/YYYY',
  dateTimeFormat: 'MM/DD/YYYY HH:mm:ss',
  
  // File Upload
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedFileTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
};

export default config;

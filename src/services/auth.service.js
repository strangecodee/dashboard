// Authentication Service
// Using Mock API for frontend-only development
import { mockAuth } from './mockApi';
import { setItem, getItem, removeItem } from '../utils/storage';
import { STORAGE_KEYS } from '../constants';

// Toggle between mock and real API
const USE_MOCK_API = true; // Set to false when backend is ready

/**
 * Login user
 * @param {Object} credentials - User credentials
 * @returns {Promise} Login response
 */
export const login = async (credentials) => {
  try {
    const response = await mockAuth.login(credentials);
    
    if (response.token) {
      setItem(STORAGE_KEYS.TOKEN, response.token);
      setItem(STORAGE_KEYS.USER, response.user);
    }
    
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Register new user
 * @param {Object} userData - User registration data
 * @returns {Promise} Registration response
 */
export const register = async (userData) => {
  try {
    const response = await mockAuth.register(userData);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Logout user
 * @returns {Promise} Logout response
 */
export const logout = async () => {
  try {
    await mockAuth.logout();
  } catch (error) {
    console.error('Logout error:', error);
  } finally {
    // Clear local storage regardless of API response
    removeItem(STORAGE_KEYS.TOKEN);
    removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    removeItem(STORAGE_KEYS.USER);
  }
};

/**
 * Get current user
 * @returns {Object|null} Current user data
 */
export const getCurrentUser = () => {
  return mockAuth.getCurrentUser();
};

/**
 * Check if user is authenticated
 * @returns {boolean} Authentication status
 */
export const isAuthenticated = () => {
  return mockAuth.isAuthenticated();
};

/**
 * Forgot password
 * @param {string} email - User email
 * @returns {Promise} Response
 */
export const forgotPassword = async (email) => {
  try {
    const response = await mockAuth.forgotPassword(email);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Reset password
 * @param {Object} data - Reset password data
 * @returns {Promise} Response
 */
export const resetPassword = async (data) => {
  try {
    const response = await mockAuth.resetPassword(data);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Verify email
 * @param {string} token - Verification token
 * @returns {Promise} Response
 */
export const verifyEmail = async (token) => {
  try {
    const response = await mockAuth.verifyEmail(token);
    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  login,
  register,
  logout,
  getCurrentUser,
  isAuthenticated,
  forgotPassword,
  resetPassword,
  verifyEmail,
};

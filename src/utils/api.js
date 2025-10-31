// API configuration for development and production
export const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  // In production, use the full backend URL
  // In development, use relative path (proxy handles it)
  if (import.meta.env.PROD && API_BASE_URL) {
    return `${API_BASE_URL}${endpoint}`;
  }
  return endpoint;
};

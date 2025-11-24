
// This file handles the connection between your Frontend (React) and Backend (Node.js).

// 1. Detect if the app is running on your computer (localhost)
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// 2. Set the API URL based on the environment
// REPLACE 'https://your-backend-name.onrender.com' with your actual Render URL after you deploy the backend.
export const API_BASE_URL = isLocal
  ? 'http://localhost:3001' 
  : 'https://shaktipath-api.onrender.com'; 

// 3. Common headers for API requests
export const getHeaders = (token?: string) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

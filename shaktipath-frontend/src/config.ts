// This file handles the connection between your Frontend (React) and Backend (Node.js).

// 1. Detect if the app is running on your computer (localhost)
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// 2. Set the API URL based on the environment
// Priority:
// 1. VITE_API_URL from .env (Best for Vercel)
// 2. Localhost if running locally
// 3. Fallback placeholder
// Using (import.meta as any) to avoid TypeScript errors if vite/client types are missing
const rawUrl = (import.meta as any).env?.VITE_API_URL || (isLocal
  ? 'http://localhost:3001' 
  : 'https://shaktipath-api.onrender.com'); // Fallback if no Env Var set

// Safely remove any trailing slash to prevent double-slash errors (e.g. //api)
export const API_BASE_URL = rawUrl.replace(/\/$/, '');
// DEBUG LOG: This will show up in your Chrome Console so you know where it's connecting.
console.log(`🔌 [Config] App Mode: ${isLocal ? 'Local' : 'Production'}`);
console.log(`🔌 [Config] Connecting to Backend at: ${API_BASE_URL}`);

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
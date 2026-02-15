
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log("🚀 Starting ShaktiPath Frontend...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("❌ Fatal Error: Could not find root element");
  throw new Error("Could not find root element to mount to");
}

console.log("✅ Root element found, mounting React...");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

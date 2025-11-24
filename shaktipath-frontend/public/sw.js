const CACHE_NAME = 'shaktipath-v1';

// Install Event: Skip waiting to activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate Event: Claim clients immediately and clear old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network Only (No Caching for Dev)
// This is the critical fix for "Response body already used"
self.addEventListener('fetch', (event) => {
  // Ignore API calls and chrome extensions
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/api') || url.protocol.startsWith('chrome-extension')) {
    return;
  }

  // Pass directly to network without caching logic
  event.respondWith(fetch(event.request));
});
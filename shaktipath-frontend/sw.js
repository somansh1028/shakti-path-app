
const CACHE_NAME = 'shaktipath-v1';
const DYNAMIC_CACHE = 'shaktipath-dynamic-v1';

// Files to precache
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_URLS).catch(err => {
            console.warn('Precache failed for some files:', err);
        });
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((key) => {
        if (key !== CACHE_NAME && key !== DYNAMIC_CACHE) {
          return caches.delete(key);
        }
      })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip API requests, non-GET requests, and chrome-extension schemes
  // This prevents the "Uncaught (in promise) TypeError: Failed to fetch" for API calls when offline
  if (url.pathname.startsWith('/api') || event.request.method !== 'GET' || url.protocol === 'chrome-extension:') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if found
      if (cachedResponse) {
        return cachedResponse;
      }

      // Otherwise fetch from network
      return fetch(event.request)
        .then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Cache valid responses
          const responseToCache = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch((err) => {
          console.log('Fetch failed:', err);
          // Return offline fallback if navigating
          if (event.request.mode === 'navigate') {
             return new Response('<h1>Offline</h1><p>Please check your internet connection.</p>', {
                headers: { 'Content-Type': 'text/html' }
             });
          }
        });
    })
  );
});

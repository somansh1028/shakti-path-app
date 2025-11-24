const CACHE_NAME = 'shaktipath-v1';
const DYNAMIC_CACHE = 'shaktipath-dynamic-v1';

// Files to precache
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install Event: Cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up old caches
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

// Fetch Event: Network First strategy for most content to ensure freshness during dev,
// but Stale-While-Revalidate for CDNs (libraries).
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1. API Calls: Network Only (never cache API calls in SW)
  if (url.pathname.startsWith('/api')) {
    return;
  }

  // 2. External Assets (CDNs like React, Tailwind, Fonts): Stale-While-Revalidate
  // This makes the app load fast by using cache, but updates in background.
  if (url.hostname !== self.location.hostname) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
          return networkResponse;
        });
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // 3. Internal App Assets: Network First, falling back to cache
  // This ensures you see your code changes immediately during development.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        return caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
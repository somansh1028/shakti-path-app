
const CACHE_NAME = 'shaktipath-v3'; // Bumped version to force update
const DYNAMIC_CACHE = 'shaktipath-dynamic-v3';

// Files to precache
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force new SW to take over immediately
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_URLS).catch(err => {
            console.warn('Precache failed for some files:', err);
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((key) => {
        if (key !== CACHE_NAME && key !== DYNAMIC_CACHE) {
          return caches.delete(key); // Delete old cache
        }
      })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip API requests, non-GET requests, and chrome-extension schemes
  if (url.pathname.startsWith('/api') || event.request.method !== 'GET' || url.protocol === 'chrome-extension:') {
    return;
  }

  // Network First, Fallback to Cache strategy for HTML/JS/CSS during dev
  // This ensures you see updates immediately
  if (url.origin === self.location.origin) {
      event.respondWith(
        fetch(event.request)
          .then((networkResponse) => {
            const responseToCache = networkResponse.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(event.request, responseToCache);
            });
            return networkResponse;
          })
          .catch(() => {
            return caches.match(event.request);
          })
      );
      return;
  }

  // Stale-while-revalidate for others
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
});

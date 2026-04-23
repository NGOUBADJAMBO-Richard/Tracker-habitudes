const CACHE_NAME = "mgn-tackers-v2";
const CORE_ASSETS = [
  "./",
  "index.html",
  "css/styles.css",
  "config/app.js",
  "js/app.js",
  "assets/site.webmanifest",
  "assets/favicons/favicon.svg",
  "assets/favicons/mask-icon.svg",
  "assets/favicons/favicon.png",
  "assets/favicons/apple-touch-icon.png",
  "assets/favicons/icon-192.png",
  "assets/favicons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName)),
        ),
      ),
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return networkResponse;
        })
        .catch(() => caches.match("index.html"));
    }),
  );
});

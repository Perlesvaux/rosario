const CACHE = "v1.11";

const SHOULD_CACHE = ({ request, url }) => {
  if (request.method !== "GET") return false;

  if (url.origin !== self.location.origin) return false;

  // Never cache Next.js development stuff
  if (url.pathname.startsWith("/_next/webpack")) return false;
  if (url.pathname.startsWith("/_next/static/chunks/pages")) return false;
  if (url.pathname.includes("hot-update")) return false;
  if (url.pathname.includes("__next")) return false;

  // Don't cache API routes
  if (url.pathname.startsWith("/api")) return false;

  // Ignore browser extensions
  if (
    url.protocol === "chrome-extension:" ||
    url.protocol === "moz-extension:"
  )
    return false;

  return true;
};

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();

      await Promise.all(
        names.map((name) => {
          if (name !== CACHE) {
            return caches.delete(name);
          }
        })
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (!SHOULD_CACHE({ request, url })) {
    return;
  }

  event.respondWith(
    (async () => {
      try {
        const response = await fetch(request);

        if (response.ok) {
          const cache = await caches.open(CACHE);
          cache.put(request, response.clone());
        }

        return response;
      } catch {
        const cached = await caches.match(request);

        if (cached) {
          return cached;
        }

        throw new Error("Network unavailable");
      }
    })()
  );
});


//const cacheName = "v1.10";
//
//self.addEventListener("install", e => {
//  self.skipWaiting();
//});
//
//self.addEventListener("activate", e => {
//  e.waitUntil(
//    caches.keys().then(keys =>
//      Promise.all(keys.filter(k => k !== cacheName).map(k => caches.delete(k)))
//    )
//  );
//  self.clients.claim();
//});
//
//self.addEventListener("fetch", e => {
//  const url = new URL(e.request.url);
//
//  // Never cache Next.js internals — chunks, HMR, RSC payloads, etc.
//  if (url.pathname.startsWith("/_next/")) return;
//
//  e.respondWith(
//    fetch(e.request)
//      .then(res => {
//        if (res && res.ok) {
//          const clone = res.clone();
//          caches.open(cacheName).then(cache => cache.put(e.request, clone));
//        }
//        return res;
//      })
//      .catch(() => caches.match(e.request))
//  );
//});

//const cacheName = "v1.9";
//
//self.addEventListener("install", e => {
//  self.skipWaiting();
//});
//
//self.addEventListener("activate", e => {
//  e.waitUntil(
//    caches.keys().then(keys =>
//      Promise.all(keys.filter(k => k !== cacheName).map(k => caches.delete(k)))
//    )
//  );
//
//  self.clients.claim();
//});
//
//self.addEventListener("fetch", e => {
//  e.respondWith(
//    fetch(e.request)
//      .then(res => {
//        if (res && res.ok) {
//          const clone = res.clone();
//          caches.open(cacheName).then(cache => cache.put(e.request, clone));
//        }
//        return res;
//      })
//      .catch(() => caches.match(e.request))
//  );
//});

//const cacheName = 'v1.8';
//
//self.addEventListener('fetch', (e) => {
//  e.respondWith(
//    fetch(e.request)
//      .then(res => {
//        const clone = res.clone();
//        caches.open(cacheName).then(cache => cache.put(e.request, clone));
//        return res;
//      })
//      .catch(() => caches.match(e.request))
//  );
//});
//
//self.addEventListener('activate', (e) => {
//  e.waitUntil(
//    caches.keys().then(keys => 
//      Promise.all(keys.filter(key => key !== cacheName).map(caches.delete))
//    )
//  );
//});



//const cacheName = 'v1.6'  // Just increment the version number
//
//const cacheClone = async (e) => {
//  const res = await fetch(e.request);
//  const resClone = res.clone();
//
//  const cache = await caches.open(cacheName);
//  await cache.put(e.request, resClone);
//  return res;
//};
//
//const fetchEvent = () => {
//  self.addEventListener('fetch', (e) => {
//    e.respondWith(
//      cacheClone(e)
//        .catch(() => caches.match(e.request))
//        .then((res) => res)
//    );
//  });
//};
//
//fetchEvent();
//
//// Optional: Clean up old caches (add this)
//self.addEventListener('activate', (e) => {
//  e.waitUntil(
//    caches.keys().then((keys) => {
//      return Promise.all(
//        keys.map((key) => {
//          if (key !== cacheName) {
//            return caches.delete(key);
//          }
//        })
//      );
//    })
//  );
//});



//const cacheName = 'v1.6'
//
//const cacheClone = async (e) => {
//  const res = await fetch(e.request);
//  const resClone = res.clone();
//
//  const cache = await caches.open(cacheName);
//  await cache.put(e.request, resClone);
//  return res;
//};
//
//
//// Delete old caches on activation
//const activateEvent = () => {
//  self.addEventListener('activate', (e) => {
//    e.waitUntil(
//      caches.keys().then(keys => {
//        return Promise.all(
//          keys.filter(key => key !== cacheName)
//              .map(key => caches.delete(key))
//        );
//      })
//    );
//  });
//};
//
//
//const fetchEvent = () => {
//  self.addEventListener('fetch', (e) => {
//    e.respondWith(
//      cacheClone(e)
//        .catch(() => caches.match(e.request))
//        .then((res) => res)
//    );
//  });
//};
//
//
//activateEvent();
//fetchEvent();

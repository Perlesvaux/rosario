const cacheName = 'v1.7';

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(cacheName).then(cache => cache.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(key => key !== cacheName).map(caches.delete))
    )
  );
});



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

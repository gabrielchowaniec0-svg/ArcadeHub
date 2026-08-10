self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // Basic pass-through fetch for PWA requirement
    e.respondWith(fetch(e.request));
});

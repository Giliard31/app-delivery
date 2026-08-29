self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    return self.clients.claim();
});

self.fetch('fetch', (event) => {
    // Apenas para manter o service worker ativo
});

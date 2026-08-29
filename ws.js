self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
  // Necessário para atender aos critérios de PWA do navegador
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

self.addEventListener('push', function(event) {
    const dados = event.data ? event.data.json() : { title: 'Meu Delivery', body: 'Novo pedido ou atualização!' };
    const options = {
        body: dados.body,
        icon: 'https://raw.githubusercontent.com/Giliard31/app-delivery/refs/heads/main/img/%C3%ADcone-192.png',
        badge: 'https://raw.githubusercontent.com/Giliard31/app-delivery/refs/heads/main/img/%C3%ADcone-192.png',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(
        self.registration.showNotification(dados.title, options)
    );
});

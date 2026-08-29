self.addEventListener('push', function(event) {
    const dados = event.data ? event.data.json() : { title: 'Meu Delivery', body: 'Novo pedido ou atualização!' };
    const options = {
        body: dados.body,
        icon: 'img/icone-192.png',
        badge: 'img/icone-192.png',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(
        self.registration.showNotification(dados.title, options)
    );
});

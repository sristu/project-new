// Compose WhatsApp order message and open chat
function sendWhatsAppOrder(user, products) {
  const cart = JSON.parse(localStorage.getItem('reddys_cart') || '[]');
  if (!cart.length) {
    alert('Your cart is empty.');
    return;
  }
  const lines = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return `${product?.name || item.id} × ${item.qty}`;
  });
  const nameLine = user?.name ? `\n\nCustomer Name: ${user.name}` : '';
  const message = `Hello, I want to order these items from Reddy's Aquarium & Pet Shop:\n\n${lines.join('\n')}${nameLine}`;
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/918374293417?text=${encoded}`;
  window.open(url, '_blank');
}

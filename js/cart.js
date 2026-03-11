// LocalStorage based cart utilities
const CART_KEY = 'reddys_cart';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(id) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart(cart);
}

function changeQuantity(id, delta) {
  let cart = getCart();
  cart = cart.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item);
  saveCart(cart);
}

function removeFromCart(id) {
  let cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

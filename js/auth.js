// Basic profile capture using LocalStorage
const USER_KEY = 'reddys_user';

function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function getUser() {
  return JSON.parse(localStorage.getItem(USER_KEY) || '{}');
}

// Attach submit handler if on login page
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(loginForm).entries());
    saveUser(data);
    // After login go to shop
    window.location.href = 'shop.html';
  });
}

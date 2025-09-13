// ...existing code...

// Get elements
const profileBtn = document.getElementById('profileBtn');
const profileMenu = document.getElementById('profileMenu');
const loginMenuItem = document.getElementById('login');
const registerMenuItem = document.getElementById('Register');
const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

// Show/hide profile dropdown
profileBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  profileMenu.classList.toggle('hidden');
});

// Show login form in modal
loginMenuItem.addEventListener('click', (e) => {
  e.stopPropagation();
  profileMenu.classList.add('hidden');
  authModal.classList.remove('hidden');
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
});

// Show register form in modal
registerMenuItem.addEventListener('click', (e) => {
  e.stopPropagation();
  profileMenu.classList.add('hidden');
  authModal.classList.remove('hidden');
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
});

// Switch to register form from login form
showRegister.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
});

// Switch to login form from register form
showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// Close modal
closeModal.addEventListener('click', () => {
  authModal.classList.add('hidden');
});

// Hide dropdown/modal when clicking outside
window.addEventListener('click', (e) => {
  if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
    profileMenu.classList.add('hidden');
  }
  if (e.target === authModal) {
    authModal.classList.add('hidden');
  }
});

// Prevent modal click from closing it
document.querySelector('.modal-content').addEventListener('click', (e) => {
  e.stopPropagation();
});

// ...existing code...
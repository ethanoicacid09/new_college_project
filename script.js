// script.js

// Cart Management
let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartDisplay();
}

function removeFromCart(item) {
    cart = cart.filter(cartItem => cartItem !== item);
    updateCartDisplay();
}

function updateCartDisplay() {
    console.log(`Cart: ${JSON.stringify(cart)}`);
}

// Theme Toggle
let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
}

// Sidebar Navigation
function openSidebar() {
    document.getElementById('sidebar').style.width = '250px';
}

function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
}

// Search Functionality
function searchItems(query) {
    // Implement search logic here
    console.log(`Searching for: ${query}`);
}

// Authentication Management
let isAuthenticated = false;

function login(username, password) {
    // Implement login logic here
    isAuthenticated = true;
    console.log(`User ${username} logged in`);
}

function logout() {
    // Implement logout logic here
    isAuthenticated = false;
    console.log(`User logged out`);
}

// Form Handling
function handleFormSubmit(form) {
    // Prevent default form submission
    form.preventDefault();
    const data = new FormData(form);
    console.log('Form submitted with data:', Object.fromEntries(data));
}

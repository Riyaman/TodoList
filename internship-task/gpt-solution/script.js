// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    window.onscroll = function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#008000';
        } else {
            navbar.style.backgroundColor = '#0000ff';
        }
    };
});
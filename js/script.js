document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');
    const overlay = document.querySelector('.overlay');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        overlay.classList.toggle('show');
        document.body.classList.toggle('no-scroll');
    });
});
    
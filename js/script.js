// Hamburger Button Function
const navigationLink = document.querySelector('.navigation');
const hamburgerToggle = document.getElementById('hamburger-toggle');
const hamburgerIcon = document.getElementById('hamburger-icon');

hamburgerToggle.addEventListener('click', function() {
    navigationLink.classList.toggle('active')

    if (navigationLink.classList.contains('active')) {
        hamburgerIcon.classList.replace('bx-menu', 'bx-x');
    } else {
        hamburgerIcon.classList.replace('bx-x', 'bx-menu');
    }
})

// Dark Mode Button Function
const darkModeToggle = document.getElementById('dark-mode-toggle');
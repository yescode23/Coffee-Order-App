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
const bodyElement = document.body;
const currentThemeKey = localStorage.getItem('theme');

function enableDarkMode() {
    bodyElement.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="bx bx-sun-bright"></i> Light Mode';
    localStorage.setItem('theme', 'dark-mode');
}

function disableDarkMode() {
    bodyElement.classList.remove('dark-mode');
    darkModeToggle.innerHTML = '<i class="bx bx-moon"></i> Dark Mode';
    localStorage.setItem('theme', 'light-mode');
}

if (currentThemeKey === 'dark-mode') {
    enableDarkMode();
} else {
    disableDarkMode();
}

darkModeToggle.addEventListener('click', function() {
    if (bodyElement.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
})
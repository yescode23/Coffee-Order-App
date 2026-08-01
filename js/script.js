// Hamburger Button Function

const navigationLink = document.querySelector('.navigation');
const hamburgerToggle = document.getElementById('hamburger-toggle');
const hamburgerIcon = document.getElementById('hamburger-icon');

hamburgerToggle.addEventListener('click', function () {
    navigationLink.classList.toggle('active')

    if (navigationLink.classList.contains('active')) {
        hamburgerIcon.classList.replace('bx-menu', 'bx-x');
    } else {
        hamburgerIcon.classList.replace('bx-x', 'bx-menu');
    }
})

// Hamburger Button Function

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

darkModeToggle.addEventListener('click', function () {
    if (bodyElement.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
})

// Dark Mode Button Function

// Guest Function

const inputGuestName = document.querySelector('.input-name');
const displayName = document.getElementById('display-name');
const submitGuestName = document.querySelector('.submit-name-button');

submitGuestName.addEventListener('click', function () {
    const guestName = inputGuestName.value;
    localStorage.setItem('localGuestName', guestName);

    if (guestName === '') {
        alert('You Should Input Your Name!');
    } else {
        displayName.innerText = guestName;
    }
})

// Add Cart Button Function

let cart = JSON.parse(localStorage.getItem('productStorage')) || [];
const coffeeProduct = document.querySelectorAll('.coffee-product');

coffeeProduct.forEach(coffee => {
    const cartButton = coffee.querySelector('.add-cart-button');
    const coffeeID = coffee.getAttribute('data-id');
    const coffeeName = coffee.getAttribute('data-name');
    const coffeePrice = parseInt(coffee.getAttribute('data-price'));

    if (cartButton) {
        cartButton.addEventListener('click', function () {
            const existingCoffee = cart.find(coffee => coffee.id === coffeeID);

            if (existingCoffee) {
                existingCoffee.quantity += 1;
            } else {
                cart.push({
                    id: coffeeID,
                    name: coffeeName,
                    price: coffeePrice,
                    quantity: 1
                });
            }

            localStorage.setItem('productStorage', JSON.stringify(cart));
            console.log(cart)
        });
    }
})
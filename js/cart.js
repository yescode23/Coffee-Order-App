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

// Display Guest Name in Cart Page

const displayName = document.getElementById('display-name');
const headerContainer = document.querySelector('.header-container');
const savedGuestName = localStorage.getItem('localGuestName');

if (savedGuestName) {
    displayName.innerText = savedGuestName;

    const removeNameButton = document.createElement('button');
    removeNameButton.classList.add('remove-name-button')
    removeNameButton.innerText = 'Remove';
    headerContainer.appendChild(removeNameButton);

    removeNameButton.addEventListener('click', function () {
        const removePopUp = confirm('Are you sure to remove your name ?');
        if (removePopUp === true) {
            localStorage.removeItem('localGuestName');
            displayName.innerText = '';
            headerContainer.removeChild(removeNameButton);
        }
    });

}

// Display Guest Name in Cart Page

// Display Coffee Product in Cart Page

const table = document.querySelector('.table');
const cart = JSON.parse(localStorage.getItem('productStorage'));

if (cart) {
    for (let i = 1; i <= cart.length; i++) {
        const rowProduct = document.createElement('tr');
        table.appendChild(rowProduct);

        const tdCoffeeName = document.createElement('td');
        const tdQuantity = document.createElement('td');
        const tdPrice = document.createElement('td');
        const tdActionButton = document.createElement('td');

        rowProduct.appendChild(tdCoffeeName);
        rowProduct.appendChild(tdQuantity);
        rowProduct.appendChild(tdPrice);
        rowProduct.appendChild(tdActionButton);

        const plusButton = document.createElement('button');
        plusButton.classList.add('action-button');
        plusButton.innerText = '+';
        const minusButton = document.createElement('button');
        minusButton.classList.add('action-button');
        minusButton.innerText = '-';
        const removeButton = document.createElement('button');
        removeButton.classList.add('action-button');
        removeButton.innerText = 'Remove Coffee';

        tdActionButton.appendChild(plusButton);
        tdActionButton.appendChild(minusButton);
        tdActionButton.appendChild(removeButton);

        if (i === 1) {
            tdCoffeeName.innerText = cart[0].name;
            tdQuantity.innerText = cart[0].quantity;
            tdPrice.innerText = cart[0].price;

            plusButton.addEventListener('click', function () {
                tdQuantity.innerText = cart[0].quantity + 1;
            })
        } else if (i === 2) {
            tdCoffeeName.innerText = cart[1].name;
            tdQuantity.innerText = cart[1].quantity;
            tdPrice.innerText = cart[1].price;


        } else if (i === 3) {
            tdCoffeeName.innerText = cart[2].name;
            tdQuantity.innerText = cart[2].quantity;
            tdPrice.innerText = cart[2].price;
        }
    }

    console.log(cart)
}
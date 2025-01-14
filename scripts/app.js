let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let checkOut = document.querySelector('.purchase')
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document. querySelector('.total');
let totalDisplayedPrice = 0;
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
// Event listener to show the custom alert and handle the case when the cart is empty
checkOut.addEventListener('click', () => {
    if (totalDisplayedPrice > 0) {
        // Clear the cart
        listCards = [];

        // Reload
        reloadCard();

        // Show option for To-Go or Dine-In
        showDiningOption();
    } else {
        // If the cart is empty, display the custom alert
        const customAlert = document.querySelector('.alert');
        customAlert.classList.remove('hide');
        customAlert.classList.add('show');

        // Close the cart if empty
        body.classList.remove('active');

        // Automatically close the custom alert after 6 seconds
        setTimeout(() => {
            customAlert.classList.remove('show');
            customAlert.classList.add('hide');
        }, 6000); // 6000 milliseconds = 6 seconds
    }
});

// New function to close alerts
const closeAlerts = () => {
    const customAlert = document.querySelector('.alert');
    const successAlert = document.querySelector('.successalert');
    customAlert.classList.remove('show');
    customAlert.classList.add('hide');

    successAlert.classList.remove('show');
    successAlert.classList.add('hide');
};

const closeAlertBtn = document.querySelector('.close-btn');
closeAlertBtn.addEventListener('click', () => {
    const customAlert = document.querySelector('.alert');
    customAlert.classList.remove('show');
    customAlert.classList.add('hide');
});

const successCloseBtn = document.querySelector('.successclose-btn');
successCloseBtn.addEventListener('click', () => {
    const successAlert = document.querySelector('.successalert');
    successAlert.classList.remove('show');
    successAlert.classList.add('hide');
});

// Set timeout for hiding success alerts (6 seconds)
const successTimeoutDuration = 6000; // Adjust timeout duration in milliseconds
setTimeout(() => {
    const successAlert = document.querySelector('.successalert');
    successAlert.classList.remove('show');
    successAlert.classList.add('hide');
}, successTimeoutDuration);

let products = [
    {
        id: 1,
        name: 'Bruschetta with tomato and basil',
        image: 'bruschetta.jpg',
        price: 8.99
    },
    {
        id: 2,
        name: 'Roasted Red pepper hummus ',
        image: 'RRP-hummus.jpg',
        price: 7.99
    },
    {
        id: 3,
        name: 'Vegan Stuffed Mushroom',
        image: 'mushroom.jpg',
        price: 10.75
    },
    {
        id: 4,
        name: 'Spiced Cauliflower Wings',
        image: 'cauliflower.jpg',
        price: 6.99
    },
    {
        id: 5,
        name: 'Zucchini Fritters',
        image: 'zuch.jpg',
        price: 7.49
    },
    {
        id: 6,
        name: 'Spinach Dip',
        image: 'spinach-dip.jpg',
        price: 8.99
    },
    {
        id: 7,
        name: 'Vegetable Stir Fry with Ginger and Garlic',
        image: 'Stir-Fry.jpg',
        price: 13.99
    },
    {
        id: 8,
        name: 'Stuffed Eggplant with Couscous and Herbs',
        image: 'Stuffed-Couscous.jpg',
        price: 12.99
    },
    {
        id: 9,
        name: 'Creamy Coconut Curry with Tofu and Vegetables',
        image: 'Cocunut-Curry.jpg',
        price: 12.99
    },
    {
        id: 10,
        name: 'Mushroom and Spinach Risotto',
        image: 'Spinach-Risotto.jpg',
        price: 6.99
    },
    {
        id: 11,
        name: 'Gluten-Free Pad Thai',
        image: 'pad-thai.jpg',
        price: 14.49
    },
    {
        id: 12,
        name: 'Lentil and Sweet Potato Curry',
        image: 'lentil-curry.jpg',
        price: 13.99
    },
    {
        id: 13,
        name: 'Chocolate Strawberries',
        image: 'Chocolate-Strawberries.jpg',
        price: 7.99
    },
    {
        id: 14,
        name: 'Mango Sorbet',
        image: 'Mango-sorbet.jpg',
        price: 8.49
    },
    {
        id: 15,
        name: 'Oatmeal Cookies',
        image: 'oatmeal-cookies.jpg',
        price: 5.99
    },
    {
        id: 16,
        name: 'Coconut Water',
        image: 'Coconut-water.jpg',
        price: 3.99
    },
    {
        id: 17,
        name: 'Lemonade',
        image: 'Lemonade.jpg',
        price: 3.49
    },
    {
        id: 18,
        name: 'Kombucha',
        image: 'Kombucha.jpg',
        price: 3.99
    },
];
let entrees = [];
let desserts = [];
let drinks = [];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="assets/${value.image}" />
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">ADD TO CART</button>
        `;
        list.appendChild(newDiv);
    });
}
initApp();
function addToCard(key){
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
        totalDisplayedPrice += products[key].price; 
    } else {
        listCards[key].quantity += 1;
        totalDisplayedPrice += products[key].price; 
    }

    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = ``;
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + products[key].price * value.quantity;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="assets/${value.image}"/></div>
                <div>${value.name}</div>
                <div>$${(products[key].price * value.quantity).toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick="changeQuantityMinus(${key})">-</button>
                    <button onclick="changeQuantityPlus(${key})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = `$${totalDisplayedPrice.toLocaleString()}`;
    quantity.innerText = count;

    // Check if listCards is not empty before adding labels
    if (listCards.length > 0) {
        // Add labels for "Item," "Name," "Price," and "Quantity" columns
        let labelsDiv = document.createElement('li');
        labelsDiv.innerHTML = `
            <div class="label">Item</div>
            <div class="label">Name</div>
            <div class="label">Price</div>
            <div class="label">Quantity</div>
        `;
        listCard.insertBefore(labelsDiv, listCard.firstChild);
    }
}


function changeQuantityPlus(key, quantity){
    const product = listCards[key];
    if (!product) {
        return;
    }

    const productPrice = products[key].price;

    if (quantity === 0) {
        delete listCards[key];
    } else {
        product.quantity += 1;
        totalDisplayedPrice += productPrice;
    }

    reloadCard();
}
function changeQuantityMinus(key) {
    if (listCards[key].quantity === 1)
    {
        totalDisplayedPrice -= listCards[key].price;
        delete listCards[key];
    } else {
        listCards[key].quantity -= 1;
        totalDisplayedPrice -= listCards[key].price;
    }

    reloadCard();
}

// New function to show dining options
// New function to show dining options with styling
function showDiningOption() {
    const diningOptionDiv = document.createElement('div');
    diningOptionDiv.classList.add('dining-option');
    diningOptionDiv.innerHTML = `
        <p>Choose your option:</p>
        <button class="dining-button to-go" onclick="selectDiningOption('To-Go')">To-Go</button>
        <button class="dining-button dine-in" onclick="selectDiningOption('Dine-In')">Dine-In</button>
    `;
    listCard.appendChild(diningOptionDiv);
}


// New function to handle dining option selection
function selectDiningOption(option) {
    // Generate a random number between 15 and 45
    const estimatedTime = Math.floor(Math.random() * (55 - 15 + 1)) + 15;

    // Prepare the thank you message
    let message = '';
    if (option === 'To-Go') {
        message = `Your order has been processed and has an estimated time of ${estimatedTime} minutes before arrival. Thank you for your order!`;
    } else if (option === 'Dine-In') {
        message = `Thank you for your order!`;
    }

    // Log the selection
    console.log(message);
    
    // Show thank you message
    const successAlert = document.querySelector('.successalert');
    successAlert.classList.remove('hide');
    successAlert.classList.add('show');
    successAlert.innerText = message; // Set the message text

    // Reset the price counter
    totalDisplayedPrice = 0; // Reset the total price

    // Reload the cart to reflect the reset total
    reloadCard(); // Call reloadCard to update the displayed total and quantity

    // Automatically close the success alert after 6 seconds
    setTimeout(() => {
        successAlert.classList.remove('show');
        successAlert.classList.add('hide');
    }, 6000); // 6000 milliseconds = 6 seconds

    // Remove the dining option after selection
    const diningOptionDiv = document.querySelector('.dining-option');
    if (diningOptionDiv) {
        diningOptionDiv.remove();
    }

    // Automatically close the cart after selection
    body.classList.remove('active'); // Close the cart
    console.log('Cart closed'); // Debugging log
}

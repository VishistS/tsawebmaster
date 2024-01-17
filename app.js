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
checkOut.addEventListener('click', () => {
    if (totalDisplayedPrice > 0) {
        // Clear the cart
        listCards = [];
        totalDisplayedPrice = 0;

        // Reload
        reloadCard();

        // Show success alert
        const successAlert = document.querySelector('.successalert');
        successAlert.classList.remove('hide');
        successAlert.classList.add('show');
    } else {
        // If the cart is empty, display the custom alert
        const customAlert = document.querySelector('.alert');
        customAlert.classList.remove('hide');
        customAlert.classList.add('show');
    }
});
const customAlert = document.querySelector('.alert');
const successAlert = document.querySelector('.successalert');

const closeAlerts = () => {
    customAlert.classList.remove('show');
    customAlert.classList.add('hide');

    successAlert.classList.remove('show');
    successAlert.classList.add('hide');
};

const closeAlertBtn = document.querySelector('.close-btn');
closeAlertBtn.addEventListener('click', closeAlerts);

const successCloseBtn = document.querySelector('.successclose-btn');
successCloseBtn.addEventListener('click', closeAlerts);

// Set timeout for hiding alerts (e.g., 3 seconds)
const timeoutDuration = 3000; // Adjust timeout duration in milliseconds
setTimeout(() => {
    closeAlerts();
}, timeoutDuration);
let products = [
    {
        id: 1,
        name: 'Eco-Friendly T-Shirt',
        image: 'tShirt.jpg',
        price: 20.99
    },
    {
        id: 2,
        name: 'Reusable Stainless Steel Water Bottle',
        image: 'waterbottle.jpg',
        price: 15.50
    },
    {
        id: 3,
        name: 'Recycled Notebook with Eco-Friendly Pen',
        image: 'notebook.jpg',
        price: 12.75
    },
    {
        id: 4,
        name: 'Solar-Powered Phone Charger',
        image: 'solarcharger.jpg',
        price: 30.99
    },
    {
        id: 5,
        name: 'Tree Travel Mug',
        image: 'treemug.jpg',
        price: 18.25
    },
    {
        id: 6,
        name: 'Green Energy Awareness Sticker Pack',
        image: 'stickers.jpg',
        price: 8.99
    },
    {
        id: 7,
        name: 'placeholder',
        image: 'stickers.jpg',
        price: 20.99
    },
];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="assets/${value.image}" />
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
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

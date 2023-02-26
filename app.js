let cartItemDisplay = document.getElementById("cartItemDisplay");
// let storedCart = JSON.parse(localStorage.getItem("cart"));
// let cart = [];
fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())

    .then(data => {
        json = data
        console.log(json)
        for (let index = 0; index < json.length; index++) {
            const element = json[index];
            let categories = element.category;
            console.log(categories);
            document.getElementById("screen").innerHTML += `<div class="content" >
                <div class="main-frame" onclick="see(${element.id})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <div class="image"><img src="${element.image}" alt=""></div>
                  <div class="category">${element.category}</div>
                  <div class="title">${element.title}</div>
                  <div class="rating"><i class="icofont-ui-rating"></i>${element.rating.rate}</div>
                  <div class="price">$${element.price}</div>
                </div>    
                <button onclick="handleClick(${element.id})" class="crt"><i class="icofont-cart"></i></button>           
            </div>
            `
        }
    })

// Mens Category  
function mens() {
    document.getElementById("men").innerHTML = ""

    document.getElementById("screen").style.display = "none"
    document.getElementById("men").style.display = "flex"
    document.getElementById("women").style.display = "none"
    document.getElementById("jewelery").style.display = "none"
    document.getElementById("electronics").style.display = "none"

    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())

        .then(json => {
            console.log(json)
            for (let index = 0; index < json.length; index++) {
                const element = json[index];
                if (element.category == "men's clothing") {
                    document.getElementById("men").innerHTML += `<div class="content" onclick="handleClick(${element.id})">
                    <div class="image"><img src="${element.image}" alt=""></div>
                    <div class="category">${element.category}</div>
                    <div class="title">${element.title}</div>
                    <div class="rating"><i class="icofont-ui-rating"></i>${element.rating.rate}</div>
                    <div class="price">$${element.price}</div>
                    <button class="crt"><i class="icofont-cart"></i></button>
                
            </div>`

                }
            }
        })


}

// Womens Category 
function women() {
    document.getElementById("women").innerHTML = ""

    document.getElementById("screen").style.display = "none";
    document.getElementById("men").style.display = "none";
    document.getElementById("women").style.display = "flex";
    document.getElementById("jewelery").style.display = "none";
    document.getElementById("electronics").style.display = "none"

    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())

        .then(json => {
            console.log(json)
            for (let index = 0; index < json.length; index++) {
                const element = json[index];
                if (element.category == "women's clothing") {
                    document.getElementById("women").innerHTML += `<div class="content" onclick="handleClick(${element.id})">
                    <div class="image"><img src="${element.image}" alt=""></div>
                    <div class="category">${element.category}</div>
                    <div class="title">${element.title}</div>
                    <div class="rating"><i class="icofont-ui-rating"></i>${element.rating.rate}</div>
                    <div class="price">$${element.price}</div>
                    <button class="crt"><i class="icofont-cart"></i></button>
                
            </div>`

                }
            }
        })


}

// Jewelery Category
function jewelery() {
    document.getElementById("jewelery").innerHTML = ""

    document.getElementById("screen").style.display = "none";
    document.getElementById("men").style.display = "none";
    document.getElementById("women").style.display = "none";
    document.getElementById("jewelery").style.display = "flex";
    document.getElementById("electronics").style.display = "none"

    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())

        .then(json => {
            console.log(json)
            for (let index = 0; index < json.length; index++) {
                const element = json[index];
                if (element.category == "jewelery") {
                    document.getElementById("jewelery").innerHTML += `<div class="content" onlcick="handleClick(${element.id})">
                    <div class="image"><img src="${element.image}" alt=""></div>
                    <div class="category">${element.category}</div>
                    <div class="title">${element.title}</div>
                    <div class="rating"><i class="icofont-ui-rating"></i>${element.rating.rate}</div>
                    <div class="price">$${element.price}</div>
                    <button class="crt"><i class="icofont-cart"></i></button>
                
            </div>`

                }
            }
        })

}

// Electronics Category
function electronics() {
    document.getElementById("electronics").innerHTML = ""

    document.getElementById("screen").style.display = "none";
    document.getElementById("men").style.display = "none";
    document.getElementById("women").style.display = "none";
    document.getElementById("jewelery").style.display = "none";
    document.getElementById("electronics").style.display = "flex"

    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())

        .then(json => {
            console.log(json)
            for (let index = 0; index < json.length; index++) {
                const element = json[index];
                if (element.category == "electronics") {
                    document.getElementById("electronics").innerHTML += `<div class="content" onclick="handleClick(${element.id})">
                    <div class="image"><img src="${element.image}" alt=""></div>
                    <div class="category">${element.category}</div>
                    <div class="title">${element.title}</div>
                    <div class="rating"><i class="icofont-ui-rating"></i>${element.rating.rate}</div>
                    <div class="price">$${element.price}</div>
                    <button class="crt"><i class="icofont-cart"></i></button>
                
            </div>`

                }
            }
        })

}

// Add items to cart
function handleClick(id) {
    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // console.log(storedCart);
    const product = json.find((p) => p.id === id);
    storedCart.push(product)

    alert(`Added ${product.title} to the cart!`);
    console.log(storedCart);

    localStorage.setItem("cart", JSON.stringify(storedCart));

    //Update the badge count
    let badge = document.getElementById("badge");
    badge.textContent = storedCart.length.toString();
    calculateTotalPrice();

}

function see(id) {
    // let storedCart = JSON.parse(localStorage.getItem("cart"));
    let seeIte =document.getElementById("see");

    const element = json.find((p) => p.id === id);

    seeIte.innerHTML = `<div class="see-more">
            <img src="${element.image}" alt="">
            <div class="title">${element.title}</div>
            <div class="desc">${element.description}</div>
            <div class="price">$${element.price}</div>
        </div>`
}

function send(id) {
    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // console.log(storedCart);
    const product = json.find((p) => p.id === id);
    storedCart.push(product)

    alert(`Added ${product.title} to the cart!`);
    console.log(storedCart);

    localStorage.setItem("cart", JSON.stringify(storedCart));

    //Update the badge count
    let badge = document.getElementById("badge");
    badge.textContent = storedCart.length.toString();
    calculateTotalPrice();

}

// View items added to Cart
function viewCart() {
    storedCart = JSON.parse(localStorage.getItem("cart"));
    let totalPriceDisplay = document.getElementById("total");
    let totalPrice = 0;
    cartItemDisplay.innerHTML = "";

    // If the cart is empty, display a message to the user
    if (!storedCart || storedCart.length == 0) {
        cartItemDisplay.innerHTML = `<b>YOUR CART IS EMPTY</b>`
    } else {
        
        for (let index = 0; index < storedCart.length; index++) {
            const element = storedCart[index];
            cartItemDisplay.innerHTML += `
           <div class="modal-inner">
             <img src="${element.image}" alt="">
             <div class="title">${element.title}</div>
             <div class="qty">
                <button onclick="decreaseQuantity(${index})">-</button>
                <span id="item-quantity-${index}">1</span>
                <button onclick="increaseQuantity(${index})">+</button>
             </div>
             <div class="price">$${element.price}</div>
             <button onclick="removeItem(${index})" class="del">Remove</i></button>
           </div>
        `
            // totalPrice += element.price;
        }
        // totalPriceDisplay.innerHTML = `$${totalPrice.toFixed(2)}`
    }
    
}

// Total
let totalPrice = 0;
function calculateTotalPrice() {
    totalPrice = 0;
    let totalDisplay = document.getElementById("total");
    storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart && storedCart.length > 0) {
        storedCart.forEach(element => {
            totalPrice += element.price
        });
    }
    totalDisplay.innerHTML = `$${totalPrice.toFixed(2)}`;
}

// Remove Item from Cart
function removeItem(index) {
    storedCart.splice(index, 1);
    console.log(storedCart);
    localStorage.setItem("cart", JSON.stringify(storedCart));
    viewCart();

    //Update the badge count
    let badge = document.getElementById("badge");
    badge.textContent = storedCart.length.toString();
    calculateTotalPrice();
}

// Increase item Quantity in Cart
function increaseQuantity(index) {
    const itemQuantity = document.getElementById(`item-quantity-${index}`);
    let quantity = parseInt(itemQuantity.innerHTML);
    quantity += 1;
    itemQuantity.innerHTML = quantity;
}

// Reduce item Quantity in Cart
function decreaseQuantity(index) {
    const itemQuantity = document.getElementById(`item-quantity-${index}`);
    let quantity = parseInt(itemQuantity.innerHTML);
    quantity -= 1;
    itemQuantity.innerHTML = quantity;
}

// Cart Badge
let badge = document.getElementById("badge");
storedCart = JSON.parse(localStorage.getItem("cart"));
if (!storedCart || storedCart.length == 0) {
    badge.textContent = '0';
} else {
    badge.textContent = storedCart.length.toString();
}

// Payment Method
function makePayment() {
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-0c58230ed063cb8f5f84cfcd0050be7d-X",
        tx_ref: "titanic-48981487343MDI0NzMx",
        amount: totalPrice,
        currency: "USD",
        payment_options: "card, mobilemoneyghana, ussd",
        redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
        meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
            email: "rose@unsinkableship.com",
            phone_number: "08102909304",
            name: "Rose DeWitt Bukater",
        },
        customizations: {
            title: "The Titanic Store",
            description: "Payment for an awesome cruise",
            logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
        },
    });
}
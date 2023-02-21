
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
                <div class="main-frame" onclick="handleClick(${element.id})">
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


function handleClick(id) {
    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // console.log(storedCart);
    const product = json.find((p) => p.id === id);
    storedCart.push(product)

    alert(`Added ${product.title} to the cart!`);
    console.log(storedCart);

    localStorage.setItem("cart", JSON.stringify(storedCart));
}

function viewCart() {
    storedCart = JSON.parse(localStorage.getItem("cart"));
    let totalPriceDisplay = document.getElementById("total");
    let totalprice = 0;

    // If the cart is empty, display a message to the user
    if (!storedCart || storedCart.length == 0) {
        cartItemDisplay.innerHTML = `<b>YOUR CART IS EMPTY</b>`
    } else {
        cartItemDisplay.innerHTML = "";
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
            totalprice += element.price;
        }
        totalPriceDisplay.innerHTML = `<b>Total price:</b> $${totalprice.toFixed(2)}`
    }
}


function removeItem(index) {
    storedCart.splice(index, 1);
    console.log(storedCart);
    localStorage.setItem("cart", JSON.stringify(storedCart));
    viewCart();
}

function increaseQuantity(index) {
    if (quantity = 1) {
        alert("Minimum Quantity reached")
    }
    const itemQuantity = document.getElementById(`item-quantity-${index}`);
    let quantity = parseInt(itemQuantity.innerHTML);
    quantity += 1;
    itemQuantity.innerHTML = quantity;
}

function decreaseQuantity(index) {
    const itemQuantity = document.getElementById(`item-quantity-${index}`);
    let quantity = parseInt(itemQuantity.innerHTML);
    quantity -= 1;
    itemQuantity.innerHTML = quantity;
}


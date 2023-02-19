let cart = {};
let json = [];


fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())

    .then(data => {
        json = data
        console.log(json)
        for (let index = 0; index < json.length; index++) {
            const element = json[index];
            let categories = element.category;
            console.log(categories);
            document.getElementById("screen").innerHTML += `<div class="content" onclick="handleClick(${element.id})">
                <div class="image"><img src="${element.image}" alt=""></div>
                <div class="category">${element.category}</div>
                <div class="title">${element.title}</div>
                <div class="rating"><i class="icofont-ui-rating"></i>${element.rating.rate}</div>
                <div class="price">$${element.price}</div>
                <button onclick="handleAddToCart(${element.id})" class="crt"><i class="icofont-cart"></i></button>
            </div>
            `
        }
    })
function handleClick(id) {
    // console.log(`Clicked on product with id ${id}`);
}

function handleAddToCart(id) {
    // const productId = element.id;
    if (cart[id]) {
        cart[id] += 1;
    } else {
        cart[id] = 1;
    }
    console.log(`Added product with ID ${id} to cart.`);
    alert("Product Added to Cart")
    // console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));

}

function displayCart() {
    let cartContent = document.getElementById("cartShow");
    let storedCart = JSON.parse(localStorage.getItem("cart"));

    if (!cartContent) {
        console.log("Error: Element with id 'carting' not found");
        return;
    }

    if (storedCart) {
        let cartHTML = "";
        for (let id in storedCart) {
            const product = json.find(p => p.id == id);
            if (product) {
                cartHTML += `
           <div class="cart-item">
            <div class="item-name">${product.title}</div>
            <div class="">${product.image}</div>
            <div class="">${cart[id]}</div>
            <div class="item-price">$${product.price}</div>
            </div>
           `
            }

        }
        cartContent.innerHTML = cartHTML;

    } else {
        cartContent .innerHTML = "<p>Your cart is empty.</p>";
    }
    document.getElementById("screen").style.display = "none";
    document.getElementById("men").style.display = "none";
    document.getElementById("women").style.display = "none";
    document.getElementById("jewelery").style.display = "none";
    document.getElementById("electronics").style.display = "none";
    document.getElementById("carting").style.display = "block";

    
}

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

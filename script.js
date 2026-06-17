console.log("JS LOADED");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("click", function(e){

    if(e.target.classList.contains("add-to-cart")){

        console.log("BUTTON CLICKED");

        cart.push({
            name: e.target.dataset.name,
            price: Number(e.target.dataset.price)
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCart();

        alert("Added to cart!");
    }
});

function updateCart(){

    let count = cart.length;
    let total = cart.reduce((sum,item)=> sum + item.price,0);

    let countEl = document.getElementById("cart-count");
    let totalEl = document.getElementById("cart-total");

    if(countEl) countEl.innerText = count;
    if(totalEl) totalEl.innerText = total;

    console.log(cart);
}

updateCart();

// Remove last item
document.getElementById("remove-item").addEventListener("click", function(){

    if(cart.length > 0){

        cart.pop();

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCart();
    }
});

document.getElementById("checkout-btn").addEventListener("click", function(){

    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }

    alert("Order Placed Successfully! 🎉");
});

document.getElementById("order-btn").addEventListener("click", function(){

    if(cart.length === 0){
        alert("🛒 Your cart is empty!");
    }else{
        alert("📦 Order Confirmed Successfully!");
    }

});

function sendMessage(){
    alert("Message Sent Successfully! ✅");
}
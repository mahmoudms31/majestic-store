

let cart=[]

function addToCart(name,price){

cart.push({name,price})

updateCart()

}

function updateCart(){

document.getElementById("cart").innerText=`🛒 (${cart.length})`

}

function prepareOrder(){

document.getElementById("cartData").value=JSON.stringify(cart)

}



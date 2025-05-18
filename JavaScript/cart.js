// the cart variable is being assigned to the cart in local storage and if a cart array doesnt exist in storage it creates one
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// function addTocart takes parameters of product values and assigns them to the object item
function addToCart(productName, size, price, qtySelectId) {

    // <select> element stores <option> quantity and that element id is passed as an argument into the addToCart function. ".value" returns the <select> elements value as a String, that's why we are parsing the string to an int so we can use that value in the object "item" to calculate the total.
    const quantity = parseInt(document.getElementById(qtySelectId).value);

    const item = {  // item object
        name: productName,
        size: size,
        price: price,
        quantity: quantity,
        total: (price * quantity).toFixed(2)
    };
    cart.push(item);    // adding object to cart array

    // Turning the cart array into a String so it can be placed in local storage with the key being "cart"
    localStorage.setItem("cart", JSON.stringify(cart));
}
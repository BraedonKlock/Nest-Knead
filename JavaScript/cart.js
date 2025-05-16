const cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, size, price, qtySelectId) {
    const quantity = parseInt(document.getElementById(qtySelectId).value);

    const item = {
        name: productName,
        size: size,
        price: price,
        quantity: quantity,
        total: (price * quantity).toFixed(2)
    };

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
}
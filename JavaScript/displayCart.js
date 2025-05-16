function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartBody = document.getElementById("cartBody");
    const grandTotalElement = document.getElementById("grandTotal");

    let grandTotal = 0;
    cartBody.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const row = document.createElement("tr");

        // Name
        const nameCell = document.createElement("td");
        const nameText = document.createTextNode(item.name);
        nameCell.appendChild(nameText);
        row.appendChild(nameCell);

        // Size
        const sizeCell = document.createElement("td");
        const sizeText = document.createTextNode(item.size);
        sizeCell.appendChild(sizeText);
        row.appendChild(sizeCell);

        // Price
        const priceCell = document.createElement("td");
        const priceText = document.createTextNode("$" + parseFloat(item.price).toFixed(2));
        priceCell.appendChild(priceText);
        row.appendChild(priceCell);

        // Quantity
        const qtyCell = document.createElement("td");
        const qtyText = document.createTextNode(item.quantity.toString());
        qtyCell.appendChild(qtyText);
        row.appendChild(qtyCell);

        // Total
        const totalCell = document.createElement("td");
        const totalText = document.createTextNode("$" + item.total.toString());
        totalCell.appendChild(totalText);
        row.appendChild(totalCell);

        // Remove Button
        const removeCell = document.createElement("td");
        const removeButton = document.createElement("button");
        const removeButtonText = document.createTextNode("Remove");
        removeButton.appendChild(removeButtonText);
        removeButton.addEventListener("click", RemoveHandler(i));
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);

        cartBody.appendChild(row);

        grandTotal += parseFloat(item.total);
    }
    const totalLabel = document.createTextNode("Total: $" + grandTotal.toFixed(2));
    grandTotalElement.textContent = ""; // Clear old text
    grandTotalElement.appendChild(totalLabel);
}

function RemoveHandler(index) {
    return function () {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    };
}

window.onload = displayCart;

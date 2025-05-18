// The "displayCart" function creates the html tables and assigns the property values of the item object into the there appropriate table cells
function displayCart() {
    // The cart variable is being assigned to the cart in local storage and if a cart array doesnt exist in storage it creates one
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // The variable "cartBody" is being assigned the element of the id "cartBody"
    const cartBody = document.getElementById("cartBody"); 
    const grandTotalElement = document.getElementById("grandTotal");

    let grandTotal = 0;     // Setting grand total to zero
    cartBody.innerHTML = "";    // Clears cartbody so that items aren't displayed more than once

    // using a for loop to iterate through the "cart" array and assigning the object "item" propertie's values to the tables created row and data cells
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];   // Assigning the object in the cart array at each index to the variable "item" 
        const row = document.createElement("tr");   // creating table row

        // NAME
        // Creating the table column cell and assigning it to a variable
        const nameCell = document.createElement("td");
        // Creating a text node (DOM object) that holds the name of the item object
        const nameText = document.createTextNode(item.name);
        // "nameText" is a DOM text node so we use ".appendChild" to insert the name text into the <td> element
        nameCell.appendChild(nameText);
        // Using "".appendChild" to insert the <td> (with the text node) into the table row
        row.appendChild(nameCell);

        // SIZE
        const sizeCell = document.createElement("td");
        const sizeText = document.createTextNode(item.size);
        sizeCell.appendChild(sizeText);
        row.appendChild(sizeCell);

        // PRICE
        const priceCell = document.createElement("td");
        const priceText = document.createTextNode("$" + parseFloat(item.price).toFixed(2));
        priceCell.appendChild(priceText);
        row.appendChild(priceCell);

        // QUANTITY
        const qtyCell = document.createElement("td");
        const qtyText = document.createTextNode(item.quantity.toString());
        qtyCell.appendChild(qtyText);
        row.appendChild(qtyCell);

        // TOTAL
        const totalCell = document.createElement("td");
        const totalText = document.createTextNode("$" + item.total.toString());
        totalCell.appendChild(totalText);
        row.appendChild(totalCell);

        // "REMOVE" BUTTON
        const removeCell = document.createElement("td");
        const removeButton = document.createElement("button");
        const removeButtonText = document.createTextNode("Remove");
        removeButton.appendChild(removeButtonText);
        removeButton.addEventListener("click", RemoveHandler(i));
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);

        cartBody.appendChild(row);  // Adding row to the cartBody
        grandTotal += parseFloat(item.total);   // Adding the item total to grand total
    }
    const totalLabel = document.createTextNode("Total: $" + grandTotal.toFixed(2));
    grandTotalElement.textContent = "";     // Clear old text
    grandTotalElement.appendChild(totalLabel);
}
//
function RemoveHandler(index) {
    return function () {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        // ".splice" is a built in JavaScript array method. Deleting 1 item at index of remove button
        cart.splice(index, 1); 
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart(); // re-displaying cart after deletion of item
    };
}
// Window is the top-level browser object that contains the DOM and we are using it's event ".onload" to wait for everything in the webpage to be loaded before calling "displayingCart"
window.onload = displayCart; 

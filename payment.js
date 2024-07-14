

function addToCart(button) {
    let product = button.parentElement;
    let category = product.dataset.category;
    let name = product.dataset.name;
    let price = parseInt(product.dataset.price);

    let cartItems = document.getElementById('cart-items');
    let totalAmount = document.getElementById('total-amount');
    let gstAmount = document.getElementById('gst-amount');
    let grandTotal = document.getElementById('grand-total');

    // Create cart item HTML
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <p>${name} - ₹${price}</p>
        <button onclick="removeFromCart(this)">Remove</button>
    `;
    cartItems.appendChild(cartItem);

    // Update total amount
    let currentTotal = parseInt(totalAmount.textContent);
    totalAmount.textContent = currentTotal + price;

    // Calculate GST and update grand total
    let currentGrandTotal = parseInt(grandTotal.textContent);
    let gst = Math.round((currentTotal + price) * 0.18);
    gstAmount.textContent = gst;
    grandTotal.textContent = currentGrandTotal + price + gst;


}

// Function to remove a product from the cart
function removeFromCart(button) {
    let cartItem = button.parentElement;
    let priceString = cartItem.querySelector('p').textContent.split('₹')[1];
    let price = parseInt(priceString);

    let totalAmount = localStorage.getItem('totalAmount');
document.getElementById('total-amount').textContent = totalAmount;
    let gstAmount = document.getElementById('gst-amount');
    let grandTotal = document.getElementById('grand-total');

    // Update total amount
    let currentTotal = parseInt(totalAmount.textContent);
    totalAmount.textContent = currentTotal - price;

    // Calculate new GST based on updated total amount
    let newTotal = parseInt(totalAmount.textContent);
    let newGst = Math.round(newTotal * 0.18);
    gstAmount.textContent = newGst;

    // Update grand total
    let currentGrandTotal = newTotal + newGst; // Calculate grand total with new total and new GST
    grandTotal.textContent = currentGrandTotal;

    // Remove the cart item from display
    cartItem.remove();

    // Adjust grand total to zero if cart is empty
    if (newTotal === 0) {
        grandTotal.textContent = 0;
    }
}


// Function to simulate checkout (for demonstration purposes)
function checkout() {
    alert('Checkout completed successfully!');
    // You can add further logic here for real checkout processes
}




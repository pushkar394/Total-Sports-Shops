// Function to add product to cart
function addToCart(button) {
    // Retrieve product details
    let product = button.parentElement;
    let name = product.dataset.name;
    let price = parseInt(product.dataset.price);

    // Create cart item element
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <span>${name}</span>
        <span>₹${price}</span>
        <button onclick="removeCartItem(this)">Remove</button>
    `;

    // Append cart item to cart
    let cartItems = document.getElementById('cart-items');
    cartItems.appendChild(cartItem);

    // Calculate total amount
    updateCartTotal();
}

// Function to remove item from cart
function removeCartItem(button) {
    let cartItem = button.parentElement;
    cartItem.remove();

    // Recalculate total amount after removing item
    updateCartTotal();
}

// Function to update cart total
function updateCartTotal() {
    let cartItems = document.getElementsByClassName('cart-item');
    let total = 0;

    // Calculate total amount
    for (let item of cartItems) {
        let price = parseFloat(item.children[1].innerText.replace('₹', ''));
        total += price;
    }

    // Calculate GST (18%)
    let gst = (total * 0.18).toFixed(2);
    let grandTotal = total + parseFloat(gst);

    // Update total amount and GST in the cart
    document.getElementById('total-amount').innerText = total.toFixed(2);
    document.getElementById('gst-amount').innerText = gst;
    document.getElementById('grand-total').innerText = grandTotal.toFixed(2);

    // Store total amount in localStorage
    localStorage.setItem('totalAmount', grandTotal.toFixed(2));
}

// Function to simulate checkout (for demonstration purposes)
function checkout() {
    // Perform checkout actions (e.g., send order to server, process payment)
    alert('Checkout completed successfully!');
    // You can add further logic here for real checkout processes
}



// Retrieve total amount from localStorage
let totalAmount = localStorage.getItem('totalAmount');
document.getElementById('total-amount').textContent = totalAmount;

// Clear localStorage after retrieving the total amount
localStorage.removeItem('totalAmount');
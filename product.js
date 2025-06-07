// Initialize product data (name, price, initial quantity)
const products = [
    { name: "Plastic Cup 350ml", price: 45, quantity: 0 },
    { name: "Plastic Cup 500ml", price: 60, quantity: 0 },
    { name: "Plastic Cup 350ml", price: 50, quantity: 0 },
    { name: "Plastic Cup 500ml", price: 70, quantity: 0 },
    { name: "Medical Cover 1", price: 7, quantity: 0 },
    { name: "Medical Cover 2", price: 8.5, quantity: 0 },
    { name: "Medical Cover 3", price: 12, quantity: 0 },
    { name: "Medical Cover 4", price: 28, quantity: 0 },
    { name: "Medical Cover 1", price: 8, quantity: 0 },
    { name: "Medical Cover 2", price: 9.5, quantity: 0 },
    { name: "Medical Cover 3", price: 13, quantity: 0 },
    { name: "Medical Cover 4", price: 29, quantity: 0 }
];

// Add event listeners to the quantity buttons for each product
document.querySelectorAll('.decrease-quantity').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product');
        if (products[productId - 1].quantity > 0) {
            products[productId - 1].quantity--;
            updateQuantityDisplay(productId);
        }
    });
});

document.querySelectorAll('.increase-quantity').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product');
        products[productId - 1].quantity++;
        updateQuantityDisplay(productId);
    });
});

// Update quantity display in the UI
function updateQuantityDisplay(productId) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
        quantityElement.textContent = products[productId - 1].quantity;
    }
}

// Handle the place order button click
document.getElementById("place-order").addEventListener("click", function() {
    let totalAmount = 0;
    let orderMessage = "Order Details:\n";

    // Generate the order message and calculate the total amount
    products.forEach((product, index) => {
        if (product.quantity > 0) {
            const productTotal = product.quantity * product.price;
            totalAmount += productTotal;
            orderMessage += `\nProduct: ${product.name}\nQuantity: ${product.quantity}\nPrice per item: ₹${product.price}\nTotal: ₹${productTotal}`;
        }
    });

    // Add the total amount to the order message
    orderMessage += `\n\nTotal Invoice Amount: ₹${totalAmount}`;
    const currentDate = new Date();
    const dateString = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    orderMessage += `\nDate: ${dateString}`;

    // Send the order message to WhatsApp
    if (totalAmount > 0) {
        const whatsappUrl = `https://wa.me/9480112211?text=${encodeURIComponent(orderMessage)}`;
        window.open(whatsappUrl, "_blank");
    } else {
        alert("Please select at least one product to place the order.");
    }
});

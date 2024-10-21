//Task 2 Add Event Listeners for Product Selection
const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector");
const purchaseButton = document.getElementById("purchase-button")

sizeSelector.addEventListener("change" , (event) => {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`;
// Task 3 Handle Stock Availability

if ("data-stock" === "out-of-stock") {
    purchaseButton.disabled = true;
} else {
    purchaseButton.disabled = false;
}
});

// Task 4 Create a Checkout Event


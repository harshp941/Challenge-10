//Task 2 Add Event Listeners for Product Selection
const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector");
const purchaseButton = document.getElementById("purchase-button")

sizeSelector.addEventListener("change" , (event) => {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`;
// Task 3 Handle Stock Availability
let stockStatus = "data-stock"
if (stockStatus === "out-of-stock") {
    purchaseButton.disabled = true;
} else {
    purchaseButton.disabled = false;
}
});

// Task 4 Create a Checkout Event
let stockStatus = "data-stock"
purchaseButton.addEventListener("click", function() {
    if ( stockStatus === "in-stock") {
        alert("Thank you for your purchase!");
    } else {
        alert("Sorry, this product is out of stock.");
    }

});

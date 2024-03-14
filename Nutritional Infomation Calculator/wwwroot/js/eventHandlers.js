
var menuItem = null;

function handleCardItemClick(event) {
    var item = event.target;
    if (item.classList.contains("cardItem")) {

        var jsonData = event.target.dataset.json;
        menuItem = MenuItem.createFromJson(jsonData);

        // Toggles clicked class
        item.classList.toggle("clicked");

        // Update total nutrients
        updateTotalNutrients(item, menuItem);

        // Display nutrition on sidebar
        displayMenuItemInformation(menuItem);
        displayTotalNutrientInformation();
    }
}
function handleClearTotalClick() {
    // Reset total nutrients
    totalNutrients = new NutrientTotal();
    displayTotalNutrientInformation();

    // Clear displayed menu item information
    clearDisplayedMenuItem();

    // Remove clicked class from all items
    var clickedItems = document.querySelectorAll(".clicked");
    clickedItems.forEach(item => {
        item.classList.remove("clicked");
    });
}
function handleCardItemMouseOver(event) {
    if (event.target.classList.contains("cardItem")) {
        var jsonData = event.target.dataset.json;
        var tempMenuItem = MenuItem.createFromJson(jsonData);

        // Display temporary menu item information
        displayMenuItemInformation(tempMenuItem);
    }
}
function handleCardItemMouseOut() {
    // Revert displayed menu item information
    revertMenuItemInformation(menuItem);
}
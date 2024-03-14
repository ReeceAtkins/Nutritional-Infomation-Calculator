
var menuItem = null;

/**
 * Handles the click event on card items.
 * @param {Event} event - The click event object.
 */
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

/**
 * Handles the click event on the "Clear Total" button.
 */
function handleClearTotalClick() {
    // Remove clicked class from all items
    var clickedItems = document.querySelectorAll(".clicked");
    clickedItems.forEach(item => {
        item.classList.remove("clicked");
    });

    menuItem = null;

    // Resets and clears sidebar
    totalNutrients.clear();
    document.getElementById("nutritionTotal").innerHTML = "";
    document.getElementById("nutritionInfo").innerHTML = "";
}

/**
 * Handles the mouseover event on card items.
 * @param {Event} event - The mouseover event object.
 */
function handleCardItemMouseOver(event) {
    if (event.target.classList.contains("cardItem")) {
        var jsonData = event.target.dataset.json;
        var tempMenuItem = MenuItem.createFromJson(jsonData);

        // Display temporary menu item information
        displayMenuItemInformation(tempMenuItem);
    }
}

/**
 * Handles the mouseout event on card items.
 */
function handleCardItemMouseOut() {
    // Revert displayed menu item information
    revertMenuItemInformation(menuItem);
}
function handleCardItemClick(event) {
    var item = event.target;
    if (item.classList.contains("cardItem")) {

        var jsonData = event.target.dataset.json;
        var data = JSON.parse(jsonData);

        // Populate menuItem
        currentMenuItem = new MenuItem(
            data.MenuId,
            data.Title,
            data.Image,
            Nutrition.createFromData(data.Nutrition.Nutrients),
            Servings.createFromData(data.Servings)
        );

        // Toggles clicked class
        item.classList.toggle("clicked");

        // Update total nutrients
        updateTotalNutrients(item);

        // Display nutrition on sidebar
        displayMenuItemInformation(currentMenuItem);
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
        var data = JSON.parse(jsonData);
        var tempMenuItem = new MenuItem(
            data.MenuId,
            data.Title,
            data.Image,
            Nutrition.createFromData(data.Nutrition.Nutrients),
            Servings.createFromData(data.Servings)
        );

        // Display temporary menu item information
        displayMenuItemInformation(tempMenuItem);
    }
}
function handleCardItemMouseOut() {
    // Revert displayed menu item information
    revertMenuItemInformation();
}

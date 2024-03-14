
/**
 * Displays the top nutrition label for a menu item including title, servings, calories, and daily value.
 * @param {MenuItem} menuItem - The menu item to display nutrition label for.
 * @param {HTMLElement} container - The container element to append the label to.
 */
function displayTopNutritionLabel(menuItem, container) {
    displayItemTitle(menuItem, container);
    displayServings(menuItem, container);
    displayCalories(menuItem, container);
    displayDailyValue(container);
}

/**
 * Displays the title of the menu item.
 * @param {MenuItem} menuItem - The menu item to display title for.
 * @param {HTMLElement} container - The container element to append the title to.
 */
function displayItemTitle(menuItem, container) {
    var headerDiv = createDivElement({ id: "headerDiv" });
    headerDiv.appendChild(createHeaderElement(menuItem.Title, 2, true));
    container.appendChild(headerDiv);
}

/**
 * Displays serving information for the menu item.
 * @param {MenuItem} menuItem - The menu item to display serving information for.
 * @param {HTMLElement} container - The container element to append the serving information to.
 */
function displayServings(menuItem, container) {
    var servingsDiv = createDivElement({ id: "servingsDiv" });
    servingsDiv.appendChild(createHeaderElement(`${menuItem.Servings.Number} serving per item`, 5));

    var servingSizeDiv = createDivElement({ id: "servingSizeDiv" });
    servingSizeDiv.style.display = "flex";
    servingSizeDiv.style.justifyContent = "space-between";

    servingSizeDiv.appendChild(createHeaderElement("Serving Size", 5));
    servingSizeDiv.appendChild(createHeaderElement(`${menuItem.Servings.Size} ${menuItem.Servings.Unit}`, 5, true));
    servingsDiv.appendChild(servingSizeDiv);
    container.appendChild(servingsDiv);
}

/**
 * Displays calorie information for the menu item.
 * @param {MenuItem} menuItem - The menu item to display calorie information for.
 * @param {HTMLElement} container - The container element to append the calorie information to.
 */
function displayCalories(menuItem, container) {
    var caloriesDiv = createDivElement({ id: "caloriesDiv" });
    caloriesDiv.appendChild(createHeaderElement("Amount Per Serving", 5, true));

    var caloriesNutrient = menuItem.Nutrition.getNutrientByName("Calories");
    var caloriesAmountDiv = createDivElement({ id: "caloriesAmountDiv" });
    caloriesAmountDiv.style.display = "flex";
    caloriesAmountDiv.style.justifyContent = "space-between";

    caloriesAmountDiv.appendChild(createHeaderElement("Calories", 2, true));
    caloriesAmountDiv.appendChild(createHeaderElement(`${caloriesNutrient.Amount}`, 2, true));

    caloriesDiv.appendChild(caloriesAmountDiv);
    container.appendChild(caloriesDiv);
}

/**
 * Displays the daily value information for the menu item.
 * @param {HTMLElement} container - The container element to append the daily value information to.
 */
function displayDailyValue(container) {
    var dailyValueDiv = createDivElement({ id: "dailyValueDiv" });
    dailyValueDiv.appendChild(createHeaderElement("% Daily Value*", 5, true));
    container.appendChild(dailyValueDiv);
}
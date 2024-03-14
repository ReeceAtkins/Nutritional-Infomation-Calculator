
/**
 * Formats the name of a nutrient based on the specified format.
 * @param {string} name - The name of the nutrient.
 * @param {string} format - The format to apply to the name ('bold', 'indent', or undefined).
 * @returns {string} - The formatted nutrient name.
 */
function formatNutrientName(name, format) {
    if (name.includes("Trans") && format) {
        return `<span style="padding-left: 10px;"><em>${name.split(" ")[0]}</em> ${name.split(" ")[1]}</span>`;
    }
    else if (format === "bold") {
        return `<strong>${name}</strong>`;
    }
    else if (format === "indent") {
        return `<span style="padding-left: 10px;">${name}</span>`;
    }
    return name;
}

/**
 * Creates a new <div> element with an optional ID and class.
 * @param {Object} [options] - An object containing options for the div element.
 * @param {string} [options.id] - The ID of the div element.
 * @param {string} [options.class] - The class of the div element.
 * @returns {HTMLDivElement} - The created div element.
 */
function createDivElement(options) {
    var divElement = document.createElement("div");
    if (options.id) {
        divElement.id = options.id;
    }
    if (options.class) {
        divElement.classList.add(options.class);
    }
    return divElement;
}

/**
 * Creates a new header element with specified text, level, and weight.
 * @param {string} text - The text content of the header.
 * @param {number} level - The level of the header (h1- h6).
 * @param {boolean} weight - Indicates whether the header should have bold font weight (true) or regular weight (false).
 * @returns {HTMLHeadingElement} - The created header element.
 */
function createHeaderElement(text, level, weight) {
    var header = document.createElement(`h${level}`);
    header.textContent = text;
    if (weight) {
        header.style.fontWeight = "bold";
    }
    return header;
}

/**
 * Clears the displayed menu item information from the DOM.
 */
function clearDisplayedMenuItem() {
    var nutritionInfoContainer = document.getElementById("nutritionInfo");
    nutritionInfoContainer.innerHTML = "";
}

/**
 * Reverts the displayed menu item information to its original state.
 * @param {MenuItem} menuItem - The menu item to revert information for.
 */
function revertMenuItemInformation(menuItem) {
    clearDisplayedMenuItem();
    if (menuItem) {
        displayMenuItemInformation(menuItem);
    }
}
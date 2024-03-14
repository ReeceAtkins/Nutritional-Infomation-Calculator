function formatNutrientName(name, format) {
    if (name.includes("Trans")) {
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

function createHeaderElement(text, level, weight) {
    var header = document.createElement(`h${level}`);
    header.textContent = text;
    if (weight) {
        header.style.fontWeight = "bold";
    }
    return header;
}

function clearDisplayedMenuItem() {
    var nutritionInfoContainer = document.getElementById("nutritionInfo");
    nutritionInfoContainer.innerHTML = "";
}

// Function to revert displayed menu item information
function revertMenuItemInformation(menuItem) {
    clearDisplayedMenuItem();
    if (menuItem) {
        displayMenuItemInformation(menuItem);
    }
}
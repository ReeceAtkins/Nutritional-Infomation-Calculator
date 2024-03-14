﻿
attachEventListeners();

var totalNutrients = new NutrientTotal();

function attachEventListeners() {
    document.addEventListener("click", handleCardItemClick);
    document.getElementById("clearTotal").addEventListener("click", handleClearTotalClick);
    document.addEventListener("mouseover", handleCardItemMouseOver);
    document.addEventListener("mouseout", handleCardItemMouseOut);
}

// Updates total nutrients based on clicked items
function updateTotalNutrients(item, currentMenuItem) {
    if (item) {
        if (item.classList.contains("clicked")) {
            totalNutrients.addNutrientsTotal(currentMenuItem);
        }
        else {
            totalNutrients.subtractNutrientsTotal(currentMenuItem);
        }
    }
}

function displayMenuItemInformation(menuItem) {
    var container = document.getElementById("nutritionInfo");
    container.innerHTML = "";

    displayTopNutritionLabel(menuItem, container);

    var list = createNutrientList(menuItem.Nutrition);
    var listDiv = createDivElement({ id: "nutrientList" });

    listDiv.appendChild(list);
    container.appendChild(listDiv);
}

function displayTotalNutrientInformation() {
    var container = document.getElementById("nutritionTotal");
    container.innerHTML = "";
    container.appendChild(createHeaderElement("Total Nutrients", 2, true));

    var nutrientOrder = getNutrientOrder(false);

    var leftContainer = createDivElement({ class: "halfContainer" });
    var rightContainer = createDivElement({ class: "halfContainer" });

    // Iterate over each nutrient in the defined order
    nutrientOrder.forEach((nutrientName, index) => {
        var nutrient = totalNutrients.Nutrition.getNutrientByName(nutrientName);
        if (nutrient) {
            var listItem = createNutrientListItem(nutrient);

            // Append list items to containers evenly
            if (index < nutrientOrder.length / 2) {
                leftContainer.appendChild(listItem);
            }
            else {
                rightContainer.appendChild(listItem);
            }
        }
    });

    container.appendChild(leftContainer);
    container.appendChild(rightContainer)
}

function createNutrientList(Nutrition) {
    var list = document.createElement("ul");
    var nutrientOrder = getNutrientOrder(true);

    var supplementList = createDivElement({ id: "supplementList" });
    var switchDiv = false;

    nutrientOrder.forEach((nutrientInfo) => {
        var nutrient = Nutrition.getNutrientByName(nutrientInfo.name);
        if (nutrient) {
            var listItem = createNutrientListItem(nutrient, nutrientInfo.format);

            // Check if current nutrient is on the nutrient 'Vitamin A'
            if (nutrient.Name === "Vitamin A") {
                switchDiv = true;
            }
            if (switchDiv) {
                supplementList.appendChild(listItem);
            }
            else {
                list.appendChild(listItem);
            }
        }
    });

    list.appendChild(supplementList);
    return list;
}

function createNutrientListItem(nutrient, format) {
    var listItem = document.createElement("li");

    var nameSpan = document.createElement("span");
    nameSpan.innerHTML = formatNutrientName(nutrient.Name, format);

    var amountSpan = document.createElement("span");
    amountSpan.textContent = ` ${nutrient.Amount}${nutrient.Unit}`;

    var percentSpan = document.createElement("span");
    percentSpan.innerHTML = `<span style="float: right;">${nutrient.PercentOfDailyNeeds}% </span>`;

    if (format && format !== "supplement") {
        percentSpan.style.fontWeight = "bold";
    }

    listItem.appendChild(nameSpan);
    listItem.appendChild(amountSpan);
    listItem.appendChild(percentSpan);

    return listItem;
}

function getNutrientOrder(format) {
    if (format) {
        return [
            { name: "Fat", format: "bold" },
            { name: "Saturated Fat", format: "indent" },
            { name: "Trans Fat", format: "italic" },
            { name: "Cholesterol", format: "bold" },
            { name: "Sodium", format: "bold" },
            { name: "Carbohydrates", format: "bold" },
            { name: "Fiber", format: "indent" },
            { name: "Sugar", format: "indent" },
            { name: "Protein", format: "bold" },
            { name: "Vitamin A", format: "supplement" },
            { name: "Vitamin C", format: "supplement" },
            { name: "Iron", format: "supplement" },
            { name: "Calcium", format: "supplement" }
        ];
    }
    return [
        "Fat", "Saturated Fat", "Trans Fat", "Cholesterol",
        "Sodium", "Carbohydrates", "Fiber", "Sugar",
        "Protein", "Vitamin A", "Vitamin C", "Iron", "Calcium"
    ]
}

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

function displayTotalNutrientInformation() {
    var container = document.getElementById("nutritionTotal");
    container.innerHTML = "";
    container.appendChild(createHeaderElement("Total Nutrients", 2, true));

    // Create two containers for each part of the list
    var leftContainer = createDivElement({ class: "halfContainer" })
    var rightContainer = createDivElement({ class: "halfContainer" });

    var nutrientOrder = [
        "Fat", "Saturated Fat", "Trans Fat", "Cholesterol",
        "Sodium", "Carbohydrates", "Fiber", "Sugar",
        "Protein", "Vitamin A","Vitamin C", "Iron", "Calcium"
    ];

    var midpoint = Math.ceil(nutrientOrder.length / 2);

    // Iterate over each nutrient in the defined order
    nutrientOrder.forEach((nutrientName, index) => {
        var nutrient = totalNutrients.Nutrition.getNutrientByName(nutrientName);
        if (nutrient) {
            var listItem = document.createElement("li");

            var percentSpan = document.createElement("span");
            percentSpan.textContent = `${nutrient.PercentOfDailyNeeds}%`;
            percentSpan.style.float = "right";

            listItem.textContent = `${nutrient.Name} ${nutrient.Amount}${nutrient.Unit}`;
            listItem.appendChild(percentSpan);

            // Append list items to the appropriate container based on the midpoint
            if (index < midpoint) {
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

function displayMenuItemInformation(menuItem) {

    var container = document.getElementById("nutritionInfo");

    // Clear existing content inside contianer
    container.innerHTML = "";

    displayTopNutritionLabel(menuItem, container);

    var list = createNutrientList(menuItem.Nutrition);

    var listDiv = createDivElement({ id: "nutrientList" });
    listDiv.appendChild(list);

    container.appendChild(listDiv);
}

function displayTopNutritionLabel(menuItem, container) {
    // Display item title
    var headerDiv = createDivElement({ id: "headerDiv" })
    headerDiv.appendChild(createHeaderElement(menuItem.Title, 2, true))
    container.appendChild(headerDiv);

    // Display servings
    var servingsDiv = createDivElement({ id: "servingsDiv" });
    servingsDiv.appendChild(createHeaderElement(`${menuItem.Servings.Number} serving per item`, 5));

    var servingSizeDiv = createDivElement({ id: "servingSizeDiv" });
    servingSizeDiv.style.display = "flex";
    servingSizeDiv.style.justifyContent = "space-between";

    servingSizeDiv.appendChild(createHeaderElement("Serving Size", 5));
    servingSizeDiv.appendChild(createHeaderElement(`${menuItem.Servings.Size} ${menuItem.Servings.Unit}`, 5, true));
    servingsDiv.appendChild(servingSizeDiv);
    container.appendChild(servingsDiv);

    // Display calories
    var caloriesDiv = createDivElement({ id: "caloriesDiv" });
    caloriesDiv.appendChild(createHeaderElement("Amount Per Serving", 5, true));

    var caloriesNutrient = menuItem.Nutrition.getNutrientByName("Calories");
    var caloriesAmountDiv = createDivElement({ id: "caloriesAmountDiv" });
    caloriesAmountDiv.style.display = "flex";
    caloriesAmountDiv.style.justifyContent = "space-between";

    caloriesAmountDiv.appendChild(createHeaderElement("Calories", 2, true))
    caloriesAmountDiv.appendChild(createHeaderElement(`${caloriesNutrient.Amount}`, 2, true));

    caloriesDiv.appendChild(caloriesAmountDiv)
    container.appendChild(caloriesDiv);

    // Display daily value
    var dailyValueDiv = createDivElement({ id: "dailyValueDiv" });
    dailyValueDiv.appendChild(createHeaderElement("% Daily Value*", 5, true));
    container.appendChild(dailyValueDiv);
}

function createNutrientList(Nutrition) {
    var list = document.createElement("ul");

    var nutrientOrder = [
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
    percentSpan.innerHTML = `<span style="float: right; font-weight: bold;">${nutrient.PercentOfDailyNeeds}% </span>`;

    if (format === "supplement") {
        percentSpan.style.fontWeight = "normal";
    }

    listItem.appendChild(nameSpan);
    listItem.appendChild(amountSpan);
    listItem.appendChild(percentSpan);

    return listItem;
}


var totalNutrients = new NutrientTotal();
var currentMenuItem = null;

document.addEventListener("click", function (event) {
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

        // If item already clicked, subtract from total
        if (item.classList.contains("clicked")) {
            item.classList.remove("clicked");
            totalNutrients.subtractNutrientsTotal(currentMenuItem);

            // Reset current menuItem
            currentMenuItem = null;

            document.getElementById("nutritionInfo").innerHTML = "";
            displayTotalNutrientInformation();
        }
        else {
            item.classList.add("clicked");

            totalNutrients.addNutrientsTotal(currentMenuItem);

            displayMenuItemInformation(currentMenuItem);
            displayTotalNutrientInformation();
        }
    }
});

document.getElementById("clearTotal").onclick = function () {
    // Reset total nutrients
    totalNutrients = new NutrientTotal();
    displayTotalNutrientInformation();

    // Remove currently displayed menuItem and reset currentMenuitem
    document.getElementById("nutritionInfo").innerHTML = "";
    menuItem = null;

    // Reset all currently clicked items
    var clickedItems = document.querySelectorAll(".clicked");
    clickedItems.forEach(item => {
        item.classList.remove("clicked");
    });
}

document.addEventListener("mouseover", function (event) {
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

        // Change color for display
        // document.getElementById("nutritionInfo").style.color = "green";

        displayMenuItemInformation(tempMenuItem);
    }
});

document.addEventListener("mouseout", function (event) {
    RevertMenuItemInformation();
});

function displayTotalNutrientInformation() {
    var container = document.getElementById("nutritionTotal");

    container.innerHTML = "";

    var header = document.createElement("h2");
    header.textContent = "Total Nutrients";
    container.appendChild(header);

    var list = document.createElement("ul");

    // Iterate over each nutrient in totalNutrients
    totalNutrients.Nutrition.Nutrients.forEach(nutrient => {
        var listItem = document.createElement("li");
        listItem.textContent = `${nutrient.Name}: ${nutrient.Amount} ${nutrient.Unit} (${nutrient.PercentOfDailyNeeds}% of daily needs)`;
        list.appendChild(listItem);
    });

    // Append the list to the container
    container.appendChild(list);
}

function displayMenuItemInformation(menuItem) {

    var container = document.getElementById("nutritionInfo");

    // Clear existing content inside contianer
    container.innerHTML = "";

    displayTopNutritionLabel(menuItem, container);



    var list = createNutrientList(menuItem);

    var listDiv = createDivElement("nutrientList");
    listDiv.appendChild(list);

    container.appendChild(listDiv);
}

function displayTopNutritionLabel(menuItem, container) {
    // Display item title
    var headerDiv = createDivElement("headerDiv")
    headerDiv.appendChild(createHeaderElement(menuItem.Title, true))
    container.appendChild(headerDiv);

    // Display servings
    var servingsDiv = createDivElement("servingsDiv");
    servingsDiv.appendChild(createSubheaderElement(`${menuItem.Servings.Number} serving per item`));

    var servingSizeDiv = createDivElement("servingSizeDiv");
    servingSizeDiv.style.display = "flex";
    servingSizeDiv.style.justifyContent = "space-between";

    servingSizeDiv.appendChild(createSubheaderElement("Serving Size"));
    servingSizeDiv.appendChild(createSubheaderElement(`${menuItem.Servings.Size} ${menuItem.Servings.Unit}`, true));
    servingsDiv.appendChild(servingSizeDiv);
    container.appendChild(servingsDiv);

    // Display calories
    var caloriesDiv = createDivElement("caloriesDiv");
    caloriesDiv.appendChild(createSubheaderElement("Amount Per Serving", true));

    var caloriesNutrient = menuItem.Nutrition.getNutrientByName("Calories");
    var caloriesAmountDiv = createDivElement("caloriesAmountDiv");
    caloriesAmountDiv.style.display = "flex";
    caloriesAmountDiv.style.justifyContent = "space-between";

    caloriesAmountDiv.appendChild(createHeaderElement("Calories", true))
    caloriesAmountDiv.appendChild(createHeaderElement(`${caloriesNutrient.Amount}`, true));

    caloriesDiv.appendChild(caloriesAmountDiv)
    container.appendChild(caloriesDiv);

    // Display daily value
    var dailyValueDiv = createDivElement("dailyValueDiv");
    dailyValueDiv.appendChild(createSubheaderElement("% Daily Value*", true));
    container.appendChild(dailyValueDiv);
}

function createNutrientList(menuItem) {
    var list = document.createElement("ul");

    var nutrientOrder = [
        { name: "Fat", format: "bold" },
        { name: "Saturated Fat", format: "indent" },
        { name: "Trans Fat", format: "italic" },
        { name: "Cholesterol", format: "bold" },
        { name: "Sodium", format: "bold" },
        { name: "Total Carbohydrate", format: "bold" },
        { name: "Fiber", format: "indent" },
        { name: "Sugar", format: "indent" },
        { name: "Protein", format: "bold" },
        { name: "Vitamin A", format: "normal" },
        { name: "Vitamin C", format: "normal" },
        { name: "Iron", format: "normal" },
        { name: "Calcium", format: "normal"}
    ];

    var supplementList = createDivElement("supplementList");
    var switchDiv = false;

    nutrientOrder.forEach((nutrientInfo) => {
        var nutrient = menuItem.Nutrition.getNutrientByName(nutrientInfo.name);
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

    // Format nutrient name
    if (format === "bold") {
        listItem.innerHTML = `<strong>${nutrient.Name}</strong>`;
    }
    else if (format === "indent") {
        listItem.textContent = `${nutrient.Name}`;
        listItem.style.paddingLeft = "10px";
    }
    else if (nutrient.Name.includes("Trans")) {
        var splitName = nutrient.Name.split(" ");
        listItem.innerHTML = `<em>${splitName[0]}</em> ${splitName[1]}`;
        listItem.style.paddingLeft = "10px"; // Add indentation for italicized nutrients
    }
    else {
        listItem.textContent = nutrient.Name; // Format normally
    }

    // Append nutrient amount and unit
    listItem.innerHTML += ` ${nutrient.Amount}${nutrient.Unit}`;

    // Format percentage
    var percentSpan = document.createElement("span");
    percentSpan.textContent = `${nutrient.PercentOfDailyNeeds}%`;

    if (nutrient.Name.includes("Vitamin") || nutrient.Name.includes("Iron")) {
        percentSpan.style.fontWeight = "normal";
    }
    else {
        percentSpan.style.fontWeight = "bold";
    }

    percentSpan.style.float = "right";
    listItem.appendChild(percentSpan);

    return listItem;
}

function createDivElement(id) {
    var divElement = document.createElement("div");
    divElement.id = id;
    return divElement;
}

function createHeaderElement(text, weight) {
    var header = document.createElement("h2");
    header.textContent = text;
    if (weight) {
        header.style.fontWeight = "bold";
    }
    return header;
}

function createSubheaderElement(text, weight) {
    var subheader = document.createElement("h5");
    subheader.textContent = text;
    if (weight) {
        subheader.style.fontWeight = "bold";
    }
    return subheader;
}

function RevertMenuItemInformation() {
    var container = document.getElementById("nutritionInfo");
    container.innerHTML = "";
    container.style.color = "";

    if (currentMenuItem) {
        displayMenuItemInformation(currentMenuItem);
    }
}
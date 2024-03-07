
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
    currentMenuItem = null;

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
        document.getElementById("nutritionInfo").style.color = "green";

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

    var header = document.createElement("h2");
    header.textContent = menuItem.Title;
    container.appendChild(header);

    var list = document.createElement("ul");

    // Iterate over each nutrient in the menu item
    menuItem.Nutrition.Nutrients.forEach(function (nutrient) {
        // Create list item for each nutrient
        var listItem = document.createElement("li");
        listItem.textContent = `${nutrient.Name}: ${nutrient.Amount} ${nutrient.Unit} (${nutrient.PercentOfDailyNeeds}% of daily needs)`;
        list.appendChild(listItem);
    });

    // Append the list to the container
    container.appendChild(list);
}

function RevertMenuItemInformation() {
    var container = document.getElementById("nutritionInfo");
    container.innerHTML = "";
    container.style.color = "";

    if (currentMenuItem) {
        displayMenuItemInformation(currentMenuItem);
    }
}
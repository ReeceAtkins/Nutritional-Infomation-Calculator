
var totalNutrients = new NutrientTotal();

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("btnItem")) {
        var jsonData = event.target.dataset.json;
        var data = JSON.parse(jsonData);

        // Populate menuItem
        var menuItem = new MenuItem(
            data.MenuId,
            data.Title,
            data.Image,
            Nutrition.createFromData(data.Nutrition.Nutrients),
            Servings.createFromData(data.Servings)
        );

        totalNutrients.addNutrientsTotal(menuItem)
        
        displayMenuItemInformation(menuItem)
        displayTotalNutrientInformation();
    }
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
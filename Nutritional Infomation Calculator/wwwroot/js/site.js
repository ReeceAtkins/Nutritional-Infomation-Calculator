
document.addEventListener("click", function (event) {

    if (event.target.classList.contains("btnItem")) {
        var jsonData = event.target.dataset.json;
        var data = JSON.parse(jsonData);

        var menuItem = new MenuItem(
            data.MenuId,
            data.Title,
            data.Image,
            new Nutrition(data.Nutrition.Nutrients.map(nutrient => new Nutrient(nutrient.Name, nutrient.Amount, nutrient.Unit, nutrient.PercentOfDailyNeeds))),
            new Servings(data.Servings.Number, data.Servings.Size, data.Servings.Unit)
        );

        console.log(menuItem.Title);

        displayInformation(menuItem)
    }
});

function displayInformation(menuItem) {
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

class MenuItem
{
    constructor(menuId, title, image, nutrition, servings) {
        MenuId = menuId;
        Title = title;
        Image = image;
        Nutrition = nutrition;
        Servings = servings;
    }
}

class Nutrient {
    constructor(name, amount, unit, percentOfDailyNeeds) {
        Name = name;
        Amount = amount;
        Unit = unit;
        PercentOfDailyNeeds = percentOfDailyNeeds
    }
}

class Nutrition {
    constructor(nutrients) {
        Nutrients = nutrients;
    }
}

class Servings {
    constructor(number, size, unit) {
        this.Number = number;
        Size = size;
        Unit = unit;
    }
}
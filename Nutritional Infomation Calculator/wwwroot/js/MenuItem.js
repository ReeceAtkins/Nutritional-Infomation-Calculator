class MenuItem {
    constructor(menuId, title, image, nutrition, servings) {
        this.MenuId = menuId;
        this.Title = title;
        this.Image = image;
        this.Nutrition = nutrition;
        this.Servings = servings;
    }
}

class Nutrient {
    constructor(name, amount, unit, percentOfDailyNeeds) {
        this.Name = name;
        this.Amount = amount;
        this.Unit = unit;
        this.PercentOfDailyNeeds = percentOfDailyNeeds;
    }
}

class Nutrition {
    constructor(nutrients) {
        this.Nutrients = nutrients;
    }
}

class Servings {
    constructor(number, size, unit) {
        this.Number = number;
        this.Size = size;
        this.Unit = unit;
    }
}

//export { MenuItem, Nutrient, Nutrition, Servings }
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
    constructor(nutrients = []) {
        this.Nutrients = nutrients;
    }

    static createFromData(nutrientsData) {
        const nutrients = nutrientsData.map(nutrient => new Nutrient(
            nutrient.Name,
            nutrient.Amount,
            nutrient.Unit,
            nutrient.PercentOfDailyNeeds
        ));
        return new Nutrition(nutrients);
    }

    addNutrient(nutrient) {
        this.Nutrients.push(nutrient);
    }

    getNutrientByName(name) {
        return this.Nutrients.find(nutrient => nutrient.Name === name);
    }
}

class Servings {
    constructor(number, size, unit) {
        this.Number = number;
        this.Size = size;
        this.Unit = unit;
    }

    static createFromData(servingsData) {
        return new Servings(
            servingsData.Number,
            servingsData.Size,
            servingsData.Unit
        );
    }
}

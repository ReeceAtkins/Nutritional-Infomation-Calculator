class NutrientTotal {
    constructor() {
        this.Nutrition = new Nutrition();
;
    }

    addNutrientsTotal(menuItem) {
        // Checks if a Nutrient exists
        menuItem.Nutrition.Nutrients.forEach(nutrient => {
            const existingNutrient = this.Nutrition.getNutrientByName(nutrient.Name);

            if (existingNutrient) {
                // If nutrient already exists, update its totals
                existingNutrient.Amount += nutrient.Amount;
                existingNutrient.PercentOfDailyNeeds += nutrient.PercentOfDailyNeeds;
            }
            else {
                // If nutrient doesn't exist, add it to the Nutrition object
                this.Nutrition.addNutrient(nutrient);
            }
        });
    }

    getNutrientByName(name) {
        return this.Nutrition.getNutrientByName(name);
    }

    // Removes all nutrients
    clear() {
        this.Nutrition.clear();
    }
}
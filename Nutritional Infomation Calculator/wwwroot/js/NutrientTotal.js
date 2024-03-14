class NutrientTotal {
    constructor() {
        this.Nutrition = new Nutrition();
;
    }

    addNutrientsTotal(menuItem) {
        // Checks if a Nutrient exists
        menuItem.Nutrition.Nutrients.forEach(nutrient => {
            const existingNutrient = this.getOrCreateNutrient(nutrient.Name, nutrient.Unit);

            existingNutrient.Amount += nutrient.Amount;
            existingNutrient.PercentOfDailyNeeds += nutrient.PercentOfDailyNeeds;
        });
    }

    subtractNutrientsTotal(menuItem) {
        menuItem.Nutrition.Nutrients.forEach(nutrient => {
            const existingNutrient = this.getOrCreateNutrient(nutrient.Name, nutrient.Unit);

            if (existingNutrient.Amount > 0) {
                existingNutrient.Amount -= nutrient.Amount;
                existingNutrient.PercentOfDailyNeeds -= nutrient.PercentOfDailyNeeds;
            }

            if (existingNutrient.Amount <= 0 || existingNutrient.PercentOfDailyNeeds <= 0) {
                this.removeNutrient(existingNutrient.Name);
            }
        });
    }

    getOrCreateNutrient(name, unit) {
        let existingNutrient = this.getNutrientByName(name);
        if (!existingNutrient) {
            existingNutrient = new Nutrient(name, 0, unit, 0); // Create a new nutrient if it doesn't exist
            this.Nutrition.addNutrient(existingNutrient);
        }
        return existingNutrient;
    }

    getNutrientByName(name) {
        return this.Nutrition.getNutrientByName(name);
    }

    removeNutrient(name) {
        this.Nutrition.removeNutrient(name);
    }

    // Removes all nutrients
    clear() {
        this.Nutrition.clear();
    }
}
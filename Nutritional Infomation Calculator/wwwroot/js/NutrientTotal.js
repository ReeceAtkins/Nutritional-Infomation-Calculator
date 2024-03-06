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

    subtractNutrientsTotal(menuItem) {
        menuItem.Nutrition.Nutrients.forEach(nutrient => {
            const existingNutrient = this.Nutrition.getNutrientByName(nutrient.Name);

            if (existingNutrient) {
                existingNutrient.Amount -= nutrient.Amount;
                existingNutrient.PercentOfDailyNeeds -= nutrient.PercentOfDailyNeeds;
            }

            // Check if the nutrient amount becomes zero after subtraction
            if (existingNutrient.Amount <= 0) {
                // Remove the nutrient from the list
                this.Nutrition.removeNutrient(existingNutrient.Name);
            }

            else { // Error
                console.log(`${existingNutrient} doesn't exist`)
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
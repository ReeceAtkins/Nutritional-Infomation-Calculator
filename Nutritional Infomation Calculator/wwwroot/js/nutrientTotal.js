
/**
 * Represents a collection of total nutrients accumulated from multiple menu items.
 */
class NutrientTotal {
    /**
     * Initializes a new NutrientTotal object.
     */
    constructor() {
        this.Nutrition = new Nutrition();
        ;
    }

    /**
     * Adds the total nutrients from a menu item to the accumulated total.
     * @param {MenuItem} menuItem - The menu item to add nutrients from.
     */
    addNutrientsTotal(menuItem) {
        // Checks if a Nutrient exists
        menuItem.Nutrition.Nutrients.forEach(nutrient => {
            const existingNutrient = this.getOrCreateNutrient(nutrient.Name, nutrient.Unit);

            existingNutrient.Amount += nutrient.Amount;
            existingNutrient.PercentOfDailyNeeds += nutrient.PercentOfDailyNeeds;
        });
    }

    /**
     * Subtracts the total nutrients from a menu item from the accumulated total.
     * @param {MenuItem} menuItem - The menu item to subtract nutrients from.
     */
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

    /**
     * Gets or creates a nutrient with the given name and unit.
     * @param {string} name - The name of the nutrient.
     * @param {string} unit - The unit of measurement for the nutrient.
     * @returns {Nutrient} - The existing or newly created nutrient object.
     */
    getOrCreateNutrient(name, unit) {
        var existingNutrient = this.getNutrientByName(name);
        if (!existingNutrient) {
            existingNutrient = new Nutrient(name, 0, unit, 0); // Create a new nutrient if it doesn't exist
            this.Nutrition.addNutrient(existingNutrient);
        }
        return existingNutrient;
    }

    /**
     * Gets a nutrient by its name.
     * @param {string} name - The name of the nutrient to retrieve.
     * @returns {Nutrient | undefined} - The nutrient object if found, otherwise undefined.
     */
    getNutrientByName(name) {
        return this.Nutrition.getNutrientByName(name);
    }

    /**
     * Removes a nutrient from the accumulated total by its name.
     * @param {string} name - The name of the nutrient to remove.
     */
    removeNutrient(name) {
        this.Nutrition.removeNutrient(name);
    }

    /**
     * Clears all accumulated nutrients.
     */
    clear() {
        this.Nutrition.clear();
    }
}

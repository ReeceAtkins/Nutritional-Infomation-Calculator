
/**
 * Represents a menu item
 */
class MenuItem {
    /**
     * Creates a new MenuItem object.
     * @param {string} menuId - The id of the menu item.
     * @param {string} title - The title of the menu item.
     * @param {string} image - The URL or reference to the image of the menu item.
     * @param {Nutrition} nutrition - An instance of the Nutrition class containing nutritional information.
     * @param {Servings} servings - An instance of the Servings class representing serving size details.
     */
    constructor(menuId, title, image, nutrition, servings) {
        this.MenuId = menuId;
        this.Title = title;
        this.Image = image;
        this.Nutrition = nutrition;
        this.Servings = servings;
    }

    /**
     * Creates a MenuItem object from JSON data.
     * @param {string} jsonData - The JSON data representing a MenuItem object.
     * @returns {MenuItem} - A new MenuItem object created from the JSON data.
     */
    static createFromJson(jsonData) {
        const data = JSON.parse(jsonData);
        return new MenuItem(
            data.MenuId,
            data.Title,
            data.Image,
            Nutrition.createFromData(data.Nutrition.Nutrients),
            Servings.createFromData(data.Servings)
        );
    }
}

/**
 * Represents a nutrient.
 */
class Nutrient {
    /**
     * Creates a new Nutrient object.
     * @param {string} name - The name of the nutrient.
     * @param {number} amount - The amount of the nutrient.
     * @param {string} unit - The unit of measurement for the nutrient.
     * @param {number} percentOfDailyNeeds - The percentage of the daily recommended intake for the nutrient.
     */
    constructor(name, amount, unit, percentOfDailyNeeds) {
        this.Name = name;
        this.Amount = amount;
        this.Unit = unit;
        this.PercentOfDailyNeeds = percentOfDailyNeeds;
    }
}

/**
 * Represents the nutritional information of a menu item.
 */
class Nutrition {
    /**
     * Creates a new Nutrition object.
     * @param {Array<Nutrient>} [nutrients=[]] - An array of Nutrient objects representing the nutritional components.
     */
    constructor(nutrients = []) {
        this.Nutrients = nutrients;
    }

    /**
     * Creates a Nutrition object from nutrient data.
     * @param {Array<Object>} nutrientsData - An array of nutrient data.
     * @returns {Nutrition} - A new Nutrition object created from the provided nutrient data.
     */
    static createFromData(nutrientsData) {
        const nutrients = nutrientsData.map(nutrient => new Nutrient(
            nutrient.Name,
            nutrient.Amount,
            nutrient.Unit,
            nutrient.PercentOfDailyNeeds
        ));
        return new Nutrition(nutrients);
    }

    /**
     * Adds a nutrient to the nutritional information.
     * @param {Nutrient} nutrient - The nutrient to be added.
     */
    addNutrient(nutrient) {
        this.Nutrients.push(nutrient);
    }

    /**
     * Removes a nutrient by name from the nutritional information.
     * @param {string} name - The name of the nutrient to be removed.
     */
    removeNutrient(name) {
        this.Nutrients = this.Nutrients.filter(nutrient => nutrient.Name !== name);
    }

    /**
     * Retrieves a nutrient by name from the nutritional information.
     * @param {string} name - The name of the nutrient to retrieve.
     * @returns {Nutrient|undefined} - The nutrient with the specified name, or undefined if not found.
     */
    getNutrientByName(name) {
        return this.Nutrients.find(nutrient => nutrient.Name === name);
    }
}

/**
 * Represents serving size details.
 */
class Servings {
    /**
     * Creates a new Servings object.
     * @param {number} number - The number of servings.
     * @param {number} size - The size of each serving.
     * @param {string} unit - The unit of measurement for the serving size.
     */
    constructor(number, size, unit) {
        this.Number = number;
        this.Size = size;
        this.Unit = unit;
    }

    /**
     * Creates a Servings object from serving size data.
     * @param {Object} servingsData - The serving size data.
     * @returns {Servings} - A new Servings object created from the provided serving size data.
     */
    static createFromData(servingsData) {
        return new Servings(
            servingsData.Number,
            servingsData.Size,
            servingsData.Unit
        );
    }
}

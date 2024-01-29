﻿namespace Nutritional_Infomation_Calculator.Models
{
    /// <summary>
    /// Represents all the nutrients in a menu item
    /// </summary>
    public class Nutrition
    {
        /// <summary>
        /// The list of nutrients inside a menu item
        /// </summary>
        public List<Nutrient> Nutrients { get; set; }
    }
}

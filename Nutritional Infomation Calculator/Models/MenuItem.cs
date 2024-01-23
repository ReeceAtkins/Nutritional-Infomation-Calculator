using System.ComponentModel.DataAnnotations;

namespace Nutritional_Infomation_Calculator.Models
{
    /// <summary>
    /// Represents a single menu item
    /// </summary>
    public class MenuItem
    {
        [Key]
        public int MenuId { get; set; }

        /// <summary>
        /// Name of menu item
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// The menu item's image url
        /// </summary>
        public string ImageUrl { get; set; }

        /// <summary>
        /// The number of calories
        /// </summary>
        public int Calories { get; set; }

        /// <summary>
        /// The amount of total fat measured in grams
        /// </summary>
        public int TotalFat { get; set; }

        /// <summary>
        /// The amount of fatuared fat measured in grams
        /// </summary>
        public int SatuaratedFat { get; set; }

        /// <summary>
        /// The amount of Dietary Fiber measured in grams
        /// </summary>
        public int DietaryFiber { get; set; }

        /// <summary>
        /// The amount of Protein measured in grams
        /// </summary>
        public int Protein { get; set; }

        /// <summary>
        /// The amount of Carbohydrates measured in grams
        /// </summary>
        public int Carbohydrates { get; set; }

        /// <summary>
        /// The amount of Sodium measured in grams
        /// </summary>
        public int Sodium { get; set; }

        /// <summary>
        /// The amount of Sugar measured in grams
        /// </summary>
        public int Sugar { get; set; }

        /// <summary>
        /// The amount of Cholesterol meaured in milligrams
        /// </summary>
        public int Cholesterol { get; set; }

        /// <summary>
        /// The amount of Calcium measured in grams
        /// </summary>
        public int Calcium { get; set; }

        /// <summary>
        /// The amount of Vitamin A meaured in milligrams
        /// </summary>
        public int VitaminA {  get; set; }

        /// <summary>
        /// The amount of Vitamin B meaured in milligrams
        /// </summary>
        public int VitaminB { get; set; }

        /// <summary>
        /// The amount of Vitamin C meaured in milligrams
        /// </summary>
        public int VitaminC { get; set; }
    }
}

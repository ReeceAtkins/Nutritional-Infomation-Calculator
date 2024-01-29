using Nutritional_Infomation_Calculator.Data;
using System.ComponentModel.DataAnnotations;

namespace Nutritional_Infomation_Calculator.Models
{
    /// <summary>
    /// Represents a single menu item
    /// </summary>
    public class MenuItem
    {
        /// <summary>
        /// The menu item's unique id
        /// </summary>
        [Key]
        public int MenuId { get; set; }

        /// <summary>
        /// Name of menu item
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// The menu item's image url
        /// </summary>
        public string Image { get; set; }

        /// <summary>
        /// The menu item's nutritional information 
        /// </summary>
        public Nutrition Nutrition { get; set; } = new Nutrition();

        /// <summary>
        /// The menu item's Servings information
        /// </summary>
        public Servings Servings { get; set; } = new Servings();
    }
}

namespace Nutritional_Infomation_Calculator.Models
{
    /// <summary>
    /// Represents the serving information for a menu item
    /// </summary>
    public class Servings
    {
        /// <summary>
        /// The numbe of servings
        /// </summary>
        public double Number {  get; set; }

        /// <summary>
        /// The size of each servings
        /// </summary>
        public double Size { get; set; }

        /// <summary>
        /// The measurement of the servings size.
        /// Ex. "g" for grams
        /// </summary>
        public string Unit { get; set; }
    }
}

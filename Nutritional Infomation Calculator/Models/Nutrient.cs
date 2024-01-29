namespace Nutritional_Infomation_Calculator.Models
{
    /// <summary>
    /// Represents a single nutrient
    /// </summary>
    public class Nutrient
    {
        /// <summary>
        /// The name of the nutrient
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// The number of nutrients
        /// </summary>
        public double Amount { get; set; }

        /// <summary>
        /// The unit that the nutrient is measured in
        /// </summary>
        public string Unit { get; set; }

        /// <summary>
        /// The percentage of a humans daily need of the nutrient
        /// </summary>
        public double PercentOfDailyNeeds { get; set; }
    }
}

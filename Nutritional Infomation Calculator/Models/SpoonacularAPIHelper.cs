using Newtonsoft.Json;
using Nutritional_Infomation_Calculator.Data;

namespace Nutritional_Infomation_Calculator.Models
{
    public class SpoonacularAPIHelper
    {
        private readonly HttpClient _httpClient;
        private readonly MenuContext _context;
        private const string SpoonacularApiKey = "8b1856901dc94ea9b4aa6a0a1e90a95e";

        public SpoonacularAPIHelper(HttpClient httpClient, MenuContext context)
        {
            _httpClient = httpClient;
            _context = context;
        }

        /// <summary>
        /// Contacts the API and retrives all menu items and information
        /// </summary>
        /// <returns>A list of Menu Items</returns>
        public async Task<List<MenuItem>> GetMenuItems()
        {
            List<MenuItem>? menuItems = new List<MenuItem>();

            try
            {
                string apiendpoint = "https://api.spoonacular.com/food/menuItems/search";

                // expected results
                string expectedNumResults = "25"; // This should be 74 and the current number is temperary

                // query parameters
                var queryparams = new Dictionary<string, string>
                {
                    { "apiKey", SpoonacularApiKey },
                    { "query", "papa johns" },
                    { "addMenuItemInformation", "True" },
                    { "number", expectedNumResults }
                };

                // Construct full URL
                var uriBuilder = new UriBuilder(apiendpoint)
                {
                    Query = new FormUrlEncodedContent(queryparams).ReadAsStringAsync().Result
                };

                // Make GET request
                HttpResponseMessage response = await _httpClient.GetAsync(uriBuilder.Uri);

                if (response.IsSuccessStatusCode)
                {
                    string jsonResponse = await response.Content.ReadAsStringAsync();

                    var menuItemResponse = JsonConvert.DeserializeObject<MenuItemResponse>(jsonResponse);
                    menuItems = menuItemResponse?.MenuItems;

                }
                else
                {
                    Console.WriteLine($"Error: {response.StatusCode}");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception: {ex.Message}");
            }

            return menuItems;
        }

        /// <summary>
        /// Saves a list of MenuItems to the database
        /// </summary>
        /// <param name="menuItems">The list of MenuItems</param>
        public async Task AddMenuItemsToDatabase(List<MenuItem> menuItems)
        {
            foreach (MenuItem menuItem in menuItems)
            {
                _context.MenuItems.Add(menuItem);
            }
            await _context.SaveChangesAsync();
        }


        public class MenuItemResponse
        {
            public List<MenuItem> MenuItems { get; set; }
        }
    }
}

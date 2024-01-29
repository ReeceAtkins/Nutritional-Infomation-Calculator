using Newtonsoft.Json;

namespace Nutritional_Infomation_Calculator.Models
{
    public class SpoonacularAPIHelper
    {
        private readonly HttpClient _httpClient;
        private const string SpoonacularApiKey = "8b1856901dc94ea9b4aa6a0a1e90a95e";

        public SpoonacularAPIHelper(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        /// <summary>
        /// Contacts the API and gets all Menu Items
        /// </summary>
        /// <returns>A list of Menu Items</returns>
        public async Task<List<MenuItem>> GetMenuItems()
        {
            List<MenuItem>? menuItems = new List<MenuItem>();

            try
            {
                string apiendpoint = "https://api.spoonacular.com/food/menuItems/search";

                // expected results
                string expectedNumResults = "2"; // This should be 74 and the current is temperary

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

        public class MenuItemResponse
        {
            public List<MenuItem> MenuItems { get; set; }
        }
    }
}

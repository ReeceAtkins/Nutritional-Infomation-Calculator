using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nutritional_Infomation_Calculator.Data;
using Nutritional_Infomation_Calculator.Models;
using System.Diagnostics;

namespace Nutritional_Infomation_Calculator.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly SpoonacularAPIHelper _apiHelper;
        private readonly MenuContext _context;

        public HomeController(ILogger<HomeController> logger, SpoonacularAPIHelper apiHelper,
            MenuContext context)
        {
            _logger = logger;
            _apiHelper = apiHelper;
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            List<MenuItem> menuItems = await (from MenuItem in _context.MenuItems
                                                   select MenuItem).ToListAsync();

            // Checks if menuItems are already in the database
            if (menuItems.Count == 0)
            {
                menuItems = await _apiHelper.GetMenuItems();

                await _apiHelper.AddMenuItemsToDatabase(menuItems);
            }

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

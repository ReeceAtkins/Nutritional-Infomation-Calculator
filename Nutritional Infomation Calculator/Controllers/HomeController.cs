using Microsoft.AspNetCore.Mvc;
using Nutritional_Infomation_Calculator.Models;
using System.Diagnostics;

namespace Nutritional_Infomation_Calculator.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly SpoonacularAPIHelper _apiHelper;

        public HomeController(ILogger<HomeController> logger, SpoonacularAPIHelper apiHelper)
        {
            _logger = logger;
            _apiHelper = apiHelper;
        }

        public async Task<IActionResult> Index()
        {
            List<MenuItem> menuItems = await _apiHelper.GetMenuItems();
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

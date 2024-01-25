using Microsoft.EntityFrameworkCore;
using Nutritional_Infomation_Calculator.Models;

namespace Nutritional_Infomation_Calculator.Data
{
    public class MenuContext : DbContext
    {
        public MenuContext(DbContextOptions<MenuContext> options)
                : base(options)
        {
        }

        public DbSet<MenuItem> MenuItems { get; set; }
    }
}

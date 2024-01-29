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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Tells EF Core that nutrition owns many nutrients
            modelBuilder.Entity<MenuItem>()
                .OwnsOne(m => m.Nutrition, nutrition =>
                {
                    nutrition.OwnsMany(n => n.Nutrients);
                });
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<MenuItem> MenuItems { get; set; }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Nutritional_Infomation_Calculator.Migrations
{
    /// <inheritdoc />
    public partial class RestructedMenuItem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Calcium",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "Calories",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "Carbohydrates",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "Cholesterol",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "DietaryFiber",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "Protein",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "SatuaratedFat",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "ServingSize",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "Sodium",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "Sugar",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "TotalFat",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "VitaminA",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "VitaminB",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "VitaminC",
                table: "MenuItems");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "MenuItems",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "MenuItems",
                newName: "Servings_Unit");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "MenuItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "Servings_Number",
                table: "MenuItems",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Servings_Size",
                table: "MenuItems",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateTable(
                name: "Nutrient",
                columns: table => new
                {
                    NutritionMenuItemMenuId = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Amount = table.Column<double>(type: "float", nullable: false),
                    Unit = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PercentOfDailyNeeds = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nutrient", x => new { x.NutritionMenuItemMenuId, x.Id });
                    table.ForeignKey(
                        name: "FK_Nutrient_MenuItems_NutritionMenuItemMenuId",
                        column: x => x.NutritionMenuItemMenuId,
                        principalTable: "MenuItems",
                        principalColumn: "MenuId",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Nutrient");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "Servings_Number",
                table: "MenuItems");

            migrationBuilder.DropColumn(
                name: "Servings_Size",
                table: "MenuItems");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "MenuItems",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "Servings_Unit",
                table: "MenuItems",
                newName: "ImageUrl");

            migrationBuilder.AddColumn<int>(
                name: "Calcium",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Calories",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Carbohydrates",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Cholesterol",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "DietaryFiber",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Protein",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SatuaratedFat",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ServingSize",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Sodium",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Sugar",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalFat",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "VitaminA",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "VitaminB",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "VitaminC",
                table: "MenuItems",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}

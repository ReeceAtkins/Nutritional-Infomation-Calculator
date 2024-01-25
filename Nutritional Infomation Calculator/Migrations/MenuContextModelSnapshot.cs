﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Nutritional_Infomation_Calculator.Data;

#nullable disable

namespace Nutritional_Infomation_Calculator.Migrations
{
    [DbContext(typeof(MenuContext))]
    partial class MenuContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Nutritional_Infomation_Calculator.Models.MenuItem", b =>
                {
                    b.Property<int>("MenuId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("MenuId"));

                    b.Property<int>("Calcium")
                        .HasColumnType("int");

                    b.Property<int>("Calories")
                        .HasColumnType("int");

                    b.Property<int>("Carbohydrates")
                        .HasColumnType("int");

                    b.Property<int>("Cholesterol")
                        .HasColumnType("int");

                    b.Property<int>("DietaryFiber")
                        .HasColumnType("int");

                    b.Property<string>("ImageUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Protein")
                        .HasColumnType("int");

                    b.Property<int>("SatuaratedFat")
                        .HasColumnType("int");

                    b.Property<int>("ServingSize")
                        .HasColumnType("int");

                    b.Property<int>("Sodium")
                        .HasColumnType("int");

                    b.Property<int>("Sugar")
                        .HasColumnType("int");

                    b.Property<int>("TotalFat")
                        .HasColumnType("int");

                    b.Property<int>("VitaminA")
                        .HasColumnType("int");

                    b.Property<int>("VitaminB")
                        .HasColumnType("int");

                    b.Property<int>("VitaminC")
                        .HasColumnType("int");

                    b.HasKey("MenuId");

                    b.ToTable("MenuItems");
                });
#pragma warning restore 612, 618
        }
    }
}

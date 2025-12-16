namespace PosApi.Models;

public class Product
{
  public string ID { get; set; } = "";
  public string Name { get; set; } = "";
  public string Category { get; set; } = "";
  public int Price { get; set; }
  public int Stock { get; set; }

  public Product(string id, string name, string category, int price, int stock)
  {
    ID = id;
    Name = name;
    Category = category;
    Price = price;
    Stock = stock;
  }
}
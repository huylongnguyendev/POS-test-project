
using System.Text.Json.Serialization;

namespace PosApi.Models
{
  public class CartItem
  {
    public Guid Id { get; set; } = Guid.NewGuid();
    public string ProductId { get; set; } = "";
    public string Name { get; set; } = "";
    public int Price { get; set; }
    public int Quantity { get; set; }

  }

  public class Cart
  {

    public Guid Id { get; set; } = Guid.NewGuid();
    public List<CartItem> Items { get; set; } = new();
  }
}
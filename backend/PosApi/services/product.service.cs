using PosApi.Models;

namespace PosApi.Services;

public class ProductService
{
  private readonly List<Product> _products = new()
  {
    new Product("product01", "Áo thun nam basic", "Áo", 120000, 50),
    new Product("product02", "Áo sơ mi trắng nữ", "Áo", 250000, 40),
    new Product("product03", "Quần jeans xanh nam", "Quần", 350000, 30),
    new Product("product04", "Quần short kaki", "Quần", 180000, 25),
    new Product("product05", "Áo khoác hoodie nam", "Áo", 320000, 20),
    new Product("product06", "Váy maxi hoa", "Váy", 500000, 15),
    new Product("product07", "Áo sơ mi caro", "Áo", 280000, 35),
    new Product("product08", "Quần tây công sở", "Quần", 400000, 20),
    new Product("product09", "Giày thể thao Adidas", "Giày", 1200000, 10),
    new Product("product10", "Giày sneaker Converse", "Giày", 950000, 12),
    new Product("product11", "Giày cao gót nữ", "Giày", 750000, 18),
    new Product("product12", "Giày sandal nữ", "Giày", 400000, 22),
    new Product("product13", "Giày boot da", "Giày", 1500000, 8),
    new Product("product14", "Dép lê Adidas", "Giày", 350000, 30),
    new Product("product15", "Mũ lưỡi trai", "Phụ kiện", 80000, 60),
    new Product("product16", "Thắt lưng da nam", "Phụ kiện", 220000, 25),
    new Product("product17", "Túi xách nữ", "Phụ kiện", 650000, 12),
    new Product("product18", "Túi tote canvas", "Phụ kiện", 180000, 40),
    new Product("product19", "Đồng hồ Casio", "Phụ kiện", 1200000, 10),
    new Product("product20", "Khăn choàng cổ len", "Phụ kiện", 220000, 20),
  };

  public IEnumerable<Product> GetAll(string? searchFilter)
  {
    if (!string.IsNullOrEmpty(searchFilter))
      return _products.Where(p =>
        p.Name.Contains(searchFilter, StringComparison.OrdinalIgnoreCase)
      );
    else
      return _products;
  }
}
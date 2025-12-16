using Microsoft.AspNetCore.Mvc;
using PosApi.Models;
using PosApi.Services;

namespace PosApi.Controllers;

[ApiController]
[Route("api/v1/products")]
public class ProductsController : ControllerBase
{
  private readonly ProductService _productService = new ProductService();

  public ProductsController(ProductService productService)
  {
    _productService = productService;
  }

  [HttpGet]
  public IActionResult GetAll(
    [FromQuery] string? searchFilter
  )
  {
    IEnumerable<Product> products;
    products = _productService.GetAll(searchFilter);
    return Ok(products);
  }
}
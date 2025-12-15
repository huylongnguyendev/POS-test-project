using Microsoft.AspNetCore.Mvc;
using PosApi.Modules;
using PosApi.Services;

namespace PosApi.Controllers;

[ApiController]
[Route("api/v1/products")]
public class ProductsController : ControllerBase
{
  private readonly ProductService _service = new ProductService();

  public ProductsController() { }

  [HttpGet]
  public IActionResult GetAll()
  {
    return Ok(_service.GetAll());
  }
}
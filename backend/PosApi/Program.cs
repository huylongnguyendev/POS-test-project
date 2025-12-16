using PosApi.Services;

var builder = WebApplication.CreateBuilder();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "POS API",
        Version = "v1",
        Description = "API cho hệ thống POS demo"
    });
});
builder.Services.AddControllers();
builder.Services.AddSignalR();
builder.Services.AddCors(option =>
{
  option.AddDefaultPolicy(policy =>
  {
    policy
    .WithOrigins("http://localhost:5173")
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials();
  });
});

builder.Services.AddSingleton<ProductService>();
builder.Services.AddSingleton<CartService>();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "POS API v1");
    c.RoutePrefix = "swagger"; // truy cập qua /swagger
});

app.UseCors();
app.UseHttpsRedirection();
app.MapControllers();

app.Run();
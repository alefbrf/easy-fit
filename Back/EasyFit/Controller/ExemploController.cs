using Microsoft.AspNetCore.Mvc;

namespace EasyFit.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class ExemploController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetTest()
        {
            return Ok("Teste");
        }
    }
}

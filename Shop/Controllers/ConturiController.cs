using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shop.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using Shop.Data.EFCore;
using Shop.Models;

namespace Shop.Controllers
{
    [Route("api/[controller]/[action]/{id?}")]
    public class ConturiController : ControllerBase
    {
        public EFCoreItemsRepository itemsRepository; // initializare - empty
        public ConturiController(IConfiguration configuration, ApplicationDbContext context, IHostingEnvironment _env)
        {
            itemsRepository = new EFCoreItemsRepository(configuration, context, _env);
        }

        // API
        [HttpGet]
        public IActionResult GetAccounts()
        {
            // If we find something then we return it in json format
            if (itemsRepository.GetAllAccounts().Count > 0)
            {
                return Ok(itemsRepository.GetAllAccounts());
            }

            // If nothing was found we just return 200 which means that the api works and the others know that is not some api problem
            return StatusCode(200);
        }

        [HttpPost]
        public IActionResult AddAccount([FromBody] Conturi conturi)
        {
            itemsRepository.AddAccounts(conturi);

            return StatusCode(200);
        }

        [HttpPost]
        public IActionResult AddCeva([FromBody] Test test)
        {
            return Ok(test);
        }
    }

    public class Test
    {
        public string Ceva { get; set; }
    }
}

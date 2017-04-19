using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace TypeScriptPrimer.Controllers
{
    public class ExamplesController : Controller
    {
        public ViewResult Declarations()
        {
            return View();
        }

        [Route("data-types")]
        public ViewResult DataTypes()
        {
            return View();
        }
    }
}

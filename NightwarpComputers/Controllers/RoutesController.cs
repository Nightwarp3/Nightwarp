using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NightwarpComputers.Controllers
{
    public class RoutesController : Controller
    {
        // GET: Routes
        public ActionResult Home()
        {
            return View();
        }
        public ActionResult Order()
        {
            return View();
        }
    }
}
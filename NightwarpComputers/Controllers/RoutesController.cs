using System;
using System.Web.Mvc;
using System.Collections.Generic;
using NightwarpComputers.Content;

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
        public ActionResult Submitted(string email, int orderId)
        {
            ViewBag.Email = email;
            ViewBag.OrderId = orderId;
            return View();
        }
    }
}
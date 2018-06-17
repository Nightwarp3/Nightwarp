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
        public ActionResult OrderSubmitted(string orderData)
        {
            SendNotifications send = new SendNotifications();
            bool mailSent = send.SendNotificationEmail(orderData);
            // Eventually write orderData to a DB, then return the DB's ID for the Order #

            ViewBag.MailSent = mailSent;
            return View();
        }
    }
}
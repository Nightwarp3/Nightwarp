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
        public ActionResult SendNotification(string[] orderData)
        {
            ViewBag.Data = orderData;
            SendNotifications send = new SendNotifications();
            bool mailSent = send.SendNotificationEmail(orderData);

            if (mailSent)
            {
                Console.WriteLine("Email Sent");
                return View();
            }
            else
            {
                Console.WriteLine("Email NOT Sent");
                return View();
            }
        }
    }
}
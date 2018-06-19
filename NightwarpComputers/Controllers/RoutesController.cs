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
            Dictionary<string, string> orderDict = GetOrderDictionary(orderData);
            string orderID = DateTime.Now.ToString("yyyymmddhhmmss");
            orderDict.Add("OrderID", orderID);

            bool requestMailSent = send.SendNewRequestAlert(orderID, orderData);
            bool confirmMailSent = false;
            // Only send confirmation email if the New Request alert email was successful.
            if (requestMailSent)
            {
                string orderReceived = String.Format("We have received your order: {0}. Please review the order below:\r\n\r\n{1}", orderID, orderData.Replace(",", "\r\n"));
                confirmMailSent = send.SendNotificationEmail(new string[] { orderDict["Email"] }, "Request Received: " + orderID, orderReceived);
            }
            // Eventually write orderData to a DB, Dictionary will help with that :), then return the DB's ID for the Order #

            ViewBag.RequestMailSent = requestMailSent;
            ViewBag.ConfirmMailSent = confirmMailSent;
            ViewBag.RequestID = orderID;
            return View();
        }

        public Dictionary<string, string> GetOrderDictionary(string order)
        {
            Dictionary<string, string> orderDict = new Dictionary<string, string>();
            string[] orderArr = order.Split(',');
            foreach (string item in orderArr)
            {
                string[] keyVal = item.Split(':');
                orderDict.Add(keyVal[0], keyVal[1]);
            }

            return orderDict;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NightwarpComputers.Models;

namespace NightwarpComputers.Content
{
    internal static class SubmitOrder
    {
        public static bool SendOrder(string json)
        {
            bool status = false;

            Order order = new Order();
            order.SetValuesFromJson(json);

            InsertOrderInDB(order);
            //SendNotifications emailClient = new SendNotifications();

            return status;
        }

        private static void InsertOrderInDB(Order order)
        {
            Console.WriteLine(order);
        }
    }
}
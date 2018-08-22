using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace NightwarpComputers
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Home",
                url: "Home",
                defaults: new { action = "Home" }
            );

            routes.MapRoute(
                name: "Order",
                url: "Order",
                defaults: new { controller = "OrderInterface", action = "Order" }
            );

            routes.MapRoute(
                name: "Submitted",
                url: "Submitted/{email}/{orderId}",
                defaults: new { controller = "OrderSucessController", action = "Submitted" }
                );
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using NightwarpComputers.Models;

namespace NightwarpComputers.DataAccess
{
    public class OrderInitializer : DropCreateDatabaseIfModelChanges<OrderContext>
    {
        protected override void Seed(OrderContext context)
        {
            var orders = new List<Order>
            {
                new Order{Name="Mike Campbell", Phone="555-555-5555", Email="test@test.com", ContactMethod="Either", OrderMethod="buildOnly", ShipMethod="pickup", Parts="Builder's Choice"},
                new Order{Name="Mike", Phone="4355128850", Email="mdcampb93@gmail.com", ContactMethod="Email", OrderMethod="orderBuild", ShipMethod="ship", BuildMethod="preferences", Parts="AMD Ryzen 3, Integrated Graphics, ASUS Motherboard, Black and Blue, Blu-Ray Drive (Writable), RAM: 2 x 2GB", Usage="Gaming", PriceLimit="$2000.00", StreetAddress="1358 W 1925 S 1234", City="Logan", State="UT", Zip="84321"}
            };
        }
    }
}
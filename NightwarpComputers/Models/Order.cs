using System;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Web;

namespace NightwarpComputers.Models
{
    public class Order
    {
        /*public Order()
        {
            Parts = new Dictionary<string, string>();
            DateSubmitted = new DateTime();
        }*/
        public int OrderId { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string ContactMethod { get; set; }
        public string OrderMethod { get; set; }
        public string Usage { get; set; }
        public string PriceLimit { get; set; }
        public string ShipMethod { get; set; }
        public string StreetAddress { get; set; }
        public string StreetAddress2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string BuildMethod { get; set; }
        public string Parts { get; set; }
        public DateTime DateSubmitted { get; set; }

        /*public void SetValuesFromJson(string jsonString)
        {
            // Convert string Json to Json Object, then populate into a Dictionary
            Dictionary<string, string> orderDict = JObject.Parse(jsonString).ToObject<Dictionary<string, string>>();

            // Populate Order properties with Dictionary values
            Name = orderDict["name"];
            Phone = orderDict["phone"];
            Email = orderDict["email"];
            ContactMethod = orderDict["contactPref"];
            OrderMethod = orderDict["buildType"];
            BuildMethod = orderDict["partPreference"];

            switch (OrderMethod)
            {
                case "orderOnly":
                    Usage = orderDict["useType"];
                    PriceLimit = orderDict["priceLimit"];
                    StreetAddress = orderDict["streetAddress1"];
                    StreetAddress2 = orderDict["streetAddress2"];
                    City = orderDict["city"];
                    State = orderDict["state"];
                    Zip = int.Parse(orderDict["zip"]);
                    break;
                case "buildOnly":
                    ShipMethod = orderDict["deliveryType"];
                    break;
                case "orderBuild":
                    ShipMethod = orderDict["deliveryType"];
                    Usage = orderDict["useType"];
                    PriceLimit = orderDict["priceLimit"];
                    break;
            }
            switch (ShipMethod)
            {
                case "ship":
                    StreetAddress = orderDict["streetAddress1"] + orderDict["streetAddress2"];
                    City = orderDict["city"];
                    State = orderDict["state"];
                    Zip = int.Parse(orderDict["zip"]);
                    break;
            }

            // Determine which values will be in Dictionary to avoid exceptions.
            switch (BuildMethod)
            {
                case "preferences":
                    Parts.Add("Processor", orderDict["processorType"] + orderDict["processorModel"]);
                    Parts.Add("Motherboard", orderDict["motherboard"]);
                    break;
                case "upload":
                    Parts.Add("Link", orderDict["partsListLink"]);
                    break;
                default:
                    Parts.Add("Preference", "Builder's Choice");
                    break;
            }
        }*/
    }
}
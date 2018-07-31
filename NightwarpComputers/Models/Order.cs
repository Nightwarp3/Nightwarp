using System;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Web;

namespace NightwarpComputers.Models
{
    public class Order
    {
        public Order()
        {
            DateSubmitted = new DateTime();
            Fees = new int[2];
            Parts = "";
        }
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
        // Better way to handle fees.... possibly another entity using a navigation property?
        public int[] Fees { get; set; }

        public Dictionary<string, string> ToDictionary()
        {
            Dictionary<string, string> keyValuePairs = new Dictionary<string, string>
            {
                { "OrderID:", OrderId.ToString() },
                { "Order Date:", DateSubmitted.ToShortDateString() },
                { "Order Fee:", "$" + Fees[0].ToString() },
                { "Build Fee:", "$" + Fees[1].ToString() },
                { "Full Name:", Name },
                { "Phone:", Phone },
                { "Email Address:", Email },
                { "Contact Preference:", ContactMethod },
                { "Order Type:", OrderMethod },
                { "Usage:", Usage },
                { "Price Limit:", PriceLimit },
                { "Shipping Method:", ShipMethod },
                { "Shipping Address:", string.Format("{0}, {1} {2}, {3} {4}", StreetAddress, StreetAddress2, City, State, Zip) },
                { "Build Preference:", BuildMethod },
                { "Additional Parts:", Parts }
            };

            return keyValuePairs;
        }

        public void SetValuesFromJson(string jsonString)
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
            Fees[0] = int.Parse(orderDict["orderFee"]);
            Fees[1] = int.Parse(orderDict["buildFee"]);

            switch (OrderMethod)
            {
                case "orderOnly":
                    Usage = orderDict["useType"];
                    PriceLimit = orderDict["priceLimit"];
                    StreetAddress = orderDict["streetAddress1"];
                    StreetAddress2 = orderDict["streetAddress2"];
                    City = orderDict["city"];
                    State = orderDict["state"];
                    Zip = orderDict["zip"];
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
                    Zip = orderDict["zip"];
                    break;
            }

            // Determine which values will be in Dictionary to avoid exceptions.
            switch (BuildMethod)
            {
                case "preferences":
                    Parts += "Processor: " + orderDict["processorType"] + orderDict["processorModel"] + "\r\n";
                    Parts += "Motherboard: " + orderDict["motherboard"] + "\r\n";
                    Parts += "Graphics: " + orderDict["graphics"] + "\r\n";
                    Parts += "Memory: " + orderDict["numOfSticks"] + " x " + orderDict["memPerStick"] + "GB\r\n";
                    Parts += "Color: " + orderDict["colorPref"] + "\r\n";
                    Parts += "Extras: " + orderDict["extras"];
                    break;
                case "upload":
                    Parts += "Link: " + orderDict["partsListLink"];
                    break;
                default:
                    Parts += "Builder's Choice";
                    break;
            }
        }
    }
}
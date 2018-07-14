using System;
using System.Collections.Generic;
using Newtonsoft;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NightwarpComputers.Controllers
{
    public class OrderWebApiController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void PostOrder([FromBody]string order)
        {
            NightwarpComputers.Content.SubmitOrder.SendOrder(order);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
using System;
using System.Net;
using System.Net.Mail;
using System.Collections.Generic;
using NightwarpComputers.Models;

namespace NightwarpComputers.Content
{
    public static class SendNotifications
    {
        public static void SendNotification(Order order)
        {
            SmtpClient client = SetupSmtpClient();
            MailMessage message = SetupMailMessage(order);
            client.Send(message);
        }

        private static MailMessage SetupMailMessage(Order order)
        {
            string messageBody = "";
            MailMessage msg = new MailMessage()
            {
                From = new MailAddress("NightwarpComputers@outlook.com"),
                Subject = "New Order Request - " + order.OrderId
            };
            msg.Bcc.Add(new MailAddress("mdcampb93@gmail.com"));
            msg.To.Add(new MailAddress(order.Email));

            Dictionary<string, string> orderInfo = order.ToDictionary();
            foreach (var pair in orderInfo)
            {
                if (!string.IsNullOrEmpty(pair.Value))
                    messageBody += pair.Key + " " + pair.Value + "\r\n";
            }
            msg.Body = messageBody;

            return msg;
        }

        private static SmtpClient SetupSmtpClient()
        {
            SmtpClient client = new SmtpClient("smtp.office365.com", 587)
            {
                Credentials = new NetworkCredential("NightwarpComputers@outlook.com", Environment.GetEnvironmentVariable("APPSETTING_EMAILPASSWORD")),
                EnableSsl = true
            };

            return client;
        }
    }
}

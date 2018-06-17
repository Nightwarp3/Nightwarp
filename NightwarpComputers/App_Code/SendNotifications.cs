using System;
using System.Net;
using System.Net.Mail;
using System.Collections.Generic;
using System.Web;

namespace NightwarpComputers.Content
{
    public class SendNotifications
    {
        public bool mailSent;

        public SendNotifications()
        {
            mailSent = false;
        }

        public bool SendNotificationEmail(string orderData)
        {
            SmtpClient client = SetupSmtpClient();
            MailMessage message = SetupMailMessage(orderData);

            try
            {
                client.Send(message);
                mailSent = true;
            }
            catch (Exception e)
            {
                client.Dispose();
            }
            client.Dispose();
            return mailSent;
        }

        private static MailMessage SetupMailMessage(string order)
        {
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("NightwarpComputers@outlook.com");
            msg.To.Add(new MailAddress("mdcampb93@gmail.com"));
            msg.Subject = "New Order Request - " + DateTime.Now.ToString("yyyymmddhhmmss");
            msg.Body = order.Replace(",", "\r");
            return msg;
        }

        private SmtpClient SetupSmtpClient()
        {
            SmtpClient client = new SmtpClient("smtp.office365.com", 587)
            {
                Credentials = new NetworkCredential("NightwarpComputers@outlook.com", password),
                EnableSsl = true
            };

            return client;
        }
    }
}
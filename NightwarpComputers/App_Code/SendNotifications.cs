using System;
using System.Net;
using System.Net.Mail;
using System.Linq;
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

        public bool SendNewRequestAlert(string orderID, string request)
        {
            SmtpClient client = SetupSmtpClient();
            string subject = "New Order Request - " + orderID;
            MailMessage msg = SetupMailMessage(new string[]{ "mdcampb93@gmail.com" }, subject, request.Replace(",", "\r\n"));
            return SendMail(client, msg);
        }

        public bool SendNotificationEmail(string[] to, string subject, string message)
        {
            SmtpClient client = SetupSmtpClient();
            MailMessage msg = SetupMailMessage(to, subject, message);
            return SendMail(client, msg);
        }

        private bool SendMail(SmtpClient client, MailMessage msg)
        {
            try
            {
                client.Send(msg);
                mailSent = true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            client.Dispose();
            return mailSent;
        }

        private static MailMessage SetupMailMessage(string[] to, string sub, string body)
        {
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("NightwarpComputers@outlook.com");
            foreach (string address in to)
            {
                msg.To.Add(new MailAddress(address));
            }
            msg.Subject = sub;
            msg.Body = body;
            return msg;
        }

        private SmtpClient SetupSmtpClient()
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

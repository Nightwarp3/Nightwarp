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
            try
            {
                SmtpClient client = SetupSmtpClient();
                MailMessage message = SetupMailMessage(orderData);

                client.Send(message);

                client.Dispose();
                return mailSent;
            }
            catch
            {
                return mailSent;
            }
        }

        private static MailMessage SetupMailMessage(string order)
        {
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("mdcampb93@gmail.com");
            msg.To.Add(new MailAddress("swimmerboi93@hotmail.com"));
            msg.Body = order;
            return msg;
        }

        private SmtpClient SetupSmtpClient()
        {
            SmtpClient client = new SmtpClient();
            client.Credentials = new NetworkCredential(userName, password);
            client.UseDefaultCredentials = true;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.EnableSsl = true;
            client.Timeout = 100000;
            client.SendCompleted += Client_SendCompleted;

            return client;
        }

        private void Client_SendCompleted(object sender, System.ComponentModel.AsyncCompletedEventArgs e)
        {
            mailSent = true;
        }
    }
}
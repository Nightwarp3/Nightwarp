using System;
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

        public bool SendNotificationEmail(string[] orderData)
        {
            try
            {
                SmtpClient client = SetupSmtpClient();
                MailMessage message = SetupMailMessage(orderData);

                client.Send(message);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }

            return mailSent;
        }

        private static MailMessage SetupMailMessage(string[] order)
        {
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("OrderRequest@nightwarpcomps.com");
            msg.To.Add(new MailAddress("mdcampb93@gmail.com"));
            msg.Body = string.Join(",", order);
            return msg;
        }

        private SmtpClient SetupSmtpClient()
        {
            SmtpClient client = new SmtpClient("127.0.0.1", 25);
            client.SendCompleted += Client_SendCompleted;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            return client;
        }

        private void Client_SendCompleted(object sender, System.ComponentModel.AsyncCompletedEventArgs e)
        {
            mailSent = true;
        }
    }
}
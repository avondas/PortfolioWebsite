using DotNetEnv;
using MailKit.Net.Smtp;
using MimeKit;

namespace PortfolioWebsite.Models;

public class ContactModel
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Message { get; set; }

    public bool SendMail()
    {
        //? Loads from the env file
        Env.Load();
        
        //? set up the email
        var email = new MimeMessage();
        
        email.From.Add(new MailboxAddress(Name, Email));
        email.To.Add(new MailboxAddress("Avienda", Env.GetString("MAIL_TO")));
        
        email.Subject = "Let's Connect!";
        email.Body = new TextPart(MimeKit.Text.TextFormat.Text) { 
            Text = Message
        };
        
        //? send the email
        using (var smtp = new SmtpClient())
        {
            smtp.Connect(Env.GetString("HOST"), Env.GetInt("PORT"), false);
        
            smtp.Authenticate(Env.GetString("USERNAME"), Env.GetString("PASSWORD"));
            try
            {
                smtp.Send(email);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
            finally
            {
                smtp.Disconnect(true);
            }
        }        
        return true;
    }
}
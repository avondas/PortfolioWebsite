using Microsoft.AspNetCore.Mvc;
using PortfolioWebsite.Models;
using System.Diagnostics;

namespace PortfolioWebsite.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Skills()
        {
            ViewBag.Frontend = new List<string> { "CSS", "Tailwind", "HTML", "JavaScript" };
            ViewBag.Backend = new List<string> { "C#", "Python", "PHP", "ASP.NET MVC", "Blade" };
            return View();
        }
        
        public IActionResult Projects()
        {
            return View();
        }
        
        public IActionResult Contact()
        {
            return View();
        }
        
        public IActionResult ContactMe(ContactModel contactModel)
        {
            if (ModelState.IsValid)
            {
                bool succes = contactModel.SendMail();
                return RedirectToAction("Index");
            }
            else
            {
                return View("Contact", contactModel);
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
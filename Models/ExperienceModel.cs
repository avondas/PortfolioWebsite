using System.Collections;

namespace PortfolioWebsite.Models;

public class ExperienceModel : IEnumerable
{
    public string Name { get; set; }
    public string Description { get; set; }
    public int Years { get; set; }
    
    public ExperienceModel(string name, string description, int years)
    {
        Name = name;
        Description = description;
        Years = years;
    }

    public static ExperienceModel[] GetExperience()
    {
        ExperienceModel[] experience = {
            new("CSS", "FrontEnd", 6),
            new("Tailwind" , "FrontEnd", 1),
            new("HTML", "FrontEnd", 6),
            new("JavaScript", "FrontEnd", 2),
            new("C#", "BackEnd", 3),
            new("Python", "BackEnd", 4),
            new("PHP", "BackEnd", 6),
            new("ASP.NET MVC", "BackEnd", 3),
            new("Blade", "BackEnd", 1)
        };

        return experience;
    }
}

// ViewBag.Frontend = new List<string> {  , , ,  };
// ViewBag.Backend = new List<string> { "C#", "Python", "PHP", "ASP.NET MVC", "Blade" };
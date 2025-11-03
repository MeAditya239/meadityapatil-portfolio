import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Java Full Stack Developer Intern",
      company: "Archer Infotech",
      period: "Aug 2024 - Jun 2025",
      description: "Designed and implemented an AI-based automation feature within the company's web application using Java + Spring Boot.",
      achievements: [
        "Designed and implemented AI-based automation feature using Java + Spring Boot",
        "Improved backend performance by refactoring core modules, reducing API response time",
        "Contributed to full-stack development with backend APIs and frontend integration"
      ]
    },
    {
      role: "Python-Django Intern",
      company: "Elite Softwares, Pune, India",
      period: "Dec 2023 - Feb 2024",
      description: "Developed a Blood Donation Web Application using Python and Django, enabling donor registration, request handling, and data management.",
      achievements: [
        "Built Blood Donation Web Application with donor registration and request handling",
        "Integrated platform with backend databases and optimized server-side logic",
        "Collaborated in agile environment for end-to-end feature development and testing"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          My professional journey
        </p>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                  <p className="text-foreground/80 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Key Achievements:</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex}
                          className="flex items-start text-foreground/80"
                        >
                          <span className="text-secondary font-bold mr-2 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

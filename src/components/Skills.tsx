import { Code2, Database, Box, Laptop, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C++", "C"]
    },
    {
      icon: Box,
      title: "Frameworks & Libraries",
      skills: ["Spring / Spring Boot", "React", "Hibernate", "Tailwind CSS", "Bootstrap"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      icon: Laptop,
      title: "Tools & Platforms",
      skills: ["Git / GitHub", "Docker", "Postman", "VS Code / IntelliJ IDEA", "Maven / Gradle", "AWS"]
    },
    {
      icon: Settings,
      title: "Architecture & Best Practices",
      skills: ["REST APIs", "Microservices", "OOP / Design Patterns", "Data Structures & Algorithms", "MVC Architecture", "Unit Testing (JUnit, Mockito)", "Agile / Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technologies and tools I work with
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-background rounded-lg text-sm font-medium text-foreground border border-border hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

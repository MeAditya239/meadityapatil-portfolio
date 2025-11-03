import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.) – Artificial Intelligence & Data Science",
      institution: "Dr. D. Y. Patil College of Engineering and Innovation",
      period: "2021 - 2025",
      description: "Specialized in AI, Machine Learning, and Full-Stack Development with strong foundation in distributed computing and algorithms.",
      achievements: ["First Class with Distinction", "Web Development", "AI & Machine Learning", "Data Structures & Algorithms", "Distributed Computing"]
    },
    {
      degree: "Higher Secondary (Class 12)",
      institution: "Amrita Vidyalayam Jr. College — Maharashtra Board",
      period: "2021",
      description: "Completed higher secondary education with focus on science stream.",
      achievements: ["Percentage: 85.17%"]
    },
    {
      degree: "Secondary (Class 10)",
      institution: "Mahatma Gandhi Vidyalaya Varangaon — Maharashtra Board",
      period: "2019",
      description: "Completed secondary education with strong academic performance.",
      achievements: ["Percentage: 88.80%"]
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          My academic journey
        </p>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground font-medium mb-3">{edu.institution}</p>
                  <p className="text-foreground/80 mb-4">{edu.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <span 
                        key={achIndex}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-lg text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
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

export default Education;

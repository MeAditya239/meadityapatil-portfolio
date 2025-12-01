import { ExternalLink, Github, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Email Reply Generator",
      description: "A Chrome Extension integrated with Gmail that automatically generates smart email replies using a Spring Boot backend and Google Gemini AI. It observes the Gmail DOM to extract email content and generates context-aware replies with selectable tone options (Professional / Casual / Friendly).",
      technologies: ["Spring Boot", "Google Gemini API", "React.js", "Chrome Extension", "Java", "JavaScript", "REST APIs"],
      videoUrl: "https://www.youtube.com/watch?v=OJUFBfKRPpA",
      githubUrl: "https://github.com/MeAditya239/Email-Reply-Generator"
    },
    {
      title: "E-Commerce Full Stack Application",
      description: "Full-stack e-commerce platform with Spring Boot, Hibernate, and MySQL backend, featuring JWT authentication, Razorpay payment integration, and a responsive React.js frontend with Redux state management.",
      technologies: ["Spring Boot", "React.js", "Redux", "MySQL", "Hibernate", "Razorpay", "Tailwind CSS"],
      liveUrl: "https://e-commerce-frontened.vercel.app/",
      githubUrl: "https://github.com/MeAditya239/E-Commerce-Frontened"
    },
    {
      title: "AI-Driven Job Matching and User Identification System",
      description: "AI-powered job matching system using Python and SQL to recommend jobs based on user skills and preferences, with AI-driven resume screening and intelligent candidate profile analysis.",
      technologies: ["Python", "SQL", "AI/ML", "Resume Screening", "Data Analysis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Pixel Art Editor",
    description: "A browser-based pixel art editor built with React and JavaScript, featuring an intuitive grid-based canvas, custom color palette, drawing tools, eraser, undo/redo, and export-to-image functionality for creating retro-style pixel artwork.",
    technologies: ["React.js", "JavaScript", "CSS", "HTML5 Canvas"],
    liveUrl: "https://pixel-art-editor-eta.vercel.app/",
    githubUrl: "https://github.com/MeAditya239/Pixel-Art-Editor"
}
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Some of my recent work
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-foreground/80 mb-4 ">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.videoUrl && (
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                      <Youtube className="w-4 h-4 mr-2" />
                      Demo Video
                    </a>
                  </Button>
                )}
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <Button 
                    size="sm" 
                    variant="outline"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

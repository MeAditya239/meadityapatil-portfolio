import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-card to-muted">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Hello, I'm Aditya Sandip Patil
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Java Full Stack Developer
            </p>
          </div>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-in-delay">
            I build software that solves real business problems — efficiently and at scale
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
          
          <button 
            onClick={() => scrollToSection("about")}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-8 h-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

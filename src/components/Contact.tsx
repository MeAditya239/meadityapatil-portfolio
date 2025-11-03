import { Mail, Github, Linkedin, Twitter, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    { icon: Github, url: "https://github.com/MeAditya239/", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/ap2003/", label: "LinkedIn" },
    { icon: Twitter, url: "https://x.com/AdityaPatil239", label: "Twitter" },
    { icon: Mail, url: "mailto:patiladityas239@gmail.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          I'm always open to new opportunities and collaborations
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card text-center animate-scale-in">
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="flex items-center gap-2 text-foreground/80">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Pune, India</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+919307076614" className="hover:text-primary transition-colors">+91 9307076614</a>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:patiladityas239@gmail.com" className="hover:text-primary transition-colors">patiladityas239@gmail.com</a>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hi, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-hero hover:opacity-90 transition-opacity mb-8"
              onClick={() => window.location.href = 'mailto:patiladityas239@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send me an email
            </Button>
            
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <social.icon className="w-5 h-5" />
                  {social.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

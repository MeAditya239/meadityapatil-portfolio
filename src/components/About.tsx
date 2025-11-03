const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-hero bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a Software Developer specializing in Java, Spring, and full-stack application development. 
              I have hands-on experience building production-ready projects, including AI-driven systems, 
              and I enjoy turning business requirements into clean, scalable software.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              What drives me is solving real-world problems through technology and continuously 
              improving my craft. I believe in writing maintainable code that not only works 
              but scales efficiently in production environments.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, staying updated 
              with the latest industry trends, and contributing to projects that make a difference.
            </p>
          </div>
          
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card animate-scale-in">
            <h3 className="text-2xl font-bold mb-6 text-primary">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-secondary font-bold mr-3">→</span>
                <span className="text-foreground/80">Based in Varangaon, India</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary font-bold mr-3">→</span>
                <span className="text-foreground/80">Available for freelance opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary font-bold mr-3">→</span>
                <span className="text-foreground/80">Open to remote work</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary font-bold mr-3">→</span>
                <span className="text-foreground/80">Continuous learner and problem solver</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

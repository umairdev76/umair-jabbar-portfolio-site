import { useEffect, useState } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-placeholder.jpg';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20 float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end order-1 lg:order-2 ${
            isVisible ? 'fade-in' : 'opacity-0'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img 
                  src={profileImage} 
                  alt="Muhammad Umair Jabbar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className={`text-center lg:text-left order-2 lg:order-1 ${
            isVisible ? 'slide-up' : 'opacity-0'
          }`}>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xl text-muted-foreground">Hello, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="hero-text">Muhammad</span>
                  <br />
                  <span className="hero-text">Umair Jabbar</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-foreground/80">
                  Frontend Developer | UI/UX Designer
                </h2>
              </div>

              <p className="text-lg text-muted-foreground max-w-xl">
                Building beautiful, responsive, and user-friendly web experiences. 
                Passionate about modern web technologies and creating intuitive digital solutions.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-primary hover:bg-primary-glow button-glow text-lg px-8 py-3 h-auto"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3 h-auto transition-all duration-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="https://linkedin.com/in/umairjabbarfrontenddeveloper" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border/20 rounded-full hover:bg-primary hover:border-primary transition-all duration-300 button-glow group"
                >
                  <Linkedin className="h-5 w-5 group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="https://github.com/umairdev76" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border/20 rounded-full hover:bg-primary hover:border-primary transition-all duration-300 button-glow group"
                >
                  <Github className="h-5 w-5 group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="mailto:umairjabbarm@gmail.com"
                  className="p-3 bg-card border border-border/20 rounded-full hover:bg-primary hover:border-primary transition-all duration-300 button-glow group"
                >
                  <Mail className="h-5 w-5 group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div 
              onClick={scrollToTop}
              className="text-2xl font-bold hero-text cursor-pointer hover:opacity-80 transition-opacity"
            >
              Muhammad Umair Jabbar
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Frontend Developer & UI/UX Designer passionate about creating beautiful, 
              responsive web experiences that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/umairjabbarfrontenddeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 button-glow group"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/umairjabbar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 button-glow group"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:umairjabbarm@gmail.com"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 button-glow group"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 capitalize"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a 
                  href="mailto:umairjabbarm@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  umairjabbarm@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span>{' '}
                <a 
                  href="tel:03229629177"
                  className="hover:text-primary transition-colors duration-200"
                >
                  0322-9629177
                </a>
              </p>
              <p>
                <span className="font-medium">Location:</span> Sunny Park, Lahore
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Muhammad Umair Jabbar. All rights reserved.
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
              <span>using React.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
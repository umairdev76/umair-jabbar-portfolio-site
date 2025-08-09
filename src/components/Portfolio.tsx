import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code, Database, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Book Management System',
      description: 'A comprehensive digital library management system with user authentication, book catalog, borrowing system, and admin dashboard for managing inventory.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Local Storage'],
      category: 'Web Application',
      icon: Database,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['User Authentication', 'Book Catalog', 'Borrowing System', 'Admin Dashboard']
    },
    {
      id: 2,
      title: 'Gym Sport Zone Website',
      description: 'Modern fitness center website featuring membership plans, trainer profiles, class schedules, and online booking system with responsive design.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      category: 'Business Website',
      icon: Code,
      gradient: 'from-purple-500 to-pink-500',
      features: ['Membership Plans', 'Trainer Profiles', 'Class Schedules', 'Online Booking'],
      demoLink: "https://gymsportzone.netlify.app/"
    },
    {
      id: 3,
      title: 'Exporting E-Commerce Store',
      description: 'Full-featured e-commerce platform for export businesses with product catalog, shopping cart, payment integration, and order management system.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Payment APIs'],
      category: 'E-Commerce',
      icon: Palette,
      gradient: 'from-orange-500 to-red-500',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management'],
      demoLink: "https://sport-zone-export.netlify.app/"
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-14">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="hero-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects that demonstrate my skills in modern web development and design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${isVisible ? 'slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="h-full bg-card-gradient card-glow hover:shadow-[0_0_50px_hsl(256_100%_65%_/_0.3)] transition-all duration-500 group overflow-hidden">
                
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      
                      <Button
                        size="sm"
                        className="bg-primary/90 hover:bg-primary text-primary-foreground"
                        onClick={() => window.open(project.demoLink, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-background/90 hover:bg-primary"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                      <project.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Project Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-1">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="text-xs border-primary/20 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className={`mt-16 text-center ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <Card className="bg-card-gradient card-glow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">
                Interested in <span className="hero-text">Collaborating?</span>
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new projects and bring innovative ideas to life. 
                Let's discuss how we can create something amazing together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-primary hover:bg-primary-glow button-glow text-lg px-8 py-3 h-auto"
                >
                  Let's Work Together
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://github.com/umairdev76', '_blank')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3 h-auto" >
                  <Github className="mr-2 h-5 w-5" />
                  View All Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
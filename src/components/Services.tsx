import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Code,
      title: 'Frontend Web Development',
      description: 'Creating clean, responsive, and cross-browser compatible websites using modern technologies like React.js, HTML5, CSS3, and JavaScript.',
      features: [
        'Responsive Design',
        'Modern Frameworks',
        'Cross-browser Compatibility',
        'Performance Optimization'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces using Figma and translating them into interactive experiences that delight users and drive engagement.',
      features: [
        'User Interface Design',
        'Prototyping with Figma',
        'User Experience Planning',
        'Interactive Components'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Website Optimization',
      description: 'Enhancing website speed, structure, and performance for better scalability, SEO, and overall user experience across all devices.',
      features: [
        'Performance Auditing',
        'SEO Optimization',
        'Code Optimization',
        'Scalability Planning'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-muted/5">
      <div className="container mx-auto px-14">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="hero-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${isVisible ? 'slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="h-full bg-card-gradient card-glow hover:shadow-[0_0_50px_hsl(256_100%_65%_/_0.3)] transition-all duration-500 group cursor-pointer">
                <CardContent className="p-8 h-full flex flex-col">
                  
                  {/* Service Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Service Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <Button
                    onClick={scrollToContact}
                    variant="ghost"
                    className="mt-auto p-2 h-auto w-fit text-primary hover:text-primary-glow justify-start group/btn"
                  >
                    <span className="mr-2">Get Started</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className={`mt-16 text-center ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <Card className="bg-card-gradient card-glow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your <span className="hero-text">Project?</span>
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with modern web technologies and creative design solutions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="bg-primary hover:bg-primary-glow button-glow text-lg px-8 py-3 h-auto"
                >
                  Start a Project
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3 h-auto"
                >
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
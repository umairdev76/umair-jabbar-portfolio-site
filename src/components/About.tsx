import { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
const About = () => {
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

  const education = [
    {
      degree: "BSc in Computer Science",
      institution: "University of Gujrat",
      period: "2021 - 2025",
      icon: GraduationCap,
      location: "Gujrat, Pakistan"
    },
    {
      degree: "FSc Pre-Engineering",
      institution: "Punjab Group of Colleges, Sambrial",
      period: "2019 - 2021",
      icon: GraduationCap,
      location: "Sambrial, Pakistan"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/5">
      <div className="container mx-auto px-14">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="hero-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a strong foundation in computer science and a love for creating digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Bio Section */}
          <div className={`space-y-6 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-6 hero-text">My Story</h3>
            <Card className="bg-card-gradient card-glow">
              <CardContent className="p-8">
                
                <div className="space-y-1 text-muted-foreground leading-relaxed">
                  <p>
                    I am Muhammad Umair Jabbar, a recent graduate from the University of Gujrat with a passion for frontend web development. I enjoy creating modern, responsive, and user-friendly websites that provide exceptional user experiences.
                  </p>
                  <p>
                    I am currently building my skills through practical projects and continuous learning. With the help of AI tools like ChatGPT, I strive to stay updated with the latest trends in web design and development.
                  </p>
                  <p>
                    My goal is to combine my technical knowledge with creative design thinking to develop solutions that not only look great but also solve real-world problems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Section */}
          <div className={`space-y-6 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6 hero-text">Education</h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card-gradient card-glow hover:shadow-[0_0_50px_hsl(256_100%_65%_/_0.3)] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <edu.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-medium mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> 
          </div>
        </div>
         {/* Quick Stats */}
        <div className="flex justify-center mt-16">
      <Card className="bg-card-gradient card-glow max-w-2xl w-full">
        <CardContent className="p-6">
          <h4 className="text-lg font-semibold mb-4 text-center">Quick Facts</h4>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">2024</div>
              <div className="text-sm text-muted-foreground">Graduate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Passion</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
      </div>
    </section>
  );
};

export default About;
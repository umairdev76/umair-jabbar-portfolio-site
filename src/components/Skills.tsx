import { useEffect, useRef, useState } from 'react';
import { Code, Palette, GitBranch, Brain, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
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

  const technicalSkills = [
    { name: 'HTML5', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', level: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'React.js', level: 75, color: 'from-cyan-500 to-blue-500' },
    { name: 'Tailwind CSS', level: 75, color: 'from-cyan-500 to-blue-500' },
    { name: 'Git & GitHub', level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'C++', level: 70, color: 'from-green-500 to-emerald-500' },
    { name: 'OOP', level: 70, color: 'from-green-500 to-emerald-500' },
  ];

  const softSkills = [
    { name: 'Project Management', icon: Brain, description: 'Planning and executing projects efficiently' },
    { name: 'Time Management', icon: Clock, description: 'Organizing tasks and meeting deadlines' },
    { name: 'Leadership', icon: Users, description: 'Guiding teams and taking initiative' },
    { name: 'Problem Solving', icon: Code, description: 'Finding creative solutions to complex challenges' },
    { name: 'UI/UX Design', icon: Palette, description: 'Creating intuitive and beautiful interfaces' },
    { name: 'Version Control', icon: GitBranch, description: 'Managing code with Git and collaboration' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-14">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="hero-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A blend of technical expertise and soft skills that drive successful project delivery
          </p>
        </div>

        {/* Grid with Equal Height Cards */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Technical Skills Column */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-center lg:text-left mb-4">
              <span className="hero-text">Technical Skills</span>
            </h3>
            <Card className={`bg-card-gradient card-glow flex-1 transition-all duration-700 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
              <CardContent className="p-8  flex-col justify-center h-full">
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={skill.name} className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_currentColor]`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills Column */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-center lg:text-left mb-4">
              <span className="hero-text">Soft Skills</span>
            </h3>
            <Card className={`bg-card-gradient card-glow flex-1 transition-all duration-700 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <div className="grid gap-4">
                  {softSkills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-start space-x-4 bg-background/50 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <skill.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;

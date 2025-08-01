import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  type: "personal" | "professional";
  image?: string;
  github?: string;
  demo?: string;
  company?: string;
}

interface ProjectCarouselProps {
  title: string;
  projects: Project[];
  type: "personal" | "professional";
}

const ProjectCarousel = ({ title, projects, type }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  if (projects.length === 0) return null;

  const currentProject = projects[currentIndex];

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-8 text-center">
        <span className="bg-gradient-primary bg-clip-text text-transparent">
          {title}
        </span>
      </h3>

      <div className="relative max-w-4xl mx-auto">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl mb-2">{currentProject.title}</CardTitle>
                {currentProject.company && (
                  <p className="text-primary font-medium">{currentProject.company}</p>
                )}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                type === 'personal' 
                  ? 'bg-primary/20 text-primary' 
                  : 'bg-accent/20 text-accent-foreground'
              }`}>
                {type === 'personal' ? 'Pessoal' : 'Profissional'}
              </span>
            </div>
          </CardHeader>
          
          <CardContent>
            {/* Project Image */}
            {currentProject.image ? (
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-200 object-cover rounded-lg mb-6"
              />
            ) : (
              <div className="w-full h-64 bg-muted rounded-lg mb-6 flex items-center justify-center">
                <Code className="text-muted-foreground" size={48} />
              </div>
            )}

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {currentProject.description}
            </p>

            {/* Technologies */}
            {currentProject.technologies && currentProject.technologies.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Tecnologias Utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              {currentProject.github && (
                <Button variant="outline" size="sm" asChild>
                  <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={16} />
                    GitHub
                  </a>
                </Button>
              )}
              {currentProject.demo && (
                <Button size="sm" asChild>
                  <a href={currentProject.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={16} />
                    Ver Demo
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        {projects.length > 1 && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft size={16} />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight size={16} />
            </Button>
          </>
        )}

        {/* Dots Indicator */}
        {projects.length > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCarousel;
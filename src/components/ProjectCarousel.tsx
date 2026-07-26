import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  type: "personal" | "professional";
  github?: string;
  company?: string;
}

interface ProjectCarouselProps {
  title: string;
  projects: Project[];
  type: "personal" | "professional";
}

const AUTOPLAY_MS = 5000;

const ProjectCarousel = ({ title, projects, type }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  }, [projects.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (projects.length <= 1 || isPaused) return;

    const timer = setInterval(nextSlide, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [projects.length, isPaused, nextSlide]);

  if (projects.length === 0) return null;

  const currentProject = projects[currentIndex];

  return (
    <div className="mb-16">
      <h3 className="text-xl font-semibold mb-6 text-foreground">
        {title}
      </h3>

      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Card className="glass-strong rounded-3xl border shadow-none min-h-[420px] flex flex-col p-0">
          <CardHeader className="p-6 sm:p-8 lg:p-10 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <CardTitle className="text-xl sm:text-2xl mb-1">
                  {currentProject.title}
                </CardTitle>
                {currentProject.company && (
                  <p className="text-primary font-medium">
                    {currentProject.company}
                  </p>
                )}
              </div>
              <span className="shrink-0 px-3 py-1 rounded-full text-xs font-medium liquid-glass-chip-primary">
                {type === 'personal' ? 'Pessoal' : 'Profissional'}
              </span>
            </div>
          </CardHeader>

          <CardContent className="flex flex-1 flex-col gap-6 px-6 sm:px-8 lg:px-10 pb-6 sm:pb-8 lg:pb-10">
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {currentProject.description}
            </p>

            {currentProject.github && (
              <div>
                <Button variant="outline" size="sm" asChild>
                  <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={16} />
                    GitHub
                  </a>
                </Button>
              </div>
            )}

            {currentProject.technologies && currentProject.technologies.length > 0 && (
              <div className="mt-auto pt-5 border-t border-border">
                <h4 className="font-semibold mb-3">Tecnologias Utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 liquid-glass-chip-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {projects.length > 1 && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 liquid-glass-btn border-0 hover:bg-transparent rounded-full h-10 w-10 p-0"
              aria-label="Projeto anterior"
            >
              <ChevronLeft size={16} />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 liquid-glass-btn border-0 hover:bg-transparent rounded-full h-10 w-10 p-0"
              aria-label="Próximo projeto"
            >
              <ChevronRight size={16} />
            </Button>
          </>
        )}

        {projects.length > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCarousel;

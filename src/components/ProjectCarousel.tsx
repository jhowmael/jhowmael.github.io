import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  company?: string;
};

interface ProjectCarouselProps {
  projects: Project[];
}

const AUTOPLAY_MS = 5000;

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
  }, [projects]);

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
    <div className="mb-4">
      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Card className="glass-strong rounded-3xl border shadow-none min-h-[280px] flex flex-col p-0">
          <CardHeader className="p-5 sm:p-6 pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <CardTitle className="text-xl mb-1">
                  {currentProject.title}
                </CardTitle>
                {currentProject.company && (
                  <p className="text-primary font-medium">
                    {currentProject.company}
                  </p>
                )}
              </div>
              <span className="shrink-0 px-3 py-1 rounded-full text-xs font-medium liquid-glass-chip-primary">
                Profissional
              </span>
            </div>
          </CardHeader>

          <CardContent className="flex flex-1 flex-col gap-4 px-5 sm:px-6 pb-5 sm:pb-6">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {currentProject.description}
            </p>

            {currentProject.technologies && currentProject.technologies.length > 0 && (
              <div className="mt-auto pt-4 border-t border-border">
                <h4 className="font-semibold mb-3 text-sm">Tecnologias Utilizadas:</h4>
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
                  index === currentIndex ? "bg-primary" : "bg-muted"
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

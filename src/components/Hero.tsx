import { Github, Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/jonatan-profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow">
              <img
                src={profileImage}
                alt="Jonatan Ismael"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Jonatan Ismael
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
              Desenvolvedor Back-end
            </h2>

            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>São Vicente/SP</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap size={16} />
                <span>Engenharia da Computação - ESAMC Santos</span>
              </div>
            </div>

          <p className="relative text-lg text-muted-foreground mb-8 max-w-2xl after:content-['|'] after:ml-1 after:animate-blink">
            Desenvolvedor apaixonado por tecnologia, com experiência em TypeScript, Node.js, PHP e Laravel. 
            Atualmente estagiário na GBM Tech & Control, atuando no desenvolvimento de sistemas logísticos. 
            Busco sempre aprender, aplicar boas práticas e criar soluções que gerem valor de forma simples e eficiente.
          </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2" size={18} />
                Entre em Contato
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/jhowmael" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={18} />
                  GitHub
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/jonatan-ismael-dos-santos-182326219/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" size={18} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
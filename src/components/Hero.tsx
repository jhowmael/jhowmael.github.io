import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/jonatan-profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="px-4 pt-28 pb-16 sm:pb-20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 py-8 sm:py-12 lg:py-16">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground">
              Olá, eu sou o
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Jonatan Ismael
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground font-medium">
              Desenvolvedor Junior Backend | NestJS | TypeScript | Node.js
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="rounded-full px-6 liquid-glass-btn-primary border-0 hover:bg-transparent"
                asChild
              >
                <a href="/cv/jonatan-ismael.pdf" download>
                  <Download className="mr-2" size={18} />
                  Download CV
                </a>
              </Button>

              <Button
                size="lg"
                className="rounded-full px-6 liquid-glass-btn border-0 hover:bg-transparent"
                onClick={scrollToContact}
              >
                <Mail className="mr-2" size={18} />
                Entrar em contato
              </Button>
            </div>
          </div>

          <div className="relative shrink-0">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-[5px] border-white/70 shadow-window ring-2 ring-primary/30 bg-card">
              <img
                src={profileImage}
                alt="Jonatan Ismael"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

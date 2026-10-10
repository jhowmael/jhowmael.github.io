import { Download, Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import profileImage from "@/assets/jonatan-profile.png";

const socials = [
  { icon: SiGithub, label: "GitHub", href: "https://github.com/jhowmael" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jonatan-ismael/" },
  { icon: SiWhatsapp, label: "WhatsApp", href: "https://wa.me/5513996662857" },
  { icon: Mail, label: "E-mail", href: "mailto:jonatan.ismael996@gmail.com" },
];

const stack = ["Node.js", "Nest.js", "React", "TypeScript", "PostgreSQL"];

const Hero = () => {
  return (
    <section id="home" className="px-4 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container mx-auto max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
          <div className="space-y-6">
            <p className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" />
              São Vicente, SP · Brasil
            </p>

            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter leading-[1.05]">
                Jonatan Ismael
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground tracking-tight">
                Desenvolvedor <span className="text-foreground">Full Stack</span>
              </p>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Engenheiro da Computação com mais de 4 anos construindo sistemas web —
              de APIs e bancos de dados a interfaces. Hoje na{" "}
              <span className="text-foreground font-medium">ArchOffice</span>.
            </p>

            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/cv/jonatan-ismael.pdf"
                download
                className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
              >
                <Download size={16} />
                Baixar CV
              </a>
              <a
                href="https://wa.me/5513996662857"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border px-5 text-sm font-medium hover:bg-secondary transition-colors"
              >
                <SiWhatsapp size={16} />
                Entrar em contato
              </a>

              <div className="flex items-center gap-1 sm:ml-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    title={label}
                    className="grid h-10 w-10 place-items-center rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-60 sm:w-72 md:mx-0">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-primary/60" />
            <img
              src={profileImage}
              alt="Foto de Jonatan Ismael"
              className="relative aspect-square w-full rounded-2xl border object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

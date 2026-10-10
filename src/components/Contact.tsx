import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import SectionTitle from "@/components/SectionTitle";

const contacts = [
  {
    icon: Mail,
    label: "E-mail",
    value: "jonatan.ismael996@gmail.com",
    href: "mailto:jonatan.ismael996@gmail.com",
  },
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    value: "(13) 99666-2857",
    href: "https://wa.me/5513996662857",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "in/jonatan-ismael",
    href: "https://www.linkedin.com/in/jonatan-ismael/",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    value: "@jhowmael",
    href: "https://github.com/jhowmael",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-14 sm:py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle index="05">Contato</SectionTitle>

        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              Vamos conversar?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Estou aberto a novas oportunidades e projetos. O jeito mais rápido de
              falar comigo é pelo WhatsApp ou e-mail.
            </p>
          </div>

          <ul className="card-surface divide-y">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 transition-colors hover:bg-secondary/60"
                >
                  <Icon size={20} className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs text-muted-foreground">{label}</p>
                    <p className="truncate text-sm font-medium">{value}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;

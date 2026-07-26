import { Mail, Phone, Linkedin, Github } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const Contact = () => {
  const contacts = [
    {
      icon: <Mail size={28} />,
      label: "E-mail",
      value: "jonatan.ismael996@gmail.com",
      href: "mailto:jonatan.ismael996@gmail.com",
    },
    {
      icon: <Phone size={28} />,
      label: "Telefone",
      value: "(13) 99666-2857",
      href: "tel:+5513996662857",
    },
    {
      icon: <Linkedin size={28} />,
      label: "LinkedIn",
      value: "@jonatan-ismael",
      href: "https://www.linkedin.com/in/jonatan-ismael/",
    },
    {
      icon: <Github size={28} />,
      label: "GitHub",
      value: "@jhowmael",
      href: "https://github.com/jhowmael",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>Contatos</SectionTitle>

        <div className="rounded-3xl glass-strong p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full liquid-glass-icon transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors break-all">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

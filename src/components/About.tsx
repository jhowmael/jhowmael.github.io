import { Briefcase, GraduationCap, MapPin, Clock } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const facts = [
  { icon: Briefcase, label: "Atualmente", value: "Full Stack na ArchOffice" },
  { icon: GraduationCap, label: "Formação", value: "Engenharia da Computação — ESAMC" },
  { icon: Clock, label: "Experiência", value: "4+ anos em desenvolvimento web" },
  { icon: MapPin, label: "Local", value: "São Vicente, SP" },
];

const About = () => {
  return (
    <section id="about" className="py-14 sm:py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle index="01">Sobre mim</SectionTitle>

        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Sou Engenheiro da Computação formado pela ESAMC Santos e trabalho com
              desenvolvimento web há mais de 4 anos. Atuo como desenvolvedor full
              stack com{" "}
              <strong className="text-foreground font-medium">Node.js</strong>,{" "}
              <strong className="text-foreground font-medium">Nest.js</strong>,{" "}
              <strong className="text-foreground font-medium">React</strong> e{" "}
              <strong className="text-foreground font-medium">TypeScript</strong>,
              construindo aplicações completas, do banco de dados à interface.
            </p>

            <p>
              Hoje estou na{" "}
              <strong className="text-foreground font-medium">ArchOffice</strong>.
              Antes, na GBM Tech &amp; Control, atuei como desenvolvedor full stack em
              sistemas de logística portuária e ferroviária, com serviços em NestJS
              integrados à AWS (S3, RDS, DynamoDB e SQS).
            </p>

            <p>
              Também tenho experiência com C# (.NET), MongoDB, Java (Spring Boot) e
              PHP (Laravel), usados em sistemas financeiros, administrativos e
              e-commerces. Gosto de código simples de manter e de entender a regra de
              negócio antes de escrever a primeira linha.
            </p>
          </div>

          <dl className="card-surface flex flex-col divide-y">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-1 items-center gap-3 p-4">
                <Icon size={18} className="shrink-0 text-primary" />
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;

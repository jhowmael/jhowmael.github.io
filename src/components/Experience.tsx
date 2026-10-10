import { GraduationCap } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

type Role = {
  title: string;
  period: string;
  description: string[];
};

type ExperienceItem = {
  company: string;
  location: string;
  current?: boolean;
  roles: Role[];
};

const experiences: ExperienceItem[] = [
  {
    company: "ArchOffice",
    location: "Brasil",
    current: true,
    roles: [
      {
        title: "Desenvolvedor Full Stack",
        period: "2026 — Presente",
        description: [
          "Desenvolvimento de aplicações full stack com Node.js, Nest.js e React",
          "APIs e interfaces em TypeScript",
          "Modelagem e manutenção de bancos PostgreSQL",
        ],
      },
    ],
  },
  {
    company: "GBM Tech & Control",
    location: "Santos/SP",
    roles: [
      {
        title: "Desenvolvedor Junior Backend",
        period: "2026",
        description: [
          "Desenvolvimento e manutenção de serviços back-end com NestJS",
          "Integração com AWS: S3, RDS, DynamoDB e SQS",
          "APIs e integrações em TypeScript e Node.js",
        ],
      },
      {
        title: "Estagiário Backend",
        period: "Jun 2025 — 2026",
        description: [
          "APIs REST em NestJS com TypeScript e Node.js",
          "Atuação em sistemas logísticos em equipe multidisciplinar",
        ],
      },
    ],
  },
  {
    company: "ALM Brasil",
    location: "Santos/SP",
    roles: [
      {
        title: "Desenvolvedor Junior Backend",
        period: "Fev 2023 — Jul 2024",
        description: [
          "Sistemas web completos em PHP e Laravel",
          "APIs REST e modelagem de banco de dados",
        ],
      },
      {
        title: "Estagiário Backend",
        period: "Fev 2022 — Jul 2023",
        description: [
          "Primeira experiência profissional em desenvolvimento",
          "Projetos web com Laravel e participação em entregas reais",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-14 sm:py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle index="03">Experiência</SectionTitle>

        <ol className="space-y-12">
          {experiences.map((item) => (
            <li
              key={item.company}
              className="grid gap-4 md:grid-cols-[180px_1fr]"
            >
              <div className="md:pt-0.5">
                <h3 className="font-semibold">{item.company}</h3>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  {item.location}
                </p>
                {item.current && (
                  <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    atual
                  </span>
                )}
              </div>

              <div className="space-y-8 border-l pl-6">
                {item.roles.map((role) => (
                  <div key={role.title + role.period} className="relative">
                    <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="font-medium">{role.title}</h4>
                      <span className="font-mono text-xs text-muted-foreground">
                        {role.period}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {role.description.map((line) => (
                        <li
                          key={line}
                          className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="text-primary">–</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}

          <li className="grid gap-4 md:grid-cols-[180px_1fr]">
            <div>
              <h3 className="flex items-center gap-2 font-semibold">
                <GraduationCap size={18} className="text-primary" />
                Formação
              </h3>
            </div>
            <div className="card-surface p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="font-medium">Engenharia da Computação</h4>
                <span className="font-mono text-xs text-muted-foreground">
                  2020 — 2025
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">ESAMC Santos · Concluído</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                TCC: <span className="text-foreground font-medium">AprovaMe</span> —
                sistema de simulados e correção de redação com IA.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Experience;

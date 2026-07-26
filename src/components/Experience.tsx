import MacWindow from "@/components/MacWindow";
import SectionTitle from "@/components/SectionTitle";

type Role = {
  title: string;
  period: string;
  description: string[];
};

type ExperienceItem = {
  company: string;
  location: string;
  roles: Role[];
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "GBM Tech & Control",
      location: "Santos/SP",
      roles: [
        {
          title: "Desenvolvedor Junior Backend",
          period: "2026 — Presente",
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

  return (
    <section id="experience" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>Experiência</SectionTitle>

        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-6">
          <div className="space-y-5">
            {experiences.map((item) => (
              <MacWindow key={item.company}>
                <div className="space-y-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {item.company}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {item.location}
                    </span>
                  </div>

                  <div className="space-y-6">
                    {item.roles.map((role) => (
                      <div key={role.title + role.period} className="relative pl-4 border-l-2 border-primary/30">
                        <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary" />
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-foreground">
                            {role.title}
                          </h4>
                          <span className="text-xs font-medium liquid-glass-chip-primary px-2.5 py-1 rounded-full">
                            {role.period}
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {role.description.map((line) => (
                            <li
                              key={line}
                              className="text-sm text-muted-foreground leading-relaxed"
                            >
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </MacWindow>
            ))}
          </div>

          <MacWindow>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-primary mb-1">
                  Graduação
                </p>
                <h3 className="text-lg font-bold text-foreground">
                  Engenharia da Computação
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  ESAMC Santos
                </p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">2020 — 2025</span>
                <span className="font-medium liquid-glass-chip-primary px-2.5 py-1 rounded-full text-xs">
                  Concluído
                </span>
              </div>

              <div className="pt-3 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  TCC: <strong className="text-foreground">AprovaMe</strong> —
                  sistema de simulados e correção de redação com IA.
                </p>
              </div>
            </div>
          </MacWindow>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  company?: string;
};

const professionalProjects: Project[] = [
  {
    id: 1,
    title: "Log.One Terminal",
    company: "GBM Tech & Control",
    description:
      "Atuei como full stack no Log.One Terminal, sistema de gestão de operações portuárias, estoque e modais (rodoviário, ferroviário e aquaviário). Participei do desenvolvimento de funcionalidades de controle operacional, integrações e rotinas de negócio.",
    technologies: ["Java", "Spring Boot", "SQL Server"],
  },
  {
    id: 2,
    title: "Log.One Agendamento",
    company: "GBM Tech & Control",
    description:
      "Atuei como full stack no Log.One Agendamento, sistema web de programação e controle do recebimento de caminhões para carga e descarga. Participei do desenvolvimento de slots, fluxo de pátio, chamadas e dashboards operacionais.",
    technologies: ["Java", "Spring Boot", "SQL Server"],
  },
  {
    id: 3,
    title: "TOT - Sistema de Monitoramento e Controle",
    company: "GBM Tech & Control",
    description:
      "Contribuí no desenvolvimento do backend do sistema TOT (Track-on-Time), uma plataforma voltada para a gestão de terminais ferroviários, marítimos e rodoviários. Atuo em serviços NestJS com TypeScript, integrando armazenamento, bancos e mensageria na AWS (S3, RDS, DynamoDB e SQS) para monitoramento, controle logístico e otimização de processos operacionais.",
    technologies: ["NestJS", "TypeScript", "Node.js", "AWS", "S3", "RDS", "DynamoDB", "SQS"],
  },
  {
    id: 4,
    title: "Cemitério Campo da Paz Celestial",
    company: "ALM Brasil",
    description:
      "Ajudei a desenvolver um sistema completo de gestão administrativa e financeira para um cemitério. Minha contribuição incluiu a implementação de recursos como cadastros de contratos, geração de vendas e pagamentos, ordens de serviço, controle de despesas, extrato de contas e integração com boletos. Além disso, desenvolvi relatórios financeiros e administrativos para fornecer insights cruciais.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "AWS"],
  },
  {
    id: 5,
    title: "Pety You Go",
    company: "ALM Brasil",
    description:
      "Participei do desenvolvimento de um e-commerce especializado em serviços para pets, com foco na criação da API e no desenvolvimento do back-end do site. Além disso, contribui para dinamizar telas e formulários, visando melhorar a experiência do usuário.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "AWS"],
  },
  {
    id: 6,
    title: "Lisboa Segurança",
    company: "ALM Brasil",
    description:
      "Desenvolvi o backend de um site catálogo de produtos, implementando funcionalidades que permitem o cadastro de novos produtos, a aplicação de filtros para facilitar a busca e a navegação completa pelo site. Minha colaboração foi essencial para garantir uma experiência de usuário eficiente e amigável, aprimorando a interface e a usabilidade do sistema.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "AWS"],
  },
  {
    id: 7,
    title: "Miami Express Importados",
    company: "ALM Brasil",
    description:
      "Contribuí na implementação, homologação e manutenção de um sistema de controle de vendas, produtos e estoque, garantindo a eficiência e precisão das operações. Além disso, atuei no desenvolvimento do módulo financeiro, que abrange pagamentos, gerenciamento de contas e controle de caixas, proporcionando uma integração completa entre as áreas comerciais e financeiras do sistema.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "AWS"],
  },
  {
    id: 8,
    title: "Loca Festas",
    company: "ALM Brasil",
    description:
      "Participei do desenvolvimento de um módulo de locação de materiais para festas, que permitiu a vinculação de produtos e o gerenciamento eficiente do estoque. Além disso, o módulo possibilitou a realização de lançamentos de pagamentos e a emissão de relatórios detalhados, facilitando a administração e o controle das locações de forma prática e organizada.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "AWS"],
  },
  {
    id: 9,
    title: "G H S Assessoria de Comércio Exterior",
    company: "ALM Brasil",
    description:
      "Contribui para a criação de um módulo de importação e exportação, capaz de cadastrar produtos, contêineres e todas as partes envolvidas no processo. Além disso, desenvolvemos funcionalidades para emissão de relatórios essenciais, como drafts e invoices, fundamentais para facilitar e agilizar o processo de importação.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "AWS"],
  },
];

const INITIAL_COUNT = 4;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? professionalProjects : professionalProjects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="py-14 sm:py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle index="04">Projetos</SectionTitle>

        <div className="grid gap-4 md:grid-cols-2">
          {visible.map((project) => (
            <article
              key={project.id}
              className="card-surface flex flex-col p-6 transition-colors hover:border-foreground/30"
            >
              <p className="font-mono text-xs text-primary">{project.company}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {project.technologies.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {professionalProjects.length > INITIAL_COUNT && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex h-10 items-center gap-2 rounded-md border px-4 text-sm font-medium hover:bg-secondary transition-colors"
            >
              {showAll ? "Mostrar menos" : `Ver todos os ${professionalProjects.length} projetos`}
              <ChevronDown
                size={16}
                className={`transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

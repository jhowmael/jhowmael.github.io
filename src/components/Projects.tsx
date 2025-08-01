import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
  const personalProjects = [
    {
      id: 1,
      title: "AprovaMe",
      description: "AprovaMe é um sistema web completo voltado para o estudo de vestibulares. Nele, o usuário pode realizar simulados com provas reais e ter sua redação avaliada e pontuada por uma inteligência artificial. O projeto foi desenvolvido como Trabalho de Conclusão de Curso (TCC) do curso de Engenharia da Computação da ESAMC.",
      technologies: ["Laravel", "PHP", "Mysql", "JavaScript", "Bootstrap", "PHPUnit"],
      type: "personal" as const,
      github: "https://github.com/jhowmael/AprovaMe",
      image: "/images/aprovame.png" ,
    },
    {
      id: 2,
      title: "Cata Treco",
      description: "Desenvolvido no começo da minha graduação, como projeto acadêmico. o Cata Treco é uma plataforma web com o objetivo de registrar e solucionar ocorrências relacionadas à retirada de lixos e entulhos. É uma ferramenta simples e eficiente para usuários reportarem problemas e equipes coordenarem a coleta. Com uma interface intuitiva, facilita o registro e a organização das ações de limpeza urbana.",
      technologies: ["CakePHP", "PHP", "Mysql", "JavaScript", "Bootstrap", "PHPUnit"],
      type: "personal" as const,
      github: "https://github.com/jhowmael/cata-treco",
      image: "/images/cata-treco.jpeg" 
    },
    {
      id: 3,
      title: "Estilo Web",
      description: "Desenvolvido na metade da minha graduação, como projeto acadêmico. O Estilo Web é um sistema de gestão de lojas de roupas e acessórios, é uma solução completa para empresários do ramo da moda que buscam automatizar e aprimorar seus processos de negócio. Com essa plataforma, é possível controlar o estoque, gerenciar vendas, acompanhar o desempenho de produtos e clientes, além de facilitar tarefas administrativas como emissão de relatórios e gestão de funcionários.",
      technologies: ["CakePHP", "PHP", "Mysql", "JavaScript", "Bootstrap", "PHPUnit"],
      type: "personal" as const,
      github: "https://github.com/jhowmael/estilo-web",
      image: "/images/estilo-web.jpeg" 
    },
    {
      id: 4,
      title: "Api Register",
      description: "Uma API completa e robusta desenvolvida com o framework Laravel, projetada para gerenciar o processo de registro de usuários. Ela inclui funcionalidades como criação de contas, validação de dados, proteção com autenticação, e integração com padrões modernos de segurança. Ideal para aplicações que necessitam de um sistema confiável de gerenciamento de usuários desde o cadastro até a autenticação e atualização de informações.",
      technologies: ["Laravel", "PHP", "Mysql",],
      type: "personal" as const,
      github: "https://github.com/jhowmael/api-register",
    },
    {
      id: 5,
      title: "Api Tasks Nodes",
      description: "Uma API moderna e escalável para o registro e gerenciamento de tarefas, desenvolvida com Node.js utilizando o framework NestJS e escrita em TypeScript. Essa aplicação oferece uma arquitetura modular, com rotas organizadas, validações eficientes e suporte a práticas modernas de desenvolvimento, como injeção de dependência, tipagem estática e princípios SOLID. Ideal para projetos que demandam uma base sólida, manutenível e preparada para crescer com segurança e desempenho.",
      technologies: ["Typescript", "Node", "Nest", "PostegreeSQL", "JUnit"],
      type: "personal" as const,
      github: "https://github.com/jhowmael/api-tasks-node",
    },
  ];

  const professionalProjects = [
    {
      id: 1,
      title: "TOT - Sistema de Monitoramento e Controle",
      company: "GBM Tech & Control",
      description: "Contribuí no desenvolvimento do backend do sistema TOT (Track-on-Time), uma plataforma robusta e completa voltada para a gestão de terminais ferroviários, marítimos e rodoviários. O sistema oferece soluções integradas para monitoramento, controle logístico e otimização de processos operacionais nesses modais de transporte.",
      technologies: [],
      type: "professional" as const
    },
    {
      id: 2,
      title: "Cemitério Campo da Paz Celestial",
      company: "ALM Brasil",
      description: "Ajudei a desenvolver um sistema completo de gestão administrativa e financeira para um cemitério. Minha contribuição incluiu a implementação de recursos como cadastros de contratos, geração de vendas e pagamentos, ordens de serviço, controle de despesas, extrato de contas e integração com boletos. Além disso, desenvolvi relatórios financeiros e administrativos para fornecer insights cruciais.",
      technologies: [],
      type: "professional" as const,
      demo: "https://www.cemiteriocampodapaz.com.br"
    },
    {
      id: 3,
      title: "Pety You Go",
      company: "ALM Brasil",
      description: "Participei do desenvolvimento de um e-commerce especializado em serviços para pets, com foco na criação da API e no desenvolvimento do back-end do site. Além disso, contribui para dinamizar telas e formulários, visando melhorar a experiência do usuário.",
      technologies: [],
      type: "professional" as const,
      demo: "https://petyougo.com"
    },
    {
      id: 4,
      title: "Lisboa Segurança",
      company: "ALM Brasil",
      description: "Desenvolvi o backend de um site catálogo de produtos, implementando funcionalidades que permitem o cadastro de novos produtos, a aplicação de filtros para facilitar a busca e a navegação completa pelo site. Minha colaboração foi essencial para garantir uma experiência de usuário eficiente e amigável, aprimorando a interface e a usabilidade do sistema.",
      technologies: [],
      type: "professional" as const,
      demo: "https://lisboadistribuidora.com.br"
    },
    {
      id: 5,
      title: "Miami Express Importados",
      company: "ALM Brasil",
      description: "Contribuí na implementação, homologação e manutenção de um sistema de controle de vendas, produtos e estoque, garantindo a eficiência e precisão das operações. Além disso, atuei no desenvolvimento do módulo financeiro, que abrange pagamentos, gerenciamento de contas e controle de caixas, proporcionando uma integração completa entre as áreas comerciais e financeiras do sistema.",
      technologies: [],
      type: "professional" as const
    },
    {
      id: 6,
      title: "Loca Festas",
      company: "ALM Brasil",
      description: "Participei do desenvolvimento de um módulo de locação de materiais para festas, que permitiu a vinculação de produtos e o gerenciamento eficiente do estoque. Além disso, o módulo possibilitou a realização de lançamentos de pagamentos e a emissão de relatórios detalhados, facilitando a administração e o controle das locações de forma prática e organizada.",
      technologies: [],
      type: "professional" as const
    },
    {
      id: 7,
      title: "G H S Assessoria de Comércio Exterior",
      company: "ALM Brasil",
      description: "Contribui para a criação de um módulo de importação e exportação, capaz de cadastrar produtos, contêineres e todas as partes envolvidas no processo. Além disso, desenvolvemos funcionalidades para emissão de relatórios essenciais, como drafts e invoices, fundamentais para facilitar e agilizar o processo de importação.",
      technologies: [],
      type: "professional" as const
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos meus projetos pessoais e profissionais, demonstrando 
            habilidades técnicas e criatividade na resolução de problemas.
          </p>
        </div>

        <ProjectCarousel
          title="Projetos Pessoais"
          projects={personalProjects}
          type="personal"
        />

        <ProjectCarousel
          title="Projetos Profissionais"
          projects={professionalProjects}
          type="professional"
        />
      </div>
    </section>
  );
};

export default Projects;
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Timeline = () => {
  const timelineItems = [
    {
      type: "work",
      title: "Estagiário",
      company: "GBM Tech & Control",
      period: "2025/jun - Presente",
      location: "Santos/SP",
      description: [
        "Desenvolvimento de sistemas backend em TypeScript e Node.js",
        "Desenvolvimento de APIs REST em NestJS",
        "Trabalho em equipe multidisciplinar",
        "Aprendizado contínuo em tecnologias emergentes"
      ],
      icon: <Briefcase className="text-primary" size={20} />
    },
    {
      type: "work",
      title: "Desenvolvedor Junior Backend",
      company: "ALM Brasil",
      period: "2023/fev - 2024/jul",
      location: "Santos/SP",
      description: [
        "Desenvolvimento de sistemas completos, em PHP e Laravel",
        "Desenvolvimento de APIs REST em Laravel",
        "Modelagem de banbo de dados",
      ],
      icon: <Briefcase className="text-primary" size={20} />
    },
    {
      type: "work",
      title: "Estagiário Backend",
      company: "ALM Brasil",
      period: "2022/fev - 2023/jul",
      location: "Santos/SP",
      description: [
        "Primeira experiência profissional em desenvolvimento",
        "Aprendizado de tecnologias como Laravel",
        "Participação em projetos de sistema web"
      ],
      icon: <Briefcase className="text-primary" size={20} />
    },
    {
      type: "education",
      title: "Engenharia da Computação",
      company: "ESAMC Santos",
      period: "2020 - 2025",
      location: "Santos/SP",
      description: [
        "Último semestre do curso", 
        "Foco em desenvolvimento de software e arquitetura de sistemas",
        "Projetos acadêmicos envolvendo tecnologias modernas"
      ],
      icon: <GraduationCap className="text-primary" size={20} />
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Trajetória Profissional
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Minha jornada de crescimento profissional e acadêmica ao longo dos anos.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center transform md:-translate-x-1/2 shadow-glow">
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                          <h4 className="text-lg text-primary font-medium">{item.company}</h4>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.type === 'work' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-accent/20 text-accent-foreground'
                        }`}>
                          {item.type === 'work' ? 'Trabalho' : 'Educação'}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {item.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
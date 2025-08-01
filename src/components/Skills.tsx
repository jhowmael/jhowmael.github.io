import { 
  Code, 
  Database, 
  Server, 
  Layers, 
  Zap,
  GitBranch
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: <Code className="text-primary" size={24} />,
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "PHP", level: 90 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="text-primary" size={24} />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "NestJS", level: 90 },
        { name: "Laravel", level: 85 },
        { name: "CakePHP", level: 80 },
      ]
    },
    {
      title: "Banco de Dados",
      icon: <Database className="text-primary" size={24} />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
      ]
    },
    {
      title: "Ferramentas & DevOps",
      icon: <Server className="text-primary" size={24} />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Linux", level: 80 },
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-primary";
    if (level >= 80) return "bg-accent";
    if (level >= 70) return "bg-secondary";
    return "bg-muted";
  };

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologias e ferramentas que utilizo no dia a dia para criar soluções eficientes e escaláveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mb-2 flex justify-center">
                  {category.icon}
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Outras Competências</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Arquitetura de Software",
              "API REST",
              "Microserviços",
              "Clean Code",
              "SOLID",
              "Design Patterns",
              "Agile/Scrum",
              "Test-Driven Development",
              "HTML",
              "CSS",
              "XML",
              "JSON",
              "C++",
              "VBA",
              "NestJS",
              "Express",
              "Bootstrap",
              "JQuery",
              "PHPUnit",
              "Composer",
              "AJAX"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
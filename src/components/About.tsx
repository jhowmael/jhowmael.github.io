import { Code, Coffee, Lightbulb, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-primary" size={24} />,
      title: "Desenvolvimento Back-end",
      description: "Experiência com tecnologias modernas de back-end"
    },
    {
      icon: <Lightbulb className="text-primary" size={24} />,
      title: "Inovação",
      description: "Sempre buscando soluções criativas e eficientes para problemas complexos"
    },
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Foco em Resultados",
      description: "Comprometido em entregar projetos de alta qualidade e impacto"
    },
    {
      icon: <Coffee className="text-primary" size={24} />,
      title: "Aprendizado Contínuo",
      description: "Sempre atualizado com as últimas tendências e tecnologias do mercado"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A programação é a arte de resolver problemas de forma elegante
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-foreground">
              <p className="text-lg leading-relaxed">
                Olá! Sou o <strong className="text-primary">Jonatan Ismael</strong>, 
                Como desenvolvedor <strong>back-end</strong> e estudante de Engenharia da Computação, trago não apenas minha paixão pela tecnologia, mas também uma abordagem analítica e estruturada para resolver problemas.
              </p>

              <p className="text-lg leading-relaxed">
                Acredito firmemente no valor do trabalho em equipe e na colaboração como elementos 
                essenciais para alcançar o sucesso em qualquer projeto.
              </p>

              <p className="text-lg leading-relaxed">
                Com uma mentalidade orientada para resultados, busco entender profundamente os requisitos
                e as necessidades do usuário, desenvolvendo soluções eficientes e intuitivas.
              </p>

              <p className="text-lg leading-relaxed">
                Fora do ambiente profissional, busco constantemente expandir meu conhecimento
                e explorar novas tecnologias em projetos pessoais.
              </p>

              <p className="text-lg leading-relaxed">
                Sou um indivíduo aberto a novas ideias e estou sempre disposto a aprender com os outros,
                tornando-me um membro valioso em qualquer equipe de desenvolvimento.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
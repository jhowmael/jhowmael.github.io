import SectionTitle from "@/components/SectionTitle";

const About = () => {
  return (
    <section id="about" className="pt-10 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>Sobre mim</SectionTitle>

        <div className="rounded-3xl glass-strong p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl mx-auto space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Engenheiro da Computação formado pela ESAMC Santos, com mais de 4 anos
              de experiência em desenvolvimento web. Foco principal em{" "}
              <strong className="text-foreground font-semibold">Node.js</strong> e{" "}
              <strong className="text-foreground font-semibold">TypeScript</strong>,
              criando back-ends, integrações e APIs.
            </p>

            <p>
              Atualmente na{" "}
              <strong className="text-foreground font-semibold">GBM</strong>,
              desenvolvo e mantenho serviços back-end com NestJS, integrando com
              serviços da AWS como S3, RDS, DynamoDB e SQS.
            </p>

            <p>
              Também tenho experiência prática com Java (Spring Boot) e PHP (Laravel),
              utilizadas em projetos de sistemas financeiros e administrativos.
              Foco em escrever códigos eficientes, limpos e escaláveis.
            </p>

            <p>
              Sou uma pessoa dedicada, gosto de conhecer novas tecnologias e me manter
              atualizado no mundo dev. Minha experiência me deu uma visão prática de
              diferentes sistemas e regras de negócio, facilitando a entrega de
              soluções eficientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

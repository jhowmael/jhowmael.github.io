import SectionTitle from "@/components/SectionTitle";

const Skills = () => {
  const skills = [
    { name: "TypeScript", color: "#3178C6", dark: false },
    { name: "JavaScript", color: "#F7DF1E", dark: true },
    { name: "Node.js", color: "#339933", dark: false },
    { name: "NestJS", color: "#E0234E", dark: false },
    { name: "PHP", color: "#777BB4", dark: false },
    { name: "Laravel", color: "#FF2D20", dark: false },
    { name: "Java", color: "#ED8B00", dark: false },
    { name: "Spring Boot", color: "#6DB33F", dark: false },
    { name: "MySQL", color: "#4479A1", dark: false },
    { name: "PostgreSQL", color: "#4169E1", dark: false },
    { name: "DynamoDB", color: "#4053D6", dark: false },
    { name: "AWS", color: "#FF9900", dark: true },
    { name: "Docker", color: "#2496ED", dark: false },
    { name: "Git", color: "#F05032", dark: false },
    { name: "Linux", color: "#FCC624", dark: true },
    { name: "REST APIs", color: "#007AFF", dark: false },
  ];

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>Habilidades</SectionTitle>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl glass-strong p-6 hover:scale-[1.03] transition-transform duration-300"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold shadow-sm ${
                  skill.dark ? "text-black/80" : "text-white"
                }`}
                style={{ backgroundColor: skill.color }}
              >
                {skill.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-sm font-semibold text-foreground text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

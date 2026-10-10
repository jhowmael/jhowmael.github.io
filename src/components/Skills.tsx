import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiDotnet,
  SiPhp,
  SiOpenjdk,
  SiNodedotjs,
  SiNestjs,
  SiReact,
  SiLaravel,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { TbBrandCSharp, TbDatabase, TbApi } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const skills: Skill[] = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#E5C100" },
  { name: "C#", icon: TbBrandCSharp, color: "#9B4F96" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
  { name: "React", icon: SiReact, color: "#38BDF8" },
  { name: ".NET", icon: SiDotnet, color: "#7C5CE0" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "DynamoDB", icon: TbDatabase, color: "#527FFF" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Linux", icon: SiLinux, color: "#E5B800" },
  { name: "REST APIs", icon: TbApi, color: "#2563EB" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-14 sm:py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle index="02">Stack</SectionTitle>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {skills.map(({ name, icon: Icon, color }) => (
            <li
              key={name}
              className="card-surface flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40"
            >
              <Icon size={22} style={{ color }} className="shrink-0" aria-hidden />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

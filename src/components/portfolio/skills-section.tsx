"use client";

import {
  Atom,
  Boxes,
  Braces,
  Code2,
  Component,
  Cylinder,
  Database,
  GitBranch,
  Image,
  KeyRound,
  Layers3,
  Layout,
  ListChecks,
  Mail,
  Network,
  Palette,
  Radio,
  RefreshCw,
  Route,
  Server,
  Settings,
  ShieldCheck,
  Sparkles,
  Table2,
  Triangle,
  Upload,
  UserRound,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { useScrollReveal } from "./use-scroll-reveal";

const skillIcons = {
  braces: Braces,
  code: Code2,
  component: Component,
  atom: Atom,
  layers: Layers3,
  layout: Layout,
  palette: Palette,
  wind: Wind,
  refresh: RefreshCw,
  boxes: Boxes,
  list: ListChecks,
  mail: Mail,
  shield: ShieldCheck,
  server: Server,
  settings: Settings,
  route: Route,
  network: Network,
  radio: Radio,
  key: KeyRound,
  user: UserRound,
  image: Image,
  upload: Upload,
  database: Database,
  table: Table2,
  cylinder: Cylinder,
  git: GitBranch,
  github: GitBranch,
  triangle: Triangle,
  sparkles: Sparkles,
} satisfies Record<
  (typeof skillGroups)[number]["skills"][number]["icon"],
  LucideIcon
>;

const totalSkills = skillGroups.reduce(
  (total, group) => total + group.skills.length,
  0,
);

export function SkillsSection() {
  const sectionRef = useScrollReveal<HTMLElement>(".skill-heading, .skill-card");

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="space-y-8 border-t border-gray-800/60 pt-16"
    >
      <div className="skill-heading space-y-2">
        <SectionHeading label="TOOLS OF THE TRADE">
          Technology I work with
        </SectionHeading>
        <p className="max-w-xl text-gray-400">
          A growing toolkit across interface design, backend systems, and
          databases.
          <span className="skill-count"> {totalSkills} skills</span>
        </p>
      </div>
      <div className="skill-grid">
        {skillGroups.flatMap((group) =>
          group.skills.map((skill) => {
            const Icon = skillIcons[skill.icon];

            return (
              <article className="skill-card" key={skill.name}>
                <div className="skill-card-top">
                  <span className="skill-category">{group.category}</span>
                  <span className="skill-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                </div>
                <h3>{skill.name}</h3>
                <span
                  className={`skill-level skill-level-${skill.level.toLowerCase()}`}
                >
                  {skill.level}
                </span>
                <p>{skill.description}</p>
              </article>
            );
          }),
        )}
      </div>
    </section>
  );
}

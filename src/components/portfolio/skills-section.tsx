import { colorClasses, skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="space-y-8 border-t border-gray-800/60 pt-16"
    >
      <div className="space-y-2">
        <SectionHeading label="TOOLS OF THE TRADE">
          <span aria-hidden="true">🧠 </span>Tech Stack &amp; Skills
        </SectionHeading>
        <p className="max-w-xl pl-5 text-gray-400">
          A transparent graphical visualizer of my core engineering tools
          categorized by layers.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 pt-4 md:grid-cols-3">
        {skillGroups.map((group) => {
          const color = colorClasses[group.color];
          return (
            <article
              key={group.title}
              className="space-y-4 rounded-2xl border border-gray-800 bg-darkCard p-6"
            >
              <h3
                className={`flex items-center space-x-2 font-mono font-bold ${color.text}`}
              >
                <i className={`fa-solid ${group.icon}`} aria-hidden="true" />
                <span>{group.title}</span>
              </h3>
              <div className="space-y-3 font-mono text-xs text-gray-400">
                {group.skills.map(([name, percentage]) => (
                  <div key={name}>
                    <div className="mb-1 flex justify-between">
                      <span>{name}</span>
                      <span>{percentage}%</span>
                    </div>
                    <div
                      className="h-2 w-full rounded-full bg-gray-800"
                      role="progressbar"
                      aria-label={name}
                      aria-valuenow={percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className={`h-2 rounded-full ${color.bar}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

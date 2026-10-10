import { SectionHeading } from "./section-heading";

export function JourneySection() {
  return (
    <section id="education" className="border-t border-gray-800/60 pt-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading label="MY JOURNEY SO FAR">
            <span aria-hidden="true">🎓 </span>Educational Background
          </SectionHeading>
          <div className="relative ml-2 space-y-6 border-l border-gray-800 pl-6">
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-emerald-500" />
              <h3 className="text-lg font-bold text-white">
                Self-Taught Engineering Paradigm
              </h3>
              <p className="font-mono text-xs text-emerald-400">
                Continuous Education
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Prioritizing intense autonomous specialized training over
                standard Higher Educational frameworks; mastery of advanced
                programming standards via strict self-driven build tasks and
                rigorous peer code audits.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="border-l-4 border-blue-500 pl-4 font-mono text-2xl font-bold tracking-tight text-white">
            <span aria-hidden="true">💼 </span>Professional Experience
          </h2>
          <div className="relative ml-2 space-y-6 border-l border-gray-800 pl-6">
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-blue-500" />
              <h3 className="text-lg font-bold text-white">
                Freelance Full-Stack Developer
              </h3>
              <p className="font-mono text-xs text-blue-400">Upwork | Remote</p>
              <p className="mt-2 text-sm text-gray-400">
                Building web apps for dynamic businesses, organizing database
                relations, translating mockups to robust modular responsive
                environments using the MERN &amp; Next.js frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

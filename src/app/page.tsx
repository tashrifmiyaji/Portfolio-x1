"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const navigation = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Education & Exp", "#education"],
  ["Projects", "#projects"],
  ["Contact", "#connect"],
];

const projects = {
  chat: {
    title: "Real-Time Chat Application",
    stack: "React.js, Node.js, Express.js, MongoDB, Socket.io, Tailwind CSS",
    description:
      "An advanced state-persistent communication framework implementing isolated user message buffers, instantaneous text-sync statuses, and clean layout adjustments across screen formats.",
    challenges:
      "Synchronizing state variables during high network connection latency drops and avoiding multi-render feedback loops over websocket tunnels.",
    improvements:
      "Implement complex peer-to-peer media streaming channels and full text-search engines for archived database messaging strings.",
    live: "https://chat-app-1oga.onrender.com",
    repository: "https://github.com/tashrifmiyaji/chat-app",
    summary: "A responsive real-time messaging experience built around synchronized conversations.",
    icon: "fa-comments",
    color: "emerald",
  },
  taxi: {
    title: "TaxiGo Ride Sharing System",
    stack: "React Hooks, Context API, Node.js, Socket.io, Tailwind CSS v4",
    description:
      "A dashboard interface allowing real-time driver tracking simulation panels, immediate calculations for category vehicles, and active components.",
    challenges:
      "Managing consistent updates for nested state arrays dynamically without creating layout rendering stutters on core mobile viewports.",
    improvements:
      "Integrate production Mapbox engines and add standard mock processing checkout APIs for seamless simulated booking transactions.",
    live: "https://github.com/tashrifmiyaji/Taxi",
    repository: "https://github.com/tashrifmiyaji/Taxi",
    summary: "An interactive multi-panel interface with synchronous ride and fare calculations.",
    icon: "fa-car",
    color: "blue",
  },
  cms: {
    title: "Prisma-Press CMS Engine",
    stack: "TypeScript, PostgreSQL, Prisma ORM, Express.js, Node.js",
    description:
      "A strictly engineered content manager server optimized with secure relational query paths, data caching configurations, and robust schema validation layers.",
    challenges:
      "Handling complex data relations efficiently and avoiding schema synchronization bottlenecks during parallel structural updates.",
    improvements:
      "Incorporate Redis cache networks and add automatic schema version tracing configurations for production monitoring.",
    live: "https://github.com/tashrifmiyaji/Prisma-Press",
    repository: "https://github.com/tashrifmiyaji/Prisma-Press",
    summary: "A relational data management backend built around safe database structures.",
    icon: "fa-database",
    color: "purple",
  },
} as const;

type ProjectKey = keyof typeof projects;
const projectKeys: ProjectKey[] = ["chat", "taxi", "cms"];

const skillGroups: {
  title: string;
  icon: string;
  color: "emerald" | "blue" | "purple";
  skills: [string, number][];
}[] = [
  {
    title: "Frontend Development",
    icon: "fa-laptop-code",
    color: "emerald",
    skills: [
      ["React.js / Next.js", 90],
      ["TypeScript / JS", 85],
      ["Tailwind CSS", 95],
    ],
  },
  {
    title: "Backend & Databases",
    icon: "fa-server",
    color: "blue",
    skills: [
      ["Node.js / Express", 85],
      ["MongoDB", 80],
      ["PostgreSQL & Prisma", 75],
    ],
  },
  {
    title: "Tools & Environments",
    icon: "fa-screwdriver-wrench",
    color: "purple",
    skills: [
      ["Git & GitHub Workflow", 90],
      ["REST APIs / Socket.io", 85],
      ["Python Basics", 60],
    ],
  },
];

const colorClasses = {
  emerald: {
    text: "text-emerald-400",
    bar: "bg-emerald-500",
    icon: "text-emerald-500",
    backdrop: "from-emerald-900/40",
  },
  blue: {
    text: "text-blue-400",
    bar: "bg-blue-500",
    icon: "text-blue-500",
    backdrop: "from-blue-900/40",
  },
  purple: {
    text: "text-purple-400",
    bar: "bg-purple-500",
    icon: "text-purple-500",
    backdrop: "from-purple-900/40",
  },
};

function SectionHeading({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-kicker">{label}</span>
      <h2>{children}</h2>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);

  useEffect(() => {
    if (!activeProject) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject]);

  const project = activeProject ? projects[activeProject] : null;

  return (
    <>
      <div aria-hidden="true" className="ambient ambient-one" />
      <div aria-hidden="true" className="ambient ambient-two" />

      <header className="site-header">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#hero"
            className="brand-mark"
          >
            <span className="brand-icon">&lt;T/&gt;</span>
            <span className="brand-name">TASHRIF <span>MIYAJI</span></span>
          </a>
          <nav
            aria-label="Main navigation"
            className="desktop-nav"
          >
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="nav-link"
              >
                {label}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="#connect">
            Let&apos;s talk <i className="fa-solid fa-arrow-up-right-from-square" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="menu-toggle"
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-xl`} />
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="mobile-nav"
          >
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="nav-link block py-2"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="site-main mx-auto w-full max-w-7xl space-y-24 px-5 py-8 sm:px-8 sm:py-12">
        <section
          id="hero"
          className="hero-section"
        >
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              Available for select projects <span className="availability-separator">/</span> 2026
            </div>
            <p className="hero-overline"><span>01</span> FULL-STACK DEVELOPER <span className="overline-rule" /></p>
            <h1 className="hero-title">
              I build digital
              <span> things that</span>
              <span className="hero-title-accent"> make a difference.</span>
            </h1>
            <p className="hero-description">
              Hey, I&apos;m <strong>Tashrif Miyaji</strong> — a self-taught
              developer turning complex ideas into fast, thoughtful, and
              scalable web experiences.
            </p>
            <div className="hero-tags">
              <span>Next.js</span><span>React</span><span>Node.js</span><span>TypeScript</span>
            </div>
            <p className="sr-only">
              I design and deploy robust, high-performance web systems using
              the MERN Stack and Next.js. I specialize in turning complex logic
              into structured, beautiful, and fully scalable user experiences.
            </p>
            <div className="hero-actions">
              <a
                href="/TASRIF_Resume.pdf"
                download
                className="button-primary"
              >
                <span>Download résumé</span>
                <i className="fa-solid fa-arrow-down" aria-hidden="true" />
              </a>
              <a
                href="#projects"
                className="button-quiet"
              >
                Explore my work <i className="fa-solid fa-arrow-down" aria-hidden="true" />
              </a>
            </div>
            <div className="hero-socials">
              <span>FIND ME ON</span>
              {[
                ["GitHub", "fa-github", "https://github.com/tashrifmiyaji"],
                ["LinkedIn", "fa-linkedin-in", "https://www.linkedin.com/in/tashrifmiyaji"],
                ["Twitter/X", "fa-twitter", "https://twitter.com/tashrifmiyaji"],
                ["Facebook", "fa-facebook-f", "https://www.facebook.com/tashrifmiyaji"],
              ].map(([label, icon, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <i className={`fa-brands ${icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="portrait-frame">
              <span className="portrait-index">TM — 26</span>
              <img src="https://avatars.githubusercontent.com/tashrifmiyaji" alt="Portrait of Tashrif Miyaji" />
              <span className="portrait-caption">CREATIVE MIND<br />DEVELOPER BY CRAFT</span>
            </div>
            <div className="floating-card floating-code">
              <span className="code-dots"><i /><i /><i /></span>
              <code><span>const</span> passion = <b>&quot;building&quot;</b>;</code>
            </div>
            <div className="floating-card floating-location">
              <i className="fa-solid fa-location-dot" aria-hidden="true" />
              <span>Based in <b>Bangladesh</b></span>
            </div>
            <span className="visual-cross cross-one">+</span>
            <span className="visual-cross cross-two">+</span>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="social-strip">
          <span>TRUSTED TO TURN IDEAS INTO INTERFACES</span>
          <div><b>Frontend</b><i /> <b>Backend</b><i /> <b>Creative Development</b><i /> <b>Problem Solving</b></div>
        </section>

        <section id="about" className="border-t border-gray-800/60 pt-16">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionHeading label="THE PERSON BEHIND THE PIXELS">
                <span aria-hidden="true">👨‍💻 </span>About Me
              </SectionHeading>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-gray-400 sm:text-lg md:col-span-8">
              <p>
                Hello! My programming journey started out of pure curiosity. As
                a{" "}
                <span className="font-semibold text-emerald-400">
                  self-taught full-stack developer
                </span>
                , I spent over 3 dedicated years learning software architecture
                from the ground up, turning errors into milestones.
              </p>
              <p>
                <strong className="text-gray-200">
                  The Type of Work I Enjoy:
                </strong>{" "}
                I thrive on building interactive real-time micro-services,
                structuring secure systems, optimization tasks, and
                transforming complex user problems into sleek, maintainable
                applications.
              </p>
              <p>
                <strong className="text-gray-200">
                  Hobbies &amp; Interests:
                </strong>{" "}
                When I&apos;m not writing code or debugging databases, you can
                find me analyzing sports tactics, capturing urban photography,
                or tweaking device firmware for performance optimization. I
                love maintaining a perfect balance between creative aesthetics
                and deep technical mechanics!
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="space-y-8 border-t border-gray-800/60 pt-16">
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
                    standard Higher Educational frameworks; mastery of
                    advanced programming standards via strict self-driven
                    build tasks and rigorous peer code audits.
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
                  <p className="font-mono text-xs text-blue-400">
                    Upwork | Remote
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    Building web apps for dynamic businesses, organizing
                    database relations, translating mockups to robust modular
                    responsive environments using the MERN &amp; Next.js
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="space-y-8 border-t border-gray-800/60 pt-16"
        >
          <div className="space-y-2">
            <h2 className="font-mono text-3xl font-bold tracking-tight text-white">
              <span aria-hidden="true">🚀 </span>Projects Portfolio
            </h2>
            <p className="text-gray-400">
              Click any card button below to see project details, challenges,
              technology stacks, and future plans.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projectKeys.map((key) => {
              const item = projects[key];
              const color = colorClasses[item.color];
              return (
                <article
                  key={key}
                  className="glow-effect flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-800 bg-darkCard transition-all duration-300"
                >
                  <div>
                    <div
                      className={`flex h-44 items-center justify-center border-b border-gray-800 bg-gradient-to-br ${color.backdrop} to-gray-900 p-4`}
                    >
                      <i
                        className={`fa-solid ${item.icon} text-5xl ${color.icon}`}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="space-y-3 p-6">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="line-clamp-2 text-sm text-gray-400">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={() => setActiveProject(key)}
                      className="w-full rounded-lg bg-gray-800 py-2.5 text-center font-mono text-xs font-bold text-white transition-colors hover:bg-emerald-500 hover:text-gray-950"
                    >
                      View More / Details
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="connect"
          className="mx-auto max-w-2xl space-y-8 border-t border-gray-800/60 pt-16"
        >
          <div className="space-y-2 text-center">
            <h2 className="font-mono text-2xl font-bold tracking-tight text-white">
              <span aria-hidden="true">📞 </span>Direct Contact
            </h2>
            <p className="text-gray-400">
              Feel free to connect directly via my verified secure channels
              below.
            </p>
          </div>
          <div className="grid gap-4 font-mono text-sm sm:grid-cols-2">
            <div className="flex items-center space-x-3 rounded-xl border border-gray-800 bg-darkCard p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-base text-emerald-400">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email Address</p>
                <a
                  href="mailto:tashrifmiyaji.contact@gmail.com"
                  className="break-all text-xs text-gray-300 hover:text-emerald-400"
                >
                  tashrifmiyaji.contact@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3 rounded-xl border border-gray-800 bg-darkCard p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-base text-blue-400">
                <i className="fa-solid fa-phone" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone Number</p>
                <a
                  href="tel:+8801771507052"
                  className="text-xs text-gray-300 hover:text-emerald-400"
                >
                  +880 1771-507052
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-900 bg-darkBg/40 py-8 text-center font-mono text-xs text-gray-500">
        &copy; 2026 Tashrif Miyaji. All Rights Reserved. Fully Responsive
        Architecture.
      </footer>

      {project && (
        <div
          className="project-modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProject(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="project-modal relative max-h-[90vh] w-full max-w-2xl space-y-6 overflow-y-auto rounded-2xl border border-gray-800 bg-darkCard p-6 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
              className="absolute right-4 top-4 text-lg font-bold text-gray-400 hover:text-white"
            >
              &times;
            </button>
            <h2
              id="project-dialog-title"
              className="pr-8 font-mono text-2xl font-bold text-white"
            >
              {project.title}
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-mono font-semibold text-emerald-400">
                  Main Technology Stack Used:
                </h3>
                <p className="mt-1 rounded border border-gray-800 bg-gray-900 p-2 font-mono text-xs text-gray-300">
                  {project.stack}
                </p>
              </div>
              <div>
                <h3 className="font-mono font-semibold text-emerald-400">
                  Brief Description:
                </h3>
                <p className="mt-1 leading-relaxed text-gray-400">
                  {project.description}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-3">
                  <h3 className="font-mono text-xs font-semibold text-amber-400">
                    ⚠️ Challenges Faced:
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-400">
                    {project.challenges}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-3">
                  <h3 className="font-mono text-xs font-semibold text-sky-400">
                    💡 Potential Improvements &amp; Future Plans:
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-400">
                    {project.improvements}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 border-t border-gray-800 pt-2 font-mono text-xs">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="modal-link-primary flex items-center space-x-1 rounded bg-emerald-500 px-4 py-2 font-bold text-gray-950 hover:bg-emerald-600"
              >
                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  aria-hidden="true"
                />
                <span>Live Project Link</span>
              </a>
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="modal-link-secondary flex items-center space-x-1 rounded border border-gray-700 bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
                <span>GitHub Client Repo</span>
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

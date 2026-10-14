"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  projectKeys,
  projects,
  type ProjectKey,
} from "@/data/portfolio";
import { ProjectModal } from "./project-modal";
import { useScrollReveal } from "./use-scroll-reveal";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);
  const sectionRef = useScrollReveal<HTMLElement>(
    ".project-heading, .project-reveal",
  );

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

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="space-y-8 border-t border-gray-800/60 pt-16"
      >
        <div className="project-heading space-y-2">
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
            const project = projects[key];

            return (
              <article
                key={key}
                className="glow-effect project-reveal flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-800 bg-darkCard transition-all duration-300"
              >
                <div>
                  <div className="project-cover">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="project-cover-label">PROJECT / 0{projectKeys.indexOf(key) + 1}</span>
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-gray-400">
                      {project.summary}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setActiveProject(key)}
                    className="project-details-button w-full rounded-lg bg-gray-800 py-2.5 text-center font-mono text-xs font-bold text-white transition-colors hover:bg-emerald-500 hover:text-gray-950"
                  >
                    Explore project
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      {activeProject && (
        <ProjectModal
          project={projects[activeProject]}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}

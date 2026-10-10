"use client";

import { useEffect, useState } from "react";
import {
  colorClasses,
  projectKeys,
  projects,
  type ProjectKey,
} from "@/data/portfolio";
import { ProjectModal } from "./project-modal";

export function ProjectsSection() {
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

  return (
    <>
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
            const project = projects[key];
            const color = colorClasses[project.color];

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
                      className={`fa-solid ${project.icon} text-5xl ${color.icon}`}
                      aria-hidden="true"
                    />
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
      {activeProject && (
        <ProjectModal
          project={projects[activeProject]}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}

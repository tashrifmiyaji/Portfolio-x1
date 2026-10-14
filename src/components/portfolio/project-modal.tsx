import type { projects } from "@/data/portfolio";
import Image from "next/image";
import { ArrowUpRight, GitBranch } from "lucide-react";

type Project = (typeof projects)[keyof typeof projects];

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="project-modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="project-modal relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-gray-800 bg-darkCard p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 text-lg font-bold text-gray-400 hover:text-white"
        >
          &times;
        </button>
        <h2 id="project-dialog-title" className="project-modal-title">
          {project.title}
        </h2>
        <div className="project-modal-content">
          <div
            className={`project-modal-image${project.image === "/taxi-go.png" ? " project-modal-image-phone" : ""}`}
          >
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div className="project-modal-details">
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
            <div className="flex flex-wrap gap-3 border-t border-gray-800 pt-4 font-mono text-xs">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="modal-link-primary flex items-center space-x-1 rounded bg-emerald-500 px-4 py-2 font-bold text-gray-950 hover:bg-emerald-600"
              >
                <ArrowUpRight size={16} aria-hidden="true" />
                <span>Live Project Link</span>
              </a>
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="modal-link-secondary flex items-center space-x-1 rounded border border-gray-700 bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
              >
                <GitBranch size={16} aria-hidden="true" />
                <span>{project.backendRepository ? "Frontend Repository" : "GitHub Repository"}</span>
              </a>
              {project.backendRepository && (
                <a
                  href={project.backendRepository}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link-secondary flex items-center space-x-1 rounded border border-gray-700 bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
                >
                  <GitBranch size={16} aria-hidden="true" />
                  <span>Backend Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

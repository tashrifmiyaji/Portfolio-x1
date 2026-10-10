import type { projects } from "@/data/portfolio";

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
        className="project-modal relative max-h-[90vh] w-full max-w-2xl space-y-6 overflow-y-auto rounded-2xl border border-gray-800 bg-darkCard p-6 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
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
  );
}

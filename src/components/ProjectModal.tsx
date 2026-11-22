import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import {
  UI_COPY,
  type Language,
  type ProjectItem,
} from '../data/portfolioData';
import { PROJECT_VISUALS } from '../utils/projectImages';

interface ProjectModalProps {
  project: ProjectItem | null;
  lang: Language;
  onClose: () => void;
}

export function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const t = UI_COPY.modal;
  const visual = PROJECT_VISUALS[project.id];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#02040A]/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-[700px] max-h-[88vh] overflow-y-auto bg-[#0B1324] border border-[#243961] rounded-xl shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 sm:px-8 py-5 bg-[#0B1324]/95 backdrop-blur-md border-b border-[#1C2C4B]">
          <div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-[#8596B2]">
              <span className="font-medium text-[#93C5FD]">{project.company}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{project.period[lang]}</span>
              <span aria-hidden="true">·</span>
              <span>{project.region[lang]}</span>
            </div>
            <h3
              id="project-modal-title"
              className="mt-1.5 text-[22px] sm:text-[24px] font-bold tracking-[-0.02em] text-[#F4F7FC]"
            >
              {project.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t.close[lang]}
            className="inline-flex items-center justify-center w-10 h-10 text-[#9EB0CC] hover:text-[#F4F7FC] hover:bg-[#13203B] rounded-md transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {visual && (
          <div className="relative h-48 sm:h-56 overflow-hidden border-b border-[#1C2C4B] bg-[#081124]">
            <img
              src={visual.src}
              alt={visual.alt[lang]}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1324] via-transparent to-transparent"
            />
          </div>
        )}

        <div className="px-6 sm:px-8 py-6 space-y-7">
          <div>
            <h4 className="text-[12px] font-semibold text-[#8596B2]">
              {t.overview[lang]}
            </h4>
            <p className="mt-2 text-[15px] leading-[1.68] text-[#B8C5DA]">
              {project.overview[lang]}
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-[#8596B2]">
              {t.deliverables[lang]}
            </h4>
            <ul className="mt-3 space-y-3">
              {project.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[15px] leading-[1.6] text-[#F4F7FC]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-[#60A5FA] select-none"
                  >
                    —
                  </span>
                  <span>{item[lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-5 border-t border-[#1C2C4B] grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[12px] font-semibold text-[#8596B2]">
                {t.outcome[lang]}
              </h4>
              <p className="mt-1.5 text-[14px] font-medium text-[#F4F7FC] leading-[1.55]">
                {project.impact[lang]}
              </p>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-[#8596B2]">
                {t.stack[lang]}
              </h4>
              <p className="mt-1.5 text-[14px] text-[#B8C5DA] leading-[1.6]">
                {project.stack.join(' · ')}
              </p>
            </div>
          </div>

          {(project.links?.length || project.url) && (
            <div className="pt-4 border-t border-[#1C2C4B] flex flex-wrap items-center justify-end gap-3">
              {project.links && project.links.length > 0 ? (
                project.links.map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium text-[#F4F7FC] bg-[#101C36] border border-[#243961] hover:border-[#60A5FA] rounded-md transition-colors whitespace-nowrap"
                  >
                    <span>{site.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                ))
              ) : (
                project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-white bg-[#2563EB] hover:bg-[#3B82F6] rounded-md transition-colors whitespace-nowrap"
                  >
                    <span>{UI_COPY.sections.liveSite[lang]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

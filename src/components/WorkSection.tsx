import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  PROJECTS,
  UI_COPY,
  type Language,
  type ProjectCategory,
  type ProjectItem,
} from '../data/portfolioData';
import {
  filterProjectsByCategory,
  getCategoryCounts,
} from '../utils/portfolio';
import { PROJECT_VISUALS } from '../utils/projectImages';

interface WorkSectionProps {
  lang: Language;
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  onInspectProject: (project: ProjectItem) => void;
}

const CATEGORY_ORDER: ProjectCategory[] = [
  'all',
  'fintech',
  'saas',
  'crm',
  'platforms',
];

function ProjectVisualFrame({
  project,
  lang,
  aspectClass,
}: {
  project: ProjectItem;
  lang: Language;
  aspectClass: string;
}) {
  const [failed, setFailed] = useState(false);
  const visual = PROJECT_VISUALS[project.id];

  if (!visual) return null;

  return (
    <div
      className={`relative overflow-hidden bg-[#081124] border-b border-[#1C2C4B] ${aspectClass}`}
    >
      {!failed ? (
        <img
          src={visual.src}
          alt={visual.alt[lang]}
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0E1E3F] to-[#060B15] p-6">
          <span className="font-display text-sm font-semibold text-[#93C5FD]">
            {project.name}
          </span>
        </div>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1324] via-[#0B1324]/15 to-transparent"
      />
    </div>
  );
}

export function WorkSection({
  lang,
  activeCategory,
  onSelectCategory,
  onInspectProject,
}: WorkSectionProps) {
  const filteredProjects = filterProjectsByCategory(PROJECTS, activeCategory);
  const counts = getCategoryCounts(PROJECTS);
  const t = UI_COPY.sections;
  const catLabels = UI_COPY.categories;

  return (
    <section
      id="work"
      className="py-16 sm:py-20 lg:py-24 border-t border-[#1C2C4B]"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section header + interactive category filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#1C2C4B]">
          <div className="max-w-[48ch]">
            <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.025em] text-[#F4F7FC]">
              {t.workTitle[lang]}
            </h2>
            <p className="mt-2.5 text-[15px] leading-[1.6] text-[#B8C5DA]">
              {t.workSubtitle[lang]}
            </p>
          </div>

          <div
            role="group"
            aria-label={
              lang === 'ar'
                ? 'تصفية المشاريع حسب المجال'
                : 'Filter projects by domain'
            }
            className="flex flex-wrap lg:flex-nowrap items-center gap-1 p-1 bg-[#080F1E] border border-[#1C2C4B] rounded-lg self-start lg:self-auto shrink-0"
          >
            {CATEGORY_ORDER.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onSelectCategory(category)}
                  className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#1D4ED8] text-white'
                      : 'text-[#8596B2] hover:text-[#F4F7FC]'
                  }`}
                >
                  <span>{catLabels[category][lang]}</span>
                  <span
                    className={`ms-1.5 font-mono text-[11px] tabular-nums ${
                      active ? 'text-white/85' : 'text-[#8596B2]'
                    }`}
                  >
                    {counts[category]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project cards grid */}
        <div
          data-testid="projects-grid"
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project, index) => {
            const visual = PROJECT_VISUALS[project.id];
            const isLeadSplit =
              (Boolean(project.featured) && index === 0) ||
              (project.id === 'fulinks-aheadof' &&
                (activeCategory === 'all' || activeCategory === 'saas'));
            const isReversedSplit = project.id === 'fulinks-aheadof';

            const isSingleResult = filteredProjects.length === 1;
            const isFullWidth = isLeadSplit || isSingleResult;

            if (isLeadSplit && visual) {
              return (
                <article
                  key={project.id}
                  className="group md:col-span-2 grid grid-cols-1 lg:grid-cols-12 surface-navy-card rounded-xl overflow-hidden transition-colors hover:border-[#34548C]"
                >
                  {/* Visual Showcase Half */}
                  <div
                    className={`lg:col-span-6 relative min-h-[240px] sm:min-h-[300px] lg:min-h-full bg-[#081124] overflow-hidden border-b lg:border-b-0 border-[#1C2C4B] ${
                      isReversedSplit
                        ? 'lg:order-2 lg:border-s'
                        : 'lg:border-e'
                    }`}
                  >
                    <img
                      src={visual.src}
                      alt={visual.alt[lang]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05080F]/90 via-[#05080F]/25 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                      <p className="text-[12px] font-medium text-[#93C5FD]">
                        {UI_COPY.modal.outcome[lang]}
                      </p>
                      <p className="mt-1 text-[15px] font-semibold text-[#F4F7FC] leading-[1.45]">
                        {project.impact[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Editorial Dossier Half */}
                  <div
                    className={`lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between ${
                      isReversedSplit ? 'lg:order-1' : ''
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-[#8596B2]">
                        <span className="font-medium text-[#93C5FD]">
                          {project.company}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">
                          {project.period[lang]}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.region[lang]}</span>
                      </div>

                      <h3 className="mt-3 text-[22px] sm:text-[26px] font-bold tracking-[-0.02em] text-[#F4F7FC]">
                        {project.name}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.68] text-[#B8C5DA]">
                        {project.summary[lang]}
                      </p>

                      <p className="mt-5 text-[12px] text-[#8596B2] leading-[1.65]">
                        {project.stack.join(' · ')}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-[#1C2C4B] flex flex-wrap items-center justify-between gap-4">
                      {project.links && project.links.length > 0 ? (
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px]">
                          {project.links.map((site) => (
                            <a
                              key={site.url}
                              href={site.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-0.5 font-medium text-[#9EB0CC] hover:text-[#F4F7FC] transition-colors whitespace-nowrap"
                            >
                              <span>{site.label}</span>
                              <ArrowUpRight
                                className="w-3.5 h-3.5"
                                aria-hidden="true"
                              />
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="text-[13px] text-[#8596B2]">
                          {project.role[lang]}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={() => onInspectProject(project)}
                        aria-label={`${t.viewDetails[lang]}: ${project.name}`}
                        className="text-[13px] font-semibold text-[#60A5FA] hover:text-[#93C5FD] transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {t.viewDetails[lang]}
                      </button>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={project.id}
                className={`group flex flex-col justify-between surface-navy-card rounded-xl overflow-hidden transition-colors hover:border-[#34548C] ${
                  isFullWidth ? 'md:col-span-2' : ''
                }`}
              >
                {visual && (
                  <ProjectVisualFrame
                    project={project}
                    lang={lang}
                    aspectClass={isFullWidth ? 'aspect-[21/9]' : 'aspect-[16/10]'}
                  />
                )}

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Quiet unboxed metadata line */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-[#8596B2]">
                      <span className="font-medium text-[#93C5FD]">
                        {project.company}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">
                        {project.period[lang]}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.region[lang]}</span>
                    </div>

                    <div className="mt-3">
                      <h3 className="text-[20px] sm:text-[22px] font-bold tracking-[-0.02em] text-[#F4F7FC]">
                        {project.name}
                      </h3>
                      <p className="mt-2.5 text-[15px] leading-[1.65] text-[#B8C5DA]">
                        {project.summary[lang]}
                      </p>

                      {project.links && project.links.length > 1 && (
                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px]">
                          {project.links.map((site) => (
                            <a
                              key={site.url}
                              href={site.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-0.5 font-medium text-[#60A5FA] hover:text-[#93C5FD] transition-colors whitespace-nowrap"
                            >
                              <span>{site.label}</span>
                              <ArrowUpRight
                                className="w-3.5 h-3.5"
                                aria-hidden="true"
                              />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#1C2C4B] flex flex-wrap items-center justify-between gap-4">
                    <p className="text-[12px] text-[#8596B2] leading-[1.5] max-w-[44ch]">
                      {project.stack.slice(0, 4).join(' · ')}
                    </p>

                    <div className="flex items-center gap-5 shrink-0">
                      {!project.links && project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[13px] font-medium text-[#9EB0CC] hover:text-[#F4F7FC] transition-colors whitespace-nowrap"
                        >
                          <span>{t.liveSite[lang]}</span>
                          <ArrowUpRight
                            className="w-3.5 h-3.5"
                            aria-hidden="true"
                          />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => onInspectProject(project)}
                        aria-label={`${t.viewDetails[lang]}: ${project.name}`}
                        className="text-[13px] font-semibold text-[#60A5FA] hover:text-[#93C5FD] transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {t.viewDetails[lang]}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

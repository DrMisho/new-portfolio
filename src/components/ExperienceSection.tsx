import { ArrowUpRight } from 'lucide-react';
import {
  EXPERIENCE,
  UI_COPY,
  type Language,
} from '../data/portfolioData';

interface ExperienceSectionProps {
  lang: Language;
}

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  const t = UI_COPY.sections;

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 border-t border-[#1C2C4B]"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="max-w-[54ch] pb-10 border-b border-[#1C2C4B]">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.025em] text-[#F4F7FC]">
            {t.experienceTitle[lang]}
          </h2>
          <p className="mt-2.5 text-[15px] leading-[1.6] text-[#B8C5DA]">
            {t.experienceSubtitle[lang]}
          </p>
        </div>

        <div className="divide-y divide-[#1C2C4B]">
          {EXPERIENCE.map((item) => (
            <article
              key={item.id}
              className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
            >
              {/* Left column: Company, dates, role */}
              <div className="lg:col-span-4 space-y-1.5">
                <p className="font-mono text-[13px] text-[#93C5FD] tabular-nums">
                  {item.period[lang]}
                </p>
                <h3 className="text-[21px] font-bold tracking-[-0.02em] text-[#F4F7FC]">
                  {item.company}
                </h3>
                <p className="text-[14px] font-medium text-[#B8C5DA]">
                  {item.role[lang]}
                </p>
                <p className="text-[13px] text-[#8596B2]">
                  {item.location[lang]}
                </p>
              </div>

              {/* Right column: Concrete deliverables & live systems */}
              <div className="lg:col-span-8 space-y-5">
                <p className="text-[15px] leading-[1.68] text-[#B8C5DA]">
                  {item.summary[lang]}
                </p>

                <ul className="space-y-2.5">
                  {item.achievements.map((achievement, idx) => (
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
                      <span>{achievement[lang]}</span>
                    </li>
                  ))}
                </ul>

                {item.systems.length > 0 && (
                  <div className="pt-3 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[13px]">
                    <span className="font-medium text-[#8596B2]">
                      {t.systemsShipped[lang]}:
                    </span>
                    {item.systems.map((sys) =>
                      sys.url ? (
                        <a
                          key={sys.name}
                          href={sys.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 font-medium text-[#60A5FA] hover:text-[#93C5FD] transition-colors whitespace-nowrap"
                        >
                          <span>{sys.name}</span>
                          <ArrowUpRight
                            className="w-3.5 h-3.5"
                            aria-hidden="true"
                          />
                        </a>
                      ) : (
                        <span key={sys.name} className="text-[#9EB0CC]">
                          <span className="font-medium text-[#F4F7FC]">
                            {sys.name}
                          </span>
                          {sys.note ? ` (${sys.note[lang]})` : ''}
                        </span>
                      )
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

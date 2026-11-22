import { useState } from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import {
  CONTACT_INFO,
  PROFILE_IMAGE_PATH,
  PROOF_METRICS,
  UI_COPY,
  type Language,
} from '../data/portfolioData';

interface HeroSectionProps {
  lang: Language;
  onToggleLanguage: () => void;
}

export function HeroSection({ lang, onToggleLanguage }: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const t = UI_COPY.hero;

  return (
    <section id="top" className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Asymmetric 12-column hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left column: Typographic dossier */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              {/* Quiet unboxed metadata line */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-[#8596B2]">
                <span className="font-medium text-[#93C5FD] whitespace-nowrap">
                  {t.metaRole[lang]}
                </span>
                <span aria-hidden="true">·</span>
                <span className="whitespace-nowrap">{CONTACT_INFO.location[lang]}</span>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span className="basis-full sm:basis-auto font-mono text-[12px] tabular-nums whitespace-nowrap">
                  {t.metaExp[lang]}
                </span>
              </div>

              <h1 className="text-[clamp(2.25rem,4.3vw,3.5rem)] leading-[1.09] tracking-[-0.03em] font-bold text-[#F4F7FC] max-w-[18ch]">
                {t.headline[lang]}
              </h1>

              <p className="text-[16px] sm:text-[17px] leading-[1.68] text-[#B8C5DA] max-w-[60ch]">
                {t.lead[lang]}
              </p>
            </div>

            {/* Primary CTA + Quiet utility links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-[14px] font-medium text-white bg-[#2563EB] hover:bg-[#3B82F6] rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                {t.primaryCta[lang]}
              </a>

              <a
                href="#work"
                className="text-[14px] font-medium text-[#F4F7FC] border-b border-[#60A5FA]/50 hover:border-[#93C5FD] hover:text-[#93C5FD] pb-0.5 transition-colors whitespace-nowrap shrink-0"
              >
                {t.secondaryCta[lang]}
              </a>

              <span
                aria-hidden="true"
                className="hidden sm:inline-block h-4 w-px bg-[#1C2C4B]"
              />

              <div className="flex items-center gap-5 text-[13px] text-[#8596B2]">
                <a
                  href={CONTACT_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#F4F7FC] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <a
                  href={CONTACT_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#F4F7FC] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={onToggleLanguage}
                  className="inline-flex items-center gap-1.5 text-[#F4F7FC] font-medium hover:text-[#60A5FA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{t.switchLang[lang]}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right column: Gallery-mounted dark-navy editorial portrait frame */}
          <div className="lg:col-span-4 flex flex-col">
            <figure className="flex flex-col h-full surface-navy-card rounded-xl overflow-hidden">
              <div className="p-3 bg-[#0E192F] flex-1 flex">
                <div className="relative w-full min-h-[280px] sm:min-h-[320px] lg:min-h-0 rounded-lg overflow-hidden border border-[#253A63] bg-[#0B1324]">
                  {!imgFailed ? (
                    <>
                      <img
                        src={PROFILE_IMAGE_PATH}
                        alt={
                          lang === 'ar'
                            ? 'الصورة الشخصية لمصطفى ميشو'
                            : 'Portrait of Mustafa Misho, Software Engineer'
                        }
                        referrerPolicy="no-referrer"
                        onError={() => setImgFailed(true)}
                        className="w-full h-full object-cover object-top brightness-[0.95] contrast-[1.05] saturate-[0.9]"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060B17]/70 via-transparent to-[#0B1730]/15"
                      />
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#0B1324] text-[#B8C5DA]">
                      <span className="font-display text-3xl font-bold tracking-tight text-[#F4F7FC]">
                        MM
                      </span>
                      <span className="mt-2 text-xs text-[#8596B2]">
                        {CONTACT_INFO.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <figcaption className="px-4 py-3.5 border-t border-[#1C2C4B] bg-[#0B1324] text-[12px] text-[#9EB0CC] leading-snug">
                {t.portraitCaption[lang]}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-width quantitative proof strip in deep navy */}
        <div className="mt-14 surface-navy-card rounded-xl px-6 py-8 sm:px-8">
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#1C2C4B] rtl:lg:divide-x-reverse">
            {PROOF_METRICS.map((metric, idx) => (
              <div
                key={metric.id}
                className={
                  idx === 0
                    ? 'lg:pe-7'
                    : idx === PROOF_METRICS.length - 1
                      ? 'lg:ps-7'
                      : 'lg:px-7'
                }
              >
                <dt className="text-[12px] font-medium text-[#8596B2]">
                  {metric.label[lang]}
                </dt>
                <dd className="mt-1.5 font-mono text-[26px] sm:text-[28px] font-medium tracking-[-0.02em] text-[#F4F7FC] tabular-nums">
                  {metric.value[lang]}
                </dd>
                <p className="mt-2 text-[13px] leading-[1.55] text-[#9EB0CC]">
                  {metric.context[lang]}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

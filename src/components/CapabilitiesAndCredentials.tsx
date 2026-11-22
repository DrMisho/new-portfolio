import {
  AWARDS,
  CAPABILITIES,
  EDUCATION,
  UI_COPY,
  type Language,
} from '../data/portfolioData';

interface CapabilitiesAndCredentialsProps {
  lang: Language;
}

export function CapabilitiesAndCredentials({
  lang,
}: CapabilitiesAndCredentialsProps) {
  const t = UI_COPY.sections;

  return (
    <>
      {/* Technical Capabilities Matrix */}
      <section
        id="capabilities"
        className="py-16 sm:py-20 lg:py-24 border-t border-[#1C2C4B] bg-[#080F1E]/80"
      >
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
          <div className="max-w-[54ch] pb-10 border-b border-[#1C2C4B]">
            <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.025em] text-[#F4F7FC]">
              {t.capabilitiesTitle[lang]}
            </h2>
            <p className="mt-2.5 text-[15px] leading-[1.6] text-[#B8C5DA]">
              {t.capabilitiesSubtitle[lang]}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#1C2C4B] rtl:lg:divide-x-reverse">
            {CAPABILITIES.map((group, idx) => (
              <div
                key={group.id}
                className={
                  idx === 0
                    ? 'lg:pe-7'
                    : idx === CAPABILITIES.length - 1
                      ? 'lg:ps-7'
                      : 'lg:px-7'
                }
              >
                <h3 className="text-[17px] font-bold tracking-[-0.015em] text-[#F4F7FC]">
                  <span className="font-mono text-[13px] font-medium text-[#60A5FA] me-2 tabular-nums">
                    {group.index}.
                  </span>
                  {group.title[lang]}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#9EB0CC]">
                  {group.description[lang]}
                </p>
                <ul className="mt-5 pt-4 border-t border-[#1C2C4B] space-y-2 text-[14px] text-[#E2EAF6]">
                  {group.items.map((item) => (
                    <li key={item} className="leading-[1.5]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Academic Honors */}
      <section
        id="credentials"
        className="py-16 sm:py-20 lg:py-24 border-t border-[#1C2C4B]"
      >
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.025em] text-[#F4F7FC] pb-10 border-b border-[#1C2C4B]">
            {t.credentialsTitle[lang]}
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12">
            {/* Left: Education & Personal Note */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h3 className="text-[13px] font-semibold text-[#93C5FD]">
                  {t.educationLabel[lang]}
                </h3>

                <div className="mt-5 divide-y divide-[#1C2C4B]">
                  {EDUCATION.map((edu, idx) => (
                    <div
                      key={edu.id}
                      className={idx === 0 ? 'pb-6' : 'pt-6'}
                    >
                      <p className="font-mono text-[12px] text-[#8596B2] tabular-nums">
                        {edu.period[lang]}
                      </p>
                      <h4 className="mt-1 text-[18px] font-bold text-[#F4F7FC]">
                        {edu.degree[lang]} — {edu.field[lang]}
                      </h4>
                      <p className="mt-0.5 text-[14px] font-medium text-[#B8C5DA]">
                        {edu.institution[lang]}
                      </p>
                      {edu.note && (
                        <p className="mt-2 text-[13px] leading-[1.55] text-[#8596B2] tabular-nums">
                          {edu.note[lang]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#1C2C4B]">
                <h3 className="text-[13px] font-semibold text-[#93C5FD]">
                  {t.beyondTitle[lang]}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.68] text-[#B8C5DA]">
                  {t.beyondBody[lang]}
                </p>
              </div>
            </div>

            {/* Right: Academic Honors Ledger */}
            <div className="lg:col-span-7">
              <h3 className="text-[13px] font-semibold text-[#93C5FD]">
                {t.awardsLabel[lang]}
              </h3>

              <ol className="mt-5 divide-y divide-[#1C2C4B] border-y border-[#1C2C4B]">
                {AWARDS.map((award) => (
                  <li
                    key={award.id}
                    className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6"
                  >
                    <div>
                      <p className="text-[15px] font-semibold text-[#F4F7FC]">
                        {award.title[lang]}
                      </p>
                      <p className="text-[13px] text-[#8596B2]">
                        {award.issuer[lang]}
                      </p>
                    </div>
                    <span className="font-mono text-[13px] text-[#93C5FD] tabular-nums shrink-0">
                      {award.year}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

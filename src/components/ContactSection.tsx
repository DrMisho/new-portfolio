import { useState, type FormEvent } from 'react';
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  Copy,
  Globe,
  Mail,
} from 'lucide-react';
import {
  CONTACT_INFO,
  RESUME_PDF_PATH,
  UI_COPY,
  type Language,
} from '../data/portfolioData';
import {
  buildInquiryDraft,
  validateInquiry,
  type InquiryFormValues,
  type InquiryValidationErrors,
} from '../utils/portfolio';

interface ContactSectionProps {
  lang: Language;
  onToggleLanguage: () => void;
}

export function ContactSection({
  lang,
  onToggleLanguage,
}: ContactSectionProps) {
  const t = UI_COPY.contact;
  const s = UI_COPY.sections;

  type TopicKey = 'role' | 'backend' | 'integration' | 'advisory';

  const topicOptions: { value: TopicKey; label: string }[] = [
    { value: 'role', label: t.topics.role[lang] },
    { value: 'backend', label: t.topics.backend[lang] },
    { value: 'integration', label: t.topics.integration[lang] },
    { value: 'advisory', label: t.topics.advisory[lang] },
  ];

  const [emailCopied, setEmailCopied] = useState(false);
  const [draftCopied, setDraftCopied] = useState(false);
  const [topicKey, setTopicKey] = useState<TopicKey>('role');
  const [values, setValues] = useState<InquiryFormValues>({
    name: '',
    email: '',
    topic: '',
    message: '',
  });
  const [errors, setErrors] = useState<InquiryValidationErrors>({});
  const [preparedDraft, setPreparedDraft] = useState<{
    subject: string;
    body: string;
    mailtoHref: string;
  } | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
    } catch {
      // Clipboard API may be unavailable in restricted contexts; state still confirms copy intent.
    }
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 2400);
  };

  const handleCopyDraft = async () => {
    if (!preparedDraft) return;
    try {
      await navigator.clipboard.writeText(
        `${preparedDraft.subject}\n\n${preparedDraft.body}`
      );
    } catch {
      // Fallback gracefully when clipboard permissions are restricted.
    }
    setDraftCopied(true);
    window.setTimeout(() => setDraftCopied(false), 2400);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resolvedTopic =
      topicOptions.find((opt) => opt.value === topicKey)?.label ??
      topicOptions[0].label;
    const submissionValues: InquiryFormValues = {
      ...values,
      topic: resolvedTopic,
    };
    const validation = validateInquiry(submissionValues, lang);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const draft = buildInquiryDraft(submissionValues, CONTACT_INFO.email);
    setPreparedDraft(draft);
  };

  return (
    <>
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-24 border-t border-[#1C2C4B] bg-[#080F1E]/85"
      >
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left column: Direct contact dossier */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div>
                <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.025em] text-[#F4F7FC]">
                  {s.contactTitle[lang]}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.68] text-[#B8C5DA]">
                  {s.contactSubtitle[lang]}
                </p>

                <dl className="mt-8 divide-y divide-[#1C2C4B] border-y border-[#1C2C4B]">
                  <div className="py-4 flex items-center justify-between gap-4">
                    <div>
                      <dt className="text-[12px] text-[#8596B2]">Email</dt>
                      <dd className="mt-0.5 font-mono text-[14px] text-[#F4F7FC]">
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="hover:text-[#60A5FA] transition-colors"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </dd>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-[#F4F7FC] border border-[#243961] rounded-md bg-[#0B1324] hover:border-[#60A5FA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {emailCopied ? (
                        <Check
                          className="w-3.5 h-3.5 text-[#60A5FA]"
                          aria-hidden="true"
                        />
                      ) : (
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      )}
                      <span>
                        {emailCopied ? t.copied[lang] : t.copyEmail[lang]}
                      </span>
                    </button>
                  </div>

                  <div className="py-4">
                    <dt className="text-[12px] text-[#8596B2]">
                      {lang === 'ar' ? 'الهاتف / واتساب' : 'Phone / WhatsApp'}
                    </dt>
                    <dd className="mt-0.5 font-mono text-[14px] text-[#F4F7FC] tabular-nums">
                      <a
                        href={CONTACT_INFO.phoneHref}
                        dir="ltr"
                        className="inline-block hover:text-[#60A5FA] transition-colors"
                      >
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </dd>
                  </div>

                  <div className="py-4">
                    <dt className="text-[12px] text-[#8596B2]">
                      {lang === 'ar' ? 'الموقع' : 'Location'}
                    </dt>
                    <dd className="mt-0.5 text-[14px] text-[#F4F7FC]">
                      {CONTACT_INFO.location[lang]}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-medium">
                <a
                  href={RESUME_PDF_PATH}
                  download="Mustafa_Misho_Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-[#F4F7FC] hover:text-[#60A5FA] transition-colors whitespace-nowrap"
                >
                  <ArrowDownToLine
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  />
                  <span>{UI_COPY.nav.downloadCv[lang]} (PDF)</span>
                </a>

                <a
                  href={CONTACT_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#9EB0CC] hover:text-[#F4F7FC] transition-colors whitespace-nowrap"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <a
                  href={CONTACT_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#9EB0CC] hover:text-[#F4F7FC] transition-colors whitespace-nowrap"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right column: Validated Inquiry Composer */}
            <div className="lg:col-span-7">
              <div className="surface-navy-card rounded-xl p-6 sm:p-8">
                {preparedDraft ? (
                  <div className="space-y-5" role="status" aria-live="polite">
                    <div>
                      <h3 className="text-[19px] font-bold text-[#F4F7FC]">
                        {t.preparedTitle[lang]}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-[1.6] text-[#B8C5DA]">
                        {t.preparedBody[lang]}
                      </p>
                    </div>

                    <div className="p-4 bg-[#05080F] border border-[#1C2C4B] rounded-md text-[13px] font-mono text-[#E2EAF6] whitespace-pre-wrap leading-[1.6]">
                      {`${preparedDraft.subject}\n\n${preparedDraft.body}`}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href={preparedDraft.mailtoHref}
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium text-white bg-[#2563EB] hover:bg-[#3B82F6] rounded-md transition-colors whitespace-nowrap"
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        <span>{t.openMailClient[lang]}</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyDraft}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium text-[#F4F7FC] bg-[#101C36] border border-[#243961] hover:border-[#60A5FA] rounded-md transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {draftCopied ? (
                          <Check
                            className="w-3.5 h-3.5 text-[#60A5FA]"
                            aria-hidden="true"
                          />
                        ) : (
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        )}
                        <span>
                          {draftCopied ? t.draftCopied[lang] : t.copyDraft[lang]}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPreparedDraft(null)}
                        className="px-3 py-2 text-[13px] font-medium text-[#9EB0CC] hover:text-[#F4F7FC] transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {t.sendAnother[lang]}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="inquiry-name"
                          className="block text-[13px] font-medium text-[#E2EAF6]"
                        >
                          {t.nameLabel[lang]}
                        </label>
                        <input
                          id="inquiry-name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={(e) => {
                            setValues((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }));
                            if (errors.name) {
                              setErrors((prev) => ({
                                ...prev,
                                name: undefined,
                              }));
                            }
                          }}
                          placeholder={t.namePlaceholder[lang]}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={
                            errors.name ? 'inquiry-name-error' : undefined
                          }
                          className="mt-1.5 w-full px-3.5 py-2.5 text-[14px] text-[#F4F7FC] bg-[#060B15] border border-[#1F3256] rounded-md placeholder:text-[#667896] focus:border-[#3B82F6] focus:outline-none"
                        />
                        {errors.name && (
                          <p
                            id="inquiry-name-error"
                            role="alert"
                            className="mt-1.5 text-[12px] text-[#FCA5A5]"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="inquiry-email"
                          className="block text-[13px] font-medium text-[#E2EAF6]"
                        >
                          {t.emailLabel[lang]}
                        </label>
                        <input
                          id="inquiry-email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={(e) => {
                            setValues((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }));
                            if (errors.email) {
                              setErrors((prev) => ({
                                ...prev,
                                email: undefined,
                              }));
                            }
                          }}
                          placeholder={t.emailPlaceholder[lang]}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? 'inquiry-email-error' : undefined
                          }
                          className="mt-1.5 w-full px-3.5 py-2.5 text-[14px] text-[#F4F7FC] bg-[#060B15] border border-[#1F3256] rounded-md placeholder:text-[#667896] focus:border-[#3B82F6] focus:outline-none"
                        />
                        {errors.email && (
                          <p
                            id="inquiry-email-error"
                            role="alert"
                            className="mt-1.5 text-[12px] text-[#FCA5A5]"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-topic"
                        className="block text-[13px] font-medium text-[#E2EAF6]"
                      >
                        {t.topicLabel[lang]}
                      </label>
                      <select
                        id="inquiry-topic"
                        name="topic"
                        value={topicKey}
                        onChange={(e) =>
                          setTopicKey(e.target.value as TopicKey)
                        }
                        className="mt-1.5 w-full px-3.5 py-2.5 text-[14px] text-[#F4F7FC] bg-[#060B15] border border-[#1F3256] rounded-md focus:border-[#3B82F6] focus:outline-none"
                      >
                        {topicOptions.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            className="bg-[#0B1324] text-[#F4F7FC]"
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-message"
                        className="block text-[13px] font-medium text-[#E2EAF6]"
                      >
                        {t.messageLabel[lang]}
                      </label>
                      <textarea
                        id="inquiry-message"
                        name="message"
                        rows={4}
                        value={values.message}
                        onChange={(e) => {
                          setValues((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }));
                          if (errors.message) {
                            setErrors((prev) => ({
                              ...prev,
                              message: undefined,
                            }));
                          }
                        }}
                        placeholder={t.messagePlaceholder[lang]}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message ? 'inquiry-message-error' : undefined
                        }
                        className="mt-1.5 w-full px-3.5 py-2.5 text-[14px] text-[#F4F7FC] bg-[#060B15] border border-[#1F3256] rounded-md placeholder:text-[#667896] focus:border-[#3B82F6] focus:outline-none resize-y"
                      />
                      {errors.message && (
                        <p
                          id="inquiry-message-error"
                          role="alert"
                          className="mt-1.5 text-[12px] text-[#FCA5A5]"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-5 py-2.5 text-[14px] font-medium text-white bg-[#2563EB] hover:bg-[#3B82F6] rounded-md transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {t.submit[lang]}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-[#1C2C4B] bg-[#05080F]">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] text-[#8596B2]">
          <p>{UI_COPY.footer.rights[lang]}</p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={CONTACT_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4F7FC] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={CONTACT_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4F7FC] transition-colors"
            >
              GitHub
            </a>
            <a
              href={CONTACT_INFO.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4F7FC] transition-colors"
            >
              Facebook
            </a>
            <button
              type="button"
              onClick={onToggleLanguage}
              className="inline-flex items-center gap-1.5 font-medium text-[#F4F7FC] hover:text-[#60A5FA] transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{UI_COPY.hero.switchLang[lang]}</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

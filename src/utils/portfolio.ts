import type {
  Language,
  ProjectCategory,
  ProjectItem,
} from '../data/portfolioData';

export interface InquiryFormValues {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface InquiryValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface InquiryValidationResult {
  valid: boolean;
  errors: InquiryValidationErrors;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function filterProjectsByCategory(
  projects: readonly ProjectItem[],
  category: ProjectCategory
): ProjectItem[] {
  if (category === 'all') {
    return [...projects];
  }
  return projects.filter((project) => project.category === category);
}

export function getCategoryCounts(
  projects: readonly ProjectItem[]
): Record<ProjectCategory, number> {
  const counts: Record<ProjectCategory, number> = {
    all: projects.length,
    fintech: 0,
    saas: 0,
    crm: 0,
    platforms: 0,
  };

  for (const project of projects) {
    counts[project.category] += 1;
  }

  return counts;
}

export function validateInquiry(
  values: InquiryFormValues,
  lang: Language = 'en'
): InquiryValidationResult {
  const errors: InquiryValidationErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedMessage = values.message.trim();

  if (trimmedName.length < 2) {
    errors.name =
      lang === 'ar'
        ? 'يرجى إدخال اسمك الكامل (حرفان على الأقل).'
        : 'Please enter your name (at least 2 characters).';
  }

  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email =
      lang === 'ar'
        ? 'يرجى إدخال عنوان بريد إلكتروني صحيح.'
        : 'Please enter a valid email address.';
  }

  if (trimmedMessage.length < 15) {
    errors.message =
      lang === 'ar'
        ? 'يرجى كتابة تفاصيل مختصرة (15 حرفاً على الأقل).'
        : 'Please share a brief note (at least 15 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildInquiryDraft(
  values: InquiryFormValues,
  recipientEmail: string
): { subject: string; body: string; mailtoHref: string } {
  const cleanName = values.name.trim();
  const cleanEmail = values.email.trim();
  const cleanTopic = values.topic.trim() || 'Engineering Inquiry';
  const cleanMessage = values.message.trim();

  const subject = `[Portfolio] ${cleanTopic} — ${cleanName}`;
  const body = `Name: ${cleanName}\nEmail: ${cleanEmail}\nTopic: ${cleanTopic}\n\n${cleanMessage}`;
  const mailtoHref = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return { subject, body, mailtoHref };
}

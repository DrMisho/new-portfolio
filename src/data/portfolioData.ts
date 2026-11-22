export type Language = 'en' | 'ar';

export type ProjectCategory =
  | 'all'
  | 'fintech'
  | 'saas'
  | 'crm'
  | 'platforms';

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface ProofMetric {
  id: string;
  value: LocalizedText;
  label: LocalizedText;
  context: LocalizedText;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: Exclude<ProjectCategory, 'all'>;
  company: string;
  period: LocalizedText;
  region: LocalizedText;
  role: LocalizedText;
  summary: LocalizedText;
  overview: LocalizedText;
  highlights: LocalizedText[];
  stack: string[];
  impact: LocalizedText;
  url?: string;
  links?: { label: string; url: string }[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  location: LocalizedText;
  summary: LocalizedText;
  achievements: LocalizedText[];
  systems: { name: string; note?: LocalizedText; url?: string }[];
}

export interface CapabilityGroup {
  id: string;
  index: string;
  title: LocalizedText;
  description: LocalizedText;
  items: string[];
}

export interface EducationItem {
  id: string;
  institution: LocalizedText;
  degree: LocalizedText;
  field: LocalizedText;
  period: LocalizedText;
  note?: LocalizedText;
}

export interface AwardItem {
  id: string;
  year: string;
  title: LocalizedText;
  issuer: LocalizedText;
}

export const RESUME_PDF_PATH = '/assets/aistudio/mustafa_misho_resume_1887e50f.pdf';
export const PROFILE_IMAGE_PATH = '/img/profile.jpg';

export const CONTACT_INFO = {
  name: 'Mustafa Misho',
  nameAr: 'مصطفى ميشو',
  email: 'mstafa.misho@gmail.com',
  phoneDisplay: '+963 964 679 449',
  phoneHref: 'tel:+963964679449',
  location: {
    en: 'Aleppo, Syria',
    ar: 'حلب، سوريا',
  },
  links: {
    linkedin: 'https://www.linkedin.com/in/mustafa-misho/',
    github: 'https://github.com/DrMisho/',
    facebook: 'https://www.facebook.com/Depango/',
  },
};

export const PROOF_METRICS: ProofMetric[] = [
  {
    id: 'data-migrated',
    value: { en: '200 GB', ar: '200 جيجابايت' },
    label: { en: 'Production Data Migrated', ar: 'بيانات إنتاجية تم ترحيلها' },
    context: {
      en: 'MongoDB to MySQL migration for Eifinn core banking',
      ar: 'ترحيل قواعد بيانات من MongoDB إلى MySQL لمنظومة Eifinn المصرفية',
    },
  },
  {
    id: 'sales-lift',
    value: { en: '+30%', ar: '+30%' },
    label: { en: 'Sales Growth via CRM', ar: 'زيادة المبيعات عبر نظام CRM' },
    context: {
      en: 'Unified TikTok, Facebook, WhatsApp, and WordPress lead pipelines',
      ar: 'توحيد تدفق العملاء من TikTok وFacebook وWhatsApp وموقع الشركة',
    },
  },
  {
    id: 'bank-branches',
    value: { en: '46 Branches', ar: '46 فرعاً' },
    label: { en: 'Banking Network Scale', ar: 'نطاق الشبكة المصرفية' },
    context: {
      en: 'CBS & UPI payment integration for an Indian charity bank',
      ar: 'ربط أنظمة CBS ومعاملات UPI لمؤسسة مصرفية خيرية في الهند',
    },
  },
  {
    id: 'al-basil',
    value: { en: '4× Al-Basil', ar: '4× جائزة الباسل' },
    label: { en: 'First-Rank Honors', ar: 'المرتبة الأولى لأربع سنوات متتالية' },
    context: {
      en: '1st-class Computer Engineering graduate, University of Aleppo',
      ar: 'الخريج الأول في كلية الهندسة المعلوماتية، جامعة حلب',
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'eifinn',
    name: 'Eifinn Core Banking Platform',
    category: 'fintech',
    company: 'Remocolla',
    period: { en: '2025 – 2026', ar: '2025 – 2026' },
    region: { en: 'India · 46 Branches', ar: 'الهند · 46 فرعاً' },
    role: { en: 'Full-Stack Web Developer', ar: 'مطور ويب شامل' },
    summary: {
      en: 'High-throughput banking infrastructure serving 46 branches of an Islamic charity bank in India, with heterogeneous 200 GB data migration and live UPI settlement.',
      ar: 'بنية مصرفية عالية الكثافة تخدم 46 فرعاً لبنك خيري إسلامي في الهند، شملت ترحيل 200 جيجابايت من البيانات والربط المباشر مع معاملات UPI.',
    },
    overview: {
      en: 'Transitioned a high-transaction banking operation from legacy infrastructure to a modern platform while preserving audit continuity across 46 active branches.',
      ar: 'إعادة بناء ونقل منظومة مصرفية عالية المعاملات من البنية القديمة إلى نظام حديث مع الحفاظ على سلامة البيانات واستمرارية العمل في 46 فرعاً.',
    },
    highlights: [
      {
        en: 'Engineered migration scripts transferring 200 GB of legacy banking records across heterogeneous sources (MongoDB to MySQL).',
        ar: 'تطوير نصوص برمجية متخصصة لترحيل 200 جيجابايت من السجلات المصرفية بين قواعد بيانات مختلفة (MongoDB إلى MySQL).',
      },
      {
        en: 'Integrated Core Banking System (CBS) endpoints to unlock real-time UPI transactions for branch customers.',
        ar: 'تنفيذ التكامل البرمجي مع نظام الخدمات المصرفية الأساسي (CBS) لتفعيل التحويلات الفورية عبر UPI.',
      },
      {
        en: 'Connected a local Indian SMS gateway for transactional notifications and strengthened server-side logging to prevent recurring incidents.',
        ar: 'الربط مع مزود رسائل SMS محلي في الهند وتحسين سجلات الخادم لتشخيص ومنع الأعطال التشغيلية.',
      },
    ],
    stack: ['PHP Laravel', 'MySQL', 'MongoDB', 'CBS / UPI Integration', 'SMS Gateway', 'Server Logging'],
    impact: {
      en: '200 GB migrated across 46 active branches with UPI enabled',
      ar: 'ترحيل 200 جيجابايت لـ 46 فرعاً وتفعيل التحويلات عبر UPI',
    },
    featured: true,
  },
  {
    id: 'smartcrm',
    name: 'SmartCRM & Multi-Channel Lead Engine',
    category: 'crm',
    company: 'Smart Life',
    period: { en: '2024 – 2025', ar: '2024 – 2025' },
    region: { en: 'MENA · iOS & Android Backend', ar: 'الشرق الأوسط · خلفية iOS وAndroid' },
    role: { en: 'Full-Stack Web Developer', ar: 'مطور ويب شامل' },
    summary: {
      en: 'Re-architected a legacy file-based PHP backend into Laravel and unified multi-platform lead acquisition, driving a 30%+ lift in company sales.',
      ar: 'إعادة هيكلة نظام PHP قديم إلى Laravel وتوحيد قنوات استقطاب العملاء، مما رفع مبيعات الشركة بنسبة لا تقل عن 30%.',
    },
    overview: {
      en: 'Served as the backbone for Smart Life’s iOS and Android CRM applications across Marketing, Sales, Client Care, and Support teams.',
      ar: 'تطوير البنية الخلفية لتطبيقات SmartCRM على iOS وAndroid لخدمة فرق التسويق والمبيعات وخدمة العملاء والدعم الفني.',
    },
    highlights: [
      {
        en: 'Migrated file-based PHP code into a structured Laravel codebase and normalized relational database tables for scalability.',
        ar: 'نقل الشيفرة من PHP تقليدي معتمد على الملفات إلى Laravel وإعادة تطبيع جداول قواعد البيانات للأداء والاستقرار.',
      },
      {
        en: 'Automated lead ingestion from TikTok APIs, Facebook APIs, Google, WordPress forms, and a custom Node.js WhatsApp Bot.',
        ar: 'أتمتة جمع العملاء المحتملين عبر واجهات TikTok وFacebook وGoogle ونماذج WordPress وبوت WhatsApp مطور بـ Node.js.',
      },
      {
        en: 'Implemented CI/CD pipelines, custom backend logging, server monitoring, Telegram OTP delivery, and a 25% Google PageSpeed lift on the main website.',
        ar: 'تطبيق CI/CD، وسجلات مخصصة ومراقبة للخادم، وإرسال رموز التحقق OTP عبر Telegram، مع تسريع موقع الشركة بنسبة 25% في Google PageSpeed.',
      },
    ],
    stack: ['PHP Laravel', 'Node.js', 'MySQL', 'TikTok & Facebook APIs', 'WhatsApp & Telegram Bots', 'CI/CD'],
    impact: {
      en: 'At least 30% sales increase and 25% faster web PageSpeed',
      ar: 'نمو المبيعات بنسبة +30% وتحسين سرعة الموقع بنسبة 25%',
    },
  },
  {
    id: 'wathba',
    name: 'Wathba Multi-Vendor Commerce',
    category: 'saas',
    company: 'TSH Soft',
    period: { en: '2023 – 2025', ar: '2023 – 2025' },
    region: { en: 'MENA · SaaS E-Commerce', ar: 'الشرق الأوسط · تجارة إلكترونية' },
    role: { en: 'Co-Founder & Backend Developer', ar: 'شريك مؤسس ومطور أنظمة خلفية' },
    summary: {
      en: 'Multi-vendor e-commerce platform enabling each merchant to operate an independent storefront with dynamic web templates, modeled on Shopify.',
      ar: 'منصة تجارة إلكترونية متعددة التجار تتيح لكل بائع متجراً مستقلاً بقوالب ويب ديناميكية على غرار Shopify.',
    },
    overview: {
      en: 'Architected the multi-tenant backend, vendor store provisioning, and shared internal Laravel packages using the Facade design pattern.',
      ar: 'تصميم البنية الخلفية متعددة المستأجرين وتخصيص المتاجر وتطوير حزم Laravel داخلية مشتركة باستخدام نمط Facade.',
    },
    highlights: [
      {
        en: 'Designed dynamic per-vendor template architecture allowing independent storefront customization from a shared core.',
        ar: 'تصميم معمارية قوالب ديناميكية لكل تاجر تسمح بتخصيص واجهة المتجر من نواة موحدة.',
      },
      {
        en: 'Built reusable internal packages with the Facade pattern to keep vendor modules maintainable across TSH Soft products.',
        ar: 'بناء حزم برمجية داخلية قابلة لإعادة الاستخدام بنمط Facade لتسهيل الصيانة والتوسع.',
      },
    ],
    stack: ['PHP Laravel', 'Blade Templates', 'MySQL', 'Facade Pattern', 'Multi-Tenant Architecture'],
    impact: {
      en: 'Dynamic per-vendor storefronts built on a unified Laravel core',
      ar: 'متاجر ديناميكية مستقلة لكل تاجر فوق نواة Laravel موحدة',
    },
  },
  {
    id: 'fulinks-aheadof',
    name: 'Fulinks & AheadOf SaaS Gateways',
    category: 'saas',
    company: 'TSH Soft',
    period: { en: '2023 – 2025', ar: '2023 – 2025' },
    region: { en: 'MENA · Payment SaaS', ar: 'الشرق الأوسط · منصات SaaS ودفع' },
    role: { en: 'Co-Founder & Backend Developer', ar: 'شريك مؤسس ومطور أنظمة خلفية' },
    summary: {
      en: 'Two production SaaS products featuring end-to-end payment gateway integrations with Paymob (Fulinks) and Thawani (AheadOf).',
      ar: 'منصتا SaaS إنتاجيتان تتضمنان تكاملاً كاملاً مع بوابات الدفع الإلكتروني Paymob في Fulinks وThawani في AheadOf.',
    },
    overview: {
      en: 'Delivered reliable subscription billing, checkout verification webhooks, and merchant settlement tracking across regional payment rails.',
      ar: 'تنفيذ منظومات الفوترة والتحقق من عمليات الدفع والويب هوك عبر بوابات الدفع الإقليمية.',
    },
    highlights: [
      {
        en: 'Integrated Paymob payment gateway end-to-end for Fulinks with secure callback verification.',
        ar: 'دمج بوابة الدفع Paymob بشكل كامل لمنصة Fulinks مع التحقق الآمن من العمليات.',
      },
      {
        en: 'Integrated Thawani payment gateway for AheadOf alongside modular backend administration tools.',
        ar: 'دمج بوابة الدفع Thawani لمنصة AheadOf مع أدوات إدارة خلفية معيارية.',
      },
    ],
    stack: ['PHP Laravel', 'Paymob API', 'Thawani API', 'MySQL', 'Webhooks'],
    impact: {
      en: 'Live regional payment processing across two commercial SaaS platforms',
      ar: 'معالجة دفع إلكتروني حية عبر منصتي SaaS تجاريتين',
    },
    url: 'https://fuvalue.com/',
    links: [
      { label: 'Fulinks', url: 'https://fuvalue.com/' },
      { label: 'AheadOf', url: 'https://aheadof.net/' },
    ],
  },
  {
    id: 'akoono',
    name: 'Akoono Employment Platform',
    category: 'saas',
    company: 'TSH Soft',
    period: { en: '2023 – 2025', ar: '2023 – 2025' },
    region: { en: 'Saudi Arabia · SaaS', ar: 'السعودية · منصة توظيف' },
    role: { en: 'Co-Founder & Backend Developer', ar: 'شريك مؤسس ومطور أنظمة خلفية' },
    summary: {
      en: 'Backend architecture for a leading recruitment SaaS recognized as the #1 employment platform in Saudi Arabia on LinkedIn.',
      ar: 'البنية الخلفية لمنصة توظيف رائدة مصنفة كالمنصة الأولى للتوظيف في السعودية على لينكدإن.',
    },
    overview: {
      en: 'Developed and maintained core backend services, candidate workflows, and system integrations powering high-volume hiring activity in Saudi Arabia.',
      ar: 'تطوير وصيانة الخدمات الخلفية ومسارات المرشحين والتكاملات التي تدعم عمليات التوظيف الواسعة في السوق السعودي.',
    },
    highlights: [
      {
        en: 'Engineered scalable Laravel APIs and database structures supporting employer and job-seeker workflows.',
        ar: 'بناء واجهات برمجية وهياكل بيانات قابلة للتوسع لخدمة أصحاب العمل والباحثين عن عمل.',
      },
      {
        en: 'Connected Akoono with TSH Soft’s shared core integration project and internal packages.',
        ar: 'ربط المنصة بنواة التكامل المركزية وحزم التطوير المشتركة للشركة.',
      },
    ],
    stack: ['PHP Laravel', 'MySQL', 'REST APIs', 'System Integration'],
    impact: {
      en: '#1 employment platform in Saudi Arabia on LinkedIn',
      ar: 'المنصة رقم 1 للتوظيف في السعودية على لينكدإن',
    },
    url: 'https://akoono.com/',
  },
  {
    id: 'eduscholarship',
    name: 'Eduscholarship Grant System',
    category: 'platforms',
    company: 'Remocolla',
    period: { en: '2025 – 2026', ar: '2025 – 2026' },
    region: { en: 'India · Non-Profit Operations', ar: 'الهند · إدارة المنح التعليمية' },
    role: { en: 'Full-Stack Web Developer', ar: 'مطور ويب شامل' },
    summary: {
      en: 'Internal operations system for an Indian organization managing student scholarships funded across multiple independent sponsors.',
      ar: 'نظام إداري داخلي لمؤسسة في الهند يدير المنح الدراسية للطلاب عبر عدة جهات راعية وممولة.',
    },
    overview: {
      en: 'Structured multi-sponsor allocation workflows, student eligibility tracking, and transparent disbursement records.',
      ar: 'تنظيم مسارات توزيع المنح متعددة الرعاة ومتابعة أهلية الطلاب وسجلات الصرف المالي بشفافية.',
    },
    highlights: [
      {
        en: 'Modeled multi-sponsor funding relationships so individual students can be supported and tracked cleanly across sponsors.',
        ar: 'نمذجة علاقات التمويل متعدد الرعاة لمتابعة دعم كل طالب بدقة ووضوح.',
      },
      {
        en: 'Delivered internal management interfaces tailored for administrative review and reporting.',
        ar: 'بناء واجهات إدارة داخلية مخصصة للمراجعة الإدارية وإعداد التقارير.',
      },
    ],
    stack: ['PHP Laravel', 'MySQL', 'System Analysis & Design', 'Internal Operations'],
    impact: {
      en: 'Centralized multi-sponsor scholarship lifecycle management',
      ar: 'إدارة مركزية متكاملة لدورة حياة المنح متعددة الرعاة',
    },
  },
  {
    id: 'syria-talents',
    name: 'Syria Talents (Beta)',
    category: 'platforms',
    company: 'Remocolla',
    period: { en: '2025 – 2026', ar: '2025 – 2026' },
    region: { en: 'Syria · Remote Careers', ar: 'سوريا · فرص العمل عن بُعد' },
    role: { en: 'Full-Stack Web Developer', ar: 'مطور ويب شامل' },
    summary: {
      en: 'Talent & mentorship platform helping Syrian professionals connect with remote job opportunities abroad and grow through specialized mentors.',
      ar: 'منصة مهنية وإرشادية تساعد الكفاءات السورية في الوصول إلى فرص عمل عن بُعد دولياً وتطوير مهاراتهم عبر مرشدين متخصصين.',
    },
    overview: {
      en: 'Built core platform features linking skilled candidates, remote international roles, and structured mentorship tracks.',
      ar: 'تطوير الميزات الأساسية التي تربط الكفاءات بالفرص الدولية عن بُعد ومسارات الإرشاد التخصصي.',
    },
    highlights: [
      {
        en: 'Implemented talent profiles, remote opportunity discovery, and mentor matching workflows.',
        ar: 'تطوير ملفات الكفاءات واستكشاف الفرص عن بُعد ومسارات الربط مع المرشدين.',
      },
      {
        en: 'Architected the beta release for rapid iteration based on early community feedback.',
        ar: 'تصميم النسخة التجريبية بقابلية توسع سريعة استناداً إلى ملاحظات المستخدمين الأوائل.',
      },
    ],
    stack: ['Full-Stack Web', 'PHP Laravel', 'MySQL', 'Agile Scrum'],
    impact: {
      en: 'Bridging Syrian tech talent with remote global teams and mentors',
      ar: 'ربط الكفاءات السورية بالفرق الدولية عن بُعد والمرشدين المتخصصين',
    },
  },
  {
    id: 'enterprise-web',
    name: 'Corporate & Institutional Web Suite',
    category: 'platforms',
    company: 'Automata4 · TSH Soft · Freelance',
    period: { en: '2022 – 2025', ar: '2022 – 2025' },
    region: { en: 'Syria · Saudi Arabia · Canada', ar: 'سوريا · السعودية · كندا' },
    role: { en: 'Full-Stack & Backend Developer', ar: 'مطور ويب شامل وخلفي' },
    summary: {
      en: 'Production corporate portals and reusable Laravel packages delivered for Automata4 Group, Bait Al-Mal, LoyalGuard, Makla, and Sinyora Yatak.',
      ar: 'مواقع مؤسسية إنتاجية وحزم Laravel قابلة لإعادة الاستخدام لجهات متعددة شملت Automata4 وبيت المال وLoyalGuard وMakla وSinyora Yatak.',
    },
    overview: {
      en: 'Combined custom corporate websites with reusable internal Laravel packages (Site Search, News Package) engineered for long-term maintenance.',
      ar: 'الجمع بين بناء المواقع المؤسسية وتطوير حزم Laravel الداخلية مثل البحث في الموقع ونظام الأخبار لرفع كفاءة التطوير.',
    },
    highlights: [
      {
        en: 'Improved Automata4 Group’s internal Laravel Site Search and News packages while shipping automata4.com and baitmal.com.',
        ar: 'تطوير وتحسين حزم Laravel للبحث والأخبار في Automata4 وإطلاق موقعي automata4.com وbaitmal.com.',
      },
      {
        en: 'Shipped regional business sites including LoyalGuard (Saudi Arabia), Makla (Canada), TSH Soft, and Sinyora Yatak.',
        ar: 'إطلاق مواقع أعمال إقليمية ودولية شملت LoyalGuard في السعودية وMakla في كندا وTSH Soft وSinyora Yatak.',
      },
    ],
    stack: ['PHP Laravel', 'Blade Templates', 'WordPress', 'MySQL', 'Internal Packages'],
    impact: {
      en: '6+ live production sites across 3 international markets',
      ar: 'أكثر من 6 مواقع إنتاجية حية عبر 3 أسواق دولية',
    },
    url: 'https://automata4.com/',
    links: [
      { label: 'Automata4', url: 'https://automata4.com/' },
      { label: 'Bait Al-Mal', url: 'https://baitmal.com/' },
      { label: 'LoyalGuard', url: 'https://loyalguard.sa/' },
      { label: 'Makla', url: 'https://makla.ca/' },
      { label: 'Sinyora Yatak', url: 'https://frontend.sinyorayatak.com/' },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'remocolla',
    company: 'Remocolla',
    role: { en: 'Full-Stack Web Developer', ar: 'مطور ويب شامل' },
    period: { en: 'Jun 2025 – Oct 2026', ar: 'يونيو 2025 – أكتوبر 2026' },
    location: { en: 'Remote · India & International', ar: 'عن بُعد · الهند ودولي' },
    summary: {
      en: 'Built and scaled mission-critical financial, non-profit, and career platforms across India and MENA, handling large-scale database migrations and live banking integrations.',
      ar: 'تطوير وتوسيع منصات مالية وتعليمية ومهنية حيوية في الهند والمنطقة، مع قيادة ترحيل قواعد بيانات ضخمة وتكاملات مصرفية حية.',
    },
    achievements: [
      {
        en: 'Eifinn (46-branch Islamic charity bank in India): engineered scripts to migrate 200 GB of production data from legacy MongoDB to MySQL.',
        ar: 'منظومة Eifinn (بنك خيري من 46 فرعاً في الهند): تطوير نصوص ترحيل 200 جيجابايت من البيانات الإنتاجية من MongoDB إلى MySQL.',
      },
      {
        en: 'Integrated Eifinn with CBS to enable UPI transactions, connected a local Indian SMS provider, and hardened server-side logging.',
        ar: 'ربط Eifinn مع نظام CBS لتفعيل معاملات UPI، والتكامل مع مزود SMS محلي في الهند، وتعزيز سجلات الخادم.',
      },
      {
        en: 'Developed Eduscholarship (multi-sponsor scholarship management in India) and Syria Talents (Beta remote work & mentorship platform).',
        ar: 'تطوير نظام Eduscholarship لإدارة المنح متعددة الرعاة في الهند ومنصة Syria Talents التجريبية لفرص العمل عن بُعد والإرشاد.',
      },
    ],
    systems: [
      { name: 'Eifinn', note: { en: 'Core Banking & UPI', ar: 'أنظمة مصرفية وUPI' } },
      { name: 'Eduscholarship', note: { en: 'Scholarship Operations', ar: 'إدارة المنح' } },
      { name: 'Syria Talents', note: { en: 'Remote Careers Beta', ar: 'منصة الكفاءات' } },
    ],
  },
  {
    id: 'smart-life',
    company: 'Smart Life',
    role: { en: 'Full-Stack Web Developer', ar: 'مطور ويب شامل' },
    period: { en: 'Mar 2024 – Jun 2025', ar: 'مارس 2024 – يونيو 2025' },
    location: { en: 'Full-Stack & Backend Lead', ar: 'تطوير شامل وأنظمة خلفية' },
    summary: {
      en: 'Modernized legacy CRM infrastructure into Laravel, automated multi-channel social lead capture, and improved public web performance alongside marketing and mobile teams.',
      ar: 'تحديث البنية الخلفية لنظام CRM إلى Laravel، وأتمتة استقطاب العملاء من منصات التواصل الاجتماعي، وتحسين أداء الموقع العام.',
    },
    achievements: [
      {
        en: 'Migrated SmartCRM (iOS & Android backend) from file-based PHP to Laravel and normalized database schemas for scalability and maintainability.',
        ar: 'نقل خلفية SmartCRM لتطبيقات iOS وAndroid من PHP تقليدي إلى Laravel وتطبيع جداول قاعدة البيانات.',
      },
      {
        en: 'Increased company sales by at least 30% by capturing leads via TikTok APIs, Facebook APIs, Google, WordPress forms, and a Node.js WhatsApp Bot.',
        ar: 'رفع مبيعات الشركة بنسبة لا تقل عن 30% عبر ربط جمع العملاء من TikTok وFacebook وGoogle وWordPress وبوت WhatsApp بـ Node.js.',
      },
      {
        en: 'Built APIs for Marketing, Sales, Client Care, and Support teams; introduced CI/CD, custom logging, server monitoring, and Telegram OTP delivery.',
        ar: 'تطوير واجهات برمجية لفرق التسويق والمبيعات والعناية بالعملاء والدعم، وتطبيق CI/CD والمراقبة ورموز OTP عبر Telegram.',
      },
      {
        en: 'Connected Smart Life website forms to the internal CRM and improved Google PageSpeed Insights performance by 25%.',
        ar: 'ربط نماذج موقع Smart Life بنظام CRM الداخلي وتحسين سرعة الموقع بنسبة 25% على Google PageSpeed Insights.',
      },
    ],
    systems: [
      { name: 'SmartCRM', note: { en: 'iOS & Android Backend', ar: 'خلفية تطبيقات CRM' } },
      { name: 'Smart Life Web', note: { en: '+25% PageSpeed', ar: 'تحسين السرعة 25%' } },
      { name: 'WhatsApp Lead Bot', note: { en: 'Node.js Automation', ar: 'أتمتة Node.js' } },
    ],
  },
  {
    id: 'tsh-soft',
    company: 'TSH Soft',
    role: { en: 'Co-Founder & Backend Developer', ar: 'شريك مؤسس ومطور أنظمة خلفية' },
    period: { en: 'Mar 2023 – Mar 2025', ar: 'مارس 2023 – مارس 2025' },
    location: { en: 'SaaS, ERP & Commerce', ar: 'منصات SaaS والتجارة الإلكترونية' },
    summary: {
      en: 'Co-founded the engineering team, architected reusable internal packages and cross-system integrations, and delivered commercial SaaS and e-commerce platforms across Saudi Arabia, Canada, and MENA.',
      ar: 'المشاركة في تأسيس الفريق الهندسي وبناء حزم برمجية مشتركة ونواة تكامل، مع تسليم منصات SaaS وتجارة إلكترونية في السعودية وكندا والمنطقة.',
    },
    achievements: [
      {
        en: 'Built and mentored the engineering team responsible for developing and maintaining all company products.',
        ar: 'تأسيس وقيادة فريق التطوير المسؤول عن بناء وصيانة كافة مشاريع الشركة.',
      },
      {
        en: 'Engineered internal Laravel packages using the Facade Design Pattern and a core integration project linking company systems.',
        ar: 'تطوير حزم داخلية بنمط التصميم Facade ومشروع نواة مركزي للتكامل مع جميع الأنظمة.',
      },
      {
        en: 'Delivered SaaS platforms including Fulinks (Paymob), AheadOf (Thawani), Akoono (#1 employment platform in KSA on LinkedIn), and Wathba multi-vendor commerce.',
        ar: 'إطلاق منصات Fulinks (Paymob) وAheadOf (Thawani) وAkoono (المنصة الأولى للتوظيف في السعودية على لينكدإن) ومنصة Wathba متعددة التجار.',
      },
    ],
    systems: [
      { name: 'Akoono', url: 'https://akoono.com/' },
      { name: 'Fulinks', url: 'https://fuvalue.com/' },
      { name: 'AheadOf', url: 'https://aheadof.net/' },
      { name: 'Wathba', note: { en: 'Multi-Vendor SaaS', ar: 'تجارة متعددة التجار' } },
      { name: 'LoyalGuard', url: 'https://loyalguard.sa/' },
      { name: 'Makla', url: 'https://makla.ca/' },
    ],
  },
  {
    id: 'automata4',
    company: 'Automata4 Group',
    role: { en: 'Full-Stack Web Developer', ar: 'مطور ويب شامل' },
    period: { en: 'Aug 2022 – Feb 2023', ar: 'أغسطس 2022 – فبراير 2023' },
    location: { en: 'Aleppo, Syria', ar: 'حلب، سوريا' },
    summary: {
      en: 'Software engineer in the web development department at Syria’s leading Universities Information Systems company, building dynamic portals and internal Laravel packages.',
      ar: 'مهندس برمجيات في قسم تطوير الويب في الشركة الرائدة في أنظمة المعلومات الجامعية في سوريا، مع بناء مواقع ديناميكية وحزم Laravel داخلية.',
    },
    achievements: [
      {
        en: 'Developed and maintained dynamic corporate websites including Automata4 Group for IT and Bait Al-Mal.',
        ar: 'تطوير وصيانة مواقع مؤسسية ديناميكية من بينها موقع Automata4 Group وبيت المال.',
      },
      {
        en: 'Built and enhanced internal company Laravel packages including Site Search and News Package.',
        ar: 'تطوير وتحسين حزم Laravel الخاصة بالشركة مثل حزمة البحث في الموقع وحزمة الأخبار.',
      },
    ],
    systems: [
      { name: 'Automata4 Group', url: 'https://automata4.com/' },
      { name: 'Bait Al-Mal', url: 'https://baitmal.com/' },
      { name: 'Sinyora Yatak (Freelance)', url: 'https://frontend.sinyorayatak.com/' },
    ],
  },
];

export const CAPABILITIES: CapabilityGroup[] = [
  {
    id: 'backend',
    index: '01',
    title: { en: 'Backend & Architecture', ar: 'الأنظمة الخلفية والمعمارية' },
    description: {
      en: 'Maintainable server-side systems built with clean patterns, modular packages, and clear API boundaries.',
      ar: 'أنظمة خادم قابلة للصيانة مبنية بأنماط تصميم نظيفة وحزم معيارية وواجهات برمجية واضحة.',
    },
    items: [
      'PHP & Laravel',
      'Node.js',
      'Facade & Design Patterns',
      'Internal Laravel Packages',
      'REST API Engineering',
      'System Analysis & Design',
    ],
  },
  {
    id: 'data',
    index: '02',
    title: { en: 'Databases & Migrations', ar: 'قواعد البيانات والترحيل' },
    description: {
      en: 'Relational schema normalization and large-scale cross-engine migrations without breaking production continuity.',
      ar: 'تطبيع الجداول العلائقية وترحيل البيانات الضخمة بين محركات مختلفة دون الإخلال باستمرارية الإنتاج.',
    },
    items: [
      'MySQL',
      'MongoDB',
      'Schema Normalization',
      '200 GB+ ETL Migrations',
      'Query Performance Tuning',
      'Multi-Tenant Data Modeling',
    ],
  },
  {
    id: 'integrations',
    index: '03',
    title: { en: 'Payments & 3rd-Party APIs', ar: 'بوابات الدفع والتكاملات' },
    description: {
      en: 'Production integrations spanning banking rails, payment gateways, ad platforms, and messaging bots.',
      ar: 'تكاملات إنتاجية تشمل الأنظمة المصرفية وبوابات الدفع ومنصات الإعلانات وبوتات المراسلة.',
    },
    items: [
      'Paymob & Thawani Gateways',
      'CBS & UPI Banking Rails',
      'TikTok & Facebook Lead APIs',
      'WhatsApp & Telegram Bots',
      'Local SMS & OTP Providers',
      'CRM & Webhook Automation',
    ],
  },
  {
    id: 'delivery',
    index: '04',
    title: { en: 'Web Delivery & DevOps', ar: 'تطوير الويب والتشغيل' },
    description: {
      en: 'Full lifecycle delivery from responsive frontends and WordPress integrations to CI/CD and production observability.',
      ar: 'تسليم متكامل من الواجهات سريعة الاستجابة وWordPress حتى خطوط CI/CD والمراقبة الإنتاجية.',
    },
    items: [
      'Blade, HTML5, CSS3, JavaScript',
      'WordPress & Form Sync',
      'CI/CD Pipelines',
      'DevOps & Server Monitoring',
      'Custom Backend Logging',
      'Agile Scrum & Team Leadership',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'msc',
    institution: { en: 'University of Aleppo', ar: 'جامعة حلب' },
    degree: { en: 'Master’s Degree', ar: 'درجة الماجستير' },
    field: { en: 'Computer Engineering', ar: 'الهندسة المعلوماتية / الحاسوب' },
    period: { en: '2022 – Present', ar: '2022 – الآن' },
    note: {
      en: 'Graduate research and advanced systems engineering',
      ar: 'دراسات عليا وبحث في هندسة الحاسوب والأنظمة',
    },
  },
  {
    id: 'bsc',
    institution: { en: 'University of Aleppo', ar: 'جامعة حلب' },
    degree: { en: 'Bachelor’s Degree', ar: 'درجة البكالوريوس' },
    field: { en: 'Computer Engineering', ar: 'الهندسة المعلوماتية / الحاسوب' },
    period: { en: '2017 – 2022', ar: '2017 – 2022' },
    note: {
      en: 'GPA: 3.62 · 1st-class graduate of the Faculty of Computer Engineering',
      ar: 'المعدل: 3.62 · الخريج الأول على كلية الهندسة المعلوماتية',
    },
  },
];

export const AWARDS: AwardItem[] = [
  {
    id: 'first-class',
    year: '2022',
    title: {
      en: '1st Class Graduate — Faculty of Computer Engineering',
      ar: 'الخريج الأول — كلية الهندسة المعلوماتية',
    },
    issuer: { en: 'University of Aleppo', ar: 'جامعة حلب' },
  },
  {
    id: 'basil-2022',
    year: '2021/2022',
    title: {
      en: 'Al-Basil Prize for the First Outstanding Student',
      ar: 'جائزة الباسل للطالب المتفوق الأول',
    },
    issuer: { en: 'University of Aleppo · 4th Consecutive Year', ar: 'جامعة حلب · السنة الرابعة على التوالي' },
  },
  {
    id: 'basil-2021',
    year: '2020/2021',
    title: {
      en: 'Al-Basil Prize for the First Outstanding Student',
      ar: 'جائزة الباسل للطالب المتفوق الأول',
    },
    issuer: { en: 'University of Aleppo · 3rd Consecutive Year', ar: 'جامعة حلب · السنة الثالثة على التوالي' },
  },
  {
    id: 'basil-2020',
    year: '2019/2020',
    title: {
      en: 'Al-Basil Prize for the First Outstanding Student',
      ar: 'جائزة الباسل للطالب المتفوق الأول',
    },
    issuer: { en: 'University of Aleppo · 2nd Consecutive Year', ar: 'جامعة حلب · السنة الثانية على التوالي' },
  },
  {
    id: 'basil-2019',
    year: '2018/2019',
    title: {
      en: 'Al-Basil Prize for the First Outstanding Student',
      ar: 'جائزة الباسل للطالب المتفوق الأول',
    },
    issuer: { en: 'University of Aleppo · 1st Year Honor', ar: 'جامعة حلب · السنة الأولى' },
  },
];

export const UI_COPY = {
  nav: {
    work: { en: 'Work', ar: 'المشاريع' },
    experience: { en: 'Experience', ar: 'الخبرات' },
    capabilities: { en: 'Capabilities', ar: 'المهارات' },
    credentials: { en: 'Credentials', ar: 'التعليم' },
    downloadCv: { en: 'Download CV', ar: 'تحميل السيرة' },
    menuOpen: { en: 'Open navigation menu', ar: 'فتح القائمة' },
    menuClose: { en: 'Close navigation menu', ar: 'إغلاق القائمة' },
  },
  hero: {
    metaRole: { en: 'Full-Stack & Backend Engineer', ar: 'مهندس برمجيات وتطوير ويب شامل' },
    metaExp: { en: '4+ Years', ar: '+4 سنوات خبرة' },
    headline: {
      en: 'Building backend systems, payment pipelines, and scalable web platforms.',
      ar: 'أبني الأنظمة الخلفية، وتكاملات الدفع، ومنصات الويب القابلة للتوسع.',
    },
    lead: {
      en: 'Computer Engineer with 4+ years shipping production Laravel and Node.js systems—from 200 GB banking migrations and CBS/UPI integrations to multi-channel CRM pipelines and regional SaaS products.',
      ar: 'مهندس حاسوب بخبرة تتجاوز 4 سنوات في بناء أنظمة Laravel وNode.js الإنتاجية—من ترحيل 200 جيجابايت من البيانات المصرفية وتكاملات CBS/UPI، إلى أنظمة CRM متعددة القنوات ومنصات SaaS الإقليمية.',
    },
    primaryCta: { en: 'Get in touch', ar: 'تواصل معي' },
    secondaryCta: { en: 'Selected work', ar: 'استعراض المشاريع' },
    portraitCaption: {
      en: 'Mustafa Misho · B.Sc. & M.Sc. Candidate, Computer Engineering',
      ar: 'مصطفى ميشو · بكالوريوس وطالب ماجستير هندسة حاسوب',
    },
    switchLang: { en: 'العربية', ar: 'English' },
  },
  sections: {
    workTitle: { en: 'Selected Work', ar: 'مختارات من الأعمال' },
    workSubtitle: {
      en: 'Production systems shipped across banking, CRM automation, multi-vendor commerce, and regional SaaS.',
      ar: 'أنظمة إنتاجية تم تطويرها وإطلاقها في القطاع المصرفي وأتمتة CRM والتجارة الإلكترونية ومنصات SaaS.',
    },
    viewDetails: { en: 'Case notes', ar: 'تفاصيل المشروع' },
    liveSite: { en: 'Visit site', ar: 'زيارة الموقع' },
    experienceTitle: { en: 'Experience', ar: 'الخبرة العملية' },
    experienceSubtitle: {
      en: 'Four years of hands-on backend architecture, full-stack delivery, and technical team leadership.',
      ar: 'أربع سنوات من العمل الفعلي في هندسة الأنظمة الخلفية والتطوير الشامل وقيادة الفرق التقنية.',
    },
    systemsShipped: { en: 'Key systems', ar: 'أبرز الأنظمة' },
    capabilitiesTitle: { en: 'Technical Capabilities', ar: 'القدرات التقنية' },
    capabilitiesSubtitle: {
      en: 'Core technologies, architectural practices, and third-party ecosystems used in production.',
      ar: 'التقنيات الأساسية والممارسات المعمارية والمنظومات التي أعمل بها في بيئات الإنتاج.',
    },
    credentialsTitle: { en: 'Education & Honors', ar: 'التعليم والجوائز الأكاديمية' },
    educationLabel: { en: 'Academic Background', ar: 'التحصيل الأكاديمي' },
    awardsLabel: { en: 'Academic Distinctions', ar: 'التكريمات والجوائز' },
    beyondTitle: { en: 'Outside Engineering', ar: 'خارج نطاق البرمجة' },
    beyondBody: {
      en: 'Away from servers and schemas, I spend my free time reading books and novels and playing guitar.',
      ar: 'بعيداً عن الخوادم وقواعد البيانات، أستمتع في أوقات فراغي بقراءة الكتب والروايات والعزف على الغيتار.',
    },
    contactTitle: { en: 'Start a Conversation', ar: 'لنتحدث عن مشروعك القادم' },
    contactSubtitle: {
      en: 'Available for senior backend, full-stack Laravel/Node.js roles, system architecture consulting, and remote collaborations.',
      ar: 'متاح للأدوار الهندسية في تطوير الأنظمة الخلفية وLaravel/Node.js، واستشارات معمارية الأنظمة، والتعاون عن بُعد.',
    },
  },
  categories: {
    all: { en: 'All', ar: 'الكل' },
    fintech: { en: 'Banking', ar: 'مصرفي' },
    saas: { en: 'SaaS', ar: 'SaaS' },
    crm: { en: 'CRM', ar: 'CRM' },
    platforms: { en: 'Platforms', ar: 'منصات' },
  },
  modal: {
    overview: { en: 'Context', ar: 'السياق' },
    deliverables: { en: 'Engineering Deliverables', ar: 'الإنجازات الهندسية' },
    outcome: { en: 'Measured Outcome', ar: 'الأثر المحقق' },
    stack: { en: 'Technologies Used', ar: 'التقنيات المستخدمة' },
    close: { en: 'Close project details', ar: 'إغلاق تفاصيل المشروع' },
  },
  contact: {
    copyEmail: { en: 'Copy email', ar: 'نسخ البريد' },
    copied: { en: 'Email copied', ar: 'تم نسخ البريد' },
    directDetails: { en: 'Direct contact', ar: 'التواصل المباشر' },
    nameLabel: { en: 'Your name', ar: 'الاسم الكامل' },
    namePlaceholder: { en: 'Ahmad Al-Hassan', ar: 'أحمد الحسن' },
    emailLabel: { en: 'Work email', ar: 'البريد الإلكتروني' },
    emailPlaceholder: { en: 'name@company.com', ar: 'name@company.com' },
    topicLabel: { en: 'Inquiry type', ar: 'موضوع التواصل' },
    messageLabel: { en: 'Project or role details', ar: 'تفاصيل المشروع أو الدور الوظيفي' },
    messagePlaceholder: {
      en: 'Share context on the role, architecture scope, or timeline...',
      ar: 'شاركني تفاصيل المشروع أو الدور الوظيفي والجدول الزمني المتوقع...',
    },
    submit: { en: 'Prepare message', ar: 'تجهيز الرسالة' },
    openMailClient: { en: 'Open in email client', ar: 'فتح في تطبيق البريد' },
    sendAnother: { en: 'Edit message', ar: 'تعديل الرسالة' },
    preparedTitle: { en: 'Message ready to send', ar: 'الرسالة جاهزة للإرسال' },
    preparedBody: {
      en: 'Your inquiry has been formatted for mstafa.misho@gmail.com. Open it directly in your mail client or copy the text below.',
      ar: 'تم تنسيق رسالتك إلى mstafa.misho@gmail.com. يمكنك فتحها مباشرة في تطبيق البريد أو نسخ نصها أدناه.',
    },
    copyDraft: { en: 'Copy message', ar: 'نسخ الرسالة' },
    draftCopied: { en: 'Message copied', ar: 'تم نسخ الرسالة' },
    topics: {
      role: { en: 'Full-Time / Remote Role', ar: 'وظيفة بدوام كامل / عن بُعد' },
      backend: { en: 'Backend / Laravel Architecture', ar: 'هندسة أنظمة خلفية / Laravel' },
      integration: { en: 'Payments & API Integration', ar: 'تكامل بوابات دفع وواجهات API' },
      advisory: { en: 'Technical Collaboration', ar: 'تعاون تقني أو استشارة' },
    },
  },
  footer: {
    rights: {
      en: 'Mustafa Misho · Aleppo, Syria',
      ar: 'مصطفى ميشو · حلب، سوريا',
    },
  },
} as const;

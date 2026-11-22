import { useState } from 'react';
import { ArrowDownToLine, Menu, X } from 'lucide-react';
import {
  CONTACT_INFO,
  RESUME_PDF_PATH,
  UI_COPY,
  type Language,
} from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
}

export function Navbar({ lang }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = UI_COPY.nav;

  const navItems = [
    { href: '#work', label: t.work[lang] },
    { href: '#experience', label: t.experience[lang] },
    { href: '#capabilities', label: t.capabilities[lang] },
    { href: '#credentials', label: t.credentials[lang] },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#05080F]/90 backdrop-blur-md border-b border-[#1C2C4B]">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#top"
          className="font-display text-[17px] font-bold tracking-[-0.02em] text-[#F4F7FC] hover:text-[#60A5FA] transition-colors whitespace-nowrap shrink-0"
        >
          {lang === 'ar' ? CONTACT_INFO.nameAr : CONTACT_INFO.name}
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#B8C5DA]"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 border-b border-transparent hover:border-[#60A5FA] hover:text-[#F4F7FC] transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={RESUME_PDF_PATH}
            download="Mustafa_Misho_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-white bg-[#2563EB] hover:bg-[#3B82F6] rounded-md transition-colors whitespace-nowrap shrink-0"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.downloadCv[lang]}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? t.menuClose[lang] : t.menuOpen[lang]}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#F4F7FC] border border-[#1C2C4B] rounded-md bg-[#0B1324] hover:bg-[#13203B] transition-colors shrink-0"
          >
            {mobileOpen ? (
              <X className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile"
          className="md:hidden border-t border-[#1C2C4B] bg-[#080F1E] px-5 py-4"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-[15px] font-medium text-[#F4F7FC] hover:text-[#60A5FA] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

import { useEffect, useState } from 'react';
import {
  type Language,
  type ProjectCategory,
  type ProjectItem,
} from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorkSection } from './components/WorkSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CapabilitiesAndCredentials } from './components/CapabilitiesAndCredentials';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <div className="min-h-screen bg-architectural-canvas text-[#F4F7FC]">
      <Navbar lang={lang} />

      <main>
        <HeroSection lang={lang} onToggleLanguage={toggleLanguage} />

        <WorkSection
          lang={lang}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onInspectProject={setSelectedProject}
        />

        <ExperienceSection lang={lang} />

        <CapabilitiesAndCredentials lang={lang} />

        <ContactSection lang={lang} onToggleLanguage={toggleLanguage} />
      </main>

      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;

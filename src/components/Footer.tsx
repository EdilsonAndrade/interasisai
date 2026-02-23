"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { dict } = useLanguage();

  return (
    <footer className="border-t border-border-main mt-24 py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-text-second text-sm">
          © {new Date().getFullYear()} Edilson Andrade. {dict.footer.rights}
        </div>
        
        <div className="flex gap-6 text-sm font-medium">
          <a href="#experience" className="text-text-second hover:text-primary transition-colors">
            {dict.navbar.experience}
          </a>
          <a href="#projects" className="text-text-second hover:text-primary transition-colors">
            {dict.navbar.projects}
          </a>
          <a href="#skills" className="text-text-second hover:text-primary transition-colors">
            {dict.navbar.skills}
          </a>
        </div>
      </div>
    </footer>
  );
}

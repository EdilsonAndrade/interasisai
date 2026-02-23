"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n/dictionaries";

const flagEmoji = {
  pt: '🇧🇷',
  en: '🇺🇸',
  es: '🇪🇸'
};

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex gap-2 items-center px-4 md:px-0">
      {(['pt', 'en', 'es'] as Language[]).map(lang => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`text-xl cursor-pointer transition-all ${language === lang ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-100'}`}
          title={lang.toUpperCase()}
        >
          {flagEmoji[lang]}
        </button>
      ))}
    </div>
  );
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dict } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dict.navbar.experience, href: "#experience" },
    { name: dict.navbar.projects, href: "#projects" },
    { name: dict.navbar.skills, href: "#skills" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-bg-card/80 backdrop-blur-md border-border-main py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-text-main flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white text-sm">
            EA
          </div>
          <span className="hidden sm:block">Edilson Andrade</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-second hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:seu-email@example.com"
            className="px-5 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all shadow-sm ml-2"
          >
            {dict.navbar.contact}
          </a>
          <div className="w-px h-6 bg-border-main mx-1"></div>
          <LanguageSelector />
        </nav>

        {/* Mobile Toggle & Fast Flags */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSelector />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-text-main hover:bg-bg-main rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-bg-card border-b border-border-main p-4 shadow-lg flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-text-main p-3 rounded-xl hover:bg-bg-main transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:seu-email@example.com"
            className="w-full mt-2 py-3 rounded-xl bg-primary text-white text-center font-medium shadow-sm active:scale-[0.98] transition-all"
          >
            {dict.navbar.contactMobile}
          </a>
        </motion.div>
      )}
    </header>
  );
}

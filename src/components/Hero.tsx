"use client";

import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { dict, language } = useLanguage();
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-8 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
          {dict.hero.role}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-main">
          {dict.hero.titleStart} <br className="hidden md:block" />
          <span className="text-primary relative">
            {dict.hero.titleHighlight}
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10"
              viewBox="0 0 200 9"
              fill="currentColor"
            >
              <path d="M2.00032 6.5C40.0963 2.76813 103.551 -0.923188 198.001 5.49999" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-text-second max-w-2xl mx-auto pt-4 leading-relaxed">
          {dict.hero.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4 pt-4"
      >
        <a
          href="mailto:seu-email@example.com"
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_4px_14px_0_rgba(99,91,255,0.39)] hover:shadow-[0_6px_20px_rgba(99,91,255,0.23)] hover:-translate-y-0.5"
        >
          <Mail size={18} />
          <span>{dict.hero.contactBtn}</span>
        </a>
        <a
          href={language === 'pt' ? '/curriculopt.pdf' : '/curriculo.pdf'}
          download={language === 'pt' ? 'Curriculopt_Nome.pdf' : 'Resume_Name.pdf'}
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-border-main text-text-main font-medium hover:bg-bg-main transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
        >
          <Download size={18} />
          <span>{dict.hero.downloadCvBtn}</span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center gap-6 pt-8 text-text-second"
      >
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-full">
          <Linkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-full">
          <Github size={24} />
          <span className="sr-only">GitHub</span>
        </a>
      </motion.div>
    </section>
  );
}

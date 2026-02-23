"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Experience() {
  const { dict } = useLanguage();
  return (
    <section id="experience" className="pt-10 scroll-mt-20">
      <div className="flex items-center gap-3 mb-10">
        <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-action/10 text-action">
          <Briefcase size={20} />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-text-main">
          {dict.experience.title}
        </h2>
      </div>

      <div className="relative pl-6 md:pl-0">
        {/* Linha vertical no mobile fica à esquerda, no desktop fica escondida pois o layout é em card completo? Melhor manter a linha vertical padrão à esquerda para mobile e desktop */}
        <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-[2px] bg-border-main rounded-full" />

        <div className="space-y-12">
          {dict.experience.items.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Ponto na linha temporal */}
              <div className="absolute left-[-5px] md:left-[-1px] top-1.5 h-4 w-4 rounded-full border-4 border-bg-main bg-primary shadow-sm" />

              <div className="bg-bg-card p-6 md:p-8 rounded-3xl border border-border-main shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-main mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-bg-main text-text-second text-sm font-medium rounded-full border border-border-main">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-text-second">
                      <span className="text-action mt-1.5 flex-shrink-0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

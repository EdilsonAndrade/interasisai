"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Skills() {
  const { dict } = useLanguage();

  return (
    <section id="skills" className="pt-20 scroll-mt-20">
      <div className="flex items-center gap-3 mb-10">
        <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Code2 size={20} />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-text-main">
          {dict.skills.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dict.skills.categories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col bg-bg-card border border-border-main p-6 rounded-3xl hover:border-primary/30 transition-colors shadow-sm"
          >
            <h3 className="font-bold text-lg text-text-main mb-6 border-b border-border-main pb-4">
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3.5 py-1.5 bg-bg-main text-text-second text-sm font-medium rounded-full border border-border-main hover:bg-primary/5 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

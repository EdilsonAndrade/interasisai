"use client";

import { motion } from "framer-motion";
import { FolderGit2, CalendarCheck, Image as ImageIcon, Video, FileText, ShoppingCart, Settings, Droplet, UserCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projectMetadata = [
  {
    techs: ["Python", "Next.js", "React Native", "CrewAI", "Docker"],
    icon: (className: string) => <CalendarCheck className={className} />,
    featuresIcons: [UserCheck, FileText, Settings, Video],
    color: "primary"
  },
  {
    techs: ["Node.js", "Next.js", "MySQL", "AWS"],
    icon: (className: string) => <Droplet className={className} />,
    featuresIcons: [ShoppingCart, Settings, Droplet, ImageIcon],
    color: "action"
  }
];

export function Projects() {
  const { dict } = useLanguage();

  return (
    <section id="projects" className="pt-20 scroll-mt-20">
      <div className="flex items-center gap-3 mb-10">
        <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-success/10 text-success">
          <FolderGit2 size={20} />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-text-main">
          {dict.projects.titleSection}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {dict.projects.items.map((proj, idx) => {
          const meta = projectMetadata[idx];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col bg-bg-card rounded-[32px] overflow-hidden border border-border-main p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-8 border-b border-border-main pb-8">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`p-4 rounded-2xl shrink-0 ${meta.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-action/10 text-action'}`}>
                    {meta.icon("w-8 h-8")}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight text-text-main mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-text-second text-lg font-medium">{proj.subtitle}</p>
                  </div>
                </div>
                
                <div className="flex shrink-0">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${meta.color === 'primary' ? 'bg-primary/5 text-primary border-primary/20' : 'bg-action/5 text-action border-action/20'}`}>
                    {proj.highlight}
                  </span>
                </div>
              </div>

              <p className="text-text-second text-lg mb-8 leading-relaxed max-w-4xl">
                {proj.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {proj.features.map((feat, fIdx) => {
                  const IconFeat = meta.featuresIcons[fIdx];
                  return (
                    <div key={fIdx} className="flex gap-4 p-5 rounded-2xl bg-bg-main border border-border-main/50 hover:border-border-main transition-colors">
                      <div className="mt-1 text-primary">
                        {IconFeat && <IconFeat size={22} strokeWidth={1.5} />}
                      </div>
                      <div>
                        <h4 className="font-bold text-text-main mb-1">{feat.title}</h4>
                        <p className="text-text-second text-sm leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-sm font-medium text-text-second py-1.5 pr-2">{dict.projects.techsLabel}</span>
                {meta.techs.map((tech, techIdx) => (
                  <span 
                    key={techIdx} 
                    className="px-4 py-1.5 flex items-center justify-center bg-white border border-border-main text-text-main rounded-full text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

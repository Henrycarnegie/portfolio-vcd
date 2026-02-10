'use client';

import { motion, Variants } from 'framer-motion';
import { 
  Palette, 
  PenTool,
  Monitor, 
  Lightbulb, 
  Figma, 
  Type, 
  // Image as ImageIcon 
} from 'lucide-react';

const skills = [
  { name: 'Branding', icon: Lightbulb, desc: 'Identity & Strategy' },
  { name: 'Graphic Design', icon: PenTool, desc: 'Digital & Layout' },
  { name: 'Illustration', icon: Monitor, desc: 'Digital & Vector' },
  { name: 'Typography', icon: Type, desc: 'Typography & Layout' },
  { name: 'Copywriting', icon: Palette, desc: 'Content & Copywriting' },
  { name: 'Digital Marketing', icon: Figma, desc: 'Digital Marketing & Interactive' },
];

export function Skills() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-background/50 border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
            <p className="text-foreground/60 max-w-xl mx-auto">Combining technical proficiency with creative vision.</p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group border border-black/5"
            >
              <div className="w-12 h-12 bg-[#F5F3EB] rounded-full flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
                <skill.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
              <p className="text-sm text-foreground/60">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  const paragraphs = [
    "I am a Visual Communication Design graduate with a passion for storytelling through design. My approach combines artistic intuition with strategic thinking.",
    "During my studies, I honed my skills in branding, illustration, and digital media, exploring how visual elements can evoke emotion and drive engagement.",
    "Driven by curiosity, I am now focused on creating immersive web experiences that merge aesthetics with functionality.",
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-background relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 flex items-center gap-4"
        >
            <span className="w-12 h-px bg-accent"></span>
            <span className="uppercase tracking-widest text-sm font-medium text-accent">About</span>
        </motion.div>

        <div className="space-y-8">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className="text-2xl md:text-3xl lg:text-4xl text-foreground font-light leading-snug"
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

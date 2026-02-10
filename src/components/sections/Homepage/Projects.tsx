"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "../../projects/ProjectCard";

const projects = [
   { title: "Lumina Brand", category: "Branding", color: "#1E293B" }, // dark slate
   { title: "EcoVision", category: "UI/UX Design", color: "#064E3B" }, // dark green
   { title: "Urban Pulse", category: "Motion Graphics", color: "#7C3AED" }, // violet
   { title: "Flow State", category: "Editorial Design", color: "#BE185D" }, // pink
   { title: "Neo Synth", category: "Illustration", color: "#4338CA" }, // indigo
];

export function Projects() {
   const targetRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: targetRef,
   });

   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

   return (
      <section
         ref={targetRef}
         id="projects"
         className="relative h-[300vh] bg-background"
      >
         <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            <div className="absolute top-12 left-6 md:left-12 z-10 mix-blend-difference text-[#F5F3EB]">
               <h2 className="text-4xl md:text-6xl font-bold">
                  Selected Works
               </h2>
               <p className="text-lg opacity-80 mt-2">2023 — 2026</p>
            </div>

            <motion.div
               style={{ x }}
               className="flex gap-8 pl-6 md:pl-12 w-max"
            >
               {projects.map((project, idx) => (
                  <ProjectCard key={idx} {...project} />
               ))}
               {/* Duplicate for continuity if needed, or just enough content */}
            </motion.div>
         </div>
      </section>
   );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "../../projects/ProjectCard";

const projects = [
   {
      title: "Thesis Project",
      category: "Illustration",
      color: "#1E293B",
      image: "/thesis/halaman-1.webp",
      href: "thesis",
   },
   {
      title: "PT. KCG Internship",
      category: "Graphic Design",
      color: "#f5f3ef",
      image: "/kcg/cover.webp",
      href: "kcg",
   },
   {
      title: "Aureon Wars",
      category: "Board Game",
      color: "#064E3B",
      image: "/aureon-wars/cover.webp",
      href: "aureon-wars",
   },
   {
      title: "KKN/Community Service",
      category: "Publication, documentation, and design",
      color: "#BE185D",
      image: "/kkn/cover.webp",
      href: "kkn",
   },
   {
      title: "Digital Illustration",
      category: "Illustration",
      color: "#4338CA",
      image: "/digital-illustration/cover.webp",
      href: "digital-illustration",
   },
];

export function Projects() {
   const targetRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: targetRef,
   });

   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

   return (
      <section
         ref={targetRef}
         id="projects"
         className="relative h-[150vh] bg-background"
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
                  <ProjectCard key={idx} {...project} href={project.href} />
               ))}
            </motion.div>
         </div>
      </section>
   );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";

export function FeaturedProject() {
   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
   });

   const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
   const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

   return (
      <section
         className="py-24 px-6 md:px-12 bg-black text-[#F5F3EB] relative overflow-hidden"
         ref={ref}
      >
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 z-10">
               <motion.span
                  style={{ opacity }}
                  className="text-accent tracking-widest uppercase font-bold text-sm mb-4 block"
               >
                  Undergraduated Thesis
               </motion.span>
               <motion.h2
                  style={{ opacity, x: 0 }}
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
               >
                  Ilustration <br />{" "}
                  <span className="text-accent">Historical Book</span>
               </motion.h2>
               <motion.p
                  style={{ opacity }}
                  className="text-lg text-white/70 mb-8 max-w-md leading-relaxed"
               >
                  A comprehensive visual identity and platform design for
                  presents historical information in a more engaging and
                  accessible way for younger audiences through expressive
                  illustrations, simplified narratives, and thoughtful layouts.
                  Exploring the intersection of cultural awareness and local
                  tourism.
               </motion.p>
               <motion.div style={{ opacity }}>
                  <Button
                     variant="outline"
                     className="border-white text-white hover:bg-white hover:text-black"
                  >
                     <Link href="/thesis" className="hover:text-accent transition-colors">View Case Study</Link>
                  </Button>
               </motion.div>
            </div>

            <div className="w-full md:w-1/2 relative">
               <motion.div
                  style={{ scale }}
                  className="aspect-4/3 rounded-lg overflow-hidden relative"
               >
                  {/* Abstract visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Image
                        src="/featured.webp"
                        alt=""
                        fill
                        className="object-cover"
                        priority
                     />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}

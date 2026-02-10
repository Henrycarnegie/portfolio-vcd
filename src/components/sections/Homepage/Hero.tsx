"use client";

import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
   return (
      <section className="h-screen w-full flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-background">
         {/* Background Abstract Shapes - Animated */}
         <motion.div
            className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl z-0"
            animate={{
               scale: [1, 1.2, 1],
               opacity: [0.3, 0.5, 0.3],
               x: [0, 50, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
         />
         <motion.div
            className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-foreground/10 rounded-full blur-3xl z-0"
            animate={{
               y: [0, -30, 0],
               scale: [1, 1.1, 1],
            }}
            transition={{
               duration: 6,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 1,
            }}
         />

         <div className="flex items-center">
            <div className="max-w-4xl z-10">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
               >
                  <h2 className="text-lg md:text-xl font-medium text-accent mb-4 tracking-wide">
                     FRESH GRADUATE VISUAL COMMUNICATION DESIGN
                  </h2>
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 text-foreground"
               >
                  Designing{" "}
                  <span className="italic font-serif text-accent">
                     Experiences
                  </span>{" "}
                  <br />
                  Through Visuals.
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className="text-lg md:text-xl text-foreground/80 max-w-lg mb-8 leading-relaxed"
               >
                  Specializing in branding, UI, and motion design. Crafting
                  stories that move and effective visual communication.
               </motion.p>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                  className="flex gap-4"
               >
                  <Button size="lg">View Projects</Button>
                  <Button variant="outline" size="lg">
                     Contact Me
                  </Button>
               </motion.div>
            </div>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.5, duration: 1 }}
               className="absolute right-1/12 cursor-pointer"
            >
               <div className="w-[320px] aspect-square overflow-hidden rounded-full animate-bounce">
                  <Image
                     src="/profile.webp"
                     alt=""
                     fill
                     className="object-cover rounded-full"
                     priority
                  />
               </div>
            </motion.div>
         </div>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-foreground/60"
         >
            <ArrowDown size={32} />
         </motion.div>
      </section>
   );
}

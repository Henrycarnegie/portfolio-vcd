"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
   title: string;
   category: string;
   image?: string;
   color?: string;
   href: string;
}

export function ProjectCard({
   title,
   category,
   image,
   color = "#e5e5e5",
   href,
}: ProjectCardProps) {
   return (
      <motion.div
         className="group relative shrink-0 w-[300px] md:w-[400px] h-[400px] md:h-[500px] bg-white rounded-none md:rounded-lg overflow-hidden cursor-pointer"
         whileHover={{ y: -10 }}
         transition={{ duration: 0.4, ease: "easeOut" }}
      >
         <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundColor: color }}
         >
            {/* Image placeholder or actual image */}
            {image ? (
               <div className="relative w-full h-full">
                  <Image
                     src={image}
                     alt={title}
                     fill
                     className="object-cover"
                  />
               </div>
            ) : (
               <div className="w-full h-full flex items-center justify-center opacity-10 text-9xl font-bold font-serif text-black select-none">
                  {title.charAt(0)}
               </div>
            )}
         </div>

         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

         <div className="absolute bottom-0 left-0 w-full p-6 text-[#F5F3EB] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="overflow-hidden">
               <h3 className="text-2xl font-bold mb-1 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {title}
               </h3>
            </div>
            <div className="overflow-hidden">
               <p className="text-sm font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-150">
                  {category}
               </p>
            </div>
         </div>

         <div className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Link href={`/${href}`}>
               <ArrowUpRight className="text-white" size={20} />
            </Link>
         </div>
      </motion.div>
   );
}

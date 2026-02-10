"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageProps {
   front: React.ReactNode;
   back: React.ReactNode;
   pageIndex: number;
   isFlipped: boolean;
   zIndex: number;
   isMobile: boolean;
}

const Page = ({ front, back, isFlipped, zIndex, isMobile }: PageProps) => {
   return (
      <motion.div
         className="absolute top-0 left-0 min-w-[400px] h-full origin-left"
         style={{
            transformStyle: isMobile ? "flat" : "preserve-3d",
            zIndex,
         }}
         animate={{ rotateY: isMobile ? 0 : isFlipped ? -180 : 0 }}
         transition={{
            duration: 0.6,
            type: "keyframes",
            stiffness: 260,
            damping: 20,
         }}
      >
         {/* Front */}
         <div
            className={`absolute w-full h-full bg-white shadow-md overflow-hidden transition-transform `}
            style={{
               backfaceVisibility: "hidden",
            }}
         >
            {front}
         </div>

         {/* Back */}
         <div
            className={`absolute w-full h-full bg-white shadow-md overflow-hidden transition-transform `}
            style={{
               backfaceVisibility: "hidden",
               transform: "rotateY(180deg)",
            }}
         >
            {back}
         </div>
      </motion.div>
   );
};

interface FlipbookProps {
   pages: { front: React.ReactNode; back: React.ReactNode }[];
}

export const Flipbook = ({ pages }: FlipbookProps) => {
   const [currentPage, setCurrentPage] = useState(0);
   const [isFocusedBook, setIsFocusedBook] = useState(false);

   const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches;

   const nextPage = () => {
      if (currentPage < pages.length) {
         setCurrentPage(currentPage + 1);
      }
   };

   const prevPage = () => {
      if (currentPage === 1) {
         setIsFocusedBook((prev) => !prev);
      }
      if (currentPage > 0) {
         console.log(currentPage);
         setCurrentPage(currentPage - 1);
      }
   };

   return (
      <div className="relative flex flex-col items-center justify-center">
         {/* Book Container */}
         <div className="relative min-w-[600px] h-[400px] perspective-1000">
            {/* Pages */}
            <div
               className={`absolute min-w-full right-0 h-full transition-transform duration-500 ease-in-out ${isFocusedBook ? "scale-100 translate-x-76" : "scale-110 md:scale-125 translate-x-46"}`}
               style={{
                  transformStyle: "preserve-3d",
                  width: "100%",
                  height: "100%",
               }}
               onClick={() => setIsFocusedBook(true)}
            >
               {pages.map((page, index) => {
                  if (Math.abs(index - currentPage) > 2) return null;

                  const zIndex =
                     index < currentPage ? index + 1 : pages.length - index;

                  return (
                     <Page
                        key={index}
                        front={page.front}
                        back={page.back}
                        pageIndex={index}
                        isFlipped={index < currentPage}
                        zIndex={zIndex}
                        isMobile={isMobile}
                     />
                  );
               })}
            </div>
            {/* Click Book Text */}
            <motion.div
               className={`absolute -top-2/6 -left-1/12 text-foreground text-lg font-bold transition-opacity duration-300 ease-in-out ${isFocusedBook ? "opacity-0" : "opacity-100"}`}
               initial={{ rotateY: -30, rotateZ: -10 }}
               animate={{ rotateY: -30, rotateZ: -10 }}
            >
               Click Book to See
            </motion.div>
         </div>

         {/* Controls */}
         <div
            className={`flex gap-4 mt-8 transition-opacity duration-300 ease-in-out ${isFocusedBook ? "opacity-100" : "opacity-0"}`}
         >
            <button
               onClick={prevPage}
               disabled={currentPage === 0}
               className="p-2 rounded-full bg-accent text-white disabled:opacity-40 hover:bg-accent/85 transition-colors"
            >
               <ChevronLeft />
            </button>
            <span className="text-foreground self-center">
               {currentPage} / {pages.length}
            </span>
            <button
               onClick={nextPage}
               disabled={currentPage === pages.length}
               className="p-2 rounded-full bg-accent text-white disabled:opacity-40 hover:bg-accent/85 transition-colors"
            >
               <ChevronRight />
            </button>
         </div>
      </div>
   );
};

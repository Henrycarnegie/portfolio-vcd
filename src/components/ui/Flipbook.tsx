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
}

const Page = ({ front, back, isFlipped, zIndex }: PageProps) => {
   return (
      <motion.div
         className="absolute top-0 left-0 min-w-[600px] h-full origin-left"
         style={{
            transformStyle: "preserve-3d",
            zIndex,
         }}
         animate={{ rotateY: isFlipped ? -180 : 0 }}
         transition={{
            duration: 0.6,
            type: "spring",
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
               className={`absolute min-w-full right-0 h-full transition-transform duration-500 ease-in-out ${isFocusedBook ? "scale-100 translate-x-76" : "scale-150"}`}
               style={{ transformStyle: "preserve-3d" }}
               onClick={() => setIsFocusedBook((prev) => !prev)}
            >
               {pages.map((page, index) => {
                  let zIndex = 0;
                  if (index < currentPage) {
                     // Flipped (Left side)
                     zIndex = index + 1;
                  } else {
                     // Not flipped (Right side)
                     zIndex = pages.length - index;
                  }

                  return (
                     <Page
                        key={index}
                        front={page.front}
                        back={page.back}
                        pageIndex={index}
                        isFlipped={index < currentPage}
                        zIndex={zIndex}
                     />
                  );
               })}
            </div>
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

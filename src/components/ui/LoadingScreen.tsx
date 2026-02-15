"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
   duration?: number;
   onFinished?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
   duration = 3000,
   onFinished,
}) => {
   const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsVisible(false);
         if (onFinished) onFinished();
      }, duration);
      return () => clearTimeout(timer);
   }, [duration, onFinished]);

   return (
      <AnimatePresence>
         {isVisible && (
            <motion.div
               className="fixed inset-0 z-50 flex items-center justify-center bg-[#cdc3e8] overflow-hidden"
               initial={{ y: -1000, opacity: 1 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               exit={{
                  y: 0,
                  opacity: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
               }}
            >
               {/* Layer ditengah = /loading/human.webp */}
               {/* Assuming human.webp is a centered element, maybe not full screen? 
               User didn't specify size, but "bertumpukan" (stacked) suggests layers. 
               I'll make it centered and relatively sized or full if implied.
               Given "human", likely a character. I'll preserve aspect ratio. */}
               {/* <div className="absolute inset-0 flex items-center justify-center z-10 p-10">
                  <div className="relative w-full h-full max-w-md max-h-md">
                     <Image
                        src="/loading/human.webp"
                        alt="Loading Character"
                        fill
                        className="object-contain"
                        priority
                     />
                  </div>
               </div> */}

               {/* Layer paling atas = /loading/base-layer.webp */}
               {/* User said "1 full screen dari /loading/base-layer.webp" previously. 
              If it's on TOP, it might cover human.webp unless transparent. 
              I will assume it covers everything or is the main frame. */}
               <div className="absolute inset-0 z-20">
                  <Image
                     src="/loading/screen.png"
                     alt="Loading Base Layer"
                     fill
                     className="object-cover"
                     priority
                  />
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default LoadingScreen;

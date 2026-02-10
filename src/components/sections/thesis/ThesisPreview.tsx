import { Flipbook } from "@/components/ui/Flipbook";
import DataContentThesis from "@/lib/DataContentThesis";
import Image from "next/image";

const ThesisPreview = () => {
   
   return (
      <div className="min-h-screen w-full flex flex-col justify-center items-center py-20 bg-background overflow-hidden">
         <div className="w-full h-full absolute inset-0 z-0 opacity-20">
            <Image
               src="/thesis/main-background.webp"
               fill
               alt="Thesis Background"
               className="object-cover"
            />
         </div>

         <div className="z-10 relative">
            <Flipbook pages={DataContentThesis} />
         </div>
      </div>
   );
};

export default ThesisPreview;

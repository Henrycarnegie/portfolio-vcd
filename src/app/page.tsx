"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Homepage/Hero";
import { About } from "@/components/sections/Homepage/About";
import { Skills } from "@/components/sections/Homepage/Skills";
import { Projects } from "@/components/sections/Homepage/Projects";
import { FeaturedProject } from "@/components/sections/Homepage/FeaturedProject";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
   return (
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white">
         <Navbar />
         <Hero />
         <About />
         <Projects />
         <FeaturedProject />
         <Skills />
         <Footer />
      </main>
   );
}

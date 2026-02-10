'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-sm mix-blend-difference text-accent" // mix-blend-difference for visibility? Revisit this.
    >
      {/* 
        Note on mix-blend-difference: It ensures visibility on both light and dark backgrounds, 
        but color might be tricky. Let's start with standard colors and update if needed.
        Actually, requested background is F5F3EB (light).
        So nav should be dark (1A1A1A) to contrast.
      */}
      <Link href="/" className="text-xl font-bold tracking-tight text-accent cursor-pointer">
        ANASTASYA
      </Link>

      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium hover:text-accent transition-colors text-accent"
          >
            {item.name}
          </Link>
        ))}
      </div>
      
      {/* Mobile Menu Trigger placeholder */}
      <div className="md:hidden">
        {/* TODO: Add mobile menu */}
        <span className="text-sm font-medium text-accent">Menu</span>
      </div>
    </motion.nav>
  );
}

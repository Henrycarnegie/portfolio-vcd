export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-foreground text-background">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold">TASYA.</div>
        <div className="text-sm opacity-60">
          © {new Date().getFullYear()} Visual Communication Design Portfolio
        </div>
        <div className="flex gap-4">
            <a href="mailto:anastasyajelita17@gmail.com" className="hover:text-accent transition-colors">Email</a>
            <a href="https://www.instagram.com/anastasyajlta" className="hover:text-accent transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/anastasya-jelita-rante-pasang-503470300/" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://www.behance.net/anastasyajelita" className="hover:text-accent transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
}

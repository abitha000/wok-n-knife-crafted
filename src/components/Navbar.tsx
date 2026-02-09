import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Signatures", href: "#signatures" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-warm-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold text-primary-foreground tracking-wide">
          WOK <span className="text-gradient-gold">N</span> KNIFE
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-medium text-primary-foreground/80 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/918903917600?text=Hi%2C%20I%27d%20like%20to%20book%20a%20table"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-sm hover:bg-chili transition-colors tracking-wide uppercase"
          >
            Book a Table
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-warm-dark/98 backdrop-blur-md px-6 pb-6"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-gold font-body text-sm uppercase tracking-wide border-b border-primary-foreground/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/918903917600?text=Hi%2C%20I%27d%20like%20to%20book%20a%20table"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center px-5 py-3 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-sm uppercase"
          >
            Book a Table
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-warm-dark border-t border-warm-dark-foreground/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-warm-dark-foreground tracking-wide">
              WOK <span className="text-gradient-gold">N</span> KNIFE
            </h3>
            <p className="font-body text-sm text-warm-dark-foreground/40 mt-1">Modern Asian Kitchen</p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#about" className="font-body text-sm text-warm-dark-foreground/50 hover:text-gold transition-colors">
              About
            </a>
            <a href="#menu" className="font-body text-sm text-warm-dark-foreground/50 hover:text-gold transition-colors">
              Menu
            </a>
            <a href="#visit" className="font-body text-sm text-warm-dark-foreground/50 hover:text-gold transition-colors">
              Visit
            </a>
            <a
              href="https://www.instagram.com/wok_n_knife?igsh=MWY5YXlyZHcwaGhpNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-dark-foreground/50 hover:text-gold transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-warm-dark-foreground/10 text-center">
          <p className="font-body text-xs text-warm-dark-foreground/30">
            © {new Date().getFullYear()} WOK N KNIFE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

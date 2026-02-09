import { motion } from "framer-motion";
import interiorImg from "@/assets/interior.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={interiorImg}
          alt="WOK N KNIFE restaurant interior with warm lanterns and Asian decor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/70 via-warm-dark/50 to-warm-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-body text-gold text-sm md:text-base uppercase tracking-[0.3em] mb-6"
        >
          Modern Asian Kitchen
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-warm-dark-foreground leading-[1.1] mb-6"
        >
          Fire Meets
          <br />
          <span className="text-gradient-gold italic">Finesse</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="font-body text-warm-dark-foreground/70 text-lg md:text-xl mb-10 max-w-xl mx-auto"
        >
          Where the heat of the wok meets the precision of the knife.
          Bold flavors, crafted with soul.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest rounded-sm hover:bg-chili transition-colors"
          >
            View Menu
          </a>
          <a
            href="#visit"
            className="px-8 py-4 border border-warm-dark-foreground/30 text-warm-dark-foreground font-body font-semibold text-sm uppercase tracking-widest rounded-sm hover:border-gold hover:text-gold transition-colors"
          >
            Visit Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Bold Flavors, <span className="italic text-primary">Crafted with Soul</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-8" />
          <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6">
            WOK N KNIFE is where the fiery energy of the wok meets the precision of the blade.
            We bring together the vibrant flavors of China, Thailand, Korea, and Southeast Asia—
            each dish a celebration of freshness, spice, and craft.
          </p>
          <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Every plate tells a story of tradition reimagined. No shortcuts. No compromises.
            Just the relentless pursuit of flavor that makes you come back.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

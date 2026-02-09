import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import interiorImg from "@/assets/interior.jpg";
import dishSpread from "@/assets/dish-spread.jpg";
import dishSizzler from "@/assets/dish-sizzler.jpg";
import dishDumplings from "@/assets/dish-dumplings.jpg";

const images = [
  { src: interiorImg, alt: "WOK N KNIFE warm interior with lanterns" },
  { src: dishSpread, alt: "Spread of Asian dishes" },
  { src: dishSizzler, alt: "Sizzling lotus root dish" },
  { src: dishDumplings, alt: "Crystal jade dumplings" },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-card">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-gold text-sm uppercase tracking-[0.3em] mb-4">
            The Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Warmth & <span className="italic text-primary">Energy</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`overflow-hidden rounded-sm ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import dishSizzler from "@/assets/dish-sizzler.jpg";
import dishCorn from "@/assets/dish-corn.jpg";
import dishStirfry from "@/assets/dish-stirfry.jpg";
import dishDumplings from "@/assets/dish-dumplings.jpg";
import dishSpread from "@/assets/dish-spread.jpg";

const signatures = [
  { name: "Sizzling Lotus Root", desc: "Crispy lotus root tossed in fiery chili with scallions", img: dishSizzler },
  { name: "Crispy Corn", desc: "Golden wok-tossed corn with sesame seeds and spice", img: dishCorn },
  { name: "Chili Stir Fry", desc: "Wok-charred chicken with peppers and bold Asian heat", img: dishStirfry },
  { name: "Crystal Dumplings", desc: "Jade-green dumplings steamed to translucent perfection", img: dishDumplings },
  { name: "The WOK Spread", desc: "A feast of our signature dishes — meant to be shared", img: dishSpread },
];

export default function SignatureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="signatures" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Best Sellers
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Signature <span className="italic text-primary">Flames</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatures.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-sm ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/90 via-warm-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-bold text-warm-dark-foreground mb-1 group-hover:text-gold transition-colors">
                  {dish.name}
                </h3>
                <p className="font-body text-sm text-warm-dark-foreground/60">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

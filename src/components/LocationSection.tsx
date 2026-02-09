import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export default function LocationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="visit" className="py-24 md:py-32 bg-warm-dark">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Reserve Your Table
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warm-dark-foreground mb-4">
            Come for the <span className="italic">Flame</span>,
            <br />
            Stay for the <span className="text-gradient-gold">Soul</span>
          </h2>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl mx-auto mb-20 p-6 md:p-8 rounded-sm border border-warm-dark-foreground/10 bg-warm-dark-foreground/[0.03]"
        >
          <h3 className="font-display text-2xl font-bold text-warm-dark-foreground mb-6 text-center">
            Book a Table
          </h3>
          <BookingForm />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-warm-dark-foreground mb-1">Location</h3>
                <p className="font-body text-warm-dark-foreground/60 text-sm">
                  WOK N KNIFE, Modern Asian Kitchen
                </p>
                <a
                  href="https://maps.app.goo.gl/MGgGnM1qfPuF4h7h6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-gold text-sm hover:underline mt-1 inline-block"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-warm-dark-foreground mb-1">Contact</h3>
                <p className="font-body text-warm-dark-foreground/60 text-sm mb-2">
                  +91 89039 17600
                </p>
                <a
                  href="https://wa.me/918903917600?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20WOK%20N%20KNIFE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-sm hover:bg-chili transition-colors uppercase tracking-wider"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-warm-dark-foreground mb-1">Hours</h3>
                <p className="font-body text-warm-dark-foreground/60 text-sm">
                  Mon – Sun: 12:00 PM – 11:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-sm overflow-hidden aspect-square md:aspect-[4/3]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WOK N KNIFE Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

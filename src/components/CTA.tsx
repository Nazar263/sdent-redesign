"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal, Float, MagneticButton } from "./animations";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-warm relative overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="scale">
          <motion.div
            className="relative rounded-3xl p-10 lg:p-16 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1B3A4B 0%, #2A5A6E 50%, #1B3A4B 100%)",
            }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(78,205,196,0.15) 0%, transparent 60%)",
                  "linear-gradient(120deg, rgba(78,205,196,0.15) 0%, transparent 60%)",
                  "linear-gradient(240deg, rgba(78,205,196,0.15) 0%, transparent 60%)",
                  "linear-gradient(360deg, rgba(78,205,196,0.15) 0%, transparent 60%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            />

            {/* Floating decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <Float duration={6} delay={0} amplitude={20}>
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent/10 blur-[60px]" />
              </Float>
              <Float duration={8} delay={1} amplitude={15}>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5 blur-[50px]" />
              </Float>
              <Float duration={7} delay={2} amplitude={12}>
                <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-accent/8 blur-[40px]" />
              </Float>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute w-1 h-1 rounded-full bg-accent/40"
                  style={{
                    top: `${20 + i * 12}%`,
                    left: `${10 + i * 15}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <Reveal direction="up" delay={0.2}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Готові до{" "}
                  <span className="text-accent">ідеальної</span>{" "}
                  посмішки?
                </h2>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <p className="text-white/70 text-lg mb-10 leading-relaxed">
                  Запишіться на безкоштовну консультацію та дізнайтеся, як ми можемо
                  покращити вашу посмішку. Без зобов&apos;язань, без болю, з турботою
                  про вас.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="flex flex-wrap justify-center gap-4">
                  <MagneticButton strength={0.15}>
                    <motion.a
                      href="#contacts"
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 60px -15px rgba(78, 205, 196, 0.4)" }}
                      whileTap={{ scale: 0.97 }}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-full transition-colors"
                    >
                      Записатися зараз
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </motion.a>
                  </MagneticButton>

                  <MagneticButton strength={0.15}>
                    <motion.a
                      href="tel:+380974433639"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 transition-colors"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Phone size={18} />
                      </motion.div>
                      +38 097 443 3639
                    </motion.a>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

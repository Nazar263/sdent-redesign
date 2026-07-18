"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Sparkles, Shield, Heart } from "lucide-react";
import Image from "next/image";
import { Float, MagneticButton, GradientOrbs } from "./animations";

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: 0.5 + i * 0.04,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const badge: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, delay: 0.2, type: "spring" as const, stiffness: 200 },
  },
};

const statCard: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 1.2 + i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <GradientOrbs />

      {/* Animated grid lines background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 bottom-0 w-px bg-primary"
            style={{ left: `${(i + 1) * 12.5}%`, transformOrigin: "top" }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 h-px bg-primary"
            style={{ top: `${(i + 1) * 16.6}%`, transformOrigin: "left" }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-28 lg:pb-0 relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              variants={badge}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent-dark text-sm font-semibold mb-8 border border-accent/20"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles size={16} />
              </motion.div>
              Сімейна стоматологія з 2013 року
            </motion.div>

            {/* Title — word by word */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text leading-[1.1] tracking-tight mb-6">
              <span className="block">
                {"Створюємо".split("").map((char, i) => (
                  <motion.span
                    key={`t-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                {"\u00A0"}
              </span>
              <span className="block">
                <span className="inline-block gradient-text">
                  {"красиві".split("").map((char, i) => (
                    <motion.span
                      key={`k-${i}`}
                      custom={i + 10}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                {"\u00A0"}
                <span className="inline-block gradient-text">
                  {"посмішки".split("").map((char, i) => (
                    <motion.span
                      key={`p-${i}`}
                      custom={i + 17}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </span>
              <motion.span
                initial={{ opacity: 0, y: 80, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + 25 * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                для вашої родини
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl"
            >
              Якісні стоматологічні послуги для вас та ваших рідних.
              Сучасне обладнання, професійна команда та індивідуальний підхід
              до кожного пацієнта.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <MagneticButton strength={0.2}>
                <a
                  href="#contacts"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 relative overflow-hidden"
                >
                  <span className="relative z-10">Записатися на консультацію</span>
                  <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent-dark"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <a
                  href="tel:+380974433639"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-primary/10 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                  >
                    <Phone size={18} />
                  </motion.div>
                  Зателефонувати
                </a>
              </MagneticButton>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="flex flex-wrap gap-6 text-sm text-text-secondary"
            >
              {[
                { icon: Shield, label: "Гарантія якості" },
                { icon: Heart, label: "Безболісне лікування" },
                { icon: Sparkles, label: "11+ років досвіду" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <item.icon size={16} className="text-accent-dark" />
                  </div>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/15">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/gallery/smile.png"
                  alt="S.Dent — дитяча стоматологія, елайнери"
                  width={1200}
                  height={900}
                  className="w-full h-[380px] sm:h-[420px] lg:h-[520px] object-cover rounded-3xl"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
              {/* Animated shimmer overlay */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/3"
              />
            </div>

            {/* Floating stat cards */}
            <motion.div
              custom={0}
              variants={statCard}
              initial="hidden"
              animate="visible"
            >
              <Float duration={5} delay={0} amplitude={8}>
                <div className="absolute -bottom-6 left-2 lg:-left-10 glass rounded-2xl p-5 shadow-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center"
                    >
                      <span className="text-2xl">🦷</span>
                    </motion.div>
                    <div>
                      <p className="font-bold text-text text-lg">11+ років</p>
                      <p className="text-sm text-text-secondary">досвіду роботи</p>
                    </div>
                  </div>
                </div>
              </Float>
            </motion.div>

            <motion.div
              custom={1}
              variants={statCard}
              initial="hidden"
              animate="visible"
            >
              <Float duration={4} delay={1} amplitude={6}>
                <div className="absolute -top-4 right-2 lg:-right-8 glass rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.svg
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.8 + i * 0.1, type: "spring", stiffness: 300 }}
                          className="w-4 h-4 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-text ml-1">4.9</span>
                  </div>
                  <p className="text-xs text-text-secondary mt-1">127+ відгуків</p>
                </div>
              </Float>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary/60"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

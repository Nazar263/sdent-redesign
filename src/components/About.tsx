"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Stethoscope,
  Monitor,
  Smile,
  Users,
  Clock,
  Award,
} from "lucide-react";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem, AnimatedCounter, Parallax, LineDraw } from "./animations";

const features = [
  {
    icon: Stethoscope,
    title: "Сучасна стоматологія",
    desc: "Використовуємо передові технології та матеріали для якісного лікування.",
  },
  {
    icon: Monitor,
    title: "Високоякісне обладнання",
    desc: "Цифрова діагностика, 3D сканування та лазерна стоматологія.",
  },
  {
    icon: Smile,
    title: "Комфортний кабінет",
    desc: "Затишна атмосфера, що допомагає подолати страх перед стоматологом.",
  },
  {
    icon: Users,
    title: "Доброзичливий персонал",
    desc: "Привітна команда професіоналів, що піклується про ваш комфорт.",
  },
  {
    icon: Clock,
    title: "Гнучкий графік",
    desc: "Працюємо щодня з 9:00 до 20:00, включаючи суботу.",
  },
  {
    icon: Award,
    title: "Гарантія результату",
    desc: "Ми працюємо так, щоб ваш наступний візит був дуже нескоро.",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            backgroundImage: "repeating-linear-gradient(90deg, var(--color-primary) 0, var(--color-primary) 1px, transparent 1px, transparent 80px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image composition */}
          <Reveal direction="left" duration={0.8}>
            <div className="relative">
              <motion.div style={{ y: imgY }} className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                  <Image
                    src="/images/clinic/clinic-2.jpg"
                    alt="Інтер'єр клініки S.Dent"
                    width={600}
                    height={500}
                    className="w-full h-[520px] lg:h-[600px] object-cover"
                  />
                </div>
                {/* Gradient overlay on scroll */}
                <motion.div
                  style={{ opacity: useTransform(scrollYProgress, [0.2, 0.5], [0, 0.3]) }}
                  className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-3xl"
                />
              </motion.div>

              {/* Animated counter card */}
              <Reveal direction="right" delay={0.4} className="absolute -bottom-8 right-2 lg:-right-8">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Award size={28} className="text-accent-dark" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">
                        <AnimatedCounter target={11} suffix="+" />
                      </p>
                      <p className="text-sm text-text-secondary">років на ринку</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>

              {/* Decorative element */}
              <motion.div
                initial={{ scale: 0, rotate: -12 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-accent/10 -z-10"
              />
            </div>
          </Reveal>

          {/* Right — Content */}
          <div>
            <Reveal direction="right" delay={0.1}>
              <span className="text-accent-dark font-semibold text-sm uppercase tracking-wider">
                Про клініку
              </span>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3 mb-6 leading-tight">
                Стоматологія, якій можна{" "}
                <span className="gradient-text">довіряти</span>
              </h2>
            </Reveal>

            <Reveal direction="right" delay={0.3}>
              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                Ми сімейна стоматологія S-Dent — це якісні стоматологічні послуги
                для Вас та Ваших рідних. Наша команда — це професіоналізм та
                кваліфікованість персоналу, що створюють комфорт та піклування
                для наших пацієнтів.
              </p>
            </Reveal>

            <Reveal direction="right" delay={0.4}>
              <p className="text-lg text-text-secondary leading-relaxed mb-10">
                Заснована у 2013 році. Працюємо на результат — ми не
                нав&apos;язуватимемо Вам зайвих послуг. Наша команда намагатиметься
                забезпечити комфорт та безболісне лікування для наших пацієнтів.
              </p>
            </Reveal>

            <LineDraw className="h-px bg-gradient-to-r from-accent/50 to-transparent mb-8" delay={0.5} />

            <Stagger stagger={0.08} className="grid grid-cols-2 gap-3">
              {features.map((f) => (
                <StaggerItem key={f.title}>
                  <motion.div
                    whileHover={{ x: 4, backgroundColor: "rgba(78, 205, 196, 0.05)" }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3 p-3 rounded-xl cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-text text-sm">{f.title}</p>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

function Float({
  children,
  duration = 4,
  delay = 0,
  amplitude = 10,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  amplitude?: number;
}) {
  return (
    <motion.div
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

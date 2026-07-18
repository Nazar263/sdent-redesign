"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CalendarCheck,
  Search,
  FileText,
  Stethoscope,
  SmilePlus,
  HeartHandshake,
} from "lucide-react";
import { Reveal, LineDraw } from "./animations";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Запис на консультацію",
    desc: "Запишіться зручним для вас способом — по телефону, онлайн або через месенджери.",
  },
  {
    icon: Search,
    step: "02",
    title: "Діагностика",
    desc: "Проведемо повне стоматологічне обстеження з використанням 3D сканування.",
  },
  {
    icon: FileText,
    step: "03",
    title: "План лікування",
    desc: "Складемо індивідуальний план лікування з прозорими цінами.",
  },
  {
    icon: Stethoscope,
    step: "04",
    title: "Лікування",
    desc: "Проведемо лікування комфортно та безболісно з використанням анестезії.",
  },
  {
    icon: SmilePlus,
    step: "05",
    title: "Результат",
    desc: "Насолоджуйтесь здоровою та красивою посмішкою!",
  },
  {
    icon: HeartHandshake,
    step: "06",
    title: "Спостереження",
    desc: "Регулярні профілактичні огляди для підтримки здоров'я порожнини рота.",
  },
];

export default function TreatmentSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <Reveal direction="up" className="text-center mb-16">
          <span className="text-accent-dark font-semibold text-sm uppercase tracking-wider">
            Процес
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3 mb-6">
            Етапи <span className="gradient-text">лікування</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Простий та зрозумілий процес від першого візиту до блискучої
            посмішки.
          </p>
          <LineDraw className="h-0.5 w-20 bg-gradient-to-r from-accent to-primary mx-auto mt-8" delay={0.3} />
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-px h-full bg-gradient-to-b from-accent/50 via-primary/30 to-accent/50 origin-top"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex ${
                    isLeft ? "lg:justify-end lg:pr-16" : "lg:justify-start lg:pl-16 lg:mt-20"
                  }`}
                >
                  {/* Animated dot on timeline */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 300 }}
                    className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 z-10"
                  >
                    <motion.div
                      animate={isInView ? { boxShadow: ["0 0 0 0 rgba(78,205,196,0.4)", "0 0 0 12px rgba(78,205,196,0)", "0 0 0 0 rgba(78,205,196,0)"] } : {}}
                      transition={{ delay: 0.6 + i * 0.12, duration: 1.5, repeat: 0 }}
                      className="w-4 h-4 rounded-full bg-accent border-4 border-white shadow-lg"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -6,
                      boxShadow: "0 20px 60px -15px rgba(27, 58, 75, 0.15)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-warm rounded-2xl p-7 max-w-md w-full border border-transparent hover:border-accent/20 transition-colors"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className="w-13 h-13 rounded-xl bg-primary/5 flex items-center justify-center"
                      >
                        <step.icon size={24} className="text-primary" />
                      </motion.div>
                      <span className="text-5xl font-black text-accent/15 select-none">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Bottom accent */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="h-0.5 bg-gradient-to-r from-accent to-primary mt-5 rounded-full origin-left"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

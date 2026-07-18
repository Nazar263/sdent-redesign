"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Scan,
  Sun,
  Home,
  Gem,
  Crown,
  Shield,
  TreePine,
  Wrench,
  AlignVerticalSpaceAround,
  SmilePlus,
  Scissors,
  Bone,
  Layers,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem, TiltCard, LineDraw } from "./animations";

const services = [
  {
    icon: Sparkles,
    title: "Професійна гігієна",
    desc: "Профілактика захворювань зубів та ясен. Рекомендуємо робити чистку кожні 4-6 місяців.",
    color: "from-blue-500/10 to-blue-500/5",
    iconColor: "text-blue-600",
    borderHover: "hover:border-blue-200",
  },
  {
    icon: Scan,
    title: "3D сканування зубів",
    desc: "Цифрове сканування для точної діагностики та планування лікування.",
    color: "from-purple-500/10 to-purple-500/5",
    iconColor: "text-purple-600",
    borderHover: "hover:border-purple-200",
  },
  {
    icon: Sun,
    title: "Офісне відбілювання",
    desc: "Індивідуальний підбір системи для кожного пацієнта. Результат за одне відвідування.",
    color: "from-amber-500/10 to-amber-500/5",
    iconColor: "text-amber-600",
    borderHover: "hover:border-amber-200",
  },
  {
    icon: Home,
    title: "Домашнє відбілювання",
    desc: "Зручне відбілювання вдома за індивідуальними капами.",
    color: "from-orange-500/10 to-orange-500/5",
    iconColor: "text-orange-600",
    borderHover: "hover:border-orange-200",
  },
  {
    icon: Gem,
    title: "Вініри",
    desc: "Тонкі керамічні пластини для ідеальної посмішки. Мінімальне втручання.",
    color: "from-pink-500/10 to-pink-500/5",
    iconColor: "text-pink-600",
    borderHover: "hover:border-pink-200",
  },
  {
    icon: Crown,
    title: "Коронки",
    desc: "Керамічні та цирконієві коронки з естетикою та біосумісністю.",
    color: "from-teal-500/10 to-teal-500/5",
    iconColor: "text-teal-600",
    borderHover: "hover:border-teal-200",
  },
  {
    icon: Shield,
    title: "Лікування карієсу",
    desc: "Процедура під місцевою анестезією — безболісно та якісно.",
    color: "from-green-500/10 to-green-500/5",
    iconColor: "text-green-600",
    borderHover: "hover:border-green-200",
  },
  {
    icon: TreePine,
    title: "Лікування каналів",
    desc: "Ендодонтичне лікування з використанням мікроскопа.",
    color: "from-emerald-500/10 to-emerald-500/5",
    iconColor: "text-emerald-600",
    borderHover: "hover:border-emerald-200",
  },
  {
    icon: AlignVerticalSpaceAround,
    title: "Брекет-система",
    desc: "Вирівнювання зубів за допомогою сучасних брекетів.",
    color: "from-indigo-500/10 to-indigo-500/5",
    iconColor: "text-indigo-600",
    borderHover: "hover:border-indigo-200",
  },
  {
    icon: SmilePlus,
    title: "Елайнери",
    desc: "Незнімна система для вирівнювання зубів. Непомітна та зручна.",
    color: "from-cyan-500/10 to-cyan-500/5",
    iconColor: "text-cyan-600",
    borderHover: "hover:border-cyan-200",
  },
  {
    icon: Scissors,
    title: "Видалення зубів",
    desc: "Звичайне та складне видалення, включаючи зуби мудрості.",
    color: "from-red-500/10 to-red-500/5",
    iconColor: "text-red-600",
    borderHover: "hover:border-red-200",
  },
  {
    icon: Bone,
    title: "Імплантація",
    desc: "Відновлення відсутніх зубів за допомогою сучасних імплантів.",
    color: "from-violet-500/10 to-violet-500/5",
    iconColor: "text-violet-600",
    borderHover: "hover:border-violet-200",
  },
  {
    icon: Layers,
    title: "Коронки на імплантах",
    desc: "Естетичне та функціональне відновлення на імплантах.",
    color: "from-sky-500/10 to-sky-500/5",
    iconColor: "text-sky-600",
    borderHover: "hover:border-sky-200",
  },
  {
    icon: Wrench,
    title: "Кісткова аугментація",
    desc: "Відновлення обсягу кістки для успішної імплантації.",
    color: "from-lime-500/10 to-lime-500/5",
    iconColor: "text-lime-600",
    borderHover: "hover:border-lime-200",
  },
];

export default function Services() {
  const ref = useRef(null);

  return (
    <section id="services" className="py-24 lg:py-32 bg-warm relative noise-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <Reveal direction="up" className="text-center mb-16">
          <span className="text-accent-dark font-semibold text-sm uppercase tracking-wider">
            Послуги
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3 mb-6">
            Повний спектр{" "}
            <span className="gradient-text">стоматологічних послуг</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Всі наші процедури надаються в комфортабельних умовах відповідно до
            стандартів високої якості.
          </p>
          <LineDraw className="h-0.5 w-20 bg-gradient-to-r from-accent to-primary mx-auto mt-8" delay={0.3} />
        </Reveal>

        {/* Services Grid */}
        <Stagger stagger={0.06} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <TiltCard className="h-full">
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 60px -15px rgba(27, 58, 75, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={`group bg-white rounded-2xl p-6 cursor-pointer border border-transparent ${service.borderHover} transition-colors h-full`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon size={22} className={service.iconColor} />
                  </div>
                  <h3 className="font-bold text-text mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {service.desc}
                  </p>
                  {/* Bottom gradient line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 bg-gradient-to-r from-accent to-primary mt-4 rounded-full origin-left"
                  />
                </motion.div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        {/* CTA */}
        <Reveal direction="up" delay={0.5} className="text-center mt-12">
          <motion.a
            href="#contacts"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px -15px rgba(27, 58, 75, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full transition-colors hover:bg-primary-light"
          >
            Записатися на прийом
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal, LineDraw, Float } from "./animations";

const reviews = [
  {
    name: "Mari",
    text: "Від щирого серця можу радити цю клініку! Лікарі просто майстри своєї справи. Дуже привітний та ввічливий персонал. Вже багато років я та моя родина разом з ними. Наразі вирівнюю тут зуби за допомогою брекет системи і вже знаходжусь на фінішній прямій. Моя посмішка вже неймовірна. Дякую S-DENT за вашу роботу!",
    rating: 5,
  },
  {
    name: "Тетяна",
    text: "Щиро дякую за професіоналізм, індивідуальний підхід, за блискучу усмішку і не за всі гроші світу. Всім раджу клініку, навіть наш син, який боїться лікарів, з величезним задоволенням відвідує лікаря Марію Олександрівну. Ми пройшли шлях до усмішки тернистий: брекети, імпланти, лікування — і все в цій клініці.",
    rating: 5,
  },
  {
    name: "Sandra White",
    text: "Рекомендую всім, хто піклується про своє здоров'я та естетику усмішки! Була на професійній гігієні у Ігора Сергійчука! Дуже задоволена результатом, лікар був дуже уважний, пояснив кожен етап процедури, постійно перепитував чи все гаразд та чи немає дискомфорту. Клініка дуже затишна.",
    rating: 5,
  },
  {
    name: "Олена",
    text: "Шукала клініку для своєї дитини і знайшла S-Dent. Юлія Федорівна — справжній професіонал! Дитина тепер не боїться йти до стоматолога. Дуже дякую за терпіння та індивідуальний підхід. Рекомендую цю клінію всім батькам!",
    rating: 5,
  },
  {
    name: "Андрій",
    text: "Робив імплантацію в S.Dent. Сергій Олександрович — хірург від Бога. Все пройшло швидко та безболісно. Результат перевершив мої очікування. Ціни адекватні, а якість на вищому рівні. Тепер це моя клініка на все життя!",
    rating: 5,
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  };

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Animated ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, -50, 0], y: [0, -50, 30, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -80, 40, 0], y: [0, 40, -60, 0], scale: [1, 0.8, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px]"
        />
        {/* Floating quote marks */}
        <Float duration={8} delay={0} amplitude={15}>
          <div className="absolute top-20 left-10 text-white/5 text-[200px] font-serif leading-none select-none">
            &ldquo;
          </div>
        </Float>
        <Float duration={10} delay={2} amplitude={12}>
          <div className="absolute bottom-20 right-10 text-white/5 text-[200px] font-serif leading-none select-none rotate-180">
            &rdquo;
          </div>
        </Float>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <Reveal direction="up" className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Відгуки
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
            Що кажуть наші <span className="text-accent">пацієнти</span>
          </h2>
          <LineDraw className="h-0.5 w-20 bg-gradient-to-r from-accent to-white/30 mx-auto mt-6" delay={0.3} />
        </Reveal>

        {/* Review Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-white/8 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl"
          >
            <Quote size={52} className="text-accent/20 mb-6" />

            <div className="min-h-[200px] relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -30 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 300 }}
                      >
                        <Star size={20} className="text-amber-400 fill-amber-400" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 italic">
                    &ldquo;{reviews[current].text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center"
                    >
                      <span className="text-accent font-bold">
                        {reviews[current].name.charAt(0)}
                      </span>
                    </motion.div>
                    <div>
                      <p className="text-white font-semibold">
                        {reviews[current].name}
                      </p>
                      <p className="text-white/50 text-sm">Пацієнт S.Dent</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    animate={{
                      width: i === current ? 32 : 8,
                      backgroundColor: i === current ? "rgba(78, 205, 196, 1)" : "rgba(255, 255, 255, 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-2 rounded-full"
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

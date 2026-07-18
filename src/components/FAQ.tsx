"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { Reveal, Stagger, StaggerItem, LineDraw } from "./animations";

const faqs = [
  {
    q: "Як записатися на прийом?",
    a: "Ви можете записатися по телефону +38 097 443 3639, через Facebook Messenger, Telegram або заповнивши форму на нашому сайті. Ми зв'яжемося з вами в робочий час для підтвердження запису.",
  },
  {
    q: "Які документи потрібні для першого візиту?",
    a: "Для першого візиту вам не потрібні спеціальні документи. Достатньо мати при собі паспорт або посвідчення особи. Якщо у вас є попередні знімки або медична документація — візьміть їх з собою.",
  },
  {
    q: "Чи боляче лікувати зуби у вашій клініці?",
    a: "Ми використовуємо сучасні анестезії, які забезпечують повну відсутність болю під час процедур. Наші лікарі мають багаторічний досвід роботи з пацієнтами, які бояться стоматологів, і знаходять індивідуальний підхід до кожного.",
  },
  {
    q: "Скільки коштує лікування зубів?",
    a: "Вартість лікування залежить від процедури та складності випадку. На першій консультації ми проведемо діагностику, складемо план лікування та надамо прозорий розрахунок вартості. Ми не нав'язуємо зайвих послуг.",
  },
  {
    q: "Чи працюєте ви з дітьми?",
    a: "Так! У нашій клініці працює дитячий стоматолог Булуй Юлія Федорівна. Ми спеціалізуємося на комфортному та безболісному лікуванні дітей, допомагаючи їм подолати страх перед стоматологом.",
  },
  {
    q: "Який графік роботи клініки?",
    a: "Ми працюємо щодня з 9:00 до 20:00, включаючи суботу. Неділя — вихідний. Це дозволяє підібрати зручний час для візиту навіть для тих, хто працює в будні дні.",
  },
  {
    q: "Чи надаєте ви гарантію на лікування?",
    a: "Так, ми надаємо гарантію на всі види лікування. Наша мета — забезпечити довгостроковий результат, тому ми використовуємо тільки якісні матеріали та сучасні технології.",
  },
  {
    q: "Чи є у вас парковка?",
    a: "Так, біля клініки є безкоштовна парковка для наших пацієнтів. Наша клініка знаходиться у зручному місці зі зручним під'їздом.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <Reveal direction="up" className="text-center mb-16">
          <span className="text-accent-dark font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3 mb-6">
            Часті <span className="gradient-text">запитання</span>
          </h2>
          <LineDraw className="h-0.5 w-20 bg-gradient-to-r from-accent to-primary mx-auto mt-6" delay={0.3} />
        </Reveal>

        {/* Accordion */}
        <Stagger stagger={0.06} className="space-y-3">
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <motion.div
                animate={{
                  backgroundColor: openIndex === i ? "rgba(78, 205, 196, 0.03)" : "rgba(248, 246, 243, 1)",
                  borderColor: openIndex === i ? "rgba(78, 205, 196, 0.2)" : "transparent",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden border border-transparent"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                  aria-expanded={openIndex === i}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        rotate: openIndex === i ? 90 : 0,
                        backgroundColor: openIndex === i ? "rgba(78, 205, 196, 0.15)" : "rgba(27, 58, 75, 0.05)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                    >
                      <HelpCircle size={16} className={openIndex === i ? "text-accent-dark" : "text-text-secondary"} />
                    </motion.div>
                    <span className="font-semibold text-text group-hover:text-primary transition-colors">
                      {faq.q}
                    </span>
                  </div>
                  <motion.div
                    animate={{
                      rotate: openIndex === i ? 180 : 0,
                      backgroundColor: openIndex === i ? "rgba(78, 205, 196, 0.15)" : "rgba(27, 58, 75, 0.05)",
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-3"
                  >
                    {openIndex === i ? (
                      <Minus size={14} className="text-accent-dark" />
                    ) : (
                      <Plus size={14} className="text-text-secondary" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="px-6 pb-6 pl-17 text-text-secondary leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

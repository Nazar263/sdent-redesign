"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem, LineDraw } from "./animations";

const doctors = [
  {
    name: "Сарнацький Сергій Олександрович",
    role: "Стоматолог-хірург, ортопед",
    photo: "/images/doctors/sarnatskyi-serhii.jpg",
  },
  {
    name: "Сарнацька Марія Олександрівна",
    role: "Стоматолог-ортодонт",
    photo: "/images/doctors/sarnatska-mariia.jpg",
  },
  {
    name: "Ковалюк Анастасія Володимирівна",
    role: "Стоматолог-терапевт, ендодонтист",
    photo: "/images/doctors/kovalyuk-anastasiia.jpg",
  },
  {
    name: "Булуй Юлія Федорівна",
    role: "Дитячий стоматолог",
    photo: "/images/doctors/bului-yuliia.jpg",
  },
  {
    name: "Сергійчук Ігор Сергійович",
    role: "Асистент, лікар-терапевт",
    photo: "/images/doctors/serhiichuk-ihor.jpg",
  },
  {
    name: "Мандрейчук Ася Володимирівна",
    role: "Головний асистент, гігієніст",
    photo: "/images/doctors/mandreichuk-asia.jpg",
  },
  {
    name: "Березуєва Тетяна Олексіївна",
    role: "Адміністратор",
    photo: "/images/doctors/berezuieva-tetiana.jpg",
  },
  {
    name: "Тетяна",
    role: "Стерильна медсестра",
    photo: "/images/doctors/tetiana.jpg",
  },
];

export default function Team() {
  const ref = useRef(null);

  return (
    <section id="team" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-primary/5"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border border-accent/5"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <Reveal direction="up" className="text-center mb-16">
          <span className="text-accent-dark font-semibold text-sm uppercase tracking-wider">
            Команда
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3 mb-6">
            Знайомтеся з{" "}
            <span className="gradient-text">нашою командою</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Кожен лікар використовує сучасні протоколи, технології та матеріали
            для якісного лікування. Ми турбуємось про комфорт наших пацієнтів.
          </p>
          <LineDraw className="h-0.5 w-20 bg-gradient-to-r from-accent to-primary mx-auto mt-8" delay={0.3} />
        </Reveal>

        {/* Team Grid */}
        <Stagger stagger={0.12} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <StaggerItem key={doctor.name}>
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="relative rounded-2xl overflow-hidden bg-warm shadow-lg shadow-primary/5 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-shadow duration-500">
                  <div className="aspect-[3/4] overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full"
                    >
                      <Image
                        src={doctor.photo}
                        alt={doctor.name}
                        width={400}
                        height={530}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <p className="text-white/80 text-sm font-medium">
                        {doctor.role}
                      </p>
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-0.5 bg-accent/50 rounded-full origin-left"
                    />
                  </div>
                </div>

                {/* Name card */}
                <div className="mt-4 px-1">
                  <h3 className="font-bold text-text text-lg group-hover:text-primary transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">{doctor.role}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}

          {/* CTA Card */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <a
                href="tel:+380974433639"
                className="flex flex-col items-center justify-center h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-500 p-8 text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Записатися на прийом
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  Зателефонуйте нам або залиште заявку на сайті
                </p>
                <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                  Зателефонувати
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </motion.div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem, LineDraw } from "./animations";

interface Education {
  year: string;
  title: string;
}

interface Doctor {
  name: string;
  role: string;
  photo: string;
  specializations: string[];
  education: Education[];
}

const doctors: Doctor[] = [
  {
    name: "Сарнацький Сергій Олександрович",
    role: "Власник, стоматолог-хірург, ортопед",
    photo: "/images/doctors/sarnatskyi-serhii.jpg",
    specializations: [
      "лікування карієсу та його ускладнень",
      "видалення зубів різної складності",
      "протезування зубів",
      "мукогінгівальна хірургія",
      "імплантація та остеопластика",
    ],
    education: [
      { year: "2007", title: "Закінчив НМУ ім. О.О. Богомольця" },
      { year: "2009", title: "Закінчив інтернатуру НУОЗ ім. П.Л. Шупика" },
      { year: "2012", title: "Спеціалізація по ортопедичній стоматології" },
      { year: "2013", title: 'NYU College of Dentistry "Протезування на імплантантах"' },
      { year: "2015", title: "Спеціалізація по хірургічній стоматології" },
      { year: "2016", title: 'Тель-Авів, Ізраїль "Дентальна імплантація"' },
    ],
  },
  {
    name: "Сарнацька Марія Олександрівна",
    role: "Співвласник та головний лікар стоматології S-Dent",
    photo: "/images/doctors/sarnatska-mariia.jpg",
    specializations: [
      "ортодонтичне лікування дітей та дорослих",
      "встановлення мікроімплантів та незнімних апаратів",
      "лікування скронево-нижньощелепного суглобу",
      "ортодонтичне лікування елайнерами",
      "реставраційне відновлення фронтальної та бічної групи зубів",
    ],
    education: [
      { year: "2005", title: "Закінчила НМУ ім. О.О. Богомольця за спеціальністю стоматологія" },
      { year: "2007", title: "Закінчила інтернатуру за спеціалізацією стоматологія НМУ ім. О.О. Богомольця" },
      { year: "2010", title: "Спеціалізація ортодонтія на базі НУОЗ ім. П.Л. Шупика" },
      { year: "2017", title: "Спеціалізація терапевтична стоматологія на базі Української військово-медичної академії" },
      { year: "", title: "Член Асоціації ортодонтів України" },
      { year: "", title: "Член Асоціації стоматологів України" },
    ],
  },
  {
    name: "Ковалюк Анастасія Володимирівна",
    role: "Стоматолог-терапевт, ендодонтист",
    photo: "/images/doctors/kovalyuk-anastasiia.jpg",
    specializations: [
      "відбілювання зубів різними системами",
      "реставрація фронтальної та бічної групи зубів",
      "лікування та переліковування кореневих каналів під мікроскопом",
      "лікування пародонту",
    ],
    education: [],
  },
  {
    name: "Булуй Юлія Федорівна",
    role: "Дитячий стоматолог, ортодонт",
    photo: "/images/doctors/bului-yuliia.jpg",
    specializations: [
      "відбілювання зубів різними системами",
      "лікування карієсу та його ускладнень (пульпітів, періодонтитів) у дітей",
      "лікування та корекція аномалій прикусу у дітей та дорослих",
    ],
    education: [
      { year: "2019", title: "Закінчила Національний Медичний Університет ім. О.О. Богомольця" },
      { year: "2019–2021", title: "Проходила інтернатуру на базі НМУ ім. О.О. Богомольця" },
    ],
  },
  {
    name: "Сергійчук Ігор Сергійович",
    role: "Асистент, стоматолог-терапевт",
    photo: "/images/doctors/serhiichuk-ihor.jpg",
    specializations: [
      "професійна гігієна ротової порожнини",
      "відбілювання зубів різними системами",
      "лікування карієсів різної складності",
    ],
    education: [],
  },
  {
    name: "Мандрейчук Ася Володимирівна",
    role: "Головний асистент, гігієніст",
    photo: "/images/doctors/mandreichuk-asia.jpg",
    specializations: [
      "професійна гігієна ротової порожнини",
      "відбілювання зубів",
      "лікування пародонту",
    ],
    education: [],
  },
  {
    name: "Березуєва Тетяна Олексіївна",
    role: "Адміністратор",
    photo: "/images/doctors/berezuieva-tetiana.jpg",
    specializations: [],
    education: [],
  },
  {
    name: "Тетяна",
    role: "Стерильна медсестра",
    photo: "/images/doctors/tetiana.jpg",
    specializations: [],
    education: [],
  },
];

function DoctorModal({
  doctor,
  onClose,
}: {
  doctor: Doctor;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer"
          aria-label="Закрити"
        >
          <svg className="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Photo */}
          <div className="md:w-2/5 relative bg-warm shrink-0 overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
            <div className="h-full min-h-[400px]">
              <Image
                src={doctor.photo}
                alt={doctor.name}
                width={500}
                height={700}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:w-3/5 p-6 sm:p-8 overflow-y-auto max-h-[50vh] md:max-h-none">
            {/* Name & role */}
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-text mb-2">
                {doctor.name}
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <p className="text-primary-light font-medium">{doctor.role}</p>
              </div>
            </div>

            {/* Specializations */}
            {doctor.specializations.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accent-dark uppercase tracking-wider mb-3">
                  Спеціалізується на:
                </h4>
                <ul className="space-y-2">
                  {doctor.specializations.map((spec, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-sm leading-relaxed">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Education timeline */}
            {doctor.education.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-accent-dark uppercase tracking-wider mb-4">
                  Освіта та досвід
                </h4>
                <div className="relative pl-6">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-accent to-primary/30" />
                  <div className="space-y-4">
                    {doctor.education.map((edu, i) => (
                      <div key={i} className="relative">
                        {/* Dot */}
                        <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-accent" />
                        <div>
                          {edu.year && (
                            <span className="text-xs font-bold text-accent-dark bg-accent/10 px-2 py-0.5 rounded-full">
                              {edu.year}
                            </span>
                          )}
                          <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                            {edu.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-border">
              <a
                href="tel:+380974433639"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Записатися на прийом
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Team() {
  const ref = useRef(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleClose = useCallback(() => setSelectedDoctor(null), []);

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
                className="group relative cursor-pointer"
                onClick={() => setSelectedDoctor(doctor)}
              >
                <div className="relative rounded-2xl overflow-hidden bg-warm shadow-lg shadow-primary/5 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-shadow duration-500">
                  <div className="h-[420px] overflow-hidden">
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
                    {/* "Детальніше" hint */}
                    <p className="text-white/60 text-xs mt-3 flex items-center gap-1">
                      Натисніть для деталей
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </div>

                {/* Name card */}
                <div className="mt-4 px-1">
                  <h3 className="font-bold text-text text-lg group-hover:text-primary transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1 line-clamp-2">{doctor.role}</p>
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

      {/* Doctor Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <DoctorModal doctor={selectedDoctor} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}

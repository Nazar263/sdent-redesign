"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MapPin, Clock, Heart, List } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./animations";

const footerLinks = [
  { href: "#about", label: "Про нас" },
  { href: "#services", label: "Послуги" },
  { href: "#team", label: "Команда" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacts", label: "Контакти" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100063505630833",
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    href: "https://www.instagram.com/s_dent_clinic",
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

export default function Footer({ onPriceListOpen }: { onPriceListOpen?: () => void }) {
  return (
    <footer className="bg-text text-white relative overflow-hidden">
      {/* Subtle gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Stagger stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <StaggerItem>
            <div className="lg:col-span-1">
              <motion.div whileHover={{ scale: 1.03 }} className="inline-block mb-6">
                <Image
                  src="/images/logo-white.png"
                  alt="S.Dent"
                  width={120}
                  height={36}
                  className="h-8 w-auto"
                />
              </motion.div>
              <p className="text-white/50 leading-relaxed text-sm">
                Сімейна стоматологія S-Dent — якісні стоматологічні послуги для
                вас та ваших рідних з 2013 року.
              </p>
              {/* Social links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2, backgroundColor: "rgba(78, 205, 196, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Navigation */}
          <StaggerItem>
            <h4 className="font-bold text-white mb-4">Навігація</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-white/50 hover:text-accent transition-colors text-sm inline-block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
              <li>
                <motion.button
                  onClick={onPriceListOpen}
                  whileHover={{ x: 4 }}
                  className="text-white/50 hover:text-accent transition-colors text-sm inline-flex items-center gap-2"
                >
                  <List size={14} />
                  Прайс-лист
                </motion.button>
              </li>
            </ul>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <h4 className="font-bold text-white mb-4">Контакти</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  Іоанна Павла ІІ, буд. 11, Київ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <motion.a
                  href="tel:+380974433639"
                  whileHover={{ x: 2 }}
                  className="text-white/50 hover:text-accent transition-colors text-sm"
                >
                  +38 097 443 3639
                </motion.a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  Пн–Сб: 9:00 – 20:00
                  <br />
                  Нд: вихідний
                </span>
              </li>
            </ul>
          </StaggerItem>

          {/* Quick CTA */}
          <StaggerItem>
            <h4 className="font-bold text-white mb-4">Запишіться</h4>
            <p className="text-white/50 text-sm mb-4">
              Готові до ідеальної посмішки? Запишіться на консультацію прямо
              зараз.
            </p>
            <motion.a
              href="#contacts"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px rgba(78, 205, 196, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full text-sm"
            >
              Записатися
            </motion.a>
          </StaggerItem>
        </Stagger>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} S.Dent — Стоматологічна клініка. Усі
              права захищені.
            </p>
            <span className="hidden sm:inline text-white/15">|</span>
            <motion.a
              href="https://freelance-ua.agency"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: "rgba(78, 205, 196, 0.8)" }}
              className="text-white/30 text-sm hover:text-accent transition-colors"
            >
              Розробка сайту — Freelance UA
            </motion.a>
          </div>
          <p className="text-white/30 text-sm flex items-center gap-1">
            Зроблено з{" "}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-400" />
            </motion.span>{" "}
            для вашої посмішки
          </p>
        </div>
      </div>
    </footer>
  );
}

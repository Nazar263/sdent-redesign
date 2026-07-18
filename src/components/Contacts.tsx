"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem, LineDraw } from "./animations";

const contactCards = [
  {
    icon: MapPin,
    title: "Головна клініка",
    lines: ["Іоанна Павла ІІ, буд. 11", "Україна, Київ"],
    gradient: "from-primary/10 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Phone,
    title: "Телефон",
    lines: ["+38 097 443 3639"],
    href: "tel:+380974433639",
    gradient: "from-accent/15 to-accent/5",
    iconColor: "text-accent-dark",
    linkColor: "text-primary hover:text-primary-light",
  },
  {
    icon: Clock,
    title: "Графік роботи",
    lines: ["Пн–Сб: 9:00 – 20:00", "Нд: вихідний"],
    gradient: "from-amber-500/10 to-amber-500/5",
    iconColor: "text-amber-600",
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="text-center mb-16">
          <span className="text-accent-dark font-semibold text-sm uppercase tracking-wider">
            Контакти
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3 mb-6">
            Зв&apos;яжіться з <span className="gradient-text">нами</span>
          </h2>
          <LineDraw className="h-0.5 w-20 bg-gradient-to-r from-accent to-primary mx-auto mt-6" delay={0.3} />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <Reveal direction="left" delay={0.2} className="space-y-6">
            <Stagger stagger={0.1} className="space-y-4">
              {contactCards.map((card) => (
                <StaggerItem key={card.title}>
                  <motion.div
                    whileHover={{ x: 4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-warm rounded-2xl p-6 border border-transparent hover:border-accent/10 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <card.icon size={22} className={card.iconColor} />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-text text-lg mb-1">{card.title}</h3>
                        {card.lines.map((line, j) =>
                          card.href && j === 0 ? (
                            <a
                              key={j}
                              href={card.href}
                              className={`font-semibold ${card.linkColor} transition-colors block`}
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={j} className="text-text-secondary">{line}</p>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Messenger buttons */}
            <Stagger stagger={0.08} className="flex flex-wrap gap-3">
              <StaggerItem>
                <motion.a
                  href="https://www.facebook.com/profile.php?id=100063505630833"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white font-medium rounded-full shadow-lg shadow-[#1877F2]/20"
                >
                  <MessageCircle size={18} />
                  Facebook Messenger
                </motion.a>
              </StaggerItem>
              <StaggerItem>
                <motion.a
                  href="https://t.me/s_dent"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0088CC] text-white font-medium rounded-full shadow-lg shadow-[#0088CC]/20"
                >
                  <Send size={18} />
                  Telegram
                </motion.a>
              </StaggerItem>
              <StaggerItem>
                <motion.a
                  href="tel:+380974433639"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full shadow-lg shadow-primary/20"
                >
                  <Phone size={18} />
                  Зателефонувати
                </motion.a>
              </StaggerItem>
            </Stagger>

            {/* Email */}
            <Reveal direction="left" delay={0.5}>
              <div className="flex items-center gap-3 text-text-secondary">
                <Mail size={18} className="text-accent-dark" />
                <a
                  href="mailto:info@s-dent.ua"
                  className="hover:text-primary transition-colors"
                >
                  info@s-dent.ua
                </a>
              </div>
            </Reveal>
          </Reveal>

          {/* Right — Map */}
          <Reveal direction="right" delay={0.3}>
            <motion.div
              whileHover={{ boxShadow: "0 25px 60px -15px rgba(0,0,0,0.15)" }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border h-[400px] lg:h-full"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5!2d30.5326337!3d50.4209277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cff7f995e7ed%3A0xf2f94f95fbae3874!2sS-DENT!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S.Dent Google Maps"
              />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

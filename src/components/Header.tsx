"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "Про нас" },
  { href: "#services", label: "Послуги" },
  { href: "#team", label: "Команда" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacts", label: "Контакти" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg shadow-primary/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 group shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="S.Dent"
              width={220}
              height={64}
              className="h-10 sm:h-12 lg:h-14 w-auto transition-transform duration-300"
              priority
            />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                    isActive ? "text-primary" : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-accent/8 rounded-full border border-accent/15"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="tel:+380974433639"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              <Phone size={16} />
              +38 097 443 3639
            </motion.a>
            <motion.a
              href="#contacts"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px rgba(27, 58, 75, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-light transition-all duration-300"
            >
              Записатися
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 text-primary shrink-0 -mr-1"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden w-full glass border-t border-border overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="px-4 py-3 text-base font-medium text-text-secondary hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-3 pt-3 border-t border-border flex flex-col gap-3"
              >
                <a
                  href="tel:+380974433639"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary"
                >
                  <Phone size={16} />
                  +38 097 443 3639
                </a>
                <a
                  href="#contacts"
                  onClick={() => setIsMobileOpen(false)}
                  className="mx-4 py-3 bg-primary text-white text-center text-sm font-semibold rounded-full"
                >
                  Записатися
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem, LineDraw } from "./animations";

const galleryImages = [
  { src: "/images/gallery/dental-chair.jpg", alt: "інструменти для лікування" },
  { src: "/images/gallery/inter.jpeg", alt: "Інтер'єр клініки S.Dent" },
  { src: "/images/gallery/dental-white-teeth.jpg", alt: "Стоматологічне лікування" },
  { src: "/images/gallery/dental-xray.jpg", alt: "Стоматологічний кабінет" },
  { src: "/images/gallery/dental-treatment.jpg", alt: "Рентген" },
  { src: "/images/gallery/dental-smile.jpg", alt: "Біла посмішка після лікування" },
  { src: "/images/gallery/gallery-4.png", alt: "Відбілювання зубів — результат" },
  { src: "/images/gallery/clinic-equipment.jpg", alt: "фото команди клініки S.Dent" }
  
];

export default function Gallery() {
  const ref = useRef(null);
  const [selected, setSelected] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelected(index);
  const closeLightbox = () => setSelected(null);
  const prev = () => setSelected((s) => (s !== null ? (s - 1 + galleryImages.length) % galleryImages.length : null));
  const next = () => setSelected((s) => (s !== null ? (s + 1) % galleryImages.length : null));

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-warm relative noise-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <Reveal direction="up" className="text-center mb-16">
          <span className="text-accent-dark font-semibold text-sm uppercase tracking-wider">
            Галерея
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3 mb-6">
            Наша <span className="gradient-text">клініка</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Зазирніть у нашу клініку — сучасний простір, створений для вашого
            комфорту.
          </p>
          <LineDraw className="h-0.5 w-20 bg-gradient-to-r from-accent to-primary mx-auto mt-8" delay={0.3} />
        </Reveal>

        {/* Grid */}
        <Stagger stagger={0.08} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-square"
                onClick={() => openLightbox(i)}
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Hover content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="h-0.5 bg-accent/60 mt-2 rounded-full origin-left"
                  />
                </div>

                {/* Corner decoration */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </motion.button>

            {/* Nav */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium"
            >
              {selected + 1} / {galleryImages.length}
            </motion.div>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: 2 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl max-h-[80vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selected].src}
                  alt={galleryImages[selected].alt}
                  width={1200}
                  height={800}
                  className="max-h-[75vh] w-auto object-contain rounded-xl"
                />
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/80 text-center mt-4 text-sm"
                >
                  {galleryImages[selected].alt}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

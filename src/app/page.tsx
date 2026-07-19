"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import TreatmentSteps from "@/components/TreatmentSteps";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import PriceList from "@/components/PriceList";

export default function Home() {
  const [isPriceListOpen, setIsPriceListOpen] = useState(false);

  return (
    <>
      <Header onPriceListOpen={() => setIsPriceListOpen(true)} />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <TreatmentSteps />
        <Gallery />
        <Reviews />
        <FAQ />
        <CTA onPriceListOpen={() => setIsPriceListOpen(true)} />
        <Contacts />
      </main>
      <Footer onPriceListOpen={() => setIsPriceListOpen(true)} />
      <PriceList
        isOpen={isPriceListOpen}
        onClose={() => setIsPriceListOpen(false)}
      />
    </>
  );
}

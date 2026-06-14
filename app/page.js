"use client";
import { useState } from "react";
import BannerIntro from "./components/BannerIntro";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PopImage from "./components/PopImage";
import Ticker from "./components/Ticker";
import ServicesSection from "./components/ServicesSection";
import ResultsSection from "./components/ResultsSection";
import ProcessSection from "./components/ProcessSection";
import MotionSection from "./components/MotionSection";
import InfluencersSection from "./components/InfluencersSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <BannerIntro onDone={() => setIntroDone(true)} />
      <Navbar />
      <main>
        <HeroSection />
        <PopImage />
        <Ticker />
        <ServicesSection />
        <ResultsSection />
        <ProcessSection />
        <MotionSection />
        <InfluencersSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}

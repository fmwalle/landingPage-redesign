"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarrierTicker from "@/components/CarrierTicker";
import Features from "@/components/Features";
import ProductPreview from "@/components/ProductPreview";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <CarrierTicker />
        <Features />
        <ProductPreview />
        <HowItWorks />
        <Products />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
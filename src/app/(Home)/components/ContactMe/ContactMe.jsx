"use client";

import React from "react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import AboutMeGlowGrid from "../AboutMe/components/AboutMeGlowGrid";
import ContactInfoGrid from "./components/ContactInfoGrid";
import ContactForm from "./components/ContactForm";
import Footer from "../Footer/Footer";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <section className="relative w-full pt-[calc((40/375)*100vw)] lg:pt-[calc((100/1920)*100vw)] pb-0 z-20 overflow-hidden" id="contact">
      {/* Glow Grid */}
      <div className="translate-y-[calc((20/375)*100vw)] lg:translate-y-[calc((54/1920)*100vw)]">
        <AboutMeGlowGrid />
      </div>

      {/* Section Header */}
      <SectionHeader
        firstLine="LET’S TURN YOUR"
        secondLine="IDEA INTO REALITY"
        className="mb-[calc((36/375)*100vw)] lg:mb-[calc((80/1920)*100vw)] relative z-20"
      />

      {/* Background Strip */}
      <div className="w-full border-y border-[#222222] relative z-10 overflow-hidden bg-[#0F0F0F]">
        {/* Content Layout */}
        <div className="w-full flex flex-col-reverse lg:flex-row">
          {/* Left Column */}
          <ContactInfoGrid />

          {/* Right Column */}
          <ContactForm />
        </div>

        {/* Footer Display */}
        <Footer />
      </div>
    </section>
  );
}

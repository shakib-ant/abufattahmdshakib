"use client";

import React from "react";
import ContactMeGlowGrid from "./components/ContactMeGlowGrid";
import ContactInfoGrid from "./components/ContactInfoGrid";
import ContactForm from "./components/ContactForm";
import Footer from "../Footer/Footer";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <section className="relative w-full pt-16 sm:pt-24 pb-0 z-20 overflow-hidden" id="contact">
      {/* Glow Grid */}
      <ContactMeGlowGrid />

      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16 relative z-10 px-4">
        <h2 className="font-fustat font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-tight tracking-tight uppercase">
          <span className="text-[#E0E0E0] block">LET’S TURN YOUR</span>
          <span className="text-[#E25822] block">IDEA INTO REALITY</span>
        </h2>
      </div>

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

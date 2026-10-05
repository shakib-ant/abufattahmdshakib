"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import AboutMeGlowGrid from "./components/AboutMeGlowGrid";
import AboutMeTabs from "./components/AboutMeTabs";
import AboutMeStats from "./components/AboutMeStats";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section id="about" className="relative w-full pt-[calc((40/375)*100vw)] lg:pt-0  z-20 flex flex-col items-center overflow-hidden">
      {/* Glow Grid */}
      <AboutMeGlowGrid />

      {/* Section Header */}
      <SectionHeader text="ABOUT ME" className="mb-[calc((36/375)*100vw)] lg:mb-[calc((100/1920)*100vw)] relative z-40" />

      {/* Background Strip */}
      <div className="w-full bg-[#0F0F0F] border-y border-[#1F1F1F] relative z-20 h-auto lg:h-[calc((693/1920)*100vw)]">
        {/* Content Grid */}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column */}
          <AboutMeTabs />

          {/* Right Column */}
          <AboutMeStats />
        </div>
      </div>
    </section>
  );
}
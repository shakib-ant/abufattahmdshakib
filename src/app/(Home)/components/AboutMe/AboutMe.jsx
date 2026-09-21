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
    <section id="about" className="relative w-full pt-0 lg:pt-[20px] z-20 flex flex-col items-center">
      {/* Glow Grid */}
      <AboutMeGlowGrid />

      {/* Section Header */}
      <SectionHeader text="ABOUT ME" className="mb-10 sm:mb-14" />

      {/* Background Strip */}
      <div className="w-full bg-[#111111] border-y border-[#222222] relative z-10 h-auto lg:h-[691px]">
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
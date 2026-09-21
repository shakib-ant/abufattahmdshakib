"use client";

import React from "react";
import { Plus } from "lucide-react";

export default function ContactMeGlowGrid() {
  return (
    <>
      {/* Glow Effect */}
      <div
        className="absolute pointer-events-none rounded-full z-0 left-1/2 -translate-x-1/2 top-[80px] sm:top-[150px] w-[260px] sm:w-[560px] h-[240px] sm:h-[519px] bg-[#E25822] blur-[70px] sm:blur-[120px] opacity-60 sm:opacity-85"
      />

      {/* Plus Grid */}
      <div className="absolute top-[100px] sm:top-[180px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3.5 pointer-events-none z-0 select-none scale-75 sm:scale-100">
        <div className="flex items-center gap-4 sm:gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`contact-l1-${i}`} className="about-plus-pulse-1">
              <Plus className="w-2 h-2 text-[#E25822]" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`contact-l2-${i}`} className="about-plus-pulse-2">
              <Plus className="w-2 h-2 text-[#E25822]" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

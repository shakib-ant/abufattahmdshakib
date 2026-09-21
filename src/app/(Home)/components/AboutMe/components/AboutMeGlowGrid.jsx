"use client";

import React from "react";
import { Plus } from "lucide-react";

export default function AboutMeGlowGrid() {
  return (
    <>
      {/* Glow Effect */}
      <div
        className="absolute pointer-events-none rounded-full z-0 left-1/2 -translate-x-1/2 top-[80px] sm:top-[170px] w-[260px] sm:w-[560px] h-[240px] sm:h-[519px] bg-[#E25822] blur-[70px] sm:blur-[120px] opacity-60 sm:opacity-100"
      />

      {/* Plus Grid */}
      <div className="absolute top-[90px] sm:top-[155px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3.5 pointer-events-none z-0 select-none scale-75 sm:scale-100">
        {/* Layer 1 */}
        <div className="flex items-center gap-4 sm:gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`about-l1-${i}`}
              className="about-plus-pulse-1"
              style={{
                animationDelay: `${(i * 0.4) % 2.2}s`,
                animationDuration: `${3.2 + (i % 3) * 0.8}s`,
              }}
            >
              <Plus className="w-2 h-2 text-[#E25822]" />
            </div>
          ))}
        </div>

        {/* Layer 2 */}
        <div className="flex items-center gap-4 sm:gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`about-l2-${i}`}
              className="about-plus-pulse-2"
              style={{
                animationDelay: `${((i + 2) * 0.35) % 2.5}s`,
                animationDuration: `${2.8 + ((i + 1) % 4) * 0.7}s`,
              }}
            >
              <Plus className="w-2 h-2 text-[#E25822]" />
            </div>
          ))}
        </div>

        {/* Layer 3 */}
        <div className="flex items-center gap-4 sm:gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`about-l3-${i}`}
              className="about-plus-pulse-3"
              style={{
                animationDelay: `${((i + 1) * 0.5) % 2.8}s`,
                animationDuration: `${3.5 + ((i + 3) % 3) * 0.9}s`,
              }}
            >
              <Plus className="w-2 h-2 text-[#E25822]" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

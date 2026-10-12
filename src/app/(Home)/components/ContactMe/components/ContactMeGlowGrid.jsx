"use client";

import React from "react";
import { Plus } from "lucide-react";

export default function ContactMeGlowGrid() {
  return (
    <>
      {/* Glow Effect */}
      <div
        className="absolute pointer-events-none rounded-full z-0 left-1/2 -translate-x-1/2 top-[calc((80/375)*100vw)] lg:top-[calc((150/1920)*100vw)] w-[calc((260/375)*100vw)] lg:w-[calc((560/1920)*100vw)] h-[calc((240/375)*100vw)] lg:h-[calc((519/1920)*100vw)] bg-[#E25822] blur-[calc((70/375)*100vw)] lg:blur-[calc((120/1920)*100vw)] opacity-60 lg:opacity-85"
      />

      {/* Plus Grid */}
      <div className="absolute top-[calc((100/375)*100vw)] lg:top-[calc((180/1920)*100vw)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[calc((8/375)*100vw)] lg:gap-[calc((14/1920)*100vw)] pointer-events-none z-0 select-none scale-75 lg:scale-100">
        <div className="flex items-center gap-[calc((16/375)*100vw)] lg:gap-[calc((32/1920)*100vw)]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`contact-l1-${i}`} className="about-plus-pulse-1">
              <Plus className="w-[calc((8/375)*100vw)] h-[calc((8/375)*100vw)] lg:w-[calc((10/1920)*100vw)] lg:h-[calc((10/1920)*100vw)] text-[#E25822]" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[calc((16/375)*100vw)] lg:gap-[calc((32/1920)*100vw)]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`contact-l2-${i}`} className="about-plus-pulse-2">
              <Plus className="w-[calc((8/375)*100vw)] h-[calc((8/375)*100vw)] lg:w-[calc((10/1920)*100vw)] lg:h-[calc((10/1920)*100vw)] text-[#E25822]" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

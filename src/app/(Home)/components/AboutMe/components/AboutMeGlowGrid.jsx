"use client";

import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

export default function AboutMeGlowGrid() {
  return (
    <div className="absolute top-[calc((30/375)*100vw)] lg:top-[calc((40/1920)*100vw)] left-1/2 -translate-x-1/2 w-[calc((366/375)*100vw)] lg:w-[calc((696/1920)*100vw)] h-[calc((339/375)*100vw)] lg:h-[calc((456/1920)*100vw)] pointer-events-none z-10">
      {/* Background Glow Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://e-commerce-test.sgp1.digitaloceanspaces.com/herobgiamgenot/1791212464780-BGIMAGE.png"
          alt="About Me Background Glow"
          fill
          priority
          unoptimized
          className="object-cover object-center select-none"
        />
      </div>

      {/* Plus Grid on Top of Image */}
      <div className="absolute top-[calc((36/375)*100vw)] lg:top-[calc((48/1920)*100vw)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[calc((12/375)*100vw)] lg:gap-[calc((16/1920)*100vw)] z-20 select-none">
        {/* Layer 1 */}
        <div className="flex items-center gap-[calc((12/375)*100vw)] lg:gap-[calc((40/1920)*100vw)]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`about-l1-${i}`}
              className="about-plus-pulse-1"
              style={{
                animationDelay: `${(i * 0.4) % 2.2}s`,
                animationDuration: `${3.2 + (i % 3) * 0.8}s`,
              }}
            >
              <Plus className="w-[calc((6/375)*100vw)] lg:w-[calc((7/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((7/1920)*100vw)] text-[#E54F1F]" />
            </div>
          ))}
        </div>

        {/* Layer 2 */}
        <div className="flex items-center gap-[calc((16/375)*100vw)] lg:gap-[calc((40/1920)*100vw)]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`about-l2-${i}`}
              className="about-plus-pulse-2"
              style={{
                animationDelay: `${((i + 2) * 0.35) % 2.5}s`,
                animationDuration: `${2.8 + ((i + 1) % 4) * 0.7}s`,
              }}
            >
              <Plus className="w-[calc((6/375)*100vw)] lg:w-[calc((7/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((7/1920)*100vw)] text-[#E54F1F]" />
            </div>
          ))}
        </div>

        {/* Layer 3 */}
        <div className="flex items-center gap-[calc((20/375)*100vw)] lg:gap-[calc((40/1920)*100vw)]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`about-l3-${i}`}
              className="about-plus-pulse-3"
              style={{
                animationDelay: `${((i + 1) * 0.5) % 2.8}s`,
                animationDuration: `${3.5 + ((i + 3) % 3) * 0.9}s`,
              }}
            >
              <Plus className="w-[calc((6/375)*100vw)] lg:w-[calc((7/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((7/1920)*100vw)] text-[#E54F1F]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#222222] relative z-10 pt-[calc((24/375)*100vw)] lg:pt-[calc((45/1920)*100vw)] flex flex-col justify-end overflow-hidden bg-[#0F0F0F]">
      {/* SHAKIB Showcase */}
      <div className="relative w-full flex items-center justify-center overflow-hidden z-10 h-[calc((67/375)*100vw)] lg:h-[calc((266/1920)*100vw)]">
        <h1
          className="font-fustat font-semibold uppercase text-center tracking-normal leading-none select-none relative z-10 inline-block bg-clip-text text-transparent text-[calc((96/375)*100vw)] lg:text-[calc((380/1920)*100vw)] translate-y-[calc((12/375)*100vw)] lg:translate-y-[calc((32/1920)*100vw)]"
          style={{
            background: "linear-gradient(180deg, #D0481C 0%, rgba(157, 54, 21, 0.4) 40%, rgba(106, 37, 14, 0) 77.26%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          SHAKIB
        </h1>
      </div>
    </footer>
  );
}







"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#222222] relative z-10 pt-[45px] flex flex-col justify-end overflow-hidden bg-[#0F0F0F]">
      {/* SHAKIB Showcase */}
      <div className="relative w-full flex items-center justify-center overflow-hidden z-10 h-[67px] sm:h-[91px] md:h-[133px] lg:h-[175px] xl:h-[217px] 2xl:h-[266px]">
        <h1
          className="font-fustat font-semibold uppercase text-center tracking-normal leading-none select-none relative z-10 inline-block bg-clip-text text-transparent text-[96px] sm:text-[130px] md:text-[190px] lg:text-[250px] xl:text-[310px] 2xl:text-[380px] translate-y-3 sm:translate-y-4 md:translate-y-8"
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







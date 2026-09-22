"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useHeroDot } from "./utils";
import ResumeButton from "./components/ResumeButton";
import "./Hero.css";
import "./dotBounce.css";

export default function Hero() {
  const { showDot } = useHeroDot();

  return (
    <>
      {/* Desktop Hero */}
      <section className="hidden md:flex relative w-full h-[calc(100vh-80px)] min-h-[600px] flex-col justify-between overflow-hidden z-40">
        <div className="relative z-40 flex-1 flex flex-col justify-between pt-4 pb-0 w-full px-4 md:px-6">
          <div className="flex-1 flex flex-col justify-center gap-3 sm:gap-5 py-2 mb-16 sm:mb-24 md:mb-32">
            {/* Profile Image */}
            <div className="relative w-[180px] h-[211px] mm:w-[200px] mm:h-[235px] lm:w-[220px] lm:h-[258px] sm:w-[240px] sm:h-[282px] md:w-[260px] md:h-[305px] lg:w-[270px] lg:h-[317px] 3xl:w-[280px] 3xl:h-[329px] mx-auto -translate-y-[30px] z-50">
              <Image
                src="https://e-commerce-test.sgp1.digitaloceanspaces.com/profileHeroImage/1790098305125-Hero2.svg"
                alt="Abu Fattah Shakib - Profile"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Subtitle Name */}
            <div className="flex flex-col gap-2.5 relative z-50">
              <p className="font-fustat text-[#808080] text-lg mm:text-xl lm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] 3xl:text-[64px] font-semibold leading-[100%] tracking-normal">
                Hey there, I’m
              </p>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="font-fustat text-3xl mm:text-4xl lm:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[58px] 3xl:text-[64px] font-bold leading-[100%] tracking-normal">
                  <span className="text-[#D9D9D9]">Abu Fattah </span>
                  <span className="text-[#E25822]">
                    Shak
                    <span className="relative inline-flex flex-col items-center">
                      {/* Bouncing Dot */}
                      {showDot && (
                        <motion.span
                          drag
                          dragSnapToOrigin
                          dragElastic={0.6}
                          whileHover={{ scale: 1.3, cursor: "grab" }}
                          whileDrag={{ scale: 1.5, cursor: "grabbing" }}
                          className="absolute top-[2px] left-1 w-[8px] h-[8px] rounded-full bg-[#E25822] shadow-[0_0_8px_#E25822] animate-shakib-dot-bounce cursor-grab touch-none z-50 inline-block"
                        />
                      )}
                      {/* Dotless i */}
                      <span>ı</span>
                    </span>
                    b
                  </span>
                </h1>

                {/* Resume Button */}
                <ResumeButton />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-4 md:px-6 pointer-events-none z-30">
            <h2 className="font-bebasnNeue text-[42px] mm:text-[50px] lm:text-[54px] llm:text-[60px] sm:text-[88px] md:text-[120px] lg:text-[155px] xl:text-[190px] 2xl:text-[225px] 3xl:text-[286px] font-normal leading-[1] select-none uppercase flex items-baseline gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full translate-y-3 sm:translate-y-5 md:translate-y-7 lg:translate-y-14">
              <span className="text-neutral-100">WEB</span>
              <span className="text-[#E25822]">DEVELOPER</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Mobile Hero */}
      <section className="flex md:hidden flex-col items-center justify-between w-full h-[calc(100dvh-72px)] min-h-[580px] relative z-40 my-0 pb-6">
        <div className="w-full relative overflow-visible flex flex-col items-center text-center">

          {/* Profile Image */}
          <div className="relative w-[215px] h-[252px] sm:w-[245px] sm:h-[288px] z-50 mt-[80px] mb-5">
            <Image
              src="https://e-commerce-test.sgp1.digitaloceanspaces.com/profileHeroImage/1790098305125-Hero2.svg"
              alt="Abu Fattah Shakib - Profile"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Subtitle Name */}
          <div className="relative z-10 flex flex-col items-center gap-1.5 mb-5">
            <p className="font-fustat text-[#808080] text-base sm:text-lg font-medium leading-tight">
              Hey there, I’m
            </p>

            <h1 className="font-fustat text-2xl sm:text-3xl font-bold leading-tight flex items-center justify-center gap-1.5">
              <span className="text-[#D9D9D9]">Abu Fattah</span>
              <span className="text-[#E25822]">
                Shak
                <span className="relative inline-flex flex-col items-center">
                  {showDot && (
                    <motion.span
                      drag
                      dragSnapToOrigin
                      dragElastic={0.6}
                      whileHover={{ scale: 1.3, cursor: "grab" }}
                      whileDrag={{ scale: 1.5, cursor: "grabbing" }}
                      className="absolute top-[1px] left-[3px] w-[6px] h-[6px] rounded-full bg-[#E25822] shadow-[0_0_6px_#E25822] animate-shakib-dot-bounce cursor-grab touch-none z-50 inline-block"
                    />
                  )}
                  <span>ı</span>
                </span>
                b
              </span>
            </h1>
          </div>

          {/* Big Heading */}
          <div className="relative z-10 flex flex-col items-center justify-center mb-6 leading-none select-none">
            <span className="font-bebasnNeue text-[64px] sm:text-[76px] font-normal text-white tracking-wider leading-[0.88] uppercase">
              WEB
            </span>
            <span className="font-bebasnNeue text-[64px] sm:text-[76px] font-normal text-[#E25822] tracking-wider leading-[0.88] uppercase">
              DEVELOPER
            </span>
          </div>

          {/* Resume Button */}
          <div className="relative z-10 mb-1">
            <ResumeButton />
          </div>

        </div>
      </section>

    </>
  );
}


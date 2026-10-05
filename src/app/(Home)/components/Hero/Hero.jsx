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
      <section className="hidden lg:flex relative w-full h-screen flex-col justify-between overflow-hidden z-40">
        <div className="relative z-40 flex-1 flex flex-col justify-between w-full">
          {/* Main Content Area */}
          <div className="flex flex-col items-center justify-center w-full">
            {/* Profile Image */}
            <div className="relative w-[calc((280/1920)*100vw)] h-[calc((329/1920)*100vw)] rounded-[calc((9.86/1920)*100vw)] mx-auto z-50 overflow-hidden lg:mt-[calc((98/1920)*100vw)]">
              <Image
                src="https://e-commerce-test.sgp1.digitaloceanspaces.com/shakibhero/1791210950491-meheroimage.png"
                alt="Abu Fattah Shakib - Profile"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Subtitle Name Container */}
            <div className="w-[calc((1399/1920)*100vw)] flex flex-col relative z-50 mx-auto mt-[calc((55/1920)*100vw)]">
              <p className="font-fustat text-[#808080] text-[calc((64/1920)*100vw)] font-semibold leading-[100%]">
                Hey there, I’m
              </p>

              <div className="flex flex-row items-center justify-between mt-[calc((20/1920)*100vw)]">
                <h1 className="font-fustat text-[calc((64/1920)*100vw)] font-bold leading-[100%]">
                  <span className="text-[#D9D9D9]">Abu Fattah </span>
                  <span className="text-[#E25822]">
                    Shak
                    <span className="relative inline-flex flex-col items-center">
                      {/* Bouncing Dot */}
                      {showDot && (
                        <span className="absolute top-[calc((2/1920)*100vw)] left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-auto">
                          <motion.span
                            drag
                            dragSnapToOrigin
                            dragElastic={0.6}
                            whileHover={{ scale: 1.3, cursor: "grab" }}
                            whileDrag={{ scale: 1.5, cursor: "grabbing" }}
                            className="w-[calc((8/1920)*100vw)] h-[calc((8/1920)*100vw)] rounded-full bg-[#E25822] animate-shakib-dot-bounce cursor-grab touch-none inline-block"
                          />
                        </span>
                      )}
                      {/* Dotless i */}
                      <span>ı</span>
                    </span>
                    b
                  </span>
                </h1>

                {/* Resume Button */}
                <div className="mb-[calc((10/1920)*100vw)]">
                  <ResumeButton />
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc((1399/1920)*100vw)] pointer-events-none z-30">
            <h2 className="font-bebasnNeue text-[calc((286/1920)*100vw)] font-normal leading-none select-none uppercase flex items-baseline gap-[calc((46/1920)*100vw)] w-full translate-y-[calc((-10/1920)*100vw)]">
              <span className="text-[#D9D9D9]">WEB</span>
              <span className="text-[#E25822]">DEVELOPER</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Mobile Hero */}
      <section className="flex lg:hidden flex-col items-center w-full relative z-40 overflow-hidden pb-[calc((36/375)*100vw)]">
        <div className="w-full relative flex flex-col items-center text-center">

          {/* Profile Image */}
          <div className="relative w-[calc((222.86/375)*100vw)] h-[calc((260/375)*100vw)] rounded-[calc((9.9/375)*100vw)] z-50 mt-[calc((80/375)*100vw)] overflow-hidden">
            <Image
              src="https://e-commerce-test.sgp1.digitaloceanspaces.com/shakibhero/1791210950491-meheroimage.png"
              alt="Abu Fattah Shakib - Profile"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Content Container */}
          <div className="w-[calc((336/375)*100vw)] flex flex-col items-center text-center relative z-50 mx-auto mt-[calc((40/375)*100vw)]">

            {/* Subtitle */}
            <p className="font-fustat text-[#808080] text-[calc((20/375)*100vw)] font-semibold leading-[100%] mb-[calc((16/375)*100vw)]">
              Hey there, I’m
            </p>

            {/* Name */}
            <h1 className="font-fustat text-[calc((20/375)*100vw)] font-bold leading-[100%] flex items-center justify-center gap-[calc((6/375)*100vw)] mb-[calc((40/375)*100vw)]">
              <span className="text-[#D9D9D9]">Abu Fattah</span>
              <span className="text-[#E25822]">
                Shak
                <span className="relative inline-flex flex-col items-center">
                  {showDot && (
                    <span className="absolute top-[calc((0.5/375)*100vw)] left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-auto">
                      <motion.span
                        drag
                        dragSnapToOrigin
                        dragElastic={0.6}
                        whileHover={{ scale: 1.3, cursor: "grab" }}
                        whileDrag={{ scale: 1.5, cursor: "grabbing" }}
                        className="w-[calc((2.5/375)*100vw)] h-[calc((2.5/375)*100vw)] rounded-full bg-[#E25822] animate-shakib-dot-bounce cursor-grab touch-none inline-block"
                      />
                    </span>
                  )}
                  <span>ı</span>
                </span>
                b
              </span>
            </h1>

            {/* Big Title */}
            <div className="w-full flex flex-col items-center justify-center leading-[90%] mb-[calc((40/375)*100vw)] select-none">
              <span className="font-bebasnNeue text-[calc((90/375)*100vw)] font-normal text-[#D9D9D9] leading-[90%] uppercase text-center">
                WEB
              </span>
              <span className="font-bebasnNeue text-[calc((90/375)*100vw)] font-normal text-[#E25822] leading-[90%] uppercase text-center">
                DEVELOPER
              </span>
            </div>

            {/* Resume Button */}
            <div className="relative z-10 flex justify-center w-full">
              <ResumeButton />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}


"use client";

import React from "react";
import Image from "next/image";
import { toolkitData } from "./data";
import { useScrollReveal, getGridCellInfo } from "./utils";
import "./toolkit.css";

export default function Toolkit() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-[#1F1F1F] w-full py-[40px] lg:py-0 h-[700px] overflow-visible flex items-center justify-center [clip-path:inset(0_-100vw_0_-100vw)]"
    >
      <div className="w-full px-4 lg:px-0 overflow-x-visible">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full overflow-x-visible">
          {/* Left Titles */}
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left lg:pl-[60px]">
            <h3 className="font-bebasnNeue text-2xl sm:text-3xl md:text-4xl text-neutral-100 uppercase tracking-wide leading-none">
              MY DEVELOPMENT
            </h3>
            <h2 className="font-bebasnNeue text-5xl sm:text-7xl md:text-8xl lg:text-[110px] text-[#E25822] uppercase tracking-normal leading-[0.9] mt-1">
              TOOLKIT
            </h2>
          </div>

          {/* Grid Container */}
          <div className="relative flex justify-center items-center -my-14 sm:-my-6 md:my-0 lg:pr-[7px] overflow-visible">
            {/* Star Glow */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-[320px] md:w-[788px] h-[320px] md:h-[788px] flex items-center justify-center transition-all duration-1000 md:scale-[160%] ${isVisible ? "opacity-90 scale-100" : "opacity-0 scale-90"
                }`}
            >
              <Image
                src="/share/starstar.png"
                alt="Background Star Glow"
                width={788}
                height={788}
                priority
                className="w-full h-full object-cover"
              />
            </div>

            {/* Grid Matrix */}
            <div className="relative z-10 toolkit-grid scale-[0.46] sm:scale-[0.75] md:scale-100 origin-center">
              {[0, 1, 2, 3, 4, 5].map((r) => (
                <React.Fragment key={`grid-row-${r}`}>
                  {[0, 1, 2, 3, 4, 5, 6].map((c) => {
                    const {
                      isContent,
                      item,
                      isShaded,
                      lineDelay,
                      hasRightBorder,
                      hasBottomBorder,
                    } = getGridCellInfo(r, c, toolkitData);

                    return (
                      <div
                        key={`cell-${r}-${c}`}
                        className="relative w-full h-full flex items-center justify-center"
                      >
                        {/* Vertical Line */}
                        {hasRightBorder && (
                          <div
                            className="toolkit-line-v"
                            style={{
                              transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                              transitionDelay: `${lineDelay}ms`,
                            }}
                          />
                        )}

                        {/* Horizontal Line */}
                        {hasBottomBorder && (
                          <div
                            className="toolkit-line-h"
                            style={{
                              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                              transitionDelay: `${lineDelay + 120}ms`,
                            }}
                          />
                        )}

                        {/* Card Reveal */}
                        <div
                          className={`w-full h-full flex items-center justify-center toolkit-icon-smooth ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            } ${isShaded ? "toolkit-shaded-bg" : "bg-transparent"}`}
                          style={{
                            transitionDelay: `${lineDelay}ms`,
                          }}
                        >
                          {isContent && item && (
                            <div className="relative w-12 h-12 flex items-center justify-center">
                              <Image
                                src={item.icon}
                                alt={item.name}
                                width={48}
                                height={48}
                                className="object-contain max-w-full max-h-full"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
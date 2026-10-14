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
      className="relative border-y border-[#1F1F1F] w-full py-[calc((40/375)*100vw)] lg:py-0 h-auto lg:h-[calc((700/1920)*100vw)] overflow-visible flex items-center justify-center [clip-path:inset(0_-100vw_0_-100vw)]"
    >
      <div className="w-full px-[calc((16/375)*100vw)] lg:px-0 overflow-x-visible">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[calc((24/375)*100vw)] lg:gap-0 w-full overflow-x-visible">
          {/* Left Titles */}
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left lg:pl-[calc((60/1920)*100vw)]">
            <h3 className="font-bebasnNeue text-[calc((24/375)*100vw)] lg:text-[calc((36/1920)*100vw)] text-neutral-100 uppercase tracking-wide leading-none">
              MY DEVELOPMENT
            </h3>
            <h2 className="font-bebasnNeue text-[calc((48/375)*100vw)] lg:text-[calc((110/1920)*100vw)] text-[#E25822] uppercase tracking-normal leading-[0.9] mt-[calc((4/375)*100vw)] lg:mt-[calc((4/1920)*100vw)]">
              TOOLKIT
            </h2>
          </div>

          {/* Grid Container */}
          <div className="relative flex justify-center items-center lg:pr-[calc((7/1920)*100vw)] overflow-visible">
            {/* Star Glow */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-[calc((320/375)*100vw)] h-[calc((320/375)*100vw)] lg:w-[calc((1260/1920)*100vw)] lg:h-[calc((1260/1920)*100vw)] flex items-center justify-center transition-all duration-1000 ${
                isVisible ? "opacity-90 scale-100" : "opacity-0 scale-90"
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
            <div className="relative z-10 toolkit-grid w-[calc((330/375)*100vw)] h-[calc((231/375)*100vw)] lg:w-[calc((714/1920)*100vw)] lg:h-[calc((500/1920)*100vw)] origin-center">
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
                          className={`w-full h-full flex items-center justify-center toolkit-icon-smooth ${
                            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                          } ${isShaded ? "toolkit-shaded-bg" : "bg-transparent"}`}
                          style={{
                            transitionDelay: `${lineDelay}ms`,
                          }}
                        >
                          {isContent && item && (
                            <div className="relative w-[calc((24/375)*100vw)] h-[calc((24/375)*100vw)] lg:w-[calc((48/1920)*100vw)] lg:h-[calc((48/1920)*100vw)] flex items-center justify-center">
                              <Image
                                src={item.icon}
                                alt={item.name}
                                width={48}
                                height={48}
                                className="w-full h-full object-contain max-w-full max-h-full"
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
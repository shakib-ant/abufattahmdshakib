"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { statsData, careerObjective } from "../data";
import { CountUpItem } from "../utils";

export default function AboutMeStats() {
  return (
    <div className="lg:col-span-6 flex flex-col justify-between h-auto lg:h-full">
      {/* Top Half */}
      <div className="flex flex-col lg:flex-row border-b border-[#1F1F1F] lg:h-[calc((420/1920)*100vw)] shrink-0">
        {/* Profile Image */}
        <div className="w-full lg:w-[calc((381/1920)*100vw)] h-[calc((360/375)*100vw)] lg:h-[calc((420/1920)*100vw)] shrink-0 relative bg-[#111111] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#1F1F1F] flex items-end justify-center">
          <Image
            src="https://e-commerce-test.sgp1.digitaloceanspaces.com/shakibhero/1791210950491-meheroimage.png"
            alt="Profile Showcase"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Stats Counter */}
        <div className="w-full lg:w-[calc((349/1920)*100vw)] p-[calc((16/375)*100vw)] lg:p-[calc((20/1920)*100vw)] flex flex-col justify-between gap-[calc((14/375)*100vw)] lg:gap-0 bg-[#111111] h-auto lg:h-full shrink-0 relative opacity-100">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center justify-between gap-[calc((12/375)*100vw)] lg:gap-[calc((16/1920)*100vw)]"
            >
              <span className="font-fustat text-[calc((18/375)*100vw)] lg:text-[calc((18/1920)*100vw)] text-[#B3B3B3] font-semibold font-[600] leading-[130%] tracking-[0%] w-full lg:w-[calc((140/1920)*100vw)]">
                {stat.label}
              </span>
              <CountUpItem targetNumber={stat.count} suffix={stat.suffix} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Half */}
      <div className="p-[calc((20/375)*100vw)] lg:p-[calc((30/1920)*100vw)] bg-[#121212] relative overflow-hidden flex-1 flex flex-col justify-start">
        {/* Glow Background directly beneath Plus Grid */}
        <div
          className="absolute -bottom-[calc((280/375)*100vw)] -right-[calc((280/375)*100vw)] lg:-bottom-[calc((400/1920)*100vw)] lg:-right-[calc((400/1920)*100vw)] w-[calc((400/375)*100vw)] h-[calc((400/375)*100vw)] lg:w-[calc((600/1920)*100vw)] lg:h-[calc((600/1920)*100vw)] rounded-full pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, rgba(229, 79, 31, 0.9) 0%, rgba(226, 88, 34, 0.55) 28%, rgba(229, 79, 31, 0.18) 55%, transparent 72%)",
            filter: "blur(82px)",
          }}
        />

        {/* Plus Grid */}
        <div className="absolute -bottom-[calc((40/375)*100vw)] -right-[calc((20/375)*100vw)] lg:-bottom-[calc((40/1920)*100vw)] lg:-right-[calc((30/1920)*100vw)] pointer-events-none z-10 flex flex-col items-end gap-[calc((12/375)*100vw)] lg:gap-[calc((14/1920)*100vw)] select-none opacity-90 origin-bottom-right">
          {/* Row 1 */}
          <div className="flex items-center gap-[calc((16/375)*100vw)] lg:gap-[calc((24/1920)*100vw)]">
            {[0.6, 0.85].map((op, i) => (
              <div
                key={`br-r1-${i}`}
                className="about-plus-pulse-1"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: "2.8s",
                }}
              >
                <Plus className="w-[calc((6/375)*100vw)] lg:w-[calc((8/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((8/1920)*100vw)] text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-[calc((16/375)*100vw)] lg:gap-[calc((24/1920)*100vw)]">
            {[0.25, 0.5, 0.75, 0.95].map((op, i) => (
              <div
                key={`br-r2-${i}`}
                className={`about-plus-pulse-${((i + 1) % 3) + 1}`}
                style={{
                  animationDelay: `${((i + 1) * 0.35) % 2.3}s`,
                  animationDuration: `${3.1 + i * 0.4}s`,
                }}
              >
                <Plus className="w-[calc((6/375)*100vw)] lg:w-[calc((8/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((8/1920)*100vw)] text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex items-center gap-[calc((16/375)*100vw)] lg:gap-[calc((24/1920)*100vw)]">
            {[0.2, 0.4, 0.65, 0.85, 1].map((op, i) => (
              <div
                key={`br-r3-${i}`}
                className={`about-plus-pulse-${((i + 2) % 3) + 1}`}
                style={{
                  animationDelay: `${((i + 2) * 0.45) % 2.5}s`,
                  animationDuration: `${2.6 + i * 0.6}s`,
                }}
              >
                <Plus className="w-[calc((6/375)*100vw)] lg:w-[calc((8/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((8/1920)*100vw)] text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>

          {/* Row 4 */}
          <div className="flex items-center gap-[calc((16/375)*100vw)] lg:gap-[calc((24/1920)*100vw)]">
            {[0.18, 0.35, 0.55, 0.75, 0.9, 1].map((op, i) => (
              <div
                key={`br-r4-${i}`}
                className={`about-plus-pulse-${(i % 3) + 1}`}
                style={{
                  animationDelay: `${((i + 3) * 0.3) % 2.1}s`,
                  animationDuration: `${3.3 + i * 0.3}s`,
                }}
              >
                <Plus className="w-[calc((6/375)*100vw)] lg:w-[calc((8/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((8/1920)*100vw)] text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>

          {/* Row 5 */}
          <div className="flex items-center gap-[calc((16/375)*100vw)] lg:gap-[calc((24/1920)*100vw)]">
            {[0.18, 0.35, 0.55, 0.75, 0.9, 1].map((op, i) => (
              <div
                key={`br-r5-${i}`}
                className={`about-plus-pulse-${((i + 1) % 3) + 1}`}
                style={{
                  animationDelay: `${((i + 4) * 0.4) % 2.7}s`,
                  animationDuration: `${2.9 + i * 0.5}s`,
                }}
              >
                <Plus className="w-[calc((6/375)*100vw)] lg:w-[calc((8/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((8/1920)*100vw)] text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>

          {/* Row 6 */}
          <div className="flex items-center gap-[calc((16/375)*100vw)] lg:gap-[calc((24/1920)*100vw)]">
            {[0.2, 0.4, 0.65, 0.85, 1].map((op, i) => (
              <div
                key={`br-r6-${i}`}
                className={`about-plus-pulse-${((i + 2) % 3) + 1}`}
                style={{
                  animationDelay: `${((i + 5) * 0.35) % 2.6}s`,
                  animationDuration: `${3.0 + i * 0.4}s`,
                }}
              >
                <Plus className="w-[calc((6/375)*100vw)] lg:w-[calc((8/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((8/1920)*100vw)] text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>

          {/* Row 7 */}
          <div className="flex items-center gap-[calc((16/375)*100vw)] lg:gap-[calc((24/1920)*100vw)]">
            {[0.3, 0.6, 0.85].map((op, i) => (
              <div
                key={`br-r7-${i}`}
                className={`about-plus-pulse-${(i % 3) + 1}`}
                style={{
                  animationDelay: `${((i + 6) * 0.3) % 2.4}s`,
                  animationDuration: `${2.7 + i * 0.5}s`,
                }}
              >
                <Plus className="w-[calc((6/375)*100vw)] lg:w-[calc((8/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((8/1920)*100vw)] text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <h4 className="font-fustat text-[calc((18/375)*100vw)] lg:text-[calc((18/1920)*100vw)] font-semibold font-[600] text-[#808080] leading-[100%] tracking-[0%] mb-[calc((12/375)*100vw)] lg:mb-[calc((29/1920)*100vw)] relative z-10">
          {careerObjective.title}
        </h4>
        <p className="font-fustat text-[calc((14/375)*100vw)] lg:text-[calc((18/1920)*100vw)] font-[400] font-[600] text-[#B3B3B3] leading-[160%] w-full lg:w-[calc((664/1920)*100vw)] relative z-10">
          {careerObjective.description}
        </p>
      </div>
    </div>
  );
}

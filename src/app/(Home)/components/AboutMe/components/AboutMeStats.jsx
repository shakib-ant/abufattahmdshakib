"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { statsData, careerObjective } from "../data";
import { CountUpItem } from "../utils";

export default function AboutMeStats() {
  return (
    <div className="lg:col-span-6 flex flex-col justify-between h-full">
      {/* Top Half */}
      <div className="grid grid-cols-1 sm:grid-cols-12 border-b border-[#222222] lg:h-[420px] shrink-0">
        {/* Profile Image */}
        <div className="w-full h-[360px] sm:h-auto sm:col-span-6 lg:w-[381px] lg:h-[420px] relative bg-[#111111] overflow-hidden border-b sm:border-b-0 sm:border-r border-[#222222] flex items-end justify-center">
          <Image
            src="/share/aboutme.svg"
            alt="Profile Showcase"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Stats Counter */}
        <div className="sm:col-span-6 p-4 sm:p-10 flex flex-col justify-around gap-3.5 sm:gap-0 bg-[#111111] h-full">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center justify-between gap-3 sm:gap-4"
            >
              <span className="font-fustat text-xs sm:text-base text-[#A0A0A0] font-medium max-w-[140px] leading-snug">
                {stat.label}
              </span>
              <CountUpItem targetNumber={stat.count} suffix={stat.suffix} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Half */}
      <div className="p-4 sm:p-8 bg-[#121212] relative overflow-hidden flex-1 flex flex-col justify-center min-h-0">
        {/* Radial Glow */}
        <div
          className="absolute pointer-events-none rounded-full z-0 bottom-[-320px] right-[-320px] sm:bottom-[-420px] sm:right-[-420px]"
          style={{
            width: "525px",
            height: "486px",
            backgroundColor: "#E25822",
            filter: "blur(90px)",
            WebkitFilter: "blur(90px)",
            opacity: 0.8,
          }}
        />

        {/* Plus Grid */}
        <div className="absolute bottom-[-18px] right-0 pointer-events-none z-0 flex flex-col items-end gap-3 sm:gap-3.5 select-none opacity-90 scale-75 origin-bottom-right sm:scale-100">
          {/* Row 1 */}
          <div className="flex items-center gap-4 sm:gap-6">
            {[0.85].map((op, i) => (
              <div
                key={`br-r1-${i}`}
                className="about-plus-pulse-1"
                style={{
                  animationDelay: "0s",
                  animationDuration: "2.8s",
                }}
              >
                <Plus className="w-1.5 sm:w-2 h-1.5 sm:h-2 text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-4 sm:gap-6">
            {[0.4, 0.7, 0.95].map((op, i) => (
              <div
                key={`br-r2-${i}`}
                className={`about-plus-pulse-${((i + 1) % 3) + 1}`}
                style={{
                  animationDelay: `${((i + 1) * 0.35) % 2.3}s`,
                  animationDuration: `${3.1 + i * 0.4}s`,
                }}
              >
                <Plus className="w-1.5 sm:w-2 h-1.5 sm:h-2 text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex items-center gap-4 sm:gap-6">
            {[0.35, 0.6, 0.8, 1].map((op, i) => (
              <div
                key={`br-r3-${i}`}
                className={`about-plus-pulse-${((i + 2) % 3) + 1}`}
                style={{
                  animationDelay: `${((i + 2) * 0.45) % 2.5}s`,
                  animationDuration: `${2.6 + i * 0.6}s`,
                }}
              >
                <Plus className="w-1.5 sm:w-2 h-1.5 sm:h-2 text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>

          {/* Row 4 */}
          <div className="flex items-center gap-4 sm:gap-6">
            {[0.3, 0.5, 0.75, 0.9, 1].map((op, i) => (
              <div
                key={`br-r4-${i}`}
                className={`about-plus-pulse-${(i % 3) + 1}`}
                style={{
                  animationDelay: `${((i + 3) * 0.3) % 2.1}s`,
                  animationDuration: `${3.3 + i * 0.3}s`,
                }}
              >
                <Plus className="w-1.5 sm:w-2 h-1.5 sm:h-2 text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>

          {/* Row 5 */}
          <div className="flex items-center gap-4 sm:gap-6">
            {[0.3, 0.55, 0.75, 0.9, 1].map((op, i) => (
              <div
                key={`br-r5-${i}`}
                className={`about-plus-pulse-${((i + 1) % 3) + 1}`}
                style={{
                  animationDelay: `${((i + 4) * 0.4) % 2.7}s`,
                  animationDuration: `${2.9 + i * 0.5}s`,
                }}
              >
                <Plus className="w-1.5 sm:w-2 h-1.5 sm:h-2 text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>

          {/* Row 6 */}
          <div className="flex items-center gap-4 sm:gap-6">
            {[0.35, 0.65, 0.85, 1].map((op, i) => (
              <div
                key={`br-r6-${i}`}
                className={`about-plus-pulse-${((i + 2) % 3) + 1}`}
                style={{
                  animationDelay: `${((i + 5) * 0.35) % 2.6}s`,
                  animationDuration: `${3.0 + i * 0.4}s`,
                }}
              >
                <Plus className="w-1.5 sm:w-2 h-1.5 sm:h-2 text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>

          {/* Row 7 */}
          <div className="flex items-center gap-4 sm:gap-6">
            {[0.5, 0.85].map((op, i) => (
              <div
                key={`br-r7-${i}`}
                className={`about-plus-pulse-${(i % 3) + 1}`}
                style={{
                  animationDelay: `${((i + 6) * 0.3) % 2.4}s`,
                  animationDuration: `${2.7 + i * 0.5}s`,
                }}
              >
                <Plus className="w-1.5 sm:w-2 h-1.5 sm:h-2 text-[#E54F1F]" style={{ opacity: op }} />
              </div>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <h4 className="font-fustat text-base font-semibold text-[#A0A0A0] mb-3 relative z-10">
          {careerObjective.title}
        </h4>
        <p className="font-fustat text-xs sm:text-sm text-[#B0B0B0] leading-relaxed relative z-10 max-w-[90%]">
          {careerObjective.description}
        </p>
      </div>
    </div>
  );
}

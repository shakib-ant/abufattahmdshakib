"use client";

import React from "react";
import { Pencil, Plus } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import CommonButton from "@/components/CommonButton/CommonButton";
import { recentWorksData } from "./data";
import RecentWorkCard from "./components/RecentWorkCard";
import "./RecentWorks.css";

export default function RecentWorks() {
  return (
    <section id="work" className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden z-20 flex flex-col items-center">
      {/* Glow Effect */}
      <div
        className="absolute top-[171px] pointer-events-none rounded-full z-0 left-1/2 -translate-x-1/2"
        style={{
          width: "560px",
          height: "519px",
          backgroundColor: "#E25822",
          filter: "blur(60px)",
          WebkitFilter: "blur(60px)",
          opacity: 1,
        }}
      />

      {/* Plus Grid */}
      <div className="absolute top-[155px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3.5 pointer-events-none z-0 select-none">
        {/* Layer 1 */}
        <div className="flex items-center gap-6 sm:gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`l1-${i}`}
              className="plus-pulse-anim-1"
              style={{
                animationDelay: `${(i * 0.4) % 2.2}s`,
                animationDuration: `${3.2 + (i % 3) * 0.8}s`,
              }}
            >
              <Plus className="w-2 h-2 text-[#E25822]" />
            </div>
          ))}
        </div>

        {/* Layer 2 */}
        <div className="flex items-center gap-6 sm:gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`l2-${i}`}
              className="plus-pulse-anim-2"
              style={{
                animationDelay: `${((i + 2) * 0.35) % 2.5}s`,
                animationDuration: `${2.8 + ((i + 1) % 4) * 0.7}s`,
              }}
            >
              <Plus className="w-2.5 h-2.5 text-[#E25822]" />
            </div>
          ))}
        </div>

        {/* Layer 3 */}
        <div className="flex items-center gap-6 sm:gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`l3-${i}`}
              className="plus-pulse-anim-3"
              style={{
                animationDelay: `${((i + 1) * 0.5) % 2.8}s`,
                animationDuration: `${3.5 + ((i + 3) % 3) * 0.9}s`,
              }}
            >
              <Plus className="w-2 h-2 text-[#E25822]" />
            </div>
          ))}
        </div>
      </div>

      {/* Section Header */}
      <SectionHeader text="RECENT WORKS" className="mb-10 sm:mb-14" />

      {/* Works Grid */}
      <div className="w-full border-t border-[#1F1F1F] px-4 md:px-0 bg-[#0F0F0F] grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
        {recentWorksData?.map((work) => (
          <RecentWorkCard key={work.id} work={work} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12 sm:mt-16 relative z-10">
        <CommonButton text="View All My Works" icon={Pencil} href="#works" />
      </div>
    </section>
  );
}
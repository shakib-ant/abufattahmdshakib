"use client";

import React from "react";
import { Pencil } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import CommonButton from "@/components/CommonButton/CommonButton";
import AboutMeGlowGrid from "../AboutMe/components/AboutMeGlowGrid";
import { recentWorksData } from "./data";
import RecentWorkCard from "./components/RecentWorkCard";
import "./RecentWorks.css";

export default function RecentWorks() {
  return (
    <section id="work" className="relative w-full py-[calc((40/375)*100vw)] lg:py-[calc((100/1920)*100vw)] overflow-hidden z-20 flex flex-col items-center">
      {/* Glow Grid */}
      <div className="translate-y-[calc((-40/375)*100vw)] lg:translate-y-[calc((-20/1920)*100vw)]">
        <AboutMeGlowGrid />
      </div>

      {/* Section Header */}
      <SectionHeader
        text="RECENT WORKS"
        className="mb-[calc((36/375)*100vw)] lg:mb-[calc((80/1920)*100vw)] relative z-20"
      />

      {/* Works Grid */}
      <div className="w-full border-t border-[#1F1F1F] bg-[#0F0F0F] grid grid-cols-1 lg:grid-cols-2 gap-[calc((20/375)*100vw)] lg:gap-[calc((30/1920)*100vw)] py-[calc((20/375)*100vw)] lg:p-[calc((20/1920)*100vw)] relative z-10">
        {recentWorksData?.map((work) => (
          <RecentWorkCard key={work.id} work={work} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-[calc((36/375)*100vw)] lg:mt-[calc((64/1920)*100vw)] relative z-10">
        <CommonButton text="View All My Works" icon={Pencil} href="#works" />
      </div>
    </section>
  );
}
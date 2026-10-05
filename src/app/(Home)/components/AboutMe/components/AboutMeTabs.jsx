"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData, educationData } from "../data";
import { FourPointStar, useAboutTabs } from "../utils";

export default function AboutMeTabs() {
  const { activeTab, setActiveTab } = useAboutTabs("experience");

  const renderList = (data) => (
    <div className="p-[calc((16/375)*100vw)] lg:p-[calc((32/1920)*100vw)] flex flex-col gap-[calc((20/375)*100vw)] lg:gap-[calc((32/1920)*100vw)] w-full">
      {data.map((item) => (
        <div key={item.id} className="flex gap-[calc((12/375)*100vw)] lg:gap-[calc((16/1920)*100vw)] items-start">
          <FourPointStar />

          <div className="flex-1 flex flex-col gap-[calc((6/375)*100vw)] lg:gap-[calc((8/1920)*100vw)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[calc((4/375)*100vw)] lg:gap-[calc((16/1920)*100vw)]">
              <h3 className="font-fustat text-[calc((14/375)*100vw)] lg:text-[calc((20/1920)*100vw)] font-semibold text-[#F0F0F0] leading-snug">
                {item.role}
              </h3>
              <span className="font-fustat text-[calc((11/375)*100vw)] lg:text-[calc((14/1920)*100vw)] text-[#E25822]/90 lg:text-[#808080] shrink-0 font-medium">
                {item.period}
              </span>
            </div>

            <p className="font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((14/1920)*100vw)] text-[#A0A0A0] font-medium">
              {item.company}
            </p>

            <ul className="flex flex-col gap-[calc((8/375)*100vw)] lg:gap-[calc((10/1920)*100vw)] mt-[calc((4/375)*100vw)] lg:mt-[calc((8/1920)*100vw)]">
              {item.points.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-[calc((10/375)*100vw)] lg:gap-[calc((12/1920)*100vw)]">
                  <div className="relative flex items-center justify-center shrink-0 w-[calc((12/375)*100vw)] lg:w-[calc((12/1920)*100vw)] h-[calc((12/375)*100vw)] lg:h-[calc((12/1920)*100vw)] mt-[calc((4/375)*100vw)] lg:mt-[calc((4/1920)*100vw)]">
                    {/* Ripple Waves */}
                    <span
                      className="absolute w-[calc((6/375)*100vw)] lg:w-[calc((6/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((6/1920)*100vw)] rounded-full border border-[#E25822] bg-[#E25822]/15 water-ripple-effect pointer-events-none"
                      style={{ animationDelay: `${(pIdx * 0.5) % 2.0}s` }}
                    />
                    <span
                      className="absolute w-[calc((6/375)*100vw)] lg:w-[calc((6/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((6/1920)*100vw)] rounded-full border border-[#E25822]/40 water-ripple-effect pointer-events-none"
                      style={{ animationDelay: `${((pIdx * 0.5) % 2.0) + 1.4}s` }}
                    />
                    {/* Center Dot */}
                    <span className="relative w-[calc((6/375)*100vw)] lg:w-[calc((6/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((6/1920)*100vw)] rounded-full bg-[#E25822] shadow-[0_0_4px_#E25822] z-10" />
                  </div>
                  <span className="font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((14/1920)*100vw)] text-[#B0B0B0] leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="lg:col-span-6 flex flex-col h-full border-b lg:border-b-0 lg:border-r border-[#1F1F1F] overflow-hidden">
      {/* Tab Header */}
      <div className="grid grid-cols-2 border-b border-[#1F1F1F] bg-[#0E0E0E] shrink-0 relative">
        {/* Experience Tab */}
        <button
          type="button"
          onClick={() => setActiveTab("experience")}
          className="relative px-[calc((8/375)*100vw)] lg:px-[calc((32/1920)*100vw)] py-[calc((14/375)*100vw)] lg:py-[calc((24/1920)*100vw)] font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((16/1920)*100vw)] font-medium text-center outline-none focus:outline-none focus:ring-0 focus-visible:outline-none select-none cursor-pointer border-r border-[#1F1F1F] tracking-tight"
        >
          {activeTab === "experience" && (
            <motion.div
              layoutId="activeAboutTabBg"
              className="absolute inset-0 bg-[#181818] z-0"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          <motion.span
            animate={{ color: activeTab === "experience" ? "#E25822" : "#808080" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative z-10 hover:text-white transition-colors duration-200 inline-block leading-tight"
          >
            Professional Experience
          </motion.span>
        </button>

        {/* Education Tab */}
        <button
          type="button"
          onClick={() => setActiveTab("education")}
          className="relative px-[calc((8/375)*100vw)] lg:px-[calc((32/1920)*100vw)] py-[calc((14/375)*100vw)] lg:py-[calc((24/1920)*100vw)] font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((16/1920)*100vw)] font-medium text-center outline-none focus:outline-none focus:ring-0 focus-visible:outline-none select-none cursor-pointer tracking-tight"
        >
          {activeTab === "education" && (
            <motion.div
              layoutId="activeAboutTabBg"
              className="absolute inset-0 bg-[#181818] z-0"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          <motion.span
            animate={{ color: activeTab === "education" ? "#E25822" : "#808080" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative z-10 hover:text-white transition-colors duration-200 inline-block leading-tight"
          >
            Education Background
          </motion.span>
        </button>
      </div>

      {/* Tab List */}
      <div className="flex-1 bg-[#0F0F0F] lg:overflow-y-auto custom-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden relative overflow-hidden flex flex-col">
        <div className="grid grid-cols-1 grid-rows-1 w-full flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="col-start-1 row-start-1 w-full"
            >
              {renderList(activeTab === "experience" ? experienceData : educationData)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

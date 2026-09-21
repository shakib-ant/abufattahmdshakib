"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData, educationData } from "../data";
import { FourPointStar, useAboutTabs, tabContentVariants } from "../utils";

export default function AboutMeTabs() {
  const { activeTab, setActiveTab } = useAboutTabs("experience");

  const renderList = (data) => (
    <div className="p-4 sm:p-8 flex flex-col gap-5 sm:gap-8 w-full">
      {data.map((item) => (
        <div key={item.id} className="flex gap-3 sm:gap-4 items-start">
          <FourPointStar />

          <div className="flex-1 flex flex-col gap-1.5 sm:gap-2 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
              <h3 className="font-fustat text-sm sm:text-xl font-semibold text-[#F0F0F0] leading-snug">
                {item.role}
              </h3>
              <span className="font-fustat text-[11px] sm:text-sm text-[#E25822]/90 sm:text-[#808080] shrink-0 font-medium">
                {item.period}
              </span>
            </div>

            <p className="font-fustat text-xs sm:text-sm text-[#A0A0A0] font-medium">
              {item.company}
            </p>

            <ul className="flex flex-col gap-2 mt-1 sm:mt-2">
              {item.points.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="relative flex items-center justify-center shrink-0 w-3 h-3 mt-1">
                    {/* Ripple Waves */}
                    <span
                      className="absolute w-1.5 h-1.5 rounded-full border border-[#E25822] bg-[#E25822]/15 water-ripple-effect pointer-events-none"
                      style={{ animationDelay: `${(pIdx * 0.5) % 2.0}s` }}
                    />
                    <span
                      className="absolute w-1.5 h-1.5 rounded-full border border-[#E25822]/40 water-ripple-effect pointer-events-none"
                      style={{ animationDelay: `${((pIdx * 0.5) % 2.0) + 1.4}s` }}
                    />
                    {/* Center Dot */}
                    <span className="relative w-1.5 h-1.5 rounded-full bg-[#E25822] shadow-[0_0_4px_#E25822] z-10" />
                  </div>
                  <span className="font-fustat text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
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
    <div className="lg:col-span-6 flex flex-col h-full border-b lg:border-b-0 lg:border-r border-[#222222] overflow-hidden">
      {/* Tab Header */}
      <div className="grid grid-cols-2 border-b border-[#222222] bg-[#0E0E0E] shrink-0 relative">
        {/* Experience Tab */}
        <button
          type="button"
          onClick={() => setActiveTab("experience")}
          className="relative px-2 sm:px-8 py-3.5 sm:py-6 font-fustat text-xs sm:text-base font-medium text-center outline-none focus:outline-none focus:ring-0 focus-visible:outline-none select-none cursor-pointer border-r border-[#222222] tracking-tight"
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
          className="relative px-2 sm:px-8 py-3.5 sm:py-6 font-fustat text-xs sm:text-base font-medium text-center outline-none focus:outline-none focus:ring-0 focus-visible:outline-none select-none cursor-pointer tracking-tight"
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
      <div className="flex-1 bg-[#0F0F0F] min-h-[460px] sm:min-h-[480px] lg:min-h-0 lg:overflow-y-auto custom-scrollbar relative overflow-hidden flex flex-col">
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

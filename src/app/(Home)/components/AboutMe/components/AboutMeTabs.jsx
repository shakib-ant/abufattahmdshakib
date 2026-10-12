"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData, educationData } from "../data";
import { FourPointStar, useAboutTabs } from "../utils";

export default function AboutMeTabs() {
  const { activeTab, setActiveTab } = useAboutTabs("experience");

  const renderList = (data) => (
    <div className="px-[calc((10/375)*100vw)] lg:px-[calc((30/1920)*100vw)] pt-[calc((25/375)*100vw)] lg:pt-[calc((40/1920)*100vw)] pb-[calc((36/375)*100vw)] lg:pb-[calc((20/1920)*100vw)] flex flex-col gap-[calc((24/375)*100vw)] lg:gap-[calc((44/1920)*100vw)] w-full">
      {data.map((item) => (
        <div key={item.id} className="flex gap-[calc((12/375)*100vw)] lg:gap-[calc((32/1920)*100vw)] items-start">
          <FourPointStar />

          <div className="flex-1 flex flex-col gap-[calc((6/375)*100vw)] lg:gap-[calc((8/1920)*100vw)]">
            <div className="flex flex-row justify-between items-start gap-[calc((4/375)*100vw)] lg:gap-[calc((16/1920)*100vw)] mb-[calc((2/375)*100vw)] lg:mb-[calc((6/1920)*100vw)]">
              <h3 className="font-fustat text-[calc((16/375)*100vw)] lg:text-[calc((24/1920)*100vw)] font-[500] text-[#D9D9D9] leading-[130%]">
                {item.role}
              </h3>
              <span className="font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((18/1920)*100vw)] text-[#999999] shrink-0 font-[400] leading-[130%]">
                {item.period}
              </span>
            </div>

            <p className="font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((18/1920)*100vw)] text-[#999999] font-[500] lg:font-[400] leading-[130%]">
              {item.company}
            </p>

            <ul className="flex flex-col gap-[calc((6/375)*100vw)] lg:gap-[calc((8/1920)*100vw)] mt-[calc((10/375)*100vw)] lg:mt-[calc((16/1920)*100vw)]">
              {item.points.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-[calc((8/375)*100vw)] lg:gap-[calc((12/1920)*100vw)]">
                  <div className="relative flex items-center justify-center shrink-0 w-[calc((12/375)*100vw)] lg:w-[calc((16/1920)*100vw)] h-[calc((12/375)*100vw)] lg:h-[calc((16/1920)*100vw)] mt-[calc((4/375)*100vw)] lg:mt-[calc((6/1920)*100vw)]">
                    {/* Ripple Waves */}
                    <span
                      className="absolute w-[calc((6/375)*100vw)] lg:w-[calc((8/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((8/1920)*100vw)] rounded-full border border-[#A33816] bg-[#A33816]/15 water-ripple-effect pointer-events-none"
                      style={{ animationDelay: `${(pIdx * 0.5) % 2.0}s` }}
                    />
                    <span
                      className="absolute w-[calc((6/375)*100vw)] lg:w-[calc((8/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((8/1920)*100vw)] rounded-full border border-[#A33816]/40 water-ripple-effect pointer-events-none"
                      style={{ animationDelay: `${((pIdx * 0.5) % 2.0) + 1.4}s` }}
                    />
                    {/* Center Dot */}
                    <span className="relative w-[calc((6/375)*100vw)] lg:w-[calc((8/1920)*100vw)] h-[calc((6/375)*100vw)] lg:h-[calc((8/1920)*100vw)] rounded-full bg-[#A33816] shadow-[0_0_4px_#A33816] z-10" />
                  </div>
                  <span className="font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((18/1920)*100vw)] text-[#808080] font-[600] lg:font-[500] leading-[150%] lg:max-w-[calc((557/1920)*100vw)]">
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
      <div className="flex border-b border-[#1F1F1F] bg-[#0E0E0E] shrink-0 relative h-[calc((56/375)*100vw)] lg:h-[calc((80/1920)*100vw)]">
        {/* Experience Tab */}
        <button
          type="button"
          onClick={() => setActiveTab("experience")}
          className={`relative flex items-center justify-center flex-1 w-[calc((167/375)*100vw)] lg:w-[calc((354.5/1920)*100vw)] h-[calc((56/375)*100vw)] lg:h-[calc((80/1920)*100vw)] font-fustat text-[calc((14/375)*100vw)] lg:text-[calc((20/1920)*100vw)] leading-[130%] tracking-[0%] text-center outline-none focus:outline-none focus:ring-0 focus-visible:outline-none select-none cursor-pointer border-r border-[#1F1F1F] opacity-100 ${
            activeTab === "experience" ? "font-semibold" : "font-medium"
          }`}
        >
          {activeTab === "experience" && (
            <motion.div
              layoutId="activeAboutTabBg"
              className="absolute inset-0 bg-[#1A1A1A] border-b border-[#1F1F1F] z-0"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          <motion.span
            animate={{ color: activeTab === "experience" ? "#E54F1F" : "#A3A3A3" }}
            whileHover={activeTab !== "experience" ? { color: "#FFFFFF" } : {}}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`relative z-10 inline-block leading-[130%] text-center w-[calc((78/375)*100vw)] lg:w-full ${
              activeTab === "experience" ? "font-semibold" : "font-medium"
            }`}
          >
            Professional Experience
          </motion.span>
        </button>

        {/* Education Tab */}
        <button
          type="button"
          onClick={() => setActiveTab("education")}
          className={`relative flex items-center justify-center flex-1 w-[calc((167/375)*100vw)] lg:w-[calc((354.5/1920)*100vw)] h-[calc((56/375)*100vw)] lg:h-[calc((80/1920)*100vw)] font-fustat text-[calc((14/375)*100vw)] lg:text-[calc((20/1920)*100vw)] leading-[130%] tracking-[0%] text-center outline-none focus:outline-none focus:ring-0 focus-visible:outline-none select-none cursor-pointer opacity-100 ${
            activeTab === "education" ? "font-semibold" : "font-medium"
          }`}
        >
          {activeTab === "education" && (
            <motion.div
              layoutId="activeAboutTabBg"
              className="absolute inset-0 bg-[#1A1A1A] border-b border-[#1F1F1F] z-0"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          <motion.span
            animate={{ color: activeTab === "education" ? "#E54F1F" : "#A3A3A3" }}
            whileHover={activeTab !== "education" ? { color: "#FFFFFF" } : {}}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`relative z-10 inline-block leading-[130%] text-center w-[calc((78/375)*100vw)] lg:w-full ${
              activeTab === "education" ? "font-semibold" : "font-medium"
            }`}
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

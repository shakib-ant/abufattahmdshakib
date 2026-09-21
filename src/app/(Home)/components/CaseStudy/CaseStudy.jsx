"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CaseStudyCard from "./components/CaseStudyCard";
import { col1Projects, col2Projects, col3Projects } from "./data";
import "./CaseStudy.css";

// Loop helper
const createLoopArray = (arr, minLength = 8) => {
  if (!arr || arr.length === 0) return [];
  let base = [...arr];
  while (base.length < minLength) {
    base = [...base, ...arr];
  }
  return [...base, ...base];
};

const doubledCol1 = createLoopArray(col1Projects);
const doubledCol2 = createLoopArray(col2Projects);
const doubledCol3 = createLoopArray(col3Projects);

export default function CaseStudy() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      className={`relative w-screen left-1/2 -translate-x-1/2 h-[570px] sm:h-[640px] lg:h-[calc((800/1920)*100vw)] lg:max-h-[800px] z-20 my-[60px] sm:mb-[80px] bg-[#0F0F0F] overflow-hidden ${
        selectedProject ? "is-paused" : ""
      }`}
      id="casestudy"
    >
      {/* Background Image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] lg:w-[2015px] 3xl:w-[2250px] h-[570px] sm:h-[640px] lg:h-[655px] 3xl:h-[800px] pointer-events-none z-0">
        <Image
          src="/share/casestadyBgIMage.png"
          alt="Case Study Background"
          fill
          priority
          className="object-cover object-center max-w-none"
        />
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden relative w-full h-[570px] sm:h-[640px] z-20 overflow-hidden flex flex-col justify-center py-2">
        {/* Mobile Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            background:
              "linear-gradient(180deg, #0F0F0F 3.56%, rgba(15, 15, 15, 0.9) 11.28%, rgba(15, 15, 15, 0) 54.38%, rgba(15, 15, 15, 0.9) 92.28%, #0F0F0F 100%)",
          }}
        />

        <div className="w-full flex flex-col gap-[20px] justify-center relative z-20 my-auto casestudy-grid-mask overflow-hidden">
          {/* Row 1 */}
          <div className="overflow-hidden w-full relative">
            <div className="animate-marquee-left flex flex-row gap-[20px] w-max py-1">
              {doubledCol1.map((project, idx) => (
                <div
                  key={`m-r1-${project.id}-${idx}`}
                  className="w-[250px] sm:w-[300px] shrink-0"
                >
                  <CaseStudyCard project={project} onClick={handleCardClick} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden w-full relative">
            <div className="animate-marquee-right flex flex-row gap-[20px] w-max py-1">
              {doubledCol2.map((project, idx) => (
                <div
                  key={`m-r2-${project.id}-${idx}`}
                  className="w-[250px] sm:w-[300px] shrink-0"
                >
                  <CaseStudyCard project={project} onClick={handleCardClick} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 */}
          <div className="overflow-hidden w-full relative">
            <div className="animate-marquee-left flex flex-row gap-[20px] w-max py-1">
              {doubledCol3.map((project, idx) => (
                <div
                  key={`m-r3-${project.id}-${idx}`}
                  className="w-[250px] sm:w-[300px] shrink-0"
                >
                  <CaseStudyCard project={project} onClick={handleCardClick} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative h-full w-full flex-col items-center justify-center overflow-hidden ">
        {/* Desktop Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            background:
              "linear-gradient(180deg, #0F0F0F 3.56%, rgba(15, 15, 15, 0.9) 11.28%, rgba(15, 15, 15, 0) 54.38%, rgba(15, 15, 15, 0.9) 92.28%, #0F0F0F 100%)",
          }}
        />

        {/* Grid Container */}
        <div className="w-full px-[19px] flex-1 h-full overflow-hidden relative z-10 casestudy-grid-mask">
          <div className="grid grid-cols-3 gap-6 sm:gap-8 h-full w-full">
            {/* Column 1 */}
            <div className="overflow-hidden h-full relative">
              <div className="animate-marquee-down flex flex-col gap-6 sm:gap-8">
                {doubledCol1.map((project, idx) => (
                  <CaseStudyCard
                    key={`d-c1-${project.id}-${idx}`}
                    project={project}
                    onClick={handleCardClick}
                  />
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="overflow-hidden h-full relative">
              <div className="animate-marquee-up flex flex-col gap-6 sm:gap-8">
                {doubledCol2.map((project, idx) => (
                  <CaseStudyCard
                    key={`d-c2-${project.id}-${idx}`}
                    project={project}
                    onClick={handleCardClick}
                  />
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="overflow-hidden h-full relative">
              <div className="animate-marquee-down flex flex-col gap-6 sm:gap-8">
                {doubledCol3.map((project, idx) => (
                  <CaseStudyCard
                    key={`d-c3-${project.id}-${idx}`}
                    project={project}
                    onClick={handleCardClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Overlay */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0.88, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.88, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="relative w-full max-w-[440px] sm:max-w-[560px] aspect-[607/384] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-[0_0_35px_rgba(226,88,34,0.4)] border border-[#E25822]/40 cursor-pointer"
                >
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title || "Project Preview"}
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}

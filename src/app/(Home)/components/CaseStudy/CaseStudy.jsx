"use client";

import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CaseStudyCard from "./components/CaseStudyCard";
import { col1Projects, col2Projects, col3Projects } from "./data";
import {
  createLoopArray,
  useCaseStudyModal,
  modalOverlayVariants,
  modalContentVariants,
} from "./utils";
import "./CaseStudy.css";

const doubledCol1 = createLoopArray(col1Projects);
const doubledCol2 = createLoopArray(col2Projects);
const doubledCol3 = createLoopArray(col3Projects);

export default function CaseStudy() {
  const {
    selectedProject,
    mounted,
    handleCardClick,
    handleCloseModal,
  } = useCaseStudyModal();

  return (
    <section
      className={`relative w-screen left-1/2 -translate-x-1/2 h-[calc((741/375)*100vw)] lg:h-[calc((800/1920)*100vw)] z-20 lg:my-[calc((80/1920)*100vw)] bg-[#0F0F0F] overflow-hidden ${
        selectedProject ? "is-paused" : ""
      }`}
      id="casestudy"
    >
      {/* Background Image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc((2200/375)*100vw)] lg:w-[calc((2250/1920)*100vw)] h-[calc((741/375)*100vw)] lg:h-[calc((655/1920)*100vw)] pointer-events-none z-0">
        <Image
          src="/share/casestadyBgIMage.png"
          alt="Case Study Background"
          fill
          priority
          className="object-cover object-center max-w-none"
        />
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden relative w-full h-[calc((741/375)*100vw)] z-20 overflow-hidden flex flex-col justify-between">
        {/* Top Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            background:
              "linear-gradient(180deg, #0F0F0F 0%, rgba(15, 15, 15, 0.3) 2%, transparent 8%, transparent 92%, rgba(15, 15, 15, 0.3) 98%, #0F0F0F 100%)",
          }}
        />

        <div className="w-full flex flex-col gap-[calc((16/375)*100vw)] justify-between relative z-20 h-full overflow-hidden">
          {/* Row 1 */}
          <div className="overflow-hidden w-full relative">
            <div className="animate-marquee-left flex flex-row gap-[calc((16/375)*100vw)] w-max">
              {doubledCol1.map((project, idx) => (
                <div
                  key={`m-r1-${project.id}-${idx}`}
                  className="w-[calc((358/375)*100vw)] shrink-0"
                >
                  <CaseStudyCard project={project} onClick={handleCardClick} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden w-full relative">
            <div className="animate-marquee-right flex flex-row gap-[calc((16/375)*100vw)] w-max">
              {doubledCol2.map((project, idx) => (
                <div
                  key={`m-r2-${project.id}-${idx}`}
                  className="w-[calc((358/375)*100vw)] shrink-0"
                >
                  <CaseStudyCard project={project} onClick={handleCardClick} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 */}
          <div className="overflow-hidden w-full relative">
            <div className="animate-marquee-left flex flex-row gap-[calc((16/375)*100vw)] w-max">
              {doubledCol3.map((project, idx) => (
                <div
                  key={`m-r3-${project.id}-${idx}`}
                  className="w-[calc((358/375)*100vw)] shrink-0"
                >
                  <CaseStudyCard project={project} onClick={handleCardClick} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative h-full w-full flex-col items-center justify-center overflow-hidden">
        {/* Top Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            background:
              "linear-gradient(180deg, #0F0F0F 3.56%, rgba(15, 15, 15, 0.9) 11.28%, rgba(15, 15, 15, 0) 54.38%, rgba(15, 15, 15, 0.9) 92.28%, #0F0F0F 100%)",
          }}
        />

        {/* Grid Container */}
        <div className="w-full px-[calc((19/1920)*100vw)] flex-1 h-full overflow-hidden relative z-10 casestudy-grid-mask">
          <div className="grid grid-cols-3 gap-[calc((30.5/1920)*100vw)] h-full w-full">
            {/* Column 1 */}
            <div className="overflow-hidden h-full relative">
              <div className="animate-marquee-down flex flex-col gap-[calc((30.5/1920)*100vw)]">
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
              <div className="animate-marquee-up flex flex-col gap-[calc((30.5/1920)*100vw)]">
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
              <div className="animate-marquee-down flex flex-col gap-[calc((30.5/1920)*100vw)]">
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

      {/* Card Modal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                variants={modalOverlayVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={handleCloseModal}
                className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-md flex items-center justify-center p-[calc((16/375)*100vw)] lg:p-[calc((32/1920)*100vw)] cursor-pointer"
              >
                <motion.div
                  variants={modalContentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative w-[calc((358/375)*100vw)] lg:w-[calc((607/1920)*100vw)] h-[calc((226/375)*100vw)] lg:h-[calc((384/1920)*100vw)] rounded-[calc((6.27/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)] overflow-hidden border border-[#E25822]/40 cursor-pointer"
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

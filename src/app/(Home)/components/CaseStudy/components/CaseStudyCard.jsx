"use client";

import React from "react";
import Image from "next/image";

export default function CaseStudyCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick?.(project)}
      className="group relative w-full mx-auto bg-[#141414] border border-[#262626] hover:border-[#E25822]/70 rounded-[12px] sm:rounded-[14px] overflow-hidden cursor-pointer transition-all duration-300"
    >
      <div className="relative w-full aspect-[607/384] max-h-[233px] lg:max-h-[384px] bg-[#181818] overflow-hidden rounded-[12px] sm:rounded-[14px]">
        <Image
          src={project.image}
          alt={project.title || "Case Study"}
          fill
          priority
          sizes="(max-width: 768px) 368px, 607px"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
    </div>
  );
}

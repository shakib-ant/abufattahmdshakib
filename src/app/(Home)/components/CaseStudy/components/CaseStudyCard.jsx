"use client";

import React from "react";
import Image from "next/image";

export default function CaseStudyCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick?.(project)}
      className="group relative w-[calc((358/375)*100vw)] lg:w-[calc((607/1920)*100vw)] h-[calc((226/375)*100vw)] lg:h-[calc((384/1920)*100vw)] mx-auto bg-[#141414] border border-[#262626] hover:border-[#E25822]/70 rounded-[calc((6.27/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)] overflow-hidden cursor-pointer transition-all duration-300"
    >
      <div className="relative w-full h-full bg-[#181818] overflow-hidden rounded-[calc((6.27/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)]">
        <Image
          src={project.image}
          alt={project.title || "Case Study"}
          fill
          priority
          sizes="(max-width: 1024px) 358px, 607px"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
    </div>
  );
}

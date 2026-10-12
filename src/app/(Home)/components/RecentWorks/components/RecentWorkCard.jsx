"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useImageFallback } from "../utils";

export default function RecentWorkCard({ work }) {
  const { imgError, handleImageError } = useImageFallback();

  return (
    <div className="group relative flex flex-col gap-[calc((12/375)*100vw)] lg:gap-[calc((16/1920)*100vw)] p-[calc((12/375)*100vw)] lg:p-[calc((16/1920)*100vw)] transition-all duration-300">
      {/* Image Thumbnail */}
      <div className="relative w-full aspect-[16/9.5] rounded-[calc((10/375)*100vw)] lg:rounded-[calc((14/1920)*100vw)] overflow-hidden bg-[#181818] flex items-center justify-center">
        {!imgError ? (
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-103"
            onError={handleImageError}
          />
        ) : (
          /* Image Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-[calc((16/375)*100vw)] lg:p-[calc((24/1920)*100vw)] text-center border border-[#262626] rounded-[calc((10/375)*100vw)] lg:rounded-[calc((14/1920)*100vw)]">
            <div className="w-[calc((36/375)*100vw)] lg:w-[calc((48/1920)*100vw)] h-[calc((36/375)*100vw)] lg:h-[calc((48/1920)*100vw)] rounded-full bg-[#E25822]/10 border border-[#E25822]/30 flex items-center justify-center mb-[calc((6/375)*100vw)] lg:mb-[calc((8/1920)*100vw)]">
              <span className="text-[#E25822] font-semibold text-[calc((14/375)*100vw)] lg:text-[calc((18/1920)*100vw)]">
                {work.title.charAt(0)}
              </span>
            </div>
            <p className="font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((14/1920)*100vw)] text-neutral-400 font-medium">
              {work.title}
            </p>
          </div>
        )}
      </div>

      {/* Card Details */}
      <div className="flex flex-col gap-[calc((10/375)*100vw)] lg:gap-[calc((12/1920)*100vw)] px-[calc((4/375)*100vw)] lg:px-[calc((6/1920)*100vw)]">
        {/* Title Link */}
        <div className="flex items-center justify-between gap-[calc((8/375)*100vw)] lg:gap-[calc((10/1920)*100vw)]">
          <h3 className="font-fustat text-[calc((16/375)*100vw)] lg:text-[calc((24/1920)*100vw)] font-medium text-[#E6E6E6] group-hover:text-white transition-colors leading-[130%]">
            {work.title}
          </h3>

          <Link
            href={work.link || "#"}
            className="p-[calc((4/375)*100vw)] lg:p-[calc((6/1920)*100vw)] rounded-full text-neutral-400 group-hover:text-white transition-colors duration-300 shrink-0"
            aria-label={`View project: ${work.title}`}
          >
            <ArrowUpRight className="w-[calc((18/375)*100vw)] lg:w-[calc((24/1920)*100vw)] h-[calc((18/375)*100vw)] lg:h-[calc((24/1920)*100vw)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Built Tags */}
        <div className="flex items-center gap-[calc((8/375)*100vw)] lg:gap-[calc((10/1920)*100vw)] flex-wrap">
          <span className="font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((16/1920)*100vw)] text-[#808080] font-normal">
            Built with:
          </span>
          <div className="flex items-center gap-[calc((6/375)*100vw)] lg:gap-[calc((8/1920)*100vw)] flex-wrap">
            {work.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="font-fustat text-[calc((11/375)*100vw)] lg:text-[calc((14/1920)*100vw)] text-[#D1D1D1] px-[calc((10/375)*100vw)] lg:px-[calc((14/1920)*100vw)] py-[calc((3/375)*100vw)] lg:py-[calc((4/1920)*100vw)] rounded-full border border-[#2A2A2A] bg-[#161616] tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useImageFallback } from "../utils";

export default function RecentWorkCard({ work }) {
  const { imgError, handleImageError } = useImageFallback();

  return (
    <div className="group relative flex flex-col gap-4 p-3.5 sm:p-4 transition-all duration-300">
      {/* Image Thumbnail */}
      <div className="relative w-full aspect-[16/9.5] rounded-[14px] overflow-hidden bg-[#181818] flex items-center justify-center">
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
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-6 text-center border border-[#262626] rounded-[14px]">
            <div className="w-12 h-12 rounded-full bg-[#E25822]/10 border border-[#E25822]/30 flex items-center justify-center mb-2">
              <span className="text-[#E25822] font-semibold text-lg">
                {work.title.charAt(0)}
              </span>
            </div>
            <p className="font-fustat text-sm text-neutral-400 font-medium">{work.title}</p>
          </div>
        )}
      </div>

      {/* Card Details */}
      <div className="flex flex-col gap-3 px-1">
        {/* Title Link */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-fustat text-lg sm:text-xl font-medium text-[#E6E6E6] group-hover:text-white transition-colors leading-snug">
            {work.title}
          </h3>

          <Link
            href={work.link || "#"}
            className="p-1.5 rounded-full text-neutral-400 group-hover:text-white transition-colors duration-300 shrink-0"
            aria-label={`View project: ${work.title}`}
          >
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Built Tags */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="font-fustat text-sm text-[#808080] font-normal">
            Built with:
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {work.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="font-fustat text-xs text-[#D1D1D1] px-3.5 py-1 rounded-full border border-[#2A2A2A] bg-[#161616] tracking-wide"
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

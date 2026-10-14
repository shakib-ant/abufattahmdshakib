"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useImageFallback } from "../utils";

export default function RecentWorkCard({ work }) {
  const { imgError, handleImageError } = useImageFallback();

  return (
    <div className="group relative flex flex-col gap-[calc((20/375)*100vw)] lg:gap-[calc((20/1920)*100vw)] p-0 w-[calc((315/375)*100vw)] h-[calc((256/375)*100vw)] lg:w-[calc((684/1920)*100vw)] lg:h-[calc((495/1920)*100vw)] mx-auto lg:mx-0 transition-all duration-300">
      {/* Image Thumbnail */}
      <div className="relative w-[calc((315/375)*100vw)] h-[calc((180/375)*100vw)] lg:w-[calc((684/1920)*100vw)] lg:h-[calc((400/1920)*100vw)] aspect-auto rounded-[calc((12/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)] overflow-hidden bg-[#181818] flex items-center justify-center">
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
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-[calc((16/375)*100vw)] lg:p-[calc((24/1920)*100vw)] text-center border border-[#262626] rounded-[calc((12/375)*100vw)] lg:rounded-[calc((12/1920)*100vw)]">
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
      <div className="w-full mx-auto lg:w-[calc((620/1920)*100vw)] flex flex-col gap-[calc((15/375)*100vw)] lg:gap-[calc((20/1920)*100vw)] px-0">
        {/* Title Link */}
        <div className="flex items-center justify-between gap-[calc((8/375)*100vw)] lg:gap-[calc((10/1920)*100vw)]">
          <h3 className="font-fustat text-[calc((18/375)*100vw)] lg:text-[calc((20/1920)*100vw)] font-semibold text-[#D9D9D9] group-hover:text-white transition-colors leading-[100%] tracking-[0%]">
            {work.title}
          </h3>

          <Link
            href={work.link || "#"}
            className="relative overflow-hidden w-[calc((18/375)*100vw)] lg:w-[calc((24/1920)*100vw)] h-[calc((18/375)*100vw)] lg:h-[calc((24/1920)*100vw)] shrink-0 flex items-center justify-center p-0"
            aria-label={`View project: ${work.title}`}
          >
            <ArrowUpRight className="w-full h-full text-neutral-400 transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:-translate-y-full shrink-0" />
            <ArrowUpRight className="w-full h-full text-[#D0481C] absolute inset-0 transition-transform duration-300 ease-in-out -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 shrink-0" />
          </Link>
        </div>

        {/* Built Tags */}
        <div className="flex items-center gap-[calc((8/375)*100vw)] lg:gap-[calc((8/1920)*100vw)] flex-wrap">
          <span className="font-fustat text-[calc((12/375)*100vw)] lg:text-[calc((16/1920)*100vw)] text-[#B3B3B3] font-medium leading-[100%] tracking-[0%]">
            Built with:
          </span>
          <div className="flex items-center gap-[calc((10/375)*100vw)] lg:gap-[calc((10/1920)*100vw)] flex-wrap">
            {work.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="font-fustat text-[calc((11/375)*100vw)] lg:text-[calc((14/1920)*100vw)] text-[#D1D1D1] px-[calc((8/375)*100vw)] lg:px-[calc((12/1920)*100vw)] py-[calc((6/375)*100vw)] lg:py-[calc((6/1920)*100vw)] rounded-[calc((20/375)*100vw)] lg:rounded-[calc((20/1920)*100vw)] border border-[#A3A3A3] bg-[#161616]"
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

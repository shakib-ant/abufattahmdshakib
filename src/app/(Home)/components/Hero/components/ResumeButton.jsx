"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Clipboard Icon
const ResumeDocIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[24px] h-[24px] text-black shrink-0"
    {...props}
  >
    <rect x="4" y="4" width="16" height="17" rx="3" />
    <path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1Z" />
    <path d="M8 11h8" />
    <path d="M8 15h5" />
  </svg>
);

// Resume Button
export default function ResumeButton({ className = "" }) {
  return (
    <Link
      href="/share/Abu-Fattah-Md-Shaki-CV.pdf"
      download="Abu-Fattah-Md-Shakib-CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden inline-flex items-center justify-center bg-white w-[204px] h-[56px] rounded-full p-[16px] active:scale-95 cursor-pointer select-none shrink-0 ${className}`}
    >
      {/* Circle Sweep */}
      <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 translate-y-1/2 w-[280px] h-[280px] bg-[#E25822]/90 rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 ease-in-out z-0 pointer-events-none origin-center" />

      {/* Sliding Content */}
      <div className="relative z-10 flex items-center gap-[8px] transform translate-x-[16px] group-hover:-translate-x-[16px] transition-transform duration-700 ease-in-out">
        {/* Left Slot */}
        <span className="w-[24px] h-[24px] flex items-center justify-center shrink-0 overflow-hidden">
          <span className="transition-all duration-700 ease-in-out transform group-hover:-translate-x-4 group-hover:opacity-0 flex items-center justify-center">
            <ResumeDocIcon />
          </span>
        </span>

        {/* Button Text */}
        <span className="font-fustat font-semibold text-[18px] leading-none whitespace-nowrap text-black group-hover:text-white transition-colors duration-700 ease-in-out">
          View My Resume
        </span>

        {/* Right Slot */}
        <span className="w-[24px] h-[24px] flex items-center justify-center shrink-0 overflow-hidden">
          <span className="transition-all duration-700 ease-in-out transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 flex items-center justify-center">
            <ChevronRight className="w-[24px] h-[24px] text-white stroke-[2.2]" />
          </span>
        </span>
      </div>
    </Link>
  );
}

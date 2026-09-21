import React from "react";
import "./Container.css";

export default function Container({
  children,
  className = "",
  innerClassName = "",
  hasSideBorders = true,
  hasBorderBeam = true,
}) {
  return (
    <div className="w-full px-4">
      <div
        className={`relative max-w-[1439px] mx-auto w-full ${hasSideBorders ? "border-x border-[#1F1F1F]" : ""
          } ${className}`}
      >
        {/* Border Beams */}
        {hasSideBorders && hasBorderBeam && (
          <>
            {/* Left Beam */}
            <div className="absolute left-[-1px] top-0 bottom-0 w-[1px] overflow-hidden pointer-events-none z-10">
              <div className="animate-border-beam absolute left-0 w-full h-[120px] bg-gradient-to-b from-transparent via-[#E25822] to-transparent shadow-[0_0_10px_#E25822]" />
            </div>

            {/* Right Beam */}
            <div className="absolute right-[-1px] top-0 bottom-0 w-[1px] overflow-hidden pointer-events-none z-10">
              <div className="animate-border-beam absolute right-0 w-full h-[120px] bg-gradient-to-b from-transparent via-[#E25822] to-transparent shadow-[0_0_10px_#E25822]" />
            </div>
          </>
        )}

        <div className={`w-full mx-auto ${innerClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

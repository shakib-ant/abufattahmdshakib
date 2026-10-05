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
    <div className="w-full px-[calc((16/375)*100vw)] lg:px-0">
      <div
        className={`relative w-full lg:w-[calc((1439/1920)*100vw)] mx-auto ${hasSideBorders ? "border-x border-[#1F1F1F]" : ""
          } ${className}`}
      >
        {/* Border Beams */}
        {hasSideBorders && hasBorderBeam && (
          <>
            {/* Left Beam */}
            <div className="absolute left-[-1px] top-0 bottom-0 w-[1px] overflow-hidden pointer-events-none z-10">
              <div className="animate-border-beam absolute left-0 w-full h-[calc((120/375)*100vw)] lg:h-[calc((120/1920)*100vw)] bg-gradient-to-b from-transparent via-[#E25822] to-transparent" />
            </div>

            {/* Right Beam */}
            <div className="absolute right-[-1px] top-0 bottom-0 w-[1px] overflow-hidden pointer-events-none z-10">
              <div className="animate-border-beam absolute right-0 w-full h-[calc((120/375)*100vw)] lg:h-[calc((120/1920)*100vw)] bg-gradient-to-b from-transparent via-[#E25822] to-transparent" />
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

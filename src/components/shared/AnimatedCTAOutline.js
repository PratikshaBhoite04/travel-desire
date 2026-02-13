import { useState } from "react";
import hoverPng from "../../assets/images/bird - Copy.png";

function AnimatedCTAOutline({
  className = "",
  onClick,
  leftIcon = null,
}) {
  const [animating, setAnimating] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => {
        if (!hovered) setAnimating(true);
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
        setAnimating(true);
      }}
      className={`
        relative overflow-hidden
        rounded-full
        font-manrope text-[16px] font-[400]
        px-8 py-3
        transition-transform duration-[600ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        border
        ${
          hovered
            ? "scale-x-[1.08] border-[#06D5C6] bg-white"
            : "scale-x-100 border-transparent bg-[#06D5C6]"
        }
        ${className}
      `}
    >
      {/* TEXT */}
      <span
        className={`
          relative z-30 flex items-center justify-center gap-2
          transition-colors duration-300
          ${hovered ? "text-[#06D5C6]" : "text-[#121212]"}
        `}
      >
        {leftIcon && (
          <img src={leftIcon} alt="" className="w-4 h-4 opacity-80" />
        )}

        {hovered ? "Plan My Trip" : "Send Inquiry Now!"}
      </span>

      {/* BACKGROUND FILL */}
      {(hovered || animating) && (
        <span
          key={hovered ? "in" : "out"}
          className={`
            absolute inset-0 z-10 rounded-full
            bg-[#06D5C6]
            ${hovered ? "animate-colorFollowOut" : "animate-colorFollowIn"}
          `}
        />
      )}

      {/* BIRD */}
      {animating && (
        <img
          src={hoverPng}
          alt=""
          onAnimationEnd={() => setAnimating(false)}
          className={`
            pointer-events-none
            absolute z-20 w-[120px]
            ${hovered ? "animate-birdSweepOut" : "animate-birdSweepIn"}
          `}
        />
      )}
    </button>
  );
}

export default AnimatedCTAOutline;

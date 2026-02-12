import { useState } from "react";
import hoverPng from "../../assets/images/bird - Copy.png";

function AnimatedCTAOutline({
  defaultText = "Plan My Trip",
  hoverText = "Send Inquiry Now!",
  className = "",
  onClick,
  leftIcon = null,
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState(null);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => {
        setDirection("in");
        setHovered(true);
      }}
      onMouseLeave={() => {
        setDirection("out");
        setHovered(false);
      }}
      className={`
        relative overflow-hidden
        rounded-full
        font-manrope text-[16px] font-[400]
        px-8 py-3
        transition-colors duration-300
        ${
          hovered
            ? "border border-[#19FAEA] bg-transparent"
            : "border border-[#0FA297] bg-white"
        }
        ${className}
      `}
    >
      {/* TEXT */}
      <span
        className={`
          relative z-30 flex items-center justify-center gap-2
          transition-colors duration-300
          ${hovered ? "text-[#001917]" : "text-[#001917]"}
        `}
      >
        {leftIcon && <img src={leftIcon} alt="" className="w-4 h-4 opacity-80" />}
        {hovered ? hoverText : defaultText}
      </span>

      {/* BACKGROUND ANIMATION */}
      {direction && (
        <span
          key={direction}
          className={`
            absolute inset-0 z-10 rounded-full
            bg-[#19FAEA]
            ${
              direction === "in"
                ? "animate-fillLeftToRight"
                : "animate-fillRightToLeft"
            }
          `}
        />
      )}

      {/* 🐦 BIRD */}
      {direction === "in" && hovered && (
        <img
          src={hoverPng}
          alt=""
          className="absolute z-20 w-[120px] animate-birdSweepIn pointer-events-none"
        />
      )}

      {direction === "out" && !hovered && (
        <img
          src={hoverPng}
          alt=""
          className="absolute z-20 w-[120px] animate-birdSweepOut pointer-events-none"
        />
      )}
    </button>
  );
}

export default AnimatedCTAOutline;

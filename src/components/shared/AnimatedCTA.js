import { useState } from "react";
import hoverPng from "../../assets/images/bird - Copy.png";

function AnimatedCTA({
  defaultText = "Plan My Trip",
  hoverText = "Send Inquiry Now!",
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
        setAnimating(false);
      }}
      className={`
        relative overflow-hidden
        rounded-full
        font-manrope text-[16px] font-[400]
        transition-transform duration-[600ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${hovered ? "scale-x-[1.08]" : "scale-x-100"}
        ${className}
      `}
    >
      {/* CONTENT */}
      <span className="relative z-30 flex items-center gap-2 transition-colors duration-500">
        {leftIcon && (
          <img
            src={leftIcon}
            alt=""
            className="w-4 h-4 opacity-80"
          />
        )}

        <span className={hovered ? "text-[#033733]" : "text-inherit"}>
          {hovered ? hoverText : defaultText}
        </span>
      </span>

      {/* COLOR FOLLOW */}
      {(hovered || animating) && (
        <span
          className={`
            absolute inset-0 z-10
            rounded-full
            bg-[#19FAEA]
            ${animating ? "animate-colorFollow" : ""}
          `}
        />
      )}

      {/* BIRD */}
      {animating && (
        <img
          src={hoverPng}
          alt=""
          onAnimationEnd={() => setAnimating(false)}
          className="
            pointer-events-none
            absolute z-20
            w-[120px]
            animate-birdSweep
          "
        />
      )}
    </button>
  );
}

export default AnimatedCTA;

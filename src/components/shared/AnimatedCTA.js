import { useState } from "react";
import hoverPng from "../../assets/images/bird - Copy.png";

function AnimatedCTA({
  defaultText = "Plan My Trip",
  hoverText = "Send Inquiry Now!",
  className = "",
}) {
  const [animating, setAnimating] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <button
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
      {/* TEXT */}
      <span
        className={`
          relative z-30
          transition-colors duration-500
          ${hovered ? "text-[#033733]" : "text-white"}
        `}
      >
        {hovered ? hoverText : defaultText}
      </span>

      {/* COLOR FOLLOW LAYER */}
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

      {/* BIRD PNG (UNCHANGED) */}
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

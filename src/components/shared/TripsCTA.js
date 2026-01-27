import { useState } from "react";
import hoverPng from "../../assets/images/bird - Copy.png";

function TripsCTA({
  defaultText = "Send Inquiry Now!",
  hoverText = "Send Inquiry Now!",
  className = "",
}) {
  const [animating, setAnimating] = useState(false);
  const [hovered, setHovered] = useState(false);

  const startAnim = () => {
    if (!hovered) setAnimating(true);
    setHovered(true);
  };

  const endAnim = () => {
    setTimeout(() => {
      setHovered(false);
      setAnimating(false);
    }, 800); // visible on mobile
  };

  return (
    <button
      onPointerEnter={startAnim}   // desktop hover
      onPointerLeave={endAnim}
      onPointerDown={startAnim}    // mobile tap
      onPointerUp={endAnim}
      onPointerCancel={endAnim}
      className={`
        relative overflow-hidden
        rounded-full
        bg-[#06D5C6]
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
          text-[#033733]
        `}
      >
        {hovered ? hoverText : defaultText}
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

export default TripsCTA;

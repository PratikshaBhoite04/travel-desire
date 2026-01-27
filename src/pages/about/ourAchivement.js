import { useEffect, useRef, useState } from "react";
import linesTop from "../../assets/images/lines-top.png";
import linesBottom from "../../assets/images/lines-bottom.png";
import temple from "../../assets/images/temple.png";
import instagramIcon from "../../assets/icons/instagram.png";

const images = Array(7).fill(temple);

function OurAchievements() {
  const scrollRef = useRef(null);
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    const speed = 0.6;

    const updateStyles = () => {
      const center = container.scrollLeft + container.offsetWidth / 2;
      const children = Array.from(container.children);

      const newStyles = children.map((child) => {
        const childCenter =
          child.offsetLeft + child.offsetWidth / 2;

        const distance = Math.abs(center - childCenter);

        const scale = Math.max(
          0.7,
          1 - Math.pow(distance / 900, 1.4)
        );

        const translateY = (1 - scale) * 80;

        return { scale, translateY };
      });

      setStyles(newStyles);
    };

    const autoScroll = () => {
      container.scrollLeft += speed;

      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 1
      ) {
        container.scrollLeft = 0;
      }

      updateStyles();
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative bg-[#021E1A] pt-20 pb-24 overflow-hidden">

      {/* Decorative lines */}
      <img
        src={linesTop}
        alt=""
        className="absolute top-0 right-0 w-50 md:w-70 pointer-events-none"
      />
      <img
        src={linesBottom}
        alt=""
        className="absolute bottom-0 left-0 w-50 md:w-70 pointer-events-none"
      />

      {/* MOBILE HEADING */}
      <h2 className="md:hidden text-center font-tiempos font-medium tracking-[0.4px] mb-10">
        <span className="block text-white text-[36px] leading-[42px]">
          Our
        </span>
        <span className="block text-[#0ED9CB] text-[36px] leading-[42px]">
          Achievements
        </span>
      </h2>

      {/* DESKTOP HEADING */}
      <h2 className="hidden md:block text-center font-tiempos font-medium text-[56px] leading-[56px] text-white mb-16">
        Our <span className="text-[#0ED9CB]">Achievements</span>
      </h2>

      {/* ===== SCROLLER ===== */}
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-scroll no-scrollbar px-4 md:px-8"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 transition-transform duration-300 ease-out"
            style={{
              transform: `scale(${styles[index]?.scale || 0.7})
                translateY(${styles[index]?.translateY || 0}px)`,
            }}
          >
            <img
              src={img}
              alt="Achievement"
              className="
                w-[260px] h-[360px]
                md:w-[420px] md:h-[560px]
                object-cover
                rounded-[20px]
              "
            />
          </div>
        ))}
      </div>

      {/* ===== FOOTER CTA ===== */}
      <div className="mt-20 text-center max-w-xl mx-auto px-4">
        <p className="font-manrope text-[14px] leading-[22px] text-gray-300 mb-8">
          See what our travelers are experiencing. Follow us on Instagram for daily inspiration
        </p>

        <button
          className="relative inline-flex items-center p-[1.5px] rounded-full"
          style={{
            background:
              "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
          }}
        >
          <span className="flex items-center gap-2 bg-[#021E1A] px-6 py-3 rounded-full text-[14px] text-white transition">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-5 h-5"
            />
            Follow @tripdesire
          </span>
        </button>
      </div>
    </section>
  );
}

export default OurAchievements;

import { useEffect, useRef, useState } from "react";
import linesTop from "../../assets/images/lines-top.png";
import linesBottom from "../../assets/images/lines-bottom.png";
// import temple from "../../assets/images/temple.png";

import trip1 from "../../assets/images/trip1.webp";
import trip2 from "../../assets/images/trip2.webp";
import trip3 from "../../assets/images/trip3.webp";
import trip4 from "../../assets/images/trip4.webp";
import trip5 from "../../assets/images/trip5.webp";
import trip6 from "../../assets/images/trip6.webp";
import trip7 from "../../assets/images/trip7.webp";
import trip8 from "../../assets/images/trip8.webp";
import trip9 from "../../assets/images/trip9.webp";
import trip10 from "../../assets/images/trip10.webp";
import trip11 from "../../assets/images/trip11.webp";
import trip12 from "../../assets/images/trip12.webp";
import trip13 from "../../assets/images/trip13.webp";
import trip14 from "../../assets/images/trip14.webp";
import trip15 from "../../assets/images/trip15.webp";
import trip16 from "../../assets/images/trip16.webp";
import trip17 from "../../assets/images/trip17.webp";
import trip18 from "../../assets/images/trip18.webp";
import trip19 from "../../assets/images/trip19.webp";
import trip20 from "../../assets/images/trip20.webp";
import trip21 from "../../assets/images/trip21.webp";
import trip22 from "../../assets/images/trip22.webp";
import trip23 from "../../assets/images/trip23.webp";
import trip24 from "../../assets/images/trip24.webp";



import instagramIcon from "../../assets/icons/instagram.png";

const images = [
    trip1, trip2, trip3, trip4, trip5,
  trip6, trip7, trip8, trip9, trip10,
  trip11, trip12, trip13, trip14, trip15,
  trip16, trip17, trip18, trip19, trip20,
  trip21, trip22, trip23, trip24, 
];

function RealTrips() {
  const scrollRef = useRef(null);
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    const speed = 0.6;

    const updateStyles = () => {
      const center =
        container.scrollLeft + container.offsetWidth / 2;

      const children = Array.from(container.children);

      const newStyles = children.map((child) => {
        const childCenter =
          child.offsetLeft + child.offsetWidth / 2;

        const distance = Math.abs(center - childCenter);

        const maxScale = 1;
        const minScale = 0.7;

        const scale = Math.max(
          minScale,
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
    <section className="relative bg-[#021E1A] mt-2 md:mt-10 py-16 md:py-20 overflow-hidden">

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
<h2 className="md:hidden text-center font-tiempos font-[500] tracking-[1px]">
  <span className="block text-white text-[36px] leading-[42px]">
    Real Trips by Real
  </span>
  <span className="block text-[#0ED9CB] text-[36px] leading-[42px] mb-4">
    People
  </span>
</h2>

{/* DESKTOP HEADING (UNCHANGED) */}
<h2 className="hidden md:block text-center text-white text-[56px] font-[500] font-tiempos mb-15">
  Real Trips by <span className="text-[#0ED9CB]">Real People</span>
</h2>


      {/* ===== SCROLLER ===== */}
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-2 overflow-x-scroll no-scrollbar px-4 pt-4 md:px-8"
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
              alt=""
              className="
                w-[260px] h-[360px]
                md:w-[420px] md:h-[560px]
                object-cover object-center
                rounded-2xl
              "
            />
          </div>
        ))}
      </div>

      {/* ===== FOOTER CTA ===== */}
      <div className="mt-16 md:mt-22 text-center max-w-xl mx-auto px-4">
        <p className="text-sm text-gray-300 mb-6">
          See what our travelers are experiencing. Follow us on Instagram for daily inspiration
        </p>

        <button
          className="relative inline-flex items-center p-[1.5px] rounded-full"
          style={{
            background:
              "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
          }}
        >
          <span className="flex items-center gap-2 bg-[#021E1A] px-6 py-3 rounded-full text-sm text-white  transition">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-5 h-5 object-contain"
            />
            Follow @tripdesire
          </span>
        </button>
      </div>
    </section>
  );
}

export default RealTrips;

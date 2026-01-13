import { useEffect, useRef, useState } from "react";
import linesTop from "../../assets/images/lines-top.png";
import linesBottom from "../../assets/images/lines-bottom.png";
import temple from "../../assets/images/temple.png";

const images = Array(7).fill(temple);

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

        // SCALE
        const maxScale = 1;
        const minScale = 0.6;
        const scale = Math.max(
          minScale,
          maxScale - distance / 750
        );

        // VERTICAL OFFSET (depth effect)
        const translateY = (1 - scale) * 120;

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
    <section className="relative bg-[#021E1A] mt-32 py-32 overflow-hidden">

      {/* Decorative lines */}
      <img
        src={linesTop}
        alt=""
        className="absolute top-0 right-0 w-72 pointer-events-none"
      />
      <img
        src={linesBottom}
        alt=""
        className="absolute bottom-0 left-0 w-72 pointer-events-none"
      />

      <h2 className="text-center text-white text-4xl md:text-5xl font-tiempos mb-20">
        Real Trips by <span className="text-[#19FAEA]">Real People</span>
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-scroll no-scrollbar px-4 md:px-8"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 transition-transform duration-300 ease-out"
            style={{
              transform: `scale(${styles[index]?.scale || 0.6})
                          translateY(${styles[index]?.translateY || 0}px)`,
            }}
          >
            <img
              src={img}
              alt=""
              className="w-[420px] h-[560px] object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      <div className="mt-24 text-center max-w-xl mx-auto">
        <p className="text-sm text-gray-300 mb-6">
          See what our travelers are experiencing. Follow us on Instagram for daily inspiration
        </p>

       <button className="inline-flex items-center gap-2 border border-[#19FAEA] text-[#19FAEA] px-6 py-3 rounded-full text-sm hover:bg-[#19FAEA] hover:text-black transition">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
  </svg>
  Follow @tripdesire
</button>

      </div>
    </section>
  );
}

export default RealTrips;

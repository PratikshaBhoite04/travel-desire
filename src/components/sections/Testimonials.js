import { useState, useRef } from "react";
import girl from "../../assets/images/girl.jpg";
import bird from "../../assets/images/bird.png";
import lines from "../../assets/images/waves.png";

function Testimonials({
  title = "Listen to Real Stories",
  highlight = "Real Stories",
  showSubtitle = true,
  withBackground = true,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const scrollRef = useRef(null);

  const cards = [0, 1, 2];

  const scrollByCard = (direction) => {
    if (!scrollRef.current) return;

    const cardWidth = 320 + 24;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`py-20 ${
        withBackground ? "bg-[#F9FDEB]" : "bg-transparent"
      }`}
    >
      {/* ===== HEADING ===== */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-[52px] font-gloock font-normal text-[#001917]">
          {title.includes(highlight) ? (
            <>
              {title.replace(highlight, "")}
              <span className="text-[#19FAEA]">{highlight}</span>
            </>
          ) : (
            title
          )}
        </h2>

        {showSubtitle && (
          <p className="mt-4 text-gray-500 text-[16px] font-light font-manrope">
            We’re not just a travel agency, we’re your travel partners committed
            to creating memorable
            <br className="hidden md:block" />
            experiences
          </p>
        )}
      </div>

      {/* ===== CARDS ===== */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="
            flex gap-6
            overflow-x-auto md:overflow-visible
            px-10 md:px-0
            scroll-smooth
            snap-x snap-mandatory
            no-scrollbar
            md:justify-center
          "
        >
          {cards.map((_, index) => {
            const isActive = activeIndex === index;
            const slide =
              index === 0 ? "-translate-x-10" : "translate-x-10";

            return (
              <div
                key={index}
                onMouseEnter={() => {
                  if (window.innerWidth >= 768) setActiveIndex(index);
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 768) setActiveIndex(null);
                }}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setActiveIndex(index);
                  }
                }}
                className="
                  relative h-[380px] flex-shrink-0 snap-center
                  transition-all duration-500 ease-out
                  w-[320px]
                  md:w-[320px]
                  md:hover:w-[560px]
                "
              >
                {/* IMAGE CARD */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <img
                    src={girl}
                    alt="Traveler"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-6 left-6 text-white text-xl">
                    Antara
                  </span>
                </div>

                {/* HOVER CARD */}
                <div
                  className={`
                    absolute inset-0 rounded-3xl bg-[#021E1A] text-white
                    p-10 overflow-hidden
                    transition-all duration-500 ease-out
                    ${
                      isActive
                        ? "opacity-100 translate-x-0"
                        : `opacity-0 ${slide}`
                    }
                  `}
                >
                  <img
                    src={lines}
                    alt=""
                    className="absolute top-0 right-0 w-72 pointer-events-none"
                  />

                  <img
                    src={bird}
                    alt=""
                    className="w-10 mb-8 relative z-10"
                  />

                  <p className="text-[16px] md:text-[20px] leading-relaxed font-light font-manrope opacity-90 relative z-10">
                    “No more ‘let’s hope the experience is good’. Travel Desire
                    sorted everything for us. From planning to execution, it was
                    seamless.”
                  </p>

                  <div className="mt-10 relative z-10">
                    <h4 className="text-[#ACF929] text-[32px] font-manrope font-medium">
                      Antara
                    </h4>
                    <p className="text-white text-xl font-light font-manrope mt-1">
                      Rajasthan Custom Trip
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE ARROWS */}
        <div className="flex justify-center gap-4 mt-10 md:hidden">
          <button
            onClick={() => scrollByCard("left")}
            className="w-14 h-10 rounded-full bg-[#EAF5C8] flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => scrollByCard("right")}
            className="w-14 h-10 rounded-full bg-[#D8F929] flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

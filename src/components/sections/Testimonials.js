import { useState, useRef } from "react";
import girl from "../../assets/images/girl.webp";
import bird from "../../assets/images/bird.webp";
import lines from "../../assets/images/waves.png";

/* ===== SVG ARROWS (FIGMA STYLE) ===== */
const ArrowRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      stroke="#001917"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowLeftIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M19 12H5M5 12L11 6M5 12L11 18"
      stroke="#001917"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Testimonials({
  title = "Listen to Real Stories",
  highlight = "Real Stories",
  showSubtitle = true,
  withBackground = true,
}) {
  /* ===== DESKTOP STATE (UNCHANGED) ===== */
  const CENTER_INDEX = 1;
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [0, 1, 2];

const mobileScrollRef = useRef(null);

const scrollMobile = (direction) => {
  if (!mobileScrollRef.current) return;

  mobileScrollRef.current.scrollBy({
    left: direction * mobileScrollRef.current.offsetWidth,
    behavior: "smooth",
  });
};


  return (
    <section className={`py-14 md:py-20 ${withBackground ? "bg-[#F9FDEB]" : ""}`}>

  {/* ================= HEADING ================= */}
<div className="text-center max-w-3xl mx-auto mb-4 md:mb-10 px-4">
  <h2 className="text-[45px] font-tiempos font-[600] text-[#001917]">
    {title === "Reviews" ? (
      title
    ) : (
      <>
        Listen to <span className="text-[#06D5C6]">Real Stories</span>
      </>
    )}
  </h2>

  {showSubtitle && (
    <p
      className="
        mt-3
        text-[#7D7D7D]
        text-[16px] md:text-[18px]
        font-[300] font-manrope
        whitespace-normal md:whitespace-nowrap
      "
    >
      We’re not just a travel agency, we’re your travel partners committed
      to creating memorable experiences
    </p>
  )}
</div>


  {/* ================= MOBILE VIEW ================= */}
<div className="md:hidden px-4">
  {/* SCROLL AREA */}
  <div
    ref={mobileScrollRef}
    className="
      flex gap-4
      overflow-x-auto
      snap-x snap-mandatory
      scroll-smooth
      scrollbar-hide
    "
  >
    {cards.map((_, index) => (
      <div
        key={index}
        className="min-w-full snap-center"
      >
        <div className="relative h-[280px] rounded-[14px] overflow-hidden">
          {/* Image */}
          <img
            src={girl}
            alt="Traveler"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#021E1A]/95 p-5 flex flex-col justify-between">
            <div>
              <img src={bird} alt="" className="w-9 mb-10" />
              <p className="text-[14px] text-[#FFFFFF] font-manrope font-[300] leading-[20px]">
                “No more ‘let’s hope the experience is good’. Travel Desire
                sorted everything for us. From planning to execution, it was
                seamless.”
              </p>
            </div>

            <div>
              <h4 className="text-[#D5FB93] text-[22px] font-[500]">
                Antara
              </h4>
              <p className="font-manrope text-[13px] font-[300] text-white">
                Rajasthan Custom Trip
              </p>
            </div>

            <img
              src={lines}
              alt=""
              className="absolute top-0 right-0 w-[200px] opacity-200"
            />
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* ARROWS */}
  <div className="flex justify-center gap-4 mt-6">
    <button
      onClick={() => scrollMobile(-1)}
      className="
        h-11 px-6
        rounded-full
        bg-[#E7FF3033]
        flex items-center justify-center
        active:scale-95
        transition
      "
    >
      <ArrowLeftIcon className="w-5 h-5" />
    </button>

    <button
      onClick={() => scrollMobile(1)}
      className="
        h-11 px-6
        rounded-full
        bg-[#E7FF30]
        flex items-center justify-center
        active:scale-95
        transition
      "
    >
      <ArrowRightIcon className="w-5 h-5" />
    </button>
  </div>
</div>


      <div className="hidden md:flex justify-center gap-6 px-10">
        {cards.map((_, index) => {
          const isCenter = index === CENTER_INDEX;
          const isSideHovered =
            activeIndex !== null && activeIndex !== CENTER_INDEX;

          const showDetail =
            (!isSideHovered && isCenter) || activeIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => {
                if (!isCenter) setActiveIndex(index);
              }}
              onMouseLeave={() => {
                setActiveIndex(null);
              }}
              className={`
                relative h-[380px] rounded-3xl overflow-hidden
                transition-all duration-500 ease-out
                ${showDetail ? "w-[560px]" : "w-[320px]"}
              `}
            >
              <img
                src={girl}
                alt="Traveler"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {!showDetail && (
                <span className="absolute bottom-6 left-6 text-white text-xl z-10">
                  Antara
                </span>
              )}

              <div
                className={`
                  absolute inset-0 bg-[#021E1A] text-white p-10
                  transition-opacity duration-500
                  ${showDetail ? "opacity-100" : "opacity-0"}
                `}
              >
                <img
                  src={lines}
                  alt=""
                  className="absolute top-0 right-0 w-[320px] opacity-40"
                />

                <img src={bird} alt="" className="w-11 mb-6" />

                <p className="text-[21px] font-manrope font-[300]">
                  “No more ‘let’s hope the experience is good’. Travel Desire
                  sorted everything for us. From planning to execution, it was
                  seamless.”
                </p>

                <div className="mt-8">
                  <h4 className="text-[#D5FB93] text-[34px] font-[500]">
                    Antara
                  </h4>
                  <p className="font-manrope text-[19px] font-[300]">
                    Rajasthan Custom Trip
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;

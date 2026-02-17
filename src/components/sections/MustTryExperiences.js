import { useRef } from "react";
import Paragliding from "../../assets/images/paragliding.png";
import Trekking from "../../assets/images/trekking.webp";
import Wine from "../../assets/images/wine.webp";
import Aurora from "../../assets/images/aurora.webp";
import Ropeway from "../../assets/images/ropeway.webp";
import Surfing from "../../assets/images/surfing.png";
import { useNavigate } from "react-router-dom";

/* ===== SVG ARROWS ===== */
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

/* ===== Figma Grid Mapping ===== */
const experiences = [
  {
    title: "Paragliding",
    slug: "manali-snow-adventure",
    image: Paragliding,
    className: "col-span-2",
  },
  {
    title: "Trekking",
    slug: "kashmir-valley-escape",
    image: Trekking,
    className: "row-span-2",
  },
  {
    title: "Wine Tasting",
    slug: "european-wonders-09-days",
    image: Wine,
    className: "row-span-2",
  },
  {
    title: "Aurora",
    slug: "kashmir-valley-escape",
    image: Aurora,
    className: "row-span-2",
  },
  {
    title: "Ropeway",
    slug: "manali-snow-adventure",
    image: Ropeway,
    className: "row-span-2",
  },
  {
    title: "Surfing",
    slug: "rajasthan-mewad-with-tiger-reserve",
    image: Surfing,
    className: "col-span-2",
  },
];

function MustTryExperiences() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 md:py-10 bg-white">
     <div className="max-w-7xl mx-auto px-6 text-center mb-12">
  {/* ===== MOBILE HEADING ===== */}
  <h2 className="md:hidden font-tiempos font-[500] text-[36px] leading-[42px] tracking-[1px] text-[#1C3627]">
    Must try <br />
    <span className="text-[#06D5C6]">Experiences</span>
  </h2>

  {/* ===== DESKTOP HEADING ===== */}
  <h2 className="hidden md:block text-[54px] font-[500] font-tiempos text-[#1C3627]">
    Must try <span className="text-[#06D5C6]">Experiences</span>
  </h2>

{/* ===== MOBILE SUBTITLE ===== */}
<p className="
  md:hidden
  mt-3
  mx-auto
  max-w-[320px]
  text-[#717171]
  font-inter
  text-[15px]
  leading-[24px]
  text-center
">
  Fixed departure dates with confirmed bookings.
  Join fellow travelers on curated group tours.
</p>


  {/* ===== DESKTOP SUBTITLE  ===== */}
  <p className="hidden md:block text-[#717171] font-manrope text-[17px]">
    Fixed departure dates with confirmed bookings.
    Join fellow travelers on curated group tours.
  </p>
</div>

      {/* ================= MOBILE SLIDER ================= */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        >
          {experiences.map((item, index) => (
            <div
              key={index}
              className="relative min-w-full h-[360px] rounded-2xl overflow-hidden snap-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-4 left-4 text-white font-manrope font-medium text-[16px]">
                {item.title}
              </div>

<button
  onClick={() => navigate(`/tour/${item.slug}`)}
  className="absolute bottom-4 right-4 w-16 h-11 rounded-full bg-[#1EEBD9] flex items-center justify-center z-10"
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-5 h-5 rotate-[-45deg]"
  >
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      stroke="#001917"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

            </div>
          ))}
        </div>

        {/* ARROWS */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            className="h-11 px-6 rounded-full bg-[#E7FF3033] flex items-center justify-center"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="h-11 px-6 rounded-full bg-[#E7FF30] flex items-center justify-center"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ================= DESKTOP GRID (FIGMA EXACT) ================= */}
      <div className="hidden md:block max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 auto-rows-[205px] gap-6">
          {experiences.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-4 left-4 text-white font-manrope font-medium text-lg">
                {item.title}
              </div>

<button
  onClick={() => navigate(`/tour/${item.slug}`)}
  className="absolute bottom-4 right-4 w-16 h-11 rounded-full bg-[#1EEBD9] flex items-center justify-center z-10"
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-5 h-5 rotate-[-45deg]"
  >
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      stroke="#001917"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MustTryExperiences;

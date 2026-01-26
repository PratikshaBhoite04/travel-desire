import Navbar from "../../components/shared/Navbar";
import { useNavigate } from "react-router-dom";
import { tours } from "../../data/tours"; 
import { Clock } from "lucide-react";
import headerLines from "../../assets/images/header-lines.png";

function TripPackages() {
  const navigate = useNavigate();

  return (
<>
 <Navbar bgColor="#001917" />

{/* HEADER */}
<section className="relative pt-24 bg-gradient-to-b from-[#001917] to-[#001917]/95 overflow-hidden">

  {/* RIGHT SIDE LINE PATTERN */}
  <img
    src={headerLines}
    alt=""
    className="pointer-events-none absolute top-0 right-0 h-full w-auto opacity-90"
  />

  <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-20">

    {/* TITLE */}
    <h1 className="text-[56px] font-[500] font-tiempos text-[#FFFFFF]">
      Explore <span className="text-[#06D5C6]">Trips</span>
    </h1>

    {/* SEARCH + FILTER BAR */}
    <div className="mt-10 flex flex-col lg:flex-row gap-4 items-center">

      {/* SEARCH INPUT (GRADIENT BORDER ONLY) */}
      <div className="flex-1 rounded-full p-[1.5px] bg-gradient-to-r from-[#3B4444] to-[#46473F80]">
        <div className="flex items-center w-full bg-[#001917] rounded-full px-6 py-2">

          {/* SEARCH ICON */}
          <svg
            className="w-5 h-5 mr-3"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search Destination"
            className="bg-transparent outline-none text-[#FFFFFF]  font-[400] font-manrope text-[17px] placeholder-white w-full"
          />

             {/* SEARCH BUTTON */}
      <button className="bg-[#06D5C6] text-[#121212] font-manrope text-[15px] font-[400] px-8 py-2 rounded-full transition">
        Search
      </button>
        </div>
      </div>

   
{/* DOMESTIC PILL (NO DROPDOWN, JUST LABEL) */}
<div className="rounded-full p-[1.5px] bg-gradient-to-r from-[#06D5C6] to-[#ACF929]">
  <div className="relative bg-[#001917] rounded-full pl-12 pr-16 py-3 flex items-center">


    {/* TEXT */}
    <span className="text-[#06D5C6] font-manrope text-[17px] font-[400]">
      Domestic
    </span>

    {/* ARROW ICON */}
    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FFFFFF] text-sm">
      ▼
    </span>

  </div>
</div>


    </div>
  </div>
</section>





{/* CARDS */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tours.map((tour) => (
        <div
          key={tour.slug}
          className="group bg-white rounded-2xl border overflow-hidden transition relative"
        >
          {/* Image */}
          <div className="relative h-[250px] overflow-hidden rounded-t-[13px] rounded-b-[13px]">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover"
            />

            {/* Rating */}
            <div className="absolute bottom-3 left-3 flex items-center gap-[6px]">
              <span className="text-[#ACF929] text-[18px] leading-none">★</span>
              <span className="font-inter font-[500] text-[17px] leading-[26px] tracking-[-0.34px] text-[#ACF929]">
                {tour.rating}
              </span>
            </div>

            {/* Days */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[15px] font-[400] text-white">
              <Clock size={16} strokeWidth={3} />
              <span>{tour.days}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-[26px] font-manrope font-[500] text-[#001917]">
              {tour.title}
            </h3>

            <p className="mt-1 text-[14px] font-[400] font-manrope text-[#7D7D7D]">
              Starting from
            </p>

            <div className="flex items-center justify-between">
              <span className="text-[28px] font-manrope font-[700] text-[#343434]">
                {tour.price}
              </span>

              {/* Arrow Button */}
    <button
                 onClick={() => navigate(`/tour/${tour.slug}`)}
                    className="
                      w-16 h-11
                      rounded-full
                      bg-[#1EEBD9]
                      flex items-center justify-center
                      transition-colors duration-300
                      hover:bg-[#D5FB93]
                      relative z-0
                    "
                  >
                    <span
                      className="
                        text-black text-lg
                        transition-transform duration-300
                        hover:rotate-45
                      "
                    >
                      ↗
                    </span>
                  </button>

            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

    </>
  );
}

export default TripPackages;

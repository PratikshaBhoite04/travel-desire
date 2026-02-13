import Navbar from "../../components/shared/Navbar";
import { useNavigate } from "react-router-dom";
import { tours } from "../../data/tours";
import { Clock } from "lucide-react";
import headerLines from "../../assets/images/header-lines.png";
import dropdownArrow from "../../assets/icons/dropdown-arrow.png";
import starIcon from "../../assets/icons/star.png"; 
import AnimatedCTA from "../../components/shared/AnimatedCTA";
import ArrowButton from "../../components/shared/ArrowButton";





function TripPackages() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bgColor="#001917" />

      {/* HEADER */}
<section className="relative pt-20 md:pt-24 bg-gradient-to-b from-[#001917] to-[#001917]/95 overflow-hidden">
        <img
          src={headerLines}
          alt=""
          className="pointer-events-none absolute top-0 right-0 h-full w-auto opacity-90"
        />

      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-20 text-left">
          {/* TITLE */}
<h1 className="text-left md:text-left text-[42px] md:text-[56px] font-[600] font-tiempos text-white translate-y-2 md:translate-y-8">
            Explore <span className="text-[#06D5C6]">Trips</span>
          </h1>

          {/* SEARCH + FILTER */}
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:gap-6    translate-y-4 md:translate-y-8">
            {/* SEARCH */}
            <div
              className="
                w-full
                md:max-w-[950px]
                rounded-full
                p-[1px]
                bg-[#06D5C6]/40
                md:bg-gradient-to-r md:from-[#3B4444] md:to-[#46473F80]
              "
            >
              <div className="flex items-center w-full bg-[#001917] rounded-full px-4 py-3 md:px-6 md:py-2.5 gap-3">
                {/* LEFT ICON — DESKTOP ONLY */}
                <svg
                  className="hidden md:block w-5 h-5 text-white opacity-80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                {/* INPUT */}
                <input
                  type="text"
                  placeholder="Destination"
                  className="bg-transparent outline-none text-white font-manrope text-[15px] placeholder-white w-full"
                />

                {/* MOBILE SEARCH BUTTON */}
           <button className="md:hidden w-[38px] h-[38px] bg-[#19FAEA] rounded-full flex items-center justify-center shrink-0">
  <svg
    className="w-4 h-4 text-[#001917]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
</button>


                {/* DESKTOP SEARCH BUTTON */}
                <button className="hidden md:block bg-[#06D5C6] text-[#121212] font-manrope text-[15px] px-8 py-2 rounded-full">
                  Search
                </button>
              </div>
            </div>

            {/* DOMESTIC PILL */}
            <div className="w-full md:w-[280px] rounded-full p-[1px] bg-gradient-to-r from-[#06D5C6] to-[#ACF929]">
              <div className="bg-[#001917] rounded-full px-6 py-4 flex items-center justify-between">
                <span className="text-[#06D5C6] font-manrope text-[15px] md:text-[17px] px-6">
                  Domestic
                </span>
                <img
                  src={dropdownArrow}
                  alt="Dropdown"
                  className="w-6 h-7 md:w-5 md:h-5 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <div
                key={tour.slug}
                className="bg-white rounded-2xl border overflow-hidden"
              >
                <div className="relative h-[250px] overflow-hidden rounded-[13px]">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />

               <div className="absolute bottom-3 left-3 flex items-center gap-1">
  <img
    src={starIcon}
    alt="Rating"
    className="w-4 h-4"
  />
  <span className="text-[#ACF929] text-[15px] font-[500]">
    {tour.rating}
  </span>
</div>


                  <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white text-sm">
                    <Clock size={16} strokeWidth={3} />
                    {tour.days}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-[22px] md:text-[26px] font-manrope font-[500] text-[#001917]">
                    {tour.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">Starting from</p>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[24px] font-bold">
                      {tour.price}
                    </span>

                    <ArrowButton to={`/tour/${tour.slug}`} size="sm" />



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

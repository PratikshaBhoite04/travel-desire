import bgImage from "../assets/images/bg.jpg";
import { FiMapPin, FiClock, FiCalendar } from "react-icons/fi";

function TourHero({ tour }) {
  return (
    <section className="relative h-[520px] w-full">
      {/* Background Image */}
      <img
        src={tour.image || bgImage}
        alt={tour.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-6 pb-16 w-full flex justify-between items-end">

          {/* LEFT */}
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-tiempos font-[500] text-[48px] leading-tight">
              {tour.title}
            </h1>

            {/* ICON ROW */}
            <div className="flex flex-wrap gap-6 mt-5 text-sm text-white/90">

              <div className="flex items-center gap-2">
                <FiMapPin className="text-[#FAF031] text-lg" />
                <span className="font-manrope text-[18px] text-[#FFFFFF] font-[400]">{tour.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <FiClock className="text-[#FAF031] text-lg" />
                <span className="font-manrope text-[18px] text-[#FFFFFF] font-[400]">{tour.days}</span>
              </div>

              <div className="flex items-center gap-2">
                <FiCalendar className="text-[#FAF031] text-lg" />
                <span className="font-manrope text-[18px] text-[#FFFFFF] font-[400]">Next: {tour.nextDate}</span>
              </div>

            </div>
          </div>

          {/* RIGHT BUTTON */}
          <button className="bg-[#1EEBD9] text-black px-8 py-3 mb-3 rounded-full font-medium hover:bg-[#D5FB93] transition">
            Book My Trip
          </button>

        </div>
      </div>
    </section>
  );
}

export default TourHero;

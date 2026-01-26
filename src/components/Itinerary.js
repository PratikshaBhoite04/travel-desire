import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import checkIcon from "../assets/icons/check.png";

function Itinerary({ itinerary = [], points = [] }) {
  const [openDay, setOpenDay] = useState(0);

  return (
    <div className="space-y-8">

      {/* ITINERARY CARD */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-8">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-manrope font-[700] text-[22px] md:text-[26px] text-[#001917]">
            Day-wise Itinerary
          </h3>

          <button
            onClick={() => setOpenDay(null)}
            className="text-sm text-[#6C7278]"
          >
            Collapse All
          </button>
        </div>

        {/* DAYS (❌ no divide-y now) */}
        <div>
          {itinerary.map((day, index) => {
            const isOpen = openDay === index;

            return (
              <div key={index} className="py-4">

                {/* DAY HEADER */}
                <button
                  onClick={() => setOpenDay(isOpen ? null : index)}
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#ECFDCE] flex items-center justify-center text-sm font-manrope font-[600] text-[#607F4F]">
                      {day.day}
                    </div>

                    <p className="font-manrope font-[600] text-[16px] md:text-[18px] text-[#001917]">
                      {day.title}
                    </p>
                  </div>

                  {isOpen ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {/* CONTENT */}
                {isOpen && (
                  <div className="mt-4 pl-12">

                    {day.desc && (
                      <p className="text-[15px] md:text-[15px] text-[#001917] font-manrope leading-[26px] mb-3">
                        {day.desc}
                      </p>
                    )}

                    {day.tags && (
                      <div className="flex flex-wrap gap-2">
                        {day.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-[#E1FFFD] text-[#001917] px-4 py-2 rounded-full text-[13px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>

      {/* DOWNLOAD BUTTON */}
<div className="mt-6 flex justify-center md:justify-end">
  <button
    className="
      w-full md:w-auto
      px-8 py-3
      rounded-full
      font-manrope font-[400] text-[14px]

      /* MOBILE */
      border border-[#0FA297]
      text-[#0FA297]
      bg-white
     

      /* DESKTOP */
      md:bg-[#19FAEA]
      md:text-[#001917]
      md:border-transparent

      hover:opacity-90
      transition
    "
  >
    Download Itinerary
  </button>
</div>

      </div>

      {/* POINTS TO REMEMBER */}
      {points.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-8">
          <h3 className="font-manrope font-[700] text-[20px] md:text-[22px] text-[#001917] mb-4">
            Points to Remember
          </h3>

          <ul className="space-y-3">
            {points.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <img
                  src={checkIcon}
                  alt="check"
                  className="w-[18px] h-[18px] mt-0.5 flex-shrink-0"
                />
                <span className="text-[#6C7278] text-[14px] md:text-[15px] leading-[22px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default Itinerary;

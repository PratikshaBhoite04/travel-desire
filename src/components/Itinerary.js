import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import checkIcon from "../assets/icons/check.png";
import AnimatedCTAOutline from "./shared/AnimatedCTAOutline";
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
            className="text-[18px] font-manrope font-[600] text-[#5A5B5B] underline"
          >
            Collapse All
          </button>
        </div>

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
                    <div className="w-11 h-11 rounded-full bg-[#ECFDCE] flex items-center justify-center text-[21px] font-manrope font-[500] text-[#607F4F]">
                      {day.day}
                    </div>

                    <p className="font-manrope font-[600] text-[16px] md:text-[21px] text-[#001917]">
                      {day.title}
                    </p>
                  </div>

                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {/* CONTENT */}
                {isOpen && (
                  <div className="mt-4 pl-12">

                    {day.desc && (
                      <p className="text-[15px] md:text-[17px] font-[400] text-[#000000] font-manrope leading-[26px] mb-3">
                        {day.desc}
                      </p>
                    )}

                    {day.tags && (
                      <div className="flex flex-wrap gap-2">
                        {day.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-[#E1FFFD] text-[#001917] px-4 py-2 rounded-full font-manrope font-[400] text-[15px]"
                          >
                            {typeof tag === "object" ? tag.label : tag}
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

  <div className="mt-6 flex justify-center md:justify-end">
  <div className="scale-x-100 overflow-visible">

<AnimatedCTAOutline
  label="Download Itenary"
  hoverText="Plan My Trip!"
  className={`
    hidden md:flex
    items-center justify-center
    w-[210px] h-[52px]
    rounded-full

    border border-[#0FA297]
    text-[#001917]
    bg-[#19FAEA]

    backdrop-blur-[36.98px]

    hover:border-[#06D5C6]
    hover:bg-[white]
    transition-all duration-300
  `}
/>


  </div>
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

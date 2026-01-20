import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { useState } from "react";

function Itinerary({ itinerary = [], points = [] }) {
  const [openDay, setOpenDay] = useState(0);

  return (
    <div className="space-y-8">
      {/* MAIN ITINERARY CARD */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-manrope font-[700] text-[26px] text-[#001917]">
            Day-wise Itinerary
          </h3>
          <button
            className="text-sm text-gray-500"
            onClick={() => setOpenDay(null)}
          >
            Collapse All
          </button>
        </div>

        <div className="divide-y">
          {itinerary.map((day, index) => {
            const isOpen = openDay === index;

            return (
              <div key={index} className="py-5">
                {/* HEADER */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setOpenDay(isOpen ? null : index)
                  }
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E6FDBE] flex items-center justify-center font-manrope font-[600]">
                      {day.day}
                    </div>
                    <p className="font-manrope font-[600] text-[18px] text-[#001917]">
                      {day.title}
                    </p>
                  </div>

                  {isOpen ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </div>

                {/* CONTENT */}
                {isOpen && (
                  <div className="mt-4 pl-14">
                    {day.desc && (
                      <p className="text-[15px] text-[#6C7278] leading-relaxed mb-4">
                        {day.desc}
                      </p>
                    )}

                    {day.tags && (
                      <div className="flex gap-3 flex-wrap">
                        {day.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-[#E6FFFA] px-4 py-2 rounded-full text-sm"
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
      </div>

      {/* POINTS TO REMEMBER */}
      {points.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <h3 className="font-manrope font-[700] text-[22px] text-[#001917] mb-4">
            Points to Remember
          </h3>

          <ul className="space-y-3">
            {points.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#00A63E]" />
                <span className="text-[#6C7278] text-[15px]">
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

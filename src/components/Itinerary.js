import { useState } from "react";
import { CheckCircle } from "lucide-react";

const itineraryData = [
  {
    day: "01",
    title: "Jaipur - Ranthambore",
    desc:
      "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. " +
      "Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. " +
      "It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. " +
      "In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
    tags: ["Tea/ Coffee/ Soft Drink enroute to Ranthambore.", "Dinner"],
  },
  { day: "02", title: "Ranthambore - Jaipur",
    desc:
      "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. " +
      "Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. " +
      "It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. " +
      "In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
    tags: ["Tea/ Coffee/ Soft Drink enroute to Ranthambore.", "Dinner"],
   },
  { day: "03", title: "Jaipur" },
  { day: "04", title: "Jaipur - Kishangarh - Pushkar",
    desc:
      "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. " +
      "Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. " +
      "It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. " +
      "In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
    tags: ["Tea/ Coffee/ Soft Drink enroute to Ranthambore.", "Dinner"],
   },
  { day: "05", title: "Pushkar - Kumbhalgarh" ,
    desc:
      "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. " +
      "Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. " +
      "It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. " +
      "In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
    tags: ["Tea/ Coffee/ Soft Drink enroute to Ranthambore.", "Dinner"],
  },
  { day: "06", title: "Kumbhalgarh - Haldighati - Nathdwara - Udaipur" ,
    desc:
      "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. " +
      "Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. " +
      "It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. " +
      "In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
    tags: ["Tea/ Coffee/ Soft Drink enroute to Ranthambore.", "Dinner"],
  },
  { day: "07", title: "Udaipur - Chittorgarh - Udaipur",
    desc:
      "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. " +
      "Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. " +
      "It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. " +
      "In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
    tags: ["Tea/ Coffee/ Soft Drink enroute to Ranthambore.", "Dinner"],
   },
  { day: "08", title: "Udaipur",
    desc:
      "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. " +
      "Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. " +
      "It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. " +
      "In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
    tags: ["Tea/ Coffee/ Soft Drink enroute to Ranthambore.", "Dinner"],
   },
  { day: "09", title: "Departure from Udaipur" ,
    desc:
      "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. " +
      "Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. " +
      "It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. " +
      "In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
    tags: ["Tea/ Coffee/ Soft Drink enroute to Ranthambore.", "Dinner"],
  },
];

function Itinerary() {
  const [activeDay, setActiveDay] = useState("01");

  return (
    <div className="space-y-6">

      {/* ================= Day-wise Itinerary ================= */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-manrope font-[700] text-[24px] text-[#001917]">
            Day-wise Itinerary
          </h3>
          <button
            onClick={() => setActiveDay(null)}
            className="text-sm text-gray-500 hover:underline"
          >
            Collapse All
          </button>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-gray-200">
          {itineraryData.map((item) => (
            <div key={item.day} className="py-6">

              {/* Row */}
              <button
                onClick={() =>
                  setActiveDay(activeDay === item.day ? null : item.day)
                }
                className="w-full flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ECFFCC] flex items-center justify-center font-[600] text-[#001917]">
                    {item.day}
                  </div>
                  <span className="font-inter text-[16px] font-[500] text-[#001917]">
                    {item.title}
                  </span>
                </div>

                {/* Figma Arrow */}
                <span
                  className={`w-0 h-0 border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent 
                  ${
                    activeDay === item.day
                      ? "border-b-[8px] border-b-[#001917]"
                      : "border-t-[8px] border-t-[#001917]"
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {activeDay === item.day && item.desc && (
                <div className="mt-4 pl-14">
                  <p className="font-inter text-[14px] text-[#6C7278] leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-[#E6FFFA] text-[#001917] text-[13px] font-[500]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Download */}
        <div className="mt-8 text-end">
          <button className="bg-[#1EEBD9] text-[#001917] px-6 py-3 rounded-full font-[600] text-sm">
            Download Itinerary
          </button>
        </div>
      </div>

      {/* ================= Points to Remember ================= */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h4 className="font-manrope font-[700] text-[20px] text-[#001917] mb-4">
          Points to Remember
        </h4>

        <ul className="space-y-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle size={18} className="text-[#00A63E]" />
              <span className="font-inter text-[15px] text-[#6C7278]">
                Round-trip flights
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Itinerary;

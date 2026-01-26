import { MapPin } from "lucide-react";
import checkIcon from "../assets/icons/check.png";

function Highlights({ highlights }) {
  if (!highlights) return null;

  const {
    locationCard,
    pills,
    highlights: tripHighlights,
    experiences,
  } = highlights;

  return (
    <div className="space-y-5 md:space-y-6">
      
      {/* LOCATION CARD */}
      <div className="flex items-center gap-3 md:gap-4 border border-gray-200 rounded-xl p-4 md:p-5 bg-white">
        <div className="bg-[#ECFDCE] p-2.5 md:p-3 rounded-lg">
          <MapPin className="text-[#405D3C]" size={20} />
        </div>

        <div>
          <p className="font-manrope font-[500] text-[14px] md:text-[16px] text-[#6C7278]">
            {locationCard.meta}
          </p>
          <p className="font-manrope font-[600] text-[18px] md:text-[21px] text-[#001917]">
            {locationCard.places}
          </p>
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-8">
        
        {/* PILLS — NO ICON */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
          {pills.map((item, i) => (
            <div
              key={i}
              className="
                bg-[#0ED9CB0F]
                px-3 py-1.5 md:px-4 md:py-2
                rounded-full
                text-[14px] md:text-[17px]
                font-manrope font-[400]
                text-[#7D7D7D]
                w-fit
              "
            >
              {item}
            </div>
          ))}
        </div>

        {/* TRIP HIGHLIGHTS */}
        <h3 className="font-manrope font-[700] text-[20px] md:text-[26px] text-[#001917] mb-3 md:mb-4">
          Trip Highlights
        </h3>

        <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {tripHighlights.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <img
                src={checkIcon}
                alt="check"
                className="w-4 h-4 mt-1 shrink-0"
              />
              <span className="font-manrope font-[500] md:font-[600] text-[15px] md:text-[17px] text-[#7D7D7D]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* EXPERIENCES */}
        <h3 className="font-manrope font-[700] text-[20px] md:text-[26px] text-[#001917] mb-4 md:mb-6">
          Must-Try Experiences
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {experiences.map((item, i) => (
            <div key={i} className="bg-[#001917] rounded-xl p-5 md:p-6">
              <h4 className="mb-1.5 md:mb-2 font-manrope font-[600] text-[16px] md:text-[19px] text-[#E6FDBE]">
                {item.title}
              </h4>
              <p className="font-manrope font-[400] text-[14px] md:text-[15px] text-white leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Highlights;

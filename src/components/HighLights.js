import { CheckCircle, MapPin } from "lucide-react";

function Highlights({ highlights }) {
  if (!highlights) return null;

  const {
    locationCard,
    pills,
    highlights: tripHighlights,
    experiences,
  } = highlights;

  return (
    <div className="space-y-6">
      {/* LOCATION CARD */}
      <div className="flex items-center gap-4 border border-gray-200 rounded-xl p-5 bg-white">
        <div className="bg-[#E6FFFA] p-3 rounded-lg">
          <MapPin className="text-[#14B8A6]" size={22} />
        </div>

        <div>
          <p className="font-manrope font-[500] text-[16px] text-[#6C7278]">
            {locationCard.meta}
          </p>
          <p className="font-manrope font-[600] text-[21px] text-[#001917]">
            {locationCard.places}
          </p>
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        {/* PILLS */}
        <div className="flex flex-wrap gap-3 mb-8">
          {pills.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-[#F0FDF4] px-4 py-2 rounded-full text-[17px] font-manrope font-[400] text-[#7D7D7D]"
            >
              <CheckCircle size={16} className="text-[#00A63E]" />
              {item}
            </div>
          ))}
        </div>

        {/* TRIP HIGHLIGHTS */}
        <h3 className="font-manrope font-[700] text-[26px] text-[#001917] mb-4">
          Trip Highlights
        </h3>

        <ul className="space-y-4 mb-8">
          {tripHighlights.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-[#00A63E] mt-1" size={18} />
              <span className="font-manrope font-[600] text-[17px] text-[#7D7D7D]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* EXPERIENCES */}
        <h3 className="font-manrope font-[700] text-[26px] text-[#001917] mb-6">
          Must-Try Experiences
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((item, i) => (
            <div key={i} className="bg-[#001917] rounded-xl p-6">
              <h4 className="mb-2 font-manrope font-[600] text-[19px] text-[#E6FDBE]">
                {item.title}
              </h4>
              <p className="font-manrope font-[400] text-[15px] text-white leading-relaxed">
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

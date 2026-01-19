import { CheckCircle, XCircle } from "lucide-react";

function Inclusions() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      
      <div className="grid md:grid-cols-2 gap-10 relative">
        
        {/* Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-gray-200" />

        {/* LEFT — INCLUDED */}
        <div>
          <h3 className="font-manrope font-[700] text-[26px] text-[#001917] mb-4">
            What’s Included
          </h3>

          <ul className="space-y-4">
            {[
              "Round-trip flights",
              "Airport transfers",
              "6 nights accommodation (4-star hotels)",
              "Daily breakfast",
              "Guided tours and entry fees",
              "Travel insurance",
              "Round-trip flights",
              "Airport transfers",
              "6 nights accommodation (4-star hotels)",
              "Daily breakfast",
              "Guided tours and entry fees",
              "Travel insurance",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-[#00A63E] mt-0.5"
                />
                <span className="text-[#001917] font-[400] text-[17px] font-inter">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — EXCLUDED */}
        <div>
          <h3 className="font-manrope font-[700] text-[26px] text-[#001917] mb-4">
            What’s Excluded
          </h3>

          <ul className="space-y-4">
            {[
              "Lunch and dinner",
              "Personal expenses",
              "Tips and gratuities",
              "Optional activities",
               "Lunch and dinner",
              "Personal expenses",
              "Tips and gratuities",
              "Optional activities",
               "Lunch and dinner",
              "Personal expenses",
              "Tips and gratuities",
              "Optional activities",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <XCircle
                  size={20}
                  className="text-[#E7000B] mt-0.5"
                />
                <span className="text-[#001917] font-[400] text-[17px] font-inter">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Inclusions;

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Faqs({
  faqs = [],
  withBackground = true,
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className={`py-20 ${
        withBackground ? "bg-[#021E1A]" : "bg-transparent"
      }`}
    >
      {/* Heading */}
      <h2
        className={`text-center font-tiempos text-[34px] font-[600]  mb-10 ${
          withBackground ? "text-white" : "text-[#001917]"
        }`}
      >
        FAQS
      </h2>

      {/* FAQ Cards */}
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="
                bg-[#002B2780]
                rounded-2xl
                px-8 py-6
                transition-all
                border border-[#0C3B33]
              "
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center text-left"
              >
               <h4
  className="
    text-[#FFFFFF]
    text-[16px]
    font-[600]
    font-manrope
    whitespace-nowrap
    overflow-hidden
    text-ellipsis
    md:whitespace-normal
    md:overflow-visible
  "
>
  {item.question}
</h4>


                <ChevronDown
                  className={`text-[#19FAEA] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DIVIDER */}
              {isOpen && (
                <div className="h-[1px] bg-[#FFFFFF0D] my-4" />
              )}

              {/* Answer */}
              {isOpen && (
               <p className="text-[#B0B0B0] font-[400] font-manrope text-[17px] leading-[28px]">
  {item.answer}
</p>

              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faqs;

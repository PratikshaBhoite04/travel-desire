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
        className={`text-center font-gloock text-4xl md:text-5xl mb-14 ${
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
                bg-[#032923]
                rounded-2xl
                px-8 py-6
                transition-all
                border border-[#0C3B33]
              "
            >
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <h4 className="text-white text-lg md:text-xl font-manrope">
                  {item.question}
                </h4>

                <ChevronDown
                  className={`text-[#19FAEA] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {isOpen && (
                <p className="mt-4 text-[#C7D4CF] text-sm md:text-base leading-relaxed">
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

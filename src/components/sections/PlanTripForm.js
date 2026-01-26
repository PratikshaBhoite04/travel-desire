function PlanTripForm() {
  return (
    <section className="bg-[#021B17] py-16 md:py-20 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <h2 className="text-center font-tiempos font-[500] leading-tight">
          <span className="
            block
            text-white
            text-[32px] sm:text-[40px] md:text-[56px]
          ">
            Plan Your Next Trip 
          </span>

          <span className="
            block
            text-[#06D5C6]
            text-[32px] sm:text-[40px] md:text-[56px]
          ">
            With Us
          </span>
        </h2>

        {/* Form */}
        <form className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

          {/* Full Name */}
          <div className="md:col-span-2">
            <label className="block text-white text-[15px] md:text-[17px] font-[600] font-manrope mb-2">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="
                w-full h-[52px] md:h-[56px]
                bg-transparent border border-[#0E3B35]
                rounded-xl px-5
                text-white font-manrope
                placeholder:text-[#B5B5B5]
                placeholder:text-[14px] md:placeholder:text-[15px]
                focus:outline-none focus:border-[#19FAEA]
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-white text-[15px] md:text-[17px] font-[600] font-manrope mb-2">
              Phone Number (Whatsapp)<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="+91 98765 43210"
              className="
                w-full h-[52px] md:h-[56px]
                bg-transparent border border-[#0E3B35]
                rounded-xl px-5
                text-white font-manrope
                placeholder:text-[#B5B5B5]
                focus:outline-none focus:border-[#19FAEA]
              "
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-white text-[15px] md:text-[17px] font-[600] font-manrope mb-2">
              Preferred Date of Travel<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="
                w-full h-[52px] md:h-[56px]
                bg-transparent border border-[#0E3B35]
                rounded-xl px-5
                text-white font-manrope
                focus:outline-none focus:border-[#19FAEA]
              "
            />
          </div>

          {/* Destination */}
          <div className="md:col-span-2">
            <label className="block text-white text-[15px] md:text-[17px] font-[600] font-manrope mb-2">
              Destination<span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <select
                defaultValue=""
                className="
                  w-full h-[52px] md:h-[56px]
                  bg-transparent border border-[#0E3B35]
                  rounded-xl px-5 pr-12
                  font-manrope text-[14px] md:text-[15px]
                  text-[#B5B5B5]
                  focus:outline-none focus:border-[#19FAEA]
                  appearance-none cursor-pointer
                "
                onChange={(e) => {
                  e.target.classList.remove("text-[#B5B5B5]");
                  e.target.classList.add("text-white");
                }}
              >
                <option value="" disabled hidden>
                  Select Destination
                </option>
                <option className="text-black">Rajasthan</option>
                <option className="text-black">Kerala</option>
                <option className="text-black">Himachal</option>
              </select>

              <svg
                className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                width="14"
                height="8"
                viewBox="0 0 14 8"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#B5B5B5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* PAX */}
          <div className="md:col-span-2">
            <label className="block text-white text-[15px] md:text-[17px] font-[600] font-manrope mb-2">
              No of PAX (People or Passengers)<span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <select
                defaultValue=""
                className="
                  w-full h-[52px] md:h-[56px]
                  bg-transparent border border-[#0E3B35]
                  rounded-xl px-5 pr-12
                  font-manrope text-[14px] md:text-[15px]
                  text-[#B5B5B5]
                  focus:outline-none focus:border-[#19FAEA]
                  appearance-none cursor-pointer
                "
                onChange={(e) => {
                  e.target.classList.remove("text-[#B5B5B5]");
                  e.target.classList.add("text-white");
                }}
              >
                <option value="" disabled hidden>
                  Select travel type
                </option>
                <option className="text-black">1–2</option>
                <option className="text-black">3–5</option>
                <option className="text-black">6+</option>
              </select>

              <svg
                className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                width="14"
                height="8"
                viewBox="0 0 14 8"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#B5B5B5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="md:col-span-2 text-[12px] md:text-[13px] font-inter text-[#717171]">
            By submitting this form, you agree to our privacy policy and terms of service
          </p>

          {/* Button */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
           <button type="submit" className="bg-[#06D5C6] text-[#033733] px-12 py-3 rounded-full font-[300] text-[17px] font-manrope hover:opacity-90 transition" > Send Inquiry Now </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default PlanTripForm;


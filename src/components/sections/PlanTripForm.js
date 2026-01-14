function PlanTripForm() {
  return (
    <section className="bg-[#021E1A] py-20 px-4 md:px-8 lg:px-0">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-center font-gloock text-[36px] md:text-[44px] lg:text-[52px] font-normal text-white">
          Plan Your <span className="text-[#19FAEA]">Next Trip</span> With Us
        </h2>

        {/* Form */}
        <form className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

          {/* Full Name */}
          <div className="md:col-span-2">
            <label className="block text-white text-sm mb-2">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-transparent border border-[#0E3B35] rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#19FAEA]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-white text-sm mb-2">
              Phone Number (Whatsapp)<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="+91 98765 43210"
              className="w-full bg-transparent border border-[#0E3B35] rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#19FAEA]"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-white text-sm mb-2">
              Preferred Date of Travel<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full bg-transparent border border-[#0E3B35] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#19FAEA]"
            />
          </div>

          {/* Destination */}
          <div className="md:col-span-2">
            <label className="block text-white text-sm mb-2">
              Destination<span className="text-red-500">*</span>
            </label>
            <select
              className="w-full bg-transparent border border-[#0E3B35] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#19FAEA]"
            >
              <option className="text-black">Select Destination</option>
              <option className="text-black">Rajasthan</option>
              <option className="text-black">Kerala</option>
              <option className="text-black">Himachal</option>
            </select>
          </div>

          {/* Pax */}
          <div className="md:col-span-2">
            <label className="block text-white text-sm mb-2">
              No of PAX (People or Passengers)<span className="text-red-500">*</span>
            </label>
            <select
              className="w-full bg-transparent border border-[#0E3B35] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#19FAEA]"
            >
              <option className="text-black">Select travel type</option>
              <option className="text-black">1–2</option>
              <option className="text-black">3–5</option>
              <option className="text-black">6+</option>
            </select>
          </div>

          {/* Disclaimer */}
          <p className="md:col-span-2 text-xs text-gray-400 mt-2">
            By submitting this form, you agree to our privacy policy and terms of service
          </p>

          {/* Button */}
          <div className="md:col-span-2 flex justify-center md:justify-end mt-6">
            <button
              type="submit"
              className="bg-[#19FAEA] text-black px-10 py-4 rounded-full font-medium hover:opacity-90 transition"
            >
              Send Inquiry Now
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default PlanTripForm;

import man from "../../assets/images/man.png";

function Trips() {
  return (
    <section className="bg-[#F9FDEB] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-tiempos text-[#0F2F24]">
            Trips, built around you
          </h2>

          <p className="mt-4 text-[#3F5F54] font-manrope text-sm md:text-base">
            Every traveler is different. We design personalised trips based on your interests,
            pace, and budget – so your journey feels truly yours.
          </p>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:grid grid-cols-2 items-start mt-20 gap-12">

          {/* Left Image */}
          <div>
            <img
              src={man}
              alt="Traveler"
              className="max-w-md"
            />
          </div>

          {/* Right Card (slightly upward) */}
          <div className="bg-[#E9F9C9] rounded-2xl p-8 max-w-md ml-auto -mt-16">
            <h3 className="text-xl font-semibold text-[#0F2F24]">
              Travel at your pace
            </h3>

            <p className="mt-3 text-sm font-manrope text-[#3F5F54]">
              No rushed checklists or forced stops. Explore comfortably, your way.
            </p>
          </div>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="md:hidden mt-16 flex flex-col items-center gap-6">

          <img
            src={man}
            alt="Traveler"
            className="max-w-xs"
          />

          {/* Card 1 */}
          <div className="bg-[#E9F9C9] rounded-2xl p-6 w-full">
            <h3 className="font-semibold text-[#0F2F24]">
              Travel at your pace
            </h3>
            <p className="mt-2 text-sm font-manrope text-[#3F5F54]">
              No rushed checklists or forced stops. Explore comfortably, your way.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#E9F9C9] rounded-2xl p-6 w-full">
            <h3 className="font-semibold text-[#0F2F24]">
              Smarter use of your budget
            </h3>
            <p className="mt-2 text-sm font-manrope text-[#3F5F54]">
              We focus on experiences that matter to you – and cut the rest.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#E9F9C9] rounded-2xl p-6 w-full">
            <h3 className="font-semibold text-[#0F2F24]">
              Human expertise, local insights
            </h3>
            <p className="mt-2 text-sm font-manrope text-[#3F5F54]">
              Real travel experts design your trip, adding experiences you won’t find online.
            </p>
          </div>

          {/* Button */}
          <button className="mt-6 border border-cyan-400 text-cyan-500 px-8 py-3 rounded-full text-sm">
           Send Inquiry Now!
          </button>
        </div>

      </div>
    </section>
  );
}

export default Trips;

import man from "../../assets/images/man.png";
import useScrollReveal from "../../Hooks/useScrollReveal";


function Trips() {

  /// Desktop cards
const [deskCard1Ref, deskCard1Visible] = useScrollReveal();
const [deskCard2Ref, deskCard2Visible] = useScrollReveal();
const [deskCard3Ref, deskCard3Visible] = useScrollReveal();

// Mobile cards
const [mobCard1Ref, mobCard1Visible] = useScrollReveal();
const [mobCard2Ref, mobCard2Visible] = useScrollReveal();
const [mobCard3Ref, mobCard3Visible] = useScrollReveal();

// Button animations
const [deskBtnRef, deskBtnVisible] = useScrollReveal();
const [mobBtnRef, mobBtnVisible] = useScrollReveal();




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
<div className="flex flex-col gap-6 ml-auto -mt-16 max-w-md">

  {/* Desktop Card 1 */}
  <div
    ref={deskCard1Ref}
    className={`bg-[#E9F9C9] rounded-2xl p-8
      transition-all duration-700
      ${deskCard1Visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"}
    `}
  >
    <h3 className="text-xl font-semibold text-[#0F2F24]">
      Travel at your pace
    </h3>
    <p className="mt-3 text-sm text-[#3F5F54]">
      No rushed checklists or forced stops. Explore comfortably, your way.
    </p>
  </div>

  {/* Desktop Card 2 */}
  <div
    ref={deskCard2Ref}
    className={`bg-[#E9F9C9] rounded-2xl p-8
      transition-all duration-700 delay-150
      ${deskCard2Visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"}
    `}
  >
    <h3 className="text-xl font-semibold text-[#0F2F24]">
      Smarter use of your budget
    </h3>
    <p className="mt-3 text-sm text-[#3F5F54]">
      We focus on experiences that matter to you – and cut the rest.
    </p>
  </div>

  {/* Desktop Card 3 */}
  <div
    ref={deskCard3Ref}
    className={`bg-[#E9F9C9] rounded-2xl p-8
      transition-all duration-700 delay-300
      ${deskCard3Visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"}
    `}
  >
    <h3 className="text-xl font-semibold text-[#0F2F24]">
      Human expertise, local insights
    </h3>
    <p className="mt-3 text-sm text-[#3F5F54]">
      Real travel experts design your trip, adding experiences you won’t find online.
    </p>
  </div>

 <button
  ref={deskBtnRef}
  className={`self-end bg-[#19FAEA] text-black px-8 py-3 rounded-full text-sm font-small
    transition-all duration-700
    ${deskBtnVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6"}
    hover:bg-[#19FAEA]
  `}
>
  Send Inquiry Now!
</button>



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
         <div
  ref={mobCard1Ref}
  className={`bg-[#E9F9C9] rounded-2xl p-6 w-full
    transition-all duration-700
    ${mobCard1Visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"}
  `}
>

            <h3 className="font-semibold text-[#0F2F24]">
              Travel at your pace
            </h3>
            <p className="mt-2 text-sm font-manrope text-[#3F5F54]">
              No rushed checklists or forced stops. Explore comfortably, your way.
            </p>
          </div>

          {/* Card 2 */}
         <div
  ref={mobCard2Ref}
  className={`bg-[#E9F9C9] rounded-2xl p-6 w-full
    transition-all duration-700 delay-150
    ${mobCard2Visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"}
  `}
>

            <h3 className="font-semibold text-[#0F2F24]">
              Smarter use of your budget
            </h3>
            <p className="mt-2 text-sm font-manrope text-[#3F5F54]">
              We focus on experiences that matter to you – and cut the rest.
            </p>
          </div>

          {/* Card 3 */}
          <div
  ref={mobCard3Ref}
  className={`bg-[#E9F9C9] rounded-2xl p-6 w-full
    transition-all duration-700 delay-300
    ${mobCard3Visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"}
  `}
>

            <h3 className="font-semibold text-[#0F2F24]">
              Human expertise, local insights
            </h3>
            <p className="mt-2 text-sm font-manrope text-[#3F5F54]">
              Real travel experts design your trip, adding experiences you won’t find online.
            </p>
          </div>

         <button
  ref={mobBtnRef}
  className={`border bg-[#19FAEA] text-black px-8 py-3 rounded-full text-sm
    transition-all duration-700
    ${mobBtnVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6"}
  `}
>
  Send Inquiry Now!
</button>

        </div>

      </div>
    </section>
  );
}

export default Trips;

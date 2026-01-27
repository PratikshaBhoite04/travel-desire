import { useState } from "react";
import man from "../../assets/images/man.png";
import hoverPng from "../../assets/images/bird - Copy.png";
import useScrollReveal from "../../Hooks/useScrollReveal";
import TripsCTA from "../shared/TripsCTA";







function Trips() {

  const [hovered, setHovered] = useState(false);
const [animating, setAnimating] = useState(false);


const [imageRef, imageVisible] = useScrollReveal(0.35);

  /// Desktop cards
const [deskCard1Ref, deskCard1Visible] = useScrollReveal(0.3);
const [deskCard2Ref, deskCard2Visible] = useScrollReveal(0.3);
const [deskCard3Ref, deskCard3Visible] = useScrollReveal(0.3);

// Mobile cards
const [mobCard1Ref, mobCard1Visible] = useScrollReveal(0.3);
const [mobCard2Ref, mobCard2Visible] = useScrollReveal(0.3);
const [mobCard3Ref, mobCard3Visible] = useScrollReveal(0.3);


// Button animations
const [deskBtnRef, deskBtnVisible] = useScrollReveal(0.4);
const [mobBtnRef, mobBtnVisible] = useScrollReveal(0.4);



  return (
    <section className="bg-[#F9FDEB] py-20">
      <div className="max-w-7xl mx-auto px-6">
{/* Heading */}
<div className="text-center max-w-3xl mx-auto">
  {/* DESKTOP */}
  <h2 className="hidden md:block text-4xl md:text-5xl font-tiempos text-[#0F2F24]">
    Trips, built around you
  </h2>

  <p className="hidden md:block mt-4 text-[#3F5F54] font-manrope text-sm md:text-base">
    Every traveler is different. We design personalised trips based on your interests,
    pace, and budget – so your journey feels truly yours.
  </p>

  {/* MOBILE */}
  <h2 className="md:hidden font-tiempos text-[34px] font-[500]  leading-[33px] text-[#0F2F24]">
    Trips, built around you
  </h2>

  <p className="md:hidden mt-3 mx-auto max-w-[320px] text-[14px] leading-[22px] text-[#3F5F54] font-manrope">
    Every traveler is different. We design personalised trips based on your interests,
    pace, and budget – so your journey feels truly yours.
  </p>
</div>


        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:grid grid-cols-2 items-start mt-20 gap-12">

          {/* Left Image */}
          <div>
           <img
  ref={imageRef}
  src={man}
  alt="Traveler"
  className={`
    w-[520px] max-w-none
    transition-all duration-700 ease-out
    ${imageVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-12"}
  `}
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

<div ref={deskBtnRef} className="self-end">
<TripsCTA className="w-[230px] h-[56px] self-end" />


</div>







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
  className={`border bg-[#06D5C6] text-black px-8 py-3 rounded-full text-sm
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

import Navbar from "../../components/shared/Navbar";

import teamHero from "../../assets/images/team.png";
import founder from "../../assets/images/founder.png";
import journeyImg from "../../assets/images/office.png";
import frameBackground from "../../assets/images/frameBackground.png";

import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team2.png";
import team5 from "../../assets/images/team5.png";
import team6 from "../../assets/images/team6.png";
import teamM2 from "../../assets/images/teamM2.png";
import teamM3 from "../../assets/images/teamM3.png";
import quotes from "../../assets/images/quotes.png"
import temple2 from "../../assets/images/temple2.png"
import office from "../../assets/images/office.png"
import office2 from "../../assets/images/office2.png"
import headerLines from "../../assets/images/header-lines.png";
import OurAchievements from "../about/ourAchivement";
import OurJourney from "./OurJourney";
import { useRef } from "react";


/* ===== SVG ARROWS ===== */
const ArrowRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      stroke="#001917"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowLeftIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M19 12H5M5 12L11 6M5 12L11 18"
      stroke="#001917"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MobileTeamSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:hidden">

      {/* Scroll Cards */}
<div
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-6 px-4 snap-x snap-mandatory"
>

        {[team1, team2, teamM3, teamM2, teamM3].map((img, index) => (
        <div
  key={index}
  className="min-w-full bg-[#F1FFD8] rounded-[24px] p-6 flex-shrink-0 snap-center"
>

            <div className="overflow-hidden rounded-[20px] mb-4">
              <img
                src={img}
                alt="Team Member"
                className="w-full h-[260px] object-cover"
              />
            </div>

            <h4 className="font-manrope font-semibold text-[20px] text-[#121212]">
              Lucas Henderson
            </h4>

            <p className="font-manrope font-medium text-[14px] text-[#656565]">
              Project Lead
            </p>
          </div>
        ))}
      </div>

{/* ARROWS */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            className="h-11 px-6 rounded-full bg-[#E7FF3033] flex items-center justify-center"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="h-11 px-6 rounded-full bg-[#E7FF30] flex items-center justify-center"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

  );
};


function About() {
  
    return (
        <>
            <Navbar />



            {/* ================= HERO ================= */}
   <section className="relative pt-16 md:pt-20 bg-[#001917] overflow-hidden">
             <img
          src={headerLines}
          alt=""
          className="pointer-events-none absolute top-0 right-0 h-full w-auto opacity-90"
        />
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-8 pb-20 md:pb-23 flex items-end">
          <h1 className="font-tiempos text-[52px] font-[600] md:text-[52px] leading-[40px] md:leading-[62px] font-semibold text-white  translate-y-9 md:translate-y-12">
            About <span className="text-[#1EEBD9]">Us</span>
          </h1>
        </div>
    
      </section>

            {/* ================= HERO IMAGE ================= */}
<section className="bg-white">
  <div className="block md:hidden rounded-[10px] overflow-hidden">
    <img
      src={team6}
      alt="Our Team"
      className="w-full h-[380px] object-cover"
    />
  </div>

  {/* Desktop */}
  <img
    src={team5}
    alt="Our Team"
    className="hidden md:block w-full h-[520px] object-cover"
  />
</section>


<section className="bg-white py-24 mb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <h2 className="font-manrope font-[500]  text-[34px] md:text-[28] leading-[33px] text-[#121212]">
            Our Mission
          </h2>

          <p className="font-manrope font-[500] text-[15px] md:text-[18px] leading-[24.46px] text-[#717171]">
           At Travel Desire, our mission is to create customized tour packages that transform travel dreams into unforgettable journeys.
 As a trusted travel agency in India, we focus on delivering seamless domestic and international holidays with complete comfort and care.
 Every itinerary is thoughtfully planned to match your destination, budget, and travel style.
 Because we believe the best holiday experiences are built on trust, personalization, and attention to detail.

          </p>
        </div>
      </section>



{/* ================= FOUNDER QUOTE ================= */}
<section
  className="relative overflow-hidden py-12 md:py-24 -mt-20"
  style={{
    backgroundColor: "#FAFFF1",
    backgroundImage: `url(${frameBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundSize: "contain",
  }}
>
  <div className="relative max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20
items-start md:items-center
">

  {/* LEFT CONTENT */}
  <div className="max-w-[640px] order-1 md:order-1">
    <img
      src={quotes}
      alt="quote"
      className="w-[64px] h-[64px] mb-6"
    />
      
    <p
      className="
        font-tiempos
        font-[500]
        text-[26px] md:text-[46.69px]
        leading-[30px] md:leading-[45.56px]
        text-[#121212]
        max-w-[604px]
      "
    >
      “When someone chooses us as their travel partner, they’re trusting us with their memories. That responsibility drives us to plan every holiday with care, honesty, and passion.”

    </p>

    {/* Desktop Only Name Block */}
    <div className="hidden md:block">
      <div className="h-[56px] mt-[70px]" />

      <p className="font-manrope font-medium text-[30.81px] leading-[50.56px] text-[#121212]">
        Mr. Swapnil Sawant
      </p>

   <p className="mt-1">
  <span className="font-manrope text-[16px] md:text-[23px] text-[#7D7D7D] font-light">
    Founder,
  </span>{" "}
  <span className="font-manrope text-[16px] md:text-[23px] text-[#1C3627] font-light">
    & Managing Director
  </span>
</p>
    </div>
  </div>

  {/* IMAGE CARD */}
  <div className="flex justify-end order-2 md:order-2">
    <img
      src={founder}
      alt="Founder"
      className="w-full object-contain"
    />
  </div>

  {/* Mobile Only Name Block (Below Image) */}
 <div className="block md:hidden order-3 px-6">
  <p className="font-manrope font-medium text-[20px] text-[#121212]">
    Mr.Swapnil Sawant
  </p>

<p className="mt-1">
  <span className="font-manrope text-[16px] md:text-[23px] text-[#7D7D7D] font-light">
    Founder,
  </span>{" "}
  <span className="font-manrope text-[16px] md:text-[23px] text-[#1C3627] font-light">
   & Managing Director
  </span>
</p>


</div>


</div>

  </div>
</section>




            {/* ================= OUR JOURNEY ================= */}

<OurJourney />

{/* ================= WHAT DRIVES US ================= */}
<section className="bg-white py-2 md:py-15">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-10 md:mb-14">
      <h2 className="font-tiempos font-medium text-[36px] md:text-[56.56px] leading-tight md:leading-[56.56px] mb-5">
        What Drives <span className="text-[#1EEBD9]">Us?</span>
      </h2>

      <p className="font-manrope font-medium text-[14px] md:text-[15.4px] leading-relaxed text-[#717171] max-w-[620px] mx-auto">
        Our core values guide everything we do and define who we are as a company
      </p>
    </div>

    {/* GRID WRAPPER */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

      {/* LEFT AREA (Cards + Image for mobile ordering) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2">

        {/* Card 1 */}
        <div className="bg-[#001917] rounded-[15px] px-8 pt-6 pb-5 order-1">
            <div className="md:translate-y-6 translate-y-6">
          <h4 className="font-tiempos text-[26.11px] leading-[36.07px] text-[#D5FB93] mb-2">
            Personalised Holiday Planning
          </h4>
          <p className="font-manrope text-[17px] md:text[19px] leading-[26.28px] text-white pb-6 md:pb-0">
            We specialise in customised domestic and international tour packages designed around your preferences, budget, and pace of travel.

          </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#001917] rounded-[15px] px-8 pt-6 pb-5 order-2">
             <div className="md:translate-y-6 translate-y-6">
          <h4 className="font-tiempos text-[26.11px] leading-[36.07px] text-[#D5FB93] mb-2">
           End-to-End Travel Solutions
          </h4>
          <p className="font-manrope text-[17px] md:text[19px] leading-[26.28px] text-white pb-6 md:pb-0">
          From air ticketing, hotel bookings, visas, passport assistance, and travel insurance, we manage everything — so you travel stress-free.
          </p>
            </div>
        </div>

        {/* IMAGE (Now inside grid so ordering works) */}
        <div className="order-3 sm:col-span-2 md:hidden h-[300px]">
          <img
            src={temple2}
            alt="Our Values"
            className="w-full h-full object-cover rounded-[18px]"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-[#001917] rounded-[15px] px-8 pt-6 pb-5 order-4">
             <div className="md:translate-y-6 translate-y-6">
          <h4 className="font-tiempos text-[26.11px] leading-[36.07px] text-[#D5FB93] mb-2">
             Global Network, Local Expertise
          </h4>
          <p className="font-manrope text-[17px] md:text[19px] leading-[26.28px] text-white pb-6 md:pb-0">
            With strong partnerships across top destinations worldwide, we offer reliable international holiday planning backed by trusted local partners.

          </p>
            </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#001917] rounded-[15px] px-8 pt-6 pb-5 order-5">
             <div className="md:translate-y-6 translate-y-6">
          <h4 className="font-tiempos text-[26.11px] leading-[36.07px] text-[#D5FB93] mb-2">
          Experiences That Matter
          </h4>
          <p className="font-manrope text-[17px] md:text[19px] leading-[26.28px] text-white pb-6 md:pb-0">
          Whether it’s a family vacation, honeymoon package, offbeat holiday, or luxury international tour, we focus on meaningful experiences — not just itineraries.
          </p>
            </div>
        </div>

      </div>

      {/* DESKTOP IMAGE (Unchanged layout) */}
      <div className="hidden md:block h-full">
        <img
          src={temple2}
          alt="Our Values"
          className="w-full h-full object-cover rounded-[18px]"
        />
      </div>

    </div>
  </div>
</section>


{/* ================= MEET OUR TEAM ================= */}
<section className="bg-[#FFFFFF] py-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    {/* ===== Heading ===== */}
    <div className="text-center mb-16 space-y-3">
      <h2 className="font-tiempos font-medium text-[36px] md:text-[54.56px] leading-tight md:leading-[54.56px] text-[#0F2F24]">
        Meet our <span className="text-[#1EEBD9]">Team</span>
      </h2>

      <p className="font-manrope font-medium text-[14px] md:text-[15.4px] leading-[24px] md:leading-[26.11px] text-[#717171] max-w-[620px] mx-auto">
        Our core values guide everything we do and define who we are as a company
      </p>
    </div>

    {/* ===== MOBILE SLIDER ===== */}
    <MobileTeamSlider />

    {/* ===== DESKTOP GRID ===== */}
    <div className="hidden md:grid md:grid-cols-3 gap-8">
      {[team1, team2, teamM3, teamM2, teamM3, team3, team1, team2, teamM3].map(
        (img, index) => {
          const isMiddle = index % 3 === 1;

          return (
            <div
              key={index}
              className="bg-[#F1FFD8] rounded-[24px] p-6 flex flex-col"
            >
              {isMiddle && (
                <div className="mb-4">
                  <h4 className="font-manrope font-semibold text-[23.11px] leading-[31.33px] text-[#121212]">
                    Lucas Henderson
                  </h4>
                  <p className="font-manrope font-medium text-[15.4px] leading-[26.11px] text-[#656565]">
                    Project Lead
                  </p>
                </div>
              )}

              <div className="overflow-hidden rounded-[20px] mb-4">
                <img
                  src={img}
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>

              {!isMiddle && (
                <>
                  <h4 className="font-manrope font-semibold text-[23.11px] leading-[31.33px] text-[#121212]">
                    Lucas Henderson
                  </h4>
                  <p className="font-manrope font-medium text-[15.4px] leading-[26.11px] text-[#656565]">
                    Project Lead
                  </p>
                </>
              )}
            </div>
          );
        }
      )}
    </div>

  </div>
</section>

            {/* ================= JOIN OUR TEAM ================= */}


  {/* KEYFRAMES */}
  {/* ================= JOIN OUR TEAM ================= */}
<section className="bg-[#F6FAE8] pt-20 pb-0 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

    {/* HEADING GROUP */}
    <div className="flex flex-col items-center gap-[12px]">
      <h2
        className="
          font-tiempos
          font-medium
          text-[56.56px]
          leading-[56.56px]
          text-[#0F2F24]
          m-0
          p-0
        "
      >
        Join  <span className="text-[#1EEBD9]">our Team</span>
      </h2>

      <p
        className="
          font-manrope
          font-medium
          text-[17.4px]
          leading-[26.11px]
          text-[#717171]
          max-w-[820px]
          m-0
          p-0
        "
      >
        Join a team of dreamers pushing the boundaries of what’s possible in
        making travel experience better
      </p>
    </div>

    {/* BUTTON */}
    <button
      className="
        mt-8
        h-[48px]
        px-12
        rounded-full
        bg-[#19FAEA]
        font-manrope
        font-regular
        text-[17.4px]
        leading-[21.75px]
        tracking-[-0.16px]
        text-[#001917]
        hover:opacity-90
        transition
      "
    >
      Apply Now
    </button>
  </div>

  {/* AUTO SCROLL IMAGES — NO EXTRA SPACE BELOW */}
  <div className="relative mt-16 mb-0 w-full overflow-hidden">
    <div className="flex w-max animate-marquee gap-2 px-6 pb-0">
      {[office, office2, office, office2, office, office2].map((img, i) => (
        <div
          key={i}
          className="w-[280px] h-[200px] md:w-[420px] md:h-[260px] flex-shrink-0"
        >
          <img
            src={img}
            alt="Team"
            className="w-full h-full object-cover rounded-[8px]"
          />
        </div>
      ))}
    </div>
  </div>
</section>
  {/* <OurAchievements /> */}

  <style>
    {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
    `}
  </style>


        </>
    );
}

export default About;
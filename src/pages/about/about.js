import Navbar from "../../components/shared/Navbar";

import teamHero from "../../assets/images/team.png";
import founder from "../../assets/images/founder.png";
import journeyImg from "../../assets/images/office.png";
import frameBackground from "../../assets/images/frameBackground.png";

import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team2.png";
import teamM from "../../assets/images/teamM.png";
import teamM2 from "../../assets/images/teamM2.png";
import teamM3 from "../../assets/images/teamM3.png";
import quotes from "../../assets/images/quotes.png"
import ourValues from "../../assets/images/bg.jpg"
import office from "../../assets/images/office.png"
import office2 from "../../assets/images/office2.png"
import headerLines from "../../assets/images/header-lines.png";
import OurAchievements from "../about/ourAchivement";
import OurJourney from "./OurJourney";


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
         <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-4 md:pt-10 pb-12 md:pb-24 flex items-end">
          <h1 className="font-tiempos text-[52px] font-[600] md:text-[52px] leading-[40px] md:leading-[62px] font-semibold text-white  translate-y-5 md:translate-y-12">
            About <span className="text-[#1EEBD9]">Us</span>
          </h1>
        </div>
    
      </section>

            {/* ================= HERO IMAGE ================= */}
            <section className="bg-white">
                <img
                    src={teamHero}
                    alt="Our Team"
                    className="w-full h-[260px] md:h-[520px] object-cover"
                />
            </section>

<section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <h2 className="font-manrope font-medium  font-medium text-[33px] leading-[33px] text-[#121212]">
            Our Mission
          </h2>

          <p className="font-manrope font-medium text-[15.58px] leading-[30.46px] text-[#717171]">
            Founded in 2010, tripdesire began with a simple vision: to make travel
            accessible, memorable, and hassle-free for everyone. What started as
            a small travel agency has grown into a trusted name in the travel
            industry, serving over 10,000 happy travelers across India and beyond.
          </p>
        </div>
      </section>



{/* ================= FOUNDER QUOTE ================= */}
<section
  className="relative overflow-hidden py-24"
  style={{
    backgroundColor: "#F6FAE8",
    backgroundImage: `url(${frameBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundSize: "contain",
  }}
>
  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

      {/* ================= LEFT CONTENT ================= */}
      <div className="max-w-[640px]">
        <img
          src={quotes}
          alt="quote"
          className="w-[64px] h-[64px] mb-8"
        />

        <p
          className="
            font-tiempos
            font-normal
            text-[45.69px]
            leading-[56.56px]
            text-[#121212]
            max-w-[604px]
          "
        >
          It’s not just a trip for us, it is a whole experience. It’s not just
          a trip for us, it is a whole experience
        </p>

        {/* Exact Figma spacing */}
        <div className="h-[56px]" />

        <p className="font-manrope font-medium text-[30.81px] leading-[50.56px] text-[#121212]">
          Mrs. Satya Murti
        </p>

        <p className="font-manrope font-light text-[15.93px] leading-[15.81px] text-[#717171] mt-1">
          Founder, TravelDesire
        </p>
      </div>

      {/* ================= RIGHT IMAGE CARD ================= */}
      <div className="flex justify-end">
        <div
          className="
           
          "
        >
          <img
            src={founder}
            alt="Founder"
            className="
              w-full
              h-full
              object-contain
            "
          />
        </div>
      </div>

    </div>
  </div>
</section>




            {/* ================= OUR JOURNEY ================= */}
{/* ================= OUR JOURNEY ================= */}
{/* ================= OUR JOURNEY ================= */}
{/* ================= OUR JOURNEY ================= */}


<OurJourney />



{/* ================= WHAT DRIVES US ================= */}
{/* ================= WHAT DRIVES US ================= */}
<section className="bg-white py-12 md:py-20">
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

    {/* Content Grid */}
    {/* On mobile, we use a single column flex/grid and use 'order' to rearrange */}
    <div className="flex flex-col md:grid md:grid-cols-3 gap-6 items-stretch">

      {/* LEFT CONTENT AREA: Using a nested grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2 order-1 md:order-none">
        
        {/* Card 1 - Order 1 on mobile */}
        <div className="bg-[#001917] rounded-[18px] px-8 pt-10 pb-6 order-1">
          <h4 className="font-tiempos font-regular text-[24.11px] leading-[36.07px] text-[#D5FB93] mb-2">
            Customer First
          </h4>
          <p className="font-manrope font-regular text-[17.58px] leading-[26.28px] text-white">
            Your satisfaction and happiness are at the core of everything we do
          </p>
        </div>

        {/* Card 2 - Order 2 on mobile */}
        <div className="bg-[#001917] rounded-[18px] px-8 pt-10 pb-6 order-2">
          <h4 className="font-tiempos font-regular text-[24.11px] leading-[36.07px] text-[#D5FB93] mb-2">
            Excellence
          </h4>
          <p className="font-manrope font-regular text-[17.58px] leading-[26.28px] text-white">
            Your satisfaction and happiness are at the core of everything we do
          </p>
        </div>

        {/* Card 3 - Order 4 on mobile (after image) */}
        <div className="bg-[#001917] rounded-[18px] px-8 pt-10 pb-6 order-4 md:order-none">
          <h4 className="font-tiempos font-regular text-[24.11px] leading-[36.07px] text-[#D5FB93] mb-2">
            Innovation
          </h4>
          <p className="font-manrope font-regular text-[17.58px] leading-[26.28px] text-white">
            Your satisfaction and happiness are at the core of everything we do
          </p>
        </div>

        {/* Card 4 - Order 5 on mobile (after image) */}
        <div className="bg-[#001917] rounded-[18px] px-8 pt-10 pb-6 order-5 md:order-none">
          <h4 className="font-tiempos font-regular text-[24.11px] leading-[36.07px] text-[#D5FB93] mb-2">
            Trust
          </h4>
          <p className="font-manrope font-regular text-[17.58px] leading-[26.28px] text-white">
            Your satisfaction and happiness are at the core of everything we do
          </p>
        </div>

      </div>

      {/* RIGHT IMAGE - Order 3 on mobile (shows between card 2 and 3) */}
      <div className="order-3 md:order-none h-[300px] md:h-full">
        <img
          src={ourValues}
          alt="Our Values"
          className="w-full h-full object-cover rounded-[18px]"
        />
      </div>

    </div>
  </div>
</section>


       {/* ================= MEET OUR TEAM ================= */}
{/* ================= MEET OUR TEAM ================= */}
{/* ================= MEET OUR TEAM ================= */}
<section className="bg-[#FFFFFF] py-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    {/* ===== Heading ===== */}
    <div className="text-center mb-16 space-y-3">
      <h2
        className="
          font-tiempos font-medium
          text-[54.56px] leading-[54.56px]
          text-[#0F2F24]
          mb-0
        "
      >
        Meet our <span className="text-[#1EEBD9]">Team</span>
      </h2>

      <p
        className="
          font-manrope font-medium
          text-[15.4px] leading-[26.11px]
          text-[#717171]
          max-w-[620px]
          mx-auto
        "
      >
        Our core values guide everything we do and define who we are as a company
      </p>
    </div>

    {/* ===== Team Grid ===== */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[team1, team2, teamM3, teamM2, teamM3, team3, team1, team2, teamM3].map(
        (img, index) => {
          const isMiddle = index % 3 === 1;

          return (
            <div
              key={index}
              className="
                bg-[#F1FFD8]
                rounded-[24px]
                p-6
                flex flex-col
              "
            >
              {/* ===== TOP TEXT (Middle Column Only) ===== */}
              {isMiddle && (
                <div className="mb-4">
                  <h4
                    className="
                      font-manrope font-semibold
                      text-[23.11px] leading-[31.33px]
                      text-[#121212]
                      mb-0
                    "
                  >
                    Lucas Henderson
                  </h4>

                  <p
                    className="
                      font-manrope font-medium
                      text-[15.4px] leading-[26.11px]
                      text-[#656565]
                    "
                  >
                    Project Lead
                  </p>
                </div>
              )}

              {/* ===== IMAGE ===== */}
              <div className="overflow-hidden rounded-[20px] mb-4">
                <img
                  src={img}
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ===== BOTTOM TEXT (Left & Right Columns) ===== */}
              {!isMiddle && (
                <>
                  <h4
                    className="
                      font-manrope font-semibold
                      text-[23.11px] leading-[31.33px]
                      text-[#121212]
                      mb-0
                    "
                  >
                    Lucas Henderson
                  </h4>

                  <p
                    className="
                      font-manrope font-medium
                      text-[15.4px] leading-[26.11px]
                      text-[#656565]
                    "
                  >
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
        Join our <span className="text-[#1EEBD9]">Team</span>
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
        mt-10
        h-[48px]
        px-12
        rounded-full
        bg-[#1EEBD9]
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
    <div className="flex w-max animate-marquee gap-6 px-6 pb-0">
      {[office, office2, office, office2, office, office2].map((img, i) => (
        <div
          key={i}
          className="w-[280px] h-[200px] md:w-[420px] md:h-[260px] flex-shrink-0"
        >
          <img
            src={img}
            alt="Team"
            className="w-full h-full object-cover rounded-[18px]"
          />
        </div>
      ))}
    </div>
  </div>
</section>
  <OurAchievements />

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
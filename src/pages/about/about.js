import Navbar from "../../components/shared/Navbar";

import teamHero from "../../assets/images/team.png";
import founder from "../../assets/images/founder.png";
import journeyImg from "../../assets/images/office.png";


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

function About() {
    return (
        <>
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="pt-24 bg-[#001917]">
                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-white">
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

           <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    <div className="flex items-center justify-between gap-12">

      {/* LEFT */}
      <div className="flex-1 max-w-[420px]">
        <h2 className="text-[28px] md:text-[36px] font-serif text-[#0F2F24]">
          Our Mission
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex-1 max-w-[620px]">
        <p className="text-[#5C6F68] text-[14px] md:text-[15px] leading-relaxed">
          Founded in 2010, TravelDesire began with a simple vision: to make travel
          accessible, memorable, and hassle-free for everyone. What started as a
          small travel agency has grown into a trusted name in the travel
          industry, serving over 10,000 happy travelers across India and beyond.
        </p>
      </div>

    </div>

  </div>
</section>



       {/* ================= FOUNDER QUOTE ================= */}
<section className="relative bg-[#F6FAE8] overflow-hidden py-16 md:py-24">
  
  {/* Right wave background */}
  {/* <img
    src={wavePattern}
    alt="wave background"
    className="absolute right-0 top-0 h-full object-cover opacity-60 hidden md:block"
  /> */}

  <div className="relative max-w-7xl mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div className="max-w-[520px]">
        
        {/* Quote icon */}
        <img
          src={quotes}
          alt="quote"
          className="w-16 h-16 mb-6"
        />

        {/* Quote text */}
        <p className="text-[22px] md:text-[28px] font-serif leading-snug text-[#0F2F24]">
          It’s not just a trip for us, it is a whole experience.
          It’s not just a trip for us, it is a whole experience
        </p>

        {/* Founder */}
        <div className="mt-8">
          <p className="text-[15px] font-medium text-[#0F2F24]">
            Mrs. Satya Murti
          </p>
          <p className="text-sm text-[#6B7C75]">
            Founder, TravelDesire
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end">
        <img
          src={founder}
          alt="Founder"
          className="
           w-full
      max-w-[380px]
      min-h-[320px]
      md:min-h-[520px]
      object-cover
      rounded-[28px]
          "
        />
      </div>

    </div>
  </div>
</section>


            {/* ================= OUR JOURNEY ================= */}
{/* ================= OUR JOURNEY ================= */}
<section className="py-20 bg-white">
  {/* TITLE */}
  <h2 className="text-5xl font-serif text-center mb-16">
    Our <span className="text-[#1EEBD9]">Journey</span>
  </h2>

  {/* CONTENT */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

    {/* LEFT IMAGE */}
    <img
      src={journeyImg}
      alt="Our Journey"
      className="w-full rounded-[24px] object-cover"
    />

    {/* RIGHT TIMELINE */}
    <div className="relative h-[520px] overflow-y-auto pr-4">

      {/* VERTICAL LINE */}
      <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#E6EDED]" />

      {/* TIMELINE ITEMS */}
      <ul className="relative space-y-16 pl-16">

        {/* ITEM 1 */}
        <li className="relative">
          {/* DOT ON LINE */}
          <span className="absolute left-1 top-[-] w-3 h-3 bg-[#1EEBD9] rounded-full -translate-x-1/2" />

          <span className="text-[#1EEBD9] text-sm font-medium">
            2000
          </span>

          <h4 className="mt-1 text-lg font-medium text-[#0F2F24]">
            Discover Your Desire
          </h4>

          <p className="mt-2 text-sm text-[#6B7C75] leading-relaxed">
            Browse handpicked destinations, curated itineraries, and exclusive
            experiences designed around your travel style.
          </p>
        </li>

        {/* ITEM 2 */}
        <li className="relative">
          <span className="absolute left-6 top-1 w-3 h-3 bg-[#1EEBD9] rounded-full -translate-x-1/2" />

          <span className="text-[#1EEBD9] text-sm font-medium">
            2002 – 2005
          </span>

          <h4 className="mt-1 text-lg font-medium text-[#0F2F24]">
            Expanding Horizons
          </h4>

          <p className="mt-2 text-sm text-[#6B7C75] leading-relaxed">
            Expanded into international destinations and built strong global
            travel partnerships.
          </p>
        </li>

        {/* ITEM 3 */}
        <li className="relative">
          <span className="absolute left-6 top-1 w-3 h-3 bg-[#1EEBD9] rounded-full -translate-x-1/2" />

          <span className="text-[#1EEBD9] text-sm font-medium">
            2010
          </span>

          <h4 className="mt-1 text-lg font-medium text-[#0F2F24]">
            Trusted Travel Brand
          </h4>

          <p className="mt-2 text-sm text-[#6B7C75] leading-relaxed">
            Became a trusted travel brand, serving over 10,000 happy travelers
            across India and beyond.
          </p>
        </li>

        {/* ITEM 4 */}
        <li className="relative">
          <span className="absolute left-6 top-1 w-3 h-3 bg-[#1EEBD9] rounded-full -translate-x-1/2" />

          <span className="text-[#1EEBD9] text-sm font-medium">
            2020 – Present
          </span>

          <h4 className="mt-1 text-lg font-medium text-[#0F2F24]">
            Innovation & Experience
          </h4>

          <p className="mt-2 text-sm text-[#6B7C75] leading-relaxed">
            Leveraging technology and personalization to craft seamless,
            unforgettable travel experiences.
          </p>
        </li>

      </ul>
    </div>
  </div>
</section>


{/* ================= WHAT DRIVES US ================= */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-[36px] md:text-[48px] font-serif text-[#0F2F24]">
        What Drives <span className="text-[#1EEBD9]">Us?</span>
      </h2>
      <p className="mt-3 text-[#6B7C75] text-sm md:text-base">
        Our core values guide everything we do and define who we are as a company
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

      {/* LEFT: 2x2 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2">

        {/* Card 1 */}
        <div className="bg-[#001917] rounded-[18px] p-8">
          <h4 className="text-[#C8F46A] font-serif text-xl mb-3">
            Customer First
          </h4>
          <p className="text-white/80 text-sm leading-relaxed">
            Your satisfaction and happiness are at the core of everything we do
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#001917] rounded-[18px] p-8">
          <h4 className="text-[#C8F46A] font-serif text-xl mb-3">
            Excellence
          </h4>
          <p className="text-white/80 text-sm leading-relaxed">
            Your satisfaction and happiness are at the core of everything we do
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#001917] rounded-[18px] p-8">
          <h4 className="text-[#C8F46A] font-serif text-xl mb-3">
            Innovation
          </h4>
          <p className="text-white/80 text-sm leading-relaxed">
            Your satisfaction and happiness are at the core of everything we do
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#001917] rounded-[18px] p-8">
          <h4 className="text-[#C8F46A] font-serif text-xl mb-3">
            Trust
          </h4>
          <p className="text-white/80 text-sm leading-relaxed">
            Your satisfaction and happiness are at the core of everything we do
          </p>
        </div>

      </div>

      {/* RIGHT: Image */}
      <div className="hidden md:block h-[420px]">
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
<section className="bg-[#F6FAE8] py-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-[36px] md:text-[48px] font-serif text-[#0F2F24]">
        Meet our <span className="text-[#1EEBD9]">Team</span>
      </h2>
      <p className="mt-3 text-sm text-[#6B7C75]">
        Our core values guide everything we do and define who we are as a company
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[team1, team2, teamM3, teamM2, teamM3, team3, team1, team2, teamM3].map(
        (img, index) => {
          const isMiddleColumn = index % 3 === 1;

          return (
            <div
              key={index}
              className="bg-[#F1FFD8] rounded-[24px] p-5"
            >
              {/* MIDDLE CARD → TEXT ON TOP */}
              {isMiddleColumn && (
                <div className="mb-4">
                  <h4 className="text-[16px] font-medium text-[#0F2F24]">
                    Lucas Henderson
                  </h4>
                  <p className="text-[13px] text-[#6B7C75]">
                    Project Lead
                  </p>
                </div>
              )}

              {/* IMAGE */}
              <div className="overflow-hidden rounded-[20px] mb-4">
                <img
                  src={img}
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* LEFT / RIGHT CARDS → TEXT BELOW */}
              {!isMiddleColumn && (
                <>
                  <h4 className="text-[16px] font-medium text-[#0F2F24]">
                    Lucas Henderson
                  </h4>
                  <p className="text-[13px] text-[#6B7C75]">
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
<section className="bg-[#F6FAE8] py-20 overflow-hidden">
  {/* TEXT */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
    <h2 className="text-[32px] md:text-[48px] font-serif text-[#0F2F24]">
      Join our <span className="text-[#1EEBD9]">Team</span>
    </h2>

    <p className="mt-4 text-sm md:text-base text-[#6B7C75] max-w-2xl mx-auto">
      Join a team of dreamers pushing the boundaries of what’s possible in
      making travel experience better
    </p>

    <button className="mt-8 h-[48px] px-12 rounded-full bg-[#1EEBD9] text-black text-sm font-medium hover:opacity-90 transition">
      Apply Now
    </button>
  </div>

  {/* AUTO SCROLL IMAGES */}
  <div className="relative mt-16 w-full overflow-hidden">
    <div className="flex w-max animate-marquee gap-6 px-6">
      {[office, office2, office, office2,office, office2].map(
        (img, i) => (
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
        )
      )}
    </div>
  </div>

  {/* KEYFRAMES */}
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
</section>

        </>
    );
}

export default About;

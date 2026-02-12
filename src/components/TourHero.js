import bgImage from "../assets/images/bg.jpg";

import locationIcon from "../assets/icons/location1.png";
import durationIcon from "../assets/icons/duration.png";
import calendarIcon from "../assets/icons/calendar.png";

function TourHero({ tour }) {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[520px] w-full">
        {/* Background */}
        <img
          src={tour.image || bgImage}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-end">
     <div className="
  w-full
  pb-16
  px-4 sm:px-6 md:px-16
  flex justify-between items-end
  overflow-x-hidden
">


            {/* LEFT */}
            <div className="text-white max-w-3xl">
             <h1
  className="
    font-tiempos
    font-[500]
    text-[52.21px]
    leading-[52.21px]
    tracking-[0.08px]
    text-white
     whitespace-nowrap
  "
>
  {tour.title}
</h1>


              {/* ICON ROW */}
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-3">

                <div className="flex items-center gap-3">
                  <img src={locationIcon} className="w-[21px] h-[21px]" />
                  <span className="font-manrope text-[16px] md:text-[18px]">
                    {tour.location}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <img src={durationIcon} className="w-[21px] h-[21px]" />
                  <span className="font-manrope text-[16px] md:text-[18px]">
                    {tour.days}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <img src={calendarIcon} className="w-[21px] h-[21px]" />
                  <span className="font-manrope text-[16px] md:text-[18px]">
                    Next: {tour.nextDate}
                  </span>
                </div>

              </div>
            </div>

            {/* DESKTOP BUTTON */}
            <button className="
              hidden md:block
              bg-[#19FAEA]
              text-[#001917]
              px-16 py-4
              mb-3
              rounded-full
              font-manrope text-[17px]
            ">
              Book My Trip
            </button>

          </div>
        </div>
      </section>

     
    {/* MOBILE STICKY CTA */}
<div className="md:hidden fixed bottom-0 left-0 w-full z-50 px-8 py-2 mobile-cta">
  <button
    className="
      w-full
      bg-[#19FAEA]
      text-[#001917]
      py-4
      rounded-full
      font-manrope text-[17px]
      shadow-lg
    "
  >
    Book My Trip
  </button>
</div>

    </>
  );
}

export default TourHero;

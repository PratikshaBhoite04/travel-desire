import bgImage from "../assets/images/bg.jpg";
import locationIcon from "../assets/icons/location1.png";
import durationIcon from "../assets/icons/duration.png";
import calendarIcon from "../assets/icons/calendar.png";

function TourHero({ tour }) {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[420px] md:h-[520px]">
        {/* Background */}
        <img
          src={tour.image || bgImage}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="w-full px-4 md:px-16 pb-10 md:pb-16 flex flex-col md:flex-row md:justify-between md:items-end">

            {/* LEFT CONTENT */}
            <div className="text-white w-full md:max-w-3xl">

              {/* TITLE */}
              <h1 className="
                font-tiempos
                font-[500]
                text-[32px] leading-[38px]
                md:text-[52px] md:leading-[52px]
                tracking-[0.08px]
              ">
                {tour.title}
              </h1>

              {/* ICON DETAILS */}
              <div className="flex flex-col gap-3 mt-4 md:flex-row md:gap-6">

                <div className="flex items-center gap-3">
                  <img src={locationIcon} alt="" className="w-5 h-5" />
                  <span className="font-manrope text-[14px] md:text-[18px]">
                    {tour.location}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <img src={durationIcon} alt="" className="w-5 h-5" />
                  <span className="font-manrope text-[14px] md:text-[18px]">
                    {tour.days}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <img src={calendarIcon} alt="" className="w-5 h-5" />
                  <span className="font-manrope text-[14px] md:text-[18px]">
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
              rounded-full
              font-manrope text-[17px]
              hover:bg-[#06D5C6]
              transition
            ">
              Book My Trip
            </button>

          </div>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 px-6 pb-4">
        <button
          className="
            w-full
            bg-[#19FAEA]
            text-[#001917]
            py-4
            rounded-full
            font-manrope text-[17px]
            shadow-xl
          "
        >
          Book My Trip
        </button>
      </div>
    </>
  );
}

export default TourHero;

import { useState } from "react";
import bgImage from "../../assets/images/bg.jpg";
import { Search } from "lucide-react";

function Hero() {
  const [destination, setDestination] = useState("");

  const handleSearch = () => {
    if (!destination.trim()) return;
    console.log("Searching for:", destination);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 text-center text-white">
        <div className="w-full max-w-[340px] sm:max-w-3xl">

          {/* Heading */}
          <h1
            className="
              font-tiempos font-[400] leading-[1.05]
              text-[34px]
              tracking-[-0.8px]
              sm:text-[48px] md:text-[70px]
            "
          >
            Your Desire.
            <br />
            Our Destination.
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-3
              font-manrope font-[300]
              text-white/90
              text-[14px]
              leading-[1.6]
              sm:text-[18px] md:text-[22px]
            "
          >
            Handcrafted domestic & international holidays
            <br className="sm:hidden" />
            and personalized trips
          </p>

          {/* Search Bar */}
          <div
            className="mt-6 w-full rounded-full"
            style={{
              border: "0.5px solid rgba(117,254,244,0.45)",
              outline: "0.5px solid rgba(230,253,190,0.45)",
              outlineOffset: "-0.5px",
            }}
          >
            <div
              className="
                flex items-center gap-3
                rounded-full
                px-4 py-[10px]
                backdrop-blur-md
              "
            >
              {/* Icon (hidden on very small if needed) */}
              <Search size={16} className="text-white/70 shrink-0" />

              {/* Input */}
              <input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="
                  flex-1 bg-transparent
                  text-white placeholder-white/70
                  outline-none
                  font-manrope font-[400]
                  text-[14px]
                "
              />

              {/* Mobile CTA */}
              <button
                onClick={handleSearch}
                className="
                  shrink-0
                  w-[36px] h-[36px]
                  flex items-center justify-center
                  rounded-full
                  bg-[#19FAEA]
                  text-[#033733]
                "
              >
                <Search size={16} />
              </button>

              {/* Desktop CTA */}
              <button
                onClick={handleSearch}
                className="
                  hidden md:flex
                  rounded-full
                  px-8 py-[15px]
                  bg-[#75FEF4]
                  text-[#033733]
                  font-manrope font-[300]
                  text-[17.4px]
                  leading-[21.75px]
                  tracking-[-0.16px]
                  whitespace-nowrap
                "
              >
                Search Destination
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

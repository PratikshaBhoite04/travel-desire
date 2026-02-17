import { useState } from "react";
// import bgImage from "../../assets/images/bg.jpg";
import bgVideo from "../../assets/images/TD-Video.mp4";
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
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      /> */}

      {/* Background Video */}
<video
  className="absolute inset-0 w-full h-full object-cover"
  src={bgVideo}
  autoPlay
  loop
  muted
  playsInline
/>

      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 text-center text-white">
        <div className="w-full max-w-[340px] sm:max-w-3xl">

          {/* Heading */}
        <h1
  className="
    font-tiempos font-[500] leading-[1.08]
    text-[42px]
    tracking-[-0.5px]
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
    mt-4
    font-manrope font-[500]
    text-[#FFFFFFE5]
    text-[16px]
    leading-[22px]
    sm:text-[18px]
  "
>

            Handcrafted domestic & international 
            <br className="sm:hidden" />
           holidays and personalized trips
          </p>

          {/* Search Bar */}
          <div
            className="mt-7 w-full rounded-full"
            style={{
             border: "0.3px solid rgba(117,254,244,0.45)",
             outline: "0.3px solid rgba(230,253,190,0.45)",
             outlineOffset: "-1px",
            }}
          >
<div
  className="
    flex items-center
    rounded-full
    h-[58px] md:h-[74px]
    px-4 md:px-7
    backdrop-blur-[36.98px]
    bg-white/13
  "
>

  {/* Left Icon */}
<Search size={18} className="hidden md:block text-white shrink-0" />

  {/* Input */}
  <input
    type="text"
    placeholder="Destination"
    value={destination}
    onChange={(e) => setDestination(e.target.value)}
    className="
      flex-1
      bg-transparent
      text-white placeholder-[#FFFFFF]
      outline-none
      font-manrope font-[400]
      text-[16px]
      px-3
    "
  />

  {/* Mobile CTA */}
<button
  onClick={handleSearch}
  className="
    md:hidden
    w-[42px] h-[42px]
    min-w-[42px]
    flex items-center justify-center
    rounded-full
    bg-[#19FAEA]
    text-[#033733]
    ml-2
  "
>
  <Search size={18} />
</button>


  {/* Desktop CTA */}
  <button
    onClick={handleSearch}
    className="
      hidden md:flex
      rounded-full
      px-10 py-[14px]
      bg-[#19FAEA]
      hover:bg-[#06D5C6]
      text-[#033733]
      font-manrope font-[300]
      text-[17px]
      leading-[20.75px]
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

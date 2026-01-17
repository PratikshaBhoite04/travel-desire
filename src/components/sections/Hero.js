import { useState } from "react";
import bgImage from "../../assets/images/bg.jpg";
import { Search } from "lucide-react";

function Hero() {
  const [destination, setDestination] = useState("");

  const handleSearch = () => {
    if (!destination.trim()) return;

    console.log("Searching for:", destination);

    // Example redirects:
    // window.location.href = `/search?destination=${destination}`;
    // or (Next.js) router.push(`/search/${destination}`);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  />

  <div className="absolute inset-0 bg-black/40" />

  <div className="relative z-10 flex items-center justify-center min-h-screen px-4 text-center text-white">
    <div className="w-full max-w-3xl">

      <h1 className="font-tiempos font-[400]  leading-[1.05]
        text-[36px] sm:text-[48px] md:text-[70px]">
        Your Desire. <br /> Our Destination.
      </h1>

     <p
  className="
    mt-4 font-manrope font-[300] text-white/90
    text-[16px] sm:text-[18px] md:text-[22px]
    whitespace-normal md:whitespace-nowrap
  "
>
  Handcrafted domestic & international holidays and personalized trips
</p>

{/* Search Bar */}
<div
  className="mt-8 w-full rounded-full"
  style={{
    border: "1.5px solid #75FEF4",
    outline: "1px solid #E6FDBE",
    outlineOffset: "-1.5px",
  }}
>
  <div className="flex items-center w-full rounded-full px-4 py-2 gap-2 backdrop-blur-md">

    <Search size={18} className="hidden md:block text-white/70 shrink-0" />

    <input
      type="text"
      placeholder="Destination"
      className="flex-1 min-w-0 bg-transparent text-white
        placeholder-white/70 outline-none
        font-manrope font-[300]"
    />

    {/* MOBILE ICON BUTTON */}
    <button
      onClick={handleSearch}
      className="md:hidden shrink-0
        w-[40px] h-[40px]
        flex items-center justify-center
        rounded-full bg-[#19FAEA]
        text-[#033733]"
    >
      <Search size={18} />
    </button>

    {/* DESKTOP BUTTON */}
    <button
      onClick={handleSearch}
      className="hidden md:inline-flex shrink-0
        items-center justify-center
        bg-[#19FAEA] text-[#033733]
        px-5 py-2 rounded-full
        font-manrope font-[300]
        whitespace-nowrap"
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

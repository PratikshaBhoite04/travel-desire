import bgImage from "../../assets/images/bg.jpg";


function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background (same for desktop & mobile) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 text-center text-white">
        <div className="max-w-3xl">

          <h1 className="text-4xl md:text-6xl  font-tiempos  leading-tight">
            Your Desire. <br /> Our Destination.
          </h1>

         <p className="mt-4 text-sm md:text-lg text-white/90 font-manrope">
  Handcrafted domestic & international holidays and personalized trips
</p>


          {/* Gradient border search */}
          <div className="mt-8 gradient-border">
            <div className="flex flex-col md:flex-row items-center gap-3 backdrop-blur-md rounded-full p-2">
              <input
                type="text"
                placeholder="Destination"
                className="w-full md:flex-1 bg-transparent px-4 text-white placeholder-white/70 outline-none"
              />

              <button className="w-full md:w-auto bg-cyan-400 text-black px-6 py-3 rounded-full font-medium">
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

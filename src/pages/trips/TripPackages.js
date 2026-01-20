import Navbar from "../../components/shared/Navbar";
import { useNavigate } from "react-router-dom";
import { tours } from "../../data/tours"; // ✅ single source of truth

function TripPackages() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="pt-24 bg-gradient-to-b from-[#001917] to-[#001917]/95">
        <div className="max-w-7xl mx-auto px-6 pb-20">

          <h1 className="text-4xl md:text-5xl font-serif text-white">
            Explore <span className="text-[#1EEBD9]">Trips</span>
          </h1>

          <div className="mt-10 flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex items-center flex-1 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
              <span className="text-white/60 mr-3">🔍</span>
              <input
                type="text"
                placeholder="Search Destination"
                className="bg-transparent outline-none text-white placeholder-white/50 w-full"
              />
            </div>

            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-[#D5FB93] transition">
              Plan My Trip
            </button>

            <select className="bg-transparent border border-[#1EEBD9]/40 text-[#1EEBD9] px-6 py-3 rounded-full outline-none">
              <option className="text-black">Domestic</option>
              <option className="text-black">International</option>
            </select>

            <button className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-white">
              Filters <span>⚙</span>
            </button>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.slug}
                className="rounded-3xl border border-[#E6EDED] overflow-hidden bg-white"
              >
                <div className="relative h-56">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-sm text-white">
                    <span className="text-[#D5FB93]">★</span>
                    {tour.rating}
                  </div>

                  <div className="absolute bottom-4 right-4 text-xs text-white">
                    ⏱ {tour.days}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#0F2F24]">
                    {tour.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#6B7C75]">
                    Starting from
                  </p>

                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-xl font-semibold text-[#0F2F24]">
                      {tour.price}
                    </span>

                    <button
                      onClick={() => navigate(`/tour/${tour.slug}`)}
                      className="w-14 h-10 rounded-full bg-[#1EEBD9] flex items-center justify-center hover:bg-[#D5FB93] transition"
                    >
                      ↗
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default TripPackages;

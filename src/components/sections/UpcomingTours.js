import rajasthan from "../../assets/images/rajasthan.png";
import kashmir from "../../assets/images/kashmir.png";
import manali1 from "../../assets/images/manali1.png";

const tours = [
  {
    title: "Rajasthan Heritage Tour",
    price: "₹28,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: rajasthan,
  },
  {
    title: "Kashmir Valley Escape",
    price: "₹28,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: kashmir,
  },
  {
    title: "Manali Snow Adventure",
    price: "₹28,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: manali1,
  },
];

function UpcomingTours() {
  return (
    <section className="py-15 bg-white relative z-0 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0F2F24]">
            Upcoming Tours
          </h2>
          <p className="mt-3 text-sm text-[#5C6F68] font-manrope">
            Fixed departure dates with confirmed bookings. Join fellow travelers on curated group tours.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-0">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border overflow-hidden transition relative"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />

                {/* Rating */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-sm text-white">
                  <span className="text-[#D5FB93]">★</span>
                  {tour.rating}
                </div>

                {/* Days */}
                <div className="absolute bottom-3 right-3 text-xs text-white flex items-center gap-1">
                  ⏱ {tour.days}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#0F2F24]">
                  {tour.title}
                </h3>

                <p className="mt-3 text-sm text-[#6B7C75]">
                  Starting from
                </p>

                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xl font-semibold text-[#0F2F24]">
                    {tour.price}
                  </span>

                  {/* Arrow Button */}
                  <button
                    className="
                      w-16 h-11
                      rounded-full
                      bg-[#1EEBD9]
                      flex items-center justify-center
                      transition-colors duration-300
                      hover:bg-[#D5FB93]
                      relative z-0
                    "
                  >
                    <span
                      className="
                        text-black text-lg
                        transition-transform duration-300
                        hover:rotate-45
                      "
                    >
                      ↗
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default UpcomingTours;

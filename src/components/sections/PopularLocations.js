import kashmir from "../../assets/images/kashmir.png";
import jaipur from "../../assets/images/jaipur.png";
import manali from "../../assets/images/manali.png";
import udaipur from "../../assets/images/udaipur.png";

const locations = [
  {
    title: "Jammu & Kashmir",
    desc: "Snowy mountains, peaceful valleys, and unforgettable views.",
    image: kashmir,
  },
  {
    title: "Jaipur",
    desc: "Royal palaces, pink architecture, and rich heritage.",
    image: jaipur,
  },
  {
    title: "Manali",
    desc: "Adventure, rivers, and Himalayan beauty.",
    image: manali,
  },
  {
    title: "Udaipur",
    desc: "Royal palaces, lakes, and timeless charm.",
    image: udaipur,
  },
];

// duplicate for seamless loop
const loopData = [...locations, ...locations];

function Card({ place }) {
  return (
    <div className="group relative 
  min-w-[240px] h-[230px]
  md:min-w-[360px] md:h-[300px]
  rounded-2xl overflow-hidden">

      <img
        src={place.image}
        alt={place.title}
        className="w-full h-full object-cover"
      />

      {/* Desktop hover */}
      <div className="hidden md:flex absolute inset-0 bg-[#DDF8A3]/95 opacity-0 group-hover:opacity-100 transition duration-300 p-6 flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[#0F2F24]">
            {place.title}
          </h3>
          <p className="mt-3 text-sm text-[#3F5F54]">
            {place.desc}
          </p>
        </div>

        <button className="self-end w-10 h-10 rounded-full bg-[#0F2F24] text-white flex items-center justify-center">
          →
        </button>
      </div>

      {/* Mobile content */}
      <div className="md:hidden bg-[#DDF8A3] p-4">
        <h3 className="text-base font-semibold text-[#0F2F24]">
          {place.title}
        </h3>
        <p className="text-sm text-[#3F5F54] mt-1">
          {place.desc}
        </p>
      </div>
    </div>
  );
}

function PopularLocations() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-center">
          Most Popular <span className="text-cyan-400">Locations</span>
        </h2>
      </div>

      <div className="overflow-hidden mb-6">
        <div className="flex gap-3 w-max animate-marquee-left  px-6">
          {loopData.map((place, index) => (
            <Card key={`row1-${index}`} place={place} />
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-3 w-max animate-marquee-right px-6">
          {loopData.map((place, index) => (
            <Card key={`row2-${index}`} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularLocations;

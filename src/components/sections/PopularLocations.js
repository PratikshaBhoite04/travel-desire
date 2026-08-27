import { useState } from "react";
import { useNavigate } from "react-router-dom";

const locations = [
  {
    title: "Europe",
    desc: "Explore iconic cities, Swiss Alps, historic landmarks and unforgettable European experiences.",
    image: "/images/europe/day-1.jpg",
    slug: "european-wonders-09-days",
  },

  {
    title: "Hong Kong & Macau",
    desc: "Experience vibrant city life, iconic skylines, Disneyland and Macau attractions.",
    image: "/images/hongkong/day-1.jpg",
    slug: "hongkong-and-macau",
  },

  {
    title: "Morocco",
    desc: "Discover ancient cities, the blue streets of Chefchaouen, the Sahara Desert and vibrant Marrakech.",
    image: "/images/morocco/day-1.jpg",
    slug: "morocco",
  },

  {
    title: "Bhutan",
    desc: "Experience peaceful Himalayan landscapes, ancient monasteries, scenic valleys and Bhutanese culture.",
    image: "/images/bhutan/day-1.jpg",
    slug: "bhutan-package",
  },

  {
    title: "Sri Lanka",
    desc: "Explore scenic hill country, tea plantations, beautiful beaches and vibrant Colombo.",
    image: "/images/srilanka/day-1.jpg",
    slug: "explore-srilanka",
  },

  {
    title: "Thailand",
    desc: "Discover tropical islands, beautiful beaches, exciting adventures and the best of Krabi and Phuket.",
    image: "/images/thailand/day-1.jpg",
    slug: "thailand-gateway-krabi-phuket",
  },
];

// duplicate for seamless loop
const loopData = [...locations, ...locations];

const ArrowUpRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <g transform="translate(0,2)">
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

function Card({ place }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className="
        group relative
        min-w-[240px] h-[230px]
        md:min-w-[360px] md:h-[300px]
        rounded-2xl overflow-hidden
        cursor-pointer
      "
    >
      <img
        src={place.image}
        alt={place.title}
        className="w-full h-full object-cover"
      />

      {/* Overlay: hover (desktop) + tap (mobile) */}
      <div
        className={`
          absolute inset-0
          bg-[#DDF8A3]/95
          p-6 flex flex-col justify-between
          transition duration-300

          ${active ? "opacity-100" : "opacity-0"}
          md:opacity-0 md:group-hover:opacity-100
        `}
      >
        <div>
          <h3 className="text-[28px] font-[500] text-[#0F2F24]">
            {place.title}
          </h3>

          <p className="mt-2 text-[18px] text-[#3F5F54]">
            {place.desc}
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/tour/${place.slug}`);
          }}
          className="
            self-end h-[40px] w-[56px]
            rounded-full bg-[#0F2F24]
            flex items-center justify-center
            group
          "
        >
          <ArrowUpRightIcon
            className="
              w-5 h-5 text-[#D5FB93]
              translate-y-[2px]
              translate-x-[1px]
              transition-transform duration-300
              group-hover:translate-x-[2px]
              group-hover:-translate-y-[2px]
            "
          />
        </button>
      </div>
    </div>
  );
}

function PopularLocations() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2
          className="
            font-tiempos text-center font-[500] text-[#0F2F24]
            text-[36px] leading-[36px]
            md:text-[56.56px] md:leading-[56.56px]
          "
        >
          Most Popular{" "}
          <span className="text-[#06D5C6] block md:inline">
            Locations
          </span>
        </h2>
      </div>

      {/* ROW 1 */}
      <div className="overflow-hidden mb-6">
        <div className="flex gap-3 w-max animate-marquee-left px-6">
          {loopData.map((place, index) => (
            <Card key={`row1-${index}`} place={place} />
          ))}
        </div>
      </div>

      {/* ROW 2 */}
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
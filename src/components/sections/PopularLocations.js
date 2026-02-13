import { useState } from "react";
import kashmir from "../../assets/images/kashmir.png";
import jaipur from "../../assets/images/jaipur.png";
import manali from "../../assets/images/manali.png";
import udaipur from "../../assets/images/udaipur.png";
import { useNavigate } from "react-router-dom";

const locations = [
  {
    title: "Jammu & Kashmir",
    desc: "No More ‘Lets hope the experience is good!’ Travel Desire sorted everything for us.",
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
            navigate(
              `/tour/${place.title.toLowerCase().replace(/\s+/g, "-")}`
            );
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
          className="font-tiempos text-center font-[500] text-[#0F2F24]"
          style={{ fontSize: "56.56px", lineHeight: "56.56px" }}
        >
          Most Popular{" "}
          <span className="text-[#06D5C6]">Locations</span>
        </h2>
      </div>

      <div className="overflow-hidden mb-6">
        <div className="flex gap-3 w-max animate-marquee-left px-6">
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

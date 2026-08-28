import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= UNIQUE INTERNATIONAL PACKAGES ================= */

const rowOneLocations = [
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
];

const rowTwoLocations = [
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

/*
  Duplicate ONLY for seamless marquee animation.
  Packages are unique in the original data.
*/

const loopRowOne = [...rowOneLocations, ...rowOneLocations];
const loopRowTwo = [...rowTwoLocations, ...rowTwoLocations];


/* ================= ARROW ICON ================= */

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


/* ================= CARD ================= */

function Card({ place }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const handleNavigate = (e) => {
    e.stopPropagation();
    navigate(`/tour/${place.slug}`);
  };

  return (
    <div
      onClick={() => setActive(!active)}
      className="
        group
        relative
        min-w-[260px]
        h-[240px]

        sm:min-w-[300px]
        sm:h-[260px]

        md:min-w-[360px]
        md:h-[300px]

        lg:min-w-[380px]

        rounded-2xl
        overflow-hidden
        cursor-pointer
        flex-shrink-0
      "
    >
      {/* IMAGE */}
      <img
        src={place.image}
        alt={place.title}
        className="w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div
        className={`
          absolute inset-0
          bg-[#DDF8A3]/95
          p-5 sm:p-6
          flex flex-col justify-between
          transition duration-300

          ${active ? "opacity-100" : "opacity-0"}

          md:opacity-0
          md:group-hover:opacity-100
        `}
      >
        <div>
          <h3
            className="
              text-[23px]
              sm:text-[25px]
              md:text-[28px]
              font-[500]
              text-[#0F2F24]
            "
          >
            {place.title}
          </h3>

          <p
            className="
              mt-2
              text-[15px]
              sm:text-[16px]
              md:text-[18px]
              leading-relaxed
              text-[#3F5F54]
            "
          >
            {place.desc}
          </p>
        </div>

        {/* NAVIGATION BUTTON */}
        <button
          onClick={handleNavigate}
          aria-label={`View ${place.title} package`}
          className="
            self-end
            h-[40px]
            w-[56px]
            rounded-full
            bg-[#0F2F24]
            flex
            items-center
            justify-center
            group
          "
        >
          <ArrowUpRightIcon
            className="
              w-5
              h-5
              text-[#D5FB93]
              translate-y-[2px]
              translate-x-[1px]
              transition-transform
              duration-300
              group-hover:translate-x-[2px]
              group-hover:-translate-y-[2px]
            "
          />
        </button>
      </div>
    </div>
  );
}


/* ================= POPULAR LOCATIONS ================= */

function PopularLocations() {
  return (
    <section
      className="
        py-12
        sm:py-16
        md:py-20
        bg-white
        overflow-hidden
      "
    >
      {/* HEADING */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          mb-8
          sm:mb-10
          md:mb-12
        "
      >
        <h2
          className="
            font-tiempos
            text-center
            font-[500]
            text-[#0F2F24]

            text-[36px]
            leading-[40px]

            sm:text-[44px]
            sm:leading-[48px]

            md:text-[56.56px]
            md:leading-[56.56px]
          "
        >
          Most Popular{" "}

          <span className="text-[#06D5C6] block md:inline">
            Locations
          </span>
        </h2>
      </div>


      {/* ================= ROW 1 ================= */}

      <div className="overflow-hidden mb-4 sm:mb-6">
        <div
          className="
            flex
            gap-3
            sm:gap-4
            w-max
            animate-marquee-left
            px-4
            sm:px-6
          "
        >
          {loopRowOne.map((place, index) => (
            <Card
              key={`row1-${place.slug}-${index}`}
              place={place}
            />
          ))}
        </div>
      </div>


      {/* ================= ROW 2 ================= */}

      <div className="overflow-hidden">
        <div
          className="
            flex
            gap-3
            sm:gap-4
            w-max
            animate-marquee-right
            px-4
            sm:px-6
          "
        >
          {loopRowTwo.map((place, index) => (
            <Card
              key={`row2-${place.slug}-${index}`}
              place={place}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularLocations;
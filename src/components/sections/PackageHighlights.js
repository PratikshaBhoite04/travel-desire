import ExperiencedCard from "./ExperiencedCard";

import img1 from "../../assets/images/international.png";
import img2 from "../../assets/images/domestic.png";
import img3 from "../../assets/images/adventure.png";
import img4 from "../../assets/images/international.png";

const packages = [
  {
    title: "International Trips",
    desc: "Explore exotic destinations across the globe with our curated international packages.",
    image: img1,
  },
  {
    title: "Domestic Trips",
    desc: "Discover the beauty and diversity of incredible India with our domestic tour packages.",
    image: img2,
  },
  {
    title: "Honeymoon Specials",
    desc: "Create unforgettable memories with our romantic honeymoon packages designed for couples.",
    image: img3,
  },
  // {
  //   title: "Corporate Trips",
  //   desc: "Perfectly planned corporate retreats and team outings.",
  //   image: img4,
  // },
   {
    title: "International Trips",
    desc: "Explore exotic destinations across the globe with our curated international packages.",
    image: img4,
  },
];

function PackageHighlights() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-[#0F2F24]">
          Package Highlights
        </h2>
        <p className="mt-3 text-[#6B7C75] font-manrope text-sm md:text-base">
          Fixed departure dates with confirmed bookings.
          Join fellow travelers on curated group tours.
        </p>
      </div>
<div className="relative">
  <div
    className="
      flex gap-8
      overflow-x-auto
      scroll-smooth
      no-scrollbar
      px-6 md:px-8
    "
  >
    {packages.map((item, index) => (
      <ExperiencedCard key={index} item={item} />
    ))}
  </div>
</div>

  <div className="flex justify-center gap-6 mt-10 md:hidden">
  <button className="
    w-14 h-10
    rounded-full
    bg-[#E7FF3033]
    flex items-center justify-center
  ">
    ←
  </button>

  <button className="
    w-14 h-10
    rounded-full
    bg-[#E7FF30]
    flex items-center justify-center
  ">
    →
  </button>
</div>



    </section>
  );
}

export default PackageHighlights;

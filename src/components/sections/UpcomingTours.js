import rajasthan from "../../assets/images/rajasthan.png";
import kashmir from "../../assets/images/kashmir.png";
import manali3 from "../../assets/images/manali3.png";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";



const tours = [
  {
    title: "Rajasthan Heritage Tour",
    slug: "rajasthan-mewad-with-tiger-reserve",
    price: "₹28,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: rajasthan,
  },
  {
    title: "Kashmir Valley Escape",
    slug: "kashmir-valley-escape",
    price: "₹28,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: kashmir,
  },
  {
    title: "Manali Snow Adventure",
    slug: "manali-snow-adventure",
    price: "₹28,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: manali3,
  },
];


function UpcomingTours() {
   const navigate = useNavigate();
  return (
    <section className="py-10 bg-white relative z-0 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-6">
 <h2 className="text-[36px] md:text-[54px] font-[500] font-tiempos text-[#1C3627] whitespace-nowrap">
  Upcoming Tours
</h2>

<p
  className="
    mt-1
    mx-auto
    max-w-[340px] md:max-w-none
    text-[14px] md:text-[17px]
    leading-[22px] md:leading-[26px]
    tracking-[-0.34px]
    font-inter
    font-[400]
    text-[#717171]
    text-center
    md:whitespace-nowrap
  "
>
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
<div className="relative h-[250px] overflow-hidden rounded-t-[13px] rounded-b-[13px]">
  <img
    src={tour.image}
    alt={tour.title}
    className="w-full h-full object-cover"
  />


             
               {/* Rating */}
<div className="absolute bottom-3 left-3 flex items-center gap-[6px]">
  <span className="text-[#ACF929] text-[18px] leading-none">★</span>
  <span className="font-inter font-[500] text-[17px] leading-[26px] tracking-[-0.34px] text-[#ACF929]">
    {tour.rating}
  </span>
</div>


              
             {/* Days */}
<div className="absolute bottom-3 right-3 flex items-center gap-1 text-[15px] font-[400] text-white">
  <Clock size={16} strokeWidth={3} />
  <span>{tour.days}</span>
</div>

              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-[26px] font-manrope font-[500] text-[#001917]">
                  {tour.title}
                </h3>

                <p className="mt-1 text-[14px] font-[400] font-manrope text-[#7D7D7D]">
                  Starting from
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[28px] font-manrope font-[700] text-[#343434]">
                    {tour.price}
                  </span>

<button
  onClick={() => navigate(`/tour/${tour.slug}`)}
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
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="
      w-5 h-5
      transition-transform duration-300
      hover:rotate-45
    "
  >
    <path
      d="M7 17L17 7M17 7H9M17 7V15"
      stroke="#001917"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
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

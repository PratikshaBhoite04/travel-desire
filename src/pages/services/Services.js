import { useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";

/* ICONS */
import holidayIcon from "../../assets/images/services1.png";
import visaIcon from "../../assets/images/services2.png";
import forexIcon from "../../assets/images/services3.png";
import flightIcon from "../../assets/images/services.png";
import AnimatedCTA from "../../components/shared/AnimatedCTA";


/* HEADER BACKGROUND LINES */
import headerLines from "../../assets/images/header-lines.png";

/* ================= SERVICES DATA ================= */
const services = [
  {
    title: "Holiday Packages",
    description:
      "Curated domestic and international holiday packages tailored to your preferences and budget",
        icon: visaIcon,
    
    redirect: "/tour-packages",
  },
  {
    title: "VISA Services",
    description:
      "Hassle-free visa processing for all major destinations with our Visa On Call service",
  icon: forexIcon,
    redirect: "/contact",
  },
  {
    title: "Forex Services",
    description:
      "Competitive forex rates and convenient currency exchange for international travelers",
   
     icon: holidayIcon,
    redirect: "/contact",
  },
  {
    title: "Flight & Hotel Booking",
    description:
      "Book flights and hotels worldwide at competitive prices with our travel partners",
    icon: flightIcon,
    redirect: "/contact",
  },
];

function Services() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar bgColor="#001917" />

<section className="relative pt-16 md:pt-20 bg-[#001917] overflow-hidden">
  {/* Right-side decorative lines */}
  <img
    src={headerLines}
    alt=""
    className="pointer-events-none absolute top-0 right-0 h-full w-auto opacity-90"
  />

  <div
    className="
      relative
      max-w-7xl mx-auto
      px-4 md:px-6
      pt-4 md:pt-10
      pb-12 md:pb-24
      flex items-end
    "
  >
<div className="pt-15 pb-14 md:pt-15 md:pb-0">
  <h1
    className="
      font-tiempos
      text-[52px] font-[600] md:text-[52px]
      leading-[40px] md:leading-[62px]
      tracking-[1px]
      text-white
      translate-y-16 md:translate-y-14
    "
  >
    Our <span className="text-[#1EEBD9]">Services</span>
  </h1>
</div>


  </div>
</section>


      {/* ================= SERVICES GRID ================= */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  rounded-[20px]
                  border border-[#E6EDED]
                  bg-white
                  p-6 md:p-8
                "
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-[#EAFCD6]
                      flex items-center justify-center
                    "
                  >
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
            <h3
  className="
    font-tiempos
    text-[28px]
    leading-[34px]
    font-semibold
    text-[#111827]
  "
>
  {service.title}
</h3>

                {/* Description */}
              <p
  className="
    mt-2
    font-manrope
    text-[16px]
    leading-[26.8px]
    font-medium
    text-[#4B5563]
    max-w-[92%]
  "
>
  {service.description}
</p>

                {/* CTA */}
              <button
  onClick={() => navigate(service.redirect)}
  className="
    mt-4
    font-manrope
    text-[14px]
    leading-[20px]
    font-normal
    text-[#18A99F]
    flex items-center gap-1
    transition-all duration-300
    hover:gap-2
  "
>
  Explore <span>→</span>
</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

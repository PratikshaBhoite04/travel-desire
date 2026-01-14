import Navbar from "../../components/shared/Navbar";

const services = [
  {
    title: "Holiday Packages",
    description:
      "Curated domestic and international holiday packages tailored to your preferences and budget",
  },
  {
    title: "VISA Services",
    description:
      "Hassle-free visa processing for all major destinations with our Visa On Call service",
  },
  {
    title: "Forex Services",
    description:
      "Competitive forex rates and convenient currency exchange for international travelers",
  },
  {
    title: "Flight & Hotel Booking",
    description:
      "Book flights and hotels worldwide at competitive prices with our travel partners",
  },
];

function Services() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HEADER ================= */}
      <section
        className="pt-20 md:pt-24"
        style={{
          background:
            "radial-gradient(1200px 500px at 20% 0%, #062B25 0%, #001917 65%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-20">
          <h1 className="text-[32px] md:text-[56px] font-serif text-white tracking-tight">
            Our <span className="text-[#1EEBD9]">Services</span>
          </h1>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative rounded-[16px] border border-[#E6EDED] bg-white p-5 md:p-8"
              >
                {/* Floating Icon */}
                <div
                  className="
                    absolute 
                    -top-4 md:-top-5 
                    left-6 md:left-8 
                    w-9 h-9 md:w-10 md:h-10 
                    rounded-full 
                    bg-[#FFD54F] 
                    flex items-center justify-center 
                    text-black 
                    font-medium 
                    shadow
                  "
                >
                  M
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-[#0F2F24]">
                  {service.title}
                </h3>

                <p className="mt-2 md:mt-3 text-sm text-[#5C6F68] leading-relaxed">
                  {service.description}
                </p>

                <button className="mt-4 md:mt-6 text-sm text-[#1BAA9A] flex items-center gap-1 hover:gap-2 transition-all">
                  Explore <span>→</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        className="pt-16 md:pt-20"
        style={{
          background:
            "radial-gradient(1000px 400px at 20% 100%, #062B25 0%, #001917 70%)",
        }}
      >
        <div
          className="
            max-w-7xl 
            mx-auto 
            px-4 md:px-6 
            pb-12 
            grid 
            grid-cols-1 
            md:grid-cols-4 
            gap-8 md:gap-10 
            text-white
          "
        >
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">Traveldesire</h3>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Your Desire. Our Destination. Crafting unforgettable travel
              experiences since 2010.
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="text-[#9EFF00]">★ 4.9</span>
              <span className="text-white/60">(1,200+ reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Home</li>
              <li>Tour Packages</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-semibold mb-3">Popular Destinations</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Bali, Indonesia</li>
              <li>Maldives</li>
              <li>Dubai, UAE</li>
              <li>Switzerland</li>
              <li>Kashmir, India</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>123 Travel Street, Mumbai, Maharashtra 400001</li>
              <li>+91 98765 43210</li>
              <li>hello@tripdesire.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
          © 2024 Traveldesire. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Services;
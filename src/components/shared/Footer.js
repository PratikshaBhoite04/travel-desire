import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import locationIcon from "../../assets/icons/location.png";
import phoneIcon from "../../assets/icons/phone.png";
import emailIcon from "../../assets/icons/email.png";
import starIcon from "../../assets/icons/star.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#011715] text-white pt-20 overflow-hidden">

      {/* BOTTOM GRADIENT */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 w-full h-[280px]
          bg-gradient-to-t
          from-[#06D5C633]
          via-[#06D5C61A]
          to-transparent
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= DESKTOP CONTENT ================= */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-12">

          {/* BRAND */}
          <div>
            <img src={logo} className="h-14 mb-3" />
            <p className="text-[14px] text-[#D1D1D1] leading-relaxed">
              Your Desire. Our Destination. Crafting unforgettable travel
              experiences since 2010.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <img src={starIcon} className="w-[14px]" />
              <span className="text-[#ACF929CC] font-semibold text-[14px]">4.9</span>
              <span className="text-sm text-gray-400">(1,200+ reviews)</span>
            </div>

            <p className="mt-6 mb-3 font-tiempos text-[16px] font-semibold">
              Follow Us
            </p>

            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-[#ACF92999] rounded-full flex items-center justify-center"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-tiempos mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#B0B0B0]">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tour-packages">Tour Packages</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* DESTINATIONS */}
          <div>
            <h4 className="font-tiempos mb-4 text-lg">Popular Destinations</h4>
            <ul className="space-y-2 text-sm text-[#B0B0B0]">
              <li>Bali, Indonesia</li>
              <li>Maldives</li>
              <li>Dubai, UAE</li>
              <li>Switzerland</li>
              <li>Kashmir, India</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-tiempos mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm text-[#B0B0B0]">
              <li className="flex gap-3">
                <img src={locationIcon} className="w-5 h-5 mt-1" />
                <span>123 Travel Street, Mumbai<br />Maharashtra 400001</span>
              </li>
              <li className="flex gap-3">
                <img src={phoneIcon} className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <img src={emailIcon} className="w-5 h-5" />
                <span>hello@tripdesire.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= MOBILE CONTENT ================= */}
        <div className="md:hidden space-y-10">

          {/* BRAND */}
          <div>
            <img src={logo} className="h-12 mb-3" />
            <p className="text-sm text-[#D1D1D1]">
              Your Desire. Our Destination. Crafting unforgettable travel experiences since 2010.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <img src={starIcon} className="w-[14px]" />
              <span className="text-[#ACF929CC] font-semibold">4.9</span>
              <span className="text-gray-400 text-sm">(1,200+ reviews)</span>
            </div>
          </div>

          <div className="h-[1px] bg-[#ACF92966]" />

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-tiempos mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-[#B0B0B0]">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tour-packages">Tour Packages</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-tiempos mb-3">Popular Destinations</h4>
              <ul className="space-y-2 text-sm text-[#B0B0B0]">
                <li>Bali, Indonesia</li>
                <li>Maldives</li>
                <li>Dubai, UAE</li>
                <li>Switzerland</li>
                <li>Kashmir, India</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-tiempos mb-3">Contact Us</h4>
            <ul className="space-y-3 text-sm text-[#B0B0B0]">
              <li className="flex gap-3">
                <img src={locationIcon} className="w-5 h-5" />
                <span>123 Travel Street, Mumbai</span>
              </li>
              <li className="flex gap-3">
                <img src={phoneIcon} className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <img src={emailIcon} className="w-5 h-5" />
                <span>hello@tripdesire.com</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-tiempos mb-3">Follow Us</p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-[#ACF92999] rounded-full flex items-center justify-center"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* MOBILE COPYRIGHT */}
          <div className="pt-1">
            <div className="h-[1px] bg-[#ACF92966] mb-6" />
            <p className="text-center text-[11px] text-white/80 font-inter mb-10">
              © 2024 tripdesire. All rights reserved. |{" "}
              <Link to="/privacy-policy">Privacy Policy Terms &</Link>
              <br />
              Conditions
            </p>
          </div>
        </div>

        {/* ================= DESKTOP COPYRIGHT ================= */}
        <div className="hidden md:block mt-12">
          <div className="h-[1px] bg-[#ACF92966] mb-6" />
          <p className="text-center text-[13px] text-white/80 font-inter mb-10">
            © 2024 tripdesire. All rights reserved. |{" "}
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms">
              Terms & Conditions
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

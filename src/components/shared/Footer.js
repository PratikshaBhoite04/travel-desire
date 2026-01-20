import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#011715] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col space-y-12 md:grid md:grid-cols-4 md:gap-12 md:space-y-0">
          <div>
            <img src={logo} alt="Travel Desire" className="h-8 mb-4" />

           <p className="text-[14px] font-normal text-[#D1D1D1] font-manrope leading-relaxed">
              Your Desire. Our Destination. Crafting unforgettable travel
              experiences since 2010.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-[#ACF929] font-semibold">★ 4.9</span>
              <span className="text-sm text-gray-400">(1,200+ reviews)</span>
            </div>

            {/* MOBILE divider */}
            <div className="h-px w-full bg-[#ACF929CC] my-6 md:hidden" />

            {/* FOLLOW US — DESKTOP ONLY */}
            <div className="hidden md:block mt-6">
              <p className="mb-3 text-[16px] font-tiempos font-semibold">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 border border-[#ACF929] rounded-full flex items-center justify-center"
                    >
                      <Icon size={16} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

<div className="grid grid-cols-2 gap-8 md:contents">

  <div>
    <h4 className="text-base md:text-lg font-tiempos mb-3 md:mb-4">
      Quick Links
    </h4>
    <ul className="space-y-2 text-[#B0B0B0] text-sm">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/tour-packages">Tour Packages</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  </div>

  <div>
    <h4 className="text-base md:text-lg font-tiempos mb-3 md:mb-4">
      Popular Destinations
    </h4>
    <ul className="space-y-2 text-[#B0B0B0] text-sm">
      <li>Bali, Indonesia</li>
      <li>Maldives</li>
      <li>Dubai, UAE</li>
      <li>Switzerland</li>
      <li>Kashmir, India</li>
    </ul>
  </div>

</div>

          <div>
            <h4 className="text-base md:text-lg font-tiempos mb-3 md:mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4 text-[#B0B0B0] text-sm">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#ACF929] text-lg mt-0.5" />
                <span>
                  123 Travel Street, Mumbai,
                  <br /> Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#ACF929] text-lg" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[#ACF929] text-lg" />
                <span>hello@tripdesire.com</span>
              </li>
            </ul>

            <div className="mt-8 md:hidden">
              <p className="mb-3 text-[16px] font-tiempos font-semibold">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 border border-[#ACF929CC] rounded-full flex items-center justify-center"
                    >
                      <Icon size={16} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-[#ACF929CC] mt-12 md:mt-16 pt-6 pb-12 text-center text-xs md:text-sm text-gray-400">
          © 2024 tripdesire. All rights reserved. |{" "}
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

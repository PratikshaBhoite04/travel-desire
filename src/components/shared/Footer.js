import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import locationIcon from "../../assets/icons/location.png";
import phoneIcon from "../../assets/icons/phone.png";
import emailIcon from "../../assets/icons/email.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#011715] text-white pt-20 overflow-hidden">
      
    {/* BOTTOM) */}
<div
  className="
    pointer-events-none
    absolute bottom-0 left-0 w-full h-[320px]
    bg-gradient-to-t
    from-[rgba(6,213,198,0.08)]
via-[rgba(6,213,198,0.03)]
    to-transparent
  "
/>


      <div className="relative max-w-7xl mx-auto px-6">

        <div className="flex flex-col space-y-12 md:grid md:grid-cols-4 md:gap-12 md:space-y-0">

          {/* BRAND */}
          <div>
            <img src={logo} alt="Travel Desire" className="h-14 mb-3" />

            <p className="text-[14px] font-manrope text-[#D1D1D1] leading-relaxed">
              Your Desire. Our Destination. Crafting unforgettable travel
              experiences since 2010.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-[#ACF929CC] font-semibold">★ 4.9</span>
              <span className="text-sm text-gray-400">(1,200+ reviews)</span>
            </div>

            <p className="mt-6 mb-3 text-[16px] font-tiempos font-semibold">
              Follow Us
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 border border-[#ACF92999] rounded-full flex items-center justify-center text-[#FFFFFF]"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-tiempos mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#B0B0B0] text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tour-packages">Tour Packages</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* POPULAR DESTINATIONS */}
          <div>
            <h4 className="text-lg font-tiempos mb-4">Popular Destinations</h4>
            <ul className="space-y-2 text-[#B0B0B0] text-sm">
              <li>Bali, Indonesia</li>
              <li>Maldives</li>
              <li>Dubai, UAE</li>
              <li>Switzerland</li>
              <li>Kashmir, India</li>
            </ul>
          </div>

      {/* CONTACT */}
<div>
  <h4 className="text-lg font-tiempos mb-4">Contact Us</h4>

  <ul className="space-y-4 text-[#B0B0B0] text-sm">
    
    {/* LOCATION */}
    <li className="flex gap-3 items-start">
      <img
        src={locationIcon}
        alt="Location"
        className="w-5 h-5 mt-1"
      />
      <span>
        123 Travel Street, Mumbai,
        <br /> Maharashtra 400001
      </span>
    </li>

    {/* PHONE */}
    <li className="flex gap-3 items-center">
      <img
        src={phoneIcon}
        alt="Phone"
        className="w-5 h-5"
      />
      <span>+91 98765 43210</span>
    </li>

    {/* EMAIL */}
    <li className="flex gap-3 items-center">
      <img
        src={emailIcon}
        alt="Email"
        className="w-5 h-5"
      />
      <span>hello@tripdesire.com</span>
    </li>

  </ul>
</div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-[#ACF92966] mt-16 pt-4 pb-14 text-center text-[15px] text-[#FFFFFF] font-[400]">
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

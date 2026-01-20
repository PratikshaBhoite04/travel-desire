import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Search } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  //  Hook INSIDE component
  const location = useLocation();

  //  Active when /tour or /tour-packages
  const isTourActive =
    location.pathname.startsWith("/tour") ||
    location.pathname === "/tour-packages";

  const linkClass = ({ isActive }) =>
    `
    relative font-manrope text-[16px] font-[400]
    transition-colors duration-300
    ${isActive ? "text-[#19FAEA]" : "text-white/70 hover:text-white"}
    after:content-['']
    after:absolute after:left-0 after:-bottom-2
    after:w-full after:h-[1px]
    after:bg-[linear-gradient(to_right,transparent,#19FAEA,transparent)]
    ${isActive ? "md:after:opacity-100 after:opacity-0" : "after:opacity-0"}
    `;


    const tourLinkClass = () =>
  `
  relative font-manrope text-[16px] font-[400]
  transition-colors duration-300
  ${isTourActive ? "text-[#19FAEA]" : "text-white/70 hover:text-white"}
  after:content-['']
  after:absolute after:left-0 after:-bottom-2
  after:w-full after:h-[1px]
  after:bg-[linear-gradient(to_right,transparent,#19FAEA,transparent)]
  ${isTourActive ? "md:after:opacity-100 after:opacity-0" : "after:opacity-0"}
  `;


  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="backdrop-blur-md bg-black/40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-20 flex items-center justify-between">

              {/* Logo */}
              <img src={logo} alt="Travel Desire" className="h-8" />

              {/* Desktop Links */}
              <nav className="hidden md:flex gap-8 text-sm">
                <NavLink to="/" className={linkClass}>Home</NavLink>

                <NavLink to="/tour-packages" className={tourLinkClass}>
                  Tour Packages
                </NavLink>
                <NavLink to="/services" className={linkClass}>Services</NavLink>
                <NavLink to="/about" className={linkClass}>About Us</NavLink>
                <NavLink to="/Contact" className={linkClass}>Contact Us</NavLink>
              </nav>

              <button
  className="
    hidden md:block
    relative overflow-hidden
    w-[200px] h-[50px]
    rounded-full
    font-manrope text-[16px] font-medium
    bg-white/20
    group
  "
>
  {/* Default text */}
  <span
    className="
      absolute inset-0
      flex items-center justify-center
      text-white
      transition-all duration-300
      group-hover:-translate-y-full
      group-hover:opacity-0
    "
  >
    Plan My Trip
  </span>

  <span
    className="
      absolute inset-0
      flex items-center justify-center
      text-black
      bg-[#19FAEA]
      translate-y-full opacity-0
      transition-all duration-300
      group-hover:translate-y-0
      group-hover:opacity-100
    "
  >
    Send Inquiry Now!
  </span>
</button>


              {/* Mobile Toggle */}
              <button
                className="md:hidden text-2xl text-white"
                onClick={() => setOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#001917] text-white flex flex-col">
          <div className="flex justify-end p-6">
            <button
              className="text-3xl text-[#D5FB93]"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="p-6">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-3">
              <input
                type="text"
                placeholder="Destination"
                className="bg-transparent outline-none flex-1 text-white"
              />
              <span className="bg-[#19FAEA] text-black p-3 rounded-full">
                <Search size={18} />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 px-8 mt-10 text-lg">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/tour-packages" onClick={() => setOpen(false)}>
              Tour Packages
            </NavLink>
            <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink>
            <NavLink to="/Contact" onClick={() => setOpen(false)}>Contact Us</NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;



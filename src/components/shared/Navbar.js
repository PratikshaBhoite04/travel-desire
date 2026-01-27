import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Search } from "lucide-react";
import AnimatedCTA from "../../components/shared/AnimatedCTA";


function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
  if (open) {
    document.body.classList.add("nav-open");
  } else {
    document.body.classList.remove("nav-open");
  }

  return () => document.body.classList.remove("nav-open");
}, [open]);


  //  Hook INSIDE component
  const location = useLocation();
  const mobileLinkClass = ({ isActive }) =>
  `
    font-manrope text-[18px] font-[500]
    transition-colors duration-300
    ${isActive ? "text-[#06D5C6]" : "text-white"}
  `;

  const mobileTourClass = () =>
  `
    font-manrope text-[18px] font-[500]
    transition-colors duration-300
    ${isTourActive ? "text-[#06D5C6]" : "text-white"}
  `;


  const pathname = location.pathname.toLowerCase();

const darkPages = [
  "/tour-packages",
  "/services",
  "/about",
  "/contact",
];

const isDarkNavbar =
  darkPages.includes(pathname) || pathname.startsWith("/tour/");



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
       <div
  className={`
    backdrop-blur-md transition-colors duration-300
    ${isDarkNavbar ? "bg-[#001917]" : "bg-black/40"}
  `}
>

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
                <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
              </nav>
<AnimatedCTA
  label="Plan My Trip"
  hoverText="Send Inquiry Now!"
  className="
    hidden md:flex
    items-center justify-center
    w-[230px] h-[56px]

    bg-white/25
    backdrop-blur-lg

    text-white
    border border-white/10
    shadow-[0_4px_20px_rgba(255,255,255,0.08)]
  "
/>




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
              className="text-3xl text-[#E7FF30]"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

         <div className="p-6">
  <div
    className="
      rounded-full
      p-[1px]
    "
    style={{
      backgroundImage:
        "linear-gradient(90deg, #75FEF4, #E6FDBE)",
    }}
  >
    <div
      className="
        flex items-center
        rounded-full
        px-4 py-3
        bg-[#001917]
      "
    >
      <input
        type="text"
        placeholder="Destination"
        className="
          bg-transparent outline-none flex-1
          text-white font-manrope
          text-[17px] font-[400]
          placeholder-white/70
        "
      />

      <span className="bg-[#19FAEA] text-black p-3 rounded-full">
        <Search size={18} />
      </span>
    </div>
  </div>
</div>

 <div className="flex flex-col gap-6 px-8 mt-10">
  <NavLink
    to="/"
    className={mobileLinkClass}
    onClick={() => setOpen(false)}
  >
    Home
  </NavLink>

  <NavLink
    to="/tour-packages"
    className={mobileTourClass}
    onClick={() => setOpen(false)}
  >
    Tour Packages
  </NavLink>

  <NavLink
    to="/services"
    className={mobileLinkClass}
    onClick={() => setOpen(false)}
  >
    Services
  </NavLink>

  <NavLink
    to="/about"
    className={mobileLinkClass}
    onClick={() => setOpen(false)}
  >
    About Us
  </NavLink>

  <NavLink
    to="/contact"
    className={mobileLinkClass}
    onClick={() => setOpen(false)}
  >
    Contact Us
  </NavLink>
</div>


        </div>
      )}
    </>
  );
}

export default Navbar;



import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { Search, X } from "lucide-react";
import AnimatedCTA from "../../components/shared/AnimatedCTA";
import searchIcon from "../../assets/icons/search.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  // Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* ================= BODY SCROLL MOBILE MENU ================= */

  useEffect(() => {
    if (open) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }

    return () => document.body.classList.remove("nav-open");
  }, [open]);

  /* ================= SEARCH FUNCTION ================= */

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();

    // Empty search → just go to packages page
    if (!query) {
      navigate("/tour-packages");
    } else {
      navigate(`/tour-packages?search=${encodeURIComponent(query)}`);
    }

    // Close mobile menu
    setOpen(false);

    // Close desktop search
    setDesktopSearchOpen(false);
  };

  /* ================= MOBILE NAV CLASSES ================= */

  const mobileLinkClass = ({ isActive }) =>
    `
      font-manrope text-[18px] font-[500]
      transition-colors duration-300
      ${isActive ? "text-[#06D5C6]" : "text-white"}
    `;

  /* ================= PATH ================= */

  const pathname = location.pathname.toLowerCase();

  const darkPages = [
    "/tour-packages",
    "/services",
    "/about",
    "/contact",
  ];

  const isSpecialNavbarPage =
    pathname === "/" ||
    pathname === "/tour-packages" ||
    pathname.startsWith("/tour/") ||
    pathname === "/contact" ||
    pathname === "/services" ||
    pathname === "/about";

  const isDarkNavbar =
    darkPages.includes(pathname) || pathname.startsWith("/tour/");

  /* ================= TOUR ACTIVE ================= */

  const isTourActive =
    location.pathname.startsWith("/tour") ||
    location.pathname === "/tour-packages";

  const mobileTourClass = () =>
    `
      font-manrope text-[18px] font-[500]
      transition-colors duration-300
      ${isTourActive ? "text-[#06D5C6]" : "text-white"}
    `;

  /* ================= DESKTOP NAV CLASSES ================= */

  const linkClass = ({ isActive }) =>
    `
      relative font-manrope text-[16px] font-[300]
      transition-colors duration-300
      ${isActive ? "text-[#19FAEA]" : "text-white/70 hover:text-white"}

      after:content-['']
      after:absolute after:left-0 after:-bottom-2
      after:w-full after:h-[1px]
      after:bg-[linear-gradient(to_right,transparent,#19FAEA,transparent)]

      ${
        isActive
          ? "md:after:opacity-100 after:opacity-0"
          : "after:opacity-0"
      }
    `;

  const tourLinkClass = () =>
    `
      relative font-manrope text-[16px] font-[300]
      transition-colors duration-300
      ${
        isTourActive
          ? "text-[#19FAEA]"
          : "text-white/70 hover:text-white"
      }

      after:content-['']
      after:absolute after:left-0 after:-bottom-2
      after:w-full after:h-[1px]
      after:bg-[linear-gradient(to_right,transparent,#19FAEA,transparent)]

      ${
        isTourActive
          ? "md:after:opacity-100 after:opacity-0"
          : "after:opacity-0"
      }
    `;

  const isTripPackagesPage = pathname === "/tour-packages";
  const isTourDetailPage = pathname.startsWith("/tour/");

  const showSearchIcon =
    isTripPackagesPage || isTourDetailPage;

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}

      <header className="fixed top-0 left-0 w-full z-50">
        <div
          className="
            backdrop-blur-[36.98px]
            transition-colors duration-300
          "
          style={{
            backgroundColor: "rgba(18,18,18,0.3)",
            borderBottom:
              "0.40px solid rgba(124, 119, 119, 0.6)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-20 flex items-center justify-between">

              {/* ================= LOGO ================= */}

              <img
                src={logo}
                alt="Travel Desire"
                className="h-14 w-auto"
              />

              {/* ================= DESKTOP LINKS ================= */}

              <nav className="hidden md:flex gap-8 text-sm">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>

                <NavLink
                  to="/tour-packages"
                  className={tourLinkClass}
                >
                  Tour Packages
                </NavLink>

                <NavLink
                  to="/services"
                  className={linkClass}
                >
                  Services
                </NavLink>

                <NavLink
                  to="/about"
                  className={linkClass}
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/contact"
                  className={linkClass}
                >
                  Contact Us
                </NavLink>
              </nav>

              {/* ================= DESKTOP RIGHT SIDE ================= */}

              <div className="hidden md:flex items-center gap-5 mt-1">

                {/* ================= DESKTOP SEARCH ================= */}

                {isSpecialNavbarPage && (
                  <>
                    {desktopSearchOpen ? (
                      <form
                        onSubmit={handleSearch}
                        className="
                          flex items-center
                          w-[230px]
                          h-[45px]
                          rounded-full
                          bg-white/10
                          border border-white/10
                          px-4
                          transition-all duration-300
                        "
                      >
                        <input
                          type="text"
                          autoFocus
                          value={searchQuery}
                          onChange={(e) =>
                            setSearchQuery(e.target.value)
                          }
                          placeholder="Search packages..."
                          className="
                            flex-1
                            min-w-0
                            bg-transparent
                            outline-none
                            text-white
                            font-manrope
                            text-[14px]
                            placeholder:text-white/50
                          "
                        />

                        <button
                          type="submit"
                          className="
                            text-[#19FAEA]
                            cursor-pointer
                            hover:opacity-80
                            transition
                          "
                          aria-label="Search packages"
                        >
                          <Search size={20} />
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setDesktopSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="
                            ml-3
                            text-white/60
                            hover:text-white
                            cursor-pointer
                          "
                          aria-label="Close search"
                        >
                          <X size={18} />
                        </button>
                      </form>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setDesktopSearchOpen(true)
                        }
                        className="
                          cursor-pointer
                          hover:scale-105
                          transition-transform duration-300
                        "
                        aria-label="Open package search"
                      >
                        <img
                          src={searchIcon}
                          alt="Search"
                          className="
                            w-6 h-6
                            opacity-80
                            hover:opacity-100
                            transition-opacity duration-300
                          "
                        />
                      </button>
                    )}
                  </>
                )}

                {/* ================= CTA ================= */}

                <AnimatedCTA
                  defaultText="Plan My Trip"
                  hoverText="Send Inquiry Now!"
                  onClick={() => navigate("/contact")}
                  className={`
                    hidden md:flex
                    items-center justify-center
                    w-[210px] h-[52px]
                    rounded-full
                    transition-all duration-300
                    backdrop-blur-[36.98px]

                    ${
                      isSpecialNavbarPage
                        ? "text-[#06D5C6] bg-[rgba(255,255,255,0.1)]"
                        : "text-white bg-white/25 border border-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
                    }
                  `}
                />
              </div>

              {/* ================= MOBILE TOGGLE ================= */}

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
        <div
          className="
            fixed inset-0 z-50
            bg-[#001917]
            text-white
            flex flex-col
          "
        >

          {/* Close Button */}

          <div className="flex justify-end p-6">
            <button
              className="text-3xl text-[#E7FF30]"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* ================= MOBILE SEARCH ================= */}

          <div className="p-6">
            <form
              onSubmit={handleSearch}
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
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  placeholder="Search destination or package"
                  className="
                    bg-transparent
                    outline-none
                    flex-1
                    min-w-0
                    text-white
                    font-manrope
                    text-[17px]
                    font-[400]
                    placeholder-white/70
                  "
                />

                <button
                  type="submit"
                  className="
                    bg-[#19FAEA]
                    text-black
                    p-3
                    rounded-full
                    cursor-pointer
                    hover:scale-105
                    transition-transform
                  "
                  aria-label="Search packages"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* ================= MOBILE LINKS ================= */}

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
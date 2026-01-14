import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-cyan-400 font-medium"
      : "text-white hover:text-cyan-300";

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="backdrop-blur-md bg-black/40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-16 flex items-center justify-between">

              {/* Logo */}
              <img src={logo} alt="Travel Desire" className="h-8" />

              {/* Desktop Links */}
              <nav className="hidden md:flex gap-8 text-sm">
                <NavLink to="/" className={linkClass}>Home</NavLink>
                <NavLink to="/tour-packages" className={linkClass}>Tour Packages</NavLink>
                <NavLink to="/services" className={linkClass}>Services</NavLink>
                <NavLink to="/about" className={linkClass}>About Us</NavLink>
                <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
              </nav>

              {/* CTA */}
              <button className="hidden md:block bg-white/20 px-5 py-2 rounded-full text-sm text-white hover:bg-white/30">
                Plan My Trip
              </button>

              {/* Mobile Toggle */}
              <button className="md:hidden text-2xl text-white" onClick={() => setOpen(true)}>
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#001917] text-white flex flex-col">

          {/* Close */}
          <div className="flex justify-end p-6">
            <button className="text-3xl text-[#D5FB93]" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 px-8 mt-10 text-lg">
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
            <NavLink to="/tour-packages" onClick={() => setOpen(false)} className={linkClass}>Tour Packages</NavLink>
            <NavLink to="/services" onClick={() => setOpen(false)} className={linkClass}>Services</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About Us</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>Contact Us</NavLink>
          </div>

          {/* Mobile Search */}
          <div className="mt-auto p-6">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-3">
              <input
                type="text"
                placeholder="Destination"
                className="bg-transparent outline-none flex-1 text-white placeholder-white/60"
              />
              <span className="bg-cyan-400 text-black p-3 rounded-full">🔍</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
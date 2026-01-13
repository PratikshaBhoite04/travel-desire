import { useState } from "react";
import logo from "../../assets/images/logo.png";


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="backdrop-blur-md bg-black/40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-16 flex items-center justify-between text-white">

             <div className="flex items-center gap-2">
  <img
    src={logo}
    alt="Travel Desire Logo"
    className="h-8 w-auto"
  />
</div>


              {/* Desktop Menu */}
              <nav className="hidden md:flex gap-8 text-sm">
                <span className="text-cyan-400">Home</span>
                <span>Tour Packages</span>
                <span>Services</span>
                <span>About Us</span>
                <span>Contact Us</span>
              </nav>

              {/* Desktop Button */}
              <button className="hidden md:block bg-white/20 px-5 py-2 rounded-full text-sm">
                Plan My Trip
              </button>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden text-2xl"
                onClick={() => setOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#001917] text-white flex flex-col">
          
          {/* Close */}
          <div className="flex justify-end p-6">
           <button
  className="md:hidden text-3xl"
  style={{ color: "#D5FB93" }}
  onClick={() => setOpen(false)}
>
  ✕
</button>

          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 px-8 mt-10 text-lg">
            <span className="text-cyan-400">Home</span>
            <span>Tour Packages</span>
            <span>Services</span>
            <span>About Us</span>
            <span>Contact Us</span>
          </div>

          {/* Search (Mobile like Figma) */}
          <div className="mt-auto p-6">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-3">
              <input
                type="text"
                placeholder="Destination"
                className="bg-transparent outline-none flex-1 text-white"
              />
              <span className="bg-cyan-400 text-black p-3 rounded-full">
                🔍
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

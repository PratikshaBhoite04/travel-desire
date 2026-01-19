import lines from "../assets/images/waving-lines.png";

function PriceBar() {
  return (
    <div className="relative overflow-hidden bg-[#001917] text-white px-14 py-8 ">
      
      {/* Decorative Lines */}
      <img
        src={lines}
        alt="decorative lines"
        className="absolute right-0 top-0 h-full opacity-80 pointer-events-none"
      />

      {/* Content */}
      <p className="text-[19] font-manrope font-[400] text-[#FFFFFF]">
        Package Starts From
      </p>

      <div className="flex items-end gap-3">
        <h2 className="text-[56px] font-tiempos font-[600]">₹65,999</h2>
        <span className="text-[19] font-manrope font-[400] text-[#FFFFFF] mb-6">per Person</span>
      </div>
    </div>
  );
}

export default PriceBar;

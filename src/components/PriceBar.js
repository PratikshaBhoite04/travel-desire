import lines from "../assets/images/waving-lines.png";

function PriceBar({tour}) {
  return (
    <div
      className="
        relative overflow-hidden bg-[#001917] text-white
        px-4 py-6
        md:px-14 md:py-8
      "
    >
      {/* Decorative Lines */}
      <img
        src={lines}
        alt="decorative lines"
        className="absolute right-0 top-0 h-full opacity-80 pointer-events-none"
      />

      {/* Content */}
      <p
        className="
          font-manrope font-[400] text-[#FFFFFF]
          text-[14px]
          md:text-[19px]
        "
      >
        Package Starts From
      </p>

      <div className="flex items-end gap-2 md:gap-3">
        <h2
          className="
            font-tiempos font-[600]
            text-[34px]
            md:text-[56px]
          "
        >
        {tour.price}
        </h2>

        <span
          className="
            font-manrope font-[400] text-[#FFFFFF]
            text-[14px]
            mb-3
            md:text-[19px] md:mb-6
          "
        >
          per Person
        </span>
      </div>
    </div>
  );
}

export default PriceBar;

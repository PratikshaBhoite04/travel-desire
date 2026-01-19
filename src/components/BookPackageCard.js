function BookPackageCard() {
  return (
    <div className="bg-[#F2FFD8] rounded-2xl p-6 h-fit sticky top-24">
      
      {/* Title */}
      <h4 className="text-[26px] font-[500] text-[#1C3627] font-manrope">
        Book This Package
      </h4>

      {/* Description */}
      <p className="text-[17px] mt-2 text-[#405D3C] font-[400] font-manrope leading-[20px]">
        Get a customized quote and expert assistance. Get a customized quote and expert assistance.
      </p>

      {/* Button */}
      <button
        className="
          mt-4
          w-full
          h-[55px]
          bg-white
          border border-[#06524C]
          rounded-full
          text-[#06524C]
          text-[17px]
          font-[400]
          font-manrope
          transition
        "
      >
        Call - +91 1234567890
      </button>
    </div>
  );
}

export default BookPackageCard;

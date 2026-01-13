import googleIcon from "../../assets/icons/ratingicon.png";

function Ratings() {
  return (
    <section className="bg-[#001917] text-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left text + icon */}
        <div className="flex items-center gap-3  font-manrope text-lg">
          <span>We’re rated</span>
          <span className="text-[#75FE4F] font-bold">4.9 stars</span>
          <span>on Google</span>
          <img
            src={googleIcon}
            alt="Google"
            className="h-6 w-auto"
          />
        </div>

       <div className="flex items-center gap-3">
  <div className="flex items-center gap-3 bg-[#002520] px-4 py-2 rounded-full border border-[#75FE4F]/40">
    <div className="flex gap-1 text-[#75FE4F]">
      ★ ★ ★ ★ ★
    </div>
    <span className="text-sm">4.9</span>
  </div>

  <span className="text-sm text-white/70">(1,200+ reviews)</span>
</div>


      </div>
    </section>
  );
}

export default Ratings;

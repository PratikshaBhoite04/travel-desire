import googleIcon from "../../assets/icons/ratingicon.png";
import rightLines from "../../assets/images/right-lines.png";
import starIcon from "../../assets/icons/star.png";

function Ratings() {
  return (
    <section className="relative bg-[#001917] text-white overflow-hidden">

   {/* BACKGROUND PATTERN */}
<div
  className="
    absolute inset-y-0 right-0
    w-[55%] md:w-[45%]
    opacity-80 md:opacity-200
    pointer-events-none
    z-0
  "
  style={{
    backgroundImage: `url(${rightLines})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundSize: "cover",
  }}
/>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-[1440px]
          mx-auto
          px-4 md:px-[120px]
          py-6 md:py-[42px]
          flex flex-col md:flex-row
          md:items-center
          md:justify-between
          gap-5 md:gap-0
        "
      >
    {/* TEXT */}
{/* DESKTOP */}
<div
  className="
    hidden md:flex flex-wrap items-center
    gap-x-2
    font-manrope font-[500]
    text-[34px]
    text-left
  "
>
  <span>We’re rated</span>
  <span className="text-[#75FE4F]">4.9 stars</span>
  <span>on Google</span>

  <img
    src={googleIcon}
    alt="Google"
    className="h-[45px] ml-1"
  />
</div>

<div className="md:hidden text-left font-manrope font-[500] text-white">
  {/* Line 1 */}
  <div className="flex items-center gap-2 text-[32px] font-[500] font-manrope ">
    <span>We’re rated</span>
    <span className="text-[#75FE4F]">4.9</span>
    <img
      src={googleIcon}
      alt="Google"
      className="h-[22px]"
    />
  </div>

  {/* Line 2 */}
  <div className="text-[32px] font-[500] font-manrope  mt-1">
    <span className="text-[#75FE4F]">stars</span> on Google
  </div>
</div>



  {/* MOBILE STACK */}
<div
  className="
    flex items-center gap-2
    justify-start self-start
    md:flex-row md:gap-3 md:self-auto
  "
>
{/* RATING PILL */}
<div
  className="flex items-center gap-2 rounded-full bg-[#002520]"
  style={{
    padding: "9px 18px",
    border: "0.54px solid transparent",
    backgroundImage: `
      linear-gradient(#002520, #002520),
      linear-gradient(90deg, #75FEF4, #E6FDBE)
    `,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
  }}
>
  {/* STAR IMAGES */}
  <div className="flex gap-[3px]">
    {[...Array(5)].map((_, i) => (
      <img
        key={i}
        src={starIcon}
        alt="star"
        className="w-[13px] h-[13px]"
      />
    ))}
  </div>

  <span className="text-[12px] text-white">4.9</span>
</div>


  {/* REVIEWS */}
  <span className="text-[12px] font-inter text-white/90">
    (1,200+ reviews)
  </span>
</div>

      </div>
    </section>
  );
}

export default Ratings;

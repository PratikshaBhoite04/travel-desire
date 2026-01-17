import bgImage from "../assets/images/bg.jpg";

function TourHero({tour}) {
  return (
    <div
  className="relative h-[420px] bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>


      <div className="absolute inset-0 bg-black/40 flex items-end">
        <div className="max-w-7xl mx-auto px-6 pb-10 text-white">
          <h1 className="text-4xl font-serif font-semibold">
            {tour.title}
          </h1>

          <div className="flex gap-6 mt-3 text-sm">
            <span>📍 {tour.location || "India"}</span>
            <span>⏱ {tour.days}</span>
          </div>
        </div>
        </div>

      <button className="absolute bottom-10 right-10 bg-[#1EEBD9] text-black px-6 py-3 rounded-full font-semibold">
        Book My Trip
      </button>
    </div>
  );
}

export default TourHero;

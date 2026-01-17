import { useParams } from "react-router-dom";
import { tours } from "../../data/tours";

import TourHero from "../../components/TourHero";
import PriceBar from "../../components/PriceBar";
import TourTabs from "../../components/TourTabs";
import Highlights from "../../components/HighLights";
import BookPackageCard from "../../components/BookPackageCard";

function TourDetail() {
  const { slug } = useParams();

  // ✅ CORRECT WAY (array)
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) return <p className="text-center py-20">Tour not found</p>;

  return (
    <div className="bg-white">
      <TourHero tour={tour} />
      <PriceBar tour={tour} />

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <TourTabs />
          <Highlights highlights={tour.highlights || []} />
        </div>

        <BookPackageCard tour={tour} />
      </div>
    </div>
  );
}

export default TourDetail;

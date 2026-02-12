import { useParams } from "react-router-dom";
import { useState } from "react";
import { tours } from "../../data/tours";
import { toursFromPackages } from "../../data/packageAdapter";
import TourHero from "../../components/TourHero";
import PriceBar from "../../components/PriceBar";
import TourTabs from "../../components/TourTabs";
import Highlights from "../../components/HighLights";
import Inclusions from "../../components/Inclusions";
import Itinerary from "../../components/Itinerary";
import Pricing from "../../components/Pricing";
import Terms from "../../components/Terms";
import Images from "../../components/Images";
import Testimonials from "../../components/sections/Testimonials";
import BookPackageCard from "../../components/BookPackageCard";
import Faqs from "../../components/sections/Faqs";
import { faqs } from "../../data/faqs";

function TourDetail() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("highlights");
  
  const allTours = [...tours, ...toursFromPackages];

const tour = allTours.find((t) => t.slug === slug);


  if (!tour) {
    return <p className="text-center py-20">Tour not found</p>;
  }

  return (
    <div className="bg-white">
      {/* HERO */}
      <TourHero tour={tour} />

      {/* PRICE BAR */}
      <PriceBar tour={tour} />

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 overflow-x-visible">
          
          <div className="-mx-6 md:mx-0">
            <TourTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          {activeTab === "highlights" && (
            <Highlights highlights={tour.highlightsData || []} />
          )}

          {activeTab === "inclusions" && (
            <Inclusions inclusions={tour.inclusions || {}} />
          )}

          {activeTab === "itinerary" && (
            <Itinerary
              itinerary={tour.itinerary || []}
              points={tour.pointsToRemember || []}
            />
          )}

          {activeTab === "pricing" && (
            <Pricing pricing={tour.pricing || {}} />
          )}

          {activeTab === "terms" && (
            <Terms terms={tour.terms || ""} />
          )}

          {activeTab === "images" && (
            <Images images={tour.images || []} />
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <BookPackageCard tour={tour} />
      </div>

      {/* TESTIMONIALS */}
      <Testimonials
        title="Reviews"
        showSubtitle={false}
        withBackground={false}
      />

      {/* FAQS */}
      <Faqs title="FAQs" faqs={faqs} />
    </div>
  );
}

export default TourDetail;

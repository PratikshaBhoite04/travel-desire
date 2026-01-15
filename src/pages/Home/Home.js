
import Hero from "../../components/sections/Hero";
import Ratings from "../../components/sections/Ratings";
import Trips from "../../components/sections/Trips";
import PopularLocations from "../../components/sections/PopularLocations";
import UpcomingTours from "../../components/sections/UpcomingTours";
import PackageHighlights from "../../components/sections/PackageHighlights";
import ExperiencedCard from "../../components/sections/ExperiencedCard";
import RealTrips from "../../components/sections/RealTrips";
import Testimonials from "../../components/sections/Testimonials";
import PlanTripForm from "../../components/sections/PlanTripForm";


function Home() {
  return (
    <>
      <Hero />
      <Ratings />
      <Trips/>
      <PopularLocations />
      <UpcomingTours />
      <PackageHighlights />
      <ExperiencedCard />
      <RealTrips />
      <Testimonials />
      <PlanTripForm />
    </>
  );
}

export default Home;

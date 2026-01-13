import Navbar from "../../components/shared/Navbar";
import Hero from "../../components/sections/Hero";
import Ratings from "../../components/sections/Ratings";
import Trips from "../../components/sections/Trips";
import PopularLocations from "../../components/sections/PopularLocations";
import UpcomingTours from "../../components/sections/UpcomingTours";
import PackageHighlights from "../../components/sections/PackageHighlights";
import ExperiencedCard from "../../components/sections/ExperiencedCard";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ratings />
      <Trips/>
      <PopularLocations />
      <UpcomingTours />
      <PackageHighlights />
      <ExperiencedCard />
    </>
  );
}

export default Home;

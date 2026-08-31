import Navbar from "../../components/shared/Navbar";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { tours } from "../../data/tours";
import { Clock, ChevronDown, Search } from "lucide-react";
import headerLines from "../../assets/images/header-lines.png";
import starIcon from "../../assets/icons/star.png";
import ArrowButton from "../../components/shared/ArrowButton";

// ======================================================
// INDIAN LOCATIONS
// Used to automatically identify Domestic packages
// ======================================================
const indianLocations = [
  "jaipur",
  "pushkar",
  "ajmer",
  "udaipur",
  "jaisalmer",
  "jodhpur",

  // Kashmir
  "kashmir",
  "srinagar",
  "pahalgam",
  "gulmarg",

  // Himachal
  "shimla",
  "manali",
  "kasol",
  "himachal",

  // Gujarat
  "gujarat",
  "ahmedabad",
  "vadodara",
  "rajkot",
  "jamnagar",
  "dwarka",
  "somnath",
  "statue of unity",

  // North East
  "kaziranga",
  "shillong",
  "guwahati",
  "cherrapunjee",
  "assam",
  "meghalaya",

  // Andaman
  "andaman",
  "port blair",
  "havelock",
  "neil island",

  // Sikkim / Darjeeling
  "sikkim",
  "darjeeling",
  "gangtok",
  "pelling",

  // North India
  "delhi",
  "agra",
  "uttarakhand",
  "rishikesh",
  "haridwar",
  "varanasi",
  "ayodhya",
  "amritsar",

  // West / South
  "goa",
  "mumbai",
  "maharashtra",
  "kerala",
  "ooty",
  "coorg",
  "mysore",
  "hyderabad",
  "bangalore",
  "bengaluru",
  "chennai",
  "pondicherry",
  "puducherry",
];

// ======================================================
// GET TOUR CATEGORY
// ======================================================
const getTourCategory = (tour) => {
  const location = tour.location?.toLowerCase() || "";

  const isDomestic = indianLocations.some((place) =>
    location.includes(place)
  );

  return isDomestic ? "Domestic" : "International";
};

function TripPackages() {
  // ====================================================
  // ROUTER
  // ====================================================
  const location = useLocation();
  const navigate = useNavigate();

  // ====================================================
  // STATES
  // ====================================================
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [category, setCategory] = useState("Domestic");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = ["Domestic", "International"];

  // ====================================================
  // GET SEARCH FROM NAVBAR URL
  // Example:
  // /tour-packages?search=Chardham
  // ====================================================
  const urlParams = new URLSearchParams(location.search);

  const urlSearch =
    urlParams.get("search")?.trim() || "";

  // ====================================================
  // SYNC NAVBAR SEARCH WITH PAGE SEARCH
  // ====================================================
  useEffect(() => {
    if (urlSearch) {
      setSearchInput(urlSearch);
      setSearchTerm(urlSearch);
    }
  }, [urlSearch]);

  // ====================================================
  // HANDLE PAGE SEARCH
  // ====================================================
  const handleSearch = () => {
    const query = searchInput.trim();

    setSearchTerm(query);

    if (query) {
      navigate(
        `/tour-packages?search=${encodeURIComponent(query)}`
      );
    } else {
      navigate("/tour-packages");
    }
  };

  // ====================================================
  // FILTER TOURS
  // ====================================================
  const filteredTours = tours.filter((tour) => {
    const search = searchTerm.trim().toLowerCase();

    const title =
      tour.title?.toLowerCase() || "";

    const tourLocation =
      tour.location?.toLowerCase() || "";

    const slug =
      tour.slug?.toLowerCase() || "";

    // -----------------------------------------------
    // SEARCH FILTER
    // -----------------------------------------------
    const matchesSearch =
      !search ||
      title.includes(search) ||
      tourLocation.includes(search) ||
      slug.includes(search);

    if (!matchesSearch) {
      return false;
    }

    // -----------------------------------------------
    // IF SEARCH COMES FROM NAVBAR URL
    // SEARCH ALL PACKAGES
    // -----------------------------------------------
    if (urlSearch) {
      return true;
    }

    // -----------------------------------------------
    // NORMAL CATEGORY FILTER
    // -----------------------------------------------
    const tourCategory = getTourCategory(tour);

    return tourCategory === category;
  });

  return (
    <>
      <Navbar bgColor="#001917" />

      {/* =====================================================
          HEADER
      ===================================================== */}
      <section className="relative pt-20 md:pt-24 bg-gradient-to-b from-[#001917] to-[#001917]/95 overflow-visible">

        <img
          src={headerLines}
          alt=""
          className="pointer-events-none absolute top-0 right-0 h-full w-auto opacity-90"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-20 text-left">

          {/* =================================================
              TITLE
          ================================================= */}
          <h1 className="text-left text-[42px] md:text-[56px] font-[600] font-tiempos text-white translate-y-2 md:translate-y-8">
            Explore{" "}
            <span className="text-[#06D5C6]">
              Trips
            </span>
          </h1>

          {/* =================================================
              SEARCH + DROPDOWN
          ================================================= */}
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:gap-6 translate-y-4 md:translate-y-8">

            {/* =================================================
                SEARCH BAR
            ================================================= */}
            <div
              className="
                w-full
                md:max-w-[950px]
                rounded-full
                p-[1px]
                bg-[#06D5C6]/40
                md:bg-gradient-to-r
                md:from-[#3B4444]
                md:to-[#46473F80]
              "
            >
              <div className="flex items-center w-full bg-[#001917] rounded-full px-4 py-3 md:px-6 md:py-2.5 gap-3">

                {/* SEARCH ICON */}
                <Search
                  className="hidden md:block w-5 h-5 text-white opacity-80"
                  strokeWidth={2}
                />

                {/* INPUT */}
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="Destination"
                  className="
                    bg-transparent
                    outline-none
                    text-white
                    font-manrope
                    text-[15px]
                    placeholder-white
                    w-full
                  "
                />

                {/* MOBILE SEARCH BUTTON */}
                <button
                  type="button"
                  onClick={handleSearch}
                  className="
                    md:hidden
                    w-[38px]
                    h-[38px]
                    bg-[#19FAEA]
                    rounded-full
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <Search
                    className="w-4 h-4 text-[#001917]"
                    strokeWidth={2.5}
                  />
                </button>

                {/* DESKTOP SEARCH BUTTON */}
                <button
                  type="button"
                  onClick={handleSearch}
                  className="
                    hidden
                    md:block
                    bg-[#06D5C6]
                    text-[#121212]
                    font-manrope
                    text-[15px]
                    px-8
                    py-2
                    rounded-full
                  "
                >
                  Search
                </button>

              </div>
            </div>

            {/* =================================================
                CATEGORY DROPDOWN
            ================================================= */}
            <div className="relative z-50 w-full md:w-[280px]">

              {/* DROPDOWN BUTTON */}
              <button
                type="button"
                onClick={() => {
                  setIsDropdownOpen((prev) => !prev);
                }}
                className="
                  relative
                  z-50
                  w-full
                  rounded-full
                  p-[1px]
                  bg-gradient-to-r
                  from-[#06D5C6]
                  to-[#ACF929]
                "
              >
                <div className="bg-[#001917] rounded-full px-6 py-4 flex items-center justify-between">

                  <span className="text-[#06D5C6] font-manrope text-[15px] md:text-[17px] px-6">
                    {category}
                  </span>

                  <ChevronDown
                    className={`
                      w-5
                      h-5
                      text-[#06D5C6]
                      transition-transform
                      duration-200
                      ${
                        isDropdownOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />

                </div>
              </button>

              {/* =================================================
                  DROPDOWN OPTIONS
              ================================================= */}
              {isDropdownOpen && (
                <div
                  className="
                    absolute
                    z-[9999]
                    top-[calc(100%+8px)]
                    left-0
                    w-full
                    bg-[#001917]
                    border
                    border-[#06D5C6]/40
                    rounded-2xl
                    overflow-hidden
                    shadow-2xl
                  "
                >
                  {categories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setCategory(item);

                        // Close dropdown
                        setIsDropdownOpen(false);

                        // Clear search
                        setSearchInput("");
                        setSearchTerm("");

                        // Remove Navbar search URL
                        navigate("/tour-packages");
                      }}
                      className={`
                        w-full
                        px-6
                        py-4
                        text-left
                        font-manrope
                        text-[15px]
                        transition
                        ${
                          category === item
                            ? "text-[#06D5C6] bg-[#06D5C6]/10"
                            : "text-white hover:bg-white/5"
                        }
                      `}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CARDS
      ===================================================== */}
      <section className="bg-white py-12 md:py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* =================================================
              RESULTS
          ================================================= */}
          {filteredTours.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {filteredTours.map((tour, index) => (

                <div
                  key={`${tour.slug}-${index}`}
                  className="bg-white rounded-2xl border overflow-hidden"
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}
                  <div className="relative h-[250px] overflow-hidden rounded-[13px]">

                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />

                    {/* RATING */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1">

                      <img
                        src={starIcon}
                        alt="Rating"
                        className="w-4 h-4"
                      />

                      <span className="text-[#ACF929] text-[15px] font-[500]">
                        {tour.rating}
                      </span>

                    </div>

                    {/* DAYS */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white text-sm">

                      <Clock
                        size={16}
                        strokeWidth={3}
                      />

                      {tour.days}

                    </div>

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}
                  <div className="p-4">

                    <h3 className="text-[22px] md:text-[26px] font-manrope font-[500] text-[#001917]">
                      {tour.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Starting from
                    </p>

                    <div className="flex items-center justify-between mt-2">

                      <span className="text-[24px] font-bold">
                        {tour.price}
                      </span>

                      <ArrowButton
                        to={`/tour/${tour.slug}`}
                        size="sm"
                      />

                    </div>
                  </div>

                </div>
              ))}

            </div>

          ) : (

            /* =================================================
               NO RESULTS
            ================================================= */
            <div className="py-20 text-center">

              <h2 className="text-2xl font-manrope font-[600] text-[#001917]">
                No trips found
              </h2>

              <p className="text-gray-500 mt-2">
                Try another destination or select a different category.
              </p>

            </div>
          )}

        </div>
      </section>
    </>
  );
}

export default TripPackages;
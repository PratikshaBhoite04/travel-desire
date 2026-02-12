import { packages } from "./packages";
import rajasthan from "../assets/images/rajasthan.png";

export const toursFromPackages = packages.map(pkg => ({
  title: pkg.title,
  slug: pkg.slug,

  price: `₹${pkg.starting_price.toLocaleString("en-IN")}`,
  days: `${pkg.duration.days} Days / ${pkg.duration.nights} Nights`,
  rating: "4.8",

  image: rajasthan,
  location: pkg.destinations.join(", "),
  nextDate: "On Request",

  highlightsData: {
    locationCard: {
      meta: `1 Country, ${pkg.destinations.length} Locations`,
      places: pkg.destinations.join(", "),
    },
    pills: pkg.category || [],
    highlights: pkg.destinations.slice(0, 5),
    experiences: [],
  },

  itinerary: pkg.itinerary.map(d => ({
    day: String(d.day).padStart(2, "0"),
    title: d.title,
    desc: d.description,
  })),

  pointsToRemember: [],
  inclusions: { included: [], excluded: [] },

  pricing: {
    rows: [
      {
        category: "Starting From",
        price: `₹${pkg.starting_price}`,
        unit: "per head",
      },
    ],
  },

  terms: [],
  images: [],
}));

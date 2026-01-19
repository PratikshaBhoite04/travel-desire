import rajasthan from "../assets/images/rajasthan.png";
import kashmir from "../assets/images/kashmir.png";
import manali1 from "../assets/images/manali1.png";

export const tours = [
  {
    title: "Rajasthan Mewad With Tiger Reserve",
    slug: "rajasthan-mewad-with-tiger-reserve",
    price: "₹65,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: rajasthan,
    location: "Rajasthan, India",
    nextDate: "January 20, 2025",

    /* ---------- HERO ---------- */
    highlights: [
      "Jaipur City Palace",
      "Udaipur Lake Pichola",
      "Ranthambore Tiger Safari",
    ],

    /* ---------- TABS DATA ---------- */
    itinerary: [
      {
        day: "01",
        title: "Jaipur – Ranthambore",
        desc:
          "Arrive at Jaipur and proceed to Ranthambore. Enjoy safari experience.",
        tags: ["Dinner"],
      },
      {
        day: "02",
        title: "Ranthambore – Jaipur",
      },
    ],

    pointsToRemember: [
      "Round-trip flights",
      "Hotel accommodation",
      "Daily breakfast",
      "Local guide",
    ],

    inclusions: {
      included: [
        "Round-trip flights",
        "Airport transfers",
        "6 nights accommodation",
        "Daily breakfast",
      ],
      excluded: [
        "Lunch & dinner",
        "Personal expenses",
        "Tips & gratuities",
      ],
    },

    images: [rajasthan, rajasthan],
  },

  {
    title: "Kashmir Valley Escape",
    slug: "kashmir-valley-escape",
    price: "₹28,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: kashmir,
    location: "Kashmir, India",
    nextDate: "February 10, 2025",

    highlights: [
      "Dal Lake Shikara Ride",
      "Gulmarg Snow Point",
      "Pahalgam Valley",
    ],

    itinerary: [
      {
        day: "01",
        title: "Arrival in Srinagar",
        desc: "Arrival at Srinagar airport and hotel transfer.",
        tags: ["Dinner"],
      },
      {
        day: "02",
        title: "Srinagar – Gulmarg",
      },
    ],

    pointsToRemember: [
      "Houseboat stay",
      "Shikara ride",
      "Daily breakfast",
    ],

    inclusions: {
      included: [
        "Airport transfers",
        "Hotel stay",
        "Breakfast & Dinner",
      ],
      excluded: [
        "Airfare",
        "Personal expenses",
      ],
    },

    images: [kashmir],
  },

  {
    title: "Manali Snow Adventure",
    slug: "manali-snow-adventure",
    price: "₹28,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: manali1,
    location: "Manali, Himachal Pradesh",
    nextDate: "March 5, 2025",

    highlights: [
      "Solang Valley",
      "Atal Tunnel",
      "Rohtang Pass",
    ],

    itinerary: [
      {
        day: "01",
        title: "Delhi – Manali",
        desc: "Overnight journey to Manali by Volvo.",
      },
      {
        day: "02",
        title: "Manali Local Sightseeing",
      },
    ],

    pointsToRemember: [
      "Volvo transfers",
      "Snow activities",
      "Breakfast & Dinner",
    ],

    inclusions: {
      included: [
        "Volvo tickets",
        "Hotel stay",
        "Meals",
      ],
      excluded: [
        "Personal expenses",
      ],
    },

    images: [manali1],
  },
];

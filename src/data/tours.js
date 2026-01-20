import rajasthan from "../assets/images/rajasthan.png";
import kashmir from "../assets/images/kashmir.png";
import manali1 from "../assets/images/manali1.png";
import forest from "../assets/images/forest.png";
import leaf from "../assets/images/leaf.png";
import coffee from "../assets/images/coffee.png";
import cream from "../assets/images/cream.png";
import bottles from "../assets/images/bottles.png";


export const tours = [
  {
    /* ================= RAJASTHAN ================= */
    title: "Rajasthan Mewad With Tiger Reserve",
    slug: "rajasthan-mewad-with-tiger-reserve",
    price: "₹65,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: rajasthan,
    location: "Rajasthan, India",
    nextDate: "January 20, 2025",

    /* ---------- HIGHLIGHTS ---------- */
    highlightsData: {
      locationCard: {
        meta: "1 Country, 3 Cities, 12 Locations",
        places: "Jaipur, Udaipur, Boondi",
      },
      pills: ["Breakfast Included", "Hotel Stay Included", "Local Guide"],
      highlights: [
        "Kumbhalgarh Fort",
        "Jantar Mantar - UNESCO World Heritage Site",
        "Chittorgarh Fort",
        "Haldighati Museum",
        "City Palace, Udaipur",
      ],
      experiences: [
        {
          title: "Boating",
          desc: "Boating on Lake Pichola – one of the most serene experiences in Udaipur.",
        },
        {
          title: "Local Cuisine",
          desc: "Authentic Rajasthani food including Dal Bati Churma.",
        },
        {
          title: "Camel Rides",
          desc: "Traditional camel rides across desert landscapes.",
        },
        {
          title: "Hot Air Balloon",
          desc: "Enjoy aerial views of Rajasthan’s heritage sites.",
        },
      ],
    },

    /* ---------- ITINERARY ---------- */
    itinerary: [
      {
        day: "01",
        title: "Jaipur – Ranthambore",
        desc: "Arrive at Jaipur and proceed to Ranthambore. Enjoy jungle safari.",
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

    /* ---------- INCLUSIONS ---------- */
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

    /* ---------- PRICING ---------- */
    pricing: {
      rows: [
        { category: "Single", price: "₹65,999", unit: "per head" },
        { category: "Couple", price: "₹62,999", unit: "per head" },
        { category: "Triple", price: "₹59,999", unit: "per head" },
      ],
      note:
        "Under unavoidable circumstances hotels are subject to change. Substitute hotel of similar category will be provided.",
    },

    /* ---------- TERMS ---------- */
    terms: [
      "In case of less bookings, tours may be merged to operate at optimum capacity.",
      "The itinerary is subject to change without prior notice.",
      "Sightseeing places may close due to unforeseen circumstances.",
      "Mandatory travel requirements must be followed by guests.",
      "Shopping is at the sole discretion of the guest.",
    ],

    images: [rajasthan, leaf, bottles, forest, coffee, cream, leaf],
  },

  {
    /* ================= KASHMIR ================= */
    title: "Kashmir Valley Escape",
    slug: "kashmir-valley-escape",
    price: "₹28,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: kashmir,
    location: "Kashmir, India",
    nextDate: "February 10, 2025",

    highlightsData: {
      locationCard: {
        meta: "1 Country, 3 Cities, 8 Locations",
        places: "Srinagar, Gulmarg, Pahalgam",
      },
      pills: ["Breakfast Included", "Houseboat Stay", "Local Guide"],
      highlights: [
        "Dal Lake Shikara Ride",
        "Gulmarg Gondola",
        "Mughal Gardens",
        "Pahalgam Valley",
      ],
      experiences: [
        {
          title: "Shikara Ride",
          desc: "Peaceful Shikara ride on Dal Lake.",
        },
        {
          title: "Snow Activities",
          desc: "Snow fun and skiing experience in Gulmarg.",
        },
      ],
    },

    itinerary: [
      {
        day: "01",
        title: "Arrival in Srinagar",
        desc: "Arrival at Srinagar airport and transfer to hotel/houseboat.",
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

    pricing: {
      rows: [
        { category: "Single", price: "₹28,999", unit: "per head" },
        { category: "Couple", price: "₹25,999", unit: "per head" },
      ],
      note: "Prices may vary during peak snowfall season.",
    },

    terms: [
      "Weather conditions may affect sightseeing.",
      "Snow activities depend on local conditions.",
      "Houseboat allocation is subject to availability.",
      "Guests must carry valid ID proof.",
    ],

    images: [kashmir, leaf, bottles, forest, coffee, cream, leaf],
  },

  {
    /* ================= MANALI ================= */
    title: "Manali Snow Adventure",
    slug: "manali-snow-adventure",
    price: "₹28,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: manali1,
    location: "Manali, Himachal Pradesh",
    nextDate: "March 5, 2025",

    highlightsData: {
      locationCard: {
        meta: "1 Country, 2 Cities, 6 Locations",
        places: "Manali, Solang",
      },
      pills: ["Breakfast Included", "Volvo Transfers", "Snow Activities"],
      highlights: [
        "Solang Valley",
        "Atal Tunnel",
        "Rohtang Pass",
      ],
      experiences: [
        {
          title: "Snow Adventure",
          desc: "Snow activities like skiing and snowboarding.",
        },
        {
          title: "Mountain Views",
          desc: "Breathtaking Himalayan scenery.",
        },
      ],
    },

    itinerary: [
      {
        day: "01",
        title: "Delhi – Manali",
        desc: "Overnight Volvo journey from Delhi to Manali.",
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

    pricing: {
      rows: [
        { category: "Single", price: "₹26,999", unit: "per head" },
        { category: "Couple", price: "₹23,999", unit: "per head" },
      ],
      note: "Rohtang Pass charges are extra if open.",
    },

    terms: [
      "Rohtang Pass visit depends on weather & permits.",
      "Volvo seats subject to availability.",
      "Snow activities are optional and chargeable.",
      "Tour may be rescheduled due to road conditions.",
    ],

    images: [manali1, leaf, bottles, forest, coffee, cream, leaf],
  },
];

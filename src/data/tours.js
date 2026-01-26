import rajasthan from "../assets/images/rajasthan.png";
import kashmir from "../assets/images/kashmir.png";
import manali3 from "../assets/images/manali3.png";
import forest from "../assets/images/forest.png";
import leaf from "../assets/images/leaf.png";
import coffee from "../assets/images/coffee.png";
import cream from "../assets/images/cream.png";
import bottles from "../assets/images/bottles.png";
import kedarnath from "../assets/images/kedarnath.png";
import kedarnath2 from "../assets/images/kedarnath2.png";
import udaipur from "../assets/images/udaipur.png";
import kashmir1 from "../assets/images/kashmir1.png";
// import jaipur1 from "../assets/images/jaipur1.png";
// import foundation from "../assets/images/foundation.png";
// import forest1 from "../assets/images/.png";




export const tours = [
  {
    /* ================= RAJASTHAN ================= */
    title: "Rajasthan Mewad ",
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
        desc: "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
        tags: ["Dinner"],
      },
      {
        day: "02",
        title: "Ranthambore – Jaipur",
         desc: "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
           tags: [
          {
            label: "Tea / Coffee / Soft Drink enroute to Ranthambore",
            icon: coffee,
          },
          { label: "Dinner", icon: cream },
        ],
      },

        {
        day: "01",
        title: "Jaipur – Ranthambore",
        desc:
          "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. Enjoy jungle safari at Ranthambore National Park.",
        tags: [
          {
            label: "Tea / Coffee / Soft Drink enroute to Ranthambore",
            icon: coffee,
          },
          { label: "Dinner", icon: cream },
        ],
      },
      {
        day: "02",
        title: "Ranthambore – Jaipur",
         desc: "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
        tags: [
          { label: "Breakfast", icon: leaf },
          { label: "Dinner", icon: cream },
        ],
      },
      {
        day: "03",
        title: "Jaipur",
         desc: "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
        tags: [{ label: "Breakfast", icon: leaf }],
      },
   
      {
        day: "05",
        title: "Pushkar – Kumbhalgarh",
         desc: "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
        tags: [
          { label: "Breakfast", icon: leaf },
          { label: "Dinner", icon: cream },
        ],
      },
     
      {
        day: "08",
        title: "Udaipur",
         desc: "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
        tags: [{ label: "Breakfast", icon: leaf }],
      },
      {
        day: "09",
        title: "Departure from Udaipur",
         desc: "Arrive at designated reporting place, report to vehicle and proceed to Ranthambore. Ranthambore National Park and Tiger Reserve is one of the biggest and most renowned national park in Northern India. It is home to animals like the jackal, mongoose, sloth bear, leopard and the tiger. In the afternoon, take a canter safari in Ranthambore National park for wild life viewing.",
        tags: [{ label: "Breakfast", icon: leaf }],
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

    images: [leaf, leaf, bottles, udaipur, bottles, coffee, cream, udaipur, leaf, bottles, cream, udaipur,],
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

   images: [leaf, leaf, bottles, udaipur, bottles, coffee, cream, udaipur, leaf, bottles, cream, udaipur,],
  },

  {
    /* ================= MANALI ================= */
    title: "Manali Snow Adventure",
    slug: "manali-snow-adventure",
    price: "₹28,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
    image: manali3,
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

   images: [leaf, leaf, bottles, udaipur, bottles, coffee, cream, udaipur, leaf, bottles, cream, udaipur,],
  },

  {
  title: "Udaipur Royal Retreat",
  slug: "udaipur-royal-retreat",
  price: "₹22,999",
  days: "5 Days / 4 Nights",
  rating: "4.8",
  image: udaipur,
  location: "Udaipur, Rajasthan",
  nextDate: "April 12, 2025",

  highlightsData: {
    locationCard: {
      meta: "1 Country, 1 City, 6 Locations",
      places: "Udaipur",
    },
    pills: ["Breakfast Included", "Lake View Hotel", "Local Guide"],
    highlights: [
      "City Palace",
      "Lake Pichola Boat Ride",
      "Jag Mandir",
      "Saheliyon Ki Bari",
      "Fateh Sagar Lake",
    ],
    experiences: [
      {
        title: "Boat Ride",
        desc: "Sunset boat ride on Lake Pichola with palace views.",
      },
      {
        title: "Royal Culture",
        desc: "Experience Mewar royal heritage and architecture.",
      },
    ],
  },

  itinerary: [
    {
      day: "01",
      title: "Arrival in Udaipur",
      desc: "Arrival and leisure evening near Lake Pichola.",
    },
    {
      day: "02",
      title: "Udaipur Sightseeing",
      desc: "City Palace, Jag Mandir and local markets.",
    },
  ],

  pointsToRemember: [
    "Comfortable footwear recommended",
    "Evening boat ride subject to weather",
  ],

  inclusions: {
    included: ["Hotel stay", "Daily breakfast", "Local sightseeing"],
    excluded: ["Personal expenses", "Camera fees"],
  },

  pricing: {
    rows: [
      { category: "Single", price: "₹22,999", unit: "per head" },
      { category: "Couple", price: "₹19,999", unit: "per head" },
    ],
    note: "Prices may vary during peak season.",
  },

  terms: [
    "Sightseeing order may change",
    "Hotel subject to availability",
  ],

    images: [leaf, leaf, bottles, udaipur, bottles, coffee, cream, udaipur, leaf, bottles, cream, udaipur,],
},

{
  title: "Kedarnath Spiritual Yatra",
  slug: "kedarnath-spiritual-yatra",
  price: "₹18,999",
  days: "4 Days / 3 Nights",
  rating: "4.9",
  image: kedarnath,
  location: "Kedarnath, Uttarakhand",
  nextDate: "May 10, 2025",

  highlightsData: {
    locationCard: {
      meta: "1 Country, 2 Cities, 5 Locations",
      places: "Haridwar, Kedarnath",
    },
    pills: ["Temple Darshan", "Mountain Views", "Guided Yatra"],
    highlights: [
      "Kedarnath Temple Darshan",
      "Mandakini River",
      "Gaurikund",
    ],
    experiences: [
      {
        title: "Spiritual Darshan",
        desc: "Divine darshan of one of the 12 Jyotirlingas.",
      },
    ],
  },

  itinerary: [
    {
      day: "01",
      title: "Haridwar – Guptkashi",
      desc: "Scenic drive through Himalayas.",
    },
    {
      day: "02",
      title: "Kedarnath Darshan",
      desc: "Trek and temple visit.",
    },
  ],

  pointsToRemember: [
    "Medical fitness required",
    "Warm clothing mandatory",
  ],

  inclusions: {
    included: ["Hotel stay", "Breakfast & Dinner", "Transfers"],
    excluded: ["Pony / Helicopter charges"],
  },

  pricing: {
    rows: [
      { category: "Single", price: "₹18,999", unit: "per head" },
      { category: "Couple", price: "₹16,999", unit: "per head" },
    ],
    note: "Yatra dates depend on temple opening.",
  },

  terms: [
    "Weather dependent itinerary",
    "Yatra may be postponed due to landslides",
  ],

 images: [leaf, leaf, bottles, udaipur, bottles, coffee, cream, udaipur, leaf, bottles, cream, udaipur,],
},

{
  title: "Kedarnath Himalayan Trek",
  slug: "kedarnath-himalayan-trek",
  price: "₹24,999",
  days: "6 Days / 5 Nights",
  rating: "4.8",
  image: kedarnath2,
  location: "Kedarnath, Uttarakhand",
  nextDate: "June 5, 2025",

  highlightsData: {
    locationCard: {
      meta: "High Altitude Trek",
      places: "Gaurikund – Kedarnath",
    },
    pills: ["Trekking", "Camping", "Adventure"],
    highlights: [
      "Snow Trails",
      "Himalayan Camps",
      "High Altitude Views",
    ],
    experiences: [
      {
        title: "Trekking Adventure",
        desc: "Challenging Himalayan trek with expert guides.",
      },
    ],
  },

  itinerary: [
    {
      day: "01",
      title: "Arrival & Acclimatization",
      desc: "Briefing and trek preparation.",
    },
    {
      day: "02",
      title: "Trek to Kedarnath",
      desc: "Full-day mountain trek.",
    },
  ],

  pointsToRemember: [
    "High fitness level required",
    "Carry personal medication",
  ],

  inclusions: {
    included: ["Guide", "Meals", "Camping gear"],
    excluded: ["Personal trekking gear"],
  },

  pricing: {
    rows: [
      { category: "Single", price: "₹24,999", unit: "per head" },
    ],
    note: "Subject to weather & trail conditions.",
  },

  terms: [
    "Adventure risk involved",
    "Insurance recommended",
  ],
images: [leaf, leaf, bottles, udaipur, bottles, coffee, cream, udaipur, leaf, bottles, cream, udaipur,],
},

{
  title: "Kashmir Paradise Escape",
  slug: "kashmir-paradise-escape",
  price: "₹32,999",
  days: "6 Days / 5 Nights",
  rating: "4.8",
  image: kashmir1,
  location: "Kashmir, India",
  nextDate: "July 15, 2025",

  highlightsData: {
    locationCard: {
      meta: "1 Country, 3 Cities, 7 Locations",
      places: "Srinagar, Sonamarg, Gulmarg",
    },
    pills: ["Breakfast Included", "Mountain Views", "Local Guide"],
    highlights: [
      "Sonamarg Meadows",
      "Gulmarg Gondola",
      "Dal Lake Shikara Ride",
    ],
    experiences: [
      {
        title: "Shikara Ride",
        desc: "Relaxing boat ride on Dal Lake.",
      },
    ],
  },

  itinerary: [
    {
      day: "01",
      title: "Arrival in Srinagar",
      desc: "Welcome and local sightseeing.",
    },
    {
      day: "02",
      title: "Gulmarg Excursion",
      desc: "Snow views and gondola ride.",
    },
  ],

  pointsToRemember: [
    "Carry warm clothes",
    "Weather dependent activities",
  ],

  inclusions: {
    included: ["Hotel stay", "Breakfast", "Transfers"],
    excluded: ["Airfare", "Personal expenses"],
  },

  pricing: {
    rows: [
      { category: "Single", price: "₹32,999", unit: "per head" },
      { category: "Couple", price: "₹29,999", unit: "per head" },
    ],
    note: "Rates may vary during snowfall season.",
  },

  terms: [
    "Itinerary subject to weather",
    "Sightseeing may change",
  ],
images: [leaf, leaf, bottles, udaipur, bottles, coffee, cream, udaipur, leaf, bottles, cream, udaipur,],
},

{
  title: "Manali Scenic Escape",
  slug: "manali-scenic-escape",
  price: "₹27,999",
  days: "5 Days / 4 Nights",
  rating: "4.7",
  image: manali3,
  location: "Manali, Himachal Pradesh",
  nextDate: "August 10, 2025",

  highlightsData: {
    locationCard: {
      meta: "1 Country, 2 Cities, 5 Locations",
      places: "Manali, Solang",
    },
    pills: ["Snow Views", "Local Sightseeing"],
    highlights: [
      "Solang Valley",
      "Mall Road",
      "Hadimba Temple",
    ],
    experiences: [
      {
        title: "Mountain Views",
        desc: "Scenic Himalayan landscapes.",
      },
    ],
  },

  itinerary: [
    {
      day: "01",
      title: "Arrival in Manali",
      desc: "Local sightseeing.",
    },
  ],

  pointsToRemember: ["Carry jackets"],

  inclusions: {
    included: ["Hotel stay", "Breakfast"],
    excluded: ["Adventure activities"],
  },

  pricing: {
    rows: [{ category: "Couple", price: "₹27,999", unit: "per head" }],
    note: "Peak season prices may apply.",
  },

  terms: ["Hotel subject to availability"],

  images: [manali3, forest, leaf, coffee],
},

{
  title: "Rajasthan Desert Delight",
  slug: "rajasthan-desert-delight",
  price: "₹34,999",
  days: "6 Days / 5 Nights",
  rating: "4.8",
  image: rajasthan,
  location: "Rajasthan, India",
  nextDate: "September 18, 2025",

  highlightsData: {
    locationCard: {
      meta: "1 Country, 2 Cities, 6 Locations",
      places: "Jaisalmer, Jodhpur",
    },
    pills: ["Desert Safari", "Cultural Shows"],
    highlights: [
      "Sam Sand Dunes",
      "Mehrangarh Fort",
      "Camel Safari",
    ],
    experiences: [
      {
        title: "Desert Safari",
        desc: "Camel ride & folk performances.",
      },
    ],
  },

  itinerary: [
    {
      day: "01",
      title: "Arrival in Jaisalmer",
      desc: "Desert camp stay.",
    },
  ],

  pointsToRemember: ["Carry sunscreen"],

  inclusions: {
    included: ["Hotel stay", "Breakfast", "Cultural show"],
    excluded: ["Personal expenses"],
  },

  pricing: {
    rows: [{ category: "Single", price: "₹34,999", unit: "per head" }],
    note: "Desert camps subject to availability.",
  },

  terms: ["Weather dependent itinerary"],
images: [leaf, leaf, bottles, udaipur, bottles, coffee, cream, udaipur, leaf, bottles, cream, udaipur,],
},




];

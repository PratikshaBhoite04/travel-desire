function TourTabs() {
  const tabs = ["Highlights", "Inclusions", "Itinerary", "Pricing"];

  return (
    <div className="flex gap-3 mb-8">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full text-sm border ${
            tab === "Highlights"
              ? "bg-[#D5FB93] text-black"
              : "bg-white text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TourTabs;

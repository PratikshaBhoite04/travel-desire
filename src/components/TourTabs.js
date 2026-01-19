const tabs = [
  { key: "highlights", label: "Highlights" },
  { key: "inclusions", label: "Inclusions" },
  { key: "itinerary", label: "Itinerary" },
  { key: "pricing", label: "Pricing" },
  { key: "terms", label: "Terms & Conditions" },
  { key: "images", label: "Images" },
];

function TourTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`
            px-5 py-2 rounded-full text-sm font-medium transition
            ${
              activeTab === tab.key
                ? "bg-[#D9FF8F] text-[#0F2F24]"
                : "border border-gray-300 text-gray-500 hover:bg-gray-100"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TourTabs;

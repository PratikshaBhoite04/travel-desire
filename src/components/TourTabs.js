import React from 'react';

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
    /* The outer wrapper ensures the component stays within the viewport */
    <div className="w-full max-w-[100vw] overflow-hidden mb-8">
      
      {/* 1. overflow-x-auto: Allows scrolling
         2. no-scrollbar: Hides scrollbar (via style tag below)
         3. px-4: Matches your page's side padding so the first tab isn't stuck to the edge
      */}
      <div 
        className="
          flex 
          items-center 
          gap-3 
          overflow-x-auto 
          flex-nowrap 
          no-scrollbar
          px-4
          md:px-0
          pb-2
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              /* flex-shrink-0: Essential so buttons don't squeeze */
              flex-shrink-0 
              px-5 
              py-2 
              rounded-full 
              text-sm 
              font-medium 
              transition-all
              whitespace-nowrap
              ${
                activeTab === tab.key
                  ? "bg-[#D5FB93] text-[#343434] text-[15px] font-[300] font-manrope py-3 px-6"
                  : "border border-gray-200 text-[#B4B4B4] bg-white"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <style jsx>{`
        /* Hides scrollbar across all browsers */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch; /* Smooth momentum scroll on iOS */
        }
      `}</style>
    </div>
  );
}

export default TourTabs;
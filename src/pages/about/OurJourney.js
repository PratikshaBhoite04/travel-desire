import React, { useState, useEffect, useRef } from 'react';
import  team7 from "../../assets/images/team7.webp";

const OurJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const itemRefs = useRef([]);

  // const journeyImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop";

  const timelineData = [
    {
      year: "2000",
      title: "Discover Your Desire",
      description: "Browse handpicked destinations, curated itineraries, and exclusive experiences designed around your travel style.",
    },
    {
      year: "2000-2002",
      title: "Discover Your Desire",
      description: "Browse handpicked destinations, curated itineraries, and exclusive experiences designed around your travel style.",
    },
    {
      year: "2002 – 2005",
      title: "Expanding Horizons",
      description: "Expanded into international destinations and built strong global travel partnerships.",
    },
    {
      year: "2010",
      title: "Trusted Travel Brand",
      description: "Became a trusted travel brand, serving over 10,000 happy travelers across India and beyond.",
    },
    {
      year: "2020 – Present",
      title: "Innovation & Experience",
      description: "Leveraging technology and personalization to craft seamless, unforgettable travel experiences.",
    }
  ];

  useEffect(() => {
    // Only use the scroll container as root if we are on desktop (md and above)
    const isMobile = window.innerWidth < 768;
    
    const observerOptions = {
      root: isMobile ? null : scrollContainerRef.current,
      rootMargin: isMobile ? '-20% 0px -50% 0px' : '-10% 0px -60% 0px', 
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.indexOf(entry.target);
          if (index !== -1) setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 md:py-20 bg-white">
      {/* TITLE - Responsive Font Sizes */}
      <h2 className="text-center font-tiempos font-medium text-[36px] md:text-[56.56px] leading-tight md:leading-[56.56px] mb-10 md:mb-16 px-4">
        Our <span className="text-[#1EEBD9]">Journey</span>
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        
        {/* LEFT IMAGE - Non-sticky on mobile to prevent overlap */}
<div className="hidden md:block w-full h-[520px] rounded-[24px] overflow-hidden sticky top-24 shadow-sm">
          <img
            src={team7}
            alt="Our Journey"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT TIMELINE */}
        <div 
          ref={scrollContainerRef}
          className="relative h-auto md:h-[520px] md:overflow-y-auto md:pr-6 custom-scrollbar"
        >
          <ul className="relative">
            
            {/* THE VERTICAL LINE */}
            {/* Height is controlled by top/bottom offsets. bottom-[410px] is for desktop logic. */}
            <div 
              className="absolute top-4 bottom-[200px] md:bottom-[410px] w-[2px] bg-[#E6EDED]" 
              style={{ left: '19px' }} 
            />

            {timelineData.map((item, index) => (
              <li 
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`relative pl-[56px] md:pl-[64px] pb-16 md:pb-24 transition-all duration-700 ease-in-out
                 ${activeIndex === index ? 'opacity-100' : 'md:opacity-40 opacity-100'}`}
              >
                {/* THE DOT */}
                <span 
                  className={`absolute left-[16px] top-[10px] w-2 h-2 rounded-full z-20 transition-all duration-500
                 ${activeIndex === index 
  ? 'bg-[#1EEBD9] scale-150 ring-4 ring-[#1EEBD9]/20' 
  : 'bg-[#DADADA] scale-100'}
`}
                />

                {/* YEAR */}
                <p className={`font-manrope font-medium text-[13px] md:text-[14.58px] mb-1 transition-colors duration-500
                  ${activeIndex === index ? 'text-[#1EEBD9]' : 'text-[#717171]'}`}>
                  {item.year}
                </p>

                {/* ITEM TITLE */}
                <h4 className="mt-1 font-manrope font-medium text-[20px] md:text-[22.11px] text-[#0F2F24]">
                  {item.title}
                </h4>

                {/* DESCRIPTION */}
                <p className="mt-2 font-manrope font-regular text-[13px] md:text-[13.4px] leading-[20px] md:leading-[20.93px] text-[#717171] max-w-[550px]">
                  {item.description}
                </p>
              </li>
            ))}
            
            {/* SPACER for scrolling logic - only needed on desktop scroll box */}
            <div className="hidden md:block h-[300px]" />
          </ul>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 0px; }
        .custom-scrollbar { scrollbar-width: none; -ms-overflow-style: none; scroll-behavior: smooth; }
      `}</style>
    </section>
  );
};

export default OurJourney;
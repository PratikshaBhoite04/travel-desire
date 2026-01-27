import { useEffect, useRef, useState } from "react";

export default function useScrollReveal(threshold = 0.3) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -80px 0px", 
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

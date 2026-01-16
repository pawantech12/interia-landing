"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed right-6 bottom-[100px] z-40
        h-11 w-11
        rounded-full
        bg-neutral-900/80 backdrop-blur-xl
        border border-white/15
        flex items-center justify-center
        text-neutral-300
        shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)]
        transition-all duration-300
        hover:border-amber-400/50
        hover:text-amber-400
        hover:-translate-y-1
        ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }
      `}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
};

export default ScrollToTop;

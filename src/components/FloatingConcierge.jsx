import React, { useState, useEffect } from "react";

const FloatingConcierge = ({ phone }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-10 right-10 z-[100] transition-all duration-1000 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-end"
      >
        {/* The Tooltip/Text (Slides out on group hover) */}
        <div className="absolute right-full mr-4 px-5 py-2 glass-gold rounded-full border border-white/10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 whitespace-nowrap">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-champagne">
            Request Concierge
          </p>
        </div>

        {/* The Outer Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-champagne/20 animate-ping group-hover:animate-none" />

        {/* The Main Interactive Core */}
        <div className="relative w-14 h-14 bg-obsidian border border-champagne/30 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:border-champagne group-hover:scale-110">
          {/* WhatsApp / Phone Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-champagne transition-transform duration-700 group-hover:rotate-[360deg]"
          >
            <path
              d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7112 18.3098 17.8992 16.9674 18.7303C15.6251 19.5614 14.0705 20.0073 12.478 20.02C11.192 20.0247 9.91901 19.7408 8.76001 19.19L3 21L4.81 15.24C4.26001 14.08 3.97495 12.8099 3.98001 11.53C3.99268 9.9375 4.43857 8.3829 5.26966 7.04058C6.10074 5.69827 7.28879 4.6136 8.7 3.90803C9.87809 3.31294 11.1801 3.00465 12.5 3.00803H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 20.992 11L21 11.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Hidden "Active" Dot */}
          <div className="absolute top-3 right-3 w-2 h-2 bg-emerald-500 rounded-full border border-obsidian" />
        </div>

        {/* Subtle Bottom Glow */}
        <div className="absolute -bottom-2 w-full h-4 bg-champagne/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </div>
  );
};

export default FloatingConcierge;

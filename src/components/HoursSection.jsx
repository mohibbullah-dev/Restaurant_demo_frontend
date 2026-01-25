import React from "react";
import { restaurant } from "../config/restaurant";

const HoursSection = () => {
  return (
    <div className="relative group h-full">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-champagne/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="h-full glass-gold p-12 rounded-[3rem] border border-white/5 relative overflow-hidden flex flex-col justify-center">
        {/* Decorative Background Dial */}
        <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none">
          <svg
            width="200"
            height="200"
            viewBox="0 0 100 100"
            className="animate-[spin_60s_linear_infinite]"
          >
            <path
              d="M50 50 m -40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0"
              fill="none"
              stroke="currentColor"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Header with Live Badge */}
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-2xl font-serif italic text-mist">
            Opening Hours
          </h3>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest text-mist">
              Live
            </span>
          </div>
        </div>

        {/* Editorial List */}
        <div className="space-y-6 relative z-10">
          {restaurant.hours.map((h, i) => (
            <div key={i} className="flex items-end justify-between group/line">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-smoke group-hover/line:text-champagne transition-colors duration-300">
                {h.day}
              </span>

              {/* The "Elite" Dotted Leader */}
              <div className="flex-1 mx-4 border-b border-dotted border-white/10 mb-1.5 group-hover/line:border-champagne/30 transition-colors duration-300" />

              <span className="text-sm font-medium text-mist font-mono tracking-widest">
                {h.time}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 pt-8 border-t border-white/5">
          <p className="text-[10px] text-center text-smoke/60 uppercase tracking-[0.2em]">
            * Late night service available on request
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoursSection;

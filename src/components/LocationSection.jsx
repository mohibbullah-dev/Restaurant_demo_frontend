import React from "react";
import { restaurant } from "../config/restaurant";

const LocationSection = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      {/* Address & Action Card */}
      <div className="glass p-10 rounded-[3rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-white/10 transition-colors">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-champagne text-[10px] font-black uppercase tracking-[0.4em]">
            Location
          </p>
          <p className="text-xl text-mist font-light leading-relaxed max-w-xs">
            {restaurant.addressLine}
          </p>
        </div>

        {/* Circular Action Buttons */}
        <div className="flex gap-4">
          <a
            href={restaurant.mapEmbedUrl}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-full rounded-full border border-white/10 flex items-center justify-center text-mist hover:bg-champagne hover:text-obsidian hover:scale-110 transition-all duration-300"
            title="Get Directions"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
          </a>
          <a
            href={`tel:${restaurant.phone}`}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-mist hover:bg-champagne hover:text-obsidian hover:scale-110 transition-all duration-300"
            title="Call Concierge"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
          </a>
        </div>
      </div>

      {/* The Cinematic Map */}
      <div className="relative flex-1 min-h-[400px] w-full rounded-[3rem] overflow-hidden border border-white/5 shadow-3xl group">
        {/* Overlay Gradients for 'Dark Mode' Effect */}
        <div className="absolute inset-0 z-10 bg-obsidian/20 pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-transparent to-transparent pointer-events-none" />

        <iframe
          title="map"
          src={restaurant.mapEmbedUrl}
          className="w-full h-full grayscale invert brightness-[0.8] contrast-[1.1] opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
          loading="lazy"
        />

        {/* Floating Valet Pill */}
        <div className="absolute bottom-8 left-8 z-20">
          <div className="glass-gold px-6 py-4 rounded-2xl border border-white/10 backdrop-blur-md flex items-center gap-4">
            <div className="p-2 rounded-full bg-champagne/10 text-champagne">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6h18" />
                <path d="M7 6v12" />
                <path d="M13 6v12" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mist">
                Private Parking
              </p>
              <p className="text-[9px] text-smoke/80 font-mono">
                Valet Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;

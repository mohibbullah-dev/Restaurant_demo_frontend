import React from "react";

const EliteBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-obsidian overflow-hidden">
      {/* 1. Subtle Grain Texture (Makes the black feel like premium matte paper) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* 2. Architectural Grid (Art Deco Style) */}
      <div className="absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 120 0 L 0 0 0 120"
                fill="none"
                stroke="url(#gold-grad)"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 3. Floating Ambient Orbs (Slow Breathing) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-champagne/5 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-barolo/5 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />

      {/* 4. Fine Topographic Lines (Luxury Detail) */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,200 Q250,150 500,200 T1000,200"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1"
        />
        <path
          d="M0,400 Q250,350 500,400 T1000,400"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1"
        />
        <path
          d="M0,600 Q250,550 500,600 T1000,600"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default EliteBackground;

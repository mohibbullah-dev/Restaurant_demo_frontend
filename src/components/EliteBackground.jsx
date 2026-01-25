import React from "react";

const EliteBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#060709] overflow-hidden">
      {/* 1. Deep Vignette Spotlight (Adds Depth and focus) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#060709_100%)] z-10 opacity-60" />

      {/* 2. Premium Noise / Grain (Increased Opacity for Texture) */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-screen pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* 3. High-Contrast Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_90%)]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-gold"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="url(#gold-shine)"
                strokeWidth="0.8"
              />
            </pattern>
            <linearGradient id="gold-shine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c5a059" stopOpacity="1" />
              <stop offset="50%" stopColor="#8d6e42" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c5a059" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-gold)" />
        </svg>
      </div>

      {/* 4. Ambient Luxury Orbs (Increased Vibrancy) */}
      <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-champagne/10 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-barolo/10 blur-[140px] rounded-full animate-pulse [animation-delay:3s]" />

      {/* 5. Sharp Decorative Accents (The 'Elite' Detail) */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          {/* Diagonal slash for modern feel */}
          <line
            x1="0"
            y1="0"
            x2="1000"
            y2="1000"
            stroke="#c5a059"
            strokeWidth="0.5"
          />
          <line
            x1="1000"
            y1="0"
            x2="0"
            y2="1000"
            stroke="#c5a059"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default EliteBackground;

import React from "react";

const EliteBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
      {/* 1. MASTER TEXTURE: Subtle noise to break digital flatness */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 2. THE VIGNETTE: Creates a professional "Frame" around your content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(11,12,16,0)_0%,_rgba(5,5,5,1)_100%)] z-20" />

      {/* 3. ARCHITECTURAL DEPTH: The Grid as a 3D floor rather than a flat wall */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #c5a059 1px, transparent 1px),
              linear-gradient(to bottom, #c5a059 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)",
            transform: "rotateX(15deg) scale(1.2)",
          }}
        />
      </div>

      {/* 4. MOVING LIGHT (The "Luxury Hotel" Feel): 
          This follows a slow path to simulate ambient lighting movement */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-champagne/10 blur-[120px] rounded-full animate-[ambient_20s_infinite_alternate]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-bronze/5 blur-[150px] rounded-full animate-[ambient_25s_infinite_alternate-reverse]" />
      </div>

      {/* 5. THE "ETCHED GOLD" ACCENTS: Fine details at the corners */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-30">
        <defs>
          <linearGradient id="gold-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#c5a059" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Top Accent */}
        <rect
          x="10%"
          y="40px"
          width="80%"
          height="0.5"
          fill="url(#gold-line)"
        />
        {/* Bottom Accent */}
        <rect
          x="10%"
          y="calc(100% - 40px)"
          width="80%"
          height="0.5"
          fill="url(#gold-line)"
        />
      </svg>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes ambient {
          0% { transform: translate(-10%, -10%) scale(1); }
          100% { transform: translate(10%, 10%) scale(1.1); }
        }
      `,
        }}
      />
    </div>
  );
};

export default EliteBackground;

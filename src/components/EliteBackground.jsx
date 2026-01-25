// import React from "react";

// const EliteBackground = () => {
//   return (
//     <div className="fixed inset-0 -z-10 bg-[#080808] overflow-hidden">
//       {/* 1. THE FOUNDATION: Subtle Noise Texture for a "Paper" feel */}
//       <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

//       {/* 2. THE LIQUID SILK: Large, extremely blurred organic shapes */}
//       <div className="absolute inset-0 filter blur-[120px] opacity-40">
//         {/* Deep Gold Glow */}
//         <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#c5a059]/15 rounded-full animate-[float_15s_infinite_alternate]" />

//         {/* Subtle Barolo (Deep Wine) Accents */}
//         <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-[#4a0404]/20 rounded-full animate-[float_18s_infinite_alternate-reverse]" />

//         {/* Center Highlight */}
//         <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-[#8d6e42]/10 rounded-full animate-[float_20s_infinite_linear]" />
//       </div>

//       {/* 3. THE ARCHITECTURAL FRAME: Minimalist border detail instead of a grid */}
//       <div className="absolute inset-8 border-[0.5px] border-white/5 pointer-events-none">
//         {/* Corner Accents */}
//         <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-champagne/40" />
//         <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-champagne/40" />
//         <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-champagne/40" />
//         <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-champagne/40" />
//       </div>

//       {/* 4. LIGHT STREAK: A single elegant diagonal beam */}
//       <div
//         className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(135deg, transparent 40%, rgba(197, 160, 89, 0.2) 50%, transparent 60%)",
//           backgroundSize: "200% 200%",
//           animation: "shimmer 12s infinite linear",
//         }}
//       />

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @keyframes float {
//           0% { transform: translate(0, 0) scale(1); }
//           50% { transform: translate(5%, 10%) scale(1.1); }
//           100% { transform: translate(-5%, 5%) scale(0.95); }
//         }
//         @keyframes shimmer {
//           0% { background-position: -200% -200%; }
//           100% { background-position: 200% 200%; }
//         }
//       `,
//         }}
//       />
//     </div>
//   );
// };

// export default EliteBackground;

import React from "react";

const EliteBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
      {/* 1. BASE TEXTURE: High-end matte paper feel */}
      <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 2. THE DYNAMIC LIGHT: Soft, elegant movement that feels like luxury lighting */}
      <div className="absolute inset-0 filter blur-[100px] sm:blur-[150px] opacity-30">
        {/* Primary Champagne Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#c5a059]/20 rounded-full animate-[drift_20s_infinite_alternate]" />

        {/* Subtle Bronze Counter-light */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#8d6e42]/15 rounded-full animate-[drift_25s_infinite_alternate-reverse]" />

        {/* Deep Barolo Accent for warmth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#4a0404]/10 rounded-full animate-pulse" />
      </div>

      {/* 3. ARCHITECTURAL ELEMENTS: Minimalist geometry instead of a busy grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Thin vertical accent lines */}
        <line
          x1="20%"
          y1="0"
          x2="20%"
          y2="100%"
          stroke="url(#line-grad)"
          strokeWidth="0.5"
        />
        <line
          x1="80%"
          y1="0"
          x2="80%"
          y2="100%"
          stroke="url(#line-grad)"
          strokeWidth="0.5"
        />

        {/* Horizontal structural beams */}
        <line
          x1="0"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="url(#line-grad)"
          strokeWidth="0.3"
          strokeDasharray="5,5"
        />
        <line
          x1="0"
          y1="70%"
          x2="100%"
          y2="70%"
          stroke="url(#line-grad)"
          strokeWidth="0.3"
          strokeDasharray="5,5"
        />
      </svg>

      {/* 4. THE VIGNETTE: Focuses the user's eye on the center content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_90%)] z-10" />

      {/* 5. INTERACTIVE LIGHT: A soft beam that adds "life" to the page */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen"
        style={{
          background:
            "linear-gradient(45deg, transparent 45%, rgba(197, 160, 89, 0.3) 50%, transparent 55%)",
          backgroundSize: "250% 250%",
          animation: "shimmer 15s infinite linear",
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes drift {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(10%, 10%) scale(1.1); }
        }
        @keyframes shimmer {
          0% { background-position: -150% -150%; }
          100% { background-position: 150% 150%; }
        }
      `,
        }}
      />
    </div>
  );
};

export default EliteBackground;

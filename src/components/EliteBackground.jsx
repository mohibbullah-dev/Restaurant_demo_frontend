import React from "react";

const EliteBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#080808] overflow-hidden">
      {/* 1. THE FOUNDATION: Subtle Noise Texture for a "Paper" feel */}
      <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 2. THE LIQUID SILK: Large, extremely blurred organic shapes */}
      <div className="absolute inset-0 filter blur-[120px] opacity-40">
        {/* Deep Gold Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#c5a059]/15 rounded-full animate-[float_15s_infinite_alternate]" />

        {/* Subtle Barolo (Deep Wine) Accents */}
        <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-[#4a0404]/20 rounded-full animate-[float_18s_infinite_alternate-reverse]" />

        {/* Center Highlight */}
        <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-[#8d6e42]/10 rounded-full animate-[float_20s_infinite_linear]" />
      </div>

      {/* 3. THE ARCHITECTURAL FRAME: Minimalist border detail instead of a grid */}
      <div className="absolute inset-8 border-[0.5px] border-white/5 pointer-events-none">
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-champagne/40" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-champagne/40" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-champagne/40" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-champagne/40" />
      </div>

      {/* 4. LIGHT STREAK: A single elegant diagonal beam */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, rgba(197, 160, 89, 0.2) 50%, transparent 60%)",
          backgroundSize: "200% 200%",
          animation: "shimmer 12s infinite linear",
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5%, 10%) scale(1.1); }
          100% { transform: translate(-5%, 5%) scale(0.95); }
        }
        @keyframes shimmer {
          0% { background-position: -200% -200%; }
          100% { background-position: 200% 200%; }
        }
      `,
        }}
      />
    </div>
  );
};

export default EliteBackground;

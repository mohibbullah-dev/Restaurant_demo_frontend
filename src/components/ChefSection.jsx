export const ChefSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 relative">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        {/* Left: Content */}
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-4">
            <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
              The Visionary
            </p>
            <h2 className="text-6xl font-serif italic gold-gradient-text leading-tight">
              A Legacy of <br /> Culinary Art.
            </h2>
          </div>

          <p className="text-smoke text-xl font-light leading-relaxed italic border-l-2 border-champagne/20 pl-8">
            "We do not simply prepare food. We translate seasonal emotions into
            a visual and gustatory narrative that lingers long after the final
            course."
          </p>

          <div className="pt-4">
            <p className="text-mist font-bold uppercase tracking-[0.3em] text-sm">
              Chef Julian Aurelius
            </p>
            <p className="text-champagne/60 text-[10px] uppercase tracking-[0.2em] mt-1">
              Executive Culinary Director
            </p>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="relative order-1 lg:order-2">
          <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
            <img
              src="https://images.unsplash.com/photo-1583394293214-28dea15ee548?q=80&w=1974&auto=format&fit=crop"
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 ease-in-out"
              alt="Executive Chef"
            />
          </div>
          {/* Floating Aesthetic Element */}
          <div className="absolute -bottom-8 -left-8 glass-gold p-10 rounded-3xl border border-white/10 shadow-3xl hidden md:block">
            <p className="font-serif italic text-champagne text-5xl opacity-80">
              Aurelius
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

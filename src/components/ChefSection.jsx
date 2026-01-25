export const ChefSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-champagne/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* LEFT: Portrait Composition (5/12 Columns) */}
        <div className="lg:col-span-5 relative group order-2 lg:order-1">
          <div className="relative">
            {/* Main Image */}
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl transform group-hover:scale-[1.01] transition-transform duration-1000">
              <img
                src="https://images.unsplash.com/photo-1577214195070-36266b739501?q=80&w=1974&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale brightness-90 contrast-110 hover:grayscale-0 transition-all duration-1000"
                alt="Executive Chef"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
            </div>

            {/* Accent Floating Image (Chef's Hands/Action) */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-3xl overflow-hidden border border-white/10 shadow-2xl hidden xl:block animate-float">
              <img
                src="https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale"
                alt="Chef's Detail"
              />
            </div>
          </div>

          {/* Signature Badge */}
          <div className="absolute -bottom-6 -left-6 glass-gold p-8 rounded-[2.5rem] border border-white/10 shadow-3xl">
            <p className="font-serif italic text-champagne text-4xl leading-none">
              Aurelius
            </p>
            <div className="h-px w-12 bg-champagne/30 mt-4" />
          </div>
        </div>

        {/* RIGHT: The Narrative (7/12 Columns) */}
        <div className="lg:col-span-7 space-y-12 lg:pl-12 order-1 lg:order-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-champagne/40" />
              <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
                The Maestro
              </p>
            </div>

            <h2 className="text-6xl md:text-8xl font-serif italic gold-gradient-text leading-[0.9] tracking-tighter">
              Crafting <br />
              <span className="text-mist not-italic font-sans font-bold uppercase text-4xl md:text-5xl">
                Culinary Landmarks.
              </span>
            </h2>

            <p className="text-smoke text-xl font-light leading-relaxed max-w-2xl italic">
              "Every plate is a canvas of heritage. We do not simply prepare
              food; we architect memories using the primitive elements of fire,
              salt, and seasonal soul."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12 pt-8 border-t border-white/5">
            <div className="space-y-3">
              <p className="text-mist font-bold uppercase tracking-widest text-xs">
                Excellence in Origin
              </p>
              <p className="text-smoke/60 text-sm leading-relaxed font-light">
                Chef Aurelius personally visits our heritage farms every Tuesday
                to secure the week's prime harvest.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-mist font-bold uppercase tracking-widest text-xs">
                The Visionary
              </p>
              <div className="space-y-1">
                <p className="text-mist text-sm font-bold">Julian Aurelius</p>
                <p className="text-champagne/60 text-[10px] uppercase tracking-widest">
                  Two-Decade Culinary Veteran
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button className="flex items-center gap-4 text-mist font-black uppercase text-[10px] tracking-[0.4em] group">
              Explore the Philosophy
              <div className="h-px w-8 bg-mist group-hover:w-16 transition-all duration-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

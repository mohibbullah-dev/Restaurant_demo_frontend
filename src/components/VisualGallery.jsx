export const VisualGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid grid-cols-12 grid-rows-2 gap-6 h-[800px]">
        {/* Large Feature Image */}
        <div className="col-span-12 md:col-span-8 row-span-2 relative overflow-hidden rounded-[3rem] border border-white/10">
          <img
            src={images[0]}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute bottom-10 left-10 glass-gold p-6 rounded-2xl border border-white/10">
            <p className="text-mist font-serif italic text-xl">The Main Hall</p>
          </div>
        </div>

        {/* Top Right Small */}
        <div className="hidden md:block col-span-4 row-span-1 relative overflow-hidden rounded-[3rem] border border-white/10">
          <img
            src={images[1]}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
          />
        </div>

        {/* Bottom Right Small (Text-Based) */}
        <div className="hidden md:flex col-span-4 row-span-1 glass-gold rounded-[3rem] border border-white/5 flex-col justify-center p-12 text-center items-center space-y-4">
          <div className="w-12 h-12 rounded-full border border-champagne/30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
          </div>
          <p className="text-champagne font-serif italic text-2xl leading-tight">
            "A masterclass in contemporary elegance."
          </p>
          <p className="text-[9px] uppercase tracking-[0.4em] text-smoke">
            The Culinary Review
          </p>
        </div>
      </div>
    </section>
  );
};

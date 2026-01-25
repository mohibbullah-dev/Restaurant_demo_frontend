export const EventsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="relative rounded-[4rem] overflow-hidden bg-white/[0.02] border border-white/5">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Private Dining Room"
            />
            <div className="absolute inset-0 bg-obsidian/40" />
          </div>

          {/* Text Side */}
          <div className="p-12 md:p-20 space-y-8">
            <div className="space-y-4">
              <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
                Bespoke Hosting
              </p>
              <h2 className="text-5xl font-serif italic text-mist">
                Private Celebrations
              </h2>
              <p className="text-smoke text-lg font-light leading-relaxed">
                From corporate retreats to intimate milestone dinners, our
                atelier transforms into your private sanctuary. Dedicated staff,
                custom menus, and absolute discretion.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <button className="px-10 py-5 bg-champagne text-obsidian font-black uppercase text-[10px] tracking-[0.4em] rounded-xl hover:scale-105 transition-transform">
                Inquire for Availability
              </button>
              <p className="text-[9px] text-smoke/50 uppercase tracking-widest">
                * Accommodations for 10 to 50 guests
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

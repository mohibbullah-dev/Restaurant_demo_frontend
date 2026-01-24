import React from "react";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-champagne/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-duration-1000" />
          <img
            src="https://images.unsplash.com/photo-1550966842-2849a2202721?q=80&w=1974&auto=format&fit=crop"
            className="relative rounded-[3rem] border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Interior"
          />
        </div>
        <div className="space-y-8">
          <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
            The Philosophy
          </p>
          <h2 className="text-5xl font-serif italic gold-gradient-text leading-tight">
            A Symphony of <br /> Flavor & Elegance
          </h2>
          <p className="text-smoke text-lg font-light leading-relaxed">
            At {restaurant.name}, we believe dining is more than a meal—it's a
            curated performance. Each ingredient is sourced with uncompromising
            standards to bring you an unparalleled culinary narrative.
          </p>
          <div className="pt-4 flex gap-8">
            <div>
              <p className="text-2xl font-bold text-mist">100%</p>
              <p className="text-[9px] uppercase tracking-widest text-smoke">
                Organic Sourcing
              </p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-mist">Elite</p>
              <p className="text-[9px] uppercase tracking-widest text-smoke">
                Chef Curation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

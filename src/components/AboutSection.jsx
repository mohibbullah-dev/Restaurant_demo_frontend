import React from "react";
import { restaurant } from "../config/restaurant";

const AboutSection = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      {/* Decorative Background Element - Subtle Gold Flare */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-champagne/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-16 items-center">
        {/* LEFT COLUMN: The Visual Composition (5/12 columns) */}
        <div className="lg:col-span-5 relative group">
          {/* Main Image Frame */}
          <div className="relative z-10 rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl transform group-hover:scale-[1.02] transition-transform duration-1000">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
              className="w-full aspect-[4/5] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
              alt="Luxury Restaurant Interior"
            />
            {/* Dark inner vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
          </div>

          {/* Floating Experience Card */}
          <div className="absolute -bottom-10 -right-10 z-20 glass-gold p-8 rounded-[2rem] border border-white/10 shadow-2xl hidden md:block animate-float">
            <p className="text-champagne font-serif italic text-3xl mb-1">
              Since 2018
            </p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-smoke">
              The Standard of Excellence
            </p>
          </div>

          {/* Abstract Border Accent */}
          <div className="absolute -inset-4 border border-champagne/20 rounded-[4.5rem] -z-10 translate-x-4 translate-y-4" />
        </div>

        {/* RIGHT COLUMN: The Narrative (7/12 columns) */}
        <div className="lg:col-span-7 space-y-12 lg:pl-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-champagne/40" />
              <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
                The Heritage
              </p>
            </div>

            <h2 className="text-6xl md:text-7xl font-serif italic gold-gradient-text leading-[1.1] tracking-tight">
              Crafting Moments <br />
              <span className="text-mist not-italic font-sans font-bold uppercase text-4xl md:text-5xl block mt-2">
                Beyond the Plate.
              </span>
            </h2>

            <p className="text-smoke text-xl font-light leading-relaxed max-w-2xl">
              At{" "}
              <span className="text-mist font-medium">{restaurant.name}</span>,
              we don't just serve food; we host a curated sensory journey. Every
              table is a stage, and every dish is a meticulously composed
              masterpiece of seasonal alchemy.
            </p>
          </div>

          {/* Advanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
            <div className="space-y-2">
              <p className="text-3xl font-light text-mist">
                100<span className="text-champagne">%</span>
              </p>
              <p className="text-[10px] uppercase tracking-widest text-smoke font-bold">
                Organic Origin
              </p>
              <p className="text-[10px] text-smoke/50 leading-tight">
                Sourced from private sustainable estates.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-3xl font-light text-mist">Elite</p>
              <p className="text-[10px] uppercase tracking-widest text-smoke font-bold">
                Master Curation
              </p>
              <p className="text-[10px] text-smoke/50 leading-tight">
                Led by Michelin-standard visionaries.
              </p>
            </div>

            <div className="hidden md:block space-y-2">
              <p className="text-3xl font-light text-mist">
                24<span className="text-champagne">k</span>
              </p>
              <p className="text-[10px] uppercase tracking-widest text-smoke font-bold">
                Gold Standard
              </p>
              <p className="text-[10px] text-smoke/50 leading-tight">
                Excellence in every micro-detail.
              </p>
            </div>
          </div>

          {/* Call to Action Link */}
          <div className="pt-4">
            <button className="group flex items-center gap-4 text-mist font-black uppercase text-[10px] tracking-[0.4em] hover:text-champagne transition-colors">
              Discover Our Story
              <span className="w-8 h-px bg-mist group-hover:bg-champagne group-hover:w-12 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

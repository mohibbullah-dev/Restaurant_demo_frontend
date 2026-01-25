import React, { useState } from "react";

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How does the digital concierge work?",
      a: "Our digital interface allows you to curate a personalized selection. Once you proceed via WhatsApp, a dedicated concierge handles your request, ensuring every detail—from plating to delivery timing—is perfected.",
    },
    {
      q: "Do you accommodate private dietary needs?",
      a: "Excellence requires personalization. Our chefs are trained to adapt our signature masterpieces to accommodate any allergy or dietary preference without compromising the sensory experience.",
    },
    {
      q: "What is the notice required for reservations?",
      a: "To maintain our standard of service, we recommend 24-hour notice for evening dining and 72 hours for curated private events. However, our concierge always strives to accommodate spontaneous desires.",
    },
    {
      q: "Is there a dress code for the physical Atelier?",
      a: "We invite our guests to embrace an atmosphere of 'Sophisticated Elegance'. Smart casual or formal attire is highly encouraged to match the evening's aesthetic.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-40 relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-champagne/5 blur-[100px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-20">
        {/* Left Side: Editorial Header */}
        <div className="lg:col-span-4 space-y-6">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-px bg-champagne/40" />
            <p className="text-champagne text-[10px] font-black uppercase tracking-[0.6em]">
              Support
            </p>
          </div>
          <h2 className="text-5xl font-serif italic gold-gradient-text leading-[1.1]">
            Curated <br /> Inquiries
          </h2>
          <p className="text-smoke text-sm font-light leading-relaxed">
            Essential information regarding the {restaurant.name} experience.
            For bespoke requests, our concierge remains at your disposal.
          </p>
        </div>

        {/* Right Side: Elite Accordion */}
        <div className="lg:col-span-8 border-t border-white/10">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-white/5 overflow-hidden transition-all duration-500"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full py-10 flex items-center justify-between text-left group transition-all"
              >
                <div className="flex gap-8 items-center">
                  <span className="font-serif italic text-champagne/30 text-lg group-hover:text-champagne transition-colors">
                    0{i + 1}
                  </span>
                  <h3 className="text-mist text-xs md:text-sm font-bold uppercase tracking-[0.3em] group-hover:translate-x-2 transition-transform duration-500">
                    {faq.q}
                  </h3>
                </div>

                {/* Custom Animated Icon */}
                <div className="relative w-4 h-4">
                  <div className="absolute top-1/2 left-0 w-4 h-[1px] bg-champagne transition-transform duration-500" />
                  <div
                    className={`absolute top-0 left-1/2 w-[1px] h-4 bg-champagne transition-transform duration-500 ${activeIndex === i ? "rotate-90 opacity-0" : ""}`}
                  />
                </div>
              </button>

              {/* Answer with smooth height transition */}
              <div
                className={`transition-all duration-700 ease-in-out ${
                  activeIndex === i
                    ? "max-h-60 pb-10 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-16 max-w-2xl">
                  <p className="text-smoke text-base font-light leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

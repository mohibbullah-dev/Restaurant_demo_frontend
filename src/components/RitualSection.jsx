export const RitualSection = () => {
  const steps = [
    {
      num: "I",
      title: "The Selection",
      desc: "Curate your evening by adding seasonal masterpieces to your digital collection.",
    },
    {
      num: "II",
      title: "The Connection",
      desc: "Your preferences are transmitted to our concierge to ensure a personalized experience.",
    },
    {
      num: "III",
      title: "The Indulgence",
      desc: "Our chefs commence preparation of your selection with uncompromising precision.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-32 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="space-y-4">
          <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
            The Process
          </p>
          <h2 className="text-5xl font-serif italic gold-gradient-text">
            The Ritual of Dining
          </h2>
        </div>
        <p className="text-smoke max-w-xs text-sm font-light leading-relaxed border-l border-white/10 pl-6">
          A seamless transition from digital curation to culinary excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="group relative p-12 glass border border-white/5 rounded-[3rem] hover:bg-white/[0.02] transition-all duration-700"
          >
            {/* Roman Numeral Background */}
            <span className="absolute top-8 right-10 text-6xl font-serif italic text-white/[0.03] group-hover:text-champagne/10 transition-colors duration-700">
              {step.num}
            </span>

            <div className="space-y-6 relative z-10">
              <div className="w-10 h-px bg-champagne/40 group-hover:w-20 transition-all duration-700" />
              <h3 className="text-xl font-bold tracking-widest text-mist uppercase">
                {step.title}
              </h3>
              <p className="text-smoke font-light leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

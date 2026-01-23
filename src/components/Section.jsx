// export default function Section({ title, subtitle, children, id }) {
//   return (
//     <section id={id} className="py-10 md:py-14">
//       <div className="max-w-6xl mx-auto px-4">
//         {(title || subtitle) && (
//           <div className="mb-6 md:mb-8">
//             {title && (
//               <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
//             )}
//             {subtitle && (
//               <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>
//             )}
//           </div>
//         )}
//         {children}
//       </div>
//     </section>
//   );
// }

export default function Section({ title, subtitle, children, id }) {
  return (
    <section id={id} className="py-12 md:py-20 relative overflow-hidden">
      {/* Decorative Section Background (Subtle Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {(title || subtitle) && (
          <div className="mb-10 md:mb-16 space-y-3">
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-display">
                {/* If title is a string, we wrap it in our gradient. 
                   If it's already a JSX element (like the one I sent in AdminMenu), it renders directly.
                */}
                {typeof title === "string" ? (
                  <span className="gold-gradient-text">{title}</span>
                ) : (
                  title
                )}
              </h2>
            )}

            {subtitle && (
              <div className="flex items-center gap-4">
                {/* 2026 Accent Line */}
                <div className="hidden md:block w-12 h-[1px] bg-champagne/40"></div>
                <p className="text-sm md:text-base text-smoke font-medium tracking-wide max-w-2xl italic opacity-80">
                  {subtitle}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Content Animation Container */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </div>
      </div>
    </section>
  );
}

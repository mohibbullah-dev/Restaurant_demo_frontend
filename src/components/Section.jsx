export default function Section({ title, subtitle, children, id }) {
  return (
    <section id={id} className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-6 md:mb-8">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

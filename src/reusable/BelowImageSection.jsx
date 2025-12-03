export default function BelowImageSection({ items = {} }) {
  const { title, description, image, bgcolor } = items;

  return (
    <section className={`px-4 sm:px-6 py-10 sm:py-14 ${bgcolor}`}>
      <div className="mx-auto max-w-2xl md:max-w-4xl lg:max-w-6xl">

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--color-heading)] leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 sm:mt-5 text-base sm:text-lg text-center text-[var(--color-paragraph)]/80 max-w-prose">
          {description}
        </p>

        {/* Image */}
        <div className="mt-8 sm:mt-12 overflow-hidden rounded-2xl sm:rounded-[28px]">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

      </div>
    </section>
  );
}

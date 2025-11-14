export default function BelowImageSection({ items = {} }) {
  const {
    title,
    description,
    image,
    bgcolor
  } = items;

  return (
    <section className={`px-4 sm:px-6 py-8 sm:py-12 ${bgcolor}`}>
      <div className="mx-auto max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--color-heading)]">
          {title}
        </h2>
        <p className="mx-auto text-base sm:text-lg mt-4 sm:mt-5 max-w-full sm:max-w-2xl md:max-w-3xl text-center text-[var(--color-paragraph)]/80">
          {description}
        </p>
        <div className="mt-6 sm:mt-10 overflow-hidden rounded-2xl sm:rounded-[28px]">
          <img
            src={image}
            alt={title}
            className="h-auto w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

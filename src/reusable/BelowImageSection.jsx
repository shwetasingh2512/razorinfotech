export default function BelowImageSection({ items = {} }) {
  const {
      title ,
      description,
      image,
      bgcolor
  } = items;

  return (
    <section className={`px-6 py-12 ${bgcolor}`} >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto text-lg mt-5 max-w-3xl text-center text-[var(--color-paragraph)]/80">
          {description}
        </p>
        <div className="mt-10 overflow-hidden rounded-[28px]">
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

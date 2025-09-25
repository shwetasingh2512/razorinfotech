export default function HeroImageBlock({ items = {} }) {
  const {
    title ,
    description,
    image,
    alt,
    bgcolor
  } = items;

  return (
    <section className={`px-6 py-12 ${bgcolor}`} >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-[var(--color-heading)] md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto text-xl mt-5 max-w-3xl text-center text-[var(--color-paragraph)]/80">
          {description}
        </p>
        <div className="mt-10 overflow-hidden rounded-[28px]">
          <img
            src={image}
            alt={alt}
            className="h-auto w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

function BackgroundImagesection({ items }) {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src={items.image}
          alt={items.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
          {items.title}
        </h2>

        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">
          {items.description}
        </p>
      </div>
    </section>
  );
}

export default BackgroundImagesection;

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
      <div className="relative z-10 mx-auto flex max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          {items.title}
        </h2>
        <p className="mt-3 sm:mt-4 max-w-full sm:max-w-xl text-base md:text-lg text-white/90">
          {items.description}
        </p>
      </div>
    </section>
  );
}

export default BackgroundImagesection;

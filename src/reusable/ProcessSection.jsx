function ProcessSection({ items }) {
  return (
    <section className={`px-6 sm:px-10 lg:px-16 py-10 sm:py-14 ${items.background}`}>
      <div className="mx-auto max-w-3xl md:max-w-4xl lg:max-w-5xl">
        <h3 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-heading leading-tight">
          {items.head}
        </h3>
        <p className="text-center mx-auto mt-3 sm:mt-4 text-base sm:text-lg text-paragraph/80 max-w-prose">
          {items.paragraph}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 mt-8 sm:mt-12">
          {items.child.map((e, i) => (
            <div key={i} className="flex flex-col gap-3">
              <img
                src={e.image}
                alt={e.title}
                className="w-full h-44 sm:h-56 lg:h-64 object-cover rounded-2xl"
              />

              <span className="text-lg sm:text-xl font-semibold text-heading">
                {e.title}
              </span>

              <p className="text-sm sm:text-base text-paragraph">
                {e.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProcessSection;

function ProcessSection({ items }) {
  return (
    <section className={`p-6 sm:p-10 lg:p-16 ${items.background}`}>
      <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl text-heading text-center">
          {items.head}
        </h3>
        <p className="text-base sm:text-md lg:text-lg text-paragraph text-center mx-auto mt-3 sm:mt-4 max-w-xl">
          {items.paragraph}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 mt-8 sm:mt-12">
          {items.child.map((e, i) => (
            <div key={i} className="flex flex-col gap-2">
              <img
                src={e.image}
                alt={e.title}
                className="w-full h-44 sm:h-56 lg:h-64 object-cover rounded-2xl"
              />
              <span className="text-lg sm:text-xl text-heading font-semibold">{e.title}</span>
              <p className="text-paragraph text-sm sm:text-base">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;

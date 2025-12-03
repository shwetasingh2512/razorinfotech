function WhychooseSection({ points }) {
  return (
    <section className={`p-6 sm:p-8 md:p-12 lg:p-16 ${points.background}`}>
      <div className="max-w-full sm:max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-heading">
            Why Choose Razor Infotech
          </h2>
          <p className="text-base sm:text-base md:text-lg text-paragraph max-w-full sm:max-w-xl md:max-w-2xl mt-3 sm:mt-4">
            We go beyond being just a service provider – we become your long-term partner. Our approach combines expertise, technology, and strategy tailored to your unique needs. With us, you gain solutions that scale as your business grows.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <img
            src={points.image}
            alt="why choose us illustration"
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.child.map((item, index) => (
              <article key={index} className="flex flex-col gap-2">
                <div className="p-3 bg-accent rounded-2xl w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center text-light-green text-sm sm:text-base font-semibold">
                  {index + 1}
                </div>
                <h3 className="text-base sm:text-lg text-heading font-semibold">{item.title}</h3>
                <p className="text-sm sm:text-base text-paragraph max-w-full sm:max-w-[30ch]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhychooseSection;

function WhychooseSection({ points }) {
  return (
    <section className={`p-8 sm:p-12 md:p-16 lg:p-20 ${points.background}`}>
      <div className="max-w-full sm:max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
        <div className="head mb-8">
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-heading block">
            Why Choose Razor Infotech
          </span>
          <p className="text-base sm:text-base md:text-lg text-paragraph max-w-full sm:max-w-xl mt-3 sm:mt-5">
            We go beyond being just a service provider – we become your long-term partner. Our approach combines expertise, technology, and strategy tailored to your unique needs. With us, you gain solutions that scale as your business grows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <img
              src={points.image}
              alt="why-choose-us-image"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.child.map((e, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="p-3 bg-accent rounded-2xl w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center text-light-green text-sm sm:text-base">
                  {i + 1}
                </div>
                <span className="text-base sm:text-lg text-heading">
                  {e.title}
                </span>
                <p className="text-sm sm:text-base text-paragraph max-w-[30ch]">
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhychooseSection

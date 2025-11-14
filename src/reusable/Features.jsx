export default function Features({ items, image }) {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-heading leading-tight max-w-full sm:max-w-lg text-center lg:text-left">
              Build a solution that wins you more customers.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
              {items.map((e, i) => {
                const Icon = e.icon;
                return (
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5" key={i}>
                    <div className="mb-3 sm:mb-4">
                      <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-green-100">
                        <Icon className="text-secondary text-base sm:text-lg" />
                      </div>
                    </div>
                    <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-heading mb-2 sm:mb-3">
                      {e.title}
                    </h2>
                    <p className="text-xs sm:text-sm leading-relaxed text-paragraph">
                      {e.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={image} 
              alt="feature-image" 
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

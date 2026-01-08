export default function Features({ items, image, imgwidth }) {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 max-w-6xl lg:max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Text + Feature List */}
          <div className="flex flex-col items-center lg:items-start space-y-6 sm:space-y-8">

            {/* Heading */}
            <h3 className="text-center lg:text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-heading leading-tight max-w-xl lg:max-w-2xl">
              Build a solution that wins you more customers.
            </h3>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl lg:max-w-2xl">
              {items.map((e, i) => {
                const Icon = e.icon;
                return (
                  <div 
                    key={i}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5 transition hover:shadow-md"
                  >
                    {/* Icon */}
                    <div className="mb-3 sm:mb-4">
                      <div className="inline-flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-green-100">
                        <Icon className="text-secondary text-lg lg:text-xl" />
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-heading mb-2 sm:mb-3">
                      {e.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm leading-relaxed text-paragraph">
                      {e.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img
              src={image}
              alt="feature-image"
              className={`${imgwidth ? imgwidth : "w-full"} max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-2xl object-cover`}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

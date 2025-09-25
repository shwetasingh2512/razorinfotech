export default function Features({ items, image }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 flex flex-col items-center lg:items-start">
            <h3 className="text-3xl lg:text-4xl font-bold text-heading leading-tight max-w-lg text-center lg:text-left">
              Build a solution that wins you more customers.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
              {items.map((e, i) => {
                const Icon = e.icon;
                return (
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6" key={i}>
                    <div className="mb-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                        <Icon className="text-secondary" />
                      </div>
                    </div>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-heading mb-3">
                      {e.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-paragraph">
                      {e.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={image} 
              alt="feature-image" 
              className="w-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

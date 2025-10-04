import React from 'react'

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

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    {items.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                    {items.description}
                </p>
            </div>
        </section>
    )
}

export default BackgroundImagesection

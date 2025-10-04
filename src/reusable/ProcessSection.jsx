

function ProcessSection({ items }) {
    return (
        <section className={`p-10 ${items.background}`}>
            <div className="max-w-5xl mx-auto">
                <h3 className="text-4xl text-heading text-center">{items.head}</h3>
                <p className="text-paragraph text-center text-md mx-auto mt-4">{items.paragraph}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-12">
                    {
                        items.child.map((e , i)=>(
                            <div className="flex flex-col gap-2">
                                <img src={e.image} alt={e.title} className="h-56 rounded-2xl" />
                                <span className="text-xl text-heading font-semibold">{e.title}</span>
                                <p className="text-paragraph text-base ">{e.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProcessSection

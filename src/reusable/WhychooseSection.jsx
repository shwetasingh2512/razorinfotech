
function WhychooseSection({ points }) {
    return (
        <section className={`p-20 ${points.background}`}>
            <div className="max-w-7xl mx-auto">
                <div className="head">
                    <span className='text-2xl font-semibold text-heading'>Why Choose Razor Infotech</span>
                    <p className='text-paragraph text-base max-w-xl mt-5 mb-8'>We go beyond being just a service provider – we become your long-term partner. Our approach combines expertise, technology, and strategy tailored to your unique needs. With us, you gain solutions that scale as your business grows.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <img src={points.image} alt="why-choose-us-image" />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {
                            points.child.map((e , i)=>(
                                <div className="flex flex-col gap-2">
                                    <div className="p-3 bg-accent rounded-2xl w-12 h-12 flex justify-center items-center text-light-green">{i+1}</div>
                                    <span className='text-xl text-heading'>{e.title}</span>
                                    <p className='text-paragraph w-[30ch] '>{e.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhychooseSection

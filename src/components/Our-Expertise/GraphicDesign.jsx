import WhychooseSection from '../../reusable/WhychooseSection';
import Faq from '../../reusable/Faq';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';

function GraphicDesign() {


    const engagements = [
        {
            title: "Logo Design",
            description: "A well-designed logo helps build brand recognition and trust among competitors. Its simplicity and versatility make it effective across various media."
        },
        {
            title: "Marketing Design ",
            description: "It includes designing brochures, flyers, and banners to attract and engage target audiences, and it plays a vital role in shaping the public perception of a brand."
        },
        {
            title: "Digital Design ",
            description: "Digital Design focuses on the creation of graphics, layouts, and interactive elements that adapt to various screen sizes and devices, and is essential for a strong online presence."
        },
        {
            title: "Advertising Design",
            description: "This involves developing eye-catching visuals and messages for ad campaigns across social media platforms and communicating brand value quickly and memorably."
        },
        {
            title: "Product Design",
            description: "The creation of the design of product labels, box designs, and product packaging that are both functional and aesthetically pleasing, for innovation and business growth."
        },
        {
            title: "Infographics ",
            description: "The use of graphics, charts, and minimal text to tell a story or explain concepts quickly. It is widely used in marketing, education, and journalism for its clarity and shareability."
        },
    ]

    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "images/Graphic-design/why-choose-us.png",
        child: [
            {
                title: "Customization",
                desc: "We believe in providing tailored designs that meet our clients' unique needs and goals, resonating with their audience."
            },
            {
                title: "Expertise",
                desc: "We have a team of experienced designers and content strategists who aim to create visually aesthetic and effective content."
            },
            {
                title: "Delivery On-Time",
                desc: "Our team understands the need to meet deadlines and is also committed to delivering high-quality service every time."
            },
            {
                title: "Collaborative Approach",
                desc: "Our team works closely with each client throughout the process and ensures that their vision is put together in the final product."
            },
        ]
    };

    const faqs = [
        {
            question: "What are the types of graphic design?",
            answer: "There are different types of graphic designs, such as web design, UI and interactive design, advertising and marketing design, motion graphics and animation, packaging design, game design, illustration, publication, and typographic design."
        },
        {
            question: "Do you specialize in specific industries? ",
            answer: "Yes, Razor Infotech has extensive experience in technology & SaaS companies, healthcare & medical, travel and hospitality, and real estate and construction services."
        },
        {
            question: "Can you work with my existing brand guidelines?",
            answer: "Yes, we adhere to existing brand systems and create consistent, on-brand designs within constraints."
        },
        {
            question: "What are the 7 rules of graphic design?",
            answer: "The basic rules of graphic design are: \nBalance \nContrast \nEmphasis \nRepetition \nAlignment \nProximity \nWhite Space"
        },
    ];


    return (
        <>
            <section className="w-full py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-snug">
                                From Strategy to Execution, We’ve<br />Got You Covered
                            </h1>

                            <p className="text-sm text-gray-600 leading-relaxed max-w-xl mb-8">
                                At Razor Infotech, we offer each of our clients tailored graphic design
                                solutions that speak to your audience. Our team uses a combination of
                                deep analysis with practical strategies to bring out ideas into a
                                creative design reality. From planning to execution, we communicate
                                with clients at every stage to ensure smarter decisions, faster
                                implementations, and measurable results.
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-4 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-white  transition"
                            >
                                View Our Services
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-green-600">
                                    <IoArrowForward />
                                </span>
                            </Link>
                        </div>

                        <div className="">
                            <img
                                src="images/Graphic-design/graphic-design-hero-image.png"
                                alt="graphic-design-hero-image"
                                className="rounded-2xl object-cover h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full linear-gradient py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
                                What's the Need for Graphic<br />Design Service
                            </h2>

                            <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-xl">
                                Graphic design helps in enhancing brand communication, improving user
                                interaction on social media platforms, engaging targeted audiences,
                                and driving sales and conversions by compelling customers to take
                                desired actions.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <span className="mt-1 h-3 w-3 rounded-full bg-black"></span>
                                    <p className="text-lg text-gray-700">
                                        It creates a unique and memorable visual identity to remember a brand.
                                    </p>
                                </li>

                                <li className="flex gap-3 items-start">
                                    <span className="mt-1 h-3 w-3 rounded-full bg-black"></span>
                                    <p className="text-lg text-gray-700">
                                        Sets a business apart from competitors in a crowded marketplace.
                                    </p>
                                </li>

                                <li className="flex gap-3 items-start">
                                    <span className="mt-1 h-3 w-3 rounded-full bg-black"></span>
                                    <p className="text-lg text-gray-700">
                                        Helps in conveying professionalism and trustworthiness with a commitment to quality.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <img
                                src="images/Graphic-design/Design-Service.jpg"
                                alt="Design Service"
                                className="w-full max-w-md rounded-2xl object-cover shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-accent py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-3">
                        Creative Graphics for An Impactful Engagement
                    </h3>

                    <p className="text-center text-sm text-gray-600 max-w-3xl mx-auto mb-14">
                        From brand-defining logo design to product design, at Razor Infotech,
                        we cover graphic design aspects for businesses.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {engagements.map((card, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-background p-6 shadow-sm"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white text-sm font-medium">
                                        {index + 1}
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900">
                                        {card.title}
                                    </h4>
                                </div>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WhychooseSection points={points} />
            <Faq faqs={faqs} />
        </>
    )
}

export default GraphicDesign
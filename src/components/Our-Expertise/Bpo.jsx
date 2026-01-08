import Faq from "../../reusable/Faq";

export default function Bpo() {
    const services = [
        {
            id: "1",
            title: "Customer Support Services",
            desc: "Inbound and outbound call center services, email, chat, and social media support to assist your customers 24/7.",
        },
        {
            id: "2",
            title: "IT Help Desk",
            desc: "Tech support for software, hardware, and product-related queries via phone, chat, or remote access.",
        },
        {
            id: "3",
            title: "Back Office Service",
            desc: "Data entry, form processing, document management, and administrative support to keep your business running smoothly.",
        },
        {
            id: "4",
            title: "Content Management Services",
            desc: "Help with server management and database handling, backend development and admin support.",
        },
        {
            id: "5",
            title: "Backend Outsourcing Services",
            desc: "Ensure business content creation and management that makes it easy to engage with the audience.",
        },
    ];


    const reasons = [
        {
            title: "Reduce Operational Costs",
            desc: "Outsourcing helps lower expenses by reducing the need for in-house staffing, infrastructure, and management overhead.",
            img: "images/Bpo/Reduce.jpg",
        },
        {
            title: "Improve Customer Experience",
            desc: "With dedicated support teams, your customers receive faster responses, improved resolution times, and easy assistance.",
            img: "images/Bpo/Improve.jpg",
        },
        {
            title: "Focus on Core Business",
            desc: "Empowering back-office and support tasks allows your internal teams to concentrate on growth, innovation, and strategy.",
            img: "images/Bpo/Focus.jpg",
        },
        {
            title: "Access to Skilled Talent",
            desc: "BPO providers offer trained professionals across domains, giving you access to industry-ready talent without hiring delays.",
            img: "images/Bpo/Access.jpg",
        },
    ];

    const faqs = [
        {
            question: "What is the full form of BPO?",
            answer: "BPO stands for Business Process Outsourcing."
        },
        {
            question: "What is a BPO service?",
            answer: "BPO is a conventional practice of hiring external companies and third-party service providers to help in performing certain tasks. Basically, it helps to handle business operations, offer affordable service without compromising quality."
        },
        {
            question: "What are the main features of BPO?",
            answer: "The main features are flexibility, cost-effectiveness, speed, enhanced efficiency, and risk management availability of the BPO workforce."
        },
        {
            question: "Is BPO a part of the IT sector?",
            answer: "Yes, BPO is considered a part of the broader Information Technology Enabled Services (ITES) industry that heavily relies on technology for various services like customer support,  data processing, etc. "
        },
        {
            question: "What are the benefits of BPO for HR?",
            answer: "The main benefits of BPO are: \nIt offers an affordable service \nConsider productivity and efficiency \nImprove the quality and performance of outsourced tasks \nRisk management \nImproves customer service"
        },
    ];

    return (
        <>
            <section className="w-full bg-white py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="w-full">
                            <img
                                src="images/Bpo/bpo-hero-image.png"
                                alt="BPO Support"
                                className="w-full h-auto rounded-xl object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-3xl font-semibold text-gray-900 mb-4 leading-snug">
                                Scalable, Efficient, &<br />
                                Customer-Centric Services
                            </h2>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                With business process outsourcing services, companies can reduce
                                overall operational costs, increase efficiency, and focus on core
                                activities.
                            </p>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Our BPO services serve companies to help them streamline their
                                non-core activities to enhance customer experience and
                                operational skills. We have teams of professionals that can
                                handle complex tasks across customer support, back-office
                                operations, and technical services.
                            </p>

                            <button className="inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-white transition">
                                Get BPO Support Today
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-green-600">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                            Proven Excellence You Can Trust
                        </h3>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-10">
                            We have over 7 years of expertise in the BPO field and a growing
                            team of skilled professionals who bring reliability, innovation,
                            and results to every project.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard title="7 Years+" subtitle="Experience in the Industry" />
                            <StatCard title="400+" subtitle="Trained Professionals" />
                            <StatCard title="100%" subtitle="Customer Satisfaction" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-background py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-center text-3xl font-semibold text-gray-900 mb-14">
                        Types of BPO Services We Offer
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-2xl bg-white p-6 shadow-sm flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white text-sm font-medium">
                                            {item.id}
                                        </span>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                <span className="mt-6 text-sm text-green-600 font-medium cursor-pointer">
                                    Learn More
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-center text-3xl font-semibold text-gray-900 mb-14">
                        Why Businesses Need BPO Services
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {reasons.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row gap-6 rounded-2xl bg-background p-6 shadow-sm"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-28 w-full sm:w-40 rounded-xl object-cover"
                                />

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Faq faqs={faqs} />
        </>
    );
}

function StatCard({ title, subtitle }) {
    return (
        <div className="rounded-xl bg-green-50 px-6 py-8 shadow-sm">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary   text-white text-sm">
                ✓
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-1">
                {title}
            </h4>
            <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
    );
}

import React from 'react'
import BackgroundImagesection from '../../reusable/BackgroundImagesection';
import Descriptionsection from '../../reusable/Descriptionsection';
import WhychooseSection from '../../reusable/WhychooseSection';
import Faq from '../../reusable/Faq';

function DataManagement() {

    const firstsection = {
        title: "Data Management Services",
        description: `Providing businesses with data management services designed to help organize, maintain, and extract value from their data.`,
        image: "/images/data-management/data-management-hero.png"
    };


    const secondsection = {
        background: "bg-background",
        title: "Data Expertise You Can Trust",
        description: `With over 7 years of experience, Razor Infotech brings you reliable and scalable data solutions that are tailored to your business goals. Our team of experts uses proven methods and leading technology, and we manage the entire data lifecycle. We serve businesses of all sizes and across various sectors with an aim to help them grow with our reliable and innovative team.`,
        image: "/images/data-management/Data-Expertise.png",
        btn: "Improve My Data Accuracy",
        width: "max-w-7xl"
    }


    const cards = [
        {
            title: "Data Integration",
            desc:
                "Seamless transitioning of data from disparate sources into a much unified and usable format.",
            image: "/images/data-management/Data-Integration.jpg",
            dark: true,
        },
        {
            title: "Data Quality Management",
            desc:
                "Cleaning, standardizing, and validating the unified data to check the accuracy and reliability.",
        },
        {
            title: "Data Governance & Compliance",
            desc:
                "Implementation of policies and frameworks to maintain a more integrated data that meets regulatory standards.",
        },
        {
            title: "Master Data Management (MDM)",
            desc:
                "This process creates a single source for all core business entities like customers, products, and suppliers.",
            image: "/images/data-management/Master.png",
            dark: true,
        },
        {
            title: "Database Administration",
            desc:
                "Regular monitoring, performance tuning, and maintenance of databases across on-premises and cloud platforms.",
            image: "/images/data-management/Data-Integration.jpg",

        },
        {
            title: "Data Migration Services",
            desc:
                "Migration of business data securely between systems or to the cloud with minimal downtime."
        },
    ];


    const advantages = [
        {
            title: "Cost Efficiency",
            description: "Partnering with us reduces your business's overhead cost of building an in-house team and infrastructure."
        },
        {
            title: "Faster Time to Value",
            description: "Our team of experts provided solutions much faster and in a pre-built framework, as time is of value."
        },
        {
            title: "Scalability",
            description: "Our services are easily scalable to match your data infrastructure, enabling growth or changes in your business."
        },
        {
            title: "Security & Compliance",
            description: "At Razor Infotech, we stay ahead when it comes to data protection and regulations with built-in governance controls."
        },
        {
            title: "Focus on Core Business",
            description: "We handle the technical heavy lifting so that businesses can focus on strategy and execution for growth."
        },
    ]

    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/Software-developement/y-choose-us.png",
        child: [
            {
                title: "Proven Track Record",
                desc: "We are trusted by many businesses across industries for mission-critical data projects."
            },
            {
                title: "Certified Experts",
                desc: "We have skilled professionals with training in our team to handle businesses of every size."
            },
            {
                title: "Customized Solutions",
                desc: "Every business is different, and we tailor our services to your exact needs."
            },
            {
                title: "Data Security First",
                desc: "We follow industry-best practices in encryption, access control, and audit trails."
            },
        ]
    }


    const faqs = [
        {
            question: "What services does Razor Infotech provide?",
            answer:
                "We offer end-to-end solutions, including IT services, BPO support, HR management, cloud solutions, cybersecurity, and digital transformation to help businesses scale with confidence.",
        },
        {
            question: "Who can businesses of different sizes benefit from our services?",
            answer:
                "We provide tailored solutions for startups, SMBs, and enterprises, ensuring value at every stage.",
        },
        {
            question: "How does Razor Infotech ensure quality and security?",
            answer:
                "We follow strict compliance, use advanced security practices, and maintain transparency with our clients.",
        },
        {
            question: "Can we customize solutions based on your business needs?",
            answer:
                "Yes, all our solutions can be customized to fit your unique business goals.",
        },
    ];


    return (
        <>
            <BackgroundImagesection items={firstsection} />
            <Descriptionsection items={secondsection} />
            <section className="px-6 py-12 bg-accent">
                <div className="mx-auto max-w-6xl">
                    <p className="text-2xl text-light-green rounded-full px-5 py-2 border border-light-green w-fit mx-auto text-center mb-4">Our Services</p>
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Types of Data Management Services Process of Data Entry Service
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {cards.map((c, i) => (
                            <article
                                key={i}
                                className={`relative overflow-hidden rounded-2xl ring-1 ring-[var(--color-paragraph)]/10 ${c.image ? "p-0" : "bg-[var(--color-background)] p-6"
                                    }`}
                            >
                                {c.image && (
                                    <>
                                        <img
                                            src={c.image}
                                            alt=""
                                            className="h-44 w-full object-cover md:h-48"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute inset-0 bg-black/45" />
                                        <div className="absolute inset-0 p-5">
                                            <h3 className="text-lg font-semibold text-white">
                                                {c.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-6 text-white/85 max-w-[48ch]">
                                                {c.desc}
                                            </p>
                                        </div>
                                    </>
                                )}

                                {!c.image && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                                            {c.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-[var(--color-paragraph)]/80">
                                            {c.desc}
                                        </p>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className='p-10 bg-accent'>
                <p className='text-center text-heading text-3xl font-bold'>Advantages of Our Data Management Service</p>
                <p className='text-base text-paragraph text-center mt-5'>Outsourcing your data management to Razor Infotech provides various strategic advantages:</p>
                <div className='max-w-6xl mx-auto'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                        {advantages.slice(0, 3).map((e, i) => (
                            <AdvantageCard key={i} title={e.title} description={e.description} />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 justify-items-center max-w-3xl mx-auto">
                        {advantages.slice(3).map((e, i) => (
                            <AdvantageCard key={i} title={e.title} description={e.description} />
                        ))}
                    </div>

                </div>
            </section>
            <WhychooseSection points={points} />
            <Faq faqs={faqs}/>
        </>
    )
}

export default DataManagement



function AdvantageCard({ title, description }) {
    return (
        <div className='bg-background  p-8 rounded-3xl'>
            <h3 className='text-heading text-xl font-semibold'>{title}</h3>
            <p className='text-paragraph text-base'>{description}</p>
        </div>
    )
}

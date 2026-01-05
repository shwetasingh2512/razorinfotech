import { lazy, Suspense } from "react";
import Descriptionsection from "../../reusable/Descriptionsection";
import WhychooseSection from "../../reusable/WhychooseSection";
import { FaUsersCog, FaClock, FaChartLine } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function BackendOutsource() {
    const firstsection = {
        title: "Reliable, Scalable, and Efficient Business Operations",
        description: "Backend outsourcing services allow businesses to offload time-consuming, technical, or repetitive processes to a dedicated team of professionals. From server management and database handling to backend development and admin support, we take care of the heavy lifting while you focus on growth and innovation.",
        image: "/images/backend-outsource/backend-outsource-hero.png",
        btn: "Outsource My Backend Today",
        link: "/contact",
        background: "bg-accent",
        imgWidth: "w-4/5",
        width: "max-w-6xl"
    };

    const benefits = [
        {
            id: 1,
            title: "Server & Infrastructure Management",
            description: "Monitoring, maintaining, and optimizing your IT infrastructure for performance and uptime.",
        },
        {
            id: 2,
            title: "Database Management",
            description: "Secure setup, administration, and optimization of structured and unstructured databases.",
        },
        {
            id: 3,
            title: "API Integration & Management",
            description: "Building and managing secure, scalable APIs for seamless frontend-backend communication.",
        },
        {
            id: 4,
            title: "Backend Development",
            description: "Robust and scalable backend code development in frameworks like Node.js, Python, PHP, and Java.",
        },
        {
            id: 5,
            title: "Admin & Operational Support",
            description: "Handling administrative processes like data entry, report generation, and workflow automation.",
        },
        {
            id: 6,
            title: "Technical Support & Maintenance",
            description: "Round-the-clock backend monitoring, troubleshooting, and maintenance services.",
        },
    ];

    const thirdsection = {
        title: "Why Businesses Need Backend Outsourcing",
        description: "Backend outsourcing allows your internal team to focus on core business activities and strategic goals while complex technical tasks like data management, server maintenance, and application development are handled by expert third-party providers. This approach reduces costs, accelerates time-to-market, and gives you access to specialized talent without the overhead of hiring full-time staff.",
        image: "/images/backend-outsource/Businesses-Need.png",
        background: "bg-background",
        imgWidth: "w-4/5",
        width: "max-w-7xl"
    };

    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/Software-developement/y-choose-us.png",
        child: [
            {
                title: "Dedicated Tech Teams",
                desc: "Our backend specialists are skilled and trained to handle complex infrastructure and backend workflows across industries."
            },
            {
                title: "Process Automation",
                desc: "We help automate repetitive backend tasks to increase operational efficiency and reduce manual errors."
            },
            {
                title: "Customized Solutions",
                desc: "Every backend solution is tailored to your specific business requirements, workflows, and technology stack."
            },
            {
                title: "Data Security First",
                desc: "We follow the best industry practices to keep your data protected and ensure regulatory compliance across all operations."
            },
        ]
    };

    const faqs = [
        {
            question: "What is backend outsourcing?",
            answer: "Backend outsourcing is the practice of delegating server-side operations, database management, API development, infrastructure maintenance, and other technical backend tasks to specialized external service providers, allowing your team to focus on core business activities."
        },
        {
            question: "What backend technologies does Razor Infotech support?",
            answer: "We work with a wide range of backend technologies including Node.js, Python (Django/Flask), PHP (Laravel), Java (Spring Boot), Ruby on Rails, .NET, and databases like MySQL, PostgreSQL, MongoDB, and Redis. We also handle cloud platforms like AWS, Azure, and Google Cloud."
        },
        {
            question: "How does backend outsourcing reduce costs?",
            answer: "Backend outsourcing eliminates expenses related to hiring, training, and maintaining in-house technical teams. You also save on infrastructure costs, software licenses, and operational overhead while getting access to expert talent at competitive rates."
        },
        {
            question: "Is my data secure with backend outsourcing?",
            answer: "Yes, we implement industry-standard security measures including encryption, secure API protocols, regular security audits, access controls, and compliance with regulations like GDPR and ISO 27001. We also sign NDAs and ensure data privacy throughout the engagement."
        },
    ];

    const advantages = [
        {
            id: 1,
            title: "Reduced Operational Costs",
            description: "Outsourcing backend tasks lowers overhead by eliminating the need for in-house infrastructure and staffing, without compromising quality.",
            icon: <FaChartLine className="text-white text-2xl" />,
        },
        {
            id: 2,
            title: "Access to Specialized Talent",
            description: "Get access to experienced developers, administrators, and IT professionals without the challenge of hiring or training internally.",
            icon: <MdOutlineGroups className="text-white text-2xl" />,
        },
        {
            id: 3,
            title: "Faster Time-to-Market",
            description: "Our expert teams help you launch products and services faster by accelerating backend development and integration timelines.",
            icon: <FaClock className="text-white text-2xl" />,
        },
        {
            id: 4,
            title: "Focus on Core Business Goals",
            description: "By outsourcing backend operations, your internal team can stay focused on strategy, innovation, and customer engagement.",
            icon: <FaUsersCog className="text-white text-2xl" />,
        },
    ];

    return (
        <>
            <title>Backend Outsourcing Services - Server, Database & API Management | Razor Infotech</title>
            <meta name="description" content="Professional backend outsourcing services including server management, database administration, API development, and backend maintenance. Reduce costs, access expert talent, and focus on core business with reliable backend solutions." />
            <meta name="keywords" content="backend outsourcing, server management outsourcing, database management services, API development, backend development outsourcing, infrastructure management, Node.js development, Python backend, technical support outsourcing" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Backend Outsourcing Services - Expert Server & Database Management" />
            <meta property="og:description" content="Reliable backend outsourcing with server management, database optimization, API integration, and 24/7 technical support. Scalable solutions for growing businesses." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/backend-outsourcing" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/backend-outsource/backend-outsource-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Backend Outsourcing Services by Razor Infotech" />
            <meta name="twitter:description" content="Expert backend development, server management, and database administration services. Reduce costs and accelerate your time-to-market." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/backend-outsource/backend-outsource-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/backend-outsourcing" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Backend Outsourcing Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional backend outsourcing services including server infrastructure management, database administration, API development, backend coding, and 24/7 technical support for businesses of all sizes.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Backend Outsourcing Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Server & Infrastructure Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Database Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "API Integration & Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Backend Development"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Admin & Operational Support"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Technical Support & Maintenance"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <Descriptionsection items={firstsection} />

            <section className="px-6 py-16 bg-white" aria-labelledby="services-heading">
                <p className="text-center text-sm border border-light-green rounded-full px-4 py-1 w-fit mx-auto text-light-green mb-6">
                    Our Services
                </p>
                <h2 id="services-heading" className="text-center text-3xl md:text-4xl font-bold text-heading mb-12">
                    Backend Outsourcing Services We Offer
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {benefits.map((b) => (
                        <article
                            key={b.id}
                            className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div 
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-light-green text-white font-bold mb-4"
                                aria-label={`Service ${b.id}`}
                            >
                                {b.id}
                            </div>
                            <h3 className="text-lg font-semibold text-heading mb-2">
                                {b.title}
                            </h3>
                            <p className="text-paragraph text-sm leading-6">{b.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <Descriptionsection items={thirdsection} />

            <section className="px-6 py-16 bg-white" aria-labelledby="advantages-heading">
                <h2 id="advantages-heading" className="text-center text-3xl md:text-4xl font-bold text-heading mb-12">
                    Key Advantages of Backend Outsourcing
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {advantages.map((a) => (
                        <article
                            key={a.id}
                            className="bg-background rounded-2xl p-6 flex gap-4 items-start hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary p-3 flex-shrink-0" aria-hidden="true">
                                {a.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-heading mb-2">
                                    {a.title}
                                </h3>
                                <p className="text-paragraph text-sm leading-6">
                                    {a.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <WhychooseSection points={points} />
            
            <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
                <Faq faqs={faqs} />
            </Suspense>
        </>
    );
}

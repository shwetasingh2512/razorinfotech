import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function BusinessConsultancy() {
    const consultancyBenefits = [
        {
            title: "Proven Results",
            description: "We offer training development solutions that drive innovation, improve your team productivity, and increase your business outcomes. "
        },
        {
            title: "Expert Trainers",
            description: "Now, gain hands-on experience and practical tips from the industry-experienced professionals who have overcome daily tech challenges. "
        },
        {
            title: "Continuous Support",
            description: "Razor Infotech is here with you at every step to enhance your team’s growth. "
        },
        {
            title: "Customized Solutions",
            description: "At first, we analyze your specific needs and then build a learning path that aligns with your projects, tech stack, and business goals. "
        },
    ];

    const faqs = [
        {
            question: "What is the Business Consultancy?",
            answer: "A business consultancy acts as an external expert that provides advice and solutions to companies to improve performance, solve problems, and achieve business goals."
        },
        {
            question: "What does a business consultancy do?",
            answer: "A business consultancy provides expert advice to help startups and established organizations improve performance, solve problems, and achieve goals by analyzing their operations."
        },
        {
            question: " How much does a business consultancy charge per day?",
            answer: "The charging amount ranges widely and depends on the consultancy."
        },
        {
            question: "What are the 7 C’s of consultancy?",
            answer: "The 7 C’s of consultancy are client, clarify, create, change, confirm, continue, and close."
        },
    ];

    return (
        <>
            <title>Business Consultancy Services - Strategic Growth Advisory | Razor Infotech</title>
            <meta name="description" content="Expert business consultancy for startups, SMBs, and enterprises. Strategic planning, market research, process optimization, financial advisory, and digital transformation services to drive sustainable growth." />
            <meta name="keywords" content="business consultancy, strategic consulting, business advisory, management consulting, growth strategy, business transformation, market research, process optimization, financial consulting, digital transformation consulting" />
            <meta name="author" content="Razor Infotech" />

            <meta property="og:title" content="Business Consultancy Services - Strategic Advisory & Growth Solutions" />
            <meta property="og:description" content="Professional business consultancy helping organizations optimize operations, develop growth strategies, and achieve sustainable success. From startups to enterprises." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/business-consultancy" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/business-consultancy/business-consultancy-hero.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Business Consultancy Services by Razor Infotech" />
            <meta name="twitter:description" content="Strategic business advisory, market research, and growth consulting for businesses at every stage. Expert guidance for sustainable success." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/business-consultancy/business-consultancy-hero.png" />

            <link rel="canonical" href="https://www.razorinfotech.com/services/business-consultancy" />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "serviceType": "Business Consultancy",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Strategic business consultancy services including market research, process optimization, financial advisory, digital transformation, and growth strategy development for startups, SMBs, and enterprises.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Business Consultancy Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Strategic Planning & Growth Strategy"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Market Research & Analysis"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Process Optimization"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Financial Advisory"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Digital Transformation Consulting"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="bg-accent px-6 py-12" aria-labelledby="hero-heading">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 id="hero-heading" className="text-3xl font-semibold text-heading md:text-4xl lg:max-w-[90%]">
                            Reliable Business Consultancy for Modern Business
                        </h1>
                        <p className="text-paragraph/80 text-base lg:max-w-[80%]">
                            We understand that operating a business is a complex decision and requires strategic planning. It’s easy to get pulled in every direction between daily operations, market shifts, and long-term goals.  Razor Infotech recognizes core challenges and designs actionable strategies, and implements the systems that you need to grow with confidence. Our approach is built on collaboration, practical actions, highly focused on your success.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white hover:opacity-90 transition-opacity"
                            aria-label="Schedule a consultation"
                        >
                            <span>View Our Services</span>
                            <span className="rounded-full bg-white/20 p-2" aria-hidden="true">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>
                    <div>
                        <img
                            src="/images/business-consultancy/business-consultancy-hero.png"
                            alt="Business consultants analyzing strategic growth plans and market data"
                            className="h-auto lg:w-4/5 rounded-2xl object-cover"
                            loading="eager"
                            width="800"
                            height="600"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 bg-background" aria-labelledby="services-heading">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div>
                        <img
                            src="/images/business-consultancy/Strategic.png"
                            alt="Strategic business planning and advisory session"
                            className="h-auto lg:w-4/5 rounded-2xl object-cover"
                            loading="lazy"
                            width="800"
                            height="600"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h2 id="services-heading" className="text-3xl font-semibold text-heading md:text-4xl lg:max-w-[90%]">
                            Turn Market Challenges into Productivity & Growth
                        </h2>
                        <p className="text-paragraph/80 text-base lg:max-w-[90%]">
                            At Razor Infotech, we consider market challenges as an opportunity to innovate, streamline, and move forward.
                            Market changes create a gap in workflows and communication. Therefore, we redesign your processes and implement the right digital tools, so your team can work smartly, without any uncertainty and disruption.

                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white hover:opacity-90 transition-opacity"
                            aria-label="Discuss your business challenges with our consultants"
                        >
                            <span>Talk to Our Support Specialists</span>
                            <span className="rounded-full bg-white/20 p-2" aria-hidden="true">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-accent p-10" aria-labelledby="why-choose-heading">
                <div className="max-w-6xl mx-auto">
                    <header>
                        <h2 id="why-choose-heading" className="text-3xl text-heading text-center font-semibold">
                            Why Choose Razor Infotech?
                        </h2>
                        <p className="text-center text-paragraph mt-5">
                           Razor Infotech delivers innovative, high-quality solutions that drive business success.
                        </p>
                    </header>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto mt-8">
                        {consultancyBenefits.map((e, i) => (
                            <article key={i} className="p-5 bg-background rounded-2xl hover:shadow-md transition-shadow">
                                <div className="flex gap-5 items-center">
                                    <IoIosCheckmarkCircleOutline
                                        className="text-secondary text-2xl flex-shrink-0"
                                        aria-hidden="true"
                                    />
                                    <h3 className="text-heading font-semibold">{e.title}</h3>
                                </div>
                                <p className="text-paragraph text-base mt-4">{e.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
                <Faq faqs={faqs} />
            </Suspense>
        </>
    );
}

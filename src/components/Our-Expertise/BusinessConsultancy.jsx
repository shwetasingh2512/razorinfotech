import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function BusinessConsultancy() {
    const consultancyBenefits = [
        {
            title: "Industry Expertise",
            description: "Our experienced consultants bring deep industry knowledge and proven strategies to help you navigate complex business challenges and opportunities."
        },
        {
            title: "Customized Strategies",
            description: "We develop tailored business strategies aligned with your specific goals, market position, and growth objectives—not one-size-fits-all solutions."
        },
        {
            title: "Data-Driven Insights",
            description: "We leverage analytics and market research to provide actionable insights that inform strategic decisions and minimize business risks."
        },
        {
            title: "End-to-End Support",
            description: "From strategy development to implementation and ongoing optimization, we partner with you throughout your entire business transformation journey."
        },
    ];

    const faqs = [
        {
            question: "What is business consultancy?",
            answer: "Business consultancy involves expert advisory services that help organizations improve performance, solve problems, and achieve growth objectives. Our consultants analyze your business, identify opportunities, and develop strategic recommendations for operations, finance, marketing, technology, and organizational development."
        },
        {
            question: "What types of businesses can benefit from consultancy services?",
            answer: "We provide consultancy for startups seeking market validation and growth strategies, SMBs looking to scale operations, and established enterprises undergoing digital transformation or market expansion. Our services are tailored to each business stage and industry."
        },
        {
            question: "How long does a typical consultancy engagement last?",
            answer: "Engagement duration varies based on project scope. Short-term projects like market research or process audits may take 4-8 weeks, while comprehensive transformation initiatives can span 6-12 months. We provide flexible engagement models including project-based, retainer, and hourly consulting."
        },
        {
            question: "What makes Razor Infotech's consultancy services different?",
            answer: "We combine deep industry expertise with technology implementation capabilities. Unlike traditional consultancies that only provide recommendations, we also help execute strategies through our IT, BPO, and digital services—ensuring your business transformation moves from planning to results."
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
                            Strategic Business Consultancy for Sustainable Growth
                        </h1>
                        <p className="text-paragraph/80 text-base lg:max-w-[80%]">
                            Expert business consultancy services that help organizations optimize operations, overcome challenges, and achieve ambitious growth objectives. From strategic planning and market research to process optimization and digital transformation, we provide actionable insights and hands-on support at every stage of your business journey.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white hover:opacity-90 transition-opacity"
                            aria-label="Schedule a consultation"
                        >
                            <span>Schedule a Consultation</span>
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
                        <p className="text-base text-light-green font-semibold border border-light-green py-2 px-5 rounded-full w-fit">
                            Business Consultancy
                        </p>
                        <h2 id="services-heading" className="text-3xl font-semibold text-heading md:text-4xl lg:max-w-[90%]">
                            Comprehensive Advisory for Every Stage
                        </h2>
                        <p className="text-paragraph/80 text-base lg:max-w-[90%]">
                            At Razor Infotech, we provide strategic business consultancy for every stage—supporting startups and established companies alike. From market research and process optimization to financial advisory and digital transformation, we deliver actionable strategies and expert guidance that help businesses overcome challenges, seize opportunities, and achieve sustainable growth.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white hover:opacity-90 transition-opacity"
                            aria-label="Discuss your business challenges with our consultants"
                        >
                            <span>Talk to Our Consultants</span>
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
                            Why Choose Razor Infotech for Business Consultancy?
                        </h2>
                        <p className="text-center text-paragraph mt-5">
                            Combining strategic expertise with implementation capabilities to deliver results, not just recommendations
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

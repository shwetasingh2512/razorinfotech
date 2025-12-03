import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function GoogleMyBusiness() {
    const benefits = [
        "Increase Local Search Visibility by 200%+",
        "Generate More Customer Calls & Store Visits",
        "Build Trust with Verified Reviews",
        "Dominate Google Maps Rankings",
        "Strengthen Community Engagement",
    ];

    const services = [
        {
            title: "Profile Setup & Verification",
            desc: "Complete GMB profile creation, business verification with Google, category optimization, and accurate NAP (Name, Address, Phone) setup to ensure your business appears correctly across Google Search and Maps.",
            image: "/images/googlemybusiness/Profile.jpg",
        },
        {
            title: "Information Optimization",
            desc: "Comprehensive optimization of business hours, service areas, attributes, categories, high-quality photos, and detailed descriptions to maximize visibility and attract more qualified local customers.",
        },
        {
            title: "Review & Reputation Management",
            desc: "Proactive review generation strategies, professional response management, sentiment monitoring, and reputation building to showcase social proof and increase customer trust.",
        },
        {
            title: "Posts & Updates Management",
            desc: "Regular posting of offers, events, updates, and announcements to keep your profile active, engage customers, and signal freshness to Google's algorithm for better rankings.",
            image: "/images/googlemybusiness/Posts.png",
        },
        {
            title: "Local SEO Integration",
            desc: "Keyword research for local searches, citation building across directories, backlink strategies, and integration with your website to strengthen overall local SEO performance.",
        },
        {
            title: "Analytics & Reporting",
            desc: "Monthly performance reports tracking views, clicks, calls, direction requests, and search queries. Data-driven insights to continuously improve your GMB strategy.",
        },
    ];

    const gmbProcess = [
        {
            title: "Audit & Analysis",
            desc: "We audit your current GMB profile (if existing), analyze competitors, identify gaps, and develop a customized optimization strategy aligned with your local market and business goals.",
        },
        {
            title: "Profile Optimization",
            desc: "Complete profile setup or enhancement including verification, business information, categories, attributes, service areas, hours, and high-quality visual content that converts searchers into customers.",
        },
        {
            title: "Review Management",
            desc: "Implement review generation campaigns, respond professionally to all feedback (positive and negative), monitor review platforms, and build a strong reputation that influences purchase decisions.",
        },
        {
            title: "Ongoing Management & Growth",
            desc: "Continuous posting, Q&A monitoring, photo updates, performance tracking, and strategic refinements to maintain visibility, engage customers, and outperform local competitors consistently.",
        },
    ];

    const whyChooseUs = [
        {
            title: "Local SEO Specialists",
            description: "Google-certified experts with proven track record of ranking businesses #1 in local map packs across competitive markets."
        },
        {
            title: "Data-Driven Approach",
            description: "Strategic optimization based on analytics, competitor research, and Google's ranking factors—not guesswork."
        },
        {
            title: "Comprehensive Management",
            description: "Full-service GMB management from setup to ongoing optimization, review management, and monthly reporting."
        },
        {
            title: "Proven ROI",
            description: "Average clients see 150-300% increase in GMB visibility, calls, and direction requests within 90 days."
        },
    ];

    const faqs = [
        {
            question: "What is Google My Business (GMB) and why is it important?",
            answer: "Google My Business (now Google Business Profile) is a free tool that lets you manage how your business appears on Google Search and Maps. It's crucial for local SEO because 46% of Google searches have local intent, and 76% of people who search for something nearby visit a business within 24 hours. A well-optimized GMB profile increases visibility, builds trust, and drives more customers to your business."
        },
        {
            question: "How long does it take to see results from GMB optimization?",
            answer: "Initial improvements typically appear within 2-4 weeks as Google indexes your optimized profile. Significant ranking improvements usually occur within 60-90 days of consistent optimization, posting, and review management. Long-term dominance requires ongoing management, but most businesses see measurable increases in views, calls, and direction requests within the first month."
        },
        {
            question: "What's included in your GMB optimization service?",
            answer: "Our service includes complete profile setup and verification, business information optimization, category and attribute selection, professional photo uploads, regular post creation (2-4 per week), review monitoring and response management, Q&A monitoring, citation building, monthly performance reports, and ongoing strategic refinements based on analytics and competitor activity."
        },
        {
            question: "How do you improve GMB rankings in the local map pack?",
            answer: "We optimize using Google's three primary ranking factors: Relevance (accurate categories, keywords, and business info), Distance (proper location settings and service areas), and Prominence (reviews, citations, website authority, and engagement signals). We also focus on Google Posts, Q&A, photos, review velocity, and NAP consistency across the web to boost rankings."
        },
    ];

    return (
        <>
            <title>Google My Business Optimization Services - Rank #1 in Local Search | Razor Infotech</title>
            <meta name="description" content="Professional Google My Business optimization to dominate local search. Increase visibility 200%+, get more calls and customers. Expert GMB management, review strategies, and local SEO." />
            <meta name="keywords" content="google my business optimization, GMB optimization services, google business profile, local SEO services, google maps ranking, GMB management, local search optimization, review management, google my business setup" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Google My Business Optimization - Dominate Local Search Results" />
            <meta property="og:description" content="Rank #1 in Google Maps and local search. Complete GMB optimization with review management, posting, and analytics. See 150-300% visibility increase." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/google-my-business" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/googlemybusiness/google-my-business-hero.jpg" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Google My Business Optimization Services by Razor Infotech" />
            <meta name="twitter:description" content="Dominate local search with expert GMB optimization. More visibility, more customers, measurable results." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/googlemybusiness/google-my-business-hero.jpg" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/google-my-business" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Google My Business Optimization Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional Google My Business optimization services including profile setup, verification, local SEO optimization, review management, regular posting, analytics, and ongoing GMB management to increase local search visibility and customer engagement.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "GMB Optimization Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "GMB Profile Setup & Verification"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Review & Reputation Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "GMB Posts & Updates Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Local SEO Integration"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "GMB Analytics & Reporting"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="px-6 py-16 bg-background" aria-labelledby="hero-heading">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1">
                        <h1 id="hero-heading" className="text-3xl md:text-4xl font-semibold text-heading">
                            Google My Business Optimization Services
                        </h1>

                        <p className="text-paragraph mt-4 max-w-xl text-base lg:text-lg">
                            Dominate local search results with expert GMB optimization that drives visibility, credibility, and real customer engagement.
                        </p>

                        <ul className="mt-6 space-y-4" role="list">
                            {benefits.map((b, i) => (
                                <li key={i} className="flex items-center gap-3 text-heading">
                                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-light-green ring-4 ring-[#E7F0EA]" aria-hidden="true">
                                        <span className="h-2 w-2 rounded-full bg-white" />
                                    </span>
                                    <span className="text-sm lg:text-base">{b}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/contact"
                            className="group mt-8 inline-flex items-center rounded-full bg-secondary text-white px-6 py-3 font-medium shadow hover:opacity-95 transition"
                            aria-label="Get GMB optimization consultation"
                        >
                            Optimize My GMB Profile
                            <span className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/30" aria-hidden="true">
                                <ArrowRight className="h-5 w-5" />
                            </span>
                        </Link>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="rounded-[22px] overflow-hidden">
                            <img
                                src="/images/googlemybusiness/google-my-business-hero.jpg"
                                alt="Google My Business optimization showing business appearing in Google Search and Maps"
                                className="w-full h-[420px] object-cover"
                                loading="eager"
                                width="800"
                                height="420"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-accent py-20 px-8" aria-labelledby="why-matters-heading">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
                    <div>
                        <img 
                            src="/images/googlemybusiness/Business-Matters.jpg" 
                            alt="Local business appearing prominently in Google search results and maps" 
                            className="h-full w-[90%] object-cover rounded-3xl"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                    </div>
                    <div className="flex flex-col gap-4 justify-center">
                        <h2 id="why-matters-heading" className="text-heading font-semibold text-3xl">
                            Why Google My Business Matters
                        </h2>
                        <p className="text-paragraph text-base leading-relaxed">
                            In today's digital-first world, 97% of customers search online to find local businesses. A fully optimized Google My Business profile ensures your company appears in local searches and Google Maps—exactly where customers are looking.
                        </p>
                        <p className="text-paragraph text-base leading-relaxed">
                            GMB builds immediate trust and credibility. Verified profiles with accurate details, positive reviews, and regular updates increase customer confidence by 70% and help you stand out among competitors.
                        </p>
                        <p className="text-paragraph text-base leading-relaxed">
                            Most importantly, GMB drives real business results—more phone calls, website visits, direction requests, and in-store foot traffic. It connects you directly with high-intent local customers who are ready to make a purchase decision.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 bg-background" aria-labelledby="services-heading">
                <div className="mx-auto max-w-7xl">
                    <p className="text-center text-sm border border-light-green rounded-full px-4 py-1 w-fit mx-auto text-light-green mb-6 font-medium">
                        Our Services
                    </p>
                    <h2 id="services-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Google My Business Optimization Services
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-8">
                        Comprehensive GMB management to maximize your local search presence
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((c, i) => (
                            <article
                                key={i}
                                className={`relative overflow-hidden rounded-2xl ring-1 ring-[var(--color-paragraph)]/10 ${
                                    c.image ? "p-0 min-h-[220px]" : "bg-[var(--color-accent)] p-6"
                                }`}
                            >
                                {c.image && (
                                    <>
                                        <img
                                            src={c.image}
                                            alt={`${c.title} service illustration`}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                            width="400"
                                            height="220"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                                        <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                {c.title}
                                            </h3>
                                            <p className="text-sm leading-6 text-white/90">
                                                {c.desc}
                                            </p>
                                        </div>
                                    </>
                                )}

                                {!c.image && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-[var(--color-heading)] mb-2">
                                            {c.title}
                                        </h3>
                                        <p className="text-sm leading-6 text-[var(--color-paragraph)]/80">
                                            {c.desc}
                                        </p>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-unique to-accent px-6 py-14" aria-labelledby="process-heading">
                <div className="mx-auto max-w-5xl">
                    <h2 id="process-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Our GMB Optimization Process
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-10">
                        Strategic approach to maximizing your local search visibility and customer engagement
                    </p>

                    <div className="mt-10 space-y-10">
                        {gmbProcess.map((it, idx) => (
                            <article key={idx} className="space-y-3">
                                <span className="text-[var(--color-secondary)] font-medium text-xl" aria-label={`Step ${idx + 1}`}>
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                                    {it.title}
                                </h3>
                                <p className="max-w-[85ch] text-[var(--color-paragraph)]/80">
                                    {it.desc}
                                </p>
                                <hr className="mt-4 border-[var(--color-paragraph)]/20" aria-hidden="true" />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-accent p-10" aria-labelledby="why-choose-heading">
                <div className="max-w-7xl mx-auto">
                    <header>
                        <h2 id="why-choose-heading" className="text-3xl text-heading text-center font-semibold">
                            Why Choose Razor Infotech for GMB Optimization?
                        </h2>
                        <p className="text-center text-paragraph mt-5 max-w-3xl mx-auto">
                            Proven expertise in local SEO with measurable results and transparent reporting
                        </p>
                    </header>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto mt-8">
                        {whyChooseUs.map((e, i) => (
                            <article key={i} className="p-5 bg-background rounded-2xl hover:shadow-md transition-shadow">
                                <div className="flex gap-5 items-center">
                                    <IoIosCheckmarkCircleOutline 
                                        className="text-secondary text-2xl flex-shrink-0" 
                                        aria-hidden="true"
                                    />
                                    <h3 className="text-heading font-semibold">{e.title}</h3>
                                </div>
                                <p className="text-paragraph text-base mt-4 leading-relaxed">{e.description}</p>
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

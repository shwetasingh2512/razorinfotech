import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {
    Shield,
    Search,
    MessageSquare,
    TrendingUp,
    AlertCircle,
    BarChart3,
} from "lucide-react";

const Faq = lazy(() => import("../../reusable/Faq"));

function OnlineReputaionMarket() {
    const ormServices = [
        {
            icon: Shield,
            title: "Brand Monitoring & Protection",
            desc: "24/7 monitoring of mentions, reviews, and conversations across search engines, social media, review sites, and forums to protect your brand reputation.",
        },
        {
            icon: MessageSquare,
            title: "Review Management",
            desc: "Proactive review solicitation, response management, and sentiment analysis across Google, Yelp, Trustpilot, Facebook, and industry-specific platforms.",
        },
        {
            icon: Search,
            title: "Search Result Optimization",
            desc: "Strategic content creation and SEO to push positive content higher in search results while suppressing negative listings and unfavorable mentions.",
        },
        {
            icon: AlertCircle,
            title: "Crisis Management",
            desc: "Rapid response protocols for negative publicity, viral complaints, and reputation threats with strategic communication and damage control.",
        },
        {
            icon: TrendingUp,
            title: "Positive Content Amplification",
            desc: "Creating and promoting positive brand content including press releases, blog posts, testimonials, case studies, and social media campaigns.",
        },
        {
            icon: BarChart3,
            title: "Reputation Analytics & Reporting",
            desc: "Comprehensive sentiment analysis, reputation score tracking, competitor benchmarking, and actionable insights with monthly performance reports.",
        },
    ];

    const process = [
        {
            title: "Audit & Assessment",
            desc: "We conduct a comprehensive reputation audit analyzing search results, reviews, social mentions, and brand sentiment to identify strengths, weaknesses, and immediate threats.",
        },
        {
            title: "Strategy Development",
            desc: "Based on audit findings, we create a customized ORM strategy with specific goals, target platforms, content plans, and crisis response protocols tailored to your brand.",
        },
        {
            title: "Implementation & Monitoring",
            desc: "We execute the strategy with continuous monitoring, review management, content creation, SEO optimization, and proactive engagement across all relevant platforms.",
        },
        {
            title: "Analysis & Optimization",
            desc: "We track reputation metrics, sentiment trends, and search visibility, providing detailed reports and continuously refining strategies for sustained reputation improvement.",
        },
    ];

    const benefits = [
        {
            title: "Reputation Specialists",
            description: "Experienced ORM professionals with expertise in crisis management, review response, SEO, content strategy, and brand protection across all industries and platforms."
        },
        {
            title: "24/7 Monitoring & Response",
            description: "Around-the-clock brand monitoring with immediate alerts for negative mentions, reviews, or reputation threats, ensuring rapid response to protect your brand."
        },
        {
            title: "Proven Results",
            description: "Track record of improving reputation scores by 40-60%, increasing positive reviews by 150%, pushing negative content beyond page 3, and restoring brand trust after crises."
        },
        {
            title: "Multi-Platform Coverage",
            description: "Comprehensive monitoring and management across Google, social media (Facebook, Twitter, Instagram, LinkedIn), review sites (Yelp, Trustpilot, G2), forums, and news sites."
        },
    ];

    const faqs = [
        {
            question: "What is Online Reputation Management (ORM) and why is it important?",
            answer: "Online Reputation Management (ORM) is the practice of monitoring, influencing, and managing how your business is perceived online. It's important because 93% of consumers read online reviews before making purchases, and 84% trust online reviews as much as personal recommendations. A single negative search result or bad review can cost businesses 22% of potential customers. ORM protects your brand, builds trust, improves search visibility, and drives conversions by ensuring your online presence reflects your true value.",
        },
        {
            question: "What ORM services does Razor Infotech provide?",
            answer: "We provide comprehensive ORM services including 24/7 brand monitoring (search engines, social media, review sites, forums), review management (solicitation, response, sentiment analysis), search result optimization (pushing positive content higher, suppressing negative), crisis management (rapid response to reputation threats), positive content creation and amplification, social media reputation management, competitor monitoring, and detailed reputation analytics with monthly reports and actionable insights.",
        },
        {
            question: "How long does it take to see ORM results?",
            answer: "Results vary by situation: Review management shows improvements in 2-4 weeks with proactive responses and increased positive reviews. Search result optimization takes 3-6 months to push negative content down and promote positive listings. Crisis management provides immediate containment (24-48 hours) with full recovery in 2-3 months. Overall reputation score improvements are typically visible within 3-6 months with sustained strategies. We provide monthly progress reports showing sentiment trends and visibility changes.",
        },
        {
            question: "How much does ORM cost and what's the ROI?",
            answer: "ORM pricing varies: Basic monitoring and review management ($1,500-3,000/month), comprehensive ORM with content creation ($3,000-7,000/month), and crisis management with aggressive reputation repair ($7,000-15,000/month). ROI includes preventing revenue loss from negative reviews (22% per negative result), improving conversion rates by 18%, increasing customer trust and retention by 35%, protecting against reputation crises (potential savings of $50,000-$500,000), and maintaining positive brand equity for long-term growth.",
        },
    ];

    return (
        <>
            <title>Online Reputation Management (ORM) Services - Protect & Build Your Brand | Razor Infotech</title>
            <meta name="description" content="Professional ORM services: 24/7 brand monitoring, review management, crisis response, and search result optimization. Improve reputation scores 40-60%, increase positive reviews, suppress negativity." />
            <meta name="keywords" content="online reputation management, ORM services, brand monitoring, review management, reputation repair, crisis management, negative review removal, brand protection, sentiment analysis, reputation marketing" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Online Reputation Management - Protect Your Brand Online" />
            <meta property="og:description" content="Expert ORM services: Monitor, protect, and enhance your online reputation. 24/7 monitoring, review management, crisis response, SEO optimization." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/online-reputation-management" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/orm/orm-hero.jpg" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Online Reputation Management Services by Razor Infotech" />
            <meta name="twitter:description" content="Protect and build your brand with professional ORM. 24/7 monitoring, review management, crisis response." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/orm/orm-hero.jpg" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/online-reputation-management" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Online Reputation Management (ORM)",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional online reputation management services including 24/7 brand monitoring, review management, crisis response, search result optimization, positive content amplification, and reputation analytics to protect and enhance your brand reputation.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "ORM Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Brand Monitoring & Protection"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Review Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Crisis Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Search Result Optimization"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="bg-[#E7F0EA] overflow-hidden" aria-labelledby="hero-heading">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                    <div className="px-6 md:px-12 lg:px-16 py-14 md:py-20 flex flex-col justify-center">
                        <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-heading leading-tight">
                            Build Trust Through Strategic Reputation Management
                        </h1>

                        <p className="text-paragraph mt-6 text-base md:text-lg leading-relaxed">
                            We safeguard your brand's online identity with proactive monitoring, review management, and crisis response—ensuring every interaction strengthens credibility, builds customer confidence, and protects your reputation.
                        </p>

                        <Link
                            to="/contact"
                            className="mt-8 inline-flex items-center gap-3 w-fit rounded-full border border-[#2F7C3D] px-5 py-3 text-heading hover:bg-black/5 transition"
                            aria-label="Start reputation management campaign"
                        >
                            Start My Campaign Today
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2F7C3D] text-white" aria-hidden="true">
                                <ArrowRight className="h-4 w-4" />
                            </span>
                        </Link>
                    </div>

                    <div className="h-64 md:h-[420px] lg:h-full">
                        <img
                            src="/images/orm/orm-hero.jpg"
                            alt="Professional team managing online reputation and brand protection"
                            className="w-full h-full object-cover"
                            loading="eager"
                            width="800"
                            height="600"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-accent py-20 px-8" aria-labelledby="why-orm-heading">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
                    <div>
                        <img 
                            src="/images/orm/Essential.jpg" 
                            alt="Why online reputation management is essential for business success" 
                            className="w-full h-auto object-cover rounded-3xl"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                    </div>
                    <div className="flex flex-col gap-4 justify-center">
                        <h2 id="why-orm-heading" className="text-heading font-semibold text-3xl md:text-4xl">
                            Why ORM Is Essential for Your Business
                        </h2>
                        <p className="text-paragraph text-base leading-relaxed">
                            In today's digital landscape, your online reputation directly impacts customer trust, purchasing decisions, and revenue. 93% of consumers read online reviews before buying, and a single negative search result can cost you 22% of potential customers.
                        </p>
                        <p className="text-paragraph text-base leading-relaxed">
                            Online Reputation Management (ORM) protects your brand by monitoring and managing what customers see across search engines, review sites, social media, and forums. Through proactive review management, crisis response, and strategic content creation, ORM ensures you control your narrative, build trust, and maintain a positive online presence that drives business growth.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[#DDEEC1] to-white px-6 py-16" aria-labelledby="services-heading">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="inline-block rounded-full border border-background bg-white/60 px-4 py-1 text-sm text-heading font-medium mb-4">
                            Our Services
                        </span>

                        <h2 id="services-heading" className="text-3xl md:text-4xl font-semibold text-heading mb-3">
                            Comprehensive ORM Solutions
                        </h2>
                        <p className="text-paragraph max-w-3xl mx-auto">
                            Six powerful pillars protecting and enhancing your online reputation
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ormServices.map(({ icon: Icon, title, desc }, i) => (
                            <article
                                key={i}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5"
                            >
                                <div className="w-16 h-16 rounded-xl bg-[#7FB53B] flex items-center justify-center shrink-0" aria-hidden="true">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-heading font-semibold leading-snug mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-paragraph text-sm leading-relaxed">{desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background px-6 py-14" aria-labelledby="process-heading">
                <div className="mx-auto max-w-7xl">
                    <h2 id="process-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Our ORM Process
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-10">
                        Strategic approach from audit to optimization for sustained reputation improvement
                    </p>

                    <div className="mt-10 space-y-10">
                        {process.map((it, idx) => (
                            <article key={idx} className="space-y-3 max-w-5xl mx-auto">
                                <span 
                                    className="text-[var(--color-secondary)] font-medium text-xl"
                                    aria-label={`Step ${idx + 1}`}
                                >
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                                    {it.title}
                                </h3>
                                <p className="text-[var(--color-paragraph)]/80 leading-relaxed">
                                    {it.desc}
                                </p>
                                {idx < process.length - 1 && (
                                    <hr className="mt-6 border-[var(--color-paragraph)]/20" aria-hidden="true" />
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-accent p-10" aria-labelledby="benefits-heading">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 id="benefits-heading" className="text-3xl text-heading font-semibold mb-3">
                            Why Choose Razor Infotech for ORM?
                        </h3>
                        <p className="text-paragraph max-w-3xl mx-auto">
                            Expert reputation management that delivers measurable results and lasting brand protection
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto mt-8">
                        {benefits.map((e, i) => (
                            <article key={i} className="p-6 bg-background rounded-2xl hover:shadow-md transition-shadow">
                                <div className="flex gap-4 items-start">
                                    <IoIosCheckmarkCircleOutline className="text-secondary text-2xl flex-shrink-0 mt-1" aria-hidden="true" />
                                    <div>
                                        <h4 className="text-heading font-semibold mb-2">{e.title}</h4>
                                        <p className="text-paragraph text-sm leading-relaxed">{e.description}</p>
                                    </div>
                                </div>
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

export default OnlineReputaionMarket;

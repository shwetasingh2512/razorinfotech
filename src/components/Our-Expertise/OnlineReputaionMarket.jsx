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
            title: "Strategic Video Planning",
            desc: "Adaptable video strategies that are designed for our future goals & requirements.",
        },
        {
            icon: MessageSquare,
            title: "Professional Video Production",
            desc: "HD videos that narrate your story and engage viewers effectively.",
        },
        {
            icon: Search,
            title: "Channel Optimization",
            desc: "Deliver optimized titles, descriptions, tags, and thumbnails for better visibility. ",
        },
        {
            icon: AlertCircle,
            title: "SEO & Keyword Targeting",
            desc: "Keywords based on data to boost rankings on Google and YouTube..",
        },
        {
            icon: TrendingUp,
            title: "Targeted Advertising Campaigns",
            desc: "Achieve better ranking , appropriate audience to your channel by adding keywords.",
        },
        {
            icon: BarChart3,
            title: "Analytics & Tracking",
            desc: "Clear insights on views, engagement, and conversions to guide and grow.  ",
        },
    ];

    const process = [
        {
            title: "Discover & Plan",
            desc: "We collaborate with you to define your vision, audience, and goals, creating a clear and focused strategy.",
        },
        {
            title: "Content Production",
            desc: "Our creative team produces authentic and polished videos that resonate emotionally and inspire action. ",
        },
        {
            title: "Optimization & Promotion",
            desc: "We drive maximum visibility and attract your ideal customers through optimization and promotion.",
        },
        {
            title: "Anaylze And Growth",
            desc: "We track performance through detailed analytics, refining strategies to ensure consistent improvement and long-term channel growth.",
        },
    ];

    const benefits = [
        {
            title: "Smart Creativity",
            description: "We create a smart strategy with a creative approach to design visuals that look stunning and achieve results."
        },
        {
            title: "Flexible Pricing",
            description: "Budget-friendly and transparent pricing options for a hassle-free experience. "
        },
        {
            title: "Quick Response",
            description: "Results are delivered quickly, so your projects stay on schedule without compromising. "
        },
        {
            title: "Diverse Experience",
            description: "We have created solutions for a range of industries, from startups to international brands ,tailored to their requirements."
        },
    ];

    const faqs = [
        {
            question: "What is Online Reputation Management?",
            answer: "Reputation management is the process of influencing, controlling, enhancing, or concealing an individual’s or a group’s reputation.",
        },
        {
            question: "What are the benefits of the ORM?",
            answer: "The benefits of reputation management are that it helps in building trust and credibility with customers, improves a brand’s image, and attracts new potential customers",
        },
        {
            question: "What are the main pillars of the Online Reputation Management System?",
            answer: "The main pillars of reputation management are monitoring, responding, engaging, and preventing.",
        },
        {
            question: "Why is Online Reputation Management useful?",
            answer: "Reputation Management is necessary for attracting clients, gaining trust, achieving long-term success, and enhancing brand perception in the market. ",
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
                            Building Trust & Reliability With Reputation Management
                        </h1>

                        <p className="text-paragraph mt-6 text-base md:text-lg leading-relaxed">
                           We protect your brand’s identity and ensure that every interaction strengthens credibility and customer confidence.
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
                            Benefits of Online Reputation Management.
                        </h2>
                        <p className="text-paragraph text-base leading-relaxed">
                           In the digital landscape, online reputation is the first impression of your business. Negative reviews and feedback can sway customer decisions and impact your revenue. Online Reputation Management (ORM) ensures that you create a narrative that builds customer trust.
                        </p>
                        <p className="text-paragraph text-base leading-relaxed">
                            <ul>
                                <li>Protect your brand’s identity before it affects your credibility.</li>
                                <li>Build customer trust and reassure potential clients into loyal fans</li>
                                <li>Control your search results and strengthen your online presence. </li>
                                <li>Turn feedback into growth, improving and showcasing your commitment to excellence. </li>
                            </ul>
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
                           Top Services of ORM
                        </h2>
                        <p className="text-paragraph max-w-3xl mx-auto">
                            Our Youtube services are built on these Six powerful pillars
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
                        Our Process
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-10">
                       A Streamlined Approach to Video Marketing
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
                            Why Choose Razor Infotech ?
                        </h3>
                        <p className="text-paragraph max-w-3xl mx-auto">
                            We deliver innovation, high-quality solutions that drive business success.
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

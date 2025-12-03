import { lazy, Suspense } from "react";
import Descriptionsection from "../../reusable/Descriptionsection";
import HeroSection from "../../reusable/HeroSection";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function AppStoreOptimization() {
    const secondsection = {
        background: "bg-accent",
        title: "Why ASO Matters?",
        description: `With millions of apps available on the App Store and Google Play, visibility is everything. Studies show that nearly 65–70% of app downloads come directly from app store searches, which means if your app isn't optimized, it's likely being overlooked. App Store Optimization (ASO) ensures your app ranks higher in search results, attracts the right audience, and turns browsers into loyal users.

ASO doesn't just improve discoverability - it also enhances conversions. Optimized titles, descriptions, screenshots, and reviews build trust and make your app stand out from competitors. Unlike paid ads that stop driving results once the budget ends, ASO creates sustainable, long-term growth by continuously bringing in organic downloads and increasing user engagement.`,
        image: "/images/app-store-optimization/matters.jpg",
        width: "max-w-6xl",
        imgWidth: "w-5/5"
    };

    const asoServices = [
        {
            title: "Keyword Research & Optimization",
            desc: "We identify high-impact keywords your target audience is searching for and strategically integrate them into your app title, subtitle, and description to maximize visibility.",
            image: "/images/app-store-optimization/Boost-Visibility.jpg",
        },
        {
            title: "Visual Asset Optimization",
            desc: "Eye-catching app icons, compelling screenshots, and engaging preview videos that showcase your app's best features and drive higher conversion rates from impression to install.",
        },
        {
            title: "Ratings & Review Management",
            desc: "Strategic review generation campaigns and prompt responses to user feedback help build trust, improve ratings, and signal quality to app store algorithms.",
        },
        {
            title: "Performance Analytics & A/B Testing",
            desc: "Continuous monitoring of download metrics, conversion rates, and keyword rankings with data-driven A/B testing to refine and improve your ASO strategy over time.",
            image: "/images/app-store-optimization/Data-Analysis.png",
        },
    ];

    const asoAdvantages = [
        {
            title: "Increased Organic Visibility",
            desc: "ASO improves your app's ranking in search results and category listings, making it easier for potential users to discover your app organically without paid advertising spend.",
        },
        {
            title: "Higher Conversion Rates",
            desc: "Optimized visuals, compelling descriptions, and social proof from ratings drive more installs from users who view your app listing, maximizing every impression.",
        },
        {
            title: "Reduced User Acquisition Costs",
            desc: "By driving organic downloads through search optimization, ASO significantly reduces your customer acquisition cost compared to paid advertising channels.",
        },
        {
            title: "Long-Term Sustainable Growth",
            desc: "Unlike paid campaigns that end when the budget runs out, ASO provides continuous organic growth as long as your app remains optimized and competitive.",
        },
    ];

    const whyChooseUs = [
        {
            title: "ASO Expertise Across Platforms",
            description: "Specialized knowledge of both Apple App Store and Google Play algorithms, ranking factors, and best practices for maximum visibility."
        },
        {
            title: "Data-Driven Optimization",
            description: "We use advanced analytics tools and A/B testing to make informed decisions that continuously improve your app's performance."
        },
        {
            title: "Comprehensive ASO Audits",
            description: "Complete analysis of your current app store presence with actionable recommendations for keyword, visual, and metadata improvements."
        },
        {
            title: "Transparent Reporting",
            description: "Regular performance reports tracking keyword rankings, downloads, conversion rates, and ROI so you always know your ASO is working."
        },
    ];

    const faqs = [
        {
            question: "What is App Store Optimization (ASO)?",
            answer: "ASO is the process of optimizing mobile apps to rank higher in app store search results (Apple App Store and Google Play). It involves optimizing keywords, app title, description, visuals, ratings, and reviews to increase visibility and drive more organic downloads."
        },
        {
            question: "How long does it take to see ASO results?",
            answer: "Initial improvements can be seen within 2-4 weeks after implementing ASO changes. However, significant ranking improvements and download growth typically occur over 2-3 months as app store algorithms recognize your optimizations and user engagement increases."
        },
        {
            question: "What's the difference between ASO and SEO?",
            answer: "ASO optimizes apps for app store search results and focuses on factors like app title, keywords, screenshots, ratings, and downloads. SEO optimizes websites for search engines like Google and focuses on content quality, backlinks, and page speed. Both aim to improve visibility but target different platforms."
        },
        {
            question: "How much does App Store Optimization cost?",
            answer: "ASO costs vary based on app complexity, competition level, and service scope. We offer customized ASO packages including one-time audits, monthly optimization services, and comprehensive campaigns. Contact us for a free consultation and tailored pricing."
        },
    ];

    return (
        <>
            <title>App Store Optimization (ASO) Services - Increase App Downloads | Razor Infotech</title>
            <meta name="description" content="Professional App Store Optimization services for iOS and Android apps. Improve app rankings, increase organic downloads, and boost visibility with expert ASO strategies, keyword research, and visual optimization." />
            <meta name="keywords" content="app store optimization, ASO services, app store SEO, increase app downloads, app ranking, mobile app marketing, app keyword optimization, iOS app optimization, Android app optimization, app store visibility, ASO strategy" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="App Store Optimization Services - Boost App Rankings & Downloads" />
            <meta property="og:description" content="Expert ASO services to improve app visibility, increase organic downloads, and optimize for App Store and Google Play rankings. Data-driven strategies that deliver results." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/app-store-optimization" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/app-store-optimization/app-store-optimization-hero.jpg" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="App Store Optimization (ASO) Services" />
            <meta name="twitter:description" content="Increase app downloads with professional ASO. Keyword optimization, visual assets, ratings management, and performance analytics." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/app-store-optimization/app-store-optimization-hero.jpg" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/app-store-optimization" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "App Store Optimization (ASO)",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional App Store Optimization services to improve app visibility, increase organic downloads, and boost rankings in Apple App Store and Google Play Store through keyword research, visual optimization, and review management.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "ASO Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Keyword Research & Optimization"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Visual Asset Optimization"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Ratings & Review Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Performance Analytics & A/B Testing"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <HeroSection
                title="App Store Optimization: Rank Higher, Get Discovered, Grow Faster"
                description="Get your app in front of millions of potential users with expert ASO. We optimize your app store presence through strategic keyword research, compelling visuals, and data-driven tactics to increase organic downloads and boost rankings on both Apple App Store and Google Play. From metadata optimization to review management, we help your app stand out in a crowded marketplace."
                buttonText="Get Free ASO Audit"
                buttonLink="/contact"
                heroImage="/images/app-store-optimization/app-store-optimization-hero.jpg"
                showVector={false}
                vectorImage=""
                reverse={false}
                connectwithus={false}
            />

            <Descriptionsection items={secondsection} />

            <section className="px-6 py-12 bg-accent" aria-labelledby="aso-services-heading">
                <div className="mx-auto max-w-6xl">
                    <h2 id="aso-services-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Our App Store Optimization Services
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 mt-3 max-w-3xl mx-auto">
                        Comprehensive ASO solutions designed to maximize your app's visibility and drive sustainable organic growth
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {asoServices.map((c, i) => (
                            <article
                                key={i}
                                className={`relative overflow-hidden rounded-2xl ring-1 ring-[var(--color-paragraph)]/10 ${
                                    c.image ? "p-0" : "bg-[var(--color-background)] p-6"
                                }`}
                            >
                                {c.image && (
                                    <>
                                        <img
                                            src={c.image}
                                            alt={`${c.title} ASO service`}
                                            className="h-44 w-full object-cover md:h-48"
                                            loading="lazy"
                                            width="600"
                                            height="192"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                                        <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                            <h3 className="text-lg font-semibold text-white">
                                                {c.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-6 text-white/90 max-w-[48ch]">
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

            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14" aria-labelledby="aso-benefits-heading">
                <div className="mx-auto max-w-6xl">
                    <h2 id="aso-benefits-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Key Benefits of App Store Optimization
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 mt-3 max-w-3xl mx-auto">
                        Why ASO is essential for every mobile app's growth strategy
                    </p>

                    <div className="mt-10 space-y-10">
                        {asoAdvantages.map((it, idx) => (
                            <article key={idx} className="space-y-3">
                                <span className="text-[var(--color-secondary)] font-medium" aria-label={`Benefit ${idx + 1}`}>
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                                    {it.title}
                                </h3>
                                <p className="max-w-[78ch] text-[var(--color-paragraph)]/80">
                                    {it.desc}
                                </p>
                                <hr className="mt-4 border-[var(--color-paragraph)]/20" aria-hidden="true" />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-accent p-10" aria-labelledby="why-choose-heading">
                <div className="max-w-6xl mx-auto">
                    <header className="head">
                        <h2 id="why-choose-heading" className="text-3xl text-heading text-center font-semibold">
                            Why Choose Razor Infotech for ASO?
                        </h2>
                        <p className="text-center text-paragraph mt-5">
                            Proven expertise in app store optimization that delivers measurable results and sustainable growth
                        </p>
                    </header>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto mt-8">
                        {whyChooseUs.map((e, i) => (
                            <article key={i} className="p-5 bg-background rounded-2xl">
                                <div className="flex gap-5 items-center">
                                    <IoIosCheckmarkCircleOutline className="text-secondary text-2xl flex-shrink-0" aria-hidden="true" />
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

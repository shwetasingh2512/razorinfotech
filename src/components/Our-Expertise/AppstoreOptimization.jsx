import { lazy, Suspense } from "react";
import Descriptionsection from "../../reusable/Descriptionsection";
import HeroSection from "../../reusable/HeroSection";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function AppStoreOptimization() {
    const secondsection = {
        background: "bg-accent",
        title: "Get Discovered in the App Store ",
        description: `Online visibility plays a crucial role in marketing & branding. There are millions of apps available on the App Store and Google Play.  According to the recent study, nearly 65-70% of app downloads come directly from App Store searches, which means your app is not optimized properly.  App Store Optimization (ASO) assures that your app ranks higher in search results, attracts the target audience, and turns browsers into loyal and reliable customers.  ASO improves conversions and discoverability. Optimized titles, descriptions, screenshots, and reviews help in building trust and make your app stand out from competitors. `,
        image: "/images/app-store-optimization/matters.jpg",
        width: "max-w-6xl",
        imgWidth: "w-5/5"
    };

    const asoServices = [
        {
            title: "Boost Visibility",
            desc: "Makes it easier for your potential users to discover the app in the App Store and the Play Store. ",
            image: "/images/app-store-optimization/Boost-Visibility.jpg",
        },
        {
            title: "Drive Organic Downloads",
            desc: "Don’t completely rely on paid ads; attract the quality users with optimized keywords, visuals, and descriptions.",
        },
        {
            title: "Data Security & Compliance",
            desc: "To protect sensitive data, adopt strict rules that align with the industry regulations and compliance standards for a clear state of mind. ",
        },
        {
            title: "Data Analysis & Reporting",
            desc: "With the help of clear reporting and analytics, transform raw data into actionable insights for informed decision-making in the future.",
            image: "/images/app-store-optimization/Data-Analysis.png",
        },
    ];

    const asoAdvantages = [
        {
            title: "Improved Visibility",
            desc: "To increase your visibility on search engines, we optimize our app’s title, keywords, and descriptions to rank higher. ",
        },
        {
            title: "Increased Organic Downloads",
            desc: "We help you to attract the right audience naturally, by reducing reliance on costly ads through data-driven keywords and engaging visuals. ",
        },
        {
            title: "High Conversion Rates",
            desc: "We transform store visitors into active users by engaging them with the optimized icons, screenshots, and app previews.",
        },
        {
            title: "Reputed Brand Recognition",
            desc: "Through encouraging positive reviews and ratings, we make reliable and trustworthy users.",
        },
    ];

    const whyChooseUs = [
        {
            title: "Smart Creativity",
            description: "We create a smart strategy with a creative approach to design visuals that look stunning and achieve results."
        },
        {
            title: "Flexible Pricing",
            description: "Budget-friendly and transparent pricing options for a hassle-free experience."
        },
        {
            title: "Quick Response",
            description: "Results are delivered quickly, so your projects stay on schedule without compromising."
        },
        {
            title: "Diverse Experience",
            description: "We’ve designed for wide sectors from startups to global brands based on their needs."
        },
    ];

    const faqs = [
        {
            question: "What is App Store Optimization?",
            answer: "App Store Optimization is the process of improving a mobile app’s visibility and conversion rates in app stores like the Apple Store or Google Play Store to drive organic clicks."
        },
        {
            question: "How to increase app store optimization?",
            answer: "You can increase app store listings by focusing on the keyword-rich titles, subtitles, visuals such as icons, screenshots, videos, and managing ratings. "
        },
        {
            question: "Is SEO or ASO the same?",
            answer: "No, basically SEO or ASO is different, but their goals are the same. SEO optimizes a website for search engines like Google. Whereas, ASO optimizes the mobile apps for app stores like the  Apple App Store & Google Play Store."
        },
        {
            question: "What is the full form of SEO and ASO? ",
            answer: "SEO stands for Search Engine Optimization, and ASO for App Store Optimization"
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
                title="Maximize Your App’s Visibility & Conversion Rate "
                description={`Great apps should be hidden in the online world. We provide the complete App Store Optimization Service (ASO) to our clients.  \n Now you can increase your app’s organic visibility and download conversion rate on platforms like App Store and Google Play. Here are the services that Razor Infotech offers`}
                buttonText="Start My Campaign Today"
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
                        Turn Clicks into Customers
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {asoServices.map((c, i) => (
                            <article
                                key={i}
                                className={`relative overflow-hidden rounded-2xl ring-1 ring-[var(--color-paragraph)]/10 ${c.image ? "p-0" : "bg-[var(--color-background)] p-6"
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
                        Benefits of Choosing Our App Optimization Service
                    </h2>

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
                            Why Choose Razor Infotech?
                        </h2>
                        <p className="text-center text-paragraph mt-5">
                           We deliver innovation, high-quality solutions that drive business success
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

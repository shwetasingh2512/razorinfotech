import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function GoogleMyBusiness() {
    const benefits = [
        "Instant availability of phones, address, hours, and website. ",
        "Post updates and offers right on your Google listing, like a social media page.",
        "Beat your competitors with unoptimized listings. ",
        "Acts like free advertising that works 24/7. ",
        "SCollect customer reviews to build reputation and attract more business. ",
    ];

    const services = [
        {
            title: "Profile Setup & Verification",
            desc: "We create your GMB profile and verify and review whether your business appears correctly on Google search and maps.",
            image: "/images/googlemybusiness/Profile.jpg",
        },
        {
            title: "Information Optimization",
            desc: "We optimize every small detail from photos and services into powerful assets for attracting local customers. ",
        },
        {
            title: "Review & Reputation Management",
            desc: "Promote positive reviews, manage customer feedback, and build trust by showcasing a strong brand reputation.",
        },
        {
            title: "Update & Manage Posts",
            desc: "Regular posting of offers, events, updates, and announcements to keep your profile active, engage customers, and signal freshness to Google's algorithm for better rankings.",
            image: "/images/googlemybusiness/Posts.png",
        },
        {
            title: "Local SEO Integration",
            desc: "We ensure that your profile stays updated. Therefore, we regularly manage and track posts and videos to engage your targeted customers and highlight the business.",
        },
    ];

    const gmbProcess = [
        {
            title: "Research & Strategy",
            desc: "We analyze your business goals, potential customers, and competitive strategies. This action forms the foundations for the video strategy, which is designed to achieve your specific goals.",
        },
        {
            title: "Content Creation",
            desc: "We handle all the aspects from script writing to editing. Our objective is to produce professional videos that is basically designed to connect with people for more interactions. ",
        },
        {
            title: "Optimization & Promotion",
            desc: "After uploading the videos, we use small tactics like keywords and attractive visuals to help your video get found and watched by the right audience. ",
        },
        {
            title: "Anaylsis And Growth",
            desc: "We track performance through detailed analytics, refining strategies to ensure consistent improvement and long-term channel growth.",
        },
    ];

    const whyChooseUs = [
        {
            title: "Creative Strategy",
            description: "We combine creativity with strategy to design visuals that look stunning to achieve results. "
        },
        {
            title: "Faster Delivery",
            description: "We aim to deliver designs quickly without compromising any quality. "
        },
        {
            title: "Affordable & Transparent Pricing",
            description: "Get professional design with clear and budget-friendly pricing."
        },
        {
            title: "Experience Across Industries",
            description: "From new startups to large international organizations, our service is designed for all business types and niches. "
        },
    ];

    const faqs = [
        {
            question: "What is Google My Business Optimization?",
            answer: "It is the process of refining a business’s Google Business Profile to improve its visibility in local searches on Google Search and Maps."
        },
        {
            question: "How to rank GMB fast?",
            answer: "You can rank your Google Business Profile, by using different strategies such as adding relevant keywords in your descriptions and business name. "
        },
        {
            question: "Is 4.7 a good Google review?",
            answer: "Yes, generally 4.7 is a good review on Google"
        },
        {
            question: "Can I remove a 1-star rating on Google?",
            answer: "No, you can’t remove  1-star rating on Google."
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
                            Google My Business (GMB) Optimization
                        </h1>

                        <p className="text-paragraph mt-4 max-w-xl text-base lg:text-lg">Professional Google Business Profile Optimization to Drive Local Visibility.  Dominate local search results with expert GMB optimization that drives visibility, credibility, and real customer engagement.
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
                            Why is Google Business Profile important?
                        </h2>
                        <p className="text-paragraph text-base leading-relaxed">
                            These days, everyone uses Google to find nearby shops and services. If your Google Business listing is set up right, you’ll pop up when people search for what you do. It puts you on the map literally.
                        </p>
                        <p className="text-paragraph text-base leading-relaxed">
                           A complete profile makes people trust you. When they see your correct hours, photos of your work, and good reviews from others, they’re more likely to choose you.
                        </p>
                        <p className="text-paragraph text-base leading-relaxed">
                           It drives real results, whether it's more calls, website visits, or in-store foot traffic. GMB connects you directly with the targeted audiences.
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
                       Our You Tube Marketing Services
                    </h2>
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
                        A Streamlined Approach to Video Marketing
                    </h2>
                  

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

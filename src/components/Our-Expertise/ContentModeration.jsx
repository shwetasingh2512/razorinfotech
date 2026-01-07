import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WhychooseSection from "../../reusable/WhychooseSection";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function ContentModeration() {
    const benefits = [
        {
            title: "Protect Brand Reputation",
            desc: "Prevent offensive, harmful, or inappropriate content from damaging your brand image. Moderation keeps your digital presence clean, safe, and aligned with brand values.",
            image: "/images/content-creation/third-section-bg-1.png",
        },
        {
            title: "Improve User Trust & Safety",
            desc: "A safe, moderated environment encourages authentic engagement and builds community trust. Users feel confident sharing content and participating on your platform.",
        },
        {
            title: "Legal & Regulatory Compliance",
            desc: "Ensure compliance with GDPR, COPPA, local content regulations, and platform-specific policies through active content screening and policy enforcement.",
        },
        {
            title: "Prevent Spam & Abuse",
            desc: "Eliminate spam, scams, bots, harassment, and abusive behavior to improve platform experience, user retention, and community health.",
            image: "/images/content-creation/third-section-bg-2.png",
        },
    ];

    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/Software-developement/y-choose-us.png",
        child: [
            {
                title: "24/7 Monitoring Coverage",
                desc: "Round-the-clock content moderation ensures harmful content is identified and removed quickly, protecting your community at all times."
            },
            {
                title: "AI + Human Expertise",
                desc: "We combine automated AI filtering with trained human moderators for nuanced, context-aware content decisions."
            },
            {
                title: "Scalable & Flexible",
                desc: "Whether you're a startup or enterprise, we scale our moderation services to match your content volume and growth."
            },
            {
                title: "Secure & Compliant",
                desc: "We follow strict data privacy protocols, NDA agreements, and ensure confidentiality across all moderation processes."
            },
        ]
    };

    const faqs = [
        {
            question: "What do you mean by content moderation?",
            answer: "It is the process that platforms use to review, filter, and manage user-generated content, including posts, images, and videos, to ensure it follows their specific guidelines, community standards, and laws."
        },
        {
            question: "What types of content are moderated by Razor Infotech?",
            answer: "Razor Infotech moderates a wide range of services across different platforms, such as images, text, and video, to ensure compliance, safety, and quality. "
        },
        {
            question: "How does content moderation work?",
            answer: "Generally, content moderation works by using a combination of automated AI tools and human reviewers to filter user-generated content such as text, images, videos, and audio."
        },
        {
            question: "Are you transparent about your moderation actions?",
            answer: "Yes, we are committed to transparency. We publish regular reports that help to identify the volume of content removed, reasons for removal, and appeal outcomes."
        },
    ];

    const moderationTypes = [
        { 
            id: "01", 
            title: "Text-Based Content", 
            desc: "Comments, reviews, chat messages, forum posts, and user-generated text across all platforms with profanity filtering and sentiment analysis.", 
            img: "/images/content-moderation/Text-Based.png", 
            variant: "hero" 
        },
        { 
            id: "02", 
            title: "Image Moderation", 
            desc: "AI-powered scanning and human review of images to detect explicit content, violence, hate symbols, and brand-damaging visuals.", 
            img: "/images/content-moderation/Image-moderation.png", 
            variant: "light" 
        },
        { 
            id: "03", 
            title: "Video Moderation", 
            desc: "Frame-by-frame inspection of user-uploaded videos for violence, nudity, terrorism, copyright violations, and policy breaches.", 
            img: "/images/content-moderation/Video-Moderation.png", 
            variant: "light" 
        },
        { 
            id: "04", 
            title: "Live Stream Monitoring", 
            desc: "Real-time moderation of live broadcasts to prevent policy violations, harassment, and inappropriate content as events unfold.", 
            img: "/images/content-moderation/Live-Stream.png", 
            variant: "hero" 
        },
        { 
            id: "05", 
            title: "Profile & User Moderation", 
            desc: "Review of usernames, display names, bios, and profile pictures to ensure community standards and prevent impersonation.", 
            img: "/images/content-moderation/Profile.png", 
            variant: "dark" 
        },
        { 
            id: "06", 
            title: "Marketplace Listings", 
            desc: "Moderation of product listings, titles, descriptions, and images to prevent fake items, scams, and prohibited goods on eCommerce platforms.", 
            img: "/images/content-moderation/Marketplace.png", 
            variant: "dark" 
        },
    ];

    return (
        <>
            <title>Content Moderation Services - 24/7 User-Generated Content Monitoring | Razor Infotech</title>
            <meta name="description" content="Professional content moderation services for text, images, videos, and live streams. 24/7 monitoring with AI + human expertise to protect brand reputation, ensure user safety, and maintain compliance." />
            <meta name="keywords" content="content moderation services, user generated content moderation, social media moderation, image moderation, video moderation, live stream monitoring, comment moderation, community management, brand safety, online moderation" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Content Moderation Services - Protect Your Brand & Community" />
            <meta property="og:description" content="24/7 content moderation with AI and human expertise. Monitor text, images, videos, and live content to ensure brand safety and user trust." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/content-moderation" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/content-moderation/content-moderation-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Content Moderation Services by Razor Infotech" />
            <meta name="twitter:description" content="Comprehensive content moderation for platforms and communities. Protect users, maintain compliance, and safeguard brand reputation 24/7." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/content-moderation/content-moderation-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/content-moderation" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Content Moderation Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional content moderation services including text moderation, image and video screening, live stream monitoring, profile moderation, and marketplace listing review with 24/7 coverage and hybrid AI-human approach.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Content Moderation Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Text Content Moderation"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Image & Video Moderation"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Live Stream Monitoring"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Profile & User Moderation"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Marketplace Listing Moderation"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="px-6 py-12 bg-background" aria-labelledby="hero-heading">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 id="hero-heading" className="text-3xl font-semibold text-heading md:text-5xl lg:max-w-[85%]">
                            Safe, Trusted, & Positive User Experience
                        </h1>
                        <p className="text-paragraph/80 text-base md:text-lg lg:max-w-[85%]">
                            Our content moderation services help businesses ensure all user-generated content aligns with community standards, legal requirements, and brand values. Our trained team combines AI-powered tools with human expertise to monitor, filter, and moderate content across all platforms—24/7.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary pl-5 pr-2 py-1 lg:py-2 group font-semibold hover:border border-secondary hover:text-secondary hover:bg-background text-white transition-all duration-300"
                            aria-label="Consult with content moderation expert"
                        >
                            <span>Talk To An Expert</span>
                            <span className="rounded-full bg-white/20 p-2 group-hover:bg-secondary text-white transition-colors" aria-hidden="true">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>

                    <div>
                        <img
                            src="/images/content-moderation/content-moderation-hero.png"
                            alt="Content moderation dashboard showing real-time monitoring and filtering of user-generated content"
                            className="h-auto w-full rounded-2xl object-cover"
                            loading="eager"
                            width="800"
                            height="600"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-12 md:py-16" aria-labelledby="moderation-types-heading">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <span className="inline-flex items-center rounded-full border border-[var(--color-paragraph)]/20 bg-[var(--color-accent)] px-3 py-1 text-xs font-medium text-[var(--color-paragraph)]/70">
                            Comprehensive Coverage
                        </span>
                        <h2 id="moderation-types-heading" className="text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                            Content Types We Moderate
                        </h2>
                        <p className="text-[var(--color-paragraph)]/80 max-w-2xl">
                            End-to-end moderation across all content formats and platforms
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {moderationTypes.map(({ id, title, desc, img, variant }) => (
                            <article
                                key={id}
                                className={`relative isolate h-48 overflow-hidden rounded-2xl sm:h-52 lg:h-56 
                                    ${id === "01" || id === "04" ? "lg:col-span-2" : "lg:col-span-1"}`}
                                style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div
                                    className={
                                        variant === "hero"
                                            ? "absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55"
                                            : variant === "light"
                                                ? "absolute inset-0 bg-black/25 backdrop-blur-[1px]"
                                                : "absolute inset-0 bg-black/40"
                                    }
                                />
                                <div
                                    className="absolute right-4 top-3 text-white/95 text-lg font-semibold"
                                    style={{ WebkitTextStroke: "0.7px rgba(255,255,255,0.35)" }}
                                    aria-label={`Moderation type ${id}`}
                                >
                                    {id}
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-end p-5">
                                    <h3 className="text-base md:text-[17px] font-semibold tracking-[-0.01em] text-white">
                                        {title}
                                    </h3>
                                    {variant === "hero" && <span className="mt-3 mb-2 h-px w-20 bg-white/80" aria-hidden="true" />}
                                    <p
                                        className={`text-sm leading-6 text-white/90 ${
                                            variant === "hero" ? "max-w-[44ch]" : "max-w-[46ch]"
                                        }`}
                                    >
                                        {desc}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 bg-background" aria-labelledby="benefits-heading">
                <div className="mx-auto max-w-6xl">
                    <h2 id="benefits-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Why Content Moderation is Essential
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-8">
                        Protect your platform, users, and brand with professional content moderation
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                        {benefits.map((c, i) => (
                            <article
                                key={i}
                                className={`relative overflow-hidden rounded-2xl ring-1 ring-[var(--color-paragraph)]/10 ${
                                    c.image ? "p-0 min-h-[240px]" : "bg-accent p-6"
                                }`}
                            >
                                {c.image && (
                                    <>
                                        <img
                                            src={c.image}
                                            alt={`${c.title} illustration`}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                            width="600"
                                            height="240"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                                        <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                {c.title}
                                            </h3>
                                            <p className="text-sm leading-6 text-white/90 max-w-[48ch]">
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

            <WhychooseSection points={points} />
            
            <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
                <Faq faqs={faqs} />
            </Suspense>
        </>
    );
}

import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import WhychooseSection from "../../reusable/WhychooseSection";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function ContentCreationServices() {
    const contentTypes = [
        "Blog Posts & Articles",
        "Social Media Content",
        "Video Scripts & Production",
        "Infographics & Visual Content",
        "Email Marketing Campaigns",
        "Website Copy & Landing Pages",
        "Whitepapers & Case Studies",
        "SEO-Optimized Content",
    ];

    const benefits = [
        {
            title: "Greater Brand Visibility",
            desc: "High-quality content makes your brand visible across search engines, social media, and industry platforms—helping you reach and engage both new and existing customers effectively.",
            image: "/images/content-creation/third-section-bg-1.png",
        },
        {
            title: "Enhanced Customer Engagement",
            desc: "Compelling content creates a bridge between your brand and customers through relevant stories, informative updates, and engaging media that build lasting relationships.",
        },
        {
            title: "Improved SEO Performance",
            desc: "Search engines prioritize fresh, informative, and optimized content. Strategic content creation improves rankings, drives organic traffic, and generates quality leads.",
        },
        {
            title: "Thought Leadership & Credibility",
            desc: "Authoritative content establishes your brand as an industry expert. Through insightful articles, research, and perspectives, you build trust and influence buying decisions.",
            image: "/images/content-creation/third-section-bg-2.png",
        },
    ];

    const faqs = [
        {
            question: "What types of content creation services do you offer?",
            answer: "We offer comprehensive content creation including blog posts, articles, social media content, video production, infographics, email marketing, website copy, whitepapers, case studies, and SEO-optimized content tailored to your brand voice and audience."
        },
        {
            question: "How do you ensure content aligns with our brand voice?",
            answer: "We start with a thorough brand discovery process to understand your tone, values, and target audience. Our team creates brand guidelines and style guides, then develops content that authentically represents your brand while engaging your specific audience."
        },
        {
            question: "How long does it take to create content?",
            answer: "Timelines vary by content type and complexity. Blog posts typically take 3-5 days, social media content 1-2 days, and video production 2-4 weeks. We provide detailed timelines during project planning and can accommodate rush requests when needed."
        },
        {
            question: "Do you provide SEO optimization with content creation?",
            answer: "Yes, all our content is SEO-optimized with keyword research, meta descriptions, proper heading structure, internal linking, and readability optimization to improve search rankings and drive organic traffic to your website."
        },
    ];

    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/content-creation/y-choose-image.png",
        child: [
            {
                title: "Custom-Tailored Content",
                desc: "Every piece is crafted specifically for your brand voice, target audience, and business objectives—no generic templates."
            },
            {
                title: "Skilled Creative Team",
                desc: "Our team of expert writers, editors, designers, and strategists understand both creative storytelling and business ROI."
            },
            {
                title: "Scalable Solutions",
                desc: "Whether you need one blog post or an entire content marketing strategy, we scale our services to match your growth."
            },
            {
                title: "Data-Driven Strategy",
                desc: "We use analytics, performance insights, and A/B testing to optimize content for maximum engagement and conversions."
            },
        ]
    };

    return (
        <>
            <title>Content Creation Services - Blogs, Social Media, Video & SEO Content | Razor Infotech</title>
            <meta name="description" content="Professional content creation services for blogs, social media, videos, infographics, and SEO-optimized web content. Engage your audience with compelling, brand-aligned content that drives results." />
            <meta name="keywords" content="content creation services, blog writing, social media content, video production, SEO content writing, infographics, email marketing content, website copywriting, content marketing, digital content creation" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Content Creation Services - Engaging Brand Communication" />
            <meta property="og:description" content="Expert content creation for blogs, social media, videos, and more. Custom-tailored, SEO-optimized content that builds brand visibility and drives engagement." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/content-creation" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/content-creation/content-creation-hero-image.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Content Creation Services by Razor Infotech" />
            <meta name="twitter:description" content="Compelling content that engages audiences and drives results. Blogs, social media, video, and SEO-optimized content creation." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/content-creation/content-creation-hero-image.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/content-creation" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Content Creation Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional content creation services including blog writing, social media content, video production, infographics, email marketing, website copy, and SEO-optimized content for brand visibility and engagement.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Content Creation Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Blog Posts & Article Writing"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Social Media Content Creation"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Video Content Production"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "SEO-Optimized Content Writing"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Infographics & Visual Content"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="px-6 py-12 bg-background" aria-labelledby="hero-heading">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 id="hero-heading" className="text-4xl font-semibold text-heading md:text-5xl lg:max-w-[90%]">
                            Engaging, Relevant, and Impactful Brand Communication
                        </h1>
                        <p className="text-paragraph/80 text-base lg:max-w-[85%]">
                            Transform your brand story with professional content creation services. From blogs and social media posts to videos and infographics, we create compelling content that resonates with your audience, strengthens brand identity, and drives measurable results across all digital platforms.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-5 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
                            aria-label="Request content creation services"
                        >
                            <span>Get Your Content Strategy</span>
                            <span className="rounded-full bg-white/20 p-3" aria-hidden="true">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>

                    <div>
                        <img
                            src="/images/content-creation/content-creation-hero-image.png"
                            alt="Content creation team developing engaging brand communication and digital content"
                            className="h-auto w-full rounded-2xl object-cover"
                            loading="eager"
                            width="800"
                            height="600"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14" aria-labelledby="content-types-heading">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[18px]">
                        <img 
                            src="/images/content-creation/types.png" 
                            alt="Various content types including blogs, social media, and video formats" 
                            className="lg:w-4/5 object-cover" 
                            loading="lazy"
                            width="520"
                            height="400"
                        />
                    </div>

                    <div>
                        <h2 id="content-types-heading" className="text-3xl font-semibold leading-tight text-[var(--color-heading)] md:text-4xl">
                            Content Formats We Master
                        </h2>
                        <p className="mt-3 text-[var(--color-paragraph)]/80">
                            Comprehensive content creation across all formats to meet your marketing needs
                        </p>
                        <ul className="mt-8 flex flex-col gap-4" role="list">
                            {contentTypes.map((t, i) => (
                                <li key={i} className="flex items-center gap-3 text-[var(--color-heading)]">
                                    <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]" aria-hidden="true">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </span>
                                    <span className="text-lg">{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 bg-background" aria-labelledby="benefits-heading">
                <div className="mx-auto max-w-6xl">
                    <h2 id="benefits-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Why Your Business Needs Content Creation
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-8">
                        Strategic content creation drives visibility, engagement, and business growth
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                        {benefits.map((c, i) => (
                            <article
                                key={i}
                                className={`relative overflow-hidden rounded-2xl ring-1 ring-[var(--color-paragraph)]/10 ${
                                    c.image ? "p-0 min-h-[240px]" : "bg-[var(--color-background)] p-6"
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

import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";
import {
    FileText,
    Layout,
    X,
    Mail,
    Video,
    Calendar,
} from "lucide-react";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function ContentMarketing() {
    const headpoints = [
        "SEO-Optimized Content Strategy",
        "Multi-Channel Distribution",
        "Data-Driven Performance Insights",
    ];

    const features = [
        {
            icon: FileText,
            title: "Blog & Article Writing",
            desc: "SEO-friendly blogs and articles that attract organic traffic, build authority, and educate your audience with valuable insights.",
        },
        {
            icon: Layout,
            title: "Website Content Strategy",
            desc: "Compelling website content that communicates your brand story, engages visitors, and converts them into loyal customers.",
        },
        {
            icon: X,
            title: "Social Media Content",
            desc: "Creative posts, captions, and visual designs that boost engagement, build community, and amplify your brand presence.",
        },
        {
            icon: Mail,
            title: "Email Marketing Campaigns",
            desc: "Targeted email content that nurtures leads, strengthens customer relationships, and drives conversions throughout the buyer journey.",
        },
        {
            icon: Video,
            title: "Video & Visual Content",
            desc: "Attention-grabbing videos, infographics, and graphics that increase brand visibility and engagement across all platforms.",
        },
        {
            icon: Calendar,
            title: "Content Strategy & Planning",
            desc: "Tailored content roadmaps that align with business goals, audience needs, and deliver consistent, measurable results.",
        },
    ];

    const contentProcess = [
        {
            id: "1",
            title: "Research & Strategy",
            desc: "Analyze audience behavior, competitor content, and market trends to define a data-driven content plan.",
        },
        {
            id: "2",
            title: "Content Planning",
            desc: "Map topics, formats, channels, and publishing schedules aligned with business goals and audience preferences.",
        },
        {
            id: "3",
            title: "Content Creation",
            desc: "Craft high-quality, engaging, SEO-optimized content designed for maximum impact and audience engagement.",
        },
        {
            id: "4",
            title: "Multi-Channel Distribution",
            desc: "Publish content across websites, social media, email, and other platforms where your audience is most active.",
        },
        {
            id: "5",
            title: "Promotion & Amplification",
            desc: "Boost reach through SEO optimization, social sharing, influencer partnerships, and strategic paid promotion.",
        },
        {
            id: "6",
            title: "Performance Tracking",
            desc: "Monitor metrics, analyze ROI, and continuously refine strategies based on data for sustained growth.",
        },
    ];

    const benefits = [
        {
            title: "Boosts Brand Awareness",
            desc: "Content marketing increases visibility across search engines and social platforms, making your brand recognizable in crowded markets and giving you a competitive edge.",
        },
        {
            title: "Drives Organic Traffic",
            desc: "SEO-optimized content delivers long-term visibility on search engines, generating consistent organic traffic without ongoing ad spend.",
        },
        {
            title: "Builds Authority & Trust",
            desc: "Valuable, insightful content positions your brand as an industry thought leader, building credibility and trust with your target audience.",
        },
        {
            title: "Supports Sales & Conversions",
            desc: "Strategic content nurtures leads through the buyer journey, addressing pain points and moving prospects closer to purchase decisions.",
        },
        {
            title: "Cost-Effective Marketing",
            desc: "Content marketing delivers an average ROI of $3 per dollar spent—67% better than paid advertising—with compound returns over time.",
        },
        {
            title: "Improves Customer Engagement",
            desc: "Engaging content creates lasting connections, encourages interaction, increases customer lifetime value, and turns customers into brand advocates.",
        },
    ];

    const reasons = [
        {
            title: "Industry Expertise",
            desc: "Our team understands multiple industries and creates content that resonates authentically with your specific target audience."
        },
        {
            title: "Tailored Strategies",
            desc: "We design unique, data-driven content plans aligned with your business goals—not generic, one-size-fits-all approaches."
        },
        {
            title: "Results-Driven Approach",
            desc: "We focus on measurable outcomes: more organic traffic, qualified leads, higher engagement, and improved conversions."
        },
        {
            title: "Transparent Collaboration",
            desc: "Regular performance reports, analytics dashboards, and clear communication keep you informed at every stage."
        },
    ];

    const faqs = [
        {
            question: "What is content marketing and how does it differ from content creation?",
            answer: "Content marketing is a strategic approach that involves creating, distributing, and promoting valuable content to attract and engage a target audience, ultimately driving profitable customer action. While content creation focuses on producing individual pieces (blogs, videos, graphics), content marketing encompasses the entire strategy—research, planning, distribution, promotion, and performance analysis—to achieve business goals."
        },
        {
            question: "How long does it take to see results from content marketing?",
            answer: "Content marketing typically requires 3-6 months to show meaningful ROI. SEO-focused content can take 4-6 months to rank and drive organic traffic, while social media and email content may show engagement results within weeks. The compound effect grows over time—quality content continues generating traffic and leads for years after publication."
        },
        {
            question: "What kind of ROI can I expect from content marketing?",
            answer: "Content marketing delivers an average return of $3 for every dollar spent, compared to $1.80 for paid advertising. Well-executed B2B content strategies can achieve 4:1 to 13:1 ROI over 3 years. Returns vary by industry and content quality, but content marketing consistently outperforms paid ads in long-term value."
        },
        {
            question: "What content marketing services does Razor Infotech provide?",
            answer: "We provide comprehensive content marketing including strategy development, SEO-optimized blog writing, website content, social media content creation, email campaigns, video production, infographics, content distribution, promotion, and performance tracking with detailed analytics and reporting."
        },
    ];

    return (
        <>
            <title>Content Marketing Services - SEO, Blogs, Social Media & Strategy | Razor Infotech</title>
            <meta name="description" content="Expert content marketing services that drive engagement and growth. SEO-optimized blogs, social media content, email campaigns, and data-driven strategies. Average 3:1 ROI with long-term compound returns." />
            <meta name="keywords" content="content marketing services, content strategy, SEO content writing, blog marketing, social media marketing, email marketing campaigns, content marketing ROI, B2B content marketing, content distribution, digital content marketing" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Content Marketing Services - Drive Growth with Strategic Content" />
            <meta property="og:description" content="Professional content marketing with proven ROI. SEO blogs, social media, email campaigns, and multi-channel distribution strategies that build authority and drive conversions." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/content-marketing" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/seo/seo-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Content Marketing Services by Razor Infotech" />
            <meta name="twitter:description" content="Strategic content marketing that attracts, engages, and converts. SEO-optimized content with measurable results and long-term ROI." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/seo/seo-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/content-marketing" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Content Marketing Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional content marketing services including SEO content strategy, blog writing, social media content, email campaigns, video production, and multi-channel distribution with data-driven performance tracking.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Content Marketing Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "SEO Blog & Article Writing"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Social Media Content Marketing"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Email Marketing Campaigns"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Content Strategy & Planning"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Video & Visual Content Production"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="px-6 py-12 bg-background" aria-labelledby="hero-heading">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 id="hero-heading" className="text-3xl font-semibold text-heading md:text-4xl max-w-[95%]">
                            Drive Engagement & Growth With Strategic Content Marketing
                        </h1>
                        <p className="text-paragraph/80 text-base max-w-[90%]">
                            Our content marketing experts craft strategies that inform, inspire, and convert. From SEO-optimized blogs to multi-channel social campaigns, we help businesses build authority, attract qualified audiences, and achieve measurable ROI—with an average return of $3 per dollar spent.
                        </p>
                        <ul className="mt-4 grid grid-cols-1 gap-2" role="list">
                            {headpoints.map((e, i) => (
                                <li key={i} className="flex gap-4 items-center">
                                    <FaDotCircle className="text-light-green flex-shrink-0" aria-hidden="true" />
                                    <span className="text-base text-heading">{e}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white hover:opacity-90 transition-opacity mt-2"
                            aria-label="Request content marketing consultation"
                        >
                            <span>Accelerate My Growth</span>
                            <span className="rounded-full bg-white/20 p-2" aria-hidden="true">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>

                    <div>
                        <img
                            src="/images/seo/seo-hero.png"
                            alt="Content marketing strategy showing SEO optimization, social media, and analytics"
                            className="h-auto w-full rounded-2xl object-cover"
                            loading="eager"
                            width="800"
                            height="600"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-accent py-16 px-4" aria-labelledby="features-heading">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 py-1 rounded-full bg-light-green text-white text-sm shadow mb-4">
                        Our Services
                    </div>
                    <h2 id="features-heading" className="text-3xl text-heading font-bold mb-2">
                        Comprehensive Content Marketing Solutions
                    </h2>
                    <p className="text-paragraph max-w-3xl mx-auto mb-10">
                        Full-service content marketing tailored to your business goals, audience needs, and brand voice—driving measurable results across all channels.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <article
                                    key={index}
                                    className="flex gap-4 p-5 bg-background rounded-xl shadow hover:shadow-md transition-shadow text-left"
                                >
                                    <div className="flex-shrink-0">
                                        <span className="w-12 h-12 rounded-2xl bg-light-green text-white flex items-center justify-center" aria-hidden="true">
                                            <Icon />
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-heading font-semibold mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-paragraph text-sm">{feature.desc}</p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-unique to-accent py-16 px-4" aria-labelledby="process-heading">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 id="process-heading" className="text-heading font-bold mb-2 text-3xl">
                        Our Content Marketing Process
                    </h2>
                    <p className="text-paragraph max-w-3xl mx-auto mb-10">
                        A proven 6-step framework that transforms content into a strategic growth engine for your business.
                    </p>
                    <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
                        {contentProcess.map((step) => (
                            <li
                                key={step.id}
                                className="flex gap-4 p-5 bg-background rounded-xl shadow text-left"
                            >
                                <div className="flex-shrink-0">
                                    <span className="w-12 h-12 rounded-full bg-light-green text-white flex items-center justify-center text-sm font-bold">
                                        {step.id}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-heading font-semibold mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-paragraph text-sm">{step.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="bg-background px-6 py-14" aria-labelledby="benefits-heading">
                <div className="mx-auto max-w-7xl">
                    <h2 id="benefits-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Why Content Marketing Works in 2025
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-10">
                        Strategic content marketing delivers compound returns, building long-term assets that drive sustained growth
                    </p>

                    <div className="mt-10 space-y-10">
                        {benefits.map((item, idx) => (
                            <article key={idx} className="space-y-3">
                                <span className="text-light-green font-medium text-2xl">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                                    {item.title}
                                </h3>
                                <p className="max-w-[100ch] text-[var(--color-paragraph)]/80">
                                    {item.desc}
                                </p>
                                <hr className="mt-4 border-[var(--color-paragraph)]/20" aria-hidden="true" />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-gradient-to-b from-unique to-accent" aria-labelledby="why-choose-heading">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <h2 id="why-choose-heading" className="text-3xl text-heading font-bold mb-3">
                            Why Choose Razor Infotech for Content Marketing
                        </h2>
                        <p className="text-paragraph max-w-2xl">
                            We combine strategic thinking, creative execution, and data-driven optimization to deliver content marketing that drives real business results—not just vanity metrics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <img
                            src="/images/content-marketing/why-choose.png"
                            alt="Content marketing team collaborating on strategy and analytics"
                            className="rounded-xl object-cover w-full h-64 md:h-80 lg:h-96"
                            loading="lazy"
                            width="600"
                            height="400"
                        />

                        <div className="grid grid-cols-1 gap-6">
                            {reasons.map((reason, index) => (
                                <article key={index} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-md bg-green-100 flex items-center justify-center text-light-green font-bold shadow-sm">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-heading font-semibold mb-1">
                                            {reason.title}
                                        </h3>
                                        <p className="text-paragraph text-sm">{reason.desc}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
                <Faq faqs={faqs} />
            </Suspense>
        </>
    );
}

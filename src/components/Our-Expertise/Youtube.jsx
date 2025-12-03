import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
    Video,
    PlaySquare,
    Settings2,
    Search,
    Target,
    BarChart3,
} from "lucide-react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function Youtube() {
    const youtubeServices = [
        {
            icon: PlaySquare,
            title: "YouTube Channel Strategy",
            desc: "Comprehensive channel audit, content strategy, audience research, competitor analysis, and growth roadmap tailored to your business objectives and target demographics.",
        },
        {
            icon: Video,
            title: "Professional Video Production",
            desc: "High-quality video creation including scripting, filming, editing, motion graphics, sound design, and thumbnail design that captures attention and engages viewers.",
        },
        {
            icon: Settings2,
            title: "Channel Optimization",
            desc: "Optimize channel layout, branding, playlists, titles, descriptions, tags, custom thumbnails, end screens, and cards for maximum visibility and subscriber growth.",
        },
        {
            icon: Search,
            title: "YouTube SEO & Keyword Research",
            desc: "Data-driven keyword research, video SEO optimization, title/description optimization, tags strategy, and closed captions to improve rankings on YouTube and Google search.",
        },
        {
            icon: Target,
            title: "YouTube Ads & Campaigns",
            desc: "Targeted TrueView ads, bumper ads, display ads, and remarketing campaigns that reach the right audience, maximize ROI, and drive conversions at scale.",
        },
        {
            icon: BarChart3,
            title: "Analytics & Performance Tracking",
            desc: "Comprehensive YouTube Analytics monitoring, audience insights, watch time analysis, engagement metrics, conversion tracking, and monthly reports with actionable recommendations.",
        },
    ];

    const youtubeProcess = [
        {
            title: "Channel Audit & Strategy",
            desc: "Comprehensive analysis of your current channel, competitor research, audience insights, content gap analysis, and custom strategy development aligned with business goals.",
        },
        {
            title: "Content Planning & Production",
            desc: "Strategic content calendar creation, professional video production with scripting, filming, editing, motion graphics, and thumbnail design that captures attention.",
        },
        {
            title: "Optimization & Publishing",
            desc: "SEO-optimized titles, descriptions, tags, custom thumbnails, closed captions, playlists organization, and strategic publishing schedule for maximum visibility.",
        },
        {
            title: "Promotion & Growth",
            desc: "Multi-channel promotion including YouTube ads, social media sharing, email marketing, influencer collaborations, community engagement, and subscriber growth campaigns.",
        },
    ];

    const whyYouTubeMatters = [
        {
            title: "Massive Audience Reach",
            desc: "YouTube has 2.5+ billion monthly active users watching over 1 billion hours of video daily, making it the world's second-largest search engine after Google.",
        },
        {
            title: "Superior Engagement & Trust",
            desc: "Video content generates 1200% more shares than text and images combined. 88% of consumers trust video reviews as much as personal recommendations.",
        },
        {
            title: "Long-Term Organic Traffic",
            desc: "Unlike social media posts that disappear in hours, YouTube videos continue generating views, subscribers, and leads for months or years through search traffic.",
        },
        {
            title: "Conversion & Revenue Growth",
            desc: "Adding video to landing pages increases conversions by 86%. YouTube viewers are 4x more likely to use Google to research products featured in videos.",
        },
    ];

    const whyChooseUs = [
        {
            title: "YouTube Certified Experts",
            description: "Certified YouTube specialists with 8+ years experience growing channels from zero to 100K+ subscribers across diverse industries with proven strategies."
        },
        {
            title: "End-to-End Video Production",
            description: "Complete video marketing service from strategy and scripting to filming, editing, optimization, promotion, and analytics—no need for multiple vendors."
        },
        {
            title: "Data-Driven Growth Strategies",
            description: "Advanced analytics, A/B testing, audience insights, and performance tracking ensuring every video decision is backed by data for maximum ROI."
        },
        {
            title: "Proven Subscriber & Revenue Growth",
            description: "Track record of achieving 200-500% subscriber growth, 5-10x increase in watch time, and measurable revenue impact through YouTube marketing campaigns."
        },
    ];

    const faqs = [
        {
            question: "What YouTube marketing services does Razor Infotech provide?",
            answer: "We provide comprehensive YouTube marketing services including channel strategy and audit, professional video production (scripting, filming, editing, motion graphics), YouTube SEO and keyword research, channel optimization (branding, thumbnails, playlists), YouTube advertising (TrueView ads, bumper ads, remarketing), content calendar planning, community management, influencer collaborations, subscriber growth campaigns, and detailed analytics with monthly performance reports. We handle everything from initial strategy to ongoing optimization for sustained growth.",
        },
        {
            question: "How long does it take to grow a YouTube channel and see results?",
            answer: "Growth timelines vary based on niche, competition, and resources: Initial traction (3-6 months) - 100-1,000 subscribers with consistent quality content; Steady growth (6-12 months) - 1,000-10,000 subscribers with optimized strategy; Significant momentum (12-24 months) - 10,000-100,000+ subscribers with established authority. Key factors: posting frequency (minimum 2-4 videos/month), video quality, SEO optimization, promotion, and niche competition. We typically see measurable improvements in views and engagement within 60-90 days, with subscriber growth accelerating as channel authority builds.",
        },
        {
            question: "What does YouTube marketing cost and what's the ROI?",
            answer: "Pricing varies by service level: Basic package ($2,000-4,000/month) - monthly video production, basic optimization, analytics reporting; Standard package ($4,000-8,000/month) - weekly videos, comprehensive SEO, ads management, community engagement; Premium package ($8,000-15,000+/month) - multiple weekly videos, aggressive ad campaigns, influencer collaborations, dedicated account manager. ROI benefits include organic traffic for years (unlike social media), 86% higher conversion rates with video, subscriber base becoming email list asset, authority positioning, and measurable lead generation with proper tracking.",
        },
        {
            question: "Do you help with video production or just strategy and optimization?",
            answer: "We provide end-to-end video production services including: Pre-production (concept development, scripting, storyboarding), production (professional filming, lighting, sound, interviews, B-roll), post-production (editing, color grading, sound mixing, motion graphics, visual effects, thumbnail design), optimization (SEO, titles, descriptions, tags, closed captions), and distribution (publishing strategy, social promotion, paid ads). We can handle complete video creation or work with your existing footage to optimize for YouTube success. Our production team has experience across educational content, product demos, vlogs, interviews, animations, and promotional videos.",
        },
    ];

    return (
        <>
            <title>YouTube Marketing Services - Channel Growth, Video Production & Ads | Razor Infotech</title>
            <meta name="description" content="Professional YouTube marketing: channel strategy, video production, SEO optimization, YouTube ads, subscriber growth. 200-500% growth, proven results, end-to-end video services." />
            <meta name="keywords" content="YouTube marketing, YouTube channel growth, video marketing services, YouTube SEO, YouTube ads, video production, YouTube optimization, subscriber growth, video advertising, YouTube strategy" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="YouTube Marketing Services - Grow Your Channel & Audience" />
            <meta property="og:description" content="Expert YouTube marketing: professional video production, channel optimization, YouTube ads, SEO strategies. Drive subscribers, views, and conversions." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/youtube-marketing" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/youtube/youtube-hero.jpg" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="YouTube Marketing Services by Razor Infotech" />
            <meta name="twitter:description" content="Channel growth, video production, YouTube ads, SEO optimization. Grow your audience and revenue." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/youtube/youtube-hero.jpg" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/youtube-marketing" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "YouTube Marketing and Video Production Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional YouTube marketing services including channel strategy, video production, YouTube SEO, advertising campaigns, channel optimization, and analytics tracking to grow subscribers, views, engagement, and revenue.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "YouTube Marketing Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "YouTube Channel Strategy"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Professional Video Production"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "YouTube SEO & Optimization"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "YouTube Advertising Campaigns"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="px-6 py-12 bg-background" aria-labelledby="hero-heading">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 id="hero-heading" className="text-3xl font-semibold text-heading md:text-4xl lg:text-5xl">
                            Engage, Inspire, and Convert with YouTube Marketing
                        </h1>
                        <p className="text-paragraph/80 text-base leading-relaxed">
                            YouTube isn't just a video platform—it's the world's second-largest search engine with 2.5+ billion monthly users watching over 1 billion hours daily. It offers brands an unparalleled opportunity to connect with audiences through the power of video storytelling.
                        </p>
                        <p className="text-paragraph/80 text-base leading-relaxed">
                            Video content drives 1200% more shares than text and images combined. Through strategic YouTube marketing, businesses showcase their expertise, build trust with potential customers, and generate sustainable organic traffic that continues delivering results for years—not hours like social media posts.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-5 py-3 text-white hover:opacity-90 transition mt-2"
                            aria-label="Get YouTube marketing consultation"
                        >
                            <span>Get a Free Strategy Call</span>
                            <span className="rounded-full bg-white/20 p-2" aria-hidden="true">
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </div>
                    <div>
                        <img
                            src="/images/youtube/youtube-hero.jpg"
                            alt="YouTube marketing services showing video content creation and channel growth"
                            className="h-auto w-full rounded-2xl object-cover"
                            loading="eager"
                            width="600"
                            height="400"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-accent py-16 px-6" aria-labelledby="services-heading">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1 rounded-full border border-secondary text-heading text-sm font-medium mb-4">
                            Our Services
                        </span>
                        <h2 id="services-heading" className="text-3xl md:text-4xl font-semibold text-heading">
                            Comprehensive YouTube Marketing Solutions
                        </h2>
                        <p className="text-paragraph mt-4 max-w-3xl mx-auto">
                            Six powerful pillars of YouTube success—from strategy to analytics
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {youtubeServices.map(({ icon: Icon, title, desc }, i) => (
                            <article
                                key={i}
                                className="bg-background rounded-2xl p-6 md:p-7 flex items-start gap-5 shadow-sm hover:shadow-md transition"
                            >
                                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center shrink-0" aria-hidden="true">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-heading font-semibold leading-snug mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-paragraph text-sm leading-relaxed">
                                        {desc}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 bg-gradient-to-b from-unique to-accent" aria-labelledby="why-youtube-heading">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div>
                        <img
                            src="/images/youtube/Why-It-Matters.png"
                            alt="Why YouTube marketing matters for business growth and brand awareness"
                            className="h-auto w-full rounded-2xl object-cover"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h2 id="why-youtube-heading" className="text-3xl font-semibold text-heading md:text-4xl">
                            Why YouTube Marketing Matters
                        </h2>
                        <p className="text-paragraph/80 text-base leading-relaxed">
                            YouTube is the world's second-largest search engine with 2.5+ billion monthly users, generating massive organic reach that compounds over time. Unlike social media posts that disappear in hours, YouTube videos continue driving traffic, leads, and sales for months or years through search visibility and recommendations.
                        </p>
                        <p className="text-paragraph/80 text-base leading-relaxed">
                            Video marketing isn't optional anymore—88% of consumers trust video reviews as much as personal recommendations, and adding video to landing pages increases conversions by 86%. YouTube provides sustainable competitive advantage through authority positioning, brand storytelling, and measurable ROI that far exceeds traditional advertising.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 bg-background" aria-labelledby="benefits-heading">
                <div className="mx-auto max-w-7xl">
                    <h2 id="benefits-heading" className="text-center text-2xl font-semibold text-heading md:text-3xl mb-10">
                        Strategic Benefits of YouTube Marketing
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whyYouTubeMatters.map((benefit, i) => (
                            <article
                                key={i}
                                className="bg-accent rounded-2xl p-6 ring-1 ring-[var(--color-paragraph)]/10 hover:shadow-md transition"
                            >
                                <h3 className="text-lg font-semibold text-heading mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm leading-6 text-paragraph/80">
                                    {benefit.desc}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-unique to-accent px-6 py-14" aria-labelledby="process-heading">
                <div className="mx-auto max-w-7xl">
                    <h2 id="process-heading" className="text-center text-2xl font-semibold text-heading md:text-3xl mb-10">
                        Our YouTube Marketing Process
                    </h2>

                    <div className="space-y-10 max-w-5xl mx-auto">
                        {youtubeProcess.map((item, idx) => (
                            <article key={idx} className="space-y-3">
                                <span 
                                    className="text-secondary font-medium text-xl"
                                    aria-label={`Step ${idx + 1}`}
                                >
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-lg font-semibold text-heading">
                                    {item.title}
                                </h3>
                                <p className="max-w-[78ch] text-paragraph/80 leading-relaxed">
                                    {item.desc}
                                </p>
                                {idx < youtubeProcess.length - 1 && (
                                    <hr className="mt-6 border-paragraph/20" aria-hidden="true" />
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-accent p-6 sm:p-10" aria-labelledby="why-choose-heading">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 id="why-choose-heading" className="text-3xl text-heading font-semibold mb-3">
                            Why Choose Razor Infotech for YouTube Marketing?
                        </h3>
                        <p className="text-paragraph max-w-3xl mx-auto">
                            Expert YouTube specialists delivering measurable channel growth and revenue impact
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
                        {whyChooseUs.map((e, i) => (
                            <article key={i} className="p-6 bg-background rounded-2xl hover:shadow-md transition">
                                <div className="flex gap-4 items-start">
                                    <IoIosCheckmarkCircleOutline 
                                        className="text-secondary text-3xl flex-shrink-0 mt-1" 
                                        aria-hidden="true"
                                    />
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

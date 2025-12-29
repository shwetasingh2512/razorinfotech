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
            title: "Strategic Video Planning",
            desc: "We develop a content blueprint that is aligned with your brand’s goals that ensuring every video has a purpose. ",
        },
        {
            icon: Video,
            title: "Professional Video Production",
            desc: "Produce high-quality, engaging videos that reflect your brand’s reputation. ",
        },
        {
            icon: Settings2,
            title: "Channel & Content Optimization",
            desc: "We create compelling thumbnails, titles, and descriptions to increase their reach and drive clicks. ",
        },
        {
            icon: Search,
            title: "Strategic SEO & Keyword Targeting",
            desc: "Use advanced research to target potential keywords, higher ranking, and attract organic search traffic.",
        },
        {
            icon: Target,
            title: "Youtube Advertising",
            desc: "Create and manage ad campaigns to promote your content and reach new audiences. ",
        },
        {
            icon: BarChart3,
            title: "Analytics & Performance Tracking",
            desc: "Monitor key metrics from watch time to conversions that provide transparent reports and insights for continuous improvement. ",
        },
    ];

    const youtubeProcess = [
        {
            title: "Content Strategy",
            desc: "Plan videos as per your audience’s requirements, and make sure every video serves a purpose and supports your goals. ",
        },
        {
            title: "Creative Production",
            desc: "We produce high-quality videos that reflect the brand’s image and tell your story with impact. ",
        },
        {
            title: "Video Optimization",
            desc: "Create the best keywords, eye-catching thumbnails, titles, and screen prompts to continue the video flow. Video optimization helps the business to maximize views and engagement. ",
        },
        {
            title: "Growth & Engagement",
            desc: "Build a community by crafting the content across channels, encouraging likes, shares, comments, and subscriptions. We also collaborate with influencers and explore paid advertising.   ",
        },
        {
            title: "Evaluation & Analysis",
            desc: "We track the results by evaluating the watch time, audience retention, and traffic sources for continuous improvement.  ",
        },
    ];

    const whyYouTubeMatters = [
        {
            title: "Increased Views ",
            desc: "We help in driving more views to your videos with our excellent YouTube Marketing Services.",
        },
        {
            title: "Higher Engagement ",
            desc: "Create HD, resourceful, and engaging videos to attract audiences and followers. ",
        },
        {
            title: "Financial Growth",
            desc: "By monetizing your channel, you can earn online through video creation. ",
        },
        {
            title: "Trust & Reliability",
            desc: "Massive followers and engagement build a channel and brand reputation. Customers get attracted to well-established channels. ",
        },
    ];

    const whyChooseUs = [
        {
            title: "Proven Results",
            description: "We offer training development solutions that drive innovation, improve your team productivity, and increase your business outcomes."
        },
        {
            title: "Continuous Support",
            description: "Razor Infotech is here with you at every step to enhance your team’s growth. "
        },
        {
            title: "Expert Trainers",
            description: "Now, gain hands-on experience and practical tips from the industry-experienced professionals who have overcome daily tech challenges. "
        },
        {
            title: "Customized Solutions",
            description: "At first, we analyze your specific needs and then build a learning path that aligns with your projects, tech stack, and business goals. "
        },
    ];

    const faqs = [
        {
            question: "What is YouTube Video Marketing?",
            answer: " YouTube Video Marketing is the strategy that involves the use of the social media platform to promote your brand.",
        },
        {
            question: "What is the 30-second rule on YouTube?",
            answer: "The 30-second rule is a critical approach used by both influencers and YouTube as a guideline that keeps viewers engaged by changing visuals or adding interest every 30 seconds.",
        },
        {
            question: " How to do YouTube video marketing? ",
            answer: "YouTube video marketing is the strategy used for interacting with your audience. You can use video descriptions and banners to encourage users to engage by liking the video and subscribing to the channel.",
        },
        {
            question: "What are the 5 C’s of marketing Strategy?",
            answer: "The main 5 C’s of marketing strategy are: \n1. Company \n 2. Customers \n 3. Competitors \n 4. Collaborators \n 5. Climate",
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
                           Engage, Inspire & Collaborate With YouTube Video Marketing
                        </h1>
                        <p className="text-paragraph/80 text-base leading-relaxed">
                            Over 122 million people actively search and watch videos on YouTube. Audiences are not only scrolling, but they are actively engaging with the billions of content available online. It creates an opportunity for the brands to showcase their story, highlight their expertise, and build trust with potential customers. 
                        </p>
                        <p className="text-paragraph/80 text-base leading-relaxed">
                            Video content engages the audience by asking questions, seeking reviews through the comment section, and community posts. It has the power to inform, inspire, and innovate in the competitive market.
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
                           Grow Your Audience With Our Content Marketing
                        </h2>
                        <p className="text-paragraph mt-4 max-w-3xl mx-auto">
                           Our YouTube marketing services turn video into your most powerful channel for growth. 
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
                          Why It Matters ?
                        </h2>
                        <p className="text-paragraph/80 text-base leading-relaxed">
                            YouTube is a platform that offers customers the opportunity to learn, explore, and make decisions. Basically, we turn viewers into customers by creating video content that is seen and resourceful.  It is significant- <br/> Provides a massive audience and reach. <br/> Boost SEO and search visibility. <br/> Drives engagement.<br/> Increase the online authority of the business.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 bg-background" aria-labelledby="benefits-heading">
                <div className="mx-auto max-w-7xl">
                    <h2 id="benefits-heading" className="text-center text-2xl font-semibold text-heading md:text-3xl mb-10">
                       Our YouTube Marketing Services Helps in Achieving
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
                       Our Process for YouTube Video Marketing
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
                           Why Choose Razor Infotech?
                        </h3>
                        <p className="text-paragraph max-w-3xl mx-auto">
                           Razor Infotech delivers innovative, high-quality solutions that drive business success.
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

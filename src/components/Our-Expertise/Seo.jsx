import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function Seo() {
    const keyBenefits = [
        "85% of Clicks on First Page",
        "3x More Leads Than Paid Ads",
        "Sustainable Long-Term Growth",
        "Build Trust & Authority",
    ];

    const seoFeatures = [
        {
            id: "01",
            title: "Comprehensive SEO Audit",
            desc: "In-depth technical analysis identifying issues affecting rankings, crawlability, site speed, mobile usability, and opportunities for optimization and growth.",
        },
        {
            id: "02",
            title: "On-Page SEO Optimization",
            desc: "Strategic optimization of titles, meta descriptions, headers, content quality, internal linking, keyword placement, and schema markup for maximum search visibility.",
        },
        {
            id: "03",
            title: "Technical SEO",
            desc: "Enhance site speed (Core Web Vitals), mobile responsiveness, XML sitemaps, robots.txt, HTTPS security, canonical tags, and structured data for better indexing and crawling.",
        },
        {
            id: "04",
            title: "Off-Page SEO & Link Building",
            desc: "Building domain authority through high-quality backlink acquisition, guest posting, digital PR, influencer outreach, and ethical white-hat link building strategies.",
        },
        {
            id: "05",
            title: "Keyword Research & Strategy",
            desc: "Data-driven keyword research identifying high-value search terms with optimal search volume, competition, and commercial intent aligned with business goals.",
        },
        {
            id: "06",
            title: "Local SEO Optimization",
            desc: "Optimize Google Business Profile, local citations, location-specific keywords, reviews, and NAP consistency to dominate local search results and attract nearby customers.",
        },
        {
            id: "07",
            title: "Content Strategy & Optimization",
            desc: "Create SEO-optimized content including blog posts, landing pages, and pillar content that answers search intent, targets keywords, and drives organic traffic.",
        },
        {
            id: "08",
            title: "Performance Tracking & Reporting",
            desc: "Comprehensive analytics tracking rankings, organic traffic, conversions, ROI, and competitor performance with monthly reports and actionable insights for continuous improvement.",
        },
    ];

    const seoProcess = [
        {
            id: "01",
            title: "SEO Audit & Research",
            desc: "Comprehensive website audit analyzing technical issues, on-page factors, backlink profile, competitor strategies, and keyword research to identify growth opportunities and quick wins.",
        },
        {
            id: "02",
            title: "Custom Strategy Development",
            desc: "Based on audit findings, we create a tailored SEO roadmap with prioritized action items, keyword targets, content plans, and technical fixes designed to boost rankings and maximize ROI.",
        },
        {
            id: "03",
            title: "On-Page & Technical Implementation",
            desc: "Execute on-page optimization (titles, meta tags, content, internal linking) and fix technical issues (speed, mobile, indexing, schema) to improve visibility and user experience.",
        },
        {
            id: "04",
            title: "Content Creation & Off-Page SEO",
            desc: "Develop high-quality, SEO-optimized content targeting strategic keywords, while building authoritative backlinks through ethical outreach, guest posting, and digital PR campaigns.",
        },
        {
            id: "05",
            title: "Monitoring, Reporting & Optimization",
            desc: "Continuous performance tracking with Google Analytics and Search Console, monthly reports showing rankings, traffic, conversions, and ongoing optimization based on data insights.",
        },
    ];

    const whyChooseUs = [
        {
            id: "01",
            title: "Proven Results & Case Studies",
            desc: "Track record of achieving 150-300% traffic growth, first-page rankings for competitive keywords, and measurable ROI increases for clients across industries.",
        },
        {
            id: "02",
            title: "White-Hat, Future-Proof SEO",
            desc: "Ethical strategies following Google guidelines that build sustainable rankings, avoiding risky shortcuts that could result in penalties or algorithm updates.",
        },
        {
            id: "03",
            title: "Transparent Reporting & Communication",
            desc: "Clear monthly reports showing keyword rankings, traffic growth, conversion metrics, and ROI with regular strategy calls and responsive support.",
        },
        {
            id: "04",
            title: "Customized for Your Industry",
            desc: "Tailored SEO strategies adapted to your specific industry, business model, target audience, competitive landscape, and unique growth objectives.",
        },
    ];

    const faqs = [
        {
            question: "What does SEO mean?",
            answer: "The practice of improving a website’s quality, content, and structure to rank higher in organic search engine results, like Google. ",
        },
        {
            question: "What are the 4 types of SEO?",
            answer: "The main types of SEO are on-page, off-page, technical seo, and local seo.",
        },
        {
            question: "Can ChatGPT do SEO?",
            answer: "Yes, ChatGPT can significantly help with SEO by automating tasks like keyword research, content outlining, meta tag generation, and schema markup.",
        },
        {
            question: "What is the cost of SEO services?",
            answer: "The cost of SEO services depends on the type of SEO and the project type",
        },
    ];

    return (
        <>
            <title>SEO Services - Increase Organic Traffic & Rankings by 150-300% | Razor Infotech</title>
            <meta name="description" content="Professional SEO services: technical audits, on-page optimization, link building, local SEO, and content strategy. Achieve first-page rankings, 3x more leads, and sustainable organic growth." />
            <meta name="keywords" content="SEO services, search engine optimization, SEO agency, organic search optimization, local SEO, technical SEO, link building, keyword research, SEO audit, Google rankings, SEO consultant" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="SEO Services - Drive Organic Traffic & First-Page Rankings" />
            <meta property="og:description" content="Expert SEO services that increase rankings, traffic, and conversions. White-hat strategies, proven results, transparent reporting." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/seo" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/seo/seo-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="SEO Services by Razor Infotech" />
            <meta name="twitter:description" content="Professional SEO: technical optimization, link building, content strategy. Achieve sustainable organic growth." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/seo/seo-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/seo" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Search Engine Optimization (SEO) Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional SEO services including technical audits, on-page optimization, off-page SEO and link building, keyword research, local SEO, content strategy, and performance tracking to increase organic traffic, rankings, and conversions.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "SEO Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Technical SEO Audit & Optimization"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "On-Page SEO"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Off-Page SEO & Link Building"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Local SEO"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="px-4 sm:px-6 py-8 sm:py-12 bg-background" aria-labelledby="hero-heading">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-6">
                        <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-heading max-w-xl">
                            Get Found By Your Target Customers on Google
                        </h1>
                        <p className="text-paragraph/80 text-base max-w-xl leading-relaxed">
                            Professional SEO strategies that help your website rank higher on Google search results, attract qualified organic traffic, and generate more leads. If your business isn't showing up on the first page, you're missing 85% of potential customers.
                        </p>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {keyBenefits.map((point, idx) => (
                                <div key={idx} className="flex gap-3 items-center">
                                    <FaDotCircle className="text-secondary flex-shrink-0" aria-hidden="true" />
                                    <span className="text-sm sm:text-base text-heading">{point}</span>
                                </div>
                            ))}
                        </div>
                        <Link
                            to="/contact"
                            className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-5 py-3 text-white hover:opacity-90 transition"
                            aria-label="Get SEO consultation"
                        >
                            <span>Talk To An SEO Expert</span>
                            <span className="rounded-full bg-white/20 p-2" aria-hidden="true">
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </div>

                    <div>
                        <img
                            src="/images/seo/seo-hero.png"
                            alt="SEO services showing search engine rankings and organic traffic growth"
                            className="w-full h-48 sm:h-64 md:h-80 rounded-2xl object-cover"
                            loading="eager"
                            width="800"
                            height="320"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-unique to-accent p-8 md:p-20" aria-labelledby="why-seo-heading">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-12 items-center">
                    <img
                        src="/images/seo/SEO-Matters.png"
                        alt="Why SEO matters for business growth and online visibility"
                        className="md:w-4/5 mx-auto md:mx-0 rounded-2xl"
                        loading="lazy"
                        width="600"
                        height="400"
                    />
                    <div className="flex flex-col justify-center">
                        <h2 id="why-seo-heading" className="text-heading text-3xl md:text-4xl mb-4 font-semibold">
                            Why SEO Matters for Business Growth?
                        </h2>
                        <p className="text-paragraph text-base leading-relaxed">
                            SEO is essential for business growth because it increases online visibility, drives qualified organic traffic, and generates leads without ongoing ad spend. 85% of clicks go to organic results, and SEO delivers 3x more leads than paid advertising.
                        </p>
                        <p className="text-paragraph text-base leading-relaxed mt-4">
                            From higher conversion rates to building brand credibility, SEO improves search rankings, establishes authority, and provides sustainable long-term growth that compounds over time, making it one of the highest ROI marketing investments.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-accent py-12 px-4" aria-labelledby="features-heading">
                <div className="max-w-7xl w-full text-center mx-auto">
                    <div className="inline-flex items-center px-4 py-1 rounded-full bg-secondary text-white text-sm shadow mb-4 justify-center mx-auto max-w-max font-medium">
                        Our Services
                    </div>
                    <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold mb-4 text-heading">
                        Comprehensive SEO Solutions
                    </h2>
                    <p className="text-paragraph max-w-3xl mx-auto mb-10">
                        Our expert team delivers end-to-end SEO services that improve search rankings, drive qualified organic traffic, increase brand visibility, and generate measurable leads and revenue.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {seoFeatures.map((feature) => (
                            <article
                                key={feature.id}
                                className="flex gap-4 p-6 bg-background rounded-xl shadow hover:shadow-md transition-shadow text-left"
                            >
                                <div className="flex-shrink-0">
                                    <span 
                                        className="w-12 h-12 rounded-2xl bg-secondary text-white flex items-center justify-center text-sm font-bold shadow-sm"
                                        aria-label={`Service ${feature.id}`}
                                    >
                                        {feature.id}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-heading font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-paragraph text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-12 px-4" aria-labelledby="process-heading">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="flex items-start gap-6 mb-10 flex-col md:flex-row justify-between">
                        <div className="max-w-full md:max-w-3xl">
                            <span className="inline-flex items-center px-4 py-1 rounded-full bg-secondary text-white text-sm shadow mb-4 font-medium">
                                Our Process
                            </span>
                            <h2 id="process-heading" className="text-3xl md:text-4xl text-heading font-bold mb-4">
                                Our Proven SEO Process
                            </h2>
                            <p className="text-paragraph max-w-3xl">
                                At Razor Infotech, we follow a clear, strategic, and data-driven SEO process. Each step ensures higher search visibility, qualified organic traffic, and measurable business growth with transparent reporting.
                            </p>
                        </div>

                        <img
                            src="/images/seo/illusteration.png"
                            alt="SEO process illustration"
                            className="hidden md:block w-32 md:w-48 lg:w-56 h-auto object-contain"
                            loading="lazy"
                            width="224"
                            height="224"
                        />
                    </div>

                    <div className="space-y-8">
                        {seoProcess.map((s) => (
                            <article
                                key={s.id}
                                className="grid grid-cols-1 md:grid-cols-12 items-start gap-6 bg-accent p-6 rounded-2xl"
                            >
                                <div className="md:col-span-5 flex items-center gap-4">
                                    <div 
                                        className="w-10 h-10 flex-shrink-0 rounded-full bg-secondary flex items-center justify-center text-white font-semibold"
                                        aria-label={`Step ${s.id}`}
                                    >
                                        {s.id}
                                    </div>
                                    <h3 className="text-heading font-semibold">{s.title}</h3>
                                </div>

                                <div className="md:col-span-7">
                                    <p className="text-paragraph text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gradient-to-b from-unique to-accent" aria-labelledby="why-choose-heading">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10">
                        <h2 id="why-choose-heading" className="text-3xl md:text-4xl text-heading font-bold mb-4">
                            Why Choose Razor Infotech for SEO?
                        </h2>
                        <p className="text-paragraph max-w-2xl">
                            We go beyond rankings—we become your strategic growth partner. Our approach combines proven SEO expertise, cutting-edge technology, and custom strategies tailored to your industry, competitors, and business objectives.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <img
                            src="/images/seo/why-choose.png"
                            alt="Why choose Razor Infotech for SEO services"
                            className="rounded-2xl object-cover w-full h-64 md:h-80 lg:h-[22rem] shadow-lg"
                            loading="lazy"
                            width="1200"
                            height="352"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {whyChooseUs.map((reason) => (
                                <article key={reason.id} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div 
                                            className="w-12 h-12 rounded-md bg-background flex items-center justify-center text-secondary font-bold shadow-sm"
                                            aria-label={`Reason ${reason.id}`}
                                        >
                                            {reason.id}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-heading font-semibold mb-2">
                                            {reason.title}
                                        </h3>
                                        <p className="text-paragraph text-sm leading-relaxed">{reason.desc}</p>
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

import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Megaphone, Users, Zap, Monitor } from "lucide-react";
import WhychooseSection from "../../reusable/WhychooseSection";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function ContentManagement() {
    const benefits = [
        {
            icon: <Users className="w-6 h-6 text-white" />,
            title: "Maintain Brand Consistency",
            description: "Ensure consistent tone, style, and voice across all platforms to build trust and strengthen brand recognition with your target audience.",
            image: "/images/content-management/Maintain-Brand.png",
        },
        {
            icon: <Zap className="w-6 h-6 text-white" />,
            title: "Improve Work Efficiency",
            description: "Streamline content workflows, reduce time-to-market, and eliminate bottlenecks with our skilled content management team.",
            image: "/images/content-management/Improve-Work.jpg",
        },
        {
            icon: <Monitor className="w-6 h-6 text-white" />,
            title: "Enhance User Engagement",
            description: "Keep content fresh, relevant, and up-to-date to boost user engagement, increase time-on-site, and drive higher conversions.",
            image: "/images/content-management/Enhance-User.jpg",
        },
        {
            icon: <Megaphone className="w-6 h-6 text-white" />,
            title: "Support Marketing & SEO",
            description: "Optimize content for search engines while supporting marketing campaigns to ensure your brand appears in the right searches at the right time.",
            image: "/images/content-management/Support-Marketing.jpg",
        },
    ];

    const faqs = [
        {
            question: "What is content management and why do businesses need it?",
            answer: "Content management involves organizing, maintaining, and optimizing digital content across websites, apps, and platforms. Businesses need it to ensure brand consistency, improve workflow efficiency, keep content fresh and SEO-optimized, and manage growing volumes of digital assets effectively."
        },
        {
            question: "What content management services does Razor Infotech provide?",
            answer: "We provide comprehensive content management including CMS setup and configuration, content creation and editing, workflow optimization, multi-platform content distribution, version control, metadata management, content audits, and ongoing maintenance and updates."
        },
        {
            question: "Which content management systems (CMS) do you work with?",
            answer: "We work with all major CMS platforms including WordPress, Drupal, Joomla, Contentful, Strapi, Sanity, Adobe Experience Manager, and custom-built content management solutions. We help you choose the right CMS based on your business needs."
        },
        {
            question: "How does content management improve SEO performance?",
            answer: "Effective content management improves SEO through proper metadata optimization, regular content updates, structured data implementation, internal linking strategies, content freshness signals, and mobile-responsive delivery—all of which help search engines better understand and rank your content."
        },
    ];

    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/Software-developement/y-choose-us.png",
        child: [
            {
                title: "Expert Content Teams",
                desc: "Our professionals understand industry-specific needs and deliver high-quality, accurate content management across all platforms."
            },
            {
                title: "Custom Workflow Integration",
                desc: "We tailor our services to your existing tools, platforms, and workflows for seamless integration with internal systems."
            },
            {
                title: "Cross-Platform Support",
                desc: "Manage content across websites, mobile apps, e-commerce platforms, blogs, and social media from a centralized system."
            },
            {
                title: "Scalable Operations",
                desc: "Handle content volumes that grow with your business—from small websites to enterprise-scale digital ecosystems."
            },
        ]
    };

    const posts = [
        {
            id: 1,
            title: "Top 5 Content Management Systems Compared: Which One is Right for You?",
            excerpt: "A comprehensive comparison of leading CMS platforms including WordPress, Drupal, and headless solutions to help you make the right choice for your business.",
            image: "/images/content-management/Top-5.jpg",
            href: "/blog/cms-compared",
        },
        {
            id: 2,
            title: "How a Good CMS Improves Your SEO Rankings",
            excerpt: "Discover how the right content management system can boost your search engine rankings through better optimization, faster loading times, and structured content.",
            image: "/images/content-management/Good-CMS.jpg",
            href: "/blog/cms-and-seo",
        },
        {
            id: 3,
            title: "AI in Content Management: Transforming How Businesses Handle Digital Assets",
            excerpt: "Explore how artificial intelligence is revolutionizing content management with automated tagging, smart recommendations, and intelligent content organization.",
            image: "/images/content-management/AI.jpg",
            href: "/blog/ai-in-cms",
        },
    ];

    return (
        <>
            <title>Content Management Services - CMS Solutions & Digital Asset Management | Razor Infotech</title>
            <meta name="description" content="Professional content management services for websites, apps, and digital platforms. CMS setup, workflow optimization, content organization, and ongoing maintenance to ensure brand consistency and efficiency." />
            <meta name="keywords" content="content management services, CMS solutions, digital asset management, WordPress management, content workflow, content optimization, website content management, enterprise CMS, content strategy, content maintenance" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Content Management Services - Streamline Your Digital Content" />
            <meta property="og:description" content="Expert content management for websites and digital platforms. Maintain brand consistency, improve efficiency, and enhance user engagement with professional CMS solutions." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/content-management" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/content-management/content-management-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Content Management Services by Razor Infotech" />
            <meta name="twitter:description" content="Streamline content workflows and maintain brand consistency with professional content management services across all platforms." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/content-management/content-management-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/content-management" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Content Management Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional content management services including CMS setup, workflow optimization, content organization, multi-platform distribution, and ongoing maintenance for websites and digital platforms.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Content Management Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "CMS Setup & Configuration"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Content Workflow Optimization"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Multi-Platform Content Distribution"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Digital Asset Management"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="bg-accent px-6 py-12" aria-labelledby="hero-heading">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 id="hero-heading" className="text-3xl font-semibold text-heading md:text-4xl lg:max-w-[90%]">
                            Streamline, Optimize, & Grow Your Digital Content
                        </h1>
                        <p className="text-paragraph/80 text-base lg:max-w-[85%]">
                            Our content management experts help businesses streamline workflows, ensure brand consistency, and keep digital assets organized and up-to-date. From CMS setup to ongoing optimization, we manage your content ecosystem so it drives engagement, enhances visibility, and delivers measurable business value.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white hover:opacity-90 transition-opacity"
                            aria-label="Get content management consultation"
                        >
                            <span>Optimize My Content Workflow</span>
                            <span className="rounded-full bg-white/20 p-2" aria-hidden="true">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>
                    <div>
                        <img
                            src="/images/content-management/content-management-hero.png"
                            alt="Content management dashboard showing organized digital assets and workflow optimization"
                            className="h-auto w-full rounded-2xl object-cover"
                            loading="eager"
                            width="800"
                            height="600"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-background py-16 px-6" aria-labelledby="benefits-heading">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 id="benefits-heading" className="text-3xl font-semibold text-heading">
                        Why Businesses Need Content Management
                    </h2>
                    <p className="text-paragraph mt-3">
                        Effective content management ensures consistency, efficiency, and growth across all digital channels and platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10">
                    {benefits.map((item, index) => (
                        <article
                            key={index}
                            className="bg-accent rounded-2xl shadow-sm p-5 flex flex-col hover:shadow-md transition-shadow"
                        >
                            <img
                                src={item.image}
                                alt={`${item.title} illustration`}
                                className="rounded-lg w-full h-40 object-cover"
                                loading="lazy"
                                width="300"
                                height="160"
                            />
                            <div className="flex items-center mt-4">
                                <div className="bg-secondary p-2 rounded-full" aria-hidden="true">
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-heading mt-3">
                                {item.title}
                            </h3>
                            <p className="text-paragraph mt-2 text-sm">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <WhychooseSection points={points} />

            <section className="bg-[#E7F0EA] py-14 px-6" aria-labelledby="blog-heading">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <h2 id="blog-heading" className="text-3xl font-semibold text-heading">
                            Content Management Insights
                        </h2>
                        <Link
                            to="/blog"
                            className="inline-flex items-center font-semibold gap-2 border rounded-full px-4 py-2 hover:bg-black/5 transition"
                            aria-label="View all blog posts"
                        >
                            View all posts
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {posts.map((post) => (
                            <article key={post.id} className="group">
                                <div className="relative rounded-[24px] overflow-hidden shadow-sm bg-white">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-64 w-full object-cover"
                                        loading="lazy"
                                        width="400"
                                        height="256"
                                    />
                                    <Link
                                        to={post.href}
                                        className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 shadow inline-flex items-center gap-2 text-sm font-medium hover:translate-x-0.5 transition"
                                        aria-label={`Read more about ${post.title}`}
                                    >
                                        Read more <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                <h3 className="mt-4 text-lg font-semibold text-heading leading-snug">
                                    <Link to={post.href} className="hover:text-secondary transition-colors">
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="mt-2 text-paragraph text-sm line-clamp-2">
                                    {post.excerpt}
                                </p>
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

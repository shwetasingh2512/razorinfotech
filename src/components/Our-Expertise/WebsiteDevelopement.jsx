import { lazy, Suspense } from "react";
import BelowImageSection from "../../reusable/BelowImageSection";
import { Lightbulb, Palette, Code2, Wrench, Rocket, RefreshCw } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function WebsiteDevelopment() {
    const heroSection = {
        title: "Custom Website Development That Drives Results",
        description: "From stunning visuals to lightning-fast performance—we design and develop responsive, secure websites that combine creativity with powerful functionality to achieve your business goals.",
        image: "/images/Website-developement/website-developement-hero-image.png",
        alt: "Custom website development services with responsive design",
        bgcolor: "bg-accent"
    };

    const developmentProcess = [
        {
            Icon: Lightbulb,
            title: "Discovery & Requirements",
            desc: "Deep dive into your business goals, target audience, brand identity, competitor analysis, and technical requirements to build the foundation for success.",
        },
        {
            Icon: Palette,
            title: "UI/UX Design",
            desc: "Create visually stunning, user-centric interfaces with wireframes, mockups, prototypes, and design systems that ensure seamless user experiences across all devices.",
        },
        {
            Icon: Code2,
            title: "Development & Coding",
            desc: "Build responsive, fast-loading websites using modern frameworks (React, Next.js, WordPress), clean code, SEO best practices, and performance optimization.",
        },
        {
            Icon: Wrench,
            title: "Testing & Quality Assurance",
            desc: "Comprehensive testing across devices, browsers, and screen sizes—functional testing, performance optimization, security audits, and bug fixes before launch.",
        },
        {
            Icon: Rocket,
            title: "Launch & Deployment",
            desc: "Seamless deployment to production servers with DNS configuration, SSL setup, performance monitoring, search engine submission, and post-launch optimization.",
        },
        {
            Icon: RefreshCw,
            title: "Maintenance & Support",
            desc: "Ongoing updates, security patches, performance monitoring, content updates, feature enhancements, and 24/7 technical support for long-term success.",
        },
    ];

    const keyBenefits = [
        "Responsive design optimized for all devices",
        "SEO-friendly architecture for better rankings",
        "Fast loading speeds (under 3 seconds)",
        "Secure HTTPS with regular security updates",
        "Scalable infrastructure that grows with you",
        "Ongoing support and maintenance included"
    ];

    const faqs = [
        {
            question: "What is Web Development? ",
            answer: "Web development is the process of creating, building, and maintaining websites and web applications that run smoothly online on a browser. ",
        },
        {
            question: "What are the different stages of web development?",
            answer: "The different stages of web development are: \n Planning and researching \n Designing \n Creating content \n Development/Coding \n Testing \n Launching \n Maintenance and updates",
        },
        {
            question: "What are the main types of web development?",
            answer: "The main types of web development are: \nFront-end development \nBack-end development’ \nFull-stack development",
        },
        {
            question: "What is the main role of a web developer?",
            answer: "A web developer builds a website and applications from the initial step, from planning and research to coding and maintenance, and updates.",
        },
    ];

    return (
        <>
            <title>Website Development Services - Custom, Responsive & SEO-Optimized Websites | Razor Infotech</title>
            <meta name="description" content="Professional website development: custom design, responsive layouts, e-commerce, CMS integration, SEO optimization. Fast, secure websites that convert visitors into customers." />
            <meta name="keywords" content="website development, web design, custom website, responsive web design, e-commerce development, WordPress development, web application development, website redesign, UI/UX design, SEO-friendly websites" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Website Development Services - Build Your Online Presence" />
            <meta property="og:description" content="Custom website development with responsive design, e-commerce solutions, SEO optimization, and ongoing support. Transform your digital presence." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/website-development" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/Website-developement/website-developement-hero-image.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Website Development Services by Razor Infotech" />
            <meta name="twitter:description" content="Custom websites, e-commerce solutions, responsive design, SEO optimization. Build your digital presence." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/Website-developement/website-developement-hero-image.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/website-development" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Website Development Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional website development services including custom design, responsive web development, e-commerce solutions, CMS integration, UI/UX design, SEO optimization, and ongoing maintenance and support.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Website Development Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Custom Web Development"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "E-Commerce Development"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "UI/UX Design"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Website Maintenance & Support"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <BelowImageSection items={heroSection} />
            
            <section className="bg-accent p-6 sm:p-10" aria-labelledby="services-heading">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-10">
                        <h2 id="services-heading" className="text-3xl md:text-4xl font-semibold text-heading mb-4">
                            Comprehensive Website Development Solutions
                        </h2>
                        <p className="text-paragraph max-w-3xl mx-auto">
                            From simple business websites to complex e-commerce platforms—we deliver solutions that drive results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-5">
                        <article className="lg:col-span-3 lg:row-span-3 lg:col-start-1 lg:row-start-1 rounded-2xl bg-[var(--color-background)] shadow hover:shadow-md transition p-6 flex flex-col">
                            <img
                                src="/images/Website-developement/Custom-Web-Development.png"
                                alt="Custom web development with modern frameworks"
                                className="h-40 w-full rounded-xl object-cover"
                                loading="lazy"
                                width="400"
                                height="160"
                            />
                            <h3 className="mt-4 font-semibold text-lg text-[var(--color-heading)]">Custom Web Development</h3>
                            <p className="mt-2 text-sm text-[var(--color-paragraph)]/80 leading-relaxed">
                                Build fully customized, responsive, scalable, and secure websites using modern technologies (React, Next.js, Node.js) tailored to your unique brand identity, business goals, and target audience needs.
                            </p>
                        </article>
                        
                        <article className="lg:col-span-3 lg:row-span-2 lg:col-start-1 lg:row-start-4 rounded-2xl bg-[var(--color-background)] shadow hover:shadow-md transition p-6 flex flex-col">
                            <img
                                src="/images/Website-developement/UIUX-Design.png"
                                alt="UI/UX design and user experience optimization"
                                className="h-28 w-full rounded-xl object-cover"
                                loading="lazy"
                                width="400"
                                height="112"
                            />
                            <h3 className="mt-4 font-semibold text-lg text-[var(--color-heading)]">UI/UX Design</h3>
                            <p className="mt-2 text-sm text-[var(--color-paragraph)]/80 leading-relaxed">
                                Design beautiful, intuitive interfaces with seamless user journeys, conversion-optimized layouts, and engaging interactions that keep visitors exploring and drive measurable business results.
                            </p>
                        </article>

                        <article className="lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-1 rounded-2xl bg-[var(--color-background)] shadow hover:shadow-md transition p-6 flex flex-col">
                            <img
                                src="/images/Website-developement/E-Commerce-Development.png"
                                alt="E-commerce website development and online store solutions"
                                className="h-28 w-full rounded-xl object-cover"
                                loading="lazy"
                                width="400"
                                height="112"
                            />
                            <h3 className="mt-4 font-semibold text-lg text-[var(--color-heading)]">E-Commerce Development</h3>
                            <p className="mt-2 text-sm text-[var(--color-paragraph)]/80 leading-relaxed">
                                Launch powerful online stores with product catalogs, secure payment gateways (Stripe, PayPal), inventory management, customer accounts, and conversion-optimized checkout flows that drive sales.
                            </p>
                        </article>

                        <article className="lg:col-span-3 lg:row-span-3 lg:col-start-4 lg:row-start-3 rounded-2xl bg-[var(--color-background)] shadow hover:shadow-md transition p-6 flex flex-col">
                            <img
                                src="/images/Website-developement/Website-Maintenance-Support.png"
                                alt="Website maintenance and technical support services"
                                className="h-40 w-full rounded-xl object-cover"
                                loading="lazy"
                                width="400"
                                height="160"
                            />
                            <h3 className="mt-4 font-semibold text-lg text-[var(--color-heading)]">Website Maintenance & Support</h3>
                            <p className="mt-2 text-sm text-[var(--color-paragraph)]/80 leading-relaxed">
                                Keep your website fast, secure, and current with ongoing maintenance—security updates, performance optimization, content updates, bug fixes, uptime monitoring, and 24/7 technical support.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="bg-background px-6 py-14 md:py-16" aria-labelledby="process-heading">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-10">
                        <span className="inline-block border border-secondary py-2 px-6 rounded-full text-paragraph font-medium mb-4">
                            Work Process
                        </span>
                        <h2 id="process-heading" className="text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                            From Concept To Launch & Beyond
                        </h2>
                        <p className="text-paragraph mt-4 max-w-3xl mx-auto">
                            Our proven 6-step process ensures your website launches on time, on budget, and exceeds expectations
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {developmentProcess.map(({ Icon, title, desc }) => (
                            <article
                                key={title}
                                className="rounded-2xl bg-accent p-6 text-center shadow-sm ring-1 ring-[var(--color-paragraph)]/15 hover:shadow-md transition"
                            >
                                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-[var(--color-secondary)] text-white" aria-hidden="true">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-base font-semibold text-[var(--color-heading)] mb-3">{title}</h3>
                                <p className="mx-auto max-w-[40ch] text-sm leading-6 text-[var(--color-paragraph)]/80">
                                    {desc}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 bg-gradient-to-b from-unique to-accent" aria-labelledby="why-choose-heading">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 sm:px-8 items-center">
                    <div>
                        <img 
                            src="/images/Website-developement/website-developement-section4.png" 
                            alt="Professional website development team creating high-performance websites" 
                            className="rounded-2xl w-full h-auto"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 id="why-choose-heading" className="text-3xl sm:text-4xl font-semibold text-heading mb-4">
                            Building Websites That Drive Growth
                        </h2>
                        <p className="text-paragraph text-base leading-relaxed">
                            At Razor Infotech, our expert developers and designers craft unique websites that reflect your brand identity. We combine stunning creativity with powerful functionality to deliver fast, secure, and user-friendly experiences that convert visitors into customers and drive measurable business results.
                        </p>
                        <ul className="mt-6 space-y-4">
                            {keyBenefits.map((benefit, index) => (
                                <li key={index} className="flex gap-4 items-start text-base sm:text-lg">
                                    <FaDotCircle className="text-secondary flex-shrink-0 mt-1.5" aria-hidden="true" />
                                    <span className="text-heading">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
                <Faq faqs={faqs} />
            </Suspense>
        </>
    );
}

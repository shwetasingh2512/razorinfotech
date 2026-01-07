import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function FinancialServices() {
    const services = [
        {
            title: "Accounting and Bookkeeping",
            desc: "Keep accurate, well-organized financial records that are suited to the expansion of a startup. We provide timely, organized accounting so you can always see your finances in a clear and trustworthy manner.",
            image: "/images/financial-services/Book-keeping.png",
        },
        {
            title: "Cash Flow Management",
            desc: "We assist in managing your finances, projecting what's to come, ensuring that your funds are adequate to run your business, pay your bills, and take advantage of opportunities.",
        },
        {
            title: "Tax Filing & Compliance",
            desc: "Simplify tax planning, preparation, and filing. We take care of the regulations on your behalf, ensuring that you avoid penalties, save cash, and remain tax-compliant so that you can concentrate on your business.`",
        },
        {
            title: "Budgeting & Forecasting",
            desc: "Plan your spending and predict your finances with real numbers. We'll help you build useful budgets and forecasts, so you can use your money well, grow your business confidently, and handle unexpected turns smoothly.",
            image: "/images/financial-services/Budgeting.png",
        },
    ];

    const whyChooseUs = [
        {
            title: "Smart Creativity",
            description: "We create a smart strategy with a creative approach to design visuals that look stunning and achieve results."
        },
        {
            title: "Quick Response",
            description: "Results are delivered quickly, so your projects stay on schedule without compromising. "
        },
        {
            title: "Flexible Pricing",
            description: "Budget-friendly and transparent pricing options for a hassle-free experience. "
        },
        {
            title: "Diverse Experience",
            description: "We’ve designed for wide sectors from startups to global brands based on their needs."
        },
    ];

    const faqs = [
        {
            question: "What are the financial services?",
            answer: "Basically, it is an economical service for managing money, managing a broad range of businesses like banks, insurance, firms, and investment funds to help individuals and companies with banking, lending, and investing. "
        },
        {
            question: "What are the basic financial services?",
            answer: "The basic financial services are accountancy, investment banking, investment management, and personal asset management."
        },
        {
            question: "Are you a fiduciary?",
            answer: "Yes, we are legally and ethically required to act always for your best interest. However, we do not earn commissions or sell products. "
        },
        {
            question: "What information do I need for the first meeting?",
            answer: "In your first meeting, just bring your questions and a general idea of your finances."
        },
    ];

    return (
        <>
            <title>Financial Services for Startups - Bookkeeping, Tax & CFO Services | Razor Infotech</title>
            <meta name="description" content="Comprehensive financial services for startups and SMBs. Expert bookkeeping, tax compliance, cash flow management, budgeting, and CFO services. Save 50-70% vs in-house staff." />
            <meta name="keywords" content="financial services for startups, startup accounting services, bookkeeping services, tax compliance, cash flow management, CFO services, payroll management, financial planning, startup finance outsourcing" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Financial Services for Startups - Expert Accounting & CFO Solutions" />
            <meta property="og:description" content="Professional financial management for growing businesses. Bookkeeping, tax filing, cash flow optimization, and strategic financial planning. Affordable, scalable, and expert-led." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/financial-services" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/financial-services/financial-services-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Financial Services for Startups by Razor Infotech" />
            <meta name="twitter:description" content="Comprehensive accounting, tax, and CFO services for startups. Save 50-70% while getting expert financial management." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/financial-services/financial-services-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/financial-services" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FinancialService",
                    "serviceType": "Financial Services for Startups",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Comprehensive financial services for startups and SMBs including bookkeeping, accounting, tax compliance, cash flow management, budgeting, financial forecasting, payroll, and CFO services with certified financial experts.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Financial Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Bookkeeping & Accounting"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Tax Filing & Compliance"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Cash Flow Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Budgeting & Financial Forecasting"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Payroll Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "CFO Services"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="bg-accent px-6 py-12" aria-labelledby="hero-heading">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div>
                        <img
                            src="/images/financial-services/financial-services-hero.png"
                            alt="Professional financial services team managing startup accounting and bookkeeping"
                            className="h-auto md:w-4/5 rounded-2xl object-cover"
                            loading="eager"
                            width="800"
                            height="600"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h1 id="hero-heading" className="text-2xl font-semibold text-heading md:text-4xl">
                            A Complete Financial Solution for Startups & MNCs
                        </h1>
                        <p className="text-paragraph/80 text-base lg:max-w-[85%]">
                           Razor Infotech manages finances more easily for startups and multinational companies by delivering affordable, simplified, and transparent solutions. We provide a top-level of service, including bookkeeping and tax compliance, to budgeting and financial planning that ensures cash flow, smarter decisions, and the confidence to save your business with sustainability. 
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary pl-4 pr-2 lg:py-2 py-1 text-white hover:opacity-90 transition-opacity"
                            aria-label="Get financial services consultation"
                        >
                            <span>Book your demo</span>
                            <span className="rounded-full bg-white/20 p-2" aria-hidden="true">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 bg-background" aria-labelledby="services-heading">
                <div className="mx-auto max-w-6xl">
                    <p className="text-center text-sm border border-light-green rounded-full px-4 py-1 w-fit mx-auto text-light-green mb-6 font-medium">
                        Our Services
                    </p>
                    <h2 id="services-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                       Our Financial Services For Startup
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
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

            <section className="bg-accent p-10" aria-labelledby="why-choose-heading">
                <div className="max-w-6xl mx-auto">
                    <header>
                        <h2 id="why-choose-heading" className="text-3xl text-heading text-center font-semibold">
                            Why Choose Razor Infotech ?
                        </h2>
                        <p className="text-center text-paragraph mt-5 max-w-3xl mx-auto">
                          We deliver innovation, high-quality solutions that drive business success.
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

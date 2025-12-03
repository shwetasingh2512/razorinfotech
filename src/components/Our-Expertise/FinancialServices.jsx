import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function FinancialServices() {
    const services = [
        {
            title: "Bookkeeping & Accounting",
            desc: "Maintain accurate financial records with error-free bookkeeping and structured accounting. Track every transaction for complete clarity and control over your business finances.",
            image: "/images/financial-services/Book-keeping.png",
        },
        {
            title: "Cash Flow Management",
            desc: "Monitor income and expenses with smart cash flow tracking. Prevent shortages, optimize working capital, and ensure your business has the liquidity to operate and grow.",
        },
        {
            title: "Tax Filing & Compliance",
            desc: "Simplify tax planning and filing while ensuring compliance with all regulations. Avoid penalties, reduce liabilities, and maximize deductions with expert guidance.",
        },
        {
            title: "Budgeting & Forecasting",
            desc: "Plan confidently with realistic budgets and financial forecasts. Allocate resources wisely, prepare for investments, and navigate growth opportunities and challenges strategically.",
            image: "/images/financial-services/Budgeting.png",
        },
        {
            title: "Financial Reporting & Analysis",
            desc: "Gain actionable insights with comprehensive financial reports and analytics. Understand profitability, identify trends, and make data-driven decisions to improve performance.",
        },
        {
            title: "Payroll Management",
            desc: "Streamline payroll processing with accurate, timely payments and tax compliance. Handle deductions, benefits, and reporting while ensuring employee satisfaction.",
        },
    ];

    const whyChooseUs = [
        {
            title: "Certified Financial Experts",
            description: "CPAs and financial analysts with expertise in startup accounting, tax planning, and financial strategy across industries."
        },
        {
            title: "Cost-Effective Solutions",
            description: "Reduce overhead by 50-70% compared to hiring full-time financial staff while accessing expert-level financial management."
        },
        {
            title: "Scalable Services",
            description: "Flexible solutions that grow with your business—from basic bookkeeping for startups to comprehensive CFO services for scaling companies."
        },
        {
            title: "Compliance & Security",
            description: "Bank-level security protocols, encrypted data handling, and strict compliance with tax regulations and financial standards."
        },
    ];

    const faqs = [
        {
            question: "What financial services does Razor Infotech provide for startups?",
            answer: "We provide comprehensive financial services including bookkeeping and accounting, cash flow management, tax filing and compliance, budgeting and forecasting, financial reporting and analysis, payroll processing, accounts payable/receivable management, and fractional CFO services for strategic financial planning."
        },
        {
            question: "How much do your financial services cost?",
            answer: "Our pricing is customized based on your business size, transaction volume, and service needs. Typical packages range from $500-1,500/month for basic bookkeeping to $2,000-5,000/month for comprehensive financial management. This represents 50-70% savings compared to hiring full-time financial staff."
        },
        {
            question: "What accounting software do you work with?",
            answer: "We work with all major accounting platforms including QuickBooks Online, Xero, FreshBooks, Wave, Zoho Books, NetSuite, and Sage. We can also help you choose and set up the right software for your business needs and integrate it with your existing systems."
        },
        {
            question: "How do you ensure accuracy and compliance?",
            answer: "We maintain accuracy through certified accountants, double-entry bookkeeping, monthly reconciliations, automated error detection, and multi-level review processes. Compliance is ensured through continuous monitoring of tax regulations, timely filings, proper documentation, and adherence to GAAP/IFRS standards."
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
                            Comprehensive Financial Solutions for Growing Businesses
                        </h1>
                        <p className="text-paragraph/80 text-base lg:max-w-[85%]">
                            At Razor Infotech, we make managing finances easier for startups and SMBs with simplified, affordable, and transparent solutions. From bookkeeping and tax compliance to budgeting and strategic financial planning, we provide end-to-end support that ensures healthy cash flow, informed decisions, and the confidence to scale sustainably.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary pl-4 pr-2 lg:py-2 py-1 text-white hover:opacity-90 transition-opacity"
                            aria-label="Get financial services consultation"
                        >
                            <span>Streamline My Finances Now</span>
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
                        Financial Services for Startups & SMBs
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-8">
                        Complete financial management solutions to support your business growth
                    </p>

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
                            Why Choose Razor Infotech for Financial Services?
                        </h2>
                        <p className="text-center text-paragraph mt-5 max-w-3xl mx-auto">
                            Expert financial management that saves costs while providing enterprise-level service and strategic insights
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

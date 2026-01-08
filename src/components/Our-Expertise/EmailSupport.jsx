import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import BackgroundImagesection from "../../reusable/BackgroundImagesection";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function EmailSupport() {
    const processSteps = [
        {
            n: 1,
            title: "Ticket Receipt & Categorization",
            desc: "Customer emails are received through dedicated support addresses, automatically categorized by urgency and topic, and assigned to specialized agents.",
        },
        {
            n: 2,
            title: "Issue Analysis & Research",
            desc: "Support specialists thoroughly examine the inquiry, review account history, and research solutions using knowledge bases and internal documentation.",
        },
        {
            n: 3,
            title: "Solution Development & Response",
            desc: "Agents craft clear, comprehensive responses with step-by-step solutions, relevant resources, and personalized recommendations based on complexity.",
        },
        {
            n: 4,
            title: "Escalation Management",
            desc: "Complex or technical issues are escalated to specialized teams or senior support levels with complete context transfer for seamless resolution.",
        },
        {
            n: 5,
            title: "Follow-Up & Verification",
            desc: "After resolution, our team proactively follows up to confirm issue resolution, gather feedback, and ensure complete customer satisfaction.",
        },
        {
            n: 6,
            title: "Documentation & Analytics",
            desc: "All interactions are logged in CRM systems for tracking, quality assurance, knowledge base updates, and continuous improvement analysis.",
        },
    ];

    function StepCard({ n, title, desc }) {
        return (
            <article className="rounded-2xl bg-[var(--color-background)] p-8 ring-1 ring-[var(--color-paragraph)]/10 hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-center mb-3">
                    <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-[var(--color-secondary)] text-[var(--color-accent)] text-sm font-semibold" aria-label={`Step ${n}`}>
                        {n}
                    </span>
                    <h3 className="text-[var(--color-heading)] font-semibold text-base">{title}</h3>
                </div>
                <p className="text-[var(--color-paragraph)]/80 text-sm leading-6">{desc}</p>
            </article>
        );
    }

    const benefits = [
        {
            title: "99.5% Accuracy & Reliability",
            desc: "Our team provides stable, dependable email support with rigorous quality checks. We protect data privacy with enterprise-grade security, analyze attachments for context, and deliver thorough, accurate solutions to every customer inquiry.",
        },
        {
            title: "Universal Accessibility",
            desc: "Email support is accessible to everyone across all devices and platforms—smartphones, tablets, desktops. Customers can reach out anytime, from anywhere, without technical barriers or platform restrictions, ensuring inclusive support.",
        },
        {
            title: "Complete Audit Trail",
            desc: "Every customer interaction is tracked and documented, creating searchable records for issue resolution, quality assurance, and trend analysis. Historical context enables faster problem-solving and knowledge base enrichment.",
        },
        {
            title: "Customer Empowerment",
            desc: "Customers control when they reach out—no phone queues or hold times. They can respond at their convenience while handling other tasks, creating a stress-free, flexible support experience that respects their time.",
        },
        {
            title: "Scalable & Cost-Effective",
            desc: "Our agents efficiently handle multiple inquiries simultaneously, maintaining quality across high volumes. Email support integrates seamlessly with chat, phone, and social channels for omnichannel service at lower cost than voice-only support.",
        },
    ];

    const faqs = [
        {
            question: "What are email support services?",
            answer: "Email support services are a communication service method used by companies to communicate with customers through emails to resolve inquiries, deal with complaints, and address technical issues for acknowledgement and convenience.",
        },
        {
            question: "What are the key benefits of email support services?",
            answer: "Email support services are beneficial for companies and organizations as they reduce costs, offer easy scaling during peak times, and minimize waiting times.",
        },
        {
            question: "What if the agent can’t help?",
            answer: "In case the agents are unable to provide solutions, emails can be forwarded to a specialist, or the conversation can be transferred via call or live chat.",
        },
        {
            question: "What is the 3 email rule?",
            answer: "If the query is not resolved within three emails, individuals can directly communicate via phone call, live chat, or through the help desk center. ",
        },
    ];

    const keyBenefits = [
        "Scalable for Growing Businesses",
        "Complete Record Keeping & Documentation",
        "Cost-Effective Support Solution",
        "Enables Detailed, Thorough Communication",
        "Builds Professionalism and Customer Trust",
    ];

    const firstsection = {
        title: "Professional Email Support Services",
        description: "Deliver exceptional customer experiences through professional email support. Our trained specialists provide timely, accurate, and personalized assistance—handling inquiries, resolving issues, and building lasting customer relationships through efficient email communication.",
        image: "/images/Email-support/Email-support-background.png"
    };

    return (
        <>
            <title>Email Support Services - 24/7 Customer Email Support Outsourcing | Razor Infotech</title>
            <meta name="description" content="Professional email support services with 4-8 hour response times. Handle customer inquiries, technical issues, and support tickets efficiently. Scale your email support while reducing costs 40-50%." />
            <meta name="keywords" content="email support services, customer email support, email support outsourcing, help desk email support, technical email support, customer service email, email ticket management, 24/7 email support, email response services" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Email Support Services - Professional Customer Support via Email" />
            <meta property="og:description" content="Outsource email support to trained specialists. Fast response times, complete documentation, and scalable solutions for businesses of all sizes." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/email-support" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/Email-support/Email-support-background.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Email Support Services by Razor Infotech" />
            <meta name="twitter:description" content="Professional email support with fast response times. Reduce costs while improving customer satisfaction with expert email support outsourcing." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/Email-support/Email-support-background.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/email-support" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Email Support Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional email support outsourcing services providing timely responses to customer inquiries, technical support, billing questions, and general assistance with complete documentation and quality assurance.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Email Support Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Customer Email Support"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Technical Email Support"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Email Ticket Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "24/7 Email Support Coverage"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <BackgroundImagesection items={firstsection} />

            <section className="p-10 bg-accent" aria-labelledby="overview-heading">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:p-20 mx-auto max-w-7xl">
                    <div>
                        <img
                            src="/images/Email-support/Difference.png"
                            alt="Professional email support team responding to customer inquiries"
                            className="w-full rounded-2xl object-cover"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 id="overview-heading" className="text-heading mb-4 text-2xl md:text-4xl font-semibold">
                            Email Support That Makes A Difference
                        </h2>
                        <p className="text-paragraph mb-6 text-base lg:text-lg">
                            With professional email support, customers send inquiries on their schedule and receive timely, comprehensive responses—no frustrating hold times or rushed phone calls. Complete email records enable accurate tracking, detailed documentation, and reference to previous interactions for consistent, high-quality support experiences.
                        </p>
                        <Link
                            to="/contact"
                            className="flex items-center gap-2 pl-6 py-3 rounded-full bg-secondary text-white font-medium w-fit hover:opacity-90 transition"
                            aria-label="Contact our email support specialists"
                        >
                            Talk to Our Support Specialists
                            <div className="bg-white/20 rounded-full p-3 mr-2" aria-hidden="true">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--color-background)] px-6 py-16" aria-labelledby="benefits-heading">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div>
                        <h2 id="benefits-heading" className="text-3xl font-semibold leading-tight text-[var(--color-heading)] md:text-4xl">
                            Key Benefits of Email Support Services
                        </h2>

                        <ul className="mt-8 space-y-4" role="list">
                            {keyBenefits.map((p, index) => (
                                <li key={index} className="flex items-center gap-3 text-[var(--color-heading)]">
                                    <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]" aria-hidden="true">
                                        <FaDotCircle className="h-4 w-4 text-secondary" />
                                    </span>
                                    <span className="text-base lg:text-lg">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="overflow-hidden rounded-[20px]">
                        <img
                            src="/images/Email-support/Frame 2085666931.png"
                            alt="Email support specialist providing customer assistance"
                            className="h-auto w-full object-cover"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14" aria-labelledby="detailed-benefits-heading">
                <div className="mx-auto max-w-5xl">
                    <h2 id="detailed-benefits-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Why Choose Our Email Support Services
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-10">
                        Professional email management that enhances customer satisfaction and operational efficiency
                    </p>

                    <div className="mt-10 space-y-10">
                        {benefits.map((it, idx) => (
                            <article key={idx} className="space-y-3">
                                <span className="text-[var(--color-secondary)] font-medium text-xl" aria-label={`Benefit ${idx + 1}`}>
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                                    {it.title}
                                </h3>
                                <p className="max-w-[85ch] text-[var(--color-paragraph)]/80">
                                    {it.desc}
                                </p>
                                <hr className="mt-4 border-[var(--color-paragraph)]/20" aria-hidden="true" />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-14 bg-background" aria-labelledby="process-heading">
                <div className="mx-auto max-w-6xl">
                    <h2 id="process-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Our Email Support Process
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-10">
                        A systematic 6-step workflow ensuring accurate, timely, and professional email support
                    </p>

                    <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 list-none">
                        {processSteps.map((s) => (
                            <StepCard key={s.n} {...s} />
                        ))}
                    </ol>
                </div>
            </section>

            <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
                <Faq faqs={faqs} />
            </Suspense>
        </>
    );
}

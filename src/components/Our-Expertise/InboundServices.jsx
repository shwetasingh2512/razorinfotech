import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Headset, LifeBuoy, Phone, Clock } from "lucide-react";
import BackgroundImagesection from "../../reusable/BackgroundImagesection";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function InboundServices() {
    const inboundServices = [
        {
            title: "Customer Service & Support",
            desc: "Professional handling of customer inquiries, product information requests, order status updates, account management, complaint resolution, and general assistance to ensure positive customer experiences.",
            image: "/images/Inbound-services/Customer.png",
        },
        {
            title: "Technical Support",
            desc: "Specialized technical assistance for software troubleshooting, product setup, system diagnostics, bug reporting, and complex issue resolution with trained IT support professionals.",
        },
        {
            title: "Helpdesk Services",
            desc: "Comprehensive first-level support covering IT helpdesk, product information, warranty inquiries, billing questions, and general customer service across multiple channels.",
        },
        {
            title: "Appointment Scheduling",
            desc: "Professional calendar management including appointment booking, confirmation calls, rescheduling, reminder services, and cancellation handling to optimize your business operations.",
            image: "/images/Inbound-services/Scheduling.png",
        },
        {
            title: "Order Processing",
            desc: "Efficient order taking, payment processing, order confirmation, tracking updates, and modification handling to streamline your sales operations and improve customer satisfaction.",
        },
        {
            title: "Emergency Hotlines",
            desc: "24/7 urgent call handling for emergency services, roadside assistance, healthcare hotlines, and crisis management with immediate response protocols and escalation procedures.",
        },
    ];

    const industries = [
        {
            title: "E-commerce & Retail",
            desc: "Handle product inquiries, order processing, returns and refunds, shipping questions, payment issues, and customer complaints to maintain high satisfaction and repeat purchases.",
        },
        {
            title: "Telecommunications",
            desc: "Manage service activations, billing inquiries, technical troubleshooting, plan upgrades, network issues, and account management for telecom providers and ISPs.",
        },
        {
            title: "Healthcare Organizations",
            desc: "Provide appointment scheduling, patient inquiries, insurance verification, prescription refills, billing questions, and HIPAA-compliant support for hospitals, clinics, and medical practices.",
        },
        {
            title: "Travel & Hospitality",
            desc: "Handle reservations, booking modifications, cancellations, travel inquiries, loyalty programs, and customer service for hotels, airlines, travel agencies, and tourism businesses.",
        },
        {
            title: "Financial Services",
            desc: "Manage account inquiries, transaction support, fraud alerts, loan applications, credit card services, and secure customer authentication for banks and financial institutions.",
        },
        {
            title: "Technology & SaaS",
            desc: "Provide product onboarding, subscription management, technical support, feature inquiries, and upgrade assistance for software companies and tech startups.",
        },
    ];

    const comparisonRows = [
        {
            aspect: "Main Function",
            inbound: "Receiving and handling incoming calls from customers",
            outbound: "Making proactive outgoing calls to prospects/customers",
        },
        {
            aspect: "Call Initiation",
            inbound: "Customer-initiated contact",
            outbound: "Business/agent-initiated contact",
        },
        {
            aspect: "Primary Purpose",
            inbound: "Resolve issues, provide support, answer questions, process orders",
            outbound: "Generate leads, conduct sales, surveys, follow-ups, appointments",
        },
        {
            aspect: "Call Nature",
            inbound: "Reactive - responding to customer needs",
            outbound: "Proactive - driving business objectives",
        },
        {
            aspect: "Key Technologies",
            inbound: "IVR, ACD, CRM, ticketing systems, knowledge bases",
            outbound: "Predictive dialers, CRM, sales automation, compliance tools",
        },
        {
            aspect: "Success Metrics",
            inbound: "First call resolution, average handle time, customer satisfaction",
            outbound: "Conversion rate, contact rate, revenue generated, appointments set",
        },
    ];

    const benefits = [
        {
            icon: <Headset className="w-6 h-6 text-white" />,
            title: "24/7 Availability",
            description: "Round-the-clock inbound support ensures customers can reach you anytime, improving satisfaction and capturing opportunities across time zones.",
        },
        {
            icon: <LifeBuoy className="w-6 h-6 text-white" />,
            title: "Trained Professionals",
            description: "Experienced agents with industry-specific training handle calls professionally, ensuring consistent quality and positive brand representation.",
        },
        {
            icon: <Phone className="w-6 h-6 text-white" />,
            title: "Scalable Capacity",
            description: "Easily scale call handling capacity during peak seasons, product launches, or campaigns without infrastructure investment or hiring delays.",
        },
        {
            icon: <Clock className="w-6 h-6 text-white" />,
            title: "Reduced Response Time",
            description: "Advanced routing, IVR systems, and optimized workflows ensure customers reach the right agent quickly, improving first-call resolution by 35%.",
        },
    ];

    const faqs = [
        {
            question: "What are Inbound Services?",
            answer: "Inbound services are the practice by customers who initiate contact with a business for support, information, or to resolve issues through phone, email, chat, or social media to help potential clients with orders, complaints, or technical issues. "
        },
        {
            question: "What are the factors to consider while selecting a reliable inbound service provider?",
            answer: "While selecting a reliable inbound service provider, always consider its expertise and prior experience in your industry. Other factors that affect are reputation, technology, security, capabilities, and pricing plans."
        },
        {
            question: "What are the benefits of inbound call center services?",
            answer: "The benefits of an inbound call center are: \nIt improves customer servic \nHelps in boosting customer loyalty \nOffers 24/7 support to customers for various time zones."
        },
        {
            question: "What kinds of businesses are supported by Razor Infotech for inbound call services?",
            answer: "Razor Infotech serves diverse businesses such as e-commerce companies, telecom businesses, healthcare organizations, and hospitality services. "
        },
    ];

    const firstsection = {
        title: "Professional Inbound Call Center Services",
        description: "Deliver exceptional customer experiences with expert inbound support. From inquiries and technical issues to order processing and appointments, we provide fast, reliable service that keeps customers engaged and builds lasting loyalty.",
        image: "/images/Inbound-services/Inbound-background-hero.png"
    };

    return (
        <>
            <title>Inbound Call Center Services - 24/7 Customer Support & Tech Support | Razor Infotech</title>
            <meta name="description" content="Professional inbound call center services with 24/7 availability. Handle customer inquiries, technical support, order processing, and appointments. Improve first-call resolution by 35%." />
            <meta name="keywords" content="inbound call center services, inbound customer service, inbound support, technical support call center, customer service outsourcing, helpdesk services, 24/7 call center, appointment scheduling services" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Inbound Call Center Services - Expert Customer Support 24/7" />
            <meta property="og:description" content="Professional inbound support for customer service, technical help, order processing, and more. Scale easily with trained agents and advanced technology." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/inbound-services" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/Inbound-services/Inbound-background-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Inbound Call Center Services by Razor Infotech" />
            <meta name="twitter:description" content="24/7 inbound support with trained professionals. Improve customer satisfaction and first-call resolution." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/Inbound-services/Inbound-background-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/inbound-services" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Inbound Call Center Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional inbound call center services including customer service, technical support, helpdesk, appointment scheduling, order processing, and emergency hotlines with 24/7 availability and trained professionals.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Inbound Call Center Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Customer Service & Support"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Technical Support"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Helpdesk Services"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Appointment Scheduling"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Order Processing"
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
                            src="/images/Inbound-services/Experience.png"
                            alt="Customer service representative providing inbound support"
                            className="w-full rounded-2xl object-cover"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 id="overview-heading" className="text-heading mb-4 text-2xl lg:text-4xl font-semibold">
                            Increase Customer Retention with Exceptional Service
                        </h2>
                        <p className="text-paragraph text-base lg:text-lg mb-6">
                            Professional inbound services ensure every customer inquiry, issue, or request is handled promptly and expertly. Our trained agents provide consistent, high-quality support that resolves problems on the first call, builds trust, and turns customers into loyal advocates for your brand.
                        </p>
                        <Link
                            to="/contact"
                            className="flex items-center gap-2 pl-6 lg:py-3 py-2 rounded-full bg-secondary text-white font-medium w-fit hover:opacity-90 transition"
                            aria-label="Get inbound services consultation"
                        >
                            Improve Customer Experience
                            <div className="bg-white/20 rounded-full p-3 mr-2" aria-hidden="true">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 bg-background" aria-labelledby="services-heading">
                <div className="mx-auto max-w-7xl">
                    <h2 id="services-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Comprehensive Inbound Call Center Services
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-8">
                        End-to-end inbound support solutions for every customer interaction
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {inboundServices.map((c, i) => (
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
                                            <p className="text-sm leading-6 text-white/90">
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

            <section className="bg-accent px-6 py-14" aria-labelledby="industries-heading">
                <div className="mx-auto max-w-6xl">
                    <h2 id="industries-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Industries We Serve
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-10">
                        Specialized inbound support tailored to your industry requirements
                    </p>

                    <div className="mt-10 space-y-10">
                        {industries.map((it, idx) => (
                            <article key={idx} className="space-y-3">
                                <span className="text-[var(--color-secondary)] font-medium text-xl" aria-label={`Industry ${idx + 1}`}>
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

            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14" aria-labelledby="comparison-heading">
                <div className="mx-auto max-w-6xl">
                    <h2 id="comparison-heading" className="text-center text-3xl font-semibold text-[var(--color-heading)] md:text-4xl mb-10">
                        Inbound vs Outbound Services
                    </h2>

                    <div className="mt-10 overflow-hidden rounded-lg ring-1 ring-[var(--color-paragraph)]/15 bg-background">
                        <table className="hidden w-full table-fixed md:table">
                            <thead className="bg-[var(--color-background)]/70">
                                <tr>
                                    <th className="w-1/3 px-6 py-5 text-left font-semibold text-[var(--color-heading)]">
                                        Aspects
                                    </th>
                                    <th className="w-1/3 px-6 py-5 text-left font-semibold text-[var(--color-heading)]">
                                        Inbound Services
                                    </th>
                                    <th className="w-1/3 px-6 py-5 text-left font-semibold text-[var(--color-heading)]">
                                        Outbound Services
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((r, i) => (
                                    <tr key={i}>
                                        <td className="border-t border-[var(--color-paragraph)]/15 px-6 py-6 align-top font-semibold text-[var(--color-heading)]">
                                            {r.aspect}
                                        </td>
                                        <td className="border-t border-[var(--color-paragraph)]/15 px-6 py-6 align-top text-[var(--color-paragraph)]/80">
                                            {r.inbound}
                                        </td>
                                        <td className="border-t border-[var(--color-paragraph)]/15 px-6 py-6 align-top text-[var(--color-paragraph)]/80">
                                            {r.outbound}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="grid gap-6 p-6 md:hidden">
                            {comparisonRows.map((r, i) => (
                                <div
                                    key={i}
                                    className="rounded-lg bg-background p-5 ring-1 ring-[var(--color-paragraph)]/15"
                                >
                                    <h3 className="text-sm font-semibold text-[var(--color-heading)] mb-3">
                                        {r.aspect}
                                    </h3>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div>
                                            <div className="text-xs font-semibold text-[var(--color-heading)]/80 mb-1">
                                                Inbound Services
                                            </div>
                                            <p className="text-sm text-[var(--color-paragraph)]/80">{r.inbound}</p>
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-[var(--color-heading)]/80 mb-1">
                                                Outbound Services
                                            </div>
                                            <p className="text-sm text-[var(--color-paragraph)]/80">{r.outbound}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-background" aria-labelledby="benefits-heading">
                <h2 id="benefits-heading" className="text-3xl md:text-4xl font-semibold text-center text-heading mb-3">
                    Benefits of Professional Inbound Services
                </h2>
                <p className="text-base text-center mb-10 mx-auto max-w-3xl text-paragraph">
                    Strategic advantages that improve customer satisfaction while reducing operational costs
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {benefits.map((service, index) => (
                        <article
                            key={index}
                            className="flex flex-col md:flex-row items-start gap-4 p-8 bg-accent rounded-2xl shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg flex-shrink-0" aria-hidden="true">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-heading mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-paragraph text-sm leading-relaxed">{service.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
                <Faq faqs={faqs} />
            </Suspense>
        </>
    );
}

import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Medal, GraduationCap, Users } from "lucide-react";
import { Inbox, Send, Mail, Link2 } from "lucide-react";
import WhychooseSection from "../../reusable/WhychooseSection";

const Faq = lazy(() => import("../../reusable/Faq"));

function CustomerSupport() {
    const stats = [
        {
            icon: <Medal className="w-6 h-6 text-white" />,
            value: "7+ Years",
            label: "Customer Support Experience"
        },
        {
            icon: <Users className="w-6 h-6 text-white" />,
            value: "400+",
            label: "Trained Support Agents"
        },
        {
            icon: <GraduationCap className="w-6 h-6 text-white" />,
            value: "95%+",
            label: "Customer Satisfaction Rate"
        }
    ];

    const services = [
        {
            icon: <Inbox className="w-6 h-6 text-white" />,
            title: "Inbound Support Services",
            description: "Handle customer inquiries, technical support, order processing, and issue resolution through phone, chat, and email channels with quick response times.",
            link: "/services/inbound-support"
        },
        {
            icon: <Send className="w-6 h-6 text-white" />,
            title: "Outbound Support Services",
            description: "Proactive customer outreach for surveys, follow-ups, appointment scheduling, lead qualification, and customer feedback collection.",
            link: "/services/outbound-support"
        },
        {
            icon: <Link2 className="w-6 h-6 text-white" />,
            title: "Omnichannel Support",
            description: "Seamless, consistent customer experience across phone, email, chat, social media, and self-service portals with unified customer data.",
            link: "/services/omnichannel-support"
        },
        {
            icon: <Mail className="w-6 h-6 text-white" />,
            title: "Email Support Services",
            description: "Professional email response management with detailed solutions, documentation, and follow-ups to customer inquiries and technical issues.",
            link: "/services/email-support"
        }
    ];

    const advantages = [
        {
            title: "Reduce Operating Costs",
            desc: "Outsourcing customer support reduces overhead by 40-60% compared to in-house teams—eliminating costs for hiring, training, infrastructure, and management while maintaining service quality.",
        },
        {
            title: "Access Specialized Expertise",
            desc: "Gain immediate access to trained professionals with industry-specific knowledge, multilingual capabilities, and proven customer service methodologies without lengthy recruitment processes.",
        },
        {
            title: "Leverage Modern Technology",
            desc: "Benefit from advanced CRM systems, AI-powered chatbots, analytics dashboards, and omnichannel platforms without significant capital investment in technology infrastructure.",
        },
        {
            title: "Scale with Flexibility",
            desc: "Easily scale support capacity up or down based on seasonal demand, product launches, or business growth without fixed overhead or long-term commitments.",
        },
        {
            title: "Enhance Customer Experience",
            desc: "Provide personalized, empathetic support that builds loyalty and turns customers into brand advocates—with trained agents who understand your products and brand voice.",
        },
        {
            title: "Focus on Core Business",
            desc: "Free internal resources to concentrate on product development, marketing, sales, and strategic initiatives while experts handle customer interactions professionally.",
        },
    ];

    const points = { 
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/Software-developement/y-choose-us.png",
        child: [
            {
                title: "Proven Track Record",
                desc: "Over 7 years of experience delivering consistent, high-quality customer support across multiple industries with measurable satisfaction improvements."
            },
            {
                title: "Trained Professional Team",
                desc: "400+ certified support agents trained in communication, problem-solving, CRM tools, and industry best practices for exceptional service delivery."
            },
            {
                title: "24/7 Availability",
                desc: "Round-the-clock support coverage across time zones ensures your customers receive help whenever they need it—no missed inquiries."
            },
            {
                title: "Customized Solutions",
                desc: "Every business is unique. We tailor our support services to align with your brand voice, operational processes, and specific customer needs."
            },
        ]
    };

    const faqs = [
        {
            question: "What customer support services does Razor Infotech provide?",
            answer: "We provide comprehensive customer support including inbound call handling, outbound customer outreach, email support, live chat, omnichannel support, technical helpdesk, order processing, complaint resolution, and customer feedback management—available 24/7 across multiple channels."
        },
        {
            question: "How quickly can you set up customer support for my business?",
            answer: "Setup time varies by complexity: basic support (1-2 weeks), standard omnichannel support (3-4 weeks), and complex technical support with custom integrations (4-6 weeks). We provide detailed onboarding timelines during consultation."
        },
        {
            question: "What industries do you provide customer support for?",
            answer: "We serve eCommerce, SaaS, healthcare, financial services, telecommunications, travel & hospitality, education, retail, and more. Our agents receive industry-specific training to understand your products, compliance requirements, and customer expectations."
        },
        {
            question: "How do you ensure quality and customer satisfaction?",
            answer: "We maintain quality through rigorous agent training, call monitoring and QA audits, customer satisfaction surveys (CSAT/NPS), performance metrics tracking, regular reporting, and continuous improvement processes based on feedback and analytics."
        },
    ];

    return (
        <>
            <title>Customer Support Services - 24/7 Inbound, Outbound & Omnichannel Support | Razor Infotech</title>
            <meta name="description" content="Professional customer support outsourcing with 24/7 availability. Inbound call handling, outbound services, email support, and omnichannel solutions. Reduce costs by 40-60% while improving customer satisfaction." />
            <meta name="keywords" content="customer support services, customer service outsourcing, 24/7 customer support, inbound call center, outbound support, omnichannel customer service, email support, technical helpdesk, call center services, customer care BPO" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Customer Support Services - 24/7 Professional Support Solutions" />
            <meta property="og:description" content="Outsource customer support to reduce costs and improve satisfaction. 400+ trained agents providing inbound, outbound, and omnichannel support across all industries." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/customer-support" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/customer-support-services/contact-support-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Customer Support Services by Razor Infotech" />
            <meta name="twitter:description" content="24/7 customer support outsourcing with 95%+ satisfaction rate. Reduce costs while enhancing customer experience across all channels." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/customer-support-services/contact-support-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/customer-support" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Customer Support Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional customer support outsourcing services including 24/7 inbound call handling, outbound customer outreach, email support, live chat, omnichannel support, and technical helpdesk with 95%+ customer satisfaction rate.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Customer Support Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Inbound Customer Support"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Outbound Support Services"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Omnichannel Support"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Email Support Services"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="px-6 py-20 bg-background" aria-labelledby="hero-heading">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div>
                        <img
                            src="/images/customer-support-services/contact-support-hero.png"
                            alt="Customer support team providing 24/7 assistance across multiple channels"
                            className="h-auto lg:w-4/5 rounded-2xl object-cover"
                            loading="eager"
                            width="800"
                            height="600"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h1 id="hero-heading" className="text-3xl font-semibold text-heading md:text-5xl lg:leading-tight">
                            24/7 Customer Support That Drives Engagement & Loyalty
                        </h1>
                        <p className="text-paragraph/80 text-base lg:text-lg">
                            Professional customer support outsourcing that enhances satisfaction while reducing costs by up to 60%. Our 400+ trained agents provide seamless support across inbound, outbound, email, and omnichannel platforms—ensuring every customer interaction strengthens your brand.
                        </p>
                        <p className="text-paragraph/80 text-base lg:text-lg">
                            With Razor Infotech, you gain access to specialized expertise, advanced technology, and scalable solutions tailored to your business needs. Quick, accurate, and empathetic responses build trust, resolve issues efficiently, and turn customers into loyal advocates.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-5 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
                            aria-label="Get customer support consultation"
                        >
                            <span>Start Improving Customer Experience</span>
                            <span className="rounded-full bg-white/20 p-3" aria-hidden="true">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-accent px-6 py-20" aria-labelledby="stats-heading">
                <div>
                    <h2 id="stats-heading" className="text-3xl md:text-4xl mx-auto text-heading font-semibold text-center">
                        Proven Experience & Expertise in Customer Support
                    </h2>
                    <p className="text-paragraph text-base text-center mt-5 max-w-[70ch] mx-auto">
                        7+ years delivering exceptional customer support across industries with measurable results and client satisfaction
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mx-auto max-w-7xl mt-8">
                    {stats.map((stat, index) => (
                        <article
                            key={index}
                            className="flex gap-6 items-center justify-center rounded-2xl bg-green-50 py-8 px-4 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary flex-shrink-0" aria-hidden="true">
                                {stat.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="px-6 py-14 bg-background" aria-labelledby="overview-heading">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl">
                        <img
                            src="/images/customer-support-services/Services.png"
                            alt="Customer support services across multiple communication channels"
                            className="h-auto w-full object-cover"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                    </div>
                    <div>
                        <span className="inline-flex items-center rounded-full border border-[var(--color-secondary)]/40 bg-[var(--color-accent)] px-4 py-1 text-sm font-medium text-[var(--color-secondary)]">
                            Our Services
                        </span>

                        <h2 id="overview-heading" className="mt-4 text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                            Comprehensive Customer Support Solutions
                        </h2>

                        <p className="mt-4 max-w-[55ch] text-[var(--color-paragraph)]/80 leading-relaxed">
                            We combine personalized service with advanced CRM tools, AI-powered analytics, and omnichannel platforms to deliver seamless support experiences. From resolving complex technical issues to providing product guidance and processing orders, our team ensures every interaction adds value and builds loyalty.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-accent py-16 px-6" aria-labelledby="services-heading">
                <h2 id="services-heading" className="text-3xl font-semibold text-heading text-center mb-10">
                    Our Customer Support Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <article
                            key={index}
                            className="flex flex-col md:flex-row items-start gap-4 p-8 rounded-2xl bg-background shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary flex-shrink-0" aria-hidden="true">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-heading">
                                    {service.title}
                                </h3>
                                <p className="text-paragraph text-sm mt-2 leading-relaxed">{service.description}</p>
                                <Link
                                    to={service.link}
                                    className="text-secondary text-sm font-medium mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all"
                                    aria-label={`Learn more about ${service.title}`}
                                >
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14" aria-labelledby="advantages-heading">
                <div className="mx-auto max-w-5xl">
                    <h2 id="advantages-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Benefits of Outsourcing Customer Support
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-10">
                        Strategic advantages that improve customer experience while reducing operational costs
                    </p>

                    <div className="mt-10 space-y-10">
                        {advantages.map((item, idx) => (
                            <article key={idx} className="space-y-3">
                                <span className="text-[var(--color-secondary)] font-medium text-xl">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                                    {item.title}
                                </h3>
                                <p className="max-w-[85ch] text-[var(--color-paragraph)]/80">
                                    {item.desc}
                                </p>
                                <hr className="mt-4 border-[var(--color-paragraph)]/20" aria-hidden="true" />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <WhychooseSection points={points} />
            
            <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
                <Faq faqs={faqs} />
            </Suspense>
        </>
    );
}

export default CustomerSupport;

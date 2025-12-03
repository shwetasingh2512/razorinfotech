import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function ItHelpDesk() {
    const helpDeskServices = [
        "24/7 Ticketing System Management",
        "IT Asset & Inventory Management",
        "Application & Software Support",
        "Network Connectivity & VPN Support",
        "Password Resets & User Access Control",
        "Virus, Malware & Security Threat Removal",
        "Proactive System Monitoring & Alerts",
        "Hardware & Software Troubleshooting",
    ];

    const industries = [
        {
            id: "01",
            title: "SMBs & Startups",
            desc: "Small and medium-sized businesses lacking full in-house IT teams benefit from affordable, professional outsourced help desk support that scales with growth.",
            img: "/images/It-help-desk/Small-SMEs.png",
        },
        {
            id: "02",
            title: "Healthcare Providers",
            desc: "Hospitals, clinics, and medical practices rely on secure IT help desk services to protect patient data, ensure HIPAA compliance, and maintain critical system uptime.",
            img: "/images/It-help-desk/Healthcare.png",
        },
        {
            id: "03",
            title: "Educational Institutions",
            desc: "Schools, colleges, universities, and online learning platforms require reliable IT support for faculty, students, and administrative systems during peak usage periods.",
            img: "/images/It-help-desk/Educational.png",
        },
        {
            id: "04",
            title: "Finance & Legal Firms",
            desc: "Financial services and law firms demand secure, compliant IT help desk support with strict data protection protocols, regulatory adherence, and audit trail documentation.",
            img: "/images/It-help-desk/Finance.png",
        },
        {
            id: "05",
            title: "E-commerce & Retail",
            desc: "Online retailers need 24/7 IT support to prevent downtime losses. Our help desk keeps POS systems, inventory management, and customer-facing platforms running smoothly.",
            img: "/images/It-help-desk/E-commerce.png",
        },
    ];

    const whyChooseUs = [
        {
            title: "Certified IT Professionals",
            description: "Team of ITIL-certified technicians with expertise in Windows, macOS, Linux, cloud platforms, and enterprise software support."
        },
        {
            title: "24/7 Availability",
            description: "Round-the-clock support coverage ensuring critical issues are resolved immediately, regardless of time zone or business hours."
        },
        {
            title: "Fast Response Times",
            description: "Average response time under 5 minutes with 90% first-call resolution rate, minimizing disruption to your business operations."
        },
        {
            title: "Secure & Compliant",
            description: "Enterprise-grade security protocols, encrypted communications, and compliance with ISO 27001, GDPR, and industry-specific regulations."
        },
    ];

    const faqs = [
        {
            question: "What is IT help desk support and what does it include?",
            answer: "IT help desk support provides frontline technical assistance for employees experiencing technology issues. This includes password resets, software troubleshooting, hardware problems, network connectivity issues, application support, security incident response, system access management, and general IT inquiries. Our support covers desktops, laptops, mobile devices, printers, and enterprise applications through phone, email, chat, and remote desktop assistance."
        },
        {
            question: "What are your IT help desk response and resolution times?",
            answer: "Our standard SLAs include: Priority 1 (Critical) - immediate response within 5 minutes, target resolution 1-2 hours; Priority 2 (High) - response within 15 minutes, resolution within 4 hours; Priority 3 (Medium) - response within 30 minutes, resolution within 8 hours; Priority 4 (Low) - response within 2 hours, resolution within 24 hours. We maintain a 90%+ first-call resolution rate."
        },
        {
            question: "How do you ensure security and data protection?",
            answer: "We implement multi-layered security including encrypted remote access tools, secure ticketing systems with audit trails, role-based access controls, regular security training for technicians, NDA agreements, ISO 27001 compliance, GDPR adherence, and industry-specific compliance (HIPAA for healthcare, PCI DSS for finance). All support sessions are logged and monitored for security and quality assurance."
        },
        {
            question: "Can your help desk integrate with our existing IT systems?",
            answer: "Yes, we integrate with major ticketing systems (ServiceNow, Zendesk, Freshdesk, Jira Service Management), remote support tools (TeamViewer, AnyDesk, ConnectWise), asset management platforms, Active Directory/LDAP, monitoring tools (Nagios, PRTG), and cloud platforms (Microsoft 365, Google Workspace, AWS, Azure). Custom API integrations are available for proprietary systems."
        },
    ];

    return (
        <>
            <title>IT Help Desk Services - 24/7 Technical Support & Troubleshooting | Razor Infotech</title>
            <meta name="description" content="Professional IT help desk outsourcing with 24/7 availability. Fast response times, 90% first-call resolution, certified technicians. Support for hardware, software, network issues, and more." />
            <meta name="keywords" content="IT help desk services, IT support outsourcing, technical support services, help desk outsourcing, 24/7 IT support, remote IT support, ticketing system management, IT troubleshooting, managed IT services" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="IT Help Desk Services - 24/7 Technical Support Outsourcing" />
            <meta property="og:description" content="Professional IT help desk with 5-minute response time and 90% first-call resolution. ITIL-certified technicians providing 24/7 support for all technical issues." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/it-help-desk" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/It-help-desk/It-help-desk-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="IT Help Desk Services by Razor Infotech" />
            <meta name="twitter:description" content="24/7 IT help desk with certified professionals. Fast resolutions, secure support, and seamless system integration." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/It-help-desk/It-help-desk-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/it-help-desk" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "IT Help Desk Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional IT help desk outsourcing services including 24/7 technical support, ticketing system management, hardware and software troubleshooting, network support, security incident response, and proactive system monitoring with ITIL-certified technicians.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "IT Help Desk Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "24/7 Technical Support"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Ticketing System Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Hardware & Software Troubleshooting"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Network & Security Support"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="px-6 py-12 bg-background" aria-labelledby="hero-heading">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 id="hero-heading" className="text-3xl font-semibold text-heading md:text-4xl lg:text-5xl">
                            Fast Tech Issue Resolution & Minimal Downtime
                        </h1>
                        <p className="text-paragraph/80 text-base md:text-lg">
                            Razor Infotech's IT Help Desk provides frontline technical support for all hardware, software, and system issues. Our ITIL-certified team ensures rapid resolution with 90% first-call success rate, minimizing business disruption and keeping your operations running smoothly 24/7.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white hover:opacity-90 transition"
                            aria-label="Get IT help desk consultation"
                        >
                            <span>Talk To An Expert</span>
                            <span className="rounded-full bg-white/20 p-2" aria-hidden="true">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>

                    <div>
                        <img
                            src="/images/It-help-desk/It-help-desk-hero.png"
                            alt="IT help desk technician providing remote technical support"
                            className="h-auto w-full rounded-2xl object-cover"
                            loading="eager"
                            width="800"
                            height="600"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-accent px-6 py-14" aria-labelledby="services-heading">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="/images/It-help-desk/Our-IT-Help.png"
                            alt="Comprehensive IT help desk services and support solutions"
                            className="h-auto w-full object-cover"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                    </div>
                    <div>
                        <h2 id="services-heading" className="text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                            Comprehensive IT Help Desk Services
                        </h2>

                        <ul className="mt-6 space-y-4" role="list">
                            {helpDeskServices.map((s, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 text-[var(--color-heading)]"
                                >
                                    <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]" aria-hidden="true">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </span>
                                    <span className="text-base lg:text-lg">{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-12 md:py-16" aria-labelledby="industries-heading">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <span className="inline-flex items-center rounded-full border border-[var(--color-paragraph)]/20 bg-[var(--color-accent)] px-3 py-1 text-xs font-medium text-[var(--color-paragraph)]/70">
                            Industries We Serve
                        </span>
                        <h2 id="industries-heading" className="text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                            IT Help Desk for Every Industry
                        </h2>
                        <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl">
                            Specialized technical support tailored to your industry's unique requirements
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {industries.map(({ id, title, desc, img }) => (
                            <article
                                key={id}
                                className={`relative isolate h-48 overflow-hidden rounded-2xl sm:h-52 lg:h-56 ${
                                    id === "01" || id === "04" || id === "05" ? "lg:col-span-2" : "lg:col-span-1"
                                }`}
                                style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                                <div
                                    className="absolute right-4 top-3 text-white/95 text-lg font-semibold"
                                    style={{ WebkitTextStroke: "0.7px rgba(255,255,255,0.35)" }}
                                    aria-hidden="true"
                                >
                                    {id}
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-end p-5">
                                    <h3 className="text-base md:text-[17px] font-semibold tracking-[-0.01em] text-white mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-sm leading-6 text-white/90">
                                        {desc}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="md:p-16 bg-gradient-to-b from-unique to-accent" aria-labelledby="why-choose-heading">
                <div className="max-w-6xl mx-auto">
                    <div className="py-8 px-4">
                        <h2 id="why-choose-heading" className="text-2xl md:text-4xl font-semibold text-heading">
                            Why Choose Razor Infotech for IT Help Desk
                        </h2>
                        <p className="text-base text-paragraph mt-5 lg:max-w-[65ch]">
                            Beyond just service delivery, we become your strategic IT support partner. Our approach combines ITIL-certified expertise, advanced technology, and customized strategies designed for your unique infrastructure and business needs.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 md:gap-20 justify-center">
                        <div className="p-4">
                            <img 
                                src="/images/Software-developement/y-choose-us.png" 
                                alt="Why choose Razor Infotech for IT help desk services" 
                                loading="lazy"
                                width="400"
                                height="400"
                            />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                            {whyChooseUs.map((e, i) => (
                                <article key={i}>
                                    <div className="h-12 w-12 flex justify-center items-center bg-background p-2 text-secondary font-bold rounded-br-3xl" aria-label={`Benefit ${i + 1}`}>
                                        {i + 1}
                                    </div>
                                    <h3 className="text-xl font-semibold text-heading mt-4">{e.title}</h3>
                                    <p className="text-sm text-paragraph mt-4 lg:max-w-[42ch] leading-relaxed">{e.description}</p>
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

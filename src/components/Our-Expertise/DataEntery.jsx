import { lazy, Suspense } from "react";
import { Inbox, Send, Mail, Link2 } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import WhychooseSection from "../../reusable/WhychooseSection";
import BackgroundImagesection from "../../reusable/BackgroundImagesection";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function DataEntry() {
    const benefits = [
        "Team of 100+ Skilled Data Professionals",
        "Modern Infrastructure & Technology",
        "Cost-Effective Outsourcing (40-60% Savings)",
        "99.9% Accuracy Rate & Quality Assurance",
    ];

    const processSteps = [
        {
            title: "Data Collection & Organization",
            desc: "Systematic collection from paper documents, digital files, scanned images, and databases. Data is sorted, categorized, reviewed, and verified for completeness and accuracy before processing.",
            image: "/images/data-entry/Data-Collection.png",
        },
        {
            title: "Data Entry & Digitization",
            desc: "Organized data is accurately entered into digital systems through manual typing or automated methods like OCR (Optical Character Recognition) and ICR (Intelligent Character Recognition) for efficient processing.",
        },
        {
            title: "Quality Control & Verification",
            desc: "Multi-level quality checks identify and correct errors, inconsistencies, and duplicates. Cross-verification ensures data integrity and compliance with specifications.",
        },
        {
            title: "Data Formatting & Delivery",
            desc: "Data is formatted according to client guidelines and standardized for seamless integration into databases, spreadsheets, CRMs, or other business systems with secure delivery.",
            image: "/images/data-entry/Data-Formatting.png",
        },
    ];

    const keyAspects = [
        {
            icon: <Inbox className="w-6 h-6 text-white" />,
            title: "99.9% Accuracy",
            description: "Rigorous quality control processes and trained professionals ensure highly accurate data with minimal errors, providing reliable information for business decisions and analytics.",
        },
        {
            icon: <Send className="w-6 h-6 text-white" />,
            title: "Enhanced Productivity",
            description: "Free your internal team from time-consuming data tasks. Focus on core business activities while we handle large-volume data processing efficiently and meet tight deadlines.",
        },
        {
            icon: <Link2 className="w-6 h-6 text-white" />,
            title: "Data Security & Confidentiality",
            description: "Enterprise-grade security protocols, NDA agreements, and compliance with data protection regulations ensure your sensitive business information remains secure and confidential.",
        },
        {
            icon: <Mail className="w-6 h-6 text-white" />,
            title: "Scalable & Cost-Effective",
            description: "Scale data entry capacity based on business needs without infrastructure investment. Save 40-60% compared to in-house operations while maintaining quality standards.",
        }
    ];

    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/data-entry/why-choose.png",
        child: [
            {
                n: "01",
                title: "Industry Experience",
                desc: "Proven expertise handling data entry projects across healthcare, finance, retail, eCommerce, legal, and real estate sectors with industry-specific knowledge."
            },
            {
                n: "02",
                title: "Client-Centric Approach",
                desc: "We work as strategic partners, understanding your unique requirements and delivering customized solutions aligned with business objectives."
            },
            {
                n: "03",
                title: "Scalable Solutions",
                desc: "Flexible engagement models that scale seamlessly—from small projects to enterprise-level data management—adapting to your growth trajectory."
            },
            {
                n: "04",
                title: "Data Security First",
                desc: "ISO-compliant security protocols, encrypted data transfer, secure storage, and strict access controls protect your sensitive information at every stage."
            },
        ]
    };

    const faqs = [
        {
            question: "What types of data entry services does Razor Infotech provide?",
            answer: "We provide comprehensive data entry including online/offline data entry, image to text conversion, data mining and extraction, database management, form processing, catalog data entry, eCommerce product data entry, medical records digitization, legal document processing, and CRM data management."
        },
        {
            question: "How do you ensure data accuracy and quality?",
            answer: "We maintain 99.9% accuracy through multi-level quality checks, double data entry verification, automated error detection tools, trained quality assurance teams, sample audits, and continuous process monitoring with detailed accuracy reports."
        },
        {
            question: "What is the typical turnaround time for data entry projects?",
            answer: "Turnaround times depend on project volume and complexity. Small projects (up to 1000 records) typically complete within 24-48 hours, medium projects (1000-10,000 records) within 3-5 days, and large-scale projects are estimated based on specific requirements with defined milestones."
        },
        {
            question: "How do you protect confidential business data?",
            answer: "We implement enterprise-grade security including NDA agreements, ISO 27001 compliance, encrypted data transfer (SSL/TLS), secure servers with access controls, confidential data destruction protocols, regular security audits, and GDPR/HIPAA compliance for applicable industries."
        },
    ];

    const firstsection = {
        title: "Professional Data Entry Services",
        description: "Transform paper documents, digital files, and unstructured data into organized, accessible digital formats. Our expert data entry services help businesses manage information efficiently with 99.9% accuracy, secure processing, and scalable solutions tailored to your needs.",
        image: "/images/data-entry/data-entry-background-hero.png"
    };

    return (
        <>
            <title>Data Entry Services - Accurate, Secure & Cost-Effective Outsourcing | Razor Infotech</title>
            <meta name="description" content="Professional data entry outsourcing with 99.9% accuracy. Convert documents, digitize records, and manage databases efficiently. Save 40-60% with secure, scalable data entry services across all industries." />
            <meta name="keywords" content="data entry services, data entry outsourcing, document digitization, database management, online data entry, offline data entry, OCR data entry, form processing, data conversion services, data management outsourcing" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Data Entry Services - 99.9% Accuracy & Secure Processing" />
            <meta property="og:description" content="Expert data entry outsourcing for businesses. Fast, accurate, and cost-effective document digitization and database management with enterprise-grade security." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/data-entry" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/data-entry/data-entry-background-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Data Entry Services by Razor Infotech" />
            <meta name="twitter:description" content="Accurate, secure, and scalable data entry outsourcing. Save 40-60% while maintaining 99.9% accuracy with professional data management." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/data-entry/data-entry-background-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/data-entry" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Data Entry Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional data entry outsourcing services including document digitization, database management, OCR data entry, form processing, and data conversion with 99.9% accuracy and enterprise-grade security.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Data Entry Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Online & Offline Data Entry"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Document Digitization & OCR"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Database Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Form & Image Processing"
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
                            src="/images/data-entry/Fast-reliable.png"
                            alt="Professional team providing fast and accurate data entry services"
                            className="lg:w-4/5 rounded-2xl object-cover"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 id="overview-heading" className="text-heading mb-4 text-2xl lg:text-4xl font-semibold">
                            Fast, Reliable & 99.9% Accurate Data Entry
                        </h2>
                        <p className="text-paragraph mb-6 text-base lg:text-lg">
                            Businesses worldwide trust our data entry outsourcing for accuracy, efficiency, and confidentiality. We deliver error-free databases with guaranteed on-time completion. Our 100+ skilled professionals are trained in advanced data processing techniques, quality assurance protocols, and industry-specific requirements to ensure consistently high-quality results.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 bg-gradient-to-b from-unique to-accent" aria-labelledby="process-heading">
                <div className="mx-auto max-w-6xl">
                    <p className="text-xl text-secondary text-center mb-2 font-medium">Our Process</p>
                    <h2 id="process-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        How Our Data Entry Service Works
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-8">
                        A systematic 4-step process ensuring accuracy, security, and efficient data transformation
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {processSteps.map((c, i) => (
                            <article
                                key={i}
                                className={`relative overflow-hidden rounded-2xl ring-1 ring-[var(--color-paragraph)]/10 ${
                                    c.image ? "p-0 min-h-[220px]" : "bg-[var(--color-background)] p-6"
                                }`}
                            >
                                {c.image && (
                                    <>
                                        <img
                                            src={c.image}
                                            alt={`${c.title} step illustration`}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                            width="600"
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

            <section className="bg-background py-16 px-6" aria-labelledby="aspects-heading">
                <h2 id="aspects-heading" className="text-3xl md:text-4xl font-semibold text-center text-heading mb-3">
                    Key Benefits of Our Data Entry Services
                </h2>
                <p className="text-center text-paragraph/80 max-w-3xl mx-auto mb-10">
                    Professional data management that enhances accuracy, productivity, and cost-efficiency
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {keyAspects.map((service, index) => (
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

            <section className="bg-accent px-6 py-16" aria-labelledby="access-heading">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="/images/data-entry/Outsourcing.png"
                            alt="Professional data entry team working with modern technology"
                            className="w-full object-cover"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                    </div>

                    <div>
                        <h2 id="access-heading" className="text-2xl font-semibold leading-snug text-[var(--color-heading)] md:text-3xl">
                            Outsourcing Data Entry Services Provides
                        </h2>

                        <ul className="mt-6 space-y-4" role="list">
                            {benefits.map((t, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3 rounded-lg border border-[var(--color-paragraph)]/20 bg-background px-4 py-4 shadow-sm hover:shadow-md transition"
                                >
                                    <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]" aria-hidden="true">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </span>
                                    <span className="text-[var(--color-heading)] text-sm lg:text-base">{t}</span>
                                </li>
                            ))}
                        </ul>
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

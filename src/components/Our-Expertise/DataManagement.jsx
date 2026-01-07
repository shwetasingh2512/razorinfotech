import { lazy, Suspense } from "react";
import BackgroundImagesection from '../../reusable/BackgroundImagesection';
import Descriptionsection from '../../reusable/Descriptionsection';
import WhychooseSection from '../../reusable/WhychooseSection';

const Faq = lazy(() => import("../../reusable/Faq"));

function DataManagement() {
    const firstsection = {
        title: "Enterprise Data Management Services",
        description: "Transform your data into a strategic asset with professional data management services. We help organizations organize, secure, and extract maximum value from their data through comprehensive governance, integration, and quality management solutions.",
        image: "/images/data-management/data-management-hero.png"
    };

    const secondsection = {
        background: "bg-background",
        title: "Data Expertise You Can Trust",
        description: "With over 7 years of experience, Razor Infotech delivers reliable, scalable data management solutions tailored to your business goals. Our certified experts use proven methodologies and cutting-edge technology to manage the entire data lifecycle—from integration and quality assurance to governance and analytics. We serve startups, SMBs, and enterprises across industries, helping them unlock data-driven insights and achieve sustainable growth.",
        image: "/images/data-management/Data-Expertise.png",
        btn: "Optimize My Data Strategy",
        link: "/contact",
        width: "max-w-7xl"
    };

    const services = [
        {
            title: "Data Integration",
            desc: "Seamlessly consolidate data from disparate sources—databases, APIs, cloud platforms, and legacy systems—into unified, actionable formats for business intelligence.",
            image: "/images/data-management/Data-Integration.jpg",
        },
        {
            title: "Data Quality Management",
            desc: "Implement automated cleaning, standardization, validation, and deduplication processes to ensure accuracy, consistency, and reliability across all data assets.",
        },
        {
            title: "Data Governance & Compliance",
            desc: "Establish policies, frameworks, and controls to maintain data integrity while meeting regulatory standards including GDPR, HIPAA, SOX, and industry-specific requirements.",
        },
        {
            title: "Master Data Management (MDM)",
            desc: "Create a single source of truth for critical business entities—customers, products, suppliers, locations—enabling consistent reporting and decision-making across the organization.",
            image: "/images/data-management/Master.png",
        },
        {
            title: "Database Administration",
            desc: "Ongoing monitoring, performance tuning, optimization, backup management, and maintenance of databases across on-premises, cloud, and hybrid environments.",
            image: "/images/data-management/Data-Integration.jpg",
        },
        {
            title: "Data Migration Services",
            desc: "Secure, efficient migration of data between systems, platforms, or cloud environments with minimal downtime, comprehensive validation, and rollback capabilities.",
        },
    ];

    const advantages = [
        {
            title: "Reduce Costs by 40-60%",
            description: "Eliminate the overhead of building and maintaining in-house data infrastructure, hiring specialized talent, and managing complex technology stacks."
        },
        {
            title: "Faster Time to Value",
            description: "Leverage pre-built frameworks, proven methodologies, and experienced teams to accelerate implementation and start extracting insights weeks or months faster."
        },
        {
            title: "Enterprise Scalability",
            description: "Easily scale data infrastructure up or down based on business needs—handling growing volumes, new data sources, and expanding analytics requirements seamlessly."
        },
        {
            title: "Security & Compliance First",
            description: "Stay ahead of evolving data protection regulations with built-in governance controls, encryption, access management, and continuous compliance monitoring."
        },
        {
            title: "Focus on Strategic Initiatives",
            description: "Free your IT team from technical data operations to concentrate on innovation, digital transformation, and initiatives that directly drive business growth."
        },
    ];

    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/Software-developement/y-choose-us.png",
        child: [
            {
                title: "Proven Track Record",
                desc: "Trusted by enterprises across healthcare, finance, retail, and technology for mission-critical data transformation and governance projects."
            },
            {
                title: "Certified Data Experts",
                desc: "Team of certified professionals with expertise in Azure, AWS, Snowflake, Informatica, Talend, and leading data management platforms."
            },
            {
                title: "Customized Solutions",
                desc: "Every business has unique data challenges. We design tailored solutions aligned with your specific requirements, infrastructure, and goals."
            },
            {
                title: "Security-First Approach",
                desc: "Industry-leading practices in encryption, role-based access control, audit trails, and compliance frameworks to protect your sensitive data."
            },
        ]
    };

    const faqs = [
        {
            question: "What data management services does Razor Infotech provide?",
            answer: "We provide comprehensive data management including data integration and ETL, data quality management and cleansing, master data management (MDM), data governance and compliance, database administration (DBA), data migration and modernization, data warehousing, and business intelligence enablement."
        },
        {
            question: "How long does a typical data management project take?",
            answer: "Project timelines vary by scope: data quality assessments (2-4 weeks), database optimization (4-6 weeks), data integration implementations (6-12 weeks), and enterprise-wide MDM or governance programs (3-6 months). We provide detailed timelines during the discovery phase."
        },
        {
            question: "What industries do you serve for data management?",
            answer: "We serve healthcare (HIPAA-compliant), financial services (SOX, PCI DSS), retail and eCommerce, manufacturing, telecommunications, pharmaceuticals, government, and technology companies—providing industry-specific expertise and compliance knowledge."
        },
        {
            question: "How do you ensure data security and compliance?",
            answer: "We implement multi-layered security including data encryption at rest and in transit, role-based access controls, audit logging, regular security assessments, compliance frameworks (GDPR, HIPAA, SOX), data masking for sensitive information, and continuous monitoring for anomalies."
        },
    ];

    return (
        <>
            <title>Data Management Services - Integration, Governance & Quality | Razor Infotech</title>
            <meta name="description" content="Enterprise data management services including data integration, quality management, governance, MDM, and database administration. Reduce costs 40-60% while improving data accuracy and compliance." />
            <meta name="keywords" content="data management services, data governance, master data management, MDM, data integration, data quality management, database administration, data migration, data warehouse, ETL services, data compliance" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Data Management Services - Transform Data Into Strategic Assets" />
            <meta property="og:description" content="Professional data management with integration, governance, and quality solutions. 7+ years experience helping enterprises unlock data value while ensuring security and compliance." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/data-management" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/data-management/data-management-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Data Management Services by Razor Infotech" />
            <meta name="twitter:description" content="Enterprise data management: integration, governance, quality, and MDM solutions. Reduce costs while improving data accuracy and decision-making." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/data-management/data-management-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/data-management" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Data Management Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Enterprise data management services including data integration, quality management, governance and compliance, master data management (MDM), database administration, and secure data migration with industry-leading security practices.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Data Management Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Data Integration & ETL"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Data Quality Management"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Data Governance & Compliance"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Master Data Management (MDM)"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Database Administration"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Data Migration Services"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <BackgroundImagesection items={firstsection} />
            <Descriptionsection items={secondsection} />
            
            <section className="px-6 py-12 bg-accent" aria-labelledby="services-heading">
                <div className="mx-auto max-w-6xl">
                    <p className="text-base md:text-lg text-light-green rounded-full px-5 py-2 border border-light-green w-fit mx-auto text-center mb-4 font-medium">
                        Our Services
                    </p>
                    <h2 id="services-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Comprehensive Data Management Solutions
                    </h2>
                    <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-8">
                        End-to-end data lifecycle management from integration to governance
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {services.map((c, i) => (
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
                                            alt={`${c.title} service illustration`}
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

            <section className="p-10 bg-background" aria-labelledby="advantages-heading">
                <h2 id="advantages-heading" className="text-center text-heading text-3xl font-bold mb-3">
                    Strategic Advantages of Data Management
                </h2>
                <p className="text-base text-paragraph text-center max-w-3xl mx-auto mb-10">
                    Outsourcing data management to Razor Infotech provides measurable business benefits
                </p>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                        {advantages.slice(0, 3).map((e, i) => (
                            <AdvantageCard key={i} title={e.title} description={e.description} />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 justify-items-center max-w-4xl mx-auto">
                        {advantages.slice(3).map((e, i) => (
                            <AdvantageCard key={i} title={e.title} description={e.description} />
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

export default DataManagement;

function AdvantageCard({ title, description }) {
    return (
        <article className="bg-accent p-8 rounded-3xl hover:shadow-md transition-shadow">
            <h3 className="text-heading text-xl font-semibold mb-3">{title}</h3>
            <p className="text-paragraph text-base leading-relaxed">{description}</p>
        </article>
    );
}

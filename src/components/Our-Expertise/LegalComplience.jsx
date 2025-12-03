import { lazy, Suspense } from "react";
import BelowImageSection from "../../reusable/BelowImageSection";
import Descriptionsection from "../../reusable/Descriptionsection";
import { Link } from "react-router-dom";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function LegalCompliance() {
  const firstSection = {
    title: "Trusted Legal & Compliance Solutions for Every Business",
    description:
      "Expert legal guidance, regulatory compliance, and risk management services to protect your business, ensure transparency, and enable sustainable growth with confidence.",
    image: "/images/Legal-comlience/Legal-complience-hero.png",
    bgcolor: "bg-accent",
  };

  const secondSection = {
    background: "bg-background",
    title: "Legal & Compliance Services That Safeguard Your Business",
    description: `In today's complex regulatory environment, businesses face evolving compliance requirements, data protection regulations, and legal challenges. Our Legal & Compliance Services provide proactive protection, ensuring your operations meet all regulatory obligations while minimizing risk exposure.

From contract management and corporate governance to regulatory compliance and data protection (GDPR, HIPAA, SOX), we deliver end-to-end solutions tailored to your industry. Our experienced legal professionals stay ahead of regulatory changes, providing strategic guidance that protects your interests and builds stakeholder trust.

With comprehensive legal support, you can navigate complex regulations confidently, strengthen your reputation, mitigate risks, and focus on sustainable business growth without legal concerns holding you back.`,
    image: "/images/Legal-comlience/Compliance-Services.png",
    width: "max-w-6xl",
    imgWidth: "w-4/5",
  };

  const complianceServices = [
    {
      id: 1,
      title: "Regulatory Compliance",
      description: "Ensure adherence to GDPR, HIPAA, SOX, PCI DSS, and industry-specific regulations to avoid penalties, legal risks, and reputational damage.",
      image: "/images/Legal-comlience/Regulatory.png",
      layout: "vertical",
      link: "/services/regulatory-compliance"
    },
    {
      id: 2,
      title: "Contract Management",
      description: "Expert drafting, reviewing, negotiation, and lifecycle management of business contracts with legal precision and risk mitigation.",
      image: "/images/Legal-comlience/Contract.png",
      layout: "horizontal",
      link: "/services/contract-management"
    },
    {
      id: 3,
      title: "Corporate Governance",
      description: "Establish transparent policies, board governance, ethical frameworks, and accountability structures aligned with best practices.",
      image: "/images/Legal-comlience/Corporate.png",
      layout: "horizontal",
      link: "/services/corporate-governance"
    },
    {
      id: 4,
      title: "Risk Assessment & Mitigation",
      description: "Proactive identification and mitigation of legal, compliance, and operational risks before they impact your business operations.",
      image: "/images/Legal-comlience/Risk.png",
      layout: "vertical",
      link: "/services/risk-management"
    },
  ];

  const benefits = [
    {
      title: "Reduce Legal Costs by 40-60%",
      desc: "Outsourcing legal and compliance functions eliminates the overhead of full-time legal staff, office space, and infrastructure while accessing expert-level services at a fraction of the cost.",
    },
    {
      title: "Access Specialized Legal Expertise",
      desc: "Gain immediate access to experienced legal professionals with expertise in corporate law, regulatory compliance, contract law, intellectual property, and industry-specific regulations without lengthy hiring processes.",
    },
    {
      title: "Proactive Risk Management",
      desc: "Stay ahead of regulatory changes with continuous compliance monitoring, risk assessments, and strategic legal guidance that prevents issues before they escalate into costly problems or litigation.",
    },
    {
      title: "Enhanced Business Agility",
      desc: "Scale legal support based on business needs—from startups requiring basic compliance to enterprises needing comprehensive legal infrastructure—with flexible engagement models that adapt to your growth.",
    },
    {
      title: "Focus on Core Business",
      desc: "Free internal resources from complex legal matters to concentrate on strategic initiatives, product development, and customer acquisition while experts handle compliance and legal protection.",
    },
  ];

  const faqs = [
    {
      question: "What legal and compliance services does Razor Infotech provide?",
      answer: "We provide comprehensive legal and compliance services including regulatory compliance (GDPR, HIPAA, SOX, PCI DSS), contract drafting and management, corporate governance and policy development, risk assessment and mitigation, data protection and privacy compliance, intellectual property protection, employment law compliance, vendor and supplier agreement management, compliance audits and reporting, and ongoing legal advisory services.",
    },
    {
      question: "What industries do you serve for legal and compliance support?",
      answer: "We serve diverse industries including healthcare (HIPAA compliance), financial services (SOX, PCI DSS), technology and SaaS (GDPR, data privacy), e-commerce and retail (consumer protection, PCI), manufacturing (safety regulations, environmental compliance), telecommunications, pharmaceuticals (FDA regulations), real estate, and professional services with industry-specific legal expertise and regulatory knowledge.",
    },
    {
      question: "How do you ensure ongoing compliance with changing regulations?",
      answer: "We maintain compliance through continuous regulatory monitoring, subscription to legal update services, regular compliance audits and assessments, automated compliance tracking systems, periodic policy reviews and updates, training programs for your team, documented compliance procedures, and proactive communication about regulatory changes affecting your business with actionable recommendations.",
    },
    {
      question: "What are the costs and how long does implementation take?",
      answer: "Costs vary based on business size and needs: Basic compliance support ($2,000-5,000/month), comprehensive legal services ($5,000-15,000/month), enterprise-level support (custom pricing). Implementation timelines: Compliance assessment (2-4 weeks), policy development (4-6 weeks), full compliance program (3-6 months). We offer flexible packages that reduce legal costs by 40-60% compared to in-house teams.",
    },
  ];

  return (
    <>
      <title>Legal & Compliance Services - Regulatory Compliance & Risk Management | Razor Infotech</title>
      <meta name="description" content="Professional legal and compliance services including regulatory compliance (GDPR, HIPAA, SOX), contract management, corporate governance, and risk mitigation. Reduce legal costs 40-60%." />
      <meta name="keywords" content="legal compliance services, regulatory compliance, GDPR compliance, HIPAA compliance, contract management, corporate governance, risk management, legal outsourcing, compliance consulting, data protection compliance" />
      <meta name="author" content="Razor Infotech" />
      
      <meta property="og:title" content="Legal & Compliance Services - Expert Regulatory Support" />
      <meta property="og:description" content="Comprehensive legal and compliance solutions. Expert guidance on regulations, contracts, governance, and risk management. Protect your business while reducing costs." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.razorinfotech.com/services/legal-compliance" />
      <meta property="og:image" content="https://www.razorinfotech.com/images/Legal-comlience/Legal-complience-hero.png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Legal & Compliance Services by Razor Infotech" />
      <meta name="twitter:description" content="Expert legal and compliance support: regulatory compliance, contract management, risk mitigation. Reduce costs while ensuring protection." />
      <meta name="twitter:image" content="https://www.razorinfotech.com/images/Legal-comlience/Legal-complience-hero.png" />
      
      <link rel="canonical" href="https://www.razorinfotech.com/services/legal-compliance" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "serviceType": "Legal and Compliance Services",
          "provider": {
            "@type": "Organization",
            "name": "Razor Infotech",
            "url": "https://www.razorinfotech.com"
          },
          "description": "Professional legal and compliance services including regulatory compliance, contract management, corporate governance, risk assessment and mitigation, data protection, and legal advisory services with industry-specific expertise.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Legal & Compliance Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Regulatory Compliance (GDPR, HIPAA, SOX)"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Contract Management"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Corporate Governance"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Risk Assessment & Mitigation"
                }
              }
            ]
          }
        })}
      </script>

      <BelowImageSection items={firstSection} />

      <section className="p-6 sm:p-8 lg:p-10 bg-accent flex flex-col items-center" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-2xl sm:text-3xl lg:text-4xl text-heading font-semibold text-center">
          Comprehensive Legal & Compliance Solutions
        </h2>
        <p className="text-paragraph text-base text-center mt-3 max-w-2xl">
          Protect your business with expert legal guidance, regulatory compliance, and proactive risk management tailored to your industry
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-7xl w-full justify-items-center">
          {complianceServices.map((service) => (
            <article 
              key={service.id} 
              className={`bg-background rounded-2xl p-5 hover:shadow-md transition-shadow ${
                service.layout === 'vertical' ? 'flex flex-col items-center text-center' : 'flex gap-4 items-center'
              }`}
            >
              {service.layout === 'vertical' ? (
                <>
                  <img
                    src={service.image}
                    alt={`${service.title} service illustration`}
                    className="rounded-2xl mb-3 w-3/4 sm:w-4/5 lg:w-full object-contain"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-heading">{service.title}</h3>
                  <p className="text-paragraph text-sm my-2 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link} 
                    className="font-semibold text-secondary hover:underline"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                  </Link>
                </>
              ) : (
                <>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-heading">{service.title}</h3>
                    <p className="text-paragraph text-sm my-2 leading-relaxed">
                      {service.description}
                    </p>
                    <Link 
                      to={service.link} 
                      className="font-semibold text-secondary hover:underline w-fit"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
                    </Link>
                  </div>
                  <img
                    src={service.image}
                    alt={`${service.title} service illustration`}
                    className="rounded-2xl w-2/5 sm:w-1/3 lg:w-2/5 object-contain"
                    loading="lazy"
                    width="150"
                    height="150"
                  />
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <Descriptionsection items={secondSection} />

      <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="benefits-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
            Benefits of Outsourcing Legal & Compliance Services
          </h2>
          <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-10">
            Strategic advantages that protect your business while reducing costs and improving agility
          </p>

          <div className="mt-10 space-y-10">
            {benefits.map((item, idx) => (
              <article key={idx} className="space-y-3 max-w-4xl mx-auto">
                <span className="text-[var(--color-secondary)] font-medium text-xl" aria-label={`Benefit ${idx + 1}`}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-[var(--color-heading)]">{item.title}</h3>
                <p className="text-[var(--color-paragraph)]/80 leading-relaxed">{item.desc}</p>
                {idx < benefits.length - 1 && <hr className="border-[var(--color-paragraph)]/20 mt-6" aria-hidden="true" />}
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

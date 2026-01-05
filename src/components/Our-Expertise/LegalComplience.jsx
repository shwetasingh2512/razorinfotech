import { lazy, Suspense } from "react";
import BelowImageSection from "../../reusable/BelowImageSection";
import Descriptionsection from "../../reusable/Descriptionsection";
import { Link } from "react-router-dom";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function LegalCompliance() {
  const firstSection = {
    title: "Reliable Legal & Compliance Solutions for Growing Business",
    description:
      "We help businesses manage their rules and risks. This makes it easier for them to grow safely and succeed in the long run",
    image: "/images/Legal-comlience/Legal-complience-hero.png",
    bgcolor: "bg-accent",
  };

  const secondSection = {
    background: "bg-background",
    title: "Protect Your Business From Risk With Legal & Compliance Services",
    description: `With the introduction of digitalization and modernization, today’s legal and appliance environment is not only about following the sets of rules and regulations. Now we have to manage the efficiency, consistency, build trust, and enable sustainable growth.  \n

    With our legal and compliance solutions, organizations can: \n
     \nOverlook critical business content with informational governance solutions.
     \nTranslate dense regulations into clear action plans and empower the team with the knowledge they need.
    \n Make sure that every framework supports your growth objectives, which turns compliance into a competitive advantage.`,
    image: "/images/Legal-comlience/Compliance-Services.png",
    width: "max-w-6xl",
    imgWidth: "w-4/5",
  };

  const complianceServices = [
    {
      id: 1,
      title: "Regulatory Compliance",
      description: "Reduce risk and penalties to stay aligned with the local and international laws",
      image: "/images/Legal-comlience/Regulatory.png",
      layout: "vertical",
      link: "/services/regulatory-compliance"
    },
    {
      id: 2,
      title: "Corporate Governance",
      description: "We follow the sets of rules and regulations to ensure transparency and accountability.",
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
      title: "Regulatory Compliance Management",
      desc: "We help you to understand and follow the guidelines that apply to your business locally, nationally, and internationally to avoid costly fines and keep the operations smooth. ",
    },
    {
      title: "Contact Safety Net",
      desc: "We focus on making every agreement clear, fair, and legally solid to protect your business from unexpected risks. ",
    },
    {
      title: "Better Business Practices",
      desc: "Set up clear, honest, and responsible ways of running your business. This actually builds trust with investors and makes your company's reputation stronger and more reliable. ",
    },
    {
      title: "Spot Risk & Fix",
      desc: "Our team helps to identify where your business might be at risk. We create simple, practical plans to fic those weak spots and keep your business safe.",
    }
  ];

  const faqs = [
    {
      question: "What service Razor offer?",
      answer: "We help businesses to follow the laws and manage their risk. Consider us a guide for our legal paperwork, government regulations, and company policies, so that you can focus on running your business with peace of mind.",
    },
    {
      question: " Is our business information safe with Razor?",
      answer: "Yes, your business is safe with us. We secure systems for all documents and communications. Before beginning our process, we sign a Non-Disclosure Agreement (NDA) to protect your data.",
    },
    {
      question: "Are legal and compliance solutions for big companies? ",
      answer: "No, we work with all types of companies. We provide the right level of support for both small startups and established companies within a budget.",
    },
    {
      question: "How do you stay updated on changing laws?",
      answer: "Our team continuously monitors legal and regulatory updates and provides ongoing clients with clear summaries and actionable steps to maintain compliance effortlessly.",
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
          Discover Our Legal & Compliance Solutions
        </h2>
        <p className="text-paragraph text-base text-center mt-3 max-w-2xl">
          We make compliance and risk management simple. Our expertise helps to ensure sustainable growth and long-term success. 
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
            Securing Your Business Integrity With Legal & Compliance
          </h2>

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

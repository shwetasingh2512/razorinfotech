import { lazy, Suspense } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import WhychooseSection from "../../reusable/WhychooseSection";

const Faq = lazy(() => import("../../reusable/Faq"));

function ServiceCard({ n, title, desc, img, navigate }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-[var(--color-paragraph)]/10">
        <img
          src={img}
          alt={`${title} service illustration`}
          className="h-44 sm:h-52 md:h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          width="400"
          height="224"
        />
        <span 
          className="absolute left-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-[var(--color-background)] text-[var(--color-secondary)] text-xs font-semibold ring-1 ring-[var(--color-secondary)]/30"
          aria-label={`Service ${n}`}
        >
          {String(n)}
        </span>
      </div>

      <div className="mt-4 flex items-start gap-2">
        <h3 className="text-xl font-semibold text-[var(--color-heading)]">{title}</h3>
        <Link to={navigate} aria-label={`Learn more about ${title}`}>
          <FiArrowUpRight className="mt-1 size-4 text-[var(--color-secondary)] opacity-90" />
        </Link>
      </div>
      <p className="mt-2 text-sm max-w-[44ch] text-[var(--color-paragraph)]/80">{desc}</p>
    </article>
  );
}

export default function SoftwareDevelopment() {
  const developmentServices = [
    {
      n: 1,
      title: "Custom Software Development",
      navigate: "/services/custom-software-development",
      desc: "Tailored enterprise software, SaaS platforms, CRM systems, and business applications built from scratch to perfectly align with your unique workflows, processes, and strategic objectives.",
      img: "/images/It-solution/softwarre-developement.png",
    },
    {
      n: 2,
      title: "Web Application Development",
      navigate: "/services/web-development",
      desc: "Full-stack web application development including responsive front-end (React, Vue, Angular), robust back-end (Node.js, Python, PHP), RESTful APIs, and database architecture (MySQL, PostgreSQL, MongoDB).",
      img: "/images/It-solution/website-developement.png",
    },
    {
      n: 3,
      title: "Cloud Solutions & DevOps",
      navigate: "/services/cloud-devops",
      desc: "Cloud-native application development, migration to AWS/Azure/Google Cloud, containerization with Docker/Kubernetes, CI/CD pipelines, infrastructure automation, and DevOps best practices for scalability.",
      img: "/images/It-solution/marketing-branding.png",
    },
    {
      n: 4,
      title: "Mobile App Development",
      navigate: "/services/mobile-app-development",
      desc: "Native iOS (Swift) and Android (Kotlin) apps, cross-platform solutions (React Native, Flutter), progressive web apps (PWA), with intuitive UX design and seamless backend integration.",
      img: "/images/It-solution/App-developement.png",
    },
    {
      n: 5,
      title: "Software Maintenance & Support",
      navigate: "/services/software-maintenance",
      desc: "Ongoing maintenance, bug fixing, performance optimization, security patches, feature enhancements, version updates, and 24/7 technical support ensuring your software stays current and secure.",
      img: "/images/It-solution/Web-hosting.png",
    },
  ];

  const benefits = [
    {
      title: "Perfectly Tailored Solutions",
      description: "Custom software built specifically for your business processes, workflows, and requirements—eliminating limitations of generic off-the-shelf software and providing exact functionality you need without compromises or unnecessary features.",
    },
    {
      title: "Significantly Enhanced Efficiency",
      description: "Streamline operations through task automation, workflow optimization, and process integration that eliminate manual work, reduce errors by 60%, and increase team productivity by 40% with intuitive, purpose-built interfaces.",
    },
    {
      title: "Long-Term Cost Savings",
      description: "While initial investment is higher than off-the-shelf solutions, custom software eliminates recurring licensing fees, reduces maintenance costs by 50%, avoids expensive workarounds, and provides better ROI over 3-5 years.",
    },
    {
      title: "Enterprise-Grade Security",
      description: "Built-in security measures including data encryption, role-based access controls, compliance with GDPR/HIPAA/SOC 2, regular security audits, penetration testing, and protection against vulnerabilities specific to your industry.",
    },
    {
      title: "Seamless System Integration",
      description: "Custom APIs and middleware connecting your new software with existing ERP, CRM, accounting, inventory, and legacy systems—ensuring unified data flow, eliminating silos, and avoiding compatibility issues.",
    },
    {
      title: "Infinite Scalability & Flexibility",
      description: "Architecture designed to grow with your business—easily adding users, features, and capacity as needed. Adapt to market changes, new business models, and emerging technologies without expensive system replacements.",
    },
  ];

  const whyChooseUs = {
    background: "bg-gradient-to-r from-unique to-accent",
    image: "/images/Software-developement/y-choose-us.png",
    child: [
      {
        title: "Expert Development Team",
        desc: "Certified developers with 8+ years average experience in modern frameworks, cloud platforms, and industry best practices across diverse technology stacks.",
      },
      {
        title: "Proven Track Record",
        desc: "Successfully delivered 200+ custom software projects across healthcare, finance, e-commerce, logistics, and manufacturing with 98% client satisfaction rate.",
      },
      {
        title: "Agile Development Methodology",
        desc: "Iterative sprints, continuous feedback, transparent communication, and flexible adaptation ensuring your software evolves with changing requirements.",
      },
      {
        title: "Comprehensive Support",
        desc: "Not just development—complete lifecycle support including planning, design, development, testing, deployment, training, maintenance, and ongoing optimization.",
      },
    ],
  };

  const faqs = [
    {
      question: "What software development services does Razor Infotech provide?",
      answer: "We provide comprehensive software development services including custom enterprise software development, web application development (full-stack, front-end, back-end), mobile app development (native iOS/Android, cross-platform React Native/Flutter), cloud solutions and DevOps (AWS, Azure, Google Cloud), API development and integration, legacy system modernization, database design and optimization, quality assurance and testing, and ongoing maintenance and support with SLA-backed response times.",
    },
    {
      question: "What is the software development process and timeline?",
      answer: "Our agile development process includes: Discovery & Planning (1-2 weeks) - requirements gathering, feasibility analysis, technical architecture; Design Phase (2-3 weeks) - UI/UX design, database schema, system architecture; Development (6-16 weeks) - iterative sprints with bi-weekly demos; Quality Assurance (ongoing + 2 weeks final) - unit testing, integration testing, UAT; Deployment (1 week) - production launch, training; Support (ongoing). Simple projects take 2-3 months, medium complexity 4-6 months, enterprise solutions 6-12+ months.",
    },
    {
      question: "How much does custom software development cost?",
      answer: "Costs vary based on complexity and features: Small business applications ($15,000-$50,000) - basic CRM, inventory management, booking systems; Mid-size solutions ($50,000-$150,000) - complex workflows, integrations, multi-user systems; Enterprise software ($150,000-$500,000+) - mission-critical systems, advanced features, scalability, security. We provide detailed estimates after requirements analysis. Monthly maintenance typically costs 15-20% of development cost annually.",
    },
    {
      question: "What technologies and platforms do you work with?",
      answer: "We work with: Front-end - React, Vue.js, Angular, HTML5/CSS3, TypeScript; Back-end - Node.js, Python/Django, PHP/Laravel, Java/Spring, .NET Core; Mobile - Swift (iOS), Kotlin (Android), React Native, Flutter; Databases - PostgreSQL, MySQL, MongoDB, Redis; Cloud - AWS, Azure, Google Cloud, Docker, Kubernetes; DevOps - CI/CD, Jenkins, GitLab, Terraform. We recommend the best technology stack based on your specific requirements, team skills, and long-term goals.",
    },
  ];

  return (
    <>
      <title>Custom Software Development Services - Enterprise Solutions & Web Apps | Razor Infotech</title>
      <meta name="description" content="Professional custom software development: enterprise applications, web apps, mobile solutions, cloud migration, and DevOps. Agile methodology, 98% satisfaction, ongoing support." />
      <meta name="keywords" content="custom software development, software development services, enterprise software development, web application development, mobile app development, cloud solutions, DevOps services, software consulting, agile development" />
      <meta name="author" content="Razor Infotech" />
      
      <meta property="og:title" content="Custom Software Development Services - Build Solutions That Scale" />
      <meta property="og:description" content="Expert software development: custom enterprise apps, web solutions, mobile apps, cloud migration. Agile development with proven results." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.razorinfotech.com/services/software-development" />
      <meta property="og:image" content="https://www.razorinfotech.com/images/Software-developement/software-hero-image.png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Custom Software Development Services by Razor Infotech" />
      <meta name="twitter:description" content="Enterprise software, web apps, mobile solutions, cloud migration. Agile development with expert team." />
      <meta name="twitter:image" content="https://www.razorinfotech.com/images/Software-developement/software-hero-image.png" />
      
      <link rel="canonical" href="https://www.razorinfotech.com/services/software-development" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Custom Software Development Services",
          "provider": {
            "@type": "Organization",
            "name": "Razor Infotech",
            "url": "https://www.razorinfotech.com"
          },
          "description": "Professional custom software development services including enterprise applications, web development, mobile apps, cloud solutions, DevOps, API development, legacy modernization, and ongoing maintenance with agile methodology.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Software Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Application Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile App Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Solutions & DevOps"
                }
              }
            ]
          }
        })}
      </script>

      <section className="p-6 sm:p-8 lg:p-10 bg-background" aria-labelledby="hero-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto bg-accent rounded-2xl overflow-hidden">
          <div className="p-8 lg:p-12 flex items-center">
            <div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-heading">
                Custom Software Development
              </h1>
              <p className="text-base sm:text-lg text-paragraph mt-6 max-w-xl leading-relaxed">
                Build powerful, scalable software solutions tailored to your unique business needs. From enterprise applications to cloud platforms—we create, maintain, and enhance software that drives growth and efficiency.
              </p>
            </div>
          </div>
          <div 
            className="bg-[url('/images/Software-developement/software-hero-image.png')] bg-no-repeat bg-cover bg-center min-h-[12rem] sm:min-h-[16rem] lg:min-h-[22rem]"
            role="img"
            aria-label="Custom software development services illustration"
          />
        </div>
      </section>

      <section className="bg-accent px-4 sm:px-6 py-8 sm:py-12" aria-labelledby="overview-heading">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="p-3 sm:p-5">
            <img
              src="/images/Software-developement/diverse-friends-using-digital-devices 1.png"
              alt="Professional software development team collaborating on custom solutions"
              className="w-full h-48 sm:h-64 md:h-80 rounded-2xl object-cover"
              loading="lazy"
              width="600"
              height="320"
            />
          </div>

          <div className="px-3 sm:px-6">
            <h2 id="overview-heading" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-heading">
              Empowering Businesses with Technology Excellence
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-paragraph/80 max-w-xl leading-relaxed">
              Our expert software development team specializes in creating, maintaining, and enhancing custom applications that solve complex business challenges. From initial concept to deployment and beyond, we provide comprehensive solutions using cutting-edge technologies and agile methodologies.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-secondary px-4 py-2 sm:px-5 sm:py-3 text-white hover:opacity-90 transition"
              aria-label="Get software development consultation"
            >
              Schedule a Consultation
              <span className="grid place-items-center rounded-full bg-white/20 p-2" aria-hidden="true">
                <IoArrowForwardOutline />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-unique to-accent" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-paragraph)]/20 bg-accent px-4 py-1 text-base text-[var(--color-paragraph)]/70 font-medium">
              Our Services
            </span>
            <h2 id="services-heading" className="mt-4 text-3xl font-semibold text-[var(--color-heading)] sm:text-3xl md:text-4xl">
              Comprehensive Software Development Solutions
            </h2>
            <p className="text-[var(--color-paragraph)]/80 mt-4 max-w-3xl">
              End-to-end development services from concept to deployment and ongoing support
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {developmentServices.slice(0, 3).map((s) => (
              <ServiceCard key={s.n} {...s} />
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {developmentServices.slice(3).map((s) => (
              <ServiceCard key={s.n} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="p-6 sm:p-8 lg:p-10 bg-accent" aria-labelledby="benefits-heading">
        <h2 id="benefits-heading" className="text-2xl sm:text-3xl lg:text-4xl text-center text-heading font-semibold mb-4">
          Strategic Benefits of Custom Software Development
        </h2>
        <p className="text-center text-paragraph max-w-3xl mx-auto mb-10">
          Why businesses choose custom software over off-the-shelf solutions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((e, i) => (
            <article className="bg-background p-6 rounded-2xl hover:shadow-md transition-shadow" key={i}>
              <div className="flex gap-4 items-start mb-4">
                <div 
                  className="bg-secondary h-10 w-10 flex-shrink-0 flex justify-center items-center font-bold text-white rounded-full"
                  aria-label={`Benefit ${i + 1}`}
                >
                  {i + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-heading">{e.title}</h3>
              </div>
              <p className="text-sm text-paragraph leading-relaxed">{e.description}</p>
            </article>
          ))}
        </div>
      </section>

      <WhychooseSection points={whyChooseUs} />
      
      <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
        <Faq faqs={faqs} />
      </Suspense>
    </>
  );
}

import { lazy, Suspense } from "react";
import { TbEdit } from "react-icons/tb";
import { IoColorWand, IoCodeSlash } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { GrUpdate } from "react-icons/gr";
import { SlOrganization } from "react-icons/sl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import WhychooseSection from "../../reusable/WhychooseSection";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function ITSolution() {
  const capabilities = [
    "Custom Software Development",
    "Web & Mobile App Development",
    "Digital Marketing & SEO",
    "UI/UX Design Services",
    "Cloud Solutions & DevOps",
    "IT Consulting & Support",
  ];

  const services = [
    {
      n: 1,
      title: "Custom Software Development",
      navigate: "/services/software-development",
      desc: "Tailored enterprise software, SaaS platforms, and business applications built with cutting-edge technologies for scalability and performance.",
      img: "/images/It-solution/softwarre-developement.png",
    },
    {
      n: 2,
      title: "Website Development",
      navigate: "/services/website-development",
      desc: "Responsive, SEO-optimized websites and web applications for businesses across all industries with modern frameworks and best practices.",
      img: "/images/It-solution/website-developement.png",
    },
    {
      n: 3,
      title: "Digital Marketing & Branding",
      navigate: "/services/marketing-branding",
      desc: "Comprehensive digital marketing strategies including SEO, social media, content marketing, and brand identity to drive growth and leads.",
      img: "/images/It-solution/marketing-branding.png",
    },
    {
      n: 4,
      title: "Mobile App Development",
      navigate: "/services/app-development",
      desc: "Native and cross-platform mobile applications for iOS and Android with intuitive UX, robust functionality, and seamless performance.",
      img: "/images/It-solution/App-developement.png",
    },
    {
      n: 5,
      title: "Web Hosting & Cloud Services",
      navigate: "/services/website-hosting",
      desc: "Reliable, secure, and scalable hosting solutions with 99.9% uptime, automated backups, SSL certificates, and 24/7 technical support.",
      img: "/images/It-solution/Web-hosting.png",
    },
  ];

  const developmentProcess = [
    {
      icon: TbEdit,
      title: "Discovery & Requirements",
      description: "Comprehensive analysis of business goals, user needs, technical requirements, and project scope definition.",
    },
    {
      icon: IoColorWand,
      title: "UI/UX Design",
      description: "Create visually stunning, intuitive interfaces with user-centered design principles and modern design systems.",
    },
    {
      icon: IoCodeSlash,
      title: "Agile Development",
      description: "Build robust solutions using latest technologies, frameworks, and best practices with iterative development sprints.",
    },
    {
      icon: VscTools,
      title: "QA & Testing",
      description: "Rigorous testing including unit, integration, performance, and security tests to ensure flawless functionality.",
    },
    {
      icon: SlOrganization,
      title: "Deployment & Integration",
      description: "Seamless launch with CI/CD pipelines, system integration, and comprehensive deployment documentation.",
    },
    {
      icon: GrUpdate,
      title: "Support & Optimization",
      description: "Ongoing maintenance, performance monitoring, updates, and continuous improvement for long-term success.",
    },
  ];

  const whyChooseUs = {
    background: "bg-gradient-to-b from-unique to-accent",
    image: "/images/It-solution/y choose us.png",
    child: [
      {
        n: "01",
        title: "10+ Years Industry Experience",
        desc: "Proven track record delivering IT solutions across healthcare, finance, retail, e-commerce, education, and technology sectors.",
      },
      {
        n: "02",
        title: "Client-Centric Partnership",
        desc: "We work as strategic partners, deeply understanding your business to deliver solutions aligned with your goals and vision.",
      },
      {
        n: "03",
        title: "Scalable & Future-Ready",
        desc: "Solutions built with scalability in mind, easily adapting to growing user bases, feature expansion, and evolving business needs.",
      },
      {
        n: "04",
        title: "Security-First Approach",
        desc: "Enterprise-grade security with encryption, secure coding practices, compliance standards, and regular security audits.",
      },
    ],
  };

  const faqs = [
    {
      question: "What IT solution services does Razor Infotech provide?",
      answer: "We offer comprehensive IT services including custom software development, web and mobile app development, digital marketing and SEO, UI/UX design, cloud solutions and DevOps, IT consulting, web hosting, cybersecurity, data analytics, API development and integration, and ongoing technical support and maintenance.",
    },
    {
      question: "What industries do you serve with IT solutions?",
      answer: "We serve diverse industries including healthcare (HIPAA-compliant solutions), finance and banking (secure financial applications), e-commerce and retail (online stores, marketplaces), education (learning management systems), real estate (property management platforms), logistics and supply chain, hospitality and travel, manufacturing, and professional services with industry-specific expertise.",
    },
    {
      question: "What is your development process and timeline?",
      answer: "Our agile development process includes: Discovery & Planning (1-2 weeks), UI/UX Design (2-3 weeks), Development in sprints (4-12 weeks depending on complexity), QA Testing (ongoing + 1-2 weeks final), Deployment (1 week), and Post-launch Support. Simple projects take 6-8 weeks, medium complexity 3-4 months, and enterprise solutions 6+ months with detailed milestones.",
    },
    {
      question: "How do you ensure quality, security, and project success?",
      answer: "We ensure success through dedicated project managers with regular updates, agile methodology with bi-weekly sprints, code reviews and quality assurance, automated testing and CI/CD, security best practices and compliance, transparent communication via Slack/Teams, detailed documentation, and post-launch support with monitoring and optimization.",
    },
  ];

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
            <ArrowUpRight className="mt-1 size-4 text-[var(--color-secondary)] opacity-90" />
          </Link>
        </div>
        <p className="mt-2 text-sm max-w-[44ch] text-[var(--color-paragraph)]/80">{desc}</p>
      </article>
    );
  }

  return (
    <>
      <title>IT Solutions & Services - Software, Web, App Development | Razor Infotech</title>
      <meta name="description" content="Comprehensive IT solutions including custom software development, web and mobile apps, digital marketing, cloud services, and IT consulting. Transform your business with innovative technology." />
      <meta name="keywords" content="IT solutions, software development services, web development, mobile app development, digital marketing, cloud solutions, IT consulting, custom software, enterprise solutions, technology services" />
      <meta name="author" content="Razor Infotech" />
      
      <meta property="og:title" content="IT Solutions & Services - Transform Your Business with Technology" />
      <meta property="og:description" content="End-to-end IT services from custom software and web development to digital marketing and cloud solutions. Scalable, secure, and future-ready technology." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.razorinfotech.com/services/it-solutions" />
      <meta property="og:image" content="https://www.razorinfotech.com/images/It-solution/It-solution-hero-image.png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="IT Solutions & Services by Razor Infotech" />
      <meta name="twitter:description" content="Custom software, web & mobile apps, digital marketing, and cloud solutions. Expert IT services for business growth." />
      <meta name="twitter:image" content="https://www.razorinfotech.com/images/It-solution/It-solution-hero-image.png" />
      
      <link rel="canonical" href="https://www.razorinfotech.com/services/it-solutions" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "IT Solutions and Services",
          "provider": {
            "@type": "Organization",
            "name": "Razor Infotech",
            "url": "https://www.razorinfotech.com"
          },
          "description": "Comprehensive IT solutions including custom software development, web and mobile application development, digital marketing and SEO, UI/UX design, cloud services, web hosting, and IT consulting with agile development methodology.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IT Solutions & Services",
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
                  "name": "Web Development"
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
                  "name": "Digital Marketing & Branding"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Services & Web Hosting"
                }
              }
            ]
          }
        })}
      </script>

      <section className="p-6 sm:p-8 lg:p-10 bg-background" aria-labelledby="hero-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto bg-accent rounded-2xl overflow-hidden">
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-semibold max-w-xl text-heading">
              Innovative IT Solutions That Drive Growth
            </h1>
            <p className="text-base text-paragraph mt-6 lg:mt-8 max-w-xl leading-relaxed">
              At Razor Infotech, we deliver cutting-edge IT solutions that streamline operations, enhance productivity, and accelerate innovation. Our team of certified experts combines strategic insights with technical excellence to provide reliable, scalable, and future-ready services tailored to your business objectives.
            </p>
          </div>
          <div
            className="bg-[url('/images/It-solution/It-solution-hero-image.png')] bg-no-repeat bg-cover bg-center min-h-[14rem] sm:min-h-[18rem] lg:min-h-[24rem]"
            role="img"
            aria-label="IT solutions and technology services illustration"
          />
        </div>
        <div className="max-w-7xl mx-auto bg-accent mt-8 p-5 rounded-2xl">
          <ul className="flex flex-wrap justify-center sm:justify-between gap-2" role="list">
            {capabilities.map((e, i) => (
              <li
                className="p-3 sm:p-4 rounded-full border border-border text-paragraph text-sm sm:text-base whitespace-nowrap"
                key={i}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="p-8 sm:p-12 lg:p-20 bg-accent" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <span className="border text-heading py-2 px-4 text-base sm:text-lg rounded-full inline-block">
              Our Process
            </span>
            <h2 id="process-heading" className="text-3xl md:text-4xl font-semibold mt-6">
              Agile Development Process
            </h2>
            <p className="text-paragraph mt-4 max-w-3xl mx-auto">
              Our systematic approach ensures quality delivery from concept to deployment
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {developmentProcess.map((e, i) => {
              const Icon = e.icon;
              return (
                <article
                  key={i}
                  className="p-6 rounded-2xl bg-background text-center hover:shadow-md transition-shadow"
                >
                  <div className="bg-secondary w-fit mx-auto flex justify-center items-center p-4 rounded-full" aria-hidden="true">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-heading text-lg font-semibold mt-5">{e.title}</h3>
                  <p className="text-sm text-paragraph max-w-md mx-auto mt-3 leading-relaxed">{e.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-unique to-accent" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-paragraph)]/20 bg-[var(--color-accent)] px-4 py-1 text-base text-[var(--color-paragraph)]/70 font-medium">
              Our Services
            </span>
            <h2 id="services-heading" className="mt-4 text-3xl font-semibold text-[var(--color-heading)] sm:text-3xl md:text-4xl">
              Comprehensive IT Solutions We Offer
            </h2>
            <p className="text-[var(--color-paragraph)]/80 mt-4 max-w-3xl">
              End-to-end technology services to transform your digital presence and operations
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <ServiceCard key={s.n} {...s} />
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.slice(3).map((s) => (
              <ServiceCard key={s.n} {...s} />
            ))}
          </div>
        </div>
      </section>

      <WhychooseSection points={whyChooseUs} />

      <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
        <Faq faqs={faqs} />
      </Suspense>
    </>
  );
}

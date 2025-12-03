import { lazy, Suspense } from "react";
import BackgroundImagesection from "../../reusable/BackgroundImagesection";
import Descriptionsection from "../../reusable/Descriptionsection";
import ProcessSection from "../../reusable/ProcessSection";
import WhychooseSection from "../../reusable/WhychooseSection";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function HrServices() {
    const firstsection = {
        title: "Recruitment Process Outsourcing (RPO)",
        description: "Streamline your hiring with end-to-end recruitment process outsourcing. From talent sourcing and screening to onboarding, we deliver qualified candidates faster while reducing costs by up to 40% and improving quality of hire.",
        image: "/images/hr-services/hr-services-hero.png"
    };

    const secondsection = {
        background: "bg-background",
        title: "Strategic Recruitment That Drives Business Growth",
        description: "We provide comprehensive RPO solutions that transform your hiring process through data-driven talent acquisition, expert candidate assessment, and seamless integration with your HR team. Our approach reduces time-to-hire by 50%, improves candidate quality, and allows you to scale recruitment efforts efficiently while focusing on core business objectives.",
        image: "/images/hr-services/Empowering.png",
        btn: "Schedule a Consultation",
        width: "max-w-6xl"
    };

    const thirdsection = {
        background: "bg-gradient-to-b from-unique to-accent",
        head: "Comprehensive Recruitment Services for Every Hiring Need",
        paragraph: "Full-cycle recruitment outsourcing from initial sourcing to final onboarding, ensuring efficiency, quality, and the right talent for sustained business growth.",
        child: [
            {
                image: "/images/hr-services/Inbound-Services.jpg",
                title: "Full-Cycle RPO",
                description: "End-to-end recruitment management including workforce planning, employer branding, sourcing, screening, interviewing, offer management, and onboarding for complete hiring solutions."
            },
            {
                image: "/images/hr-services/Outbound-Services.jpg",
                title: "Project-Based Hiring",
                description: "Flexible recruitment support for specific projects, seasonal demands, or expansion initiatives with dedicated teams that scale based on your immediate hiring needs."
            },
            {
                image: "/images/hr-services/Omnichannel-Support-Services.jpg",
                title: "Executive Search",
                description: "Specialized recruitment for senior leadership and executive positions using targeted headhunting, comprehensive assessments, and confidential search processes."
            },
            {
                image: "/images/hr-services/Email-Support-Services.jpg",
                title: "Volume Hiring",
                description: "Mass recruitment campaigns for high-volume positions with streamlined processes, automated screening, and efficient candidate pipeline management to fill multiple roles quickly."
            }
        ]
    };

    const recruitmentProcess = [
        {
            id: "1",
            title: "Requirement Analysis",
            desc: "We conduct in-depth consultations to understand your hiring needs, company culture, role requirements, and business goals to build a tailored recruitment strategy.",
        },
        {
            id: "2",
            title: "Talent Sourcing",
            desc: "Our team leverages job boards, LinkedIn, social media, employee referrals, and proprietary talent databases to identify and attract top candidates from multiple channels.",
        },
        {
            id: "3",
            title: "Screening & Assessment",
            desc: "We conduct detailed resume reviews, skill assessments, background checks, reference verification, and initial interviews to filter and shortlist qualified candidates.",
        },
        {
            id: "4",
            title: "Interview Coordination",
            desc: "We manage complete interview scheduling, candidate communication, feedback collection, and coordination between candidates and hiring managers for seamless execution.",
        },
        {
            id: "5",
            title: "Selection & Offer Management",
            desc: "We support final candidate evaluation, salary negotiation, offer letter preparation, and acceptance follow-up to ensure successful candidate closure.",
        },
        {
            id: "6",
            title: "Onboarding Support",
            desc: "We facilitate smooth transitions with documentation assistance, pre-joining engagement, orientation coordination, and initial integration support to reduce early attrition.",
        },
    ];

    const whyChooseUs = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/Software-developement/y-choose-us.png",
        child: [
            {
                title: "Proven Recruitment Expertise",
                desc: "Experienced recruitment specialists with industry-specific knowledge across IT, finance, healthcare, retail, and manufacturing sectors."
            },
            {
                title: "Reduce Time-to-Hire by 50%",
                desc: "Streamlined processes, automation, and dedicated recruiters accelerate hiring cycles while maintaining candidate quality and cultural fit."
            },
            {
                title: "Cost Savings of 30-40%",
                desc: "Eliminate overhead costs of in-house recruitment teams, expensive job postings, and inefficient hiring processes while improving ROI."
            },
            {
                title: "Quality Candidates & Retention",
                desc: "Rigorous screening methodologies and cultural fit assessments result in higher-quality hires with 25% better retention rates."
            },
        ]
    };

    const faqs = [
        {
            question: "What is Recruitment Process Outsourcing (RPO)?",
            answer: "RPO is when a company outsources all or part of its recruitment function to an external provider. The RPO provider acts as an extension of your HR team, managing the entire hiring process from job posting and candidate sourcing to interviews, offers, and onboarding. This allows businesses to access expert recruiters, reduce hiring costs, and improve quality of hire."
        },
        {
            question: "How much can we save with RPO services?",
            answer: "Most businesses save 30-40% on recruitment costs through RPO by eliminating expenses for in-house recruiters, job board subscriptions, applicant tracking systems, and recruitment advertising. You also save indirect costs through reduced time-to-hire (50% faster), lower employee turnover (25% improvement), and better resource allocation for strategic initiatives."
        },
        {
            question: "What industries do you recruit for?",
            answer: "We provide RPO services across multiple industries including Information Technology (developers, engineers, IT support), Finance & Banking (analysts, accountants), Healthcare (nurses, doctors, administrators), Retail & E-commerce (store managers, customer service), Manufacturing (engineers, production staff), and Professional Services (consultants, analysts). We customize our approach based on industry-specific requirements."
        },
        {
            question: "How do you ensure quality of hire?",
            answer: "We maintain quality through multi-stage screening (resume review, skill assessments, technical tests), behavioral interviews assessing cultural fit, thorough background and reference checks, structured evaluation scorecards, hiring manager collaboration at every stage, and post-hire performance tracking to continuously refine our selection criteria."
        },
    ];

    return (
        <>
            <title>Recruitment Process Outsourcing (RPO) Services - Reduce Hiring Time by 50% | Razor Infotech</title>
            <meta name="description" content="Professional RPO services for end-to-end recruitment. Reduce time-to-hire by 50%, save 30-40% on costs, and access quality talent. Full-cycle recruitment, executive search, and volume hiring." />
            <meta name="keywords" content="recruitment process outsourcing, RPO services, recruitment outsourcing, talent acquisition outsourcing, hiring solutions, executive search, volume hiring, project-based recruitment, HR outsourcing" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Recruitment Process Outsourcing - Faster Hiring, Better Talent" />
            <meta property="og:description" content="Expert RPO services that reduce hiring time by 50% and costs by 40%. Full-cycle recruitment from sourcing to onboarding with proven quality." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/hr-services" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/hr-services/hr-services-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Recruitment Process Outsourcing Services by Razor Infotech" />
            <meta name="twitter:description" content="Transform your hiring with RPO. 50% faster recruitment, 40% cost savings, and better candidate quality." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/hr-services/hr-services-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/hr-services" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Recruitment Process Outsourcing",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Comprehensive recruitment process outsourcing (RPO) services including full-cycle recruitment, talent sourcing, candidate screening, interview coordination, executive search, project-based hiring, and volume recruitment with 50% faster time-to-hire.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "RPO Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Full-Cycle RPO"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Executive Search"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Project-Based Hiring"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Volume Recruitment"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <BackgroundImagesection items={firstsection} />
            <Descriptionsection items={secondsection} />
            <ProcessSection items={thirdsection} />
            
            <section className="px-4 sm:px-6 lg:px-8 py-14 lg:py-20 bg-white" aria-labelledby="process-heading">
                <div className="mx-auto max-w-7xl text-center">
                    <div className="inline-flex items-center rounded-full bg-green-100 text-green-900 px-4 py-1 text-sm font-medium mb-3">
                        Our Proven Process
                    </div>

                    <h2 id="process-heading" className="text-heading font-bold text-2xl sm:text-3xl md:text-4xl">
                        6-Step Recruitment Process
                    </h2>

                    <p className="text-paragraph mt-3 max-w-2xl mx-auto">
                        Our systematic approach ensures efficient hiring from requirement analysis to successful onboarding
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {recruitmentProcess.map((s) => (
                            <article
                                key={s.id}
                                className="rounded-2xl bg-green-50 p-6 text-left shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-3">
                                    <span 
                                        className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-green-700 px-2 text-xs font-semibold text-white flex-shrink-0"
                                        aria-label={`Step ${s.id}`}
                                    >
                                        {s.id}
                                    </span>
                                    <div>
                                        <h3 className="text-heading font-semibold text-lg leading-6">
                                            {s.title}
                                        </h3>
                                        <p className="text-paragraph mt-2 text-sm leading-6">
                                            {s.desc}
                                        </p>
                                    </div>
                                </div>
                            </article>
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

import { lazy, Suspense } from "react";
import BackgroundImagesection from "../../reusable/BackgroundImagesection";
import Descriptionsection from "../../reusable/Descriptionsection";
import ProcessSection from "../../reusable/ProcessSection";
import WhychooseSection from "../../reusable/WhychooseSection";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function HrServices() {
    const firstsection = {
        title: " A Strategic Partner For Modern HR Administration, Compliance & Growth",
        description: "Welcome to Razor Infotech: We provide complete HR solutions such as managing payroll, compliance, risk, and benefits, so you can lead with clarity and confidence.",
        image: "/images/hr-services/hr-services-hero.png"
    };

    const secondsection = {
        background: "bg-background",
        title: "Complete HR Outsourcing to Attract Talent, Manage Risk & Boost Productivity ",
        description: "With years of experience, Razor Infotech can be your strategic partner to handle all your HR tasks and needs and leading to a reduction in your workload, compliance risk, so that you can efficiently on your business operations. We manage the complete lifecycle of the employee from talent acquisition to onboarding, engagement, and retention as per your business needs. Our team of HR services provides solutions across diverse industries, roles, and other management practices. ",
        image: "/images/hr-services/Empowering.png",
        btn: "Get Started With HR",
        link: "/contact",
        width: "max-w-6xl"
    };

    const thirdsection = {
        background: "bg-gradient-to-b from-unique to-accent",
        head: "Our Hr Services",
        child: [
            {
                image: "/images/hr-services/Inbound-Services.jpg",
                title: "End solution for HR Outsourcing",
                description: "Our HR outsourcing services allow organizations to focus on core business operations in an affordable and cost-effective way. "
            },
            {
                image: "/images/hr-services/Outbound-Services.jpg",
                title: "Employee Training & Development",
                description: "We focus on enabling learning and development through simulation. By helping organizations and businesses, we possess a set of skills to meet learning and development needs"
            },
            {
                image: "/images/hr-services/Omnichannel-Support-Services.jpg",
                title: "Statutory Compliance",
                description: "We provide complete regulatory compliance solutions. Our team handles all complicated tasks, including the compliance process, to ensure you meet all labour laws and statutory requirements on a unified platform."
            },
            {
                image: "/images/hr-services/Email-Support-Services.jpg",
                title: "Speed & Accuracy",
                description: "With the team of experts, we offer support and guidance to all types of businesses. You can streamline your business operations by receiving quick, efficient, and accurate support"
            }
        ]
    };

    const recruitmentProcess = [
        {
            id: "1",
            title: "Cost Effective",
            desc: "You can outsource HR services to improve work efficiency, avoiding the need to hire skilled workers and implement training sessions, thereby preventing overspending on hiring.",
        },
        {
            id: "2",
            title: "No Risk",
            desc: "HR outsourcing providers manage tasks like finance, payroll processing, and incentive administration, helping organizations save time and avoid risky affairs.",
        },
        {
            id: "3",
            title: "Expand Business",
            desc: "Organizations can be unburdened by focusing on other crucial business operations as per the emerging trends.",
        },
        {
            id: "4",
            title: "Employee Satisfaction",
            desc: "Happier employees are more productive and drive better outcomes, making HR outsourcing significant for growing businesses to build a strong culture and healthy work-life environment.",
        },
        {
            id: "5",
            title: "Scalability, Adaptability & Flexibility",
            desc: "Our HR outsourcing service easily adjusts up and down as per the emerging trends, business growth, downsizes, or experiences seasonal changes. ",
        },
        {
            id: "6",
            title: "Access to Expertise",
            desc: "Get specialized HR professionals, industry best practices, and advanced tools to handle hiring and training",
        },
    ];

    const whyChooseUs = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/Software-developement/y-choose-us.png",
        child: [
            {
                title: "Smart Creativity",
                desc: "We create a smart strategy with a creative approach to design visuals that look stunning and achieve result"
            },
            {
                title: "Flexible Pricing",
                desc: "Budget-friendly and transparent pricing options for a hassle-free experience. "
            },
            {
                title: "Quick Response",
                desc: "Results are delivered quickly, so your projects stay on schedule without compromising. "
            },
            {
                title: "Diverse Experience",
                desc: "We’ve designed for wide sectors from startups to global brands based on their needs."
            },
        ]
    };

    const faqs = [
        {
            question: "What do you understand by HR Outsourcing Services?",
            answer: "Human Resource Outsourcing is the practice of hiring a third party to handle all administrative tasks on behalf of another business for growth and development."
        },
        {
            question: "What services are offered by HR Outsources?",
            answer: "Some of the services offered by HR outsourcers are: \n Payroll and tax administration \n Recruitment and talent acquisition \n Compliance and risk management \n Training and development"
        },
        {
            question: "What are the advantages of HR Outsourcing?",
            answer: "HR outsourcing helps in improving employee satisfaction, handling major tasks like payroll processing, benefits management, and onboarding."
        },
        {
            question: "What are the main types of Outsourcing?",
            answer: "The four main types of outsourcing are: \n Onshore outsourcing \n Offshore outsourcing \n Nearshore outsourcing \n Onsite outsourcing"
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

                    <h2 id="process-heading" className="text-heading font-bold text-2xl sm:text-3xl md:text-4xl">
                       Benefits of Choosing Our HR Outsourcing Services
                    </h2>

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

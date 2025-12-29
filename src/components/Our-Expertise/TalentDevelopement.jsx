import { lazy, Suspense } from "react";
import BackgroundImagesection from "../../reusable/BackgroundImagesection";
import Descriptionsection from "../../reusable/Descriptionsection";
import ProcessSection from "../../reusable/ProcessSection";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function TalentDevelopment() {
    const firstSection = {
        title: "Turn Your Skills into Growth With Our Talent Development Solutions",
        description: "We provide solutions that are designed to increase productivity, innovation, and retention for business operations",
        image: "/images/talent-developement/talent-developement-hero.png"
    };

    const secondSection = {
        background: "bg-accent",
        title: "Learning Path & Skill Development",
        description: "We understand that every organization has different business requirements and needs. Therefore, Razor Infotech delivers the training that is suitable for all sizes. From startups to well-established companies, Razor Infotech partners with a designed development plan that perfectly matches the business goals, tech stack, and team’s capacity.\n Basically, at the initial phase, we understand your challenges and then create a blueprint that can change your team’s potential into measurable performances.",
        image: "/images/talent-developement/Empowering-Startups.png",
        btn: "Schedule a Consultation",
        width: "max-w-6xl"
    };

    const talentPrograms = {
        background: "bg-gradient-to-b from-unique to-accent",
        head: "Implementation & Execution Support",
        paragraph: "Our professional will guide with the strategic steps on the emerging technologies, skills, and team structuring to make informed decisions about where to invest in talent development for maximum ROI.",
        child: [
            {
                image: "/images/talent-developement/Leadership-Developmen.jpg",
                title: "Training Workshops & Seminars ",
                description: "Our trainers are practicing experts who understand the development challenges faced by organizations and deliver practical, project-based learning tips. "
            },
            {
                image: "/images/talent-developement/Career-Pathing.jpg",
                title: "Career Pathing & Employee Growth",
                description: "We transform uncertainty into clarity. By building structured career roadmaps and development plans, we allow your employees and secure a talent pipeline."
            },
            {
                image: "/images/talent-developement/Coaching.jpg",
                title: "Tools & Platform Optimization",
                description: "We make sure your team has every tool that they need to succeed. Our right learning tools help organizations with LMS platforms, coding environments for your business growth."
            },
            {
                image: "/images/talent-developement/Continuous-Learning.jpg",
                title: "Track Performance Analytics",
                description: "Our clear metrics and dashboards allow you to track skill progression, performance, knowledge retention, and their impact on the business. "
            }
        ]
    };

    const whyChooseUs = [
        {
            title: "Proven Results",
            description: "We offer training development solutions that drive innovation, improve your team productivity, and increase your business outcomes."
        },
        {
            title: "Continuous Support",
            description: "Razor Infotech is here with you at every step to enhance your team’s growth. "
        },
        {
            title: "Expert Trainers",
            description: "Now, gain hands-on experience and practical tips from the industry-experienced professionals who have overcome daily tech challenges. "
        },
        {
            title: "Customized Solutions",
            description: "At first, we analyze your specific needs and then build a learning path that aligns with your projects, tech stack, and business goals. "
        },
    ];

    const faqs = [
        {
            question: "What do you mean by talent management?",
            answer: "Talent management is the strategic process of attracting, developing, retaining, and deploying employees to meet an organization’s objectives.",
        },
        {
            question: "What are the main functions of talent management?",
            answer: "The core functions of talent management are : \n 1 . Identify and attract top talent \n 2 . Maximize organizational performance \n 3 . Boost the organization’s brand and reputation.  \n 4 . Grow, enhance, and diversify employees' skills.",
        },
        {
            question: " What is the role of HR in talent management?",
            answer: "HR’s role in talent management is strategically aligning talent initiatives with business goals and managing the employee lifecycle from attracting and recruiting to developing, engaging, and retaining talent.",
        },
        {
            question: " What are the 3 C's of talent management?",
            answer: "The 3 C’s of talent management are competency, commitment, and culture.",
        },
    ];

    return (
        <>
            <title>Talent Development Services - Leadership Training & Employee Growth Programs | Razor Infotech</title>
            <meta name="description" content="Professional talent development: leadership programs, career pathing, executive coaching, continuous learning. Improve performance 55%, retention 40%, and build future-ready teams." />
            <meta name="keywords" content="talent development, leadership development programs, employee training, executive coaching, career development, workforce training, learning and development, upskilling programs, succession planning, corporate training" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Talent Development Services - Build High-Performing Teams" />
            <meta property="og:description" content="Strategic talent development: leadership training, coaching, career pathing, continuous learning. Measurable ROI and performance improvement." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/talent-development" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/talent-developement/talent-developement-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Talent Development Services by Razor Infotech" />
            <meta name="twitter:description" content="Leadership development, coaching, upskilling programs. Build capabilities that drive business growth." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/talent-developement/talent-developement-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/talent-development" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Talent Development and Training Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional talent development services including leadership development programs, career pathing, executive coaching and mentorship, continuous learning and upskilling, soft skills training, and performance improvement programs with measurable ROI.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Talent Development Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Leadership Development Programs"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Career Pathing & Growth Planning"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Executive Coaching & Mentorship"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Continuous Learning & Upskilling"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <BackgroundImagesection items={firstSection} />
            <Descriptionsection items={secondSection} />
            <ProcessSection items={talentPrograms} />

            <section className="bg-accent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="why-choose-heading">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-10">
                        <h2 id="why-choose-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-heading mb-4">
                            Why Choose Razor Infotech?

                        </h2>
                        <p className="text-paragraph max-w-3xl mx-auto">
                            Delivers innovative, high-quality results for business growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {whyChooseUs.map((e, i) => (
                            <article
                                key={i}
                                className="p-6 bg-background rounded-2xl shadow-sm transition hover:shadow-md"
                            >
                                <div className="flex items-start gap-4">
                                    <IoIosCheckmarkCircleOutline 
                                        className="text-secondary text-3xl flex-shrink-0 mt-1" 
                                        aria-hidden="true"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-heading text-lg sm:text-xl mb-2">
                                            {e.title}
                                        </h3>
                                        <p className="text-paragraph text-sm leading-relaxed">
                                            {e.description}
                                        </p>
                                    </div>
                                </div>
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

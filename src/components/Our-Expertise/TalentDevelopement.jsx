import { lazy, Suspense } from "react";
import BackgroundImagesection from "../../reusable/BackgroundImagesection";
import Descriptionsection from "../../reusable/Descriptionsection";
import ProcessSection from "../../reusable/ProcessSection";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function TalentDevelopment() {
    const firstSection = {
        title: "Growing Talent, Growing Business",
        description: "Empower your workforce with strategic talent development programs that build leadership skills, enhance performance, and drive sustainable business growth through continuous learning and career advancement.",
        image: "/images/talent-developement/talent-developement-hero.png"
    };

    const secondSection = {
        background: "bg-accent",
        title: "Empowering Teams to Reach Their Full Potential",
        description: "We help ambitious startups and growing businesses unlock their workforce's true potential with tailored talent development strategies, leadership training, and continuous learning programs. From building foundational skills to developing future leaders, our mission is to provide the expertise, frameworks, and support needed to create high-performing teams that drive business success. With us as your strategic partner, talent development becomes a competitive advantage that fuels innovation, engagement, and sustainable growth.",
        image: "/images/talent-developement/Empowering-Startups.png",
        btn: "Schedule a Consultation",
        width: "max-w-6xl"
    };

    const talentPrograms = {
        background: "bg-gradient-to-b from-unique to-accent",
        head: "Comprehensive Talent Development Solutions",
        paragraph: "Our training programs strengthen leadership capabilities, enhance critical soft skills, upskill technical talent, and improve team performance—ensuring your workforce is prepared for today's challenges and ready for tomorrow's opportunities.",
        child: [
            {
                image: "/images/talent-developement/Leadership-Developmen.jpg",
                title: "Leadership Development Programs",
                description: "Build future leaders with comprehensive training in strategic thinking, emotional intelligence, decision-making, change management, and people leadership. Our programs develop strong leaders at every organizational level who can inspire teams and drive results."
            },
            {
                image: "/images/talent-developement/Career-Pathing.jpg",
                title: "Career Pathing & Growth Planning",
                description: "Design clear career progression pathways with structured development plans, skill matrices, promotion frameworks, and succession planning. Keep employees engaged and motivated by showing tangible growth opportunities within your organization."
            },
            {
                image: "/images/talent-developement/Coaching.jpg",
                title: "Executive Coaching & Mentorship",
                description: "Provide personalized one-on-one guidance from experienced executive coaches and industry mentors. From performance optimization to leadership transition, our coaching programs build confidence, accountability, and sustainable behavioral change."
            },
            {
                image: "/images/talent-developement/Continuous-Learning.jpg",
                title: "Continuous Learning & Upskilling",
                description: "Keep teams future-ready with ongoing learning opportunities, interactive workshops, microlearning modules, and certification programs. We tailor training to emerging industry trends, technological advances, and organizational priorities."
            }
        ]
    };

    const whyChooseUs = [
        {
            title: "Proven Learning Methodologies",
            description: "Evidence-based training approaches combining adult learning theory, experiential learning, micro-credentials, and competency frameworks proven to increase knowledge retention by 65% and application by 55%."
        },
        {
            title: "Customized Development Programs",
            description: "Tailored talent strategies aligned with your industry, organizational culture, business objectives, and workforce demographics—from frontline employees to C-suite executives across all departments."
        },
        {
            title: "Measurable ROI & Impact",
            description: "Comprehensive metrics tracking skill development, behavioral change, performance improvement, engagement scores, retention rates, and business impact with quarterly assessment reports and KPI dashboards."
        },
        {
            title: "Blended Learning Approach",
            description: "Flexible delivery combining in-person workshops, virtual instructor-led training, self-paced e-learning, microlearning, coaching sessions, and on-the-job application for maximum effectiveness and accessibility."
        },
    ];

    const faqs = [
        {
            question: "What talent development services does Razor Infotech provide?",
            answer: "We provide comprehensive talent development services including leadership development programs (emerging leaders, mid-level management, executive leadership), career pathing and succession planning, executive coaching and mentorship, soft skills training (communication, emotional intelligence, teamwork), technical upskilling and reskilling programs, onboarding and new hire training, performance management training, diversity and inclusion workshops, continuous learning platforms, and customized learning paths with certifications and assessments.",
        },
        {
            question: "How do you measure talent development ROI and effectiveness?",
            answer: "We measure success through multiple metrics: Pre and post-training assessments (knowledge gain), behavioral change observations (manager feedback, 360 reviews), performance improvement metrics (productivity, quality, efficiency), employee engagement and satisfaction scores, retention rates and internal promotion rates, business impact metrics (revenue per employee, customer satisfaction), learning completion and application rates, and cost savings from reduced turnover. We provide quarterly reports showing these KPIs with clear ROI calculations.",
        },
        {
            question: "What is the typical timeline and investment for talent development?",
            answer: "Investment varies by scope: Individual coaching ($3,000-8,000 per person for 6-month engagement), team workshops ($5,000-15,000 per session for 20-30 participants), leadership development programs ($25,000-75,000 for 12-month cohort-based program), enterprise-wide talent strategy ($50,000-250,000+ annually for comprehensive programs). Timeline: Needs assessment (2-4 weeks), program design (4-6 weeks), pilot rollout (1-3 months), full deployment (3-12 months), ongoing optimization (continuous). Most organizations see measurable improvements within 6 months.",
        },
        {
            question: "How do you customize programs for different industries and roles?",
            answer: "We customize through: Industry-specific case studies and scenarios (healthcare, finance, tech, manufacturing, retail), role-based competency frameworks (technical skills for engineers, soft skills for managers), organizational culture alignment (startup agility vs corporate structure), learning style preferences (Gen Z microlearning vs Boomer structured courses), regulatory and compliance requirements (HIPAA, SOX, GDPR training), language and regional customization, and integration with existing HR systems (LMS, HRIS, performance management platforms). Every program includes pre-assessment to identify specific gaps and priorities.",
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
                            Why Choose Razor Infotech for Talent Development?
                        </h2>
                        <p className="text-paragraph max-w-3xl mx-auto">
                            Strategic learning solutions that deliver measurable business impact and workforce transformation
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

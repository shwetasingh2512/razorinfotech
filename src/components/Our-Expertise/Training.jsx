import { lazy, Suspense } from "react";
import BackgroundImagesection from "../../reusable/BackgroundImagesection";
import Descriptionsection from "../../reusable/Descriptionsection";
import ProcessSection from "../../reusable/ProcessSection";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function Training() {
  const firstSection = {
    title: "Corporate Training & Development Solutions",
    description: "Empower your workforce with comprehensive training programs that build critical skills, enhance performance, and drive organizational success through continuous learning and professional development.",
    image: "/images/talent-developement/talent-developement-hero.png",
  };

  const secondSection = {
    background: "bg-accent",
    title: "Transform Your Workforce Through Strategic Training",
    description: `People are your organization's greatest asset. Our Training & Development solutions enhance employee skills, boost team performance, and prepare your workforce for future challenges. From leadership development to technical upskilling and soft skills training, we deliver tailored programs that create measurable business impact.

Through engaging instructor-led workshops, hands-on learning experiences, microlearning modules, and continuous development strategies, we help individuals and organizations unlock their full potential. Whether you're building leadership capabilities, improving sales performance, or fostering innovation, our evidence-based training programs deliver results you can measure—improved productivity, higher retention, and stronger business outcomes.`,
    image: "/images/talent-developement/Empowering-Startups.png",
    btn: "Schedule a Consultation",
    width: "max-w-7xl",
  };

  const trainingPrograms = {
    background: "bg-background",
    head: "Comprehensive Training Programs That Drive Results",
    paragraph: "Our expert-led training solutions strengthen leadership capabilities, enhance critical soft skills, build technical expertise, and improve sales effectiveness—ensuring your team excels today and remains competitive tomorrow.",
    child: [
      {
        image: "/images/Training/Leadership.jpg",
        title: "Leadership & Management Training",
        description: "Develop high-impact leaders with strategic thinking, emotional intelligence, change management, team building, and decision-making skills that drive organizational success and inspire peak performance.",
      },
      {
        image: "/images/Training/Soft.jpg",
        title: "Soft Skills Development",
        description: "Build essential interpersonal capabilities including communication, collaboration, emotional intelligence, conflict resolution, time management, and problem-solving that create high-performing, cohesive teams.",
      },
      {
        image: "/images/Training/Technical.jpg",
        title: "Technical Skills & Upskilling",
        description: "Keep your workforce current with training in emerging technologies, software tools, data analytics, cybersecurity, cloud platforms, and industry-specific technical competencies that maintain competitive advantage.",
      },
      {
        image: "/images/Training/Sales.jpg",
        title: "Sales & Customer Service Excellence",
        description: "Boost revenue and satisfaction through proven sales methodologies, customer relationship management, consultative selling, objection handling, and service excellence training that drives measurable results.",
      },
    ],
  };

  const whyChooseUs = [
    {
      title: "Experienced Learning Professionals",
      description: "Certified trainers and instructional designers with 10+ years experience, industry expertise, and proven track records delivering engaging, impactful training across Fortune 500 companies and fast-growing startups.",
    },
    {
      title: "Customized Training Solutions",
      description: "Programs tailored to your industry, organizational culture, skill gaps, and business objectives—from onboarding new hires to developing executive leaders with content relevant to your specific challenges.",
    },
    {
      title: "Blended Learning Approach",
      description: "Flexible delivery combining instructor-led workshops, virtual training, self-paced e-learning, microlearning, simulations, and on-the-job application ensuring maximum knowledge retention and behavior change.",
    },
    {
      title: "Measurable Business Impact",
      description: "Track ROI with comprehensive metrics: pre/post assessments, performance improvements, skill application rates, engagement scores, retention improvements, and business KPIs showing clear value and impact.",
    },
  ];

  const faqs = [
    {
      question: "What corporate training services does Razor Infotech provide?",
      answer: "We provide comprehensive corporate training including leadership and management development, soft skills training (communication, teamwork, emotional intelligence), technical upskilling (software, tools, platforms), sales and customer service excellence, compliance and regulatory training, onboarding and orientation programs, diversity and inclusion workshops, productivity and time management, change management training, and custom programs designed for your specific business needs and industry requirements.",
    },
    {
      question: "How do you customize training programs for different organizations?",
      answer: "We customize through: Needs assessment interviews and skills gap analysis, industry-specific case studies and scenarios, company culture and values integration, role-based content and competency frameworks, learning style preferences (Gen Z vs Baby Boomers), delivery format flexibility (in-person, virtual, hybrid, self-paced), integration with existing LMS and HR systems, language and regional localization, and measurable outcomes aligned with your business objectives. Every program includes pre-work assessment and post-training reinforcement.",
    },
    {
      question: "What is the typical investment and timeline for training programs?",
      answer: "Investment varies by scope: Single workshop ($3,000-8,000 for 1-2 day session, 15-30 participants), multi-session program ($10,000-30,000 for 6-12 week series), leadership development program ($25,000-75,000 for 6-12 month cohort), enterprise-wide training ($50,000-250,000+ annually for ongoing programs). Timeline: Needs assessment (1-2 weeks), program design (2-4 weeks), pilot delivery (1-2 weeks), full rollout (1-6 months), reinforcement and measurement (3-12 months). Most organizations see performance improvements within 60-90 days.",
    },
    {
      question: "How do you measure training effectiveness and ROI?",
      answer: "We use Kirkpatrick's Four Levels: Level 1 - Participant satisfaction surveys (engagement, relevance), Level 2 - Knowledge assessments (pre/post tests showing skill gains), Level 3 - Behavioral change (manager observations, 360 feedback, on-the-job application), Level 4 - Business results (productivity improvements, revenue growth, quality metrics, retention rates, customer satisfaction). We provide quarterly reports showing training completion rates, competency improvements, and business impact with clear ROI calculations comparing training investment to measurable outcomes.",
    },
  ];

  return (
    <>
      <title>Corporate Training & Development Services - Leadership, Sales & Skills Training | Razor Infotech</title>
      <meta name="description" content="Professional corporate training solutions: leadership development, soft skills, technical upskilling, sales training. Blended learning, measurable ROI, customized programs that drive performance." />
      <meta name="keywords" content="corporate training, employee training programs, leadership development, soft skills training, technical training, sales training, customer service training, professional development, workplace training, training and development" />
      <meta name="author" content="Razor Infotech" />
      
      <meta property="og:title" content="Corporate Training & Development - Build High-Performing Teams" />
      <meta property="og:description" content="Expert training programs: leadership, soft skills, technical upskilling, sales excellence. Customized solutions with measurable business impact." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.razorinfotech.com/services/training-development" />
      <meta property="og:image" content="https://www.razorinfotech.com/images/talent-developement/talent-developement-hero.png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Corporate Training & Development Services by Razor Infotech" />
      <meta name="twitter:description" content="Leadership training, soft skills development, technical upskilling, sales excellence. Drive performance and retention." />
      <meta name="twitter:image" content="https://www.razorinfotech.com/images/talent-developement/talent-developement-hero.png" />
      
      <link rel="canonical" href="https://www.razorinfotech.com/services/training-development" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Razor Infotech Training & Development",
          "url": "https://www.razorinfotech.com",
          "description": "Professional corporate training and development services including leadership training, soft skills development, technical upskilling, sales training, and customer service excellence with customized programs and measurable ROI.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Corporate Training Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Leadership & Management Training"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Soft Skills Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Technical Skills & Upskilling"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Sales & Customer Service Training"
                }
              }
            ]
          }
        })}
      </script>

      <BackgroundImagesection items={firstSection} />
      <Descriptionsection items={secondSection} />
      <ProcessSection items={trainingPrograms} />

      <section className="bg-accent px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20" aria-labelledby="why-choose-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 id="why-choose-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-heading mb-4">
              Why Choose Razor Infotech for Training?
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              Expert-led training solutions that deliver measurable performance improvements and lasting behavioral change
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {whyChooseUs.map((e, i) => (
              <article 
                key={i} 
                className="p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <IoIosCheckmarkCircleOutline 
                    className="text-secondary text-3xl flex-shrink-0 mt-1" 
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-heading text-lg mb-2">{e.title}</h3>
                    <p className="text-paragraph text-sm leading-relaxed">{e.description}</p>
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

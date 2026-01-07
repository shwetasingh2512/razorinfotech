import { lazy, Suspense } from "react";
import BackgroundImagesection from "../../reusable/BackgroundImagesection";
import Descriptionsection from "../../reusable/Descriptionsection";
import ProcessSection from "../../reusable/ProcessSection";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function Training() {
  const firstSection = {
    title: "Smart Training Programs That Drive Real Business Results",
    description: "Turn your ideas into action through our training and learning programs for productivity and higher outcomes.",
    image: "/images/talent-developement/talent-developement-hero.png",
  };

  const secondSection = {
    background: "bg-accent",
    title: "Building a Foundation for Startups",
    description: `We believe that humans are the most resourceful aspect for every organization. Therefore, Razor Infotech offers training development solutions for boosting performance, upskilling, and preparing your team in advance for future challenges. 
To help individuals and organizations achieve their business goals through engaging workshops, practical learning, and continuous improvement initiatives. Our main approach is to offer targeted talent development solutions to emerging companies to stay competitive in the market. `,
    image: "/images/talent-developement/Empowering-Startups.png",
    btn: "Consult Now",
    link: "/contact",
    width: "max-w-7xl",
  };

  const trainingPrograms = {
    background: "bg-background",
    head: "Professional Learning & Progress Through Training Development Solutions",
    paragraph: "Razor Infotech is your dedicated partner in creating a culture of continuous learning and growth",
    child: [
      {
        image: "/images/Training/Leadership.jpg",
        title: "Practical Learning Workshops",
        description: "We combine multiple formats such as live workshops, online videos, and live interaction for maximum engagement and effectiveness. ",
      },
      {
        image: "/images/Training/Soft.jpg",
        title: "Measurable ROI ",
        description: "You can exactly see how your training investment is transforming into improved performance for business results through clear metrics and data. ",
      },
      {
        image: "/images/Training/Technical.jpg",
        title: "Perfect for Any Team Size ",
        description: "Our training development solutions are suitable for every organization that provides consistent quality and personalized attention, even for 5 or 500 members. ",
      },
      {
        image: "/images/Training/Sales.jpg",
        title: "Industry Specific Focus",
        description: "Whether you’re in FinTech, Healthcare, or E-commerce, we offer you the content and case studies to meet your expectations. ",
      },
    ],
  };

  const whyChooseUs = [
    {
      title: "Professional Team",
      description: "With years of experience, our team provides service with care and dedication.",
    },
    {
      title: "Constant Support ",
      description: "We are available 24*7 to resolve your queries. ",
    },
    {
      title: "Flexible Solutions",
      description: "From Startup to enterprise level, we deliver for all your business solutions.",
    },
    {
      title: "Tested Result",
      description: "Monitor and track data to maximize your business results. ",
    },
  ];

  const faqs = [
    {
      question: "1. What is Training Management?",
      answer: "Training management is the process of providing essential skills for leading people and achieving goals, covering communication and problem-solving approaches. ",
    },
    {
      question: "Why is training management important?",
      answer: "Training management is important because it builds skills, adapts workforces, boosts productivity, innovation, and employee retention by aligning skills with the goals for organizational success.",
    },
    {
      question: "What are the different types of training?",
      answer: "Common types of training management are on-the-job training, off-the-job training, and onboarding/induction training.",
    },
    {
      question: "Who needs the training management system?",
      answer: "Anyone with structured learning needs, from internal HR and upskilling staff, external training companies, universities, non-profit organisations, and regulated industries like healthcare and manufacturing.",
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
              Why Choose Razor Infotech ?
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              Delivers innovative, high-quality results for business growth
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

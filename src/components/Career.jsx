import { lazy, Suspense } from "react";
import BelowImageSection from "../reusable/BelowImageSection";
import Crousel from "../reusable/Crousel";
import { BadgeCheck, Users, BarChart3, Cpu } from "lucide-react";
import Jobs from "../reusable/Jobs";

// Lazy load FAQ component
const Faq = lazy(() => import("../reusable/Faq"));

export default function Career() {
  const firstsectionobject = {
    title: "Build Your Future With Us",
    description:
      "At our core, we believe that careers are more than just jobs - they're journeys of growth, learning, and impact. Join a team that empowers you to achieve your full potential while making a difference in the world.",
    image: "/images/career/career-hero.png",
    bgcolor: "bg-background",
  };

  const images = [
    "/images/Home/Team-1.png",
    "/images/Home/Team-2.png",
    "/images/Home/Team-3.png",
    "/images/Home/Team-4.png",
    "/images/Home/Team-5.png",
    "/images/Home/Team-1.png",
    "/images/Home/Team-2.png",
    "/images/Home/Team-3.png",
    "/images/Home/Team-4.png",
    "/images/Home/Team-5.png",
  ];

  const items = [

    {
      Icon: BadgeCheck,
      title: "Excellence in Outsourcing",
      desc: "Outsourcing with Razor Infotech goes beyond cost savings—it's about reliability, efficiency, and results. We streamline operations while maintaining uncompromised quality and security.",
    },
    {
      Icon: Users,
      title: "People-Centric Approach",
      desc: "We believe in empowering human potential. By focusing on talent, collaboration, and customer-first strategies, we create meaningful experiences for businesses and their customers.",
    },
    {
      Icon: BarChart3,
      title: "Growth Through Partnership",
      desc: "We see ourselves as more than just service providers—we're growth partners. Our scalable solutions and cross-industry expertise ensure long-term success for every client we serve.",
    },
    {
      Icon: Cpu,
      title: "Technology-Driven Innovation",
      desc: "From IT solutions to digital transformation, we harness the power of cutting-edge tools and technologies to help companies scale smarter and stay future-ready.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Find a role that suits you",
      description: "Discover open positions and find your desired one in the Razor Infotech website, job listings or social media.",
      position: "right",
    },
    {
      number: "02",
      title: "Send your application",
      description: "Some simple questions should be answered and your contact information is required",
      position: "left",
    },
    {
      number: "03",
      title: "Receive your interview invite",
      description: "We review all applications within 3 working days and send invitation to candidates.",
      position: "right",
    },
    {
      number: "04",
      title: "Choose an interview slot",
      description: "You will have a friendly discussion with the CEO and your supervisor to talk about the work, life and etc.",
      position: "left",
    },
    {
      number: "05",
      title: "Preliminary Interview",
      description: "Sometimes, we ask candidates to participate in some technical challenge that is designated to demonstrate candidates' proficiency.",
      position: "right",
    },
    {
      number: "06",
      title: "Meet your teammates",
      description: "To us is crucial to make sure all team members feel comfortable. It is why we do try to have diverse but culturally fitted team members.",
      position: "left",
    },
    {
      number: "07",
      title: "Interview with our CEO",
      description: "Your colleagues are waiting for you to say a warm welcome.",
      position: "right",
    },
  ];

  const faqs = [
    {
      question: "What types of positions does Razor Infotech hire for?",
      answer:
        "We hire across multiple domains including IT development, BPO operations, HR management, digital marketing, business consulting, and more. Check our careers portal for current openings.",
    },
    {
      question: "What is the interview process like?",
      answer:
        "Our interview process typically includes application review, preliminary screening, technical assessment (if applicable), team interviews, and a final discussion with leadership. The entire process usually takes 2-3 weeks.",
    },
    {
      question: "Does Razor Infotech offer remote work options?",
      answer:
        "Yes, we offer flexible work arrangements including hybrid and remote options depending on the role and team requirements. Work-life balance is a priority for us.",
    },
    {
      question: "What benefits and perks do employees receive?",
      answer: "We offer competitive compensation, health benefits, flexible schedules, professional development opportunities, mentorship programs, and a supportive work culture focused on growth and well-being.",
    },
  ];

  return (
    <>
      {/* SEO Meta Tags - React 19 Native Support */}
      <title>Careers at Razor Infotech - Join Our Growing Team | Job Opportunities</title>
      <meta name="description" content="Build your future with Razor Infotech. Explore career opportunities in IT, BPO, HR, and digital services. We offer work-life balance, growth opportunities, competitive benefits, and a people-centric culture." />
      <meta name="keywords" content="razor infotech careers, IT jobs, BPO jobs, software developer jobs, HR careers, digital marketing jobs, work-life balance, employee benefits, professional development, career growth, tech jobs India" />
      <meta name="author" content="Razor Infotech" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Careers at Razor Infotech - Build Your Future With Us" />
      <meta property="og:description" content="Join a team that values growth, creativity, and well-being. Discover exciting career opportunities at Razor Infotech with competitive benefits and flexible work options." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.razorinfotech.com/careers" />
      <meta property="og:image" content="https://www.razorinfotech.com/images/career/career-hero.png" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Careers at Razor Infotech - Join Our Team" />
      <meta name="twitter:description" content="Experience a workplace that values your growth, creativity, and well-being. Explore job opportunities at Razor Infotech." />
      <meta name="twitter:image" content="https://www.razorinfotech.com/images/career/career-hero.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.razorinfotech.com/careers" />
      
      {/* Job Posting Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Razor Infotech",
          "url": "https://www.razorinfotech.com",
          "logo": "https://www.razorinfotech.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-6232-1151-2211",
            "contactType": "HR Department",
            "email": "business@razorinfotech.com"
          },
          "sameAs": [
            "https://www.linkedin.com/company/razorinfotech",
            "https://twitter.com/razorinfotech",
            "https://www.instagram.com/razorinfotech"
          ]
        })}
      </script>

      <BelowImageSection items={firstsectionobject} />

      <section className="p-8 sm:p-12 bg-accent mx-auto" aria-labelledby="why-join-heading">
        <div className="grid grid-cols-1 max-w-7xl lg:grid-cols-5 gap-6 mx-auto">
          <div className="lg:col-span-3 lg:row-span-2 p-4">
            <span className="rounded-full border border-light-green py-2 px-5 inline-block mb-3">WHY JOIN US</span>
            <h2 id="why-join-heading" className="text-3xl font-semibold text-heading">
              Experience a workplace that values your <br />
              <span className="text-secondary">growth, creativity, and well being.</span>
            </h2>
            <p className="text-base text-paragraph mt-4 max-w-[50ch]">
              Experience a fulfilling career with growth, flexibility, and a supportive team culture.
            </p>
          </div>

          <article className="lg:col-span-3 lg:row-span-2 lg:row-start-3 flex flex-col md:flex-row gap-6 p-5 rounded-3xl border border-light-green">
            <div className="flex-1">
              <h3 className="text-heading text-xl block mb-2">Growth & Learning</h3>
              <p className="text-base text-paragraph">
                We invest in your professional development with mentorship, training programs, and continuous learning opportunities so you can keep growing at every stage of your career.
              </p>
            </div>
            <img 
              src="/images/career/Growth-Learning.png" 
              alt="Professional growth and learning opportunities" 
              className="max-w-xs md:max-w-sm lg:max-w-none"
              loading="lazy"
            />
          </article>

          <article className="lg:col-span-2 lg:row-span-3 lg:row-start-1 rounded-3xl border border-light-green p-5 flex flex-col items-center text-center">
            <img 
              src="/images/career/Work-Life-Balance.png" 
              alt="Work-life balance initiatives" 
              className="w-3/5 sm:w-1/2 md:w-3/5 mb-4"
              loading="lazy"
            />
            <h3 className="text-xl text-heading">Work-Life Balance</h3>
            <p className="text-paragraph text-base mt-2">
              Your well-being matters. We support flexible schedules, hybrid options, and wellness initiatives to help you thrive both at work and at home.
            </p>
          </article>

          <article className="lg:col-span-2 lg:row-span-2 lg:row-start-4 rounded-3xl border border-light-green p-5 flex flex-col items-center text-center">
            <h3 className="text-xl text-heading">Rewards & Recognition</h3>
            <img 
              src="/images/career/Rewards.png" 
              alt="Employee rewards and recognition program" 
              className="w-3/5 sm:w-1/2 md:w-3/5 mt-4"
              loading="lazy"
            />
          </article>

          <div className="lg:col-span-3 lg:row-start-5 flex gap-6 flex-col md:flex-row">
            <article className="border border-light-green p-5 rounded-3xl flex-1">
              <h3 className="text-xl text-heading block mb-2">Impactful Purpose</h3>
              <p className="text-paragraph">Be part of exciting projects that push boundaries, encourage creativity, and let you contribute ideas that make a real difference.</p>
            </article>
            <article className="border border-light-green p-5 rounded-3xl flex-1">
              <h3 className="text-xl text-heading block mb-2">Innovative Work</h3>
              <img 
                src="/images/career/Innovative-Work.png" 
                alt="Innovative work environment" 
                className="w-3/5 sm:w-1/2 md:w-3/5 mx-auto mt-4"
                loading="lazy"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-unique to-accent relative p-16 sm:p-20" aria-labelledby="team-heading">
        <h2 id="team-heading" className="text-center font-primary text-4xl text-heading font-semibold mb-5">
          Our People, Our Strength
        </h2>
        <p className="text-center text-lg text-paragraph/70 max-w-3xl mx-auto mb-10">
          Meet the talented professionals whose skills, passion, and dedication drive our company's success
        </p>
        <Crousel images={images} />
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-accent mx-auto" aria-labelledby="values-heading">
        <div className="text-center max-w-4xl mx-auto">
          <h2 id="values-heading" className="text-heading font-bold text-3xl sm:text-4xl mb-4">
            What Our Service Stands For
          </h2>
          <p className="text-paragraph max-w-2xl mx-auto mb-10">
            The principles that guide our work, inspire innovation, and shape every solution we deliver.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map(({ Icon, title, desc }) => (
              <article key={title} className="rounded-2xl bg-background p-8 shadow-sm ring-1 ring-black/5">
                <div className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-md bg-secondary text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-heading font-semibold">{title}</h3>
                <p className="text-paragraph mt-3 max-w-md mx-auto">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-green-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="interview-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 id="interview-heading" className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Our Interview Process
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              From the first hello to the final decision, we aim to make the process collaborative, supportive, and a true reflection of our culture
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-light-green h-full hidden lg:block" aria-hidden="true"></div>
            <div className="absolute left-8 top-0 w-1 bg-light-green h-full lg:hidden" aria-hidden="true"></div>

            <ol className="space-y-8 sm:space-y-12 lg:space-y-16 list-none">
              {steps.map((step, index) => (
                <li key={index}>
                  <div
                    className={`hidden lg:flex items-center justify-center ${
                      step.position === "left" ? "flex-row-reverse text-right" : "flex-row text-left"
                    }`}
                  >
                    <div className={`w-5/12 ${step.position === "left" ? "pr-8" : "pl-8"}`}>
                      <div className="rounded-lg p-6 relative bg-white shadow-md">
                        <div
                          className={`absolute top-8 ${
                            step.position === "left"
                              ? "right-0 transform translate-x-full border-l-[12px] border-l-white border-y-[12px] border-y-transparent"
                              : "left-0 transform -translate-x-full border-r-[12px] border-r-white border-y-[12px] border-y-transparent"
                          }`}
                          aria-hidden="true"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 mx-8 border-4 border-light-green">
                      <span className="text-lg font-bold text-gray-800">{step.number}</span>
                    </div>

                    <div className="w-5/12" />
                  </div>

                  <div className="flex lg:hidden items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-light-green rounded-full flex items-center justify-center relative z-10 mr-6">
                      <span className="text-lg font-bold text-gray-800">{step.number}</span>
                    </div>

                    <div className="flex-1">
                      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 relative">
                        <div className="absolute left-0 top-6 transform -translate-x-full" aria-hidden="true">
                          <div className="w-0 h-0 border-r-[12px] border-r-white border-y-[12px] border-y-transparent" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 leading-tight">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex justify-center mb-4 sm:mb-6 mt-12 sm:mt-16">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 border-4 border-light-green" aria-label="Welcome to the team">
              <span className="text-2xl" role="img" aria-label="handshake">🤝</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Jobs />
      </section>

      <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
        <Faq faqs={faqs} />
      </Suspense>
    </>
  );
}


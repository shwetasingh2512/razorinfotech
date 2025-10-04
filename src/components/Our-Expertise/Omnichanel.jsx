import BackgroundImagesection from "../../reusable/BackgroundImagesection"
import Descriptionsection from "../../reusable/Descriptionsection"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Faq from "../../reusable/Faq";


export default function Omnichanel() {

  const firstSection = {
    title: "Omnichannel Support Services",
    description: "Omnichannel services are a smooth, consistent, and connected way to communicate and enhance customer experience via multiple platforms.",
    image: "/images/omnichanel/omnichanel-hero.png"
  }

  const Description = {
    title: "Smooth, Consistent, and Connected Customer Experiences",
    description: "Through omnichannel support, businesses are opting for a unified customer service approach. In this, the communication between customers and agents takes place across multiple channels such as calling, email, chat, social media, and more. Under this process, the service provider ensures a consistent and personalized experience to brand customers.",
    image: "/images/omnichanel/Smooth.png",
    imgWidth: "w-3/5",
    width: "max-w-7xl",
    background: "bg-background"
  }


  const benefits = [
    {
      id: 1,
      title: "Cross-Channel Integration",
      description:
        "Unified dashboard for all communications, and consistency among each connection",
    },
    {
      id: 2,
      title: "Centralized Customer History",
      description:
        "Learn web and app development from scratch and user-friendly websites",
    },
    {
      id: 3,
      title: "Centralized Customer History",
      description:
        "Learn web and app development from scratch and user-friendly websites",
    },
    {
      id: 4,
      title: "Mobile-Ready Support",
      description:
        "Omnichannel services are very responsive and mobile-first communication as customers communicate via channels.",
    },
    {
      id: 5,
      title: "Real-Time Analytics & Insights",
      description:
        "We track customer interactions, agent performance, and engagement trends with actionable reports to improve efficiency.",
    },
    {
      id: 6,
      title: "Scalable & Flexible System",
      description:
        "Whether you’re a growing startup or an enterprise, our omnichannel platform adapts to your business needs with ease.",
    },
  ];


  const cards = [
    {
      title: "Phone Support",
      desc:
        "We have professionals who handle voice assistance for quick resolutions.",
      image: "/images/omnichanel/Phone-Support.jpg",
      dark: true,
    },
    {
      title: "Live Chat",
      desc:
        "Our team can handle real-time chat with customers to provide instant help.",
    },
    {
      title: "E-mail Support",
      desc:
        "For Asynchronous communication for complex issues, we offer email support.",
    },
    {
      title: "Social Media Messaging",
      desc:
        "Our team can handle all social media platforms to integrate with your CRM.",
      image: "/images/omnichanel/Social-Media.jpg",
      dark: true,
    },
  ];



  const steps = [
    {
      id: "01",
      title: "Targeting & Audience Reach",
      description: "Our service allows businesses to target specific audiences and connect with potential customers based on user behavior, interests, and location."
    },
    {
      id: "02",
      title: "Cost Control",
      description: "Business just has to pay for the platform only when a user clicks on their ad and visits their website, making it a cost-effective model."
    },
    {
      id: "03",
      title: "Flexible Budgets",
      description: "You can set and control daily or monthly spending limits and adjust your budget in real-time as needed."
    },
    {
      id: "04",
      title: "Enhanced Speed & Visibility",
      description: "Our team makes the ads appear on search engine results pages or social media feeds as soon as the campaign goes live, driving almost instant traffic."
    },
    {
      id: "05",
      title: "Trackable ROI",
      description: "With every campaign, the business can easily measure the return on investment (ROI) of its campaigns."
    }
  ];


  const PPC = [
    {
      title: "Expert Multichannel Agents",
      description: "We have trained and skilled agents who work through multichannel support."
    },
    {
      title: "Reduced Response Time",
      description: "Our team uses up-to-date technology for smoother communication and revelation."
    },
    {
      title: "Smooth Technology Integration",
      description: "Our team uses up-to-date technology for smoother communication and revelation."
    },
    {
      title: "Improved First-Contact Resolution",
      description: "With our team, your business gets improved resolution in the first contact, making your brand reputation positive."
    }
  ];



  const faqs = [
    {
      question: "What services does Razor Infotech provide?",
      answer:
        "We offer end-to-end solutions, including IT services, BPO support, HR management, cloud solutions, cybersecurity, and digital transformation to help businesses scale with confidence.",
    },
    {
      question: "Who can businesses of different sizes benefit from our services?",
      answer:
        "We provide tailored solutions for startups, SMBs, and enterprises, ensuring value at every stage.",
    },
    {
      question: "How does Razor Infotech ensure quality and security?",
      answer:
        "We follow strict compliance, use advanced security practices, and maintain transparency with our clients.",
    },
    {
      question: "Can we customize solutions based on your business needs?",
      answer:
        "Yes, all our solutions can be customized to fit your unique business goals.",
    },
  ];




  return (
    <>
      <BackgroundImagesection items={firstSection} />
      <Descriptionsection items={Description} />
      <section className="px-6 py-16 bg-white">
        <p className="text-center text-sm border border-light-green rounded-full px-4 py-1 w-fit mx-auto text-light-green mb-6">
          Features
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-heading mb-12">
          Key Features of Razor Infotech’s Omnichannel Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((b) => (
            <div
              key={b.id}
              className="bg-background rounded-2xl p-6 shadow-sm"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-white font-bold mb-4">
                {b.id}
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">
                {b.title}
              </h3>
              <p className="text-paragraph text-sm leading-6">{b.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 py-12 bg-accent">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
            What Channels Do We Support
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {cards.map((c, i) => (
              <article
                key={i}
                className={`relative overflow-hidden rounded-2xl ring-1 ring-[var(--color-paragraph)]/10 ${c.image ? "p-0" : "bg-[var(--color-background)] p-6"
                  }`}
              >
                {c.image && (
                  <>
                    <img
                      src={c.image}
                      alt=""
                      className="h-44 w-full object-cover md:h-48"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-0 p-5">
                      <h3 className="text-lg font-semibold text-white">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/85 max-w-[48ch]">
                        {c.desc}
                      </p>
                    </div>
                  </>
                )}

                {!c.image && (
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-paragraph)]/80">
                      {c.desc}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-unique to-accent py-16 px-4 flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="flex items-start justify-center gap-6 text-center mb-6">
            <div>
              <div className="inline-flex items-center px-4 py-1 rounded-full text-sm border border-light-green mb-4">
                Our Features
              </div>
              <h2 className="text-heading font-bold">
                Key Features of Our PPC Service
              </h2>
              <p className="text-paragraph max-w-3xl mb-10 mt-4">
                Our data-driven PPC process turns targeted ads into measurable results and every click into real business growth.
              </p>
            </div>

          </div>



          <div className="space-y-8">
            {steps.map((s) => (
              <div
                key={s.id}
                className="grid grid-cols-1 md:grid-cols-12 items-start gap-6"
              >
                <div className="md:col-span-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-light-green flex items-center justify-center text-white font-semibold">
                    {s.id}
                  </div>
                  <h3 className="text-heading font-semibold">{s.title}</h3>
                </div>

                <div className="md:col-span-7">
                  <p className="text-paragraph">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent p-10">
        <div className="max-w-6xl mx-auto">
          <div className="head">
            <h3 className="text-3xl text-heading text-center font-semibold">Benefits of Choosing Razor Infotech for Omnichannel Support</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto mt-8">
            {
              PPC.map((e, i) => (
                <div className="p-5 bg-background rounded-2xl">
                  <div className="flex gap-5 items-center">
                    <IoIosCheckmarkCircleOutline className="text-secondary" />
                    <span className="text-heading font-semibold">{e.title}</span>
                  </div>
                  <p className="text-paragraph text-base mt-4">{e.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <Faq faqs={faqs} />


    </>
  )
}

import { lazy, Suspense } from "react";
import BackgroundImagesection from "../../reusable/BackgroundImagesection";
import Descriptionsection from "../../reusable/Descriptionsection";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Faq = lazy(() => import("../../reusable/Faq"));

export default function Omnichannel() {
  const firstSection = {
    title: "Omnichannel Support Services",
    description: "Deliver seamless, consistent customer experiences across phone, email, live chat, social media, and messaging platforms with unified omnichannel support that keeps context across every interaction.",
    image: "/images/omnichanel/omnichanel-hero.png"
  };

  const descriptionSection = {
    title: "Seamless Customer Experiences Across All Channels",
    description: "Omnichannel support provides a unified customer service approach where communication flows seamlessly across phone calls, email, live chat, social media, SMS, and messaging apps. Unlike multichannel support, omnichannel integrates all touchpoints into a single system, ensuring agents have complete customer context regardless of the channel used. This creates personalized, consistent experiences that build loyalty, reduce friction, and improve satisfaction while allowing customers to switch channels without repeating information.",
    image: "/images/omnichanel/Smooth.png",
    imgWidth: "w-3/5",
    width: "max-w-7xl",
    background: "bg-background"
  };

  const keyFeatures = [
    {
      id: 1,
      title: "Unified Cross-Channel Integration",
      description: "Single dashboard integrating phone, email, chat, social media, and messaging with automatic channel switching and conversation continuity for seamless support."
    },
    {
      id: 2,
      title: "Centralized Customer History",
      description: "Complete customer interaction history across all channels accessible to agents in real-time, enabling personalized service without asking customers to repeat information."
    },
    {
      id: 3,
      title: "Intelligent Routing & Assignment",
      description: "Smart routing directs customers to the right agent based on expertise, availability, channel preference, and previous interaction history for faster resolution."
    },
    {
      id: 4,
      title: "Mobile-First Support",
      description: "Fully responsive omnichannel platform optimized for mobile devices, enabling customers to get support on-the-go with SMS, in-app chat, and mobile-optimized interfaces."
    },
    {
      id: 5,
      title: "Real-Time Analytics & Insights",
      description: "Comprehensive dashboards tracking customer interactions, agent performance, channel effectiveness, response times, and CSAT scores with actionable insights for continuous improvement."
    },
    {
      id: 6,
      title: "Scalable & Flexible Platform",
      description: "Cloud-based infrastructure that scales effortlessly from startups to enterprises, supporting unlimited channels, agents, and customer interactions with flexible pricing models."
    },
  ];

  const supportedChannels = [
    {
      title: "Phone Support",
      desc: "Professional voice support with IVR integration, call recording, quality monitoring, and seamless transfer capabilities for complex issues requiring personal touch.",
      image: "/images/omnichanel/Phone-Support.jpg",
    },
    {
      title: "Live Chat Support",
      desc: "Real-time website and in-app chat with co-browsing, file sharing, canned responses, and chatbot integration for instant customer assistance and higher conversion rates.",
    },
    {
      title: "Email Support",
      desc: "Professional email management with ticketing systems, automated routing, SLA tracking, and templated responses for detailed inquiries requiring comprehensive solutions.",
    },
    {
      title: "Social Media Messaging",
      desc: "Unified social inbox for Facebook, Instagram, Twitter/X, LinkedIn, and WhatsApp with sentiment analysis, automated responses, and brand monitoring capabilities.",
      image: "/images/omnichanel/Social-Media.jpg",
    },
  ];

  const additionalChannels = [
    {
      id: "01",
      title: "SMS & Text Messaging",
      description: "Two-way SMS support for appointment reminders, order updates, quick responses, and customer notifications with automated workflows and personalization."
    },
    {
      id: "02",
      title: "Self-Service Portal",
      description: "Comprehensive knowledge base, FAQs, video tutorials, and community forums empowering customers to find answers independently, reducing support volume by 30-40%."
    },
    {
      id: "03",
      title: "Video Support",
      description: "Live video chat and screen sharing for complex technical issues, product demonstrations, personalized consultations, and visual troubleshooting with recording capabilities."
    },
    {
      id: "04",
      title: "Messaging Apps Integration",
      description: "Support through WhatsApp Business, Telegram, WeChat, and Viber with automated chatbots, rich media sharing, and integration with your CRM system."
    },
    {
      id: "05",
      title: "In-App Messaging",
      description: "Native mobile and web app messaging with push notifications, proactive engagement, and contextual help based on user behavior and app usage patterns."
    }
  ];

  const benefits = [
    {
      title: "Expert Omnichannel Agents",
      description: "Trained specialists proficient in managing multiple channels simultaneously with deep understanding of channel-specific communication styles and customer expectations."
    },
    {
      title: "70% Faster Response Times",
      description: "Advanced routing, automation, and unified interfaces enable agents to respond 70% faster than traditional multichannel support with context-aware conversations."
    },
    {
      title: "Seamless Technology Integration",
      description: "Integration with leading CRMs (Salesforce, HubSpot, Zendesk), e-commerce platforms, helpdesk software, and custom APIs for complete data synchronization."
    },
    {
      title: "85% First-Contact Resolution",
      description: "Complete customer context and intelligent routing result in 85% first-contact resolution rate, significantly improving satisfaction and reducing support costs."
    }
  ];

  const faqs = [
    {
      question: "What channels are supported by Razor Infotech?",
      answer: "Razor Infotech provides support actress various channels, such as via chat, email, phone, and social media platforms in one place. "
    },
    {
      question: "What is the difference between multichannel and omnichannel?",
      answer: "Multichannel focuses on different separate channels, whereas omnichannel involves the customer interaction through a single channel, including chats, email, and calls"
    },
    {
      question: "What are the benefits of omnichannel support?",
      answer: `There are different benefits of implementing omnichannel support, such as:

        \nEnhancing customer experience and satisfaction
        \nShaping the brand’s reputation
        \nFaster resolutions
        \nDeeper customer insights
`
    },
    {
      question: "How can we link different channels for omnichannel support?",
      answer: "Businesses can integrate different channels fr omnichannel support via email, chats, messages, social media, and self-service portals. This process includes connecting support channels with customer relationship management systems for a unified customer interaction."
    },
  ];

  return (
    <>
      <title>Omnichannel Support Services - Unified Customer Experience Across All Channels | Razor Infotech</title>
      <meta name="description" content="Professional omnichannel customer support across phone, email, live chat, social media, SMS, and messaging apps. 70% faster response times, 85% first-contact resolution, seamless channel switching." />
      <meta name="keywords" content="omnichannel support services, omnichannel customer service, multichannel support, unified customer experience, live chat support, social media customer service, integrated support platform, customer engagement platform" />
      <meta name="author" content="Razor Infotech" />
      
      <meta property="og:title" content="Omnichannel Support Services - Seamless Customer Experience" />
      <meta property="og:description" content="Unified support across all channels: phone, email, chat, social media, SMS. 70% faster responses, 85% first-contact resolution with complete customer context." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.razorinfotech.com/services/omnichannel-support" />
      <meta property="og:image" content="https://www.razorinfotech.com/images/omnichanel/omnichanel-hero.png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Omnichannel Support Services by Razor Infotech" />
      <meta name="twitter:description" content="Seamless customer support across all channels. Unified platform, complete context, faster resolution." />
      <meta name="twitter:image" content="https://www.razorinfotech.com/images/omnichanel/omnichanel-hero.png" />
      
      <link rel="canonical" href="https://www.razorinfotech.com/services/omnichannel-support" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Omnichannel Customer Support Services",
          "provider": {
            "@type": "Organization",
            "name": "Razor Infotech",
            "url": "https://www.razorinfotech.com"
          },
          "description": "Professional omnichannel customer support services integrating phone, email, live chat, social media, SMS, messaging apps, and video support with unified customer history, intelligent routing, and real-time analytics for seamless customer experiences.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Omnichannel Support Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Phone Support"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Live Chat Support"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Email Support"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Social Media Messaging"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SMS & Messaging Apps"
                }
              }
            ]
          }
        })}
      </script>

      <BackgroundImagesection items={firstSection} />
      <Descriptionsection items={descriptionSection} />

      <section className="px-6 py-16 bg-white" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm border border-secondary rounded-full px-4 py-1 inline-block text-secondary mb-4 font-medium">
              Key Features
            </span>
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-heading">
              Core Features of Our Omnichannel Platform
            </h2>
            <p className="text-paragraph mt-4 max-w-3xl mx-auto">
              Advanced capabilities that deliver seamless customer experiences across every touchpoint
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {keyFeatures.map((b) => (
              <article
                key={b.id}
                className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-white font-bold mb-4"
                  aria-label={`Feature ${b.id}`}
                >
                  {b.id}
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  {b.title}
                </h3>
                <p className="text-paragraph text-sm leading-6">{b.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-accent" aria-labelledby="channels-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="channels-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
            Primary Communication Channels We Support
          </h2>
          <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-8">
            Comprehensive support across all major customer communication channels
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {supportedChannels.map((c, i) => (
              <article
                key={i}
                className={`relative overflow-hidden rounded-2xl ring-1 ring-[var(--color-paragraph)]/10 ${
                  c.image ? "p-0 min-h-[200px]" : "bg-[var(--color-background)] p-6"
                }`}
              >
                {c.image && (
                  <>
                    <img
                      src={c.image}
                      alt={`${c.title} illustration`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="200"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {c.title}
                      </h3>
                      <p className="text-sm leading-6 text-white/90">
                        {c.desc}
                      </p>
                    </div>
                  </>
                )}

                {!c.image && (
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-heading)] mb-2">
                      {c.title}
                    </h3>
                    <p className="text-sm leading-6 text-[var(--color-paragraph)]/80">
                      {c.desc}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-unique to-accent py-16 px-6" aria-labelledby="additional-channels-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm border border-secondary text-secondary mb-4 font-medium">
              Extended Support
            </span>
            <h2 id="additional-channels-heading" className="text-3xl md:text-4xl text-heading font-bold mb-4">
              Additional Support Channels & Features
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              Comprehensive support ecosystem including modern messaging platforms and self-service tools
            </p>
          </div>

          <div className="space-y-8">
            {additionalChannels.map((s) => (
              <article
                key={s.id}
                className="grid grid-cols-1 md:grid-cols-12 items-start gap-6 bg-background rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="md:col-span-5 flex items-center gap-4">
                  <div 
                    className="w-10 h-10 flex-shrink-0 rounded-full bg-secondary flex items-center justify-center text-white font-semibold"
                    aria-label={`Channel ${s.id}`}
                  >
                    {s.id}
                  </div>
                  <h3 className="text-heading font-semibold">{s.title}</h3>
                </div>

                <div className="md:col-span-7">
                  <p className="text-paragraph text-sm leading-relaxed">{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent p-10" aria-labelledby="benefits-heading">
        <div className="max-w-6xl mx-auto">
          <h3 id="benefits-heading" className="text-3xl text-heading text-center font-semibold mb-3">
            Benefits of Choosing Razor Infotech for Omnichannel Support
          </h3>
          <p className="text-center text-paragraph max-w-3xl mx-auto mb-8">
            Strategic advantages that improve customer satisfaction while reducing operational costs
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto mt-8">
            {benefits.map((e, i) => (
              <article key={i} className="p-6 bg-background rounded-2xl hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-start">
                  <IoIosCheckmarkCircleOutline className="text-secondary text-2xl flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="text-heading font-semibold mb-2">{e.title}</h4>
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

import { lazy, Suspense } from "react";
import { TbDeviceDesktopSearch } from "react-icons/tb";
import { IoIosColorPalette } from "react-icons/io";
import { HiCursorClick } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { PiTarget } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { BiSolidVideos } from "react-icons/bi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Faq = lazy(() => import("../../reusable/Faq"));

function BlogCard({ post }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-[28px]">
        <img
          src={post.image}
          alt={post.title}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
          width="400"
          height="256"
        />
        <Link
          to={post.href}
          className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[var(--color-heading)] backdrop-blur-sm transition hover:bg-white"
          aria-label={`Read more about ${post.title}`}
        >
          <span className="inline-flex items-center gap-2">
            Read more <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-[var(--color-heading)]">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-[var(--color-paragraph)]/80">
        {post.excerpt}
      </p>
    </article>
  );
}

function ServiceCard({ n, Icon, title, desc }) {
  return (
    <article className="relative grid place-items-center rounded-2xl bg-[var(--color-accent)] p-8 text-center ring-1 ring-[var(--color-paragraph)]/15 shadow-sm hover:shadow-md transition-shadow">
      <span
        className="absolute right-4 top-4 rounded-lg px-2 py-1 text-4xl font-semibold text-transparent"
        style={{ WebkitTextStroke: "1px var(--color-paragraph)" }}
        aria-hidden="true"
      >
        {n}
      </span>
      <span className="mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-[var(--color-secondary)] text-[var(--color-secondary)]" aria-hidden="true">
        <span className="p-2 rounded-2xl bg-white/20">
          <Icon className="h-7 w-7 text-white" />
        </span>
      </span>
      <h3 className="text-[var(--color-heading)] font-semibold leading-tight">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--color-paragraph)]/80">
        {desc}
      </p>
      <button 
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-paragraph)]/60 hover:text-[var(--color-secondary)] transition"
        aria-label={`Learn more about ${title}`}
      >
        Learn more <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}

function StepCard({ n, title, desc }) {
  return (
    <article className="rounded-[22px] bg-[var(--color-accent)] p-6 shadow-sm ring-1 ring-[var(--color-paragraph)]/15 hover:shadow-md transition-shadow">
      <span 
        className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--color-secondary)] text-[var(--color-accent)] text-sm font-semibold"
        aria-label={`Step ${n}`}
      >
        {n}
      </span>
      <h3 className="mt-6 text-[var(--color-heading)] font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-paragraph)]/80 leading-relaxed">{desc}</p>
    </article>
  );
}

export default function MarketingBranding() {
  const blogPosts = [
    {
      title: "5 Digital Marketing Strategies Every Business Should Use in 2025",
      excerpt: "Discover five powerful digital marketing strategies in 2025 that help businesses boost visibility, engage audiences, and drive sustainable growth through SEO, content marketing, and social media.",
      image: "/images/Marketing-Branding/digital-marketing.png",
      href: "/blog/marketing-strategies-2025",
    },
    {
      title: "5 Common Branding & Marketing Mistakes Businesses Should Avoid",
      excerpt: "Avoid these five critical branding and marketing mistakes that weaken business growth, reduce customer trust, damage brand reputation, and waste marketing budgets.",
      image: "/images/Marketing-Branding/marketing-and-branding.png",
      href: "/blog/branding-mistakes",
    },
    {
      title: "Why Marketing and Branding Are Essential For Business Growth",
      excerpt: "Understanding how marketing and branding build positive brand recognition, customer loyalty, competitive advantage, and sustainable business growth in competitive markets.",
      image: "/images/Marketing-Branding/common-branding.png",
      href: "/blog/branding-importance",
    },
  ];

  const marketingServices = [
    {
      n: "01",
      Icon: TbDeviceDesktopSearch,
      title: "Search Engine Optimization (SEO)",
      desc: "Improve organic rankings, increase website traffic, and boost visibility with technical SEO, on-page optimization, link building, and keyword research strategies.",
    },
    {
      n: "02",
      Icon: IoIosColorPalette,
      title: "Graphic Design & Branding",
      desc: "Create compelling visual identities including logos, brand guidelines, marketing collateral, social media graphics, and packaging design that resonate with your audience.",
    },
    {
      n: "03",
      Icon: HiCursorClick,
      title: "Pay-Per-Click (PPC) Advertising",
      desc: "Maximize ROI with highly targeted Google Ads, Facebook Ads, and LinkedIn campaigns that drive qualified leads, conversions, and measurable business growth.",
    },
    {
      n: "04",
      Icon: FaGlobe,
      title: "Social Media Marketing",
      desc: "Build authentic relationships, boost engagement, and grow your community across Facebook, Instagram, LinkedIn, Twitter, and TikTok with strategic content and campaigns.",
    },
    {
      n: "05",
      Icon: MdContentCopy,
      title: "Content Marketing",
      desc: "Attract and retain customers with valuable blog posts, infographics, case studies, whitepapers, and creative campaigns that establish thought leadership and drive conversions.",
    },
    {
      n: "06",
      Icon: PiTarget,
      title: "Google Business Profile (GMB)",
      desc: "Optimize your local presence with complete GMB management including profile optimization, review management, local SEO, and post scheduling to attract nearby customers.",
    },
    {
      n: "07",
      Icon: IoIosMail,
      title: "Email Marketing",
      desc: "Drive sales and nurture leads with personalized email campaigns, automated sequences, segmentation strategies, and A/B testing that deliver high open and conversion rates.",
    },
    {
      n: "08",
      Icon: BiSolidVideos,
      title: "Video Marketing",
      desc: "Engage audiences with compelling video content including explainer videos, product demos, testimonials, social media videos, and YouTube marketing that drives engagement.",
    },
    {
      n: "09",
      Icon: AiOutlineAreaChart,
      title: "Online Reputation Management (ORM)",
      desc: "Protect and enhance your brand reputation with proactive monitoring, review management, negative content suppression, and strategic reputation building campaigns.",
    },
  ];

  const process = [
    {
      n: 1,
      title: "Discovery & Goal Definition",
      desc: "We start by understanding your target audience, brand vision, business goals, and competitive landscape through in-depth research and strategic collaboration.",
    },
    {
      n: 2,
      title: "Strategy & Creative Design",
      desc: "With clear insights, we craft tailored marketing strategies and visual identities that reflect your brand's voice, values, and unique positioning in the market.",
    },
    {
      n: 3,
      title: "Campaign Execution",
      desc: "Our team brings strategies to life with engaging content creation, multi-channel campaigns, SEO optimization, and data-driven advertising across all platforms.",
    },
    {
      n: 4,
      title: "Launch, Monitor & Optimize",
      desc: "We launch campaigns, continuously monitor performance metrics, conduct A/B testing, and optimize strategies to maximize ROI and achieve your business objectives.",
    },
  ];

  const faqs = [
    {
      question: "What digital marketing and branding services does Razor Infotech provide?",
      answer: "We offer comprehensive digital marketing services including SEO (technical, on-page, off-page), PPC advertising (Google Ads, Facebook Ads, LinkedIn Ads), social media marketing, content marketing (blogs, infographics, videos), email marketing, graphic design and branding, video marketing, Google Business Profile optimization, online reputation management (ORM), and marketing analytics with ROI tracking.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Results vary by channel: PPC advertising shows immediate results (1-2 weeks), social media engagement builds over 4-8 weeks, SEO typically takes 3-6 months for significant rankings, content marketing shows traction in 2-4 months, and brand awareness campaigns need 6-12 months. We provide monthly reports with clear KPIs and progress tracking throughout.",
    },
    {
      question: "What industries do you serve for marketing and branding?",
      answer: "We serve diverse industries including e-commerce and retail, healthcare and wellness, real estate and property, finance and banking, technology and SaaS, professional services (law, accounting, consulting), hospitality and restaurants, education and e-learning, manufacturing, and nonprofit organizations with industry-specific strategies and compliance knowledge.",
    },
    {
      question: "How do you measure marketing success and ROI?",
      answer: "We track comprehensive metrics including website traffic and conversion rates, keyword rankings and organic visibility, social media engagement and follower growth, email open rates and click-through rates, PPC campaign performance (CPC, CTR, ROAS), lead generation and customer acquisition cost, brand awareness metrics, and overall marketing ROI with detailed monthly reports and quarterly strategy reviews.",
    },
  ];

  return (
    <>
      <title>Digital Marketing & Branding Services - SEO, PPC, Social Media | Razor Infotech</title>
      <meta name="description" content="Data-driven digital marketing services including SEO, PPC advertising, social media marketing, content creation, branding, and email marketing. Boost visibility, engagement, and conversions." />
      <meta name="keywords" content="digital marketing services, branding agency, SEO services, PPC advertising, social media marketing, content marketing, graphic design, email marketing, video marketing, online reputation management, Google Ads" />
      <meta name="author" content="Razor Infotech" />
      
      <meta property="og:title" content="Digital Marketing & Branding Services - Grow Your Business Online" />
      <meta property="og:description" content="Comprehensive digital marketing solutions: SEO, PPC, social media, content marketing, and branding. Data-driven strategies that drive growth and ROI." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.razorinfotech.com/services/marketing-branding" />
      <meta property="og:image" content="https://www.razorinfotech.com/images/Marketing-Branding/marketing-hero-image.png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Digital Marketing & Branding Services by Razor Infotech" />
      <meta name="twitter:description" content="SEO, PPC, social media, content marketing, and branding services that drive engagement, conversions, and business growth." />
      <meta name="twitter:image" content="https://www.razorinfotech.com/images/Marketing-Branding/marketing-hero-image.png" />
      
      <link rel="canonical" href="https://www.razorinfotech.com/services/marketing-branding" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Digital Marketing and Branding Services",
          "provider": {
            "@type": "Organization",
            "name": "Razor Infotech",
            "url": "https://www.razorinfotech.com"
          },
          "description": "Comprehensive digital marketing and branding services including SEO, PPC advertising, social media marketing, content marketing, graphic design, email marketing, video marketing, and online reputation management with data-driven strategies.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Marketing & Branding Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Search Engine Optimization (SEO)"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "PPC Advertising"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Social Media Marketing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Content Marketing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Graphic Design & Branding"
                }
              }
            ]
          }
        })}
      </script>

      <section className="bg-accent p-8 md:p-20" aria-labelledby="hero-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
          <div>
            <img 
              src="/images/Marketing-Branding/marketing-hero-image.png" 
              alt="Digital marketing and branding services illustration"
              className="w-full h-auto rounded-2xl"
              loading="eager"
              width="600"
              height="400"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 id="hero-heading" className="font-semibold text-3xl md:text-4xl lg:text-5xl text-heading leading-tight">
              Reach Your Target Audience With Data-Driven Digital Marketing
            </h1>
            <p className="text-paragraph text-base md:text-lg mt-6 leading-relaxed">
              We combine advanced analytics, creative storytelling, and strategic planning to help businesses attract, engage, and convert potential customers through SEO, PPC advertising, social media, content marketing, and brand building.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16 bg-background" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="border border-secondary rounded-full py-2 px-6 inline-block text-base font-medium text-heading mb-4">
              Our Services
            </span>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-semibold text-heading">
              Comprehensive Marketing & Branding Solutions
            </h2>
            <p className="text-paragraph mt-4 max-w-3xl mx-auto">
              End-to-end digital marketing services to grow your brand and drive measurable results
            </p>
          </div>
          <div className="grid max-w-7xl mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marketingServices.map((c) => (
              <ServiceCard key={c.n} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-accent)] px-6 py-14" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="process-heading" className="text-center text-3xl font-semibold text-[var(--color-heading)] md:text-4xl mb-3">
            Our Marketing Process
          </h2>
          <p className="text-center text-[var(--color-paragraph)]/80 max-w-3xl mx-auto mb-10">
            Strategic approach from discovery to optimization ensuring maximum ROI
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((s) => (
              <StepCard key={s.n} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-12 md:py-16" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 id="blog-heading" className="text-2xl font-semibold text-[var(--color-heading)] md:text-4xl">
              Latest Marketing Insights
            </h2>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
              aria-label="View all blog posts"
            >
              View all blogs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p) => (
              <BlogCard key={p.href} post={p} />
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

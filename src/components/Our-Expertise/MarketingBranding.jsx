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
import Faq from "../../reusable/Faq";





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
        />
        <a
          href={post.href}
          className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[var(--color-heading)] backdrop-blur-sm transition hover:bg-white"
        >
          <span className="inline-flex items-center gap-2">
            Read more <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-[var(--color-heading)]">
        {post.title}
      </h3>
      <p className="mt-2 text-[var(--color-paragraph)]/80">
        {post.excerpt}
      </p>
    </article>
  );
}





function ServiceCard({ n, Icon, title, desc }) {
  return (
    <article className="relative grid place-items-center rounded-2xl bg-[var(--color-accent)] p-8 text-center ring-1 ring-[var(--color-paragraph)]/15 shadow-sm">
      <span
        className="absolute right-4 top-4 rounded-lg px-2 py-1 text-4xl font-semibold text-transparent"
        style={{ WebkitTextStroke: "1px var(--color-paragraph)" }}
      >
        {n}
      </span>
      <span className="mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-[var(--color-secondary)] text-[var(--color-secondary)]">
        <span className="p-2 rounded-2xl bg-white/20">
          <Icon className="h-7 w-7 text-white" />
        </span>
      </span>
      <h3 className="text-[var(--color-heading)] font-semibold leading-tight">
        {title}
      </h3>
      <p className="mt-3 max-w-[46ch] text-sm leading-6 text-[var(--color-paragraph)]/80">
        {desc}
      </p>
      <button className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-paragraph)]/60 hover:text-[var(--color-secondary)] transition">
        Learn more <span>→</span>
      </button>
    </article>
  );
}


function StepCard({ n, title, desc }) {
  return (
    <article className="rounded-[22px] bg-[var(--color-accent)] p-6 shadow-sm ring-1 ring-[var(--color-paragraph)]/15">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--color-secondary)] text-[var(--color-accent)] text-sm font-semibold">
        {n}
      </span>
      <h3 className="mt-6 text-[var(--color-heading)] font-semibold">{title}</h3>
      <p className="mt-2 text-[var(--color-paragraph)]/80 leading-relaxed">{desc}</p>
    </article>
  );
}


export default function MarketingBranding() {

  const allHref = "/blog"

  const POSTS = [
    {
      title: "5 Digital Marketing Strategies Every Business Should Use in 2025",
      excerpt:
        "Discover five powerful digital marketing strategies in 2025 that help businesses boost visibility, engage audiences, and drive sustainable growth.",
      image: "/images/Marketing-Branding/digital-marketing.png",
      href: "/blog/marketing-strategies-2025",
    },
    {
      title:
        "5 Common Branding & Marketing Mistakes Businesses Should Avoid ?",
      excerpt:
        "Avoid these five common branding and marketing mistakes that weaken business growth, reduce customer trust, and damage brand reputation.",
      image: "/images/Marketing-Branding/marketing-and-branding.png",
      href: "/blog/branding-mistakes",
    },
    {
      title:
        "Why is Marketing and Branding important For Business?",
      excerpt:
        "To build a positive brand recognition and loyalty among customers, marketing and branding are important aspects for businesses……",
      image: "/images/Marketing-Branding/common-branding.png",
      href: "/blog/branding-importance",
    },
  ];

  const CARDS = [
    {
      n: "01",
      Icon: TbDeviceDesktopSearch,
      title: "Search Engine Optimization (SEO)",
      desc: "Captivate audiences with our immersive 3D animation services.",
    },
    {
      n: "02",
      Icon: IoIosColorPalette,
      title: "Graphic Designing",
      desc: "Elevate your brand with our impactful design solutions for best UX.",
    },
    {
      n: "03",
      Icon: HiCursorClick,
      title: "Pay-Per-Click (PPC) Advertising",
      desc: "With PPC Ads, our team aims to increase your business’s ROI with highly targeted ad campaigns that provide better results for your business growth and competitive edge.",
    },
    {
      n: "04",
      Icon: FaGlobe,
      title: "Social Media Marketing",
      desc: "To attract customers in the modern era, our social media marketing helps in building relationships, boosting engagement, and growing your community across platforms.",
    },
    {
      n: "05",
      Icon: MdContentCopy,
      title: "Content Marketing",
      desc: "From blog and creative campaigns to infographics and videos, through our content marketing service, businesses can not only attract but also retain more customers in the market.",
    },
    {
      n: "06",
      Icon: PiTarget,
      title: "GMB",
      desc: "With PPC Ads, our team aims to increase your business’s ROI with highly targeted ad campaigns that provide better results for your business growth and competitive edge.",
    },
    {
      n: "07",
      Icon: IoIosMail,
      title: "E-mail Marketing",
      desc: "To attract customers in the modern era, our social media marketing helps in building relationships, boosting engagement, and growing your community across platforms.",
    },
    {
      n: "08",
      Icon: BiSolidVideos,
      title: "Video Marketing",
      desc: "From blog and creative campaigns to infographics and videos, through our content marketing service, businesses can not only attract but also retain more customers in the market.",
    },
    {
      n: "09",
      Icon: AiOutlineAreaChart,
      title: "ORM",
      desc: "With PPC Ads, our team aims to increase your business’s ROI with highly targeted ad campaigns that provide better results for your business growth and competitive edge.",
    },
  ];


  const STEPS = [
    {
      n: 1,
      title: "Defining Goal",
      desc:
        "We start by understanding your audience, vision, and goals with research and collaboration.",
    },
    {
      n: 2,
      title: "Strategize & Design",
      desc:
        "With a clear vision, we craft a tailored strategy and visual identity that reflects the brand’s voice.",
    },
    {
      n: 3,
      title: "Execution",
      desc:
        "Our team brings ideas to life with engaging content and data-driven marketing campaigns.",
    },
    {
      n: 4,
      title: "Launch & Grow",
      desc:
        "The content and campaigns are then made live to monitor performance and optimization.",
    },
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
      <section className="bg-accent p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto">
          <div>
            <img src="/images/Marketing-Branding/marketing-hero-image.png" alt="marketing"/>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-4xl text-heading leading-12 max-w-[80%]">Reach Your Targeted Audience With Data-Driven Digital Marketing</h3>
            <p className="text-paragraph text-lg mt-4 max-w-[80%]">We combine analytics, creativity, and strategy that help businesses in attracting, engaging, and converting potential customers with SEO to paid ads.</p>
          </div>
        </div>
      </section>
      <section className="px-6 py-12 md:py-16 bg-accent">
        <h3 className="border border-secondary rounded-full py-2 px-4 mx-auto w-fit text-xl mb-5">Explore Our Services</h3>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <ServiceCard key={c.n} {...c} />
          ))}
        </div>
      </section>
      <section className="bg-[var(--color-background)] px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
            How We Turn Ideas Into Digital Reality
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <StepCard key={s.n} {...s} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-[var(--color-heading)] md:text-4xl">
              Recent blog posts
            </h2>
            <a
              href={allHref}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              View all blogs <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <BlogCard key={p.href} post={p} />
            ))}
          </div>
        </div>
      </section>
      <Faq faqs={faqs}></Faq>
    </>
  )
}



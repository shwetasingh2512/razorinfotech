import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import {
    Workflow,
    Video,
    Settings2,
    Search,
    Target,
    BarChart3,
} from "lucide-react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Faq from "../../reusable/Faq";


export default function Youtube() {


    const cards = [
        {
            title: "Book-keeping & Accounting",
            desc:
                "Maintain accurate records with error-free bookkeeping and structured accounting. We ensure every transaction is tracked, giving you clarity and control over your finances.",
            image: "/images/financial-services/Book-keeping.png",
            dark: true,
        },
        {
            title: "Cash Flow Management",
            desc:
                "Stay on top of your income and expenses with smart cash flow monitoring. Our solutions help you prevent shortages, manage working capital, and keep your business running smoothly.",
        },
        {
            title: "Tax Filing & Compliance",
            desc:
                "We simplify tax planning and filing, ensuring your startup complies with all regulations. Avoid penalties, save time, and maximize tax benefits with our expert guidance.",
        },
        {
            title: "Budgeting & Forecasting",
            desc:
                "Plan for the future with realistic budgets and financial forecasts. We help you allocate resources wisely and prepare for investments, growth, and unexpected challenges.",
            image: "/images/financial-services/Budgeting.png",
            dark: true,
        },
    ];

    const services = [
        {
            icon: Workflow,
            title: "Strategic Video Planning",
            desc: "Tailored video strategies designed to align with your business goals.",
        },
        {
            icon: Video,
            title: "Professional Video Production",
            desc: "High-quality videos that tell your story and engage viewers effectively.",
        },
        {
            icon: Settings2,
            title: "Channel Optimization",
            desc: "Optimized titles, descriptions, tags, and thumbnails for better visibility.",
        },
        {
            icon: Search,
            title: "SEO & Keyword Targeting",
            desc: "Data-driven keywords to improve rankings on YouTube and Google.",
        },
        {
            icon: Target,
            title: "Targeted Advertising Campaigns",
            desc: "Reach the right audience and maximize ROI across YouTube and Google.",
        },
        {
            icon: BarChart3,
            title: "Analytics & Tracking",
            desc: "Clear insights on views, engagement, and conversions to guide growth.",
        },
    ];


    const items = [
        {
            title: "Cost Efficient",
            desc:
                "Companies that adopt or hire customer support see a decrease in their overall operating expenses. Rather than investing in an in-house team and space, outsourcing comes at an affordable rate.",
        },
        {
            title: "Access to Experts",
            desc:
                "BPO providers employ a team of trained and skilled professionals for service operations. This enables businesses to optimize skilled professionals capable of quick and effective customer handling.",
        },
        {
            title: "Modern Solutions",
            desc:
                "Service providers leverage modern solutions to offer quick and accurate customer responses. It is important to be up-to-date with customer service solutions for enhanced communication.",
        },
        {
            title: "Improved Flexibility",
            desc:
                "With customer support services, businesses are offered enhanced aspects to maintain agility in a dynamic business environment. The services are expandable based on business needs.",
        },
    ];



    const PPC = [
        {
            title: "Expert Team",
            description: "Our experienced professionals bring years of industry expertise to every project ."
        },
        {
            title: "24/7 Support",
            description: "Round-the-clock support to ensure your business operations never stop."
        },
        {
            title: "Scalable Solutions",
            description: "Solutions that grow with your business, from startup to enterprise level."
        },
        {
            title: "Proven Results",
            description: "Track record of helping businesses achieve their growth objectives."
        },
    ]

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
            <section className="px-6 py-12">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 className="text-3xl font-semibold text-heading md:text-4xl max-w-[90%]">
                            Engage, Inspire, and Convert with YouTube
                        </h1>
                        <p className="text-paragraph/80 text-md max-w-[80%]">
                            YouTube isn’t just a video-sharing platform — it’s the world’s second-largest search engine and one of the most influential digital spaces for businesses today. With billions of active users searching, watching, and engaging daily, it offers brands an unparalleled opportunity to connect with audiences where they already spend their time.
                        </p>
                        <p className="text-paragraph/80 text-md max-w-[80%]">
                            Video content has the power to inform, inspire, and emotionally connect like no other medium. Through YouTube video marketing, businesses can showcase their story, highlight their expertise, and build trust with potential customers.
                        </p>
                        <Link
                            to="#"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white"
                        >
                            <span>Get a Free Strategy Call</span>
                            <span className="rounded-full bg-white/20 p-2">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>
                    <div>
                        <img
                            src="/images/youtube/youtube-hero.jpg"
                            alt="youtubehero"
                            className="h-auto rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className=" bg-accent py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-center">
                        <span className="px-4 py-1 rounded-full border border-light-green text-[#2d3a2f] text-sm">
                            Our Services
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold text-heading text-center mt-4">
                        Main Services of Our Content Marketing.
                    </h2>
                    <p className="text-paragraph text-center mt-3">
                        Our Youtube services are built on these <span className="font-medium">Six</span> powerful pillars
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
                        {services.map(({ icon: Icon, title, desc }, i) => (
                            <div
                                key={i}
                                className="bg-[#E7F0EA] rounded-2xl p-6 md:p-7 flex items-start gap-5 shadow-sm"
                            >
                                <div className="w-16 h-16 rounded-xl bg-light-green flex items-center justify-center shrink-0">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-heading font-semibold leading-snug">
                                        {title}
                                    </h3>
                                    <p className="text-paragraph mt-2">
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 py-20">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div>
                        <img
                            src="/images/youtube/Why-It-Matters.png"
                            alt="youtubehero"
                            className="h-auto w-4/5 rounded-2xl object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h1 className="text-3xl font-semibold text-heading md:text-4xl max-w-[90%]">
                            Why It Matters ?
                        </h1>
                        <p className="text-paragraph/80 text-md max-w-[80%]">
                            With millions of apps available on the App Store and Google Play, visibility is everything. Studies show that nearly 65–70% of app downloads come directly from app store searches, which means if your app isn’t optimized, it’s likely being overlooked. App Store Optimization (ASO) ensures your app ranks higher in search results, attracts the right audience, and turns browsers into loyal users.
                        </p>
                        <p className="text-paragraph/80 text-md max-w-[80%]">
                            ASO doesn’t just improve discoverability - it also enhances conversions. Optimized titles, descriptions, screenshots, and reviews build trust and make your app stand out from competitors. Unlike paid ads that stop driving results once the budget ends, ASO creates sustainable, long-term growth by continuously bringing in organic downloads and increasing user engagement.
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-6 py-12 bg-accent">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Our Financial Services For Startup
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
            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Advantages of Outsourcing Customer
                        <br /> Support Services
                    </h2>

                    <div className="mt-10 space-y-10">
                        {items.map((it, idx) => (
                            <div key={idx} className="space-y-3">
                                <span className="text-[var(--color-secondary)] font-medium">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                                    {it.title}
                                </h3>
                                <p className="max-w-[78ch] text-[var(--color-paragraph)]/80">
                                    {it.desc}
                                </p>
                                <hr className="mt-4 border-[var(--color-paragraph)]/20" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-accent p-10">
                <div className="max-w-6xl mx-auto">
                    <div className="head">
                        <h3 className="text-3xl text-heading text-center font-semibold">Why Choose Razor Infotech?</h3>
                        <p className="text-center text-paragraph mt-5">Razor Infotech delivers innovative, high-quality solutions that drive business success.</p>
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

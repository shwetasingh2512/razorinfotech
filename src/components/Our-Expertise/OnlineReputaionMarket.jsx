import { ArrowRight } from "lucide-react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Faq from "../../reusable/Faq";
import {
    Workflow,
    Video,
    Settings2,
    Search,
    Target,
    BarChart3,
} from "lucide-react";

function OnlineReputaionMarket() {
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
            desc: "Data-driven keywords to improve rankings on YouTube and Google.",
        },
        {
            icon: BarChart3,
            title: "Analytics & Tracking",
            desc: "Clear insights on views, engagement, and conversions to guide growth.",
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

    const items = [
        {
            title: "Research & Strategy",
            desc:
                "We begin by understanding your goals, target audience, and competitors to craft a tailored video roadmap that aligns with your brand vision.",
        },
        {
            title: "Content Creation",
            desc:
                "From scripting to production, we create engaging, high-quality videos designed to capture attention, build trust, and inspire action.",
        },
        {
            title: "Optimization & Promotion",
            desc:
                "Every video is optimized with SEO best practices, compelling thumbnails, and strategic ad campaigns to maximize reach and visibility.",
        },
        {
            title: "Anaylsis And Growth",
            desc:
                "We track performance through detailed analytics, refining strategies to ensure consistent improvement and long-term channel growth.",
        },
    ];

    return (
        <>
            <section className="bg-[#E7F0EA] overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                    <div className="px-6 md:px-12 lg:px-16 py-14 md:py-20 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-heading leading-tight max-w-md">
                            Building Trust Through
                            <br /> Reputation
                            <br /> Management
                        </h2>

                        <p className="text-paragraph mt-4 max-w-xl">
                            We safeguard your brand’s identity online, ensuring every
                            interaction strengthens credibility and customer confidence.
                        </p>

                        <a
                            href="#start-campaign"
                            className="mt-8 inline-flex items-center gap-3 w-fit rounded-full border border-[#2F7C3D] px-5 py-3 text-heading hover:bg-black/5 transition"
                        >
                            Start My Campaign Today
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2F7C3D] text-white">
                                <ArrowRight className="h-4 w-4" />
                            </span>
                        </a>
                    </div>

                    <div className="h-64 md:h-[420px] lg:h-full">
                        <img
                            src="/images/orm/orm-hero.jpg"
                            alt="People collaborating on laptops"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-accent py-20 px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
                    <div>
                        <img src="/images/orm/Essential.jpg" alt="why GMB matters ?" className="h-full w-[90%] object-contain rounded-3xl" />
                    </div>
                    <div className="flex flex-col gap-3 justify-center">
                        <span className="text-heading font-semibold text-3xl">Why ORM Is Essential for Your Business</span>
                        <p className="text-paragraph text-base">
                            In today’s digital world, your online reputation shapes how customers perceive and trust your brand. A single negative review, unfavorable search result, or viral complaint can harm credibility and impact sales.<br /><br />
                            Online Reputation Management (ORM) helps businesses protect their image, build customer trust, and maintain a positive presence across search engines, review sites, and social platforms. By actively monitoring and managing what people see and say about your brand, ORM ensures you stay in control of your story.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-[#DDEEC1] to-white px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    <span className="inline-block rounded-full border border-background bg-white/60 px-4 py-1 text-sm text-heading">
                        Our Services
                    </span>

                    <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-heading">
                        Main Services of ORM
                    </h2>
                    <p className="mt-2 text-paragraph">
                        Our Youtube services are built on these Six powerful pillars
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map(({ icon: Icon, title, desc }, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-5"
                            >
                                <div className="w-16 h-16 rounded-xl bg-[#7FB53B] flex items-center justify-center shrink-0">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-heading font-semibold leading-snug">
                                        {title}
                                    </h3>
                                    <p className="text-paragraph mt-2">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-background px-6 py-14">
                <div className="mx-auto max-w-7xl">
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
                <div className="max-w-7xl mx-auto">
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

export default OnlineReputaionMarket

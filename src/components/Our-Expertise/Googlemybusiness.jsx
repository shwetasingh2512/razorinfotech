import { ArrowRight } from "lucide-react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Faq from "../../reusable/Faq";


export default function Googlemybusiness() {

    const benefits = [
        "Increase Conversions",
        "More customer calls and visits",
        "Higher trust and credibility",
        "Improved map rankings",
        "Stronger community engagement",
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

    const cards = [
        {
            title: "Profile Setup & Verification",
            desc:
                "We create and verify your GMB profile to ensure your business appears correctly on Google Search and Maps.",
            image: "/images/googlemybusiness/Profile.jpg",
            dark: true,
        },
        {
            title: "Information Optimization",
            desc:
                "From business hours and categories to services and photos, we optimize every detail to boost visibility and attract customers.",
        },
        {
            title: "Review & Reputation Management",
            desc:
                "Encourage positive reviews, manage customer feedback, and build trust by showcasing a strong brand reputation.",
        },
        {
            title: "Posts & Updates Management",
            desc:
                "Keep your profile active with regular updates, offers, and posts that engage customers and highlight your business.",
            image: "/images/googlemybusiness/Posts.png",
            dark: true,
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
            <section className="px-6 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-semibold text-heading">
                            Google My Business
                            <br /> (GMB) Optimization
                        </h2>

                        <p className="text-paragraph mt-4 max-w-xl">
                            Enhance your local presence with optimized GMB profiles that drive
                            visibility, credibility, and customer engagement.
                        </p>

                        <ul className="mt-6 space-y-4">
                            {benefits.map((b, i) => (
                                <li key={i} className="flex items-center gap-3 text-heading">
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-light-green ring-4 ring-[#E7F0EA]">
                                        <span className="h-2 w-2 rounded-full bg-white" />
                                    </span>
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#optimize-gmb"
                            className="group mt-8 inline-flex items-center rounded-full bg-secondary text-white px-6 py-3 font-medium shadow hover:opacity-95 transition"
                        >
                            Optimize My GMB Profile
                            <span className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/30">
                                <ArrowRight className="h-5 w-5" />
                            </span>
                        </a>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="rounded-[22px] overflow-hidden">
                            <img
                                src="/images/googlemybusiness/google-my-business-hero.jpg"
                                alt="Person using Google on a laptop"
                                className="w-full h-[420px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-accent py-20 px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
                    <div>
                        <img src="/images/googlemybusiness/Business-Matters.jpg" alt="why GMB matters ?" className="h-full w-[90%] object-contain rounded-3xl" />
                    </div>
                    <div className="flex flex-col gap-3 justify-center">
                        <span className="text-heading font-semibold text-3xl">Why Google My Business Matters</span>
                        <p className="text-paragraph text-base">
                            In today’s digital-first world, customers rely on Google to find local businesses. A fully optimized Google My Business (GMB) profile ensures your company appears in local searches and Google Maps—right where customers are looking.<br /><br />
                            GMB matters because it builds trust and credibility. A profile with accurate details, positive reviews, and regular updates increases customer confidence and helps your business stand out among competitors.
                            It also drives real results—whether it’s more calls, website visits, or in-store foot traffic, GMB connects you directly with the customers in your area who are ready to buy.
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-6 py-12 bg-background">
                <div className="mx-auto max-w-7xl">
                    <p className="text-center text-sm border border-light-green rounded-full px-4 py-1 w-fit mx-auto text-light-green mb-6">
                        Our Services
                    </p>
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Our You Tube Marketing Services
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {cards.map((c, i) => (
                            <article
                                key={i}
                                className={`relative overflow-hidden rounded-2xl ring-1 ring-[var(--color-paragraph)]/10 ${c.image ? "p-0" : "bg-[var(--color-accent)] p-6"
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

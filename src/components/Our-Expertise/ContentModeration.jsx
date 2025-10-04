import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Faq from "../../reusable/Faq";
import WhychooseSection from "../../reusable/WhychooseSection";

export default function ContentModeration() {
    const cards2 = [
        {
            title: "Protect Brand Reputation",
            desc:
                "Unmoderated media can risk hosting offensive or harmful content that can damage the reputation of the brand. Moderation keeps your digital presence clean and brand-safe.",
            image: "/images/content-creation/third-section-bg-1.png",
            dark: true,
        },
        {
            title: "Improve User Trust & Safety",
            desc:
                "A safe online environment encourages more interaction and builds community trust. Users feel confident sharing content and engaging on your platform.",
        },
        {
            title: "Legal & Regulatory Compliance",
            desc:
                "Ensure compliance with local and international content policies, data protection laws, and platform-specific regulations with active content screening.",
        },
        {
            title: "Prevent Spam & Abuse",
            desc:
                "Content moderation helps eliminate spam, scams, bots, and abusive behavior, which helps in improving the overall platform experience and user retention.",
            image: "/images/content-creation/third-section-bg-2.png",
            dark: true,
        },
    ];


    const points ={
        background:"bg-gradient-to-r from-unique to-accent",
        image:"/images/Software-developement/y-choose-us.png",
        child: [
        {
            title: "Platform Versatility",
            desc: "We moderate content across websites, apps, forums, social media, eCommerce platforms, and more."
        },
        {
            title: "Secure & Confidential",
            desc: "We follow strict data privacy protocols and ensure confidentiality across all moderation processes."
        },
        {
            title: "Scalable Solutions",
            desc: "Whether you're a startup or enterprise, we scale our services to meet your growing content demands."
        },
        {
            title: "Data-Driven Approach",
            desc: "We use analytics and performance insights to create our content decisions for better ROI."
        },
    ]}


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
        { id: "01", title: "Text-Based Content", desc: "Comments, reviews, chat messages, and posts across websites, forums, and social platforms.", img: "/images/content-moderation/Text-Based.png", variant: "hero" },
        { id: "02", title: "Image Moderation", desc: "Scans and reviews of images to detect explicit, offensive, or brand-damaging visuals.", img: "/images/content-moderation/Image-moderation.png", variant: "light" },
        { id: "03", title: "Video Moderation", desc: "Inspection and moderation of user-uploaded videos for violence, nudity, or policy violations.", img: "/images/content-moderation/Video-Moderation.png", variant: "light" },
        { id: "04", title: "Live Stream Monitoring", desc: "Real-time moderation of live content streams to prevent policy breaches as they happen.", img: "/images/content-moderation/Live-Stream.png", variant: "hero" },
        { id: "05", title: "Profile & User Moderation", desc: "Review of usernames, bios, and profile pictures to ensure community compliance.", img: "/images/content-moderation/Profile.png", variant: "dark" },
        { id: "06", title: "Marketplace Listings", desc: "Moderation of product listings to avoid fake, misleading, or prohibited items on e-commerce platforms.", img: "/images/content-moderation/Marketplace.png", variant: "dark" },
    ];
    return (
        <>
            <section className="px-6 py-12">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 className="text-4xl font-semibold text-heading md:text-5xl max-w-[80%]">
                            Safe, Consistent, & Positive User Experience
                        </h1>
                        <p className="text-paragraph/80 text-lg max-w-[80%]">
                            Our content moderation services help businesses make sure that all the user-generated content aligns with community standards and brand values. Our team of trained and experienced individuals uses tools to monitor and filter content across platforms.
                        </p>
                        <Link
                            to="#"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-5 py-2 group font-semibold hover:border border-secondary hover:text-secondary hover:bg-background text-white"
                        >
                            <span>Talk To An Expert</span>
                            <span className="rounded-full bg-white/20 p-2 group-hover:bg-secondary text-white">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>

                    <div>
                        <img
                            src="/images/content-moderation/content-moderation-hero.png"
                            alt="Content creation hero"
                            className="h-auto w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-12 md:py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <span className="inline-flex items-center rounded-full border border-[var(--color-paragraph)]/20 bg-[var(--color-accent)] px-3 py-1 text-xs font-medium text-[var(--color-paragraph)]/70">
                            Building Success Together
                        </span>
                        <h2 className="text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                            Types of Content We Moderate
                        </h2>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {cards.map(({ id, title, desc, img, variant }) => (
                            <article
                                key={id}
                                className={`relative isolate h-48 overflow-hidden rounded-2xl sm:h-52 lg:h-56 
        ${id === "01" || id === "04" ? "lg:col-span-2" : "lg:col-span-1"}`}
                                style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div
                                    className={
                                        variant === "hero"
                                            ? "absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55"
                                            : variant === "light"
                                                ? "absolute inset-0 bg-black/25 backdrop-blur-[1px]"
                                                : "absolute inset-0 bg-black/40"
                                    }
                                />
                                <div
                                    className="absolute right-4 top-3 text-white/95 text-lg font-semibold"
                                    style={{ WebkitTextStroke: "0.7px rgba(255,255,255,0.35)" }}
                                >
                                    {id}
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-end p-5">
                                    <h3 className="text-base md:text-[17px] font-semibold tracking-[-0.01em] text-white">
                                        {title}
                                    </h3>
                                    {variant === "hero" && <span className="mt-3 mb-2 h-px w-20 bg-white/80" />}
                                    <p
                                        className={`text-sm leading-6 text-white/90 ${variant === "hero" ? "max-w-[44ch]" : "max-w-[46ch]"
                                            }`}
                                    >
                                        {desc}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>
            <section className="px-6 py-12 bg-accent">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Why Businesses Need Content Moderation Services
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                        {cards2.map((c, i) => (
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
            <WhychooseSection points={points}/>
            <Faq faqs={faqs}/>
        </>
    )
}

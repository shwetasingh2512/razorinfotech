import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Faq from "../../reusable/Faq";

export default function ContentCreationServices() {
    const title = "Types of Content We Create";
    const image = "/images/content/desk-notes.jpg";

    const items = [
        "Blog Posts & Articles",
        "Infographics",
        "Social Media Content",
        "Video Content",
        "Email Newsletters",
        "Website Content",
    ];


    const cards = [
        {
            title: "Greater Brand Visibility",
            desc:
                "High-quality content is what makes companies visible on search engines, social media sites, and stands out in the market to reach new and existing customers.",
            image: "/images/content-creation/third-section-bg-1.png",
            dark: true,
        },
        {
            title: "Customer Engagement",
            desc:
                "Content is a bridge between your brand and the customer with relevant stories, informative updates, and visually appealing media that strengthen ties with your audience.",
        },
        {
            title: "Improved SEO Performance",
            desc:
                "Search engines prefer recent, informative, and optimized content. With the right content creation, your brand sees improved search rankings, generating organic traffic and quality leads.",
        },
        {
            title: "Thought Leadership & Credibility",
            desc:
                "High-quality content establishes your brand as an expert in your field. Thought leadership via articles, whitepapers, or industry perspectives builds credibility and influences decision-making.",
            image: "/images/content-creation/third-section-bg-2.png",
            dark: true,
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

     const points = [
        {
            title: "Custom Tailored Content",
            description: "Every piece of created content is customized to your brand, audience, and goals."
        },
        {
            title: "Skilled & Expert Team",
            description: "Our team has expert writers, editors, designers, and marketers who understand both creativity and business objectives.."
        },
        {
            title: "Scalable Solutions",
            description: "Whether you're a startup or enterprise, we scale our services to meet your growing content demands."
        },
        {
            title: "Data-Driven Approach",
            description: "We use analytics and performance insights to create our content decisions for better ROI."
        },
    ]



    return (
        <>
            <section className="px-6 py-12">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 className="text-4xl font-semibold text-heading md:text-5xl max-w-[80%]">
                            Engaging, Relevant, and Impactful Brand Communication
                        </h1>
                        <p className="text-paragraph/80 text-lg max-w-[80%]">
                            Businesses can use content creation services to create ideas and stories that relate to their target audience. Blogs, articles, social media posts, videos, infographics, and other formats are all included in this. With the help of our service, engage users on digital platforms and match your brand tone.
                        </p>
                        <Link
                            to="#"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-5 py-3 font-bold text-white"
                        >
                            <span>Get Your Content Now</span>
                            <span className="rounded-full bg-white/20 p-3">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>

                    <div>
                        <img
                            src="/images/content-creation/content-creation-hero-image.png"
                            alt="Content creation hero"
                            className="h-auto w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[18px]">
                        <img src={"/images/content-creation/types.png"} alt="Desk notes" className="w-4/5 object-cover" loading="lazy" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold leading-tight text-[var(--color-heading)] md:text-4xl">
                            <span className="block md:inline">Types of Content We Create</span>
                        </h2>
                        <div className="mt-8 overflow-x-auto">
                            <ul className="flex flex-col gap-8 whitespace-nowrap pr-2">
                                {items.map((t, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[var(--color-heading)]">
                                        <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </span>
                                        <span className="text-xl">{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-12">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Why Businesses Need Content Creation Services
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
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
             <section className="p-16 linear-gradient">
                <div className="py-8 px-52">
                    <h3 className="text-4xl font-semibold text-heading">Why Choose Razor Infotech</h3>
                    <p className="text-base text-paragraph mt-5 max-w-[35%]">We go beyond being just a service provider - we become your long-term partner. Our approach combines expertise, technology, and strategy tailored to your unique needs. With us, you gain solutions that scale as your business grows.</p>
                </div>
                <div className="flex gap-20 max-w-8xl justify-center">
                    <div className="p-4">
                        <img src="/images/content-creation/y-choose-image.png" alt="Why Choose Razor Infotech" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5 ">
                        {
                            points.map((e, i) => (
                                <div>
                                    <div className="h-12 w-12 flex justify-center items-center bg-accent p-2 text-secondary font-bold rounded-br-3xl">{i + 1}</div>
                                    <h4 className="text-2xl font-semibold text-heading mt-4">{e.title}</h4>
                                    <p className="text-lg text-paragraph mt-4 max-w-[40ch]">{e.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Faq faqs={faqs}/>
        </>
    );
}

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";
import {
    FileText,
    Layout,
    X,
    Mail,
    Video,
    Calendar,
} from "lucide-react";
import Faq from "../../reusable/Faq";


export default function ContentMarketing() {

    const headpoints = [
        "SEO-Optimized Content",
        "Multi-Channel Distribution",
        "Data-Driven Insights",
    ]

    const features = [
        {
            icon: FileText,
            title: "Blog & Article Writing",
            desc: "Our team creates SEO-friendly blogs and articles that help in attracting organic traffic with informative content.",
        },
        {
            icon: Layout,
            title: "Website Content Creation",
            desc: "Providing website content that engages and communicates a brand’s story to convert visitors into loyal customers.",
        },
        {
            icon: X,
            title: "Social Media Content",
            desc: "Creations of innovative and creative posts, captions, and visual design that boost engagement and build community.",
        },
        {
            icon: Mail,
            title: "Email Marketing Campaigns",
            desc: "Creating email content that helps in nurturing leads and strengthening customer relationships with the brand.",
        },
        {
            icon: Video,
            title: "Video & Visual Content",
            desc: "We provide attention-grabbing videos, infographics, and graphics that play an important role in increasing brand visibility..",
        },
        {
            icon: Calendar,
            title: "Content Strategy & Planning",
            desc: "A tailored roadmap to ensure your content aligns with business goals and delivers consistent results.",
        },
    ];


    const contentProcess = [
        {
            id: "1",
            title: "Research & Strategy",
            desc: "It starts by analyzing the audience, competitors, and market trends to define a solid content plan.",
        },
        {
            id: "2",
            title: "Content Planning",
            desc: "After that, kinds of topics, formats, and channels are mapped out to align with the business goals.",
        },
        {
            id: "3",
            title: "Content Creation",
            desc: "Ensuring high-quality, engaging, and optimized content is crafted for better customer interaction.",
        },
        {
            id: "4",
            title: "Multi-Channel Distribution",
            desc: "The content is then published across platforms where the audience is most active, from the website to social media.",
        },
        {
            id: "5",
            title: "Promotion",
            desc: "Then the boosting of reach is done with SEO, social shares, and paid promotions where it is needed.",
        },
        {
            id: "6",
            title: "Performance Tracking",
            desc: "Regular tracking and performance reviews are done to measure, and strategies are refined for continuous growth.",
        },
    ];

    const items = [
        {
            title: "Boosts Brand Awareness",
            desc:
                "Content marketing helps businesses reach more people and make their brand recognizable in a crowded market, and gives businesses a competitive edge.",
        },
        {
            title: "Drives Organic Traffic",
            desc:
                "SEO-friendly content helps businesses in bringing long-term visibility on the search engines and creates a positive brand image for customers to trust. ",
        },
        {
            title: "Build Authority & Trust",
            desc:
                "Businesses can position themselves among the top competitors with valuable, insightful content that gives them a boost in customer trust.",
        },
        {
            title: "Supports Sales & Conversions",
            desc:
                "Content marketing also nurtures leads with the help of engaging content that moves them closer to purchase, increasing the conversion rate.",
        },
        {
            title: "Cost-Effective Marketing",
            desc:
                "This service delivers long-term ROI as compared to short-term paid ads for your business and boosts your sales and revenue.",
        },
        {
            title: "Improves Customer Engagement ",
            desc:
                "It plays an important role in creating lasting connections and encourages customer interaction with your business, and enhances customer experience.",
        },
    ];



     const reasons = [
        {
            title: "Industry Expertise",
            description: "Our team understands multiple industries, creating content that speaks directly to your audience."
        },
        {
            title: "Tailored Strategies",
            description: "We design unique content plans aligned with your business goals, not cookie-cutter approaches."
        },
        {
            title: "Result-Driven Approach",
            description: "We focus on measurable outcomes - more traffic, leads, and conversions."
        },
        {
            title: "Transparent Collaboration",
            description: "Regular updates and reports keep you informed every step of the way."
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
                            Driving Engagement & Growth With Content Marketing
                        </h1>
                        <p className="text-paragraph/80 text-md max-w-[80%]">
                            Our team of experts crafts content that informs, inspires, and converts. From blogs to social media campaigns, we help businesses in building authority, attracting the right audience, and achieving measurable results for their business goals.                        </p>
                        <div className="mt-4 grid grid-cols-1 gap-1">
                            {
                                headpoints.map((e, i) => (
                                    <div className="flex gap-4 items-center">
                                        <span><FaDotCircle className="text-light-green" /></span>
                                        <span className="text-base">{e}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <Link
                            to="#"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white"
                        >
                            <span>Boost My Online Growth</span>
                            <span className="rounded-full bg-white/20 p-2">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>

                    <div>
                        <img
                            src="/images/seo/seo-hero.png"
                            alt="Content creation hero"
                            className="h-auto w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-accent py-16 px-4 flex justify-center">
                <div className="max-w-6xl w-full text-center">
                    <div className="inline-flex items-center px-4 py-1 rounded-full bg-green-700 text-white text-sm shadow mb-4">
                        Our Features
                    </div>
                    <h2 className="text-heading font-bold mb-2">
                        Main Features of Our Content Marketing.
                    </h2>
                    <p className="text-paragraph max-w-3xl mx-auto mb-10">
                        With a team of skilled and experienced individuals, we provide tailored service that is defined by a business's goals, values, and voice.

                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => {
                            const Icons = feature.icon
                            return (
                                <div
                                    key={feature.id}
                                    className="flex gap-4 p-5 bg-background rounded-xl shadow"
                                >
                                    <div className="flex-shrink-0">

                                        <span className="w-12 h-12 rounded-2xl bg-light-green text-white flex items-center justify-center text-sm font-bold">
                                            <Icons />
                                        </span>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-heading font-semibold mb-1">
                                            {feature.title}
                                        </h4>
                                        <p className="text-paragraph">{feature.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-unique to-accent py-16 px-4 flex justify-center">
                <div className="max-w-6xl w-full text-center">
                    <h2 className="text-heading font-bold mb-2 text-3xl">
                        Working Process of Content Marketing
                    </h2>
                    <p className="text-paragraph max-w-3xl mx-auto mb-10">
                        For a great work, it needs a proper structure for each step of the process, and so does content marketing.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {contentProcess.map((feature) => (
                            <div
                                key={feature.id}
                                className="flex gap-4 p-5 bg-background rounded-xl shadow"
                            >
                                <div className="flex-shrink-0">

                                    <span className="w-12 h-12 rounded-full bg-light-green text-white flex items-center justify-center text-sm font-bold">
                                        {feature.id}
                                    </span>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-heading font-semibold mb-1">
                                        {feature.title}
                                    </h4>
                                    <p className="text-paragraph">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-accent px-6 py-14">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Benefits of Content Marketing
                    </h2>

                    <div className="mt-10 space-y-10">
                        {items.map((it, idx) => (
                            <div key={idx} className="space-y-3">
                                <span className="text-light-green font-medium text-2xl">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                                    {it.title}
                                </h3>
                                <p className="max-w-[100ch] text-[var(--color-paragraph)]/80">
                                    {it.desc}
                                </p>
                                <hr className="mt-4 border-[var(--color-paragraph)]/20" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 px-4 bg-gradient-to-b from-unique to-accent">
                <div className="max-w-6xl mx-auto items-center">
                    <div>
                        <h2 className="text-heading font-bold mb-3">
                            Why Choose Razor Infotech
                        </h2>
                        <p className="text-paragraph mb-8 max-w-lg">
                            We go beyond being just a service provider – we become your
                            long-term partner. Our approach combines expertise, technology, and
                            strategy tailored to your unique needs. With us, you gain solutions
                            that scale as your business grows.
                        </p>

                    </div>
                    <div className="flex gap-32">
                        <img
                            src="/images/content-marketing/why-choose.png"
                            alt="Why Choose Razor Infotech"
                            className="rounded-xl object-cover w-full h-64 md:h-80 lg:h-[22rem]"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {reasons.map((reason) => (
                                <div key={reason.id} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-md bg-green-100 flex items-center justify-center text-green-700 font-bold shadow-sm">
                                            {reason.id}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-heading font-semibold mb-1">
                                            {reason.title}
                                        </h3>
                                        <p className="text-paragraph">{reason.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Faq faqs={faqs} />
        </>
    )
}

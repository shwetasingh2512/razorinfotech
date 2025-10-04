import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Megaphone, Users, Zap, Monitor } from "lucide-react";
import WhychooseSection from "../../reusable/WhychooseSection";
import Faq from "../../reusable/Faq";

export default function ContentManagement() {

    const items = [
        {
            icon: <Users className="w-6 h-6 text-white" />,
            title: "Maintain Brand Consistency",
            description:
                "With content management, businesses can be consistent with the tone, style, and voice across all platforms, which helps gain the trust of the targeted audience.",
            image: "/images/content-management/Maintain-Brand.png",
        },
        {
            icon: <Zap className="w-6 h-6 text-white" />,
            title: "Improve Work Efficiency",
            description:
                "The support of a skilled and trained content management team helps businesses to have a smooth workflow, reducing time-to-market and internal bottlenecks.",
            image: "/images/content-management/Improve-Work.jpg",
        },
        {
            icon: <Monitor className="w-6 h-6 text-white" />,
            title: "Enhance User Engagement",
            description:
                "The content management services ensure that the business stays relevant and up-to-date to keep the users engaged, which helps improve time-on-site and leads to higher conversions.",
            image: "/images/content-management/Enhance-User.jpg",
        },
        {
            icon: <Megaphone className="w-6 h-6 text-white" />,
            title: "Support Marketing & SEO",
            description:
                "With the help of content management, businesses get a boost in SEO performance along with support campaigns that ensure their brand appears in the right searches.",
            image: "/images/content-management/Support-Marketing.jpg",
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

    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/Software-developement/y-choose-us.png",
        child: [
            {
                title: "Expert Content Teams",
                desc: "Our team of professionals understands industry-specific needs and ensures high-quality, accurate content delivery."
            },
            {
                title: "Custom Workflow Integration",
                desc: "We tailor our services to your tools, platforms, and workflows for a smooth integration with your internal systems."
            },
            {
                title: "Cross-Platform Support",
                desc: "Whether it's websites, mobile apps, marketplaces, blogs, or social media, we manage content across all digital touchpoints."
            },
            {
                title: "Scalable Content Operations",
                desc: "From small businesses to enterprise-scale websites, we handle content volumes that grow with your digital presence."
            },
        ]
    };


    const posts = [
        {
            id: 1,
            title:
                "Top 5 Content Management Systems Compared: Which One is Right for You?",
            excerpt:
                "Business Process Outsourcing has been a strategic way for companies who aim to simplify non-core ....",
            image: "/images/content-management/Top-5.jpg",
            href: "/blog/cms-compared",
        },
        {
            id: 2,
            title: "How a Good CMS Improves Your SEO Rankings",
            excerpt:
                "Have you ever wondered how some businesses convert their first-time buyers into loyal long-term fans? ....",
            image: "/images/content-management/Good-CMS.jpg",
            href: "/blog/cms-and-seo",
        },
        {
            id: 3,
            title:
                "AI in Content Management: Transforming How Businesses Handle Digital Assets",
            excerpt:
                "To build a positive brand recognition and loyalty among customers, marketing and branding are ....",
            image: "/images/content-management/AI.jpg",
            href: "/blog/ai-in-cms",
        },
    ];

    return (
        <>
            <section className=" bg-accent px-6 py-12">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 className="text-3xl font-semibold text-heading md:text-4xl max-w-[90%]">
                            Moderating, Engaging, & Growing Brand
                        </h1>
                        <p className="text-paragraph/80 text-md max-w-[80%]">
                            Our team of experts helps businesses streamline content workflows, ensure brand consistency, and keep digital assets up to date. With our services, we manage your content so that it drives engagement, enhances visibility, and delivers real business value.
                        </p>
                        <Link
                            to="#"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white"
                        >
                            <span>Simplify My Workflow</span>
                            <span className="rounded-full bg-white/20 p-2">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>
                    <div>
                        <img
                            src="/images/content-management/content-management-hero.png"
                            alt="Content creation hero"
                            className="h-auto w-full rounded-2xl object-cover"
                        />
                    </div>

                </div>
            </section>

            <section className="bg-accent py-16 px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-heading">
                        Why Businesses Need Content Management Services
                    </h2>
                    <p className="text-paragraph mt-3">
                        We deliver tailored marketing solutions designed to scale your brand
                        and drive measurable results from brand building to data-led campaigns.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-background rounded-2xl shadow-sm p-5 flex flex-col"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-lg w-full h-40 object-cover"
                            />
                            <div className="flex items-center mt-4">
                                <div className="bg-secondary p-2 rounded-full">{item.icon}</div>
                            </div>
                            <h3 className="text-xl font-semibold text-heading text-center mt-3">
                                {item.title}
                            </h3>
                            <p className="text-paragraph text-center mt-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <WhychooseSection points={points} />
            <section className="bg-[#E7F0EA] py-14 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="text-3xl font-semibold text-heading">
                            Recent blog posts
                        </h2>
                        <a
                            href="/blog"
                            className="inline-flex items-center font-semibold gap-2 border rounded-full px-4 py-2 hover:bg-black/5 transition"
                        >
                            View all posts
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {posts.map((post) => (
                            <article key={post.id} className="group">
                                <div className="relative rounded-[24px] overflow-hidden shadow-sm bg-white">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-64 w-full object-cover"
                                    />
                                    <a
                                        href={post.href}
                                        className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 shadow inline-flex items-center gap-2 text-sm font-medium hover:translate-x-0.5 transition"
                                    >
                                        Read more <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>

                                <h3 className="mt-4 text-lg font-semibold text-heading leading-snug">
                                    {post.title}
                                </h3>

                                <p className="mt-2 text-paragraph line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <Faq faqs={faqs} />
        </>
    )
}

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";
import Faq from "../../reusable/Faq";


export default function Seo() {

    const headpoints = [
        "Visibility at the Right Time",
        "Long-Term ROI",
        "Scalable impact",
        "Build Credibility"
    ]


    const features = [
        {
            id: "01",
            title: "Comprehensive SEO Audit",
            desc: "Identifying growth and performance gaps with web analysis.",
        },
        {
            id: "02",
            title: "On-Page Optimization",
            desc: "Optimization of content, meta tags, and structure for search visibility.",
        },
        {
            id: "03",
            title: "Technical SEO",
            desc: "Enhance speed, mobile usability, and indexing for stronger site performance.",
        },
        {
            id: "04",
            title: "Off-Page SEO & Link Building",
            desc: "Building authority with quality backlinks, outreach, and digital PR strategies.",
        },
        {
            id: "05",
            title: "Performance Tracking & Reporting",
            desc: "Reporting insights on traffic, rankings, and measurable ROI.",
        },
        {
            id: "06",
            title: "Local SEO",
            desc: "Offering services that help in optimizing local searches to attract customers.",
        },
    ];


    const steps = [
        {
            id: "01",
            title: "SEO Audit & Research",
            desc:
                "Our team starts with a detailed website audit, competitor analysis, and keyword research to identify opportunities for growth.",
        },
        {
            id: "02",
            title: "Development of Strategy",
            desc:
                "Based on the research and audits, we create a tailored SEO roadmap designed to boost rankings and increase ROI.",
        },
        {
            id: "03",
            title: "On-Page & Technical Optimization",
            desc:
                "Our team then works on optimizing site structure, content, and technical elements to improve visibility and user experience.",
        },
        {
            id: "04",
            title: "Off-Page SEO",
            desc:
                "We create and build high-quality backlinks that strengthen brand authority through ethical outreach practices for growth.",
        },
        {
            id: "05",
            title: "Monitoring & Reporting",
            desc:
                "Our team does regular performance monitoring to keep track with clear reports, ensuring transparency and measurable progress.",
        },
    ];

    const reasons = [
        {
            id: "01",
            title: "Data-Driven Strategies",
            desc: "Each and every step of our work process is backed by in-depth research, analytics, and market insights to maximize results.",
        },
        {
            id: "02",
            title: "Focus on ROI & Growth",
            desc: "Our ultimate goal is not just higher rankings, but measurable business growth through more leads and conversions.",
        },
        {
            id: "03",
            title: "Proven Expertise & Experience",
            desc: "With skills and expertise in the field, our team combines technical skills and business insights to deliver strategies that work.",
        },
        {
            id: "04",
            title: "Tailored Solutions for Every Business",
            desc: "We use analytics and performance insights to create our content decisions for better ROI.",
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
            <section className="px-6 py-12">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 className="text-3xl font-semibold text-heading md:text-4xl max-w-[90%]">
                            Get Found By Your Targeted Customers
                        </h1>
                        <p className="text-paragraph/80 text-md max-w-[80%]">
                            SEO strategies help your website to rank higher on search engine results such as Google, which contributes to attracting qualified traffic and generating more leads. If your business isn’t showing up there, you require our expert help.
                        </p>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                headpoints.map((e, i) => (
                                    <div className="flex gap-4 items-center">
                                        <span><FaDotCircle /></span>
                                        <span className="text-base">{e}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <Link
                            to="#"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white"
                        >
                            <span>Talk To An Expert</span>
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
            <section className="bg-gradient-to-b from-unique to-accent p-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap- max-w-6xl mx-auto">
                    <div>
                        <img src="/images/seo/SEO-Matters.png" alt="seo-matter" className="w-4/5" />
                    </div>
                    <div className="place-content-center">
                        <h2 className="text-heading text-3xl">Why SEO Matters in Business Growth?</h2>
                        <p className="text-paragraph text-base mt-4 max-w-[60ch]">SEO matters for any type of business because it increases the online visibility and organic traffic on the website, which drives sales. From higher conversion rates to more qualified leads, SEO is the tool and strategy that helps by improving business ranking in search results, building credibility, and brand awareness. SEO provides a significant return on investment over time and offers valuable market insights on what potential customers are searching for. </p>
                    </div>
                </div>
            </section>
            <section className="bg-accent py-16 px-4 flex justify-center">
                <div className="max-w-6xl w-full text-center">
                    <div className="inline-flex items-center px-4 py-1 rounded-full bg-green-700 text-white text-sm shadow mb-4">
                        Our Features
                    </div>
                    <h2 className="text-heading font-bold mb-2">
                        Main Features of Our SEO Services
                    </h2>
                    <p className="text-paragraph max-w-3xl mx-auto mb-10">
                        With a team of skilled experts, we work together with businesses to
                        improve search engine rankings, drive qualified traffic, increase
                        visibility, and ultimately generate more leads and revenue for your
                        business.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="flex gap-4 p-5 bg-background rounded-xl shadow"
                            >
                                <div className="flex-shrink-0">

                                    <span className="w-12 h-12 rounded-2xl bg-green-700 text-white flex items-center justify-center text-sm font-bold">
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

            <section className="bg-accent py-16 px-4 flex justify-center">
                <div className="max-w-6xl w-full">
                    <div className="flex items-start justify-between gap-6 mb-6">
                        <div>
                            <div className="inline-flex items-center px-4 py-1 rounded-full bg-secondary text-white text-sm shadow mb-4">
                                Our Process
                            </div>
                            <h2 className="text-heading font-bold">
                                How Our SEO Service Working Process Goes
                            </h2>
                            <p className="text-paragraph max-w-3xl mb-10 mt-4">
                                At Razor Infotech, we provide tailored solutions that are designed to
                                be clear, strategic, and result-driven. Each step of our work process
                                ensures your website gains higher visibility, attracts the right
                                audience, and delivers measurable business growth.
                            </p>
                        </div>

                        <img
                            src={"/images/seo/illusteration.png"}
                            alt="Process Illustration"
                            className="hidden md:block w-1/5 h-auto object-contain"
                        />

                    </div>



                    <div className="space-y-8">
                        {steps.map((s) => (
                            <div
                                key={s.id}
                                className="grid grid-cols-1 md:grid-cols-12 items-start gap-6"
                            >
                                <div className="md:col-span-5 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-semibold">
                                        {s.id}
                                    </div>
                                    <h3 className="text-heading font-semibold">{s.title}</h3>
                                </div>

                                <div className="md:col-span-7">
                                    <p className="text-paragraph">{s.desc}</p>
                                </div>
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
                            src="/images/seo/why-choose.png"
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

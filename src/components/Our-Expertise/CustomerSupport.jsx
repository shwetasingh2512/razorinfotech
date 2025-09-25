import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Medal, GraduationCap } from "lucide-react";
import { Inbox, Send, Mail, Link2 } from "lucide-react";

function CustomerSupport() {

    const stats = [
        {
            icon: <Medal className="w-6 h-6 text-white" />,
            value: "7 Years+",
            label: "Experience in the Industry"
        },
        {
            icon: <GraduationCap className="w-6 h-6 text-white" />,
            value: "400+",
            label: "Trained Professionals"
        },
        {
            icon: <Medal className="w-6 h-6 text-white" />,
            value: "100%",
            label: "Customer Satisfaction"
        }
    ];


    const services = [
        {
            icon: <Inbox className="w-6 h-6 text-white" />,
            title: "INBOUND SERVICES",
            description:
                "From inquiries to issue resolution, we provide fast, reliable inbound services that keep your customers engaged and satisfied.",
            link: "#"
        },
        {
            icon: <Send className="w-6 h-6 text-white" />,
            title: "OUTBOUND SERVICES",
            description:
                "Upgrade your business level with top-quality outbound call services. We are offering enhanced outbound support to businesses of every size.",
            link: "#"
        },
        {
            icon: <Link2 className="w-6 h-6 text-white" />,
            title: "OMNICHANNEL SUPPORT SERVICES",
            description:
                "Omnichannel services are a smooth, consistent, and connected way to communicate and enhance customer experience via multiple platforms.",
            link: "#"
        },
        {
            icon: <Mail className="w-6 h-6 text-white" />,
            title: "EMAIL SUPPORT SERVICES",
            description:
                "Our email support service method provides business support using their email to address customer inquiries, issues, and offer assistance.",
            link: "#"
        }
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
        {
            title: "Customized Customer Service",
            desc:
                "Providers like Razor Infotech offer businesses of every size personalized customer service. It enhances the relation between customer and brand, where they feel valued.",
        },
        {
            title: "Focus on Core Activities",
            desc:
                "Outsourcing customer service support frees up businesses' in-house resources and team to focus on core activities. Business can concentrate on planning, product, and business development.",
        },
    ];

    const points = [
        {
            title: "Reliable Expertise of Years",
            description: "We have experience of over 7+ years in the field and have built a reputation among our clients for delivery of consistent, reliable, and high-quality customer support in multiple industries."
        },
        {
            title: "Trained & Skilled Team",
            description: "We take pride in our team of professionals, as they aim to deliver swift, accurate, and smooth customer care. Our team is trained to manage high call volumes and resolve complex issues."
        },
        {
            title: "Top-Notch Customer Satisfaction",
            description: "Every business has its own needs and goals, for which our services are designed to be customized to align with your specific brand needs, expectations, and operational structure."
        },
        {
            title: "Customized to Your Needs",
            description: "AAt Razor Infotech, providing our clients with 100% customer satisfaction is not just a goal; it is a standard. We are committed to building brand loyalty and strong market image for businesses."
        },
    ]


    

    return (
        <>
            <section className="px-6 py-20">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div>
                        <img
                            src="/images/customer-support-services/contact-support-hero.png"
                            alt="Customer-support-services"
                            className="h-auto w-4/5 rounded-2xl object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h1 className="text-4xl font-semibold text-heading md:text-5xl leading-16 ">
                            Support That Enhances Your Customer Engagement
                        </h1>
                        <p className="text-paragraph/80 text-lg ">
                            Customer support services offer a wide range of operational tasks associated with direct customer interactions regarding issues, queries, and sales related to products or services.
                        </p>
                        <p className="text-paragraph/80 text-lg">With Razor Infotech, you are offered elevated customer satisfaction and engagement. Our team of trained professionals aims to provide businesses of every size with customized and smooth assistance through the service. Proper, quick, and accurate response to a customer's need for help enhances communication and builds a positive reputation.</p>
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

                </div>
            </section>
            <section className="bg-accent px-10 py-20">
                <div>
                    <h3 className="text-4xl mx-auto text-heading font-semibold text-center">Customer Support That Offers Experience & Expertise</h3>
                    <p className="text-paragraph text-base text-center mt-5 max-w-[70ch] mx-auto">At Razor Infotech, we have a working experience in the industry with a satisfied client base that's been across various sectors.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mx-auto max-w-7xl">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex gap-8 items-center justify-center rounded-2xl bg-green-50 py-8 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-4">
                                {stat.icon}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">{stat.value}</h2>
                                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="px-6 py-14 bg-accent">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl">
                        <img
                            src="/images/customer-support-services/Services.png"
                            alt="Customer support team"
                            className="h-auto w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <span className="inline-flex items-center rounded-full border border-[var(--color-secondary)]/40 bg-[var(--color-accent)] px-4 py-1 text-sm font-medium text-[var(--color-secondary)]">
                            Our Services
                        </span>

                        <h2 className="mt-4 text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                            Customer Support Services
                        </h2>

                        <p className="mt-4 max-w-[55ch] text-[var(--color-paragraph)]/80 leading-relaxed">
                            We combine a personalized approach with advanced tools and technologies to deliver
                            seamless and effective support experiences. Whether it’s resolving queries, offering
                            technical assistance, or providing product guidance, our team ensures every interaction
                            is meaningful and efficient.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-accent py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-accent max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-start gap-4 p-16 rounded-4xl bg-background shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary flex-shrink-0">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-heading">
                                    {service.title}
                                </h3>
                                <p className="text-paragraph text-sm mt-1">{service.description}</p>
                                <a
                                    href={service.link}
                                    className="text-green-700 text-sm font-medium mt-2 inline-block hover:underline"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14">
                <div className="mx-auto max-w-5xl">
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
            <section className="p-16 bg-accent">
                <div className="py-8 px-52">
                    <h3 className="text-4xl font-semibold text-heading">Why Choose Razor Infotech</h3>
                    <p className="text-lg text-paragraph mt-5 max-w-[30%]">We go beyond being just a service provider - we become your long-term partner. Our approach combines expertise, technology, and strategy tailored to your unique needs. With us, you gain solutions that scale as your business grows.</p>
                </div>
                <div className="flex gap-20 max-w-8xl justify-center">
                    <div className="p-4">
                        <img src="/images/Software-developement/y-choose-us.png" alt="Why Choose Razor Infotech" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                        {
                            points.map((e, i) => (
                                <div>
                                    <div className="h-12 w-12 flex justify-center items-center bg-background p-2 text-secondary font-bold rounded-br-3xl">{i + 1}</div>
                                    <h4 className="text-2xl font-semibold text-heading mt-4">{e.title}</h4>
                                    <p className="text-lg text-paragraph mt-4 max-w-[40ch]">{e.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default CustomerSupport

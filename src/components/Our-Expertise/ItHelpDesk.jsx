import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Faq from "../../reusable/Faq";

export default function ItHelpDesk() {

    const services = [
        "Ticketing System Management",
        "IT Asset & Inventory Management",
        "Application Support",
        "Network Connectivity Support",
        "Password Resets & User Access Control",
        "Virus & Malware Removal",
        "System Monitoring & Alert Management",
        "Hardware & Software Troubleshooting",
    ];

    const cards = [
        {
            id: "01",
            title: "Small & SMEs",
            desc:
                "Small and medium-sized businesses often lack a full in-house IT team. Outsourcing help desk is affordable and professional tech support.",
            img: "/images/It-help-desk/Small-SMEs.png",
        },
        {
            id: "02",
            title: "Healthcare Providers",
            desc:
                "Organizations in the healthcare sector heavily rely on outsourced IT system support to ensure the protection of patient data and support critical software uptime.",
            img: "/images/It-help-desk/Healthcare.png",
        },
        {
            id: "03",
            title: "Educational Institutions",
            desc:
                "Educational institutions such as schools, colleges, and coaching centers require an IT help desk for fast tech support.",
            img: "/images/It-help-desk/Educational.png",
        },
        {
            id: "04",
            title: "Finance & Legal Firms",
            desc:
                "The finance and legal sector demand secure, compliant IT help desk support that ensures a strong focus on data protection and regulatory standards.",
            img: "/images/It-help-desk/Finance.png",
        },
        {
            id: "05",
            title: "E-commerce Businesses",
            desc:
                "In e-commerce, downtime means losing sales. The IT help desk keeps the brand’s POS systems and internal tools running smoothly.",
            img: "/images/It-help-desk/E-commerce.png",
        },
    ];


    const points = [
        {
            title: "Platform Versatility",
            description: "We moderate content across websites, apps, forums, social media, eCommerce platforms, and more."
        },
        {
            title: "Secure & Confidential",
            description: "We follow strict data privacy protocols and ensure confidentiality across all moderation processes."
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
                            Resolving Tech Issues Fast & Minimizing Downtime
                        </h1>
                        <p className="text-paragraph/80 text-md max-w-[80%]">
                            Razor Infotech's IT Help Desk is your frontline support system for all the technical queries, issues, and troubleshooting. We ensure that your business operations face minimal disruption with our rapid resolutions for hardware, software, and system-related problems.
                        </p>
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
                            src="/images/It-help-desk/It-help-desk-hero.png"
                            alt="Content creation hero"
                            className="h-auto w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-accent px-6 py-14">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="/images/It-help-desk/Our-IT-Help.png"
                            alt="IT Help Desk Services"
                            className="h-auto w-4/5 object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                            Our IT Help Desk Services Include
                        </h2>

                        <ul className="mt-6 space-y-4">
                            {services.map((s, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 text-[var(--color-heading)]"
                                >
                                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </span>
                                    <span className="text-lg">{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-12 md:py-16">
                <div className="mx-auto max-w-6xl">
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
        ${id === "01" || id === "04" || id === "05" ? "lg:col-span-2" : "lg:col-span-1"}`}
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
            <section className="p-16 bg-gradient-to-b from-unique to-accent">
               <div className="max-w-6xl mx-auto">
                 <div className="py-8 px-4">
                    <h3 className="text-4xl font-semibold text-heading">Why Choose Razor Infotech</h3>
                    <p className="text-md text-paragraph mt-5 max-w-[45%]">We go beyond being just a service provider - we become your long-term partner. Our approach combines expertise, technology, and strategy tailored to your unique needs. With us, you gain solutions that scale as your business grows.</p>
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
                                    <h4 className="text-xl font-semibold text-heading mt-4">{e.title}</h4>
                                    <p className="text-sm text-paragraph mt-4 max-w-[40ch]">{e.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
               </div>
            </section>
            <Faq faqs={faqs} />
        </>
    )
}

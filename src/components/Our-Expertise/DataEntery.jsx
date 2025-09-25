import { Inbox, Send, Mail, Link2 } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import Faq from "../../reusable/Faq";


export default function DataEntery() {


    const items = [
        "Team of Skilled Professionals",
        "Modern Work Infrastructure",
        "Cost-Effective Services",
        "High Client Satisfaction Rate",
    ];


    const cards = [
        {
            title: "Data Collection & Organizing",
            desc:
                "The service begins with collection of data from across various sources like paper documents, digital files, and scanned images. The collected data is sorted, organized, reviewed, and verified for accuracy.",
            image: "/images/data-entry/Data-Collection.png",
            dark: true,
        },
        {
            title: "Quality Control",
            desc:
                "When put into the digital systems, the data undergoes verification again to identify any errors or inconsistencies.",
        },
        {
            title: "Data Entry",
            desc:
                "The organized data is then entered into the online and offline systems through manual typing. In some of the cases, automating methods like OCR or ICR are used to extract data from scanned documents.",
        },
        {
            title: "Data Formatting",
            desc:
                "As per specific guidelines or requirements, the data is then formatted and standardized. The final, accurate, and formatted version is used to put into the databases, spreadsheets, or other systems.",
            image: "/images/data-entry/Data-Formatting.png",
            dark: true,
        },
    ];


    const services = [
        {
            icon: <Inbox className="w-6 h-6 text-white" />,
            title: "Accuracy ",
            description:
                "Through outsourcing, businesses can maintain high accuracy of their important data with reliable information for decision-making and strategy planning.",
            link: "#"
        },
        {
            icon: <Send className="w-6 h-6 text-white" />,
            title: "Targeted Marketing",
            description:
                "With data entry services, businesses get accurate customer data which helps them to enhance their marketing efforts to appeal to targeted individuals.",
            link: "#"
        },
        {
            icon: <Link2 className="w-6 h-6 text-white" />,
            title: "Confidentiality",
            description:
                "Trained and skilled professionals handle sensitive information with utmost care and confidentiality, making sure that business data is secured and out of breach risk.",
            link: "#"
        },
        {
            icon: <Mail className="w-6 h-6 text-white" />,
            title: "Efficiency",
            description:
                "Data entry services are aimed at providing efficient work processes with a large volume of data, with on-time delivery each time, helping in the enhancement of growth.",
            link: "#"
        }
    ];

    const points = [
        {
            n: "01",
            title: "Industry Experience",
            desc:
                "Members of our team have experience in IT work across various industries for relevant innovation.",
        },
        {
            n: "02",
            title: "Client-Centric Approach",
            desc:
                "We believe in working with our clients as a strategic partner and not just service providers.",
        },
        {
            n: "03",
            title: "Scalable Solutions",
            desc:
                "Our services grow with business needs and scale as per its needs without hassle.",
        },
        {
            n: "04",
            title: "Data Security",
            desc:
                "We follow regular and high standards of data protection and cybersecurity for best practices.",
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
            <section className="relative py-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/data-entry/data-entry-background-hero.png"
                        alt="Email Support Background"
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
                    <h2 className="text-3xl font-semibold text-white md:text-4xl">
                        Data Entry Service
                    </h2>
                    <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">This process involves converting information from various sources into a digital format for businesses to manage and organize their data effectively.From inquiries to issue resolution, we provide fast, reliable inbound services that keep your customers engaged and satisfied.
                    </p>
                </div>
            </section>
            <section className="p-10 bg-accent">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-20 mx-auto max-w-7xl">
                    <div>
                        <img
                            src="/images/data-entry/Fast-reliable.png"
                            alt="Inbound services"
                            className="w-4/5 rounded-2xl object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-heading mb-4 text-4xl font-semibold">
                            Fast, Reliable & Error-Free Data Entry
                        </h2>
                        <p className="text-paragraph text-lg mb-6">
                            Many companies outsource data entry services to ensure accuracy, efficiency, and confidentiality. We offer businesses of every size a reliable and error-free database with on-time delivery. Our team is skilled and trained to provide high-quality service to each client.
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-6 py-12 bg-gradient-to-b from-unique to-accent">
                <div className="mx-auto max-w-6xl">
                    <p className="text-2xl text-secondary text-center mb-4">Our Services</p>
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Process of Data Entry Service
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
            <section className=" bg-accent py-20">
                <h2 className="text-4xl font-semibold text-center">Key Aspects of Outsourcing Data Entry Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6  max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-start gap-4 p-16 bg-background rounded-4xl shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg  flex-shrink-0">
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
            <section className="bg-[var(--color-background)] px-6 py-16">
                <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,420px)_1fr]">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="/images/data-entry/Outsourcing.png"
                            alt="Team working on laptops"
                            className="w-4/5 object-cover"
                            loading="lazy"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold leading-snug text-[var(--color-heading)] md:text-3xl">
                            Outsourcing Data Entry
                            <br /> Services Means Access To
                        </h2>

                        <ul className="mt-6 space-y-4">
                            {items.map((t) => (
                                <li
                                    key={t}
                                    className="flex items-center gap-3 rounded-lg border border-[var(--color-paragraph)]/20  px-4 py-5 shadow-sm"
                                >
                                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </span>
                                    <span className="text-[var(--color-heading)]">{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-unique to-accent">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-12 md:py-16 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl font-semibold text-[var(--color-heading)] sm:text-4xl">
                            Why Choose Razor Infotech
                        </h2>
                        <p className="mt-3 text-lg max-w-[55ch] text-[var(--color-paragraph)]/80">
                            We go beyond being just a service provider – we become your
                            long-term partner. Our approach combines expertise, technology,
                            and strategy tailored to your unique needs. With us, you gain
                            solutions that scale as your business grows.
                        </p>

                        <div className="mt-5">
                            <img src="/images/data-entry/why-choose.png" alt="why-choose-us" className="w-4/5"/>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 mt-36">
                            {points.map((p, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <span className="mb-4 inline-grid h-16 w-16 place-items-center rounded-lg bg-background text-[var(--color-secondary)] text-base font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-[var(--color-paragraph)]/10">
                                        {p.n}
                                    </span>
                                    <h3 className="text-2xl font-semibold text-[var(--color-heading)]">
                                        {p.title}
                                    </h3>
                                    <p className="mt-2 text-lg text-[var(--color-paragraph)]/80">
                                        {p.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Faq faqs={faqs}/>
        </>
    )
}

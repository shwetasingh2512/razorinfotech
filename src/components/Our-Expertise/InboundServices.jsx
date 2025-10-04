import { ArrowRight } from "lucide-react";
import { Inbox, Send, Mail, Link2 } from "lucide-react";
import BackgroundImagesection from "../../reusable/BackgroundImagesection";

export default function InboundServices() {

    const cards = [
        {
            title: "Customer Service ",
            desc:
                "Our experienced telemarketing team contacts potential customers, introduces your products or services, and schedules qualified appointments for your sales team",
            image: "/images/Inbound-services/Customer.png",
            dark: true,
        },
        {
            title: "Technical Support",
            desc:
                "With helpdesk, the business is provided with comprehensive support for customer needs. This includes software support, product information, and general inquiries that customers might encounter.",
        },
        {
            title: "Helpdesk",
            desc:
                "Technical Support offers clients specialized support to help the customer with any technical issues with products or services. The professionals first diagnose the problems, then provide solutions and guidance to customers in a complex tech process.",
        },
        {
            title: "Scheduling Appointment",
            desc:
                "Scheduling appointment services caters to clients' plans and helps manage appointments and reservations. Under this service, they provide handling booking, confirming, and rescheduling to maintain the calendar.",
            image: "/images/Inbound-services/Scheduling.png",
            dark: true,
        },
    ];


    const items = [
        {
            title: "E-commerce Companies",
            desc:
                "These companies use inbound services to answer customers' questions, take orders, and assist customers with problems that arise during their purchases.",
        },
        {
            title: "Telecom Businesses",
            desc:
                "Telecom companies through our inbound call center service are helped in managing customer service concerns like service and payment, IT support, and problem-solving. ",
        },
        {
            title: "Healthcare Organization",
            desc:
                "In healthcare organizations, inbound services are mostly used by hospitals, clinics, and medical centers to help with appointments, patient support, billing, and diagnosis.",
        },
        {
            title: "Hospitality Services",
            desc:
                "The travel and tourism industry can outsource call center services to handle reservations, customer inquiries, and resolve any issues related to customers.",
        }
    ];

    const rows = [
        {
            aspect: "Main Function",
            inbound: "Handling of incoming calls from customers.",
            outbound: "Making outgoing calls to customers.",
        },
        {
            aspect: "Call Initiation",
            inbound: "Customer-initiated",
            outbound: "Agent-initiated",
        },
        {
            aspect: "Purpose",
            inbound: "Sorting out customer issues, provide information, support.",
            outbound: "Generating leads, sell services/products, conduct surveys",
        },
        {
            aspect: "Call Nature",
            inbound: "Mainly reactive based off customer needs.",
            outbound: "Proactive as per business strategy.",
        },
        {
            aspect: "Technology Used",
            inbound:
                "Interactive Voice Response (IVR), Customer Relationship Management (CRM)",
            outbound: "Sales techniques, convincing, compliance",
        },
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


    const firstsection = {
        title: "Smarter Inbound Support for Your Business",
        description: `From inquiries to issue resolution, we provide fast, reliable inbound services that keep your customers engaged and satisfied.`,
        image: "/images/Inbound-services/Inbound-background-hero.png"
    }


    return (
        <>
            <BackgroundImagesection items={firstsection}/>
            <section className="p-10 bg-accent">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-20 mx-auto max-w-7xl">
                    <div>
                        <img
                            src="/images/Inbound-services/Experience.png"
                            alt="Inbound services"
                            className="w-full rounded-2xl object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-heading mb-4 text-4xl font-semibold">
                            Increase Customer Retention with Exceptional Customer Experience
                        </h2>
                        <p className="text-paragraph text-lg mb-6">
                            With inbound services, you are offered professionals handling incoming calls from customers with queries, issues, or requiring assistance. The service helps in better and faster customer handling in an effective manner leading them to trust in the business. Inbound service leads to positive business and hence enhanced customer loyalty.
                        </p>
                        <button className="flex items-center gap-2 pl-6 py-3 rounded-full bg-secondary text-white font-medium w-fit hover:opacity-90 transition">
                            Improve my data accuracy
                            <div className="bg-white/20 rounded-full p-3 mr-2"><ArrowRight className="w-5 h-5" /></div>
                        </button>
                    </div>
                </div>
            </section>
            <section className="px-6 py-12 bg-accent">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Types of Inbound Call Services with Us
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

            <section className="bg-accent px-6 py-14">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Kinds of Businesses We Cater to
                    </h2>

                    <div className="mt-10 space-y-10">
                        {items.map((it, idx) => (
                            <div key={idx} className="space-y-3">
                                <span className="text-[var(--color-secondary)] font-medium text-2xl">
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
            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                        Difference Between Inbound &<br /> Outbound Services
                    </h2>

                    <div className="mt-10 overflow-hidden rounded-lg ring-1 ring-[var(--color-paragraph)]/15">
                        <table className="hidden w-full table-fixed md:table">
                            <thead className="bg-[var(--color-background)]/70">
                                <tr>
                                    <th className="w-1/3 px-6 py-5 text-left font-semibold text-[var(--color-heading)]">
                                        Aspects
                                    </th>
                                    <th className="w-1/3 px-6 py-5 text-left font-semibold text-[var(--color-heading)]">
                                        Inbound Services
                                    </th>
                                    <th className="w-1/3 px-6 py-5 text-left font-semibold text-[var(--color-heading)]">
                                        Outbound Services
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((r, i) => (
                                    <tr key={i} className="">
                                        <td className="border-t border-[var(--color-paragraph)]/15 px-6 py-6 align-top font-semibold text-[var(--color-heading)]">
                                            {r.aspect}
                                        </td>
                                        <td className="border-t border-[var(--color-paragraph)]/15 px-6 py-6 align-top text-[var(--color-paragraph)]/80">
                                            {r.inbound}
                                        </td>
                                        <td className="border-t border-[var(--color-paragraph)]/15 px-6 py-6 align-top text-[var(--color-paragraph)]/80">
                                            {r.outbound}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="grid gap-6 md:hidden ">
                            {rows.map((r, i) => (
                                <div
                                    key={i}
                                    className="rounded-lg  p-5 ring-1 ring-[var(--color-paragraph)]/15"
                                >
                                    <h3 className="text-sm font-semibold text-[var(--color-heading)]">
                                        {r.aspect}
                                    </h3>
                                    <div className="mt-3 grid grid-cols-1 gap-4">
                                        <div>
                                            <div className="text-xs font-semibold text-[var(--color-heading)]/80">
                                                Inbound Services
                                            </div>
                                            <p className="text-[var(--color-paragraph)]/80">{r.inbound}</p>
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-[var(--color-heading)]/80">
                                                Outbound Services
                                            </div>
                                            <p className="text-[var(--color-paragraph)]/80">{r.outbound}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <h2 className="text-4xl font-semibold text-center">Benefits of Choosing Razor Infotech</h2>
                <p className="text-base text-center my-3 mx-auto">Razor Infotech delivers innovative, high-quality solutions that drive business success.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6  max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-start gap-4 p-16 bg-accent rounded-4xl shadow-sm hover:shadow-md transition"
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
        </>
    )
}

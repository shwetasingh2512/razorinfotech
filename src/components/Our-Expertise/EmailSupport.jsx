import { ArrowRight } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";
import Faq from "../../reusable/Faq";


export default function EmailSupport() {

    const STEPS = [
        {
            n: 1,
            title: "Get the Customer's Email",
            desc:
                "The client sends a support request or email query to the assigned support email address.",
        },
        {
            n: 2,
            title: "Analysis of Issues",
            desc:
                "Our Email support specialists thoroughly examine the problems to determine the reasons for them.",
        },
        {
            n: 3,
            title: "Fix Problems",
            desc:
                "Then our team provides a response based on the complexity of the problem.",
        },
        {
            n: 4,
            title: "The Rise of Issues",
            desc:
                "For more complicated problems, the team refers the issue to specialist teams or higher-level support.",
        },
        {
            n: 5,
            title: "Observation & Verification",
            desc:
                "After the issue has been fixed, our team contacts the client again to find out how satisfied they are.",
        },
        {
            n: 6,
            title: "Records",
            desc:
                "Details of the email exchange and its resolution are documented for future use and monitoring.",
        },
    ];

    function StepCard({ n, title, desc }) {
        return (
            <article className="rounded-2xl bg-[var(--color-background)] p-12 ring-1 ring-[var(--color-paragraph)]/10">
                <div className="flex gap-4 items-center">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--color-secondary)] text-[var(--color-accent)] text-sm font-semibold">
                        {n}
                    </span>
                    <h3 className=" text-[var(--color-heading)] font-semibold">{title}</h3>
                </div>
                <p className="mt-2 text-[var(--color-paragraph)]/80 text-sm leading-6">{desc}</p>
            </article>
        );
    }


    const items = [
        {
            title: "Reliability",
            desc:
                "At Razor Infotech, our team provides a stable and dependable email support for your business. With our service, businesses that are less proficient with modern technology can provide enhanced customer support. We protect the data and privacy of each business and customer. Our team goes through the attached files to offer a more thorough solution to customer queries or issues.",
        },
        {
            title: "Accessibility",
            desc:
                "Email is accessible to each and every person, whether it is for personal or business use. This compatibility of the platforms makes it easy for customers to raise queries through email. Our team provides them compatibility with all devices. Email is something that customers can easily access at any time and from any location as they are configured into smart devices.",
        },
        {
            title: "Easy to Track",
            desc:
                "Every email record of clients and customers is followed up and tracked by our support team. As these emails are an easy, traceable source in identifying issues and providing a much better solution, as a result of research. Moreover, our staff can also review the exchange in case the same issue arises with a different client in the future.",
        },
        {
            title: "IGiving Authority to Customers",
            desc:
                "Through email, customers get the authority to raise complaints to businesses whenever convenient for them, rather than waiting on lengthy call holds. Under this, customers/clients have greater control over their schedule when using email assistance. While they wait for a resolution or respond, they can simply take care of other personal matters rather than remaining on the line.",
        },
        {
            title: "Scalable",
            desc:
                "Our team of skilled agents can manage several issues at once and provide high-quality assistance. Additionally, it is simple to combine our support with your company's email support system, which uses other channels, like voice or chat help, so your business can provide omnichannel assistance without breaking the bank.",
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


    const POINTS = [
        "Scalable for Growing Businesses",
        "Record Keeping and Documentation",
        "Cost-Effective Solution",
        "Enables Detailed Communication",
        "Builds Professionalism and Trust",
    ];

    return (
        <>
            <section className="relative">
                <div className="absolute inset-0">
                    <img
                        src="/images/Email-support/Email-support-background.png"
                        alt="Email Support Background"
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
                    <h2 className="text-3xl font-semibold text-white md:text-4xl">
                        Email Support Service
                    </h2>
                    <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                        Our email support service method provides business support using their email
                        to address customer inquiries, issues, and offer assistance.
                    </p>
                </div>
            </section>
            <section className="p-10 bg-accent">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-20 mx-auto max-w-7xl">
                    <div>
                        <img
                            src="/images/Email-support/Difference.png"
                            alt="Email Support"
                            className="w-full rounded-2xl object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-heading mb-4 text-4xl font-semibold">
                            Email Support That Makes A Difference
                        </h2>
                        <p className="text-paragraph mb-6">
                            With email, clients or customers of your business can send an inquiry
                            whenever it's convenient to them and get a response as soon as
                            possible. Through email, the customers are freed up from long,
                            frustrating phone calls or waiting on hold. Both client and business
                            have email records on themselves through which they can manually track
                            problems and go back to earlier exchanges.
                        </p>
                        <button className="flex items-center gap-2 pl-6 py-3 rounded-full bg-secondary text-white font-medium w-fit hover:opacity-90 transition">
                            Talk to Our Support Specialists
                            <div className="bg-white/20 rounded-full p-3 mr-2"><ArrowRight className="w-5 h-5" /></div>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-[var(--color-background)] px-6 py-16">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-semibold leading-tight text-[var(--color-heading)] md:text-4xl">
                            Benefits of Choosing Our Email
                            <br /> Support Services
                        </h2>

                        <ul className="mt-8 space-y-4">
                            {POINTS.map((p) => (
                                <li key={p} className="flex items-center gap-3 text-[var(--color-heading)]">
                                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                                        <FaDotCircle className="h-4 w-4 text-secondary" />
                                    </span>
                                    <span className="text-lg">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="overflow-hidden rounded-[20px]">
                        <img
                            src="/images/Email-support/Frame 2085666931.png"
                            alt="Typing on keyboard"
                            className="h-auto w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Benefits of Choosing Our Email Support Services
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
                                <p className="max-w-[78ch] text-[var(--color-paragraph)]/80">
                                    {it.desc}
                                </p>
                                <hr className="mt-4 border-[var(--color-paragraph)]/20" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 py-14 bg-accent">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Working Process of Our Email
                        <br />Support Service
                    </h2>

                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {STEPS.map((s) => (
                            <StepCard key={s.n} {...s} />
                        ))}
                    </div>
                </div>
            </section>
            <Faq faqs={faqs} />
        </>
    )
}

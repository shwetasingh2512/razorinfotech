import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import Faq from "../../reusable/Faq";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


export default function FinancialServices() {

    const cards = [
        {
            title: "Book-keeping & Accounting",
            desc:
                "Maintain accurate records with error-free bookkeeping and structured accounting. We ensure every transaction is tracked, giving you clarity and control over your finances.",
            image: "/images/financial-services/Book-keeping.png",
            dark: true,
        },
        {
            title: "Cash Flow Management",
            desc:
                "Stay on top of your income and expenses with smart cash flow monitoring. Our solutions help you prevent shortages, manage working capital, and keep your business running smoothly.",
        },
        {
            title: "Tax Filing & Compliance",
            desc:
                "We simplify tax planning and filing, ensuring your startup complies with all regulations. Avoid penalties, save time, and maximize tax benefits with our expert guidance.",
        },
        {
            title: "Budgeting & Forecasting",
            desc:
                "Plan for the future with realistic budgets and financial forecasts. We help you allocate resources wisely and prepare for investments, growth, and unexpected challenges.",
            image: "/images/financial-services/Budgeting.png",
            dark: true,
        },
    ];

    const PPC = [
        {
            title: "Expert Team",
            description: "Our experienced professionals bring years of industry expertise to every project ."
        },
        {
            title: "24/7 Support",
            description: "Round-the-clock support to ensure your business operations never stop."
        },
        {
            title: "Scalable Solutions",
            description: "Solutions that grow with your business, from startup to enterprise level."
        },
        {
            title: "Proven Results",
            description: "Track record of helping businesses achieve their growth objectives."
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
            <section className=" bg-accent px-6 py-12">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div>
                        <img
                            src="/images/financial-services/financial-services-hero.png"
                            alt="Content creation hero"
                            className="h-auto w-4/5 rounded-2xl object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h1 className="text-3xl font-semibold text-heading md:text-4xl max-w-[90%]">
                            Comprehensive Financial Solutions for Every Business
                        </h1>
                        <p className="text-paragraph/80 text-md max-w-[80%]">
                            At Razor Infotech, we make managing finances easier for startups with simplified, affordable, and transparent solutions. From bookkeeping and tax compliance to budgeting and financial planning, we provide end-to-end support that ensures smooth cash flow, smarter decisions, and the confidence to scale your business sustainably.
                        </p>
                        <Link
                            to="#"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white"
                        >
                            <span>Streamline My Finances Now</span>
                            <span className="rounded-full bg-white/20 p-2">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>

                </div>
            </section>
            <section className="px-6 py-12 bg-background">
                <div className="mx-auto max-w-6xl">
                    <p className="text-center text-sm border border-light-green rounded-full px-4 py-1 w-fit mx-auto text-light-green mb-6">
                        Benefits
                    </p>
                    <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Our Financial Services For Startup
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {cards.map((c, i) => (
                            <article
                                key={i}
                                className={`relative overflow-hidden rounded-2xl ring-1 ring-[var(--color-paragraph)]/10 ${c.image ? "p-0" : "bg-[var(--color-accent)] p-6"
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
            <section className="bg-accent p-10">
                <div className="max-w-6xl mx-auto">
                    <div className="head">
                        <h3 className="text-3xl text-heading text-center font-semibold">Why Choose Razor Infotech?</h3>
                        <p className="text-center text-paragraph mt-5">Razor Infotech delivers innovative, high-quality solutions that drive business success.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto mt-8">
                        {
                            PPC.map((e, i) => (
                                <div className="p-5 bg-background rounded-2xl">
                                    <div className="flex gap-5 items-center">
                                        <IoIosCheckmarkCircleOutline className="text-secondary" />
                                        <span className="text-heading font-semibold">{e.title}</span>
                                    </div>
                                    <p className="text-paragraph text-base mt-4">{e.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Faq faqs={faqs} />
        </>
    )
}

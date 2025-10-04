import Descriptionsection from "../../reusable/Descriptionsection"
import Faq from "../../reusable/Faq";
import HeroSection from "../../reusable/HeroSection"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


export default function AppstoreOptimization() {

    const secondsection = {
        background: "bg-accent",
        title: "Why It Matters ?",
        description: `With millions of apps available on the App Store and Google Play, visibility is everything. Studies show that nearly 65–70% of app downloads come directly from app store searches, which means if your app isn’t optimized, it’s likely being overlooked. App Store Optimization (ASO) ensures your app ranks higher in search results, attracts the right audience, and turns browsers into loyal users.
ASO doesn’t just improve discoverability - it also enhances conversions. Optimized titles, descriptions, screenshots, and reviews build trust and make your app stand out from competitors. Unlike paid ads that stop driving results once the budget ends, ASO creates sustainable, long-term growth by continuously bringing in organic downloads and increasing user engagement.`,
        image: "/images/app-store-optimization/matters.jpg",
        width: "max-w-6xl",
        imgWidth:"w-5/5"
    }

    const cards = [
        {
            title: " Boost Visibility",
            desc:
                "Most users find apps through search in the App Store or Google Play. ASO ensures your app ranks higher, making it easier for potential users to discover you.",
            image: "/images/app-store-optimization/Boost-Visibility.jpg",
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
            image: "/images/app-store-optimization/Data-Analysis.png",
            dark: true,
        },
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
            <HeroSection
                title="Smarter PPC Campaigns for Faster Growth"
                description="Get your brand in front of the right people at the right time. Our PPC Services deliver measurable results through data-driven campaigns on Google, Bing, and social platforms. From keyword research to ad creation and ongoing optimization, we ensure every click counts. With precise targeting and transparent reporting, we help you generate leads, boost sales, and grow faster—without wasted spend."
                buttonText="Start My Campaign Today"
                buttonLink="/contact"
                heroImage={"/images/app-store-optimization/app-store-optimization-hero.jpg"}
                showVector={false}
                vectorImage={""}
                reverse={false}
                connectwithus={false}
            />
            <Descriptionsection items={secondsection} />
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
            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14">
                <div className="mx-auto max-w-6xl">
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

            <Faq faqs={faqs}/>
        </>
    )
}

import { Link } from "react-router-dom"
import { IoArrowForwardOutline } from "react-icons/io5";
import { BarChart3, Sliders, MonitorSmartphone, Layers } from "lucide-react";
import { Lightbulb, Palette, Code2, Wrench, Rocket, RefreshCw } from "lucide-react";
import Faq from "../../reusable/Faq";



function FeatureCard({ title, desc, img, Icon }) {
    return (
        <article className="group rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="overflow-hidden rounded-[22px]">
                <img
                    src={img}
                    alt={title}
                    className="h-48 w-full rounded-[22px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                />
            </div>

            <div className="mt-4 flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                    <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                    {title}
                </h3>
            </div>

            <p className="mt-2 text-[var(--color-paragraph)]/80 leading-relaxed">
                {desc}
            </p>
        </article>
    );
}

export default function AppDevelopement() {

    const STEPS = [
        {
            Icon: Lightbulb,
            title: "Discovery & Strategy",
            desc:
                "The first step in the flow is to understand the vision, goals, and requirements of our clients.",
        },
        {
            Icon: Palette,
            title: "UI & UX Design",
            desc:
                "With this understanding, our team creates intuitive and engaging user experiences.",
        },
        {
            Icon: Code2,
            title: "Development",
            desc:
                "Coding is what brings the design and idea into reality using the best practices and framework.",
        },
        {
            Icon: Wrench,
            title: "Testing And Q&A",
            desc:
                "When done with the coding, the app is tested to check for any bugs or performance issues.",
        },
        {
            Icon: Rocket,
            title: "Deployment & Integration",
            desc:
                "When fixed and made error-free, the application is then launched/deployed across platforms.",
        },
        {
            Icon: RefreshCw,
            title: "Maintenance & Updates",
            desc:
                "We offer support in the continuous updates, monitoring, and improvements after the launch.",
        },
    ];


    const FEATURES = [
        {
            title: "Performance Optimization",
            desc:
                "Our team works to provide what your business needs for fast, reliable, and bug-free experiences.",
            img: "/images/App-developement/Performance-Optimization.png",
            Icon: BarChart3,
        },
        {
            title: "User-Friendly Design",
            desc:
                "We design an interface that is clean, engaging, and conversion-focused UI/UX for a better experience.",
            img: "/images/App-developement/User-Friendly -Design.png",
            Icon: Sliders,
        },
        {
            title: "Cross-Platform Compatibility",
            desc:
                "Providing an app that works smoothly across iOS, Android, and the web with a great user-friendly interface.",
            img: "/images/App-developement/Cross-Platform-Compatibility .png",
            Icon: MonitorSmartphone,
        },
        {
            title: "Scalable Structure",
            desc:
                "Offering app solutions that grow and scale as your business expands, with no major need for re-do.",
            img: "/images/App-developement/Scalable-Structure.png",
            Icon: Layers,
        },
    ];


    const points = [
        {
            title: "Customized for Your Goals",
            description: "Every solution is custom-built around specific business needs, for a better and much friendlier interface."
        },
        {
            title: "Long- Term Support",
            description: "From idea to launch, we provide continuous monitoring, maintenance, and upgrades even after deployment."
        },
        {
            title: "User- First Support",
            description: "Providing a clean, engaging UI/UX that enhances customer satisfaction with every tap into the application."
        },
        {
            title: "Proven Reliability",
            description: "We take pride in the on-time delivery of every custom application without compromising performance or quality."
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
            <section className="bg-accent px-6 py-12">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="p-5">
                        <img
                            src="/images/Software-developement/diverse-friends-using-digital-devices 1.png"
                            alt="Empowering Businesses with Confidence & Technology"
                            className="w-4/5 h-auto rounded-2xl object-cover"
                            loading="lazy"
                        />
                    </div>

                    <div>
                        <h2 className="text-4xl font-semibold text-heading md:text-4xl max-w-[100%]">
                            Empowering Businesses with Confidence & Technology
                        </h2>

                        <p className="mt-5 text-lg text-paragraph/80 max-w-[80%]">
                            With our software development services, we offer the entire process of creating,
                            maintaining, and enhancing software applications to meet specific business needs.
                            Our team of experts provides services in various technologies and development methodologies.
                        </p>

                        <Link
                            to="#"
                            className="mt-6 inline-flex items-center gap-3 rounded-full bg-secondary px-5 py-3 text-white hover:opacity-90"
                        >
                            Start Your Free Trial
                            <span className="grid place-items-center rounded-full bg-white/20 p-2">
                                <IoArrowForwardOutline />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-[var(--color-background)] px-6 py-14">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                        Designed with Innovation,<br className="hidden sm:block" />
                        Coded for Growth
                    </h2>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {FEATURES.map((f) => (
                            <FeatureCard key={f.title} {...f} />
                        ))}
                    </div>
                </div>
            </section>
            <section className=" bg-accent px-6 py-14 md:py-16">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-3xl font-semibold text-[var(--color-heading)] md:text-5xl">
                        Our Workflow in the Making of an Application
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-center text-[var(--color-paragraph)]/80">
                        Our team follows a proper working process to provide a custom-made application tailored to each
                        business’s specific needs and requirements.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {STEPS.map(({ Icon, title, desc }, i) => (
                            <div
                                key={title}
                                className="rounded-[22px] bg-[var(--color-accent)] p-6 text-center shadow-sm ring-1 ring-[var(--color-paragraph)]/15"
                            >
                                <div className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-full bg-[var(--color-secondary)] text-[var(--color-accent)]">
                                    <Icon className="h-4 w-4" />
                                </div>
                                <h3 className="text-base font-semibold text-[var(--color-heading)]">{title}</h3>
                                <p className="mx-auto mt-3 max-w-[36ch] text-sm leading-6 text-[var(--color-paragraph)]/80">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="p-16 linear-gradient">
                <div className="py-8 px-52">
                    <h3 className="text-4xl font-semibold text-heading">Why Choose Razor Infotech</h3>
                    <p className="text-lg text-paragraph mt-5 max-w-[38%]">We go beyond being just a service provider - we become your long-term partner. Our approach combines expertise, technology, and strategy tailored to your unique needs. With us, you gain solutions that scale as your business grows.</p>
                </div>
                <div className="flex gap-20 max-w-8xl justify-center">
                    <div className="p-4">
                        <img src="/images/Software-developement/y-choose-us.png" alt="Why Choose Razor Infotech" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                        {
                            points.map((e, i) => (
                                <div>
                                    <div className="h-12 w-12 flex justify-center items-center bg-accent p-2 text-xl text-secondary font-bold rounded-br-2xl">0{i + 1}</div>
                                    <h4 className="text-2xl font-semibold text-heading mt-4">{e.title}</h4>
                                    <p className="text-lg text-paragraph mt-4 max-w-[40ch]">{e.description}</p>
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

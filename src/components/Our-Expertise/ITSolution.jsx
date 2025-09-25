import { TbEdit } from "react-icons/tb";
import { IoColorWand } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { GrUpdate } from "react-icons/gr";
import { SlOrganization } from "react-icons/sl";
import { ArrowUpRight } from "lucide-react";
import Faq from "../../reusable/Faq";
import { Link } from "react-router-dom";




export default function ITSolution() {

    const element = [
        "App Development",
        "Web Development",
        "Marketing",
        "UI/UX Design",
        "Mobile App",
        "Web Hosting",
    ]

    const SERVICES = [
        {
            n: 1,
            title: "Software Development",
            navigate:"/software-developement",
            desc: "Offering personalized and top-notch software development services",
            img: "/images/It-solution/softwarre-developement.png",
        },
        {
            n: 2,
            title: "Website Development",
            navigate:"/website-developement",
            desc: "Website development services for businesses of every size and industry.",
            img: "/images/It-solution/website-developement.png",
        },
        {
            n: 3,
            title: "Marketing & Branding",
            navigate:"/marketing-branding",
            desc: "Creating a recognizable identity to promote products/services for lead generation.",
            img: "/images/It-solution/marketing-branding.png",
        },
        {
            n: 4,
            title: "App Development",
            navigate:"/app-devvelopement",
            desc: "Service for businesses that aim to opt for a customized app.",
            img: "/images/It-solution/App-developement.png",
        },
        {
            n: 5,
            title: "Web Hosting",
            navigate:"/website-hosting",
            desc: "Helping businesses make their websites accessible on the internet.",
            img: "/images/It-solution/Web-hosting.png",
        },
    ];

    const cards = [
        {
            icon: TbEdit,
            title: "Understanding Your Needs",
            description: "Define goals, target users, and core features."
        },
        {
            icon: IoColorWand,
            title: "UI & UX Design",
            description: "Create visually appealing and user-friendly interfaces."
        },
        {
            icon: IoCodeSlash,
            title: "Development",
            description: "Build the app with the latest technologies for smooth performance."
        },
        {
            icon: VscTools,
            title: "Testing And Q&A",
            description: "Identify and fix bugs for a flawless user experience."
        },
        {
            icon: SlOrganization,
            title: "Deployment & Integration",
            description: "Launch the app on App Store and Play Store"
        },
        {
            icon: GrUpdate,
            title: "Maintenance & Updates",
            description: "Regular improvements and support for long-term success."
        },
    ]

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


    function ServiceCard({ n, title, desc, img , navigate }) {
        return (
            <article className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-[var(--color-paragraph)]/10">
                    <img
                        src={img}
                        alt={title}
                        className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                    />
                    <span className="absolute left-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-[var(--color-background)] text-[var(--color-secondary)] text-xs font-semibold ring-1 ring-[var(--color-secondary)]/30">
                        {String(n)}
                    </span>
                </div>

                <div className="mt-4 flex items-start gap-2">
                    <h3 className="text-xl font-semibold text-[var(--color-heading)]">{title}</h3>
                    <Link to={navigate}><ArrowUpRight className="mt-1 size-4 text-[var(--color-secondary)] opacity-90" /></Link>
                </div>
                <p className="mt-2 text-md max-w-[44ch] text-[var(--color-paragraph)]/80">{desc}</p>
            </article>
        );
    }

    return (
        <>
            <section className="p-10">
                <div className="grid grid-cols-1  lg:grid-cols-2 max-w-7xl mx-auto bg-accent rounded-2xl overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-5xl leading-16 font-semibold max-w-4/5 text-heading">Reliable Services To Innovate & Elevate</h1>
                        <p className="text-xl text-paragraph mt-8 max-w-4/5">At Razor Infotech, we believe in providing each of our clients with top-notch IT solutions that help in smooth operations, enhance productivity, and foster innovation. Our team of skilled and trained experts combines strategic insights with tech excellence to deliver high-quality services. They are reliable, scalable, and future-ready for businesses.</p>
                    </div>
                    <div className="bg-[url('/images/It-solution/It-solution-hero-image.png')] bg-no-repeat bg-cover" />
                </div>
                <div className="w-4/5 mx-auto bg-accent mt-8 p-5 rounded-2xl">
                    <ul className="flex justify-between">
                        {
                            element.map((e, i) => <li className="p-4 rounded-full border border-border text-paragraph text-xl" key={i}>{e}</li>)
                        }
                    </ul>
                </div>
            </section>
            <section className="group p-20 bg-accent">
                <h4 className="border border-secondary py-2 px-4 text-xl w-fit mx-auto rounded-3xl">Work Process</h4>
                <h2 className="text-4xl font-semibold text-center mt-8">Process of IT Solutions</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 px-16  p-8 rounded-3xl">
                    {
                        cards.map((e, i) => {
                            const Icons = e.icon
                            return (
                                <div className={`p-5 rounded-3xl border text-center h-66 border-border ${i % 2 == 0 ? "text-white" : "group-hover:bg-background text-white"}`} key={i}>
                                    <div className="bg-secondary w-fit mx-auto  flex justify-center items-center p-4 rounded-full"><Icons /></div>
                                    <h2 className="text-heading text-2xl mt-5">{e.title}</h2>
                                    <p className="text-xl text-paragraph max-w-3/5 mx-auto mt-5">{e.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="linear-gradient">
                <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
                    <div className="flex flex-col items-center text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-paragraph)]/20 bg-[var(--color-accent)] px-3 py-1 text-lg font-medium text-[var(--color-paragraph)]/70">
                            Our Services
                        </span>
                        <h2 className="mt-4 text-3xl font-semibold text-[var(--color-heading)] sm:text-3xl md:text-4xl">
                            IT Solution Services that We Offer
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.slice(0, 3).map((s) => (
                            <ServiceCard key={s.n} {...s} />
                        ))}
                        <div className="sm:col-span-2 justify-items-center mt-8 lg:col-span-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                            {SERVICES.slice(3).map((s) => (
                                <ServiceCard key={s.n} {...s} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[var(--color-background)]">
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
                            <img src="/images/It-solution/y-choose-us.png" alt="" />
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 mt-36">
                            {points.map((p, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <span className="mb-4 inline-grid h-16 w-16 place-items-center rounded-lg bg-[var(--color-accent)] text-[var(--color-secondary)] text-base font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-[var(--color-paragraph)]/10">
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

            <Faq faqs={faqs} />
        </>
    )
}

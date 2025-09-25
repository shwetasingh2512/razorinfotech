import { IoArrowForwardOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Faq from "../../reusable/Faq";



function ServiceCard({ n, title, desc, img, navigate }) {
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
                <Link to={navigate}><FiArrowUpRight className="mt-1 size-4 text-[var(--color-secondary)] opacity-90" /></Link>
            </div>
            <p className="mt-2 text-md max-w-[44ch] text-[var(--color-paragraph)]/80">{desc}</p>
        </article>
    );
}


export default function SoftwareDevelopement() {

    const SERVICES = [
        {
            n: 1,
            title: "Custom Software Development",
            navigate: "/software-developement",
            desc: "This process is about creating software applications tailored to a business's needs rather than using pre-built software, perfectly aligning with a business's objectives.",
            img: "/images/It-solution/softwarre-developement.png",
        },
        {
            n: 2,
            title: "Web Development Services",
            navigate: "/website-developement",
            desc: "In this service, we focus on building and maintaining web applications and sites, under aspects like front-end (user interface), back-end (server-side logic), and database development.",
            img: "/images/It-solution/website-developement.png",
        },
        {
            n: 3,
            title: "Clouds & DevOps",
            navigate: "/marketing-branding",
            desc: "Our team serves in developing and deploying applications that run on cloud platforms and aims to offer benefits like scalability, accessibility, and cost-effectiveness.",
            img: "/images/It-solution/marketing-branding.png",
        },
        {
            n: 4,
            title: "Mobile App Development",
            navigate: "/app-devvelopement",
            desc: "This service offers creating applications for mobile devices and targeting platforms like iOS and Android. From native app development to cross-platform development, we serve all.",
            img: "/images/It-solution/App-developement.png",
        },
        {
            n: 5,
            title: "Software Development and Support",
            navigate: "/website-hosting",
            desc: "Along with the development, our team ensures that the software remains functional, secure, and up-to-date after the release, as well as bug fixing, performance optimization, and updates.",
            img: "/images/It-solution/Web-hosting.png",
        },
    ];

    const cards = [
        {
            title: "Personalized Solutions",
            description: "This service allows businesses to create custom software that meets their unique and specific requirements rather than opting for fit-for-all software that limits customization."
        },
        {
            title: "Enhanced Efficiency",
            description: "Getting software development helps in streamlining workflow, task automation, and overall improving operational efficiency of the business, and increasing productivity."
        },
        {
            title: "Long-Term Cost Effectiveness",
            description: "The initial investment in the software development can be high, but in the long run, it reduces maintenance costs, optimizes resource utilization, and avoids licensing fees."
        },
        {
            title: "Better Security",
            description: "Experts help in building software with specific security protocols and measures to protect sensitive data and reduce any potential threats to the business."
        },
        {
            title: "Improved Integration",
            description: "Customized software can be designed to work smoothly with existing systems and technologies for a seamless data flow and avoid any compatibility issues."
        },
        {
            title: "Scalability & Adaptability",
            description: "This process of software development is done in a way that adapts to future growth and changing business needs while providing flexibility to scale as per the needs and requirements."
        },
    ]

    const points = [
        {
            title: "Skilled Team",
            description: "We have skilled and trained industry experts in our team to provide top-notch services."
        },
        {
            title: "Reliable Services",
            description: "We provide our clients with the industry's best services with our expert team."
        },
        {
            title: "Custom Development",
            description: "We believe in providing each of our clients, from SMEs to big enterprises, with custom solutions."
        },
        {
            title: "Post Development",
            description: "Apart from developing, we also provide maintenance and support for the software."
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
            <section className='p-10'>
                <div className="grid grid-cols-1  lg:grid-cols-2 max-w-7xl h-100 mx-auto bg-accent rounded-2xl overflow-hidden">
                    <div className="p-8 place-content-center">
                        <h1 className="text-4xl leading-16 font-semibold  text-heading">Software Development</h1>
                        <p className="text-xl text-paragraph mt-5 max-w-4/5">Creating, Maintaining, and Enhancing Software For Every Business's Specific Needs or Requirements.</p>
                    </div>
                    <div className="bg-[url('/images/Software-developement/software-hero-image.png')] bg-no-repeat bg-cover" />
                </div>
            </section>
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
            <section className="linear-gradient">
                <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
                    <div className="flex flex-col items-center text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-paragraph)]/20 px-3 py-1 text-lg font-medium text-[var(--color-paragraph)]/70">
                            Our Services
                        </span>
                        <h2 className="mt-4 text-3xl font-semibold text-[var(--color-heading)] sm:text-3xl md:text-4xl">
                            Our Software Development Services
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
            <section className="p-10 bg-accent">
                <h2 className="text-4xl text-center text-heading font-semibold">Benefits of Software Development</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto mt-12">
                    {
                        cards.map((e, i) => (
                            <div className="bg-background p-5 rounded-3xl h-80" key={i}>
                                <div className="flex gap-5"> <div className="bg-secondary h-12 w-12 flex justify-center items-center font-bold text-white rounded-full p-3">{i + 1}</div> <span className="text-2xl font-semibold">{e.title}</span> </div>
                                <p className="mt-5 text-base">{e.description}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="p-16 linear-gradient">
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
                                    <div className="h-12 w-12 flex justify-center items-center bg-accent p-2 text-secondary font-bold rounded-br-3xl">{i + 1}</div>
                                    <h4 className="text-2xl font-semibold text-heading mt-4">{e.title}</h4>
                                    <p className="text-lg text-paragraph mt-4 max-w-[40ch]">{e.description}</p>
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

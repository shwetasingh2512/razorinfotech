import Features from "../reusable/Features";
import HeroSection2 from "../reusable/HeroSection2";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaFileImport } from "react-icons/fa";
import { FaListCheck, FaArrowRightLong } from "react-icons/fa6";
import { SlGraph, SlBadge } from "react-icons/sl";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { SiTicktick } from "react-icons/si";
import vectorImage from "/images/vector/Vector-1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phoneImage from "/images/Products/phone.png"
import Faq from "../reusable/Faq";
import TestimonialCarousel from "../reusable/TestimonialCarousel";

export default function Products() {
    const faqs = [
        { question: "What services does Razor Infotech provide?", answer: "We offer end-to-end solutions, including IT services, BPO support, HR management, cloud solutions, cybersecurity, and digital transformation to help businesses scale with confidence." },
        { question: "Who can businesses of different sizes benefit from our services?", answer: "We provide tailored solutions for startups, SMBs, and enterprises, ensuring value at every stage." },
        { question: "How does Razor Infotech ensure quality and security?", answer: "We follow strict compliance, use advanced security practices, and maintain transparency with our clients." },
        { question: "Can we customize solutions based on your business needs?", answer: "Yes, all our solutions can be customized to fit your unique business goals." },
    ];

    const items = {
        title: "From Empowering Technology To Empowering People",
        description: "Human Maximizer helps you unlock your best self, while Gadgetfobia helps you unlock the best gadgets. Together, we make growth and tech effortless.",
        parawidth: "max-w-[60%]",
        headmaxwidth: "max-w-[60%]",
        showVector: false,
        center: true,
        verticlespacing: "py-10",
        background: "linear-gradient",
    };

    const items2 = {
        title: "All-In-One Platform for Performance Management to Employee Engagement",
        description:
            "Human Maximizer combines hiring, payroll, performance, and culture-building into one powerful platform designed for growing teams. You can scale faster, work smarter, and keep your people at the heart of your business.",
        btn: "Know More",
        image: "/images/Products/second-section-image.png",
        headmaxwidth: "max-w-[80%]",
        parawidth: "max-w-[80%]",
        background: "bg-[var(--color-accent)]",
    };

    const points = [
        { icon: SlGraph, point: "Get Issues Solved Quickly" },
        { icon: AiFillThunderbolt, point: "Complete Dashboards with Real-time Metrics" },
        { icon: SlBadge, point: "Appreciation & Recognition Culture" },
        { icon: BsPeopleFill, point: "Team Up Across Departments" },
        { icon: SiTicktick, point: "Approve in One Go" },
    ];

    const defaultItems = [
        { title: "Trending & Latest News", description: "Get updates on the latest news or trends in the industry to stay up-to-date." },
        { title: "Gadget Comparison", description: "A thorough comparison of gadgets for better decision-making on purchase." },
        { title: "Usage Tips & Tricks", description: "Providing experts' tips and tricks on each gadget for better results." },
        { title: "User-Friendly Interface", description: "Organized categories, search functionality, and filters for easy browsing." },
        { title: "In-Depth Expert Reviews & Insight", description: "Each gadget review is done by experts for insightful tips and comments." },
        { title: "Performance & value analysis", description: "Evaluation not just of what a gadget can do, but whether it delivers for its price." },
    ];

    const TESTIMONIALS = [
        { quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”", name: "GUNJAN RAWAT", role: "UI/UX DESIGNER", avatar: "https://i.pravatar.cc/80?img=32" },
        { quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus.”", name: "JOHN CARTER", role: "ROLE, COMPANY", avatar: "https://i.pravatar.cc/80?img=12" },
        { quote: "“Tellus nisi amet non at phasellus faucibus senectus in. Vitae gravida leo risus mauris porta.”", name: "AMELIA WATTS", role: "PRODUCT MANAGER", avatar: "https://i.pravatar.cc/80?img=5" },
        { quote: "“Pellentesque commodo, arcu at tempor mattis, velit dui dictum risus.”", name: "RAHUL VERMA", role: "ENGINEERING LEAD", avatar: "https://i.pravatar.cc/80?img=23" },
        { quote: "“Ut a orci sed neque porta pharetra. Integer laoreet, nisl sed dictum.”", name: "EMMA LI", role: "GROWTH MARKETER", avatar: "https://i.pravatar.cc/80?img=48" },
    ];


    const content = [
        {
            title: "Payroll Management",
            description: "From handling taxes to bonuses, our software offers automated salary processing, accurate, and ensures compliance with statutory requirements.",
            icon: AiFillDollarCircle
        },
        {
            title: "Attendance Management",
            description: "Our software helps in monitoring attendance in real-time from biometric scans to web check-ins and GPS tracking. It delivers real-time accuracy and transparency.",
            icon: BsGraphUpArrow
        },
        {
            title: "Productivity Lens",
            description: "From website visits to break times, it highlights what’s productive and what’s not. From tracking apps and websites visited to counting the total breaks that each employee has taken.",
            icon: FaFileImport
        },
        {
            title: "LEAVE MANAGEMENT",
            description: "This software is your one place for all the tracking, approving, and managing of leave requests, which is fully configurable to fit company policies.",
            icon: FaListCheck
        },
    ]

    function TestimonialCard({ t }) {
        return (
            <div className="card h-full flex flex-col rounded-3xl  p-8 text-[var(--color-paragraph)] linear-gradient shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-[var(--color-secondary)]/10">
                <p className="flex-1 text-[15px] leading-7 opacity-90">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full ring-2 ring-[var(--color-secondary)]/20" />
                    <div>
                        <div className="text-sm font-semibold tracking-wide text-[var(--color-heading)]">{t.name}</div>
                        <div className="text-xs tracking-wide opacity-70">{t.role}</div>
                    </div>
                </div>
            </div>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 450,
        centerMode: true,
        centerPadding: "0px",
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <>
            <HeroSection2 items={items} />
            <HeroSection2 items={items2} />

            <Features items={content} image={phoneImage} />

            <section className="bg-accent px-8 py-16">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="p-3">
                        <img src="/images/Products/phones.png" alt="phones" className="w-full h-auto" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-[var(--color-heading)]">Employee Data Card Management</h2>
                        <p className="mt-3 max-w-[80%] text-base text-[var(--color-paragraph)] opacity-70">
                            One place for all work information of all the employees in the team across departments at your fingertips.
                        </p>

                        <div className="points mt-8 space-y-3">
                            {points.map((r, i) => {
                                const Icons = r.icon;
                                return (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="rounded-2xl bg-[var(--color-secondary)] p-2">
                                            <div className="rounded-xl bg-[var(--color-accent)]/40 p-1">
                                                <Icons className="text-[var(--color-accent)]" />
                                            </div>
                                        </div>
                                        <p className="text-[var(--color-paragraph)]">{r.point}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="linear-gradient">

                <div className="bg-[url('/images/Products/features-background.png')] bg-no-repeat bg-center p-10">
                    <div>
                        <h3 className="mx-auto text-center font-primary text-3xl font-semibold text-[var(--color-heading)]">Your Ultimate</h3>
                        <p className="mx-auto mb-8 text-center text-3xl my-3 font-semibold text-white bg-secondary py-3 px-8 rounded-full w-fit">Encyclopedia of Gadgets</p>
                        <p className="mx-auto max-w-[60%] text-center text-lg text-[var(--color-paragraph)]">
                            We understand how keeping up with the ever-evolving technology world is not easy and can be overwhelming. This is why we've created Gadgetfobia, an ultimate resource for knowing gadget specifications, pros and cons, and practical tips and tricks.
                        </p>
                        <button className="mx-auto mt-6 flex items-center gap-3 rounded-4xl border border-white pl-5 py-2 text-white bg-secondary">
                            Learn more <span className="p-3 mr-2 rounded-full bg-white/30"><FaArrowRightLong /></span>
                        </button>
                    </div>
                    <div className="p-4">
                        <img src="/images/Products/apple-computers.png" alt="group-of-phone" className="mx-auto w-2/5 mt-6" />
                    </div>
                </div>
            </section>
            <section className="relative py-20 px-20 bg-accent">
                <div className="pointer-events-none absolute right-0 top-0 -z-10 h-3/5 w-3/5 opacity-15">
                    <img src={vectorImage} alt="" className="h-full w-full object-contain" />
                </div>
                <p className="py-4 px-6 rounded-full border border-secondary mb-5 w-fit mx-auto ">Features Section</p>
                <h2 className="mx-auto max-w-[60%] text-center text-3xl font-semibold text-[var(--color-heading)]">
                    Everything You Need to Know Before Choosing Your Next Gadget.
                </h2>
                <p className="text-paragraph text-center mx-auto w-3xl mt-8">Discover key tips, features, and comparisons to make a smart tech purchase.  Avoid buyer’s remorse by knowing exactly what to look for in your next gadget.</p>

                <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 justify-items-center  ">
                    {defaultItems.map((it, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl  bg-[var(--color-background)] p-6 shadow-sm ring-1 ring-[var(--color-paragraph)]/15 `}                                                                                       
                        >
                            <div className="flex items-start gap-4">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-accent)] text-sm font-semibold text-[var(--color-secondary)]">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <div className="min-w-0">
                                    <h3 className="text-lg md:text-xl font-semibold text-[var(--color-heading)]">
                                        {it.title}
                                    </h3>
                                    <p className="mt-2 text-[var(--color-paragraph)]/80">
                                        {it.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
                <section className="p-10">
                    <h3 className="text-center text-heading font-semibold text-4xl mx-auto mt-10">Keeping It Real, Straight From Our Clients</h3>
                    <p className="text-paragraph/60 text-lg text-center mt-3 max-w-2/5 mx-auto">Testimonial from our clients who are scaling smarter and growing with our services</p>
                    <div>
                        <TestimonialCarousel />
                    </div>
                </section>

            <Faq faqs={faqs} />
        </>
    );
}

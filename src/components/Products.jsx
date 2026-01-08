import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phoneImage from "/images/Products/phone.png";

const Faq = lazy(() => import("../reusable/Faq"));
const TestimonialCarousel = lazy(() => import("../reusable/TestimonialCarousel"));

export default function Products() {
    const navigate = useNavigate();
    const faqs = [
        { 
            question: "What product does Razor Infotech provide?", 
            answer: "Razor Infotech provides an HRMS software, Human Maximizer, that automates the entire HR process from handling payroll to assigning tasks to engaging with employees" 
        },
        { 
            question: "What are the core features of Human Maximizer?", 
            answer: "The core features of Human Maximizer are payroll management, leave management, performance management, productivity lens, task management, and geo-fencing. " 
        },
        { 
            question: "What makes Human Maximizer unique from other software?", 
            answer: "Human Maximizer automates HR tasks efficiently and offers a productivity lens feature that tracks the overall activity of workforce management. It bridges the communication between employees and admin with a synergy feature." 
        },
        { 
            question: "What are the benefits of choosing Human Maximizer?", 
            answer: "The benefits of choosing Human Maximizer are: \nManages employee personal information and work life together \nGenerates dashboards with real-time metrics \nEnables live chat, video & voice calls \nPost announcements and share feedback" 
        },
    ];

    const items = {
        title: "From Empowering Technology To Empowering People",
        description: "Human Maximizer helps you unlock your best self, while Gadgetfobia helps you unlock the best gadgets. Together, we make growth and tech effortless.",
        parawidth: "max-w-prose",
        headmaxwidth: "max-w-prose",
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
        link: "/products",
        image: "/images/Products/second-section-image.png",
        headmaxwidth: "max-w-prose",
        parawidth: "max-w-prose",
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
            description: "From website visits to break times, it highlights what's productive and what's not. From tracking apps and websites visited to counting the total breaks that each employee has taken.",
            icon: FaFileImport
        },
        {
            title: "Leave Management",
            description: "This software is your one place for all the tracking, approving, and managing of leave requests, which is fully configurable to fit company policies.",
            icon: FaListCheck
        },
    ];

    return (
        <>
            <title>Human Maximizer & Gadgetfobia - HR Software & Tech Review Platform</title>
            <meta name="description" content="Discover Human Maximizer, an all-in-one HR management platform with payroll, attendance, and performance tracking. Explore Gadgetfobia for expert gadget reviews and tech comparisons." />
            <meta name="keywords" content="human maximizer, hr management software, payroll software, attendance management, employee engagement, gadgetfobia, gadget reviews, tech comparison, productivity software, HRMS, performance management" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Human Maximizer & Gadgetfobia - Smart HR & Tech Solutions" />
            <meta property="og:description" content="Transform your HR operations with Human Maximizer and make informed tech decisions with Gadgetfobia. Empowering people and technology." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/products" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/Products/second-section-image.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Human Maximizer & Gadgetfobia Products" />
            <meta name="twitter:description" content="All-in-one HR platform and ultimate gadget encyclopedia from Razor Infotech." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/Products/second-section-image.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/products" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Human Maximizer",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Web, iOS, Android",
                    "offers": {
                        "@type": "Offer",
                        "category": "HR Management Software"
                    },
                    "description": "All-in-one HR management platform combining payroll, attendance, performance, and employee engagement.",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "ratingCount": "250"
                    },
                    "featureList": [
                        "Payroll Management",
                        "Attendance Tracking",
                        "Performance Management",
                        "Leave Management",
                        "Employee Data Management",
                        "Real-time Analytics"
                    ]
                })}
            </script>

            <HeroSection2 items={items} />
            
            <section aria-labelledby="human-maximizer-heading">
                <h2 id="human-maximizer-heading" className="sr-only">Human Maximizer HR Platform</h2>
                <HeroSection2 items={items2} />
            </section>

            <Features items={content} image={phoneImage} imgwidth="w-1/2" />

            <section className="bg-accent px-6 sm:px-8 py-10" aria-labelledby="employee-data-heading">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="p-3">
                        <img 
                            src="images/Products/phones.png" 
                            alt="Human Maximizer employee management mobile interface" 
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <h2 id="employee-data-heading" className="text-3xl sm:text-4xl font-semibold text-[var(--color-heading)]">
                            Employee Data Card Management
                        </h2>
                        <p className="mt-3 text-base text-[var(--color-paragraph)] opacity-70 max-w-xl">
                            One place for all work information of all the employees in the team across departments at your fingertips.
                        </p>

                        <ul className="points mt-8 space-y-3" role="list">
                            {points.map((r, i) => {
                                const Icons = r.icon;
                                return (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="rounded-2xl bg-[var(--color-secondary)] p-2" aria-hidden="true">
                                            <div className="rounded-xl bg-[var(--color-accent)]/40 p-1">
                                                <Icons className="text-[var(--color-accent)]" />
                                            </div>
                                        </div>
                                        <p className="text-[var(--color-paragraph)]">{r.point}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="linear-gradient" aria-labelledby="gadgetfobia-heading">
                <div className="bg-[url('/images/Products/features-background.png')] bg-no-repeat bg-center p-10">
                    <div>
                        <h2 id="gadgetfobia-heading" className="mx-auto text-center font-primary text-3xl font-semibold text-[var(--color-heading)]">
                            Your Ultimate
                        </h2>
                        <p className="mx-auto mb-8 text-center text-3xl my-3 font-semibold text-white bg-secondary py-3 px-8 rounded-full w-fit">
                            Encyclopedia of Gadgets
                        </p>
                        <p className="mx-auto max-w-xl text-center text-lg text-[var(--color-paragraph)]">
                            We understand how keeping up with the ever-evolving technology world is not easy and can be overwhelming. This is why we've created Gadgetfobia, an ultimate resource for knowing gadget specifications, pros and cons, and practical tips and tricks.
                        </p>
                        <button 
                            className="mx-auto mt-6 flex items-center gap-3 rounded-4xl border border-white pl-5 py-2 text-white bg-secondary hover:opacity-90 transition"
                            aria-label="Learn more about Gadgetfobia"
                            onClick={() => navigate('/products')}
                        >
                            Learn more <span className="p-3 mr-2 rounded-full bg-white/30" aria-hidden="true"><FaArrowRightLong /></span>
                        </button>
                    </div>
                    <div className="p-4">
                        <img 
                            src="/images/Products/apple-computers.png" 
                            alt="Gadgetfobia tech reviews featuring Apple products" 
                            className="mx-auto w-2/5 sm:w-1/3 md:w-2/5 mt-6"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <section className="relative py-12 px-6 sm:px-12 bg-accent" aria-labelledby="gadgetfobia-features-heading">
                <div className="hidden md:block pointer-events-none absolute right-0 top-0 -z-10 opacity-15 w-1/2 md:w-1/3 lg:w-2/5" aria-hidden="true">
                    <img src={vectorImage} alt="" className="h-full w-full object-contain" />
                </div>
                <p className="py-4 px-6 rounded-full border border-secondary mb-5 w-fit mx-auto">Features Section</p>
                <h2 id="gadgetfobia-features-heading" className="mx-auto max-w-xl text-center text-3xl font-semibold text-[var(--color-heading)]">
                    Everything You Need to Know Before Choosing Your Next Gadget
                </h2>
                <p className="text-paragraph text-center mx-auto max-w-3xl mt-8">
                    Discover key tips, features, and comparisons to make a smart tech purchase. Avoid buyer's remorse by knowing exactly what to look for in your next gadget.
                </p>

                <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 justify-items-center">
                    {defaultItems.map((it, i) => (
                        <article
                            key={i}
                            className="rounded-2xl bg-[var(--color-background)] p-6 shadow-sm ring-1 ring-[var(--color-paragraph)]/15"
                        >
                            <div className="flex items-start gap-4">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-accent)] text-sm font-semibold text-[var(--color-secondary)]" aria-hidden="true">
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
                        </article>
                    ))}
                </div>
            </section>

            <section className="p-6 sm:p-10" aria-labelledby="testimonials-heading">
                <h3 id="testimonials-heading" className="text-center text-heading font-semibold text-3xl sm:text-4xl mx-auto mt-6">
                    Keeping It Real, Straight From Our Clients
                </h3>
                <p className="text-paragraph/60 text-lg text-center mt-3 max-w-xl mx-auto">
                    Testimonial from our clients who are scaling smarter and growing with our services
                </p>
                <div>
                    <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading testimonials...</div>}>
                        <TestimonialCarousel />
                    </Suspense>
                </div>
            </section>

            <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
                <Faq faqs={faqs} />
            </Suspense>
        </>
    );
}

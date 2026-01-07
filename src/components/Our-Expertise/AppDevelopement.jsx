import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { BarChart3, Sliders, MonitorSmartphone, Layers } from "lucide-react";
import { Lightbulb, Palette, Code2, Wrench, Rocket, RefreshCw } from "lucide-react";
import WhychooseSection from "../../reusable/WhychooseSection";

const Faq = lazy(() => import("../../reusable/Faq"));

function FeatureCard({ title, desc, img, Icon }) {
    return (
        <article className="group rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="overflow-hidden rounded-[22px]">
                <img
                    src={img}
                    alt={`${title} - Mobile app development feature`}
                    className="h-48 w-full rounded-[22px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    width="400"
                    height="192"
                />
            </div>

            <div className="mt-4 flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]" aria-hidden="true">
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

export default function AppDevelopment() {
    const STEPS = [
        {
            Icon: Lightbulb,
            title: "Expert Trainers",
            desc: "Now, gain hands-on experience and practical tips from the industry-experienced professionals who have overcome daily tech challenges. ",
        },
        {
            Icon: Palette,
            title: "Customized Solutions",
            desc: "At first, we analyze your specific needs and then build a learning path that aligns with your projects, tech stack, and business goals. ",
        },
        {
            Icon: Code2,
            title: "Continuous Support",
            desc: "Razor Infotech is here with you at every step to enhance your team’s growth. ",
        },
        {
            Icon: Wrench,
            title: "Proven Results",
            desc: "We offer training development solutions that drive innovation, improve your team productivity, and increase your business outcomes. ",
        }
    ];

    const FEATURES = [
        {
            title: "Mobile App Integration",
            desc: "We offer consistent data, enhanced features, and unified experience, and simpler workflows. ",
            img: "/images/App-developement/Performance-Optimization.png",
            Icon: BarChart3,
        },
        {
            title: "Custom Mobile App Development",
            desc: "Create a mobile app from ideation to deployment that engages the users and helps in delivering the measurable results. ",
            img: "/images/App-developement/User-Friendly -Design.png",
            Icon: Sliders,
        },
        {
            title: "Mobile App Modernization",
            desc: "Update outdated applications with modern technology to improve their functionality, scalability, to stay competitive with the latest technologies and the trends in the market. ",
            img: "/images/App-developement/Cross-Platform-Compatibility .png",
            Icon: MonitorSmartphone,
        },
        {
            title: "Cross-Platform App Development",
            desc: "Achieve a uniform experience across both iOS and Android, optimize efficiency and performance, reduce development costs, and reach a wider user base.",
            img: "/images/App-developement/Scalable-Structure.png",
            Icon: Layers,
        },
    ];

    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/App-developement/y-choose-us.png",
        child: [
            {
                title: "Customized for Your Goals",
                desc: "Every solution is custom-built around specific business needs, for a better and much friendlier interface."
            },
            {
                title: "Long-Term Support",
                desc: "From idea to launch, we provide continuous monitoring, maintenance, and upgrades even after deployment."
            },
            {
                title: "User-First Support",
                desc: "Providing a clean, engaging UI/UX that enhances customer satisfaction with every tap into the application."
            },
            {
                title: "Proven Reliability",
                desc: "We take pride in the on-time delivery of every custom application without compromising performance or quality."
            },
        ]
    };

    const faqs = [
        {
            question: "What is Mobile App Development ?",
            answer: "Mobile App Development is the process of making software for tablets, smartphones for the Android and iOS operating systems"
        },
        {
            question: "What are the different types of mobile app development?",
            answer: "The main types of mobile application development are:\nNative Apps\nHybrid Apps\nWeb Apps \n"
        },
        {
            question: "What is a mobile app?",
            answer: "Mobile applications are the software programs that run on devices such as mobile phones or tablets, which usually enable the user to perform tasks and organize their lives effectively."
        },
        {
            question: "How is a mobile app developed?",
            answer: "A mobile app is developed by creating software bundles such as code, binaries, and implementing backend services such as data access with an API, and testing the application on target devices."
        },
    ];

    return (
        <>
            <title>Mobile App Development Services - iOS & Android Apps | Razor Infotech</title>
            <meta name="description" content="Professional mobile app development for iOS, Android, and cross-platform. Custom app solutions with user-friendly design, performance optimization, and scalable architecture. Get your free consultation today." />
            <meta name="keywords" content="mobile app development, iOS app development, Android app development, cross-platform apps, React Native, Flutter, app design, UI/UX design, custom app development, enterprise mobile apps, progressive web apps" />
            <meta name="author" content="Razor Infotech" />

            <meta property="og:title" content="Mobile App Development Services - Custom iOS & Android Apps" />
            <meta property="og:description" content="Transform your business with custom mobile applications. Expert app development with performance optimization, user-friendly design, and cross-platform compatibility." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/app-development" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/App-developement/Performance-Optimization.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Mobile App Development by Razor Infotech" />
            <meta name="twitter:description" content="Custom mobile app development for iOS, Android, and cross-platform with scalable architecture and engaging UI/UX design." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/App-developement/Performance-Optimization.png" />

            <link rel="canonical" href="https://www.razorinfotech.com/services/app-development" />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Mobile Application Development",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Professional mobile app development services for iOS, Android, and cross-platform applications with custom solutions, performance optimization, and scalable architecture.",
                    "areaServed": "Worldwide",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Mobile App Development Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "iOS App Development"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Android App Development"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Cross-Platform App Development"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "UI/UX Design"
                                }
                            }
                        ]
                    }
                })}
            </script>

            <section className="bg-accent px-6 py-12" aria-labelledby="hero-heading">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="p-5">
                        <img
                            src="/images/Software-developement/diverse-friends-using-digital-devices 1.png"
                            alt="Team collaborating on mobile app development using various digital devices"
                            className="lg:w-4/5 h-auto rounded-2xl object-cover"
                            loading="eager"
                            width="800"
                            height="600"
                        />
                    </div>

                    <div>
                        <h1 id="hero-heading" className="text-3xl font-semibold text-heading md:text-4xl lg:max-w-[100%]">
                            Turn Your Idea Into a Resourceful App
                        </h1>

                        <p className="mt-5 text-lg text-paragraph/80 lg:max-w-[80%]">
                            Now, transform your raw idea into a scalable and secure mobile app with our custom mobile app development services. Razor Infotech is a leading mobile app development company that designs mobile app solutions for Android, iOS, and cross-platform.

                        </p>

                        <Link
                            to="/contact"
                            className="mt-6 inline-flex items-center gap-3 rounded-full bg-secondary px-5 py-2 group hover:bg-transparent hover:text-secondary hover:border border-secondary text-white transition-all duration-300"
                            aria-label="Start your free trial consultation"
                        >
                            Start Your Project
                            <span className="grid place-items-center rounded-full group-hover:bg-secondary text-white bg-white/20 p-2 transition-colors" aria-hidden="true">
                                <IoArrowForwardOutline />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--color-background)] px-6 py-14" aria-labelledby="features-heading">
                <div className="mx-auto max-w-7xl">
                    <h2 id="features-heading" className="text-center text-3xl leading-14 font-semibold text-[var(--color-heading)] md:text-4xl">
                        Our Mobile App Development Services
                    </h2>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {FEATURES.map((f) => (
                            <FeatureCard key={f.title} {...f} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-accent px-6 py-14 md:py-16" aria-labelledby="workflow-heading">
                <div className="mx-auto max-w-7xl">
                    <h2 id="workflow-heading" className="text-center text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                        Why Choose Razor Infotech?
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-center text-[var(--color-paragraph)]/80">
                        Razor Infotech delivers innovative, high-quality solutions that drive business success.
                    </p>

                    <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 list-none">
                        {STEPS.map(({ Icon, title, desc }, i) => (
                            <li
                                key={title}
                                className="rounded-[22px] bg-[var(--color-accent)] p-6 text-center shadow-sm ring-1 ring-[var(--color-paragraph)]/15"
                            >
                                <div className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-full bg-[var(--color-secondary)] text-[var(--color-accent)]" aria-hidden="true">
                                    <Icon className="h-4 w-4" />
                                </div>
                                <h3 className="text-base font-semibold text-[var(--color-heading)]">
                                    {i + 1}. {title}
                                </h3>
                                <p className="mx-auto mt-3 max-w-[36ch] text-sm leading-6 text-[var(--color-paragraph)]/80">
                                    {desc}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <WhychooseSection points={points} />

            <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
                <Faq faqs={faqs} />
            </Suspense>
        </>
    );
}

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
            title: "Discovery & Strategy",
            desc: "The first step in the flow is to understand the vision, goals, and requirements of our clients.",
        },
        {
            Icon: Palette,
            title: "UI & UX Design",
            desc: "With this understanding, our team creates intuitive and engaging user experiences.",
        },
        {
            Icon: Code2,
            title: "Development",
            desc: "Coding is what brings the design and idea into reality using the best practices and framework.",
        },
        {
            Icon: Wrench,
            title: "Testing And Q&A",
            desc: "When done with the coding, the app is tested to check for any bugs or performance issues.",
        },
        {
            Icon: Rocket,
            title: "Deployment & Integration",
            desc: "When fixed and made error-free, the application is then launched/deployed across platforms.",
        },
        {
            Icon: RefreshCw,
            title: "Maintenance & Updates",
            desc: "We offer support in the continuous updates, monitoring, and improvements after the launch.",
        },
    ];

    const FEATURES = [
        {
            title: "Performance Optimization",
            desc: "Our team works to provide what your business needs for fast, reliable, and bug-free experiences.",
            img: "/images/App-developement/Performance-Optimization.png",
            Icon: BarChart3,
        },
        {
            title: "User-Friendly Design",
            desc: "We design an interface that is clean, engaging, and conversion-focused UI/UX for a better experience.",
            img: "/images/App-developement/User-Friendly -Design.png",
            Icon: Sliders,
        },
        {
            title: "Cross-Platform Compatibility",
            desc: "Providing an app that works smoothly across iOS, Android, and the web with a great user-friendly interface.",
            img: "/images/App-developement/Cross-Platform-Compatibility .png",
            Icon: MonitorSmartphone,
        },
        {
            title: "Scalable Structure",
            desc: "Offering app solutions that grow and scale as your business expands, with no major need for re-do.",
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
            question: "What types of mobile apps does Razor Infotech develop?",
            answer: "We develop native iOS apps, native Android apps, cross-platform apps (React Native, Flutter), progressive web apps (PWAs), and enterprise mobile solutions tailored to your business needs."
        },
        {
            question: "How long does it take to develop a mobile application?",
            answer: "Development timelines vary based on app complexity. Simple apps take 2-3 months, medium complexity apps take 4-6 months, and complex enterprise apps may take 6-12 months. We provide detailed timelines during the discovery phase."
        },
        {
            question: "Do you provide post-launch support and maintenance?",
            answer: "Yes, we offer comprehensive post-launch support including bug fixes, performance monitoring, OS updates, feature enhancements, security patches, and continuous optimization to ensure your app stays current."
        },
        {
            question: "What is the cost of developing a mobile app?",
            answer: "App development costs depend on features, complexity, platforms (iOS/Android), and design requirements. We provide transparent pricing after understanding your specific needs during the discovery phase."
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
                            Empowering Businesses with Confidence & Technology
                        </h1>

                        <p className="mt-5 text-lg text-paragraph/80 lg:max-w-[80%]">
                            With our mobile app development services, we offer the entire process of creating,
                            maintaining, and enhancing mobile applications to meet specific business needs.
                            Our team of experts provides services in various technologies and development methodologies.
                        </p>

                        <Link
                            to="/contact"
                            className="mt-6 inline-flex items-center gap-3 rounded-full bg-secondary px-5 py-2 group hover:bg-transparent hover:text-secondary hover:border border-secondary text-white transition-all duration-300"
                            aria-label="Start your free trial consultation"
                        >
                            Start Your Free Trial
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

            <section className="bg-accent px-6 py-14 md:py-16" aria-labelledby="workflow-heading">
                <div className="mx-auto max-w-7xl">
                    <h2 id="workflow-heading" className="text-center text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                        Our Workflow in the Making of an Application
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-center text-[var(--color-paragraph)]/80">
                        Our team follows a proper working process to provide a custom-made application tailored to each
                        business's specific needs and requirements.
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

import BelowImageSection from "../../reusable/BelowImageSection"
import { Lightbulb, Palette, Code2, Wrench, Rocket, RefreshCw } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";
import Faq from "../../reusable/Faq";


export default function WebsiteDevelopement() {

    const items = {
        title: "Giving A Creative Spark To Your Website",
        description: "From eye-pleasing visuals to smooth performance, we design and develop website that a combination of creativity and functionality.",
        image: "/images/Website-developement/website-developement-hero-image.png",
        alt: "Showcase image",
        bgcolor: "bg-accent"
    }

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


    const STEPS = [
        {
            Icon: Lightbulb,
            title: "Understanding Your Needs",
            desc:
                "Define goals, target users, and core features..",
        },
        {
            Icon: Palette,
            title: "UI & UX Design",
            desc:
                "Create visually appealing and user-friendly interfaces.",
        },
        {
            Icon: Code2,
            title: "Development ",
            desc:
                "Build the app with the latest technologies for smooth performance.",
        },
        {
            Icon: Wrench,
            title: "Testing And Q&A",
            desc:
                "Identify and fix bugs for a flawless user experience.",
        },
        {
            Icon: Rocket,
            title: "Deployment & Integration",
            desc:
                "Launch the app on App Store and Play Store",
        },
        {
            Icon: RefreshCw,
            title: "Maintenance & Updates",
            desc:
                "Regular improvements and support for long-term success.",
        },
    ];


    return (
        <>
            <BelowImageSection items={items} />
            <section className="bg-accent p-10">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-5">
                        <div className="lg:col-span-3 lg:row-span-3 lg:col-start-1 lg:row-start-1 rounded-2xl bg-[var(--color-background)] shadow p-4 flex flex-col">
                            <img
                                src="/images/Website-developement/Custom-Web-Development.png"
                                alt="Custom Web Development"
                                className="h-40 w-full rounded-xl object-cover"
                            />
                            <h3 className="mt-4 font-semibold text-[var(--color-heading)]">Custom Web Development</h3>
                            <p className="mt-2 text-sm text-[var(--color-paragraph)]/80">
                                Designing and building of a responsive, scalable, and secure websites tailored to specific brand needs and goals.
                            </p>
                        </div>
                        <div className="lg:col-span-3 lg:row-span-2 lg:col-start-1 lg:row-start-4 rounded-2xl bg-[var(--color-background)] shadow p-4 flex flex-col">
                            <img
                                src="/images/Website-developement/UIUX-Design.png"
                                alt="UI/UX Design"
                                className="h-28 w-full rounded-xl object-cover"
                            />
                            <h3 className="mt-4 font-semibold text-[var(--color-heading)]">UI/UX Design</h3>
                            <p className="mt-2 text-sm text-[var(--color-paragraph)]/80">
                                Designing aesthetically pleasing interfaces that offer smooth user journeys and keep them engaged from first-click.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-1 rounded-2xl bg-[var(--color-background)] shadow p-4 flex flex-col">
                            <img
                                src="/images/Website-developement/E-Commerce-Development.png"
                                alt="E-Commerce Development"
                                className="h-28 w-full rounded-xl object-cover"
                            />
                            <h3 className="mt-4 font-semibold text-[var(--color-heading)]">E-Commerce Development</h3>
                            <p className="mt-2 text-sm text-[var(--color-paragraph)]/80">
                                Building user-friendly and powerful online stores that help drive sales, improve customer experience, and scale business.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="lg:col-span-3 lg:row-span-3 lg:col-start-4 lg:row-start-3 rounded-2xl bg-[var(--color-background)] shadow p-4 flex flex-col">
                            <img
                                src="/images/Website-developement/Website-Maintenance-Support.png"
                                alt="Website Maintenance & Support"
                                className="h-40 w-full rounded-xl object-cover"
                            />
                            <h3 className="mt-4 font-semibold text-[var(--color-heading)]">Website Maintenance & Support</h3>
                            <p className="mt-2 text-sm text-[var(--color-paragraph)]/80">
                                Our team ensures that your website stays fast, secure, and up-to-date with ongoing support and optimization for performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-accent px-6 py-14 md:py-16">
                <div className="mx-auto max-w-6xl">
                    <p className="border border-secondary py-2 px-6 rounded-full text-paragraph mx-auto w-fit mb-4">Work Process</p>
                    <h2 className="text-center text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                        From Concept To Launch
                    </h2>

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
            <section className="py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-6xl mx-auto p-8">
                    <div>
                        <img src="/images/Website-developement/website-developement-section4.png" alt="Building Websites That Drive Growth" className="rounded-2xl" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl font-semibold text-heading max-w-[80%]">Building Websites That Drive Growth</h2>
                        <p className="text-paragraph text-base mt-3 max-w-[70%]">At Razor Infotech, our team of industry expert developers and designers aim to craft each website with uniqueness of every brand. We combine the creativity and functionality to bring a visually pleasing and smooth interface that are user-friendly.</p>
                        <ul className="mt-5">
                            <li className="flex gap-5 items-center mt-4 text-xl"><span><FaDotCircle className="text-secondary" /></span><span>Creative designs tailored to your brand identity.</span></li>
                            <li className="flex gap-5 items-center mt-4 text-xl"><span><FaDotCircle className="text-secondary" /></span><span>Dedicated support & fostering long-term partnership.</span></li>
                            <li className="flex gap-5 items-center mt-4 text-xl"><span><FaDotCircle className="text-secondary" /></span><span>Fast, secure, and scalable solutions.</span></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Faq faqs={faqs} />
        </>
    )
}

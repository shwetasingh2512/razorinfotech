import React from 'react'
import BackgroundImagesection from '../../reusable/BackgroundImagesection'
import Descriptionsection from '../../reusable/Descriptionsection'
import Faq from '../../reusable/Faq'

export default function AngleInvester() {

    const firstsection = {
        image: '/images/angle-invester/angle-investor-hero.png',
        title: "Strategic Angel Investment Solutions",
        description: "Connecting innovative startups with the right investors for sustainable growth. Unlock funding, mentorship, and partnerships to accelerate your journey."
    }

    const secondsection = {
        image: "/images/angle-invester/Fueling.png",
        title: "Fueling Startups with Smart Capital",
        description: "We go beyond traditional funding by linking startups with angel investors who bring capital, experience, and connections. Our approach ensures that entrepreneurs receive not only the financial support they need but also the guidance and strategic partnerships required to scale effectively. By combining smart capital with mentorship, we help innovative startups transform into sustainable, high-growth ventures.",
        background: "bg-accent",
        btn: "Get Funded Today",
        imgWidth:"w-3/5"
    }


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
            <BackgroundImagesection items={firstsection} />
            <Descriptionsection items={secondsection} />
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
            <Faq faqs={faqs}/>
        </>
    )
}

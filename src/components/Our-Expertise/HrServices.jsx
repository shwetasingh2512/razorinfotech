import BackgroundImagesection from "../../reusable/BackgroundImagesection"
import Descriptionsection from "../../reusable/Descriptionsection"
import Faq from "../../reusable/Faq";
import ProcessSection from "../../reusable/ProcessSection";
import WhychooseSection from "../../reusable/WhychooseSection";



export default function HrServices() {

    const firstsection = {
        title: "Recruitment Process Outsourcing",
        description: `Recruitment Process Outsourcings offer a wide range of operational tasks associated with direct customer interactionsregarding issues, queries, and sales related to products or services.`,
        image: "/images/hr-services/hr-services-hero.png"
    };

    const secondsection = {
        background: "bg-background",
        title: "Empo wering Businesses with Engaging Customer Support",
        description: "We provide smart support solutions that strengthen customer relationships through seamless interactions, fast resolutions, and lasting engagement. Our approach enhances loyalty, drives business growth, and empowers brands to connect more effectively while scaling with confidence.",
        image: "/images/hr-services/Empowering.png",
        btn: "Scheduled a Consultation",
        width: "max-w-6xl"
    }


    const thirdsection = {
        background: "bg-gradient-to-b from-unique to-accent",
        head: "Streamlined Hiring Through Expert Recruitment Process Outsourcing",
        paragraph: "We streamline recruitment from sourcing to onboarding, ensuring efficiency, accuracy, and the right talent for your business growth.",
        child: [
            {
                image: "/images/hr-services/Inbound-Services.jpg",
                title: "Inbound Services",
                description: "Our inbound services ensure seamless customer support with quick responses, personalized interactions, and efficient solutions to enhance satisfaction and loyalty."
            },
            {
                image: "/images/hr-services/Outbound-Services.jpg",
                title: "Outbound Services",
                description: "Our outbound services drive growth through proactive customer engagement, lead generation, feedback collection, and tailored communication that strengthens relationships and boosts business success."
            },
            {
                image: "/images/hr-services/Omnichannel-Support-Services.jpg",
                title: "Omnichannel Support Services",
                description: "Our omnichannel support service unifies customer interactions across phone, email, chat, and social media, ensuring seamless experiences, faster resolutions, and improved satisfaction."
            },
            {
                image: "/images/hr-services/Email-Support-Services.jpg",
                title: "Email Support Services",
                description: "Our email support services provide timely, professional, and personalized responses to customer queries, ensuring clear communication, quick resolutions, and enhanced customer satisfaction."
            }
        ]
    };

    const steps = [
        {
            id: "1",
            title: "Requirement analysis",
            desc:
                "We understand your hiring needs, business goals, and job role requirements to build a tailored recruitment strategy.",
        },
        {
            id: "2",
            title: "Talent Sourcing",
            desc:
                "Our team leverages multiple channels to identify, attract, and engage the right candidates.",
        },
        {
            id: "3",
            title: "Screening & Shortlisting",
            desc:
                "We conduct detailed assessments, background checks, and initial interviews to filter top-quality candidates.",
        },
        {
            id: "4",
            title: "Interview Coordination",
            desc:
                "We manage scheduling and communication between candidates and hiring managers for a smooth interview process.",
        },
        {
            id: "5",
            title: "Selection & Offer Management",
            desc:
                "We support final candidate selection, salary negotiation, and offer rollout to ensure acceptance.",
        },
        {
            id: "6",
            title: "Onboarding Support",
            desc:
                "We support final candidate selection, salary negotiation, and offer rollout to ensure acceptance.",
        },
    ];

    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/Software-developement/y-choose-us.png",
        child: [
            {
                title: "Certified IT Professionals",
                desc: "We have a team of trained and professional support agents who are certified to handle technical issues."
            },
            {
                title: "Proactive Monitoring",
                desc: "Our team anticipates and aims to prevent issues before they might impact your operations rather than just taking action afterwards."
            },
            {
                title: "Secure & Compliant",
                desc: "We follow the best industry practices to keep the data of our clients protected and ensure regulatory compliance."
            },
            {
                title: "Custom SLA’s",
                desc: "We use analytics and performance insights to create our content decisions for better ROI."
            },
        ]
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


    return (
        <>
            <BackgroundImagesection items={firstsection} />
            <Descriptionsection items={secondsection} />
            <ProcessSection items={thirdsection} />
            <section className="px-4 sm:px-6 lg:px-8 py-14 lg:py-20 bg-white">
                <div className="mx-auto max-w-7xl text-center">
                    <div className="inline-flex items-center rounded-full bg-green-100 text-green-900 px-4 py-1 text-sm font-medium mb-3">
                        Building Success Together
                    </div>

                    <h2 className="text-heading font-bold text-2xl sm:text-3xl md:text-4xl">
                        Our Recruitment Process Explained
                    </h2>

                    <p className="text-paragraph mt-3 max-w-2xl mx-auto">
                        Our step-by-step process ensures your vision becomes a flawless reality.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {steps.map((s) => (
                            <div
                                key={s.id}
                                className="rounded-2xl bg-green-50 p-6 text-left shadow-sm ring-1 ring-black/5"
                            >
                                <div className="flex items-start gap-3">
                                    <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-green-700 px-2 text-xs font-semibold text-white">
                                        {s.id}
                                    </span>
                                    <div>
                                        <h3 className="text-heading font-semibold text-lg leading-6">
                                            {s.title}
                                        </h3>
                                        <p className="text-paragraph mt-2 text-sm leading-6">
                                            {s.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <WhychooseSection points={points} />
            <Faq faqs={faqs}/>
        </>

    )
}

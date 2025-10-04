import BackgroundImagesection from "../../reusable/BackgroundImagesection";
import Descriptionsection from "../../reusable/Descriptionsection";
import Faq from "../../reusable/Faq";
import ProcessSection from "../../reusable/ProcessSection";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";



export default function TalentDevelopement() {


    const firstsection = {
        title: "Growing Talent, Growing Business",
        description: `Empowering people with the right skills and opportunities to innovate, perform, and drive sustainable business growth.`,
        image: "/images/talent-developement/talent-developement-hero.png"
    };

    const secondsection = {
        background: "bg-accent",
        title: "Empowering Startups and Businesses to Succeed",
        description: "We help ambitious startups and growing businesses unlock their true potential with tailored strategies, smart funding solutions, and expert guidance. From building strong foundations to scaling operations, our mission is to provide the tools, knowledge, and partnerships needed to thrive in a competitive market. With us as your trusted partner, success isn’t just a goal — it’s the journey we take together.",
        image: "/images/talent-developement/Empowering-Startups.png",
        btn: "Scheduled a Consultation",
        width: "max-w-6xl"
    }


    const thirdsection = {
        background: "bg-gradient-to-b from-unique to-accent",
        head: "Leadership Development Programs",
        paragraph: " Our training programs are designed to strengthen leadership, enhance soft skills, upskill talent, and improve sales performance — ensuring your team is prepared for today and ready for tomorrow.",
        child: [
            {
                image: "/images/talent-developement/Leadership-Developmen.jpg",
                title: "Leadership Development Programs",
                description: "Prepare future leaders with the skills to inspire, guide, and drive organizational success. Our programs focus on strategic thinking, decision-making, and people management to build strong leaders at every level."
            },
            {
                image: "/images/talent-developement/Career-Pathing.jpg",
                title: "Career Pathing & Employee Growth",
                description: "Help your workforce see a clear path to success. We design structured career roadmaps, development plans, and skill-building initiatives that keep employees motivated and engaged."
            },
            {
                image: "/images/talent-developement/Coaching.jpg",
                title: "Coaching & Mentorship",
                description: "Provide employees with one-on-one guidance from experienced coaches and mentors. From performance improvement to personal growth, our coaching programs foster confidence, accountability, and long-term success."
            },
            {
                image: "/images/talent-developement/Continuous-Learning.jpg",
                title: "Continuous Learning & Workshops",
                description: "Keep teams future-ready with ongoing learning opportunities, interactive workshops, and upskilling programs. We tailor training to industry trends and organizational needs, ensuring your people remain competitive in a fast-changing business world."
            }
        ]
    };


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



    const PPC = [
        {
            title: "Proven Expertise Across Industries",
            description: "With exports in our team, we understand what works best for different audiences."
        },
        {
            title: "End-to-End PPC Campaign Management",
            description: "Our team handles every aspect of your PPC campaigns, driving results that matter."
        },
        {
            title: "Transparent Reporting",
            description: "We believe in complete transparency, so you always know how campaigns are performing."
        },
        {
            title: "Tailored Strategies ",
            description: "We create personalized PPC strategies that match your objectives for better growth."
        },

    ]

    return (
        <>
            <BackgroundImagesection items={firstsection} />
            <Descriptionsection items={secondsection} />
            <ProcessSection items={thirdsection} />
            <section className="bg-accent p-10">
                <div className="max-w-6xl mx-auto">
                    <div className="head">
                        <h3 className="text-3xl text-heading text-center font-semibold">Why Choose Razor Infotech for PPC?</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto my-8">
                        {
                            PPC.map((e, i) => (
                                <div className="p-5 bg-background rounded-2xl">
                                    <div className="flex gap-5 items-center">
                                        <IoIosCheckmarkCircleOutline className="text-secondary" />
                                        <span className="text-heading font-semibold">{e.title}</span>
                                    </div>
                                    <p className="text-paragraph text-base mt-4">{e.description}</p>
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

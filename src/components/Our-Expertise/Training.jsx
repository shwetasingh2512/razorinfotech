import BackgroundImagesection from "../../reusable/BackgroundImagesection";
import Descriptionsection from "../../reusable/Descriptionsection";
import Faq from "../../reusable/Faq";
import ProcessSection from "../../reusable/ProcessSection";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


export default function Training() {

    const firstsection = {
        title: "Training & Development Solutions",
        description: `Empowering teams with the skills, knowledge, and confidence they need to drive organizational success.`,
        image: "/images/talent-developement/talent-developement-hero.png"
    };

    const secondsection = {
        background: "bg-accent",
        title: "Empowering Startups and Businesses to Succeed",
        description: `We believe people are the strongest asset of any organization. Our Training & Development solutions are designed to enhance skills, boost performance, and prepare teams for future challenges. From leadership programs to technical upskilling, we provide tailored training that drives real results.
Through engaging workshops, hands-on learning, and continuous development strategies, we help individuals and organizations unlock their full potential. Whether you’re looking to strengthen your workforce, build leadership capabilities, or foster innovation, our programs are built to deliver measurable impact.`,
        image: "/images/talent-developement/Empowering-Startups.png",
        btn: "Scheduled a Consultation",
        width: "max-w-7xl"
    }


    const thirdsection = {
        background: "bg-background",
        head: "Building Skills That Drive Success",
        paragraph: "Our training programs are designed to strengthen leadership, enhance soft skills, upskill talent, and improve sales performance — ensuring your team is prepared for today and ready for tomorrow.",
        child: [
            {
                image: "/images/Training/Leadership.jpg",
                title: "Leadership & Management Training",
                description: "Develop strong leaders with the skills to inspire, guide, and drive organizational success."
            },
            {
                image: "/images/Training/Soft.jpg",
                title: "Soft Skills Development",
                description: "Enhance communication, collaboration, and problem-solving abilities to build high-performing teams."
            },
            {
                image: "/images/Training/Technical.jpg",
                title: "Technical Upskilling",
                description: "Equip employees with the latest tools and industry knowledge to stay competitive and future-ready."
            },
            {
                image: "/images/Training/Sales.jpg",
                title: "Sales & Customer Service Training",
                description: "Boost sales performance and customer satisfaction through practical, results-driven training programs."
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
                title: "Expert Team",
                description: "Our experienced professionals bring years of industry expertise to every project ."
            },
            {
                title: "24/7 Support",
                description: "Round-the-clock support to ensure your business operations never stop."
            },
            {
                title: "Scalable Solutions",
                description: "Solutions that grow with your business, from startup to enterprise level."
            },
            {
                title: "Proven Results",
                description: "Track record of helping businesses achieve their growth objectives."
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
                        <h3 className="text-3xl text-heading text-center font-semibold">Why Choose Razor Infotech?</h3>
                        <p className="text-center text-paragraph mt-5">Razor Infotech delivers innovative, high-quality solutions that drive business success.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto mt-8">
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

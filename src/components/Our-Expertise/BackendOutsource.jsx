import Descriptionsection from "../../reusable/Descriptionsection"
import Faq from "../../reusable/Faq";
import WhychooseSection from "../../reusable/WhychooseSection";
import { FaUsersCog, FaClock, FaChartLine } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";

export default function BackendOutsource() {

    const firstsection = {
        title: "Reliable, Scalable, and Efficient Business Operations",
        description: "Backend outsourcing services allow businesses to offload time-consuming, technical, or repetitive processes to a dedicated team of professionals. From server management and database handling to backend development and admin support, we take care of the heavy lifting while you focus on growth and innovation.",
        image: "/images/backend-outsource/backend-outsource-hero.png",
        btn: "Outsource My Backend Today",
        background: "bg-accent",
        imgWidth: "w-4/5",
        width: "max-w-6xl"
    }

    const benefits = [
        {
            id: 1,
            title: "Server & Infrastructure Management",
            description:
                "Monitoring, maintaining, and optimizing your IT infrastructure for performance and uptime.",
        },
        {
            id: 2,
            title: "Database Management",
            description:
                "Secure setup, administration, and optimization of structured and unstructured databases.",
        },
        {
            id: 3,
            title: "API Integration & Management",
            description:
                "Building and managing secure, scalable APIs for seamless frontend-backend communication.",
        },
        {
            id: 4,
            title: "Backend Development",
            description:
                "Robust and scalable backend code development in frameworks like Node.js, Python, PHP, and Java.",
        },
        {
            id: 5,
            title: "Admin & Operational Support",
            description:
                "Handling administrative processes like data entry, report generation, and workflow automation.",
        },
        {
            id: 6,
            title: "Technical Support & Maintenance",
            description:
                "Round-the-clock backend monitoring, troubleshooting, and maintenance services.",
        },
    ];

    const thirdsection = {
        title: "Why Businesses Need Backend Outsourcing Services",
        description: "Backend Outsourcing allows your internal team to focus on their core business activities and strategic goals while complex technical tasks like data management, server maintenance, and application development are handled by expert third-party providers.",
        image: "/images/backend-outsource/Businesses-Need.png",
        background: "bg-background",
        imgWidth: "w-4/5",
        width: "max-w-7xl"
    }



    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/Software-developement/y-choose-us.png",
        child: [
            {
                title: "Dedicated Tech Teams",
                desc: "Our backend specialists are skilled and trained to handle complex infrastructure and backend workflows across industries."
            },
            {
                title: "Process Automation",
                desc: "We help automate repetitive backend tasks to increase operational efficiency and reduce manual errors.."
            },
            {
                title: "Customized Solutions",
                desc: "We follow the best industry practices to keep the data of our clients protected and ensure regulatory compliance."
            },
            {
                title: "Data Security First",
                desc: "You can choose from project-based, hourly, or dedicated team models based on your business size and needs"
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

    const advantages = [
        {
            id: 1,
            title: "Reduced Operational Costs",
            description:
                "Outsourcing backend tasks lowers overhead by eliminating the need for in-house infrastructure and staffing, without compromising quality.",
            icon: <FaChartLine className="text-white text-2xl" />,
        },
        {
            id: 2,
            title: "Access to Specialized Talent",
            description:
                "Get access to experienced developers, administrators, and IT professionals without the challenge of hiring or training internally.",
            icon: <MdOutlineGroups className="text-white text-2xl" />,
        },
        {
            id: 3,
            title: "Faster Time-to-Market",
            description:
                "Our expert teams help you launch products and services faster by accelerating backend development and integration timelines.",
            icon: <FaClock className="text-white text-2xl" />,
        },
        {
            id: 4,
            title: "Focus on Core Business Goals",
            description:
                "By outsourcing backend operations, your internal team can stay focused on strategy, innovation, and customer engagement.",
            icon: <FaUsersCog className="text-white text-2xl" />,
        },
    ];


    return (
        <>
            <Descriptionsection items={firstsection} />
            <section className="px-6 py-16 bg-white">
                <p className="text-center text-sm border border-light-green rounded-full px-4 py-1 w-fit mx-auto text-light-green mb-6">
                    Benefits
                </p>
                <h2 className="text-center text-3xl md:text-4xl font-bold text-heading mb-12">
                    Why Businesses Need Backend <br /> Outsourcing Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {benefits.map((b) => (
                        <div
                            key={b.id}
                            className="bg-background rounded-2xl p-6 shadow-sm"
                        >
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-light-green text-white font-bold mb-4">
                                {b.id}
                            </div>
                            <h3 className="text-lg font-semibold text-heading mb-2">
                                {b.title}
                            </h3>
                            <p className="text-paragraph text-sm leading-6">{b.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Descriptionsection items={thirdsection} />
            <section className="px-6 py-16 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {advantages.map((a) => (
                        <div
                            key={a.id}
                            className="bg-background rounded-2xl p-6 flex gap-4 items-start"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary p-3">
                                {a.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-heading mb-2">
                                    {a.title}
                                </h3>
                                <p className="text-paragraph text-sm leading-6">
                                    {a.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <WhychooseSection points={points} />
            <Faq faqs={faqs} />
        </>
    )
}

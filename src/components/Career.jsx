import BelowImageSection from "../reusable/BelowImageSection";
import Crousel from "../reusable/Crousel";
import { BadgeCheck, Users, BarChart3, Cpu } from "lucide-react";
import Faq from "../reusable/Faq";

export default function Career() {
    const firstsectionobject = {
        title: "Build Your Future With Us",
        description:
            "At our core, we believe that careers are more than just jobs - they’re journeys of growth, learning, and impact. Join a team that empowers you to achieve your full potential while making a difference in the world.",
        image: "/images/career/career-hero.png",
        bgcolor: "bg-background",
    };

    const tiles = {
        workLife: {
            title: "Work-Life Balance",
            desc: "Your well-being matters. We support flexible schedules, hybrid options, and wellness initiatives to help you thrive both at work and at home.",
            img: "/images/career/Work-Life-Balance.png",
        },
        rewards: {
            title: "Rewards & Recognition",
            desc: "",
            img: "/images/career/Rewards.png",
        },
        growth: {
            title: "Growth & Learning",
            desc: "We invest in your professional development with mentorship, training programs, and continuous learning opportunities so you can keep growing at every stage of your career.",
            img: "/images/career/Growth-Learning.png",
        },
        purpose: {
            title: "Impactful Purpose",
            desc: "Be part of exciting projects that push boundaries, encourage creativity, and let you contribute ideas that make a real difference.",
        },
        innovative: {
            title: "Innovative Work",
            desc: " ",
            img: "/images/career/Innovative-Work.png",
        },
    };

    const images = [
        "/images/Home/Team-1.png",
        "/images/Home/Team-2.png",
        "/images/Home/Team-3.png",
        "/images/Home/Team-4.png",
        "/images/Home/Team-5.png",
        "/images/Home/Team-1.png",
        "/images/Home/Team-2.png",
        "/images/Home/Team-3.png",
        "/images/Home/Team-4.png",
        "/images/Home/Team-5.png",
    ]


    const items = [
        {
            Icon: BadgeCheck,
            title: "Excellence in Outsourcing",
            desc:
                "Outsourcing with Razor Infotech goes beyond cost savings—it's about reliability, efficiency, and results. We streamline operations while maintaining uncompromised quality and security.",
        },
        {
            Icon: Users,
            title: "People-Centric Approach",
            desc:
                "We believe in empowering human potential. By focusing on talent, collaboration, and customer-first strategies, we create meaningful experiences for businesses and their customers.",
        },
        {
            Icon: BarChart3,
            title: "Growth Through Partnership",
            desc:
                "We see ourselves as more than just service providers—we’re growth partners. Our scalable solutions and cross-industry expertise ensure long-term success for every client we serve.",
        },
        {
            Icon: Cpu,
            title: "Technology-Driven Innovation",
            desc:
                "From IT solutions to digital transformation, we harness the power of cutting-edge tools and technologies to help companies scale smarter and stay future-ready.",
        },
    ];


    const steps = [
        {
            number: "01",
            title: "Find a role that suits you",
            description: "Discover open positions and find your desired one in the Visioncraft website, job listings or social media.",
            position: "right"
        },
        {
            number: "02",
            title: "Send your application",
            description: "Some simple questions should be answered and your contact information is required",
            position: "left"
        },
        {
            number: "03",
            title: "Receive your interview invite",
            description: "We review all applications within 3 working days and send invitation to candidates.",
            position: "right"
        },
        {
            number: "04",
            title: "Choose an interview slot",
            description: "You will have a friendly discussion with the CEO and your supervisor to talk about the work, life and etc.",
            position: "left"
        },
        {
            number: "05",
            title: "Preliminary Interview",
            description: "Sometimes, we ask candidates to participate in some technical challenge that is designated to demonstrate candidates' proficiency.",
            position: "right"
        },
        {
            number: "06",
            title: "Meet the your teammates",
            description: "To us is crucial to make sure all team members feel comfortable. It is why we do try to have diverse but culturally fitted team members.",
            position: "left"
        },
        {
            number: "07",
            title: "Interview with our CEO",
            description: "Your colleagues are waiting for you to say a warm welcome.",
            position: "right"
        }
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
            <BelowImageSection items={firstsectionobject} />
            <section className="p-12 bg-accent">
                <div className="grid grid-cols-5  gap-4 max-w-6xl mx-auto">
                    <div className="col-span-3 row-span-2 p-4">
                        <span className="rounded-full border border-light-green py-2 px-5">WHY JOIN US</span>
                        <p className="text-3xl font-semibold text-heading mt-3">Experience a workplace that values your<br /> <span className="text-secondary"> growth , creativity and well being.</span></p>
                        <p className="text-base text-paragraph mt-3 max-w-[50ch]">Experience a fulfilling career with growth , flexibility and a supportive team culture.</p>
                    </div>
                    <div className="col-span-3 row-span-2 col-start-1 row-start-3 flex gap-4 p-5 rounded-3xl border border-light-green">
                        <div>
                            <span className="text-heading text-xl">Growth & Learning</span>
                            <p className="text-base text-paragraph">We invest in your professional development with mentorship, training programs, and continuous learning opportunities so you can keep growing at every stage of your career.</p>
                        </div>
                        <div>
                            <img src="/images/career/Growth-Learning.png" alt="Growth & Learning" />
                        </div>
                    </div>
                    <div className="col-span-2 row-span-3 col-start-4 row-start-1 rounded-3xl border border-light-green p-5">
                        <img src="/images/career/Work-Life-Balance.png" alt="Work-Life Balance" className="w-3/5 mx-auto" />
                        <span className="text-xl text-heading mt-4">Work-Life Balance</span>
                        <p className="text-paragraph text-base mt-2">Your well-being matters. We support flexible schedules, hybrid options, and wellness initiatives to help you thrive both at work and at home.</p>
                    </div>
                    <div className="col-span-2 row-span-2 col-start-4 row-start-4 p-5 rounded-3xl border border-light-green">
                        <span className="text-xl text-heading">Rewards & Recognition</span>
                        <img src="/images/career/Rewards.png" alt="Rewards & Recognition" className="w-3/5 mx-auto mt-5" />
                    </div>
                    <div className="col-span-3 col-start-1 row-start-5 flex gap-6">
                        <div className="border border-light-green p-5 rounded-3xl w-1/2">
                            <span className="text-xl text-heading">Impactful Purpose</span>
                            <p>Be part of exciting projects that push boundaries, encourage creativity, and let you contribute ideas that make a real difference.</p>
                        </div>
                        <div className="border border-light-green p-5 rounded-3xl w-1/2">
                            <span className="text-xl">Innovative Work</span>
                            <img src="/images/career/Innovative-Work.png" alt="Innovative Work" className="w-3/5 mx-auto mt-5" />
                        </div>
                    </div>
                </div>

            </section>
            <section className="bg-gradient-to-b from-unique to-accent relative  p-20">
                <h2 className="text-center font-primary text-4xl mx-auto text-heading font-semibold">Our People, Our Strength</h2>
                <p className="mx-auto text-center text-lg mt-5 text-paragraph/70 mb-16">Meet the talented professionals whose skills, passion, and dedication drive our company’s success</p>
                <Crousel images={images} />
            </section>
            <section className="px-4 sm:px-6 lg:px-8 py-14 lg:py-20 bg-accent">
                <div className="mx-auto max-w-6xl text-center">
                    <h2 className="text-heading font-bold text-2xl sm:text-3xl md:text-4xl">
                        What Our Service Stands For
                    </h2>
                    <p className="text-paragraph mt-3 max-w-2xl mx-auto">
                        The principles that guide our work, inspire innovation, and shape
                        every solution we deliver.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {items.map(({ Icon, title, desc }) => (
                            <div
                                key={title}
                                className="rounded-2xl bg-background p-8 shadow-sm ring-1 ring-black/5"
                            >
                                <div className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-md bg-secondary text-white">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-heading font-semibold">
                                    {title}
                                </h3>
                                <p className="text-paragraph mt-3 max-w-md mx-auto">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="min-h-screen bg-green-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 sm:mb-20">
                        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6">
                            Our Interview Process
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                            From the first hello to the final decision, we aim to make the process collaborative,
                            supportive, and a true reflection of our culture
                        </p>
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-light-green h-full hidden lg:block"></div>
                        <div className="absolute left-8 top-0 w-1 bg-light-green h-full lg:hidden"></div>
                        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                            {steps.map((step, index) => (
                                <div key={index}>
                                    <div className={`hidden lg:flex items-center ${step.position === 'left'
                                        ? 'flex-row-reverse text-right'
                                        : 'flex-row text-left'
                                        } justify-center`}>
                                        <div className={`w-5/12 ${step.position === 'left' ? 'pr-8' : 'pl-8'}`}>
                                            <div className=" rounded-lg p-6 relative">
                                                <div className={`absolute top-8 ${step.position === 'left'
                                                    ? 'right-0 transform translate-x-full'
                                                    : 'left-0 transform -translate-x-full'
                                                    }`}>
                                                    <div className={`w-0 h-0 ${step.position === 'left'
                                                        ? 'border-l-[12px] border-l-white border-y-[12px] border-y-transparent'
                                                        : 'border-r-[12px] border-r-white border-y-[12px] border-y-transparent'
                                                        }`}></div>
                                                </div>

                                                <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 mx-8">
                                            <span className="text-lg font-bold text-gray-800">
                                                {step.number}
                                            </span>
                                        </div>
                                        <div className="w-5/12"></div>
                                    </div>
                                    <div className="flex lg:hidden items-start">
                                        <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-green-500 rounded-full flex items-center justify-center relative z-10 mr-6">
                                            <span className="text-lg font-bold text-gray-800">
                                                {step.number}
                                            </span>
                                        </div>

                                        <div className="flex-1">
                                            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 relative">
                                                <div className="absolute left-0 top-6 transform -translate-x-full">
                                                    <div className="w-0 h-0 border-r-[12px] border-r-white border-y-[12px] border-y-transparent"></div>
                                                </div>

                                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 leading-tight">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12 sm:mt-16 flex items-center">

                        </div>
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10">
                                <span className="text-2xl">🤝</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Faq faqs={faqs}/>
        </>
    );
}
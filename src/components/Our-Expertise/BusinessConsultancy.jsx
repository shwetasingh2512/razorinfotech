import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Faq from "../../reusable/Faq";


export default function BusinessConsultancy() {

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
            <section className=" bg-accent px-6 py-12">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 className="text-3xl font-semibold text-heading md:text-4xl max-w-[90%]">
                            Reliable, Scalable, and Efficient Business Operations
                        </h1>
                        <p className="text-paragraph/80 text-md max-w-[80%]">
                            Backend outsourcing services allow businesses to offload time-consuming, technical, or repetitive processes to a dedicated team of professionals. From server management and database handling to backend development and admin support, we take care of the heavy lifting while you focus on growth and innovation.
                        </p>
                        <Link
                            to="#"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white"
                        >
                            <span>View Our Services</span>
                            <span className="rounded-full bg-white/20 p-2">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>
                    <div>
                        <img
                            src="/images/business-consultancy/business-consultancy-hero.png"
                            alt="Content creation hero"
                            className="h-auto w-4/5 rounded-2xl object-cover"
                        />
                    </div>

                </div>
            </section>
            <section className=" px-6 py-12">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div>
                        <img
                            src="/images/business-consultancy/Strategic.png"
                            alt="Content creation hero"
                            className="h-auto w-4/5 rounded-2xl object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <p className="text-xl text-light-green font-semibold border border-light-green py-2 px-5 rounded-full w-fit">Business Consultancy</p>
                        <h1 className="text-3xl font-semibold text-heading md:text-4xl max-w-[90%]">
                            Strategic Business Consultancy for Every Stage
                        </h1>
                        <p className="text-paragraph/80 text-md max-w-[80%]">
                            At Razor Infotech, we provide strategic business consultancy for every stage—supporting startups and established companies alike. From market research and process optimization to financial advisory and digital transformation, we deliver actionable strategies and expert guidance that help businesses overcome challenges, seize opportunities, and achieve sustainable growth.
                        </p>
                        <Link
                            to="#"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white"
                        >
                            <span>Talk to Our Support Specialists</span>
                            <span className="rounded-full bg-white/20 p-2">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>

                </div>
            </section>
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
            <Faq faqs={faqs}/>
        </>
    )
}

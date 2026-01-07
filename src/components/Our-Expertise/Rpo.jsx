import React from 'react'
import BackgroundImagesection from '../../reusable/BackgroundImagesection';
import Descriptionsection from '../../reusable/Descriptionsection';
import WhychooseSection from '../../reusable/WhychooseSection';
import Faq from '../../reusable/Faq';

function Rpo() {

    const items = {
        title: "Recruitment Process Outsourcing",
        description: "Recruitment Process Outsourcings offer a wide range of operational tasks associated with direct customer interactionsregarding issues, queries, and sales related to products or services.",
        image: "/images/omnichanel/omnichanel-hero.png"
    };

    const descriptionSection = {
        title: "Empowering Businesses with Engaging Customer Support",
        description: "We provide smart support solutions that strengthen customer relationships through seamless interactions, fast resolutions, and lasting engagement. Our approach enhances loyalty, drives business growth, and empowers brands to connect more effectively while scaling with confidence.",
        image: "/images/Rpo/Empowering.jpg",
        imgWidth: "w-3/5",
        width: "max-w-7xl",
        background: "bg-background",
        btn: "Improve My Data Accuracy"
    };


    const steps = [
        {
            title: "Requirement Analysis",
            desc: "We understand your hiring needs, business goals, and job role requirements to build a tailored recruitment strategy.",
        },
        {
            title: "Talent Sourcing",
            desc: "Our team leverages multiple channels to identify, attract, and engage the right candidates.",
        },
        {
            title: "Screening & Shortlisting",
            desc: "We conduct detailed assessments, background checks, and initial interviews to filter top-quality candidates.",
        },
        {
            title: "Interview Coordination",
            desc: "We manage scheduling and communication between candidates and hiring managers for a smooth interview process.",
        },
        {
            title: "Selection & Offer Management",
            desc: "We support final candidate selection, salary negotiation, and offer rollout to ensure acceptance.",
        },
        {
            title: "Onboarding Support",
            desc: "We assist with documentation, coordination, and follow-ups to ensure a seamless onboarding experience.",
        },
    ];

    const points = {
        background: "bg-gradient-to-r from-unique to-accent",
        image: "/images/Rpo/Galert.png",
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
    };

    const faqs = [
        {
            question: "What service Razor offer?",
            answer: "We help businesses to follow the laws and manage their risk. Consider us a guide for our legal paperwork, government regulations, and company policies, so that you can focus on running your business with peace of mind.",
        },
        {
            question: " Is our business information safe with Razor?",
            answer: "Yes, your business is safe with us. We secure systems for all documents and communications. Before beginning our process, we sign a Non-Disclosure Agreement (NDA) to protect your data.",
        },
        {
            question: "Are legal and compliance solutions for big companies? ",
            answer: "No, we work with all types of companies. We provide the right level of support for both small startups and established companies within a budget.",
        },
        {
            question: "How do you stay updated on changing laws?",
            answer: "Our team continuously monitors legal and regulatory updates and provides ongoing clients with clear summaries and actionable steps to maintain compliance effortlessly.",
        },
    ];


    return (
        <>
            <BackgroundImagesection items={items} />
            <Descriptionsection items={descriptionSection} />
            <section className="w-full bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <span className="inline-block mb-4 rounded-full border border-green-500 px-4 py-1 text-xs font-medium text-green-600">
                            Building Success Together
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
                            Our Recruitment Process Explained
                        </h2>
                        <p className="text-sm text-gray-600">
                            Our step-by-step process ensures your vision becomes a flawless reality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-green-50 p-6 shadow-sm"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-700 text-white text-sm font-medium">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {step.title}
                                    </h3>
                                </div>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <WhychooseSection points={points} />
            <Faq faqs={faqs} />
        </>
    )
}

export default Rpo
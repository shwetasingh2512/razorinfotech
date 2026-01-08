import React from 'react'
import BelowImageSection from '../../reusable/BelowImageSection'
import { VscGraph } from "react-icons/vsc";
import { TrendingUp, PenTool, Target, BarChart3 } from 'lucide-react';
import Faq from '../../reusable/Faq';


function Socialmediamarketing() {

    const firstSection = {
        title: "Turn Scrolling Into Selling With Social Media Marketing",
        description: "At Razor Infotech, we maximize your brand’s presence and authority to drive consistent growth with engaging content and active community management.",
        image: "images/social-media-marketing/social-media-marketing-heroImage.jpg",
        bgColor: "bg-white"
    }

    const secondSectionCards = [
        {
            id: 1,
            image: "/images/data-driven.jpg",
            icon: TrendingUp,
            title: "Data-Driven Strategy",
            description: "Audience insights and performance analytics guide every campaign to ensure measurable growth and smarter decisions."
        },
        {
            id: 2,
            image: "/images/content-creation.jpg",
            icon: PenTool,
            title: "Creative Content Creation",
            description: "High-quality visuals, videos, and copy crafted to capture attention and reflect your brand voice."
        },
        {
            id: 3,
            image: "/images/advertising.jpg",
            icon: Target,
            title: "Performance-Focused Advertising",
            description: "After setting up campaigns, our experts refine targeting parameters, start with the bid adjustments, and track performance."
        },
        {
            id: 4,
            image: "/images/reporting.jpg",
            icon: BarChart3,
            title: "Transparent Reporting & Optimization",
            description: "Clear performance reports with continuous optimization to improve results across all platforms."
        }
    ];

    const features = [
        {
            title: "Specialized Expertise Across Industries",
            description:
                "With years of experience, we understand what builds diverse audiences.",
        },
        {
            title: "Transparent Reporting",
            description:
                "Our clear, actionable transparency, so you always know how campaigns are performing.",
        },
        {
            title: "Complete PPC Campaign Management",
            description:
                "Our team handles every aspect of your PPC campaigns, which drives results.",
        },
        {
            title: "Customized Strategies",
            description:
                "We create personalized PPC strategies that match your objectives for lasting success.",
        },
    ];

    const faqs = [
        {
            question: "What is Social Media Marketing?",
            answer: "Social media marketing is the practice of using social media platforms to connect with the wider audience and build a brand’s reputation, increase ROI, and drive website traffic",
        },
        {
            question: "What are the main steps in social media marketing?",
            answer: "The main steps of social media marketing are: \n Define your goals \n Find your perfect audience \n Select the social media channel \n Create engaging and high-quality content \n Use analytical tools and check the performance",
        },
        {
            question: "What are the 7 C’s of social media marketing?",
            answer: "The 7 C’s of social media marketing are: \n Content \n Context \n Connection \n Community \n Customization \n Communication \n Collaboration",
        },
        {
            question: "What are the core pillars of social media?",
            answer: "The main pillars of social media are strategy, content creation, high engagement, reviewing analytics, and advertising.",
        },
    ];


    return (
        <>
            <BelowImageSection items={firstSection} />
            <section className="linear-gradient py-12 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Powerful Features That Drive Social Growth
                        </h2>
                        <p className="mt-4 text-sm text-gray-700 sm:text-base md:text-lg">
                            Everything you need to build engagement, increase visibility, and achieve
                            measurable results on social media.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        {secondSectionCards.map((card) => (
                            <div
                                key={card.id}
                                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-4 overflow-hidden rounded-xl">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
                                    <card.icon className="h-6 w-6" strokeWidth={2.5} />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                                    {card.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-center text-3xl font-semibold text-gray-900 mb-12">
                        Why Choose Razor Infotech ?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-4 rounded-lg bg-green-50 p-6 shadow-sm"
                            >
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold">
                                    ✓
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Faq faqs={faqs} />
        </>
    )
}

export default Socialmediamarketing
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq({ faqs = [] }) {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative  bg-accent py-24 px-6 sm:px-10 lg:px-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-heading">FAQ’s</h2>
            <p className=" mb-8 text-center text-paragraph">
                Most asked questions regarding us for a quick overview of how and what we do.
            </p>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                    <img
                        src="/images/Faq/Faq.jpg"
                        alt="FAQ illustration"
                        className="rounded-xl shadow-lg object-cover"
                    />
                </div>
                <div>


                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-background backdrop-blur-sm border border-white/10 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center px-5 py-4 text-left"
                                >
                                    <span className="font-semibold text-heading">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 transform text-secondary transition-transform ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {openIndex === index && (
                                    <div className="px-5 pb-4 text-sm text-paragraph">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

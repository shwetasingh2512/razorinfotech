import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-accent py-10 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-center text-heading">FAQ’s</h2>
      <p className="mb-6 sm:mb-8 text-center text-paragraph">
        Most asked questions regarding us for a quick overview of how and what we do.
      </p>
      <div className="max-w-full sm:max-w-2xl lg:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="/images/Faq/Faq.jpg"
            alt="FAQ illustration"
            className="rounded-xl shadow-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
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
                  className="w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left"
                >
                  <span className="font-semibold text-heading text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform text-secondary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-5 pb-4 text-sm sm:text-base text-paragraph">
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

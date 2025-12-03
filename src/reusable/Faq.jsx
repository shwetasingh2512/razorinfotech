import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-accent px-4 sm:px-8 lg:px-20 py-10 sm:py-16 lg:py-24">

      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-heading mb-3 sm:mb-4">
        FAQ’s
      </h2>
      <p className="text-center text-paragraph mx-auto max-w-prose mb-6 sm:mb-8">
        Most asked questions regarding us for a quick overview of how and what we do.
      </p>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-2xl md:max-w-3xl lg:max-w-5xl items-start">
        <div className="flex justify-center">
          <img
            src="/images/Faq/Faq.jpg"
            alt="FAQ illustration"
            className="rounded-xl shadow-lg object-cover w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
            loading="lazy"
          />
        </div>
        <div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl bg-background/80 backdrop-blur-sm border border-white/10 overflow-hidden transition"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-heading">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-secondary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-4 sm:px-5 pb-4 text-sm sm:text-base text-paragraph leading-relaxed">
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

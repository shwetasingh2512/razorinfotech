import BackgroundImagesection from '../../reusable/BackgroundImagesection'
import Descriptionsection from '../../reusable/Descriptionsection';
import Faq from '../../reusable/Faq';

function Outbound() {

    const items = {
        title: "Outbound Call Center Solutions",
        description: "Upgrade your business level with top-quality outbound call services. We are offering enhanced outbound support to businesses of every size.",
        image: "/images/omnichanel/omnichanel-hero.png"
    };

    const descriptionSection = {
        title: "Turing Cold Customer Calls To Closed Deals",
        description: "At Razor, we provide you with professional outgoing calls for product follow-ups or lead generation. Our services are specialized solutions in handling all the aspects of outbound operations. We aim to provide our clients with business help to extend their reach and increase the efficiency of telesales and customer surveys. Learn about the types and benefits of choosing our game-changer services.",
        image: "/images/Outbound/Turing.jpg",
        imgWidth: "w-3/5",
        width: "max-w-7xl",
        background: "bg-background",
        btn: "Improve My Data Accuracy"
    };

    const supportedChannels = [
        {
            title: "Telemarketing & Cold Calling",
            desc: "Under these services, our agent makes calls to potential customers to sell and follow up on the generated lead. The telemarketing service is a form of direct marketing that involves not only lead generation but also gathering market information.",
            image: "/images/omnichanel/Phone-Support.jpg",
        },
        {
            title: "Lead Generation",
            desc: "our team of professionals identifies potential customers who may be interested or have shown interest in a client's product or service. We collect the information of these potential customers and evaluate their suitability for sales efforts in the future.",
        },
        {
            title: "Appointment Setting",
            desc: "Outbound services also offer appointment scheduling, whether it's for sales representatives, health clinics, or any other professionals with potential clients or customers. Our professional works as the mediator to help you schedule appointments for meetings or demos.",
        },
        {
            title: "Follow-Up Calls",
            desc: "Through this service, we connect with customers of the business after initial sale or contract. It is done to follow up on a quote, trial, or previous customer service interaction. Our experts are trained for such follow-ups and customer interaction, making your business's customer engagement great.",
            image: "/images/omnichanel/Social-Media.jpg",
        },
    ];

    const gmbProcess = [
        {
            title: "E-commerce Companies",
            desc: "E-commerce businesses benefit from outbound services for customer follow-ups, promotional campaigns, feedback collection, cart abandonment recovery, and re-engagement initiatives to boost sales and enhance customer retention.",
        },
        {
            title: "Telecom Businesses",
            desc: "Our outbound call services offer telecom companies the ability to reach out to customers for plan upgrades, service renewals, promotional offers, payment reminders, and satisfaction surveys to improve customer loyalty and upsell opportunities",
        },
        {
            title: "Healthcare Organizations",
            desc: "Hospitals, clinics, and medical centers use our outbound services to remind patients about upcoming appointments, follow up on treatments, conduct wellness checks, gather feedback, and provide updates about services or health plans. ",
        },
        {
            title: "Hospitality Services",
            desc: "Travel and tourism companies utilize outbound calling to confirm bookings, promote special offers or packages, collect post-stay feedback, and reach out to past guests to encourage repeat visits or seasonal promotions.",
        },
    ];


    const benefits = [
        {
            title: "Excellence in Customer Experience",
            desc: "We aim to meet the customer expectations to excellent the experience. We deliver quick, accurate, and empathetic support that builds strong relationships between the brand and customers.",
        },
        {
            title: "Cost Savings",
            desc: "We offer cost-effective strategies and solutions that eliminate the cost of hiring, training, and managing an in-house team. It is to make sure you get high-quality service without compromising on budget.",
        },
        {
            title: "Improved Work Efficiency",
            desc: "At Razor Infotech, our outsourcing services help you focus on core business activities as we handle customer interactions smoothly for your business.",
        },
        {
            title: "Better Customer Retention",
            desc: "With our dedicated service support, we help create satisfied customers who turn into loyal ones. Also, it will contribute to long-term business success.",
        },
    ];


    const faqs = [
        {
            question: "What is outbound Service?",
            answer: "Outbound service is when a company reaches out to customers via phone, email, or text to generate leads, sell products, and schedule appointments. "
        },
        {
            question: "What are the benefits of outbound call centres?",
            answer: "Outbound call centres help in boosting sales, customer engagement, and brand awareness through proactive outreach like telemarketing and lead generation."
        },
        {
            question: "What is the role of outbound in a call center? ",
            answer: "Outbound call centres are crucial for making outbound calls to customers to provide proactive customer support, inform them about new products or services, to collect feedback"
        },
        {
            question: "What are the two types of outbound calls?",
            answer: "Basically, there are two main types of outbound calls: cold calls and warm calls."
        },
    ];

    return (
        <>
            <BackgroundImagesection items={items} />
            <Descriptionsection items={descriptionSection} />
            <section className="px-6 py-12 bg-accent" aria-labelledby="channels-heading">
                <div className="mx-auto max-w-6xl">
                    <h2 id="channels-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Empowering Businesses Through Innovation
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {supportedChannels.map((c, i) => (
                            <article
                                key={i}
                                className={`relative overflow-hidden rounded-2xl ring-1 ring-[var(--color-paragraph)]/10 ${c.image ? "p-0" : "bg-[var(--color-background)] p-6"
                                    }`}
                            >
                                {c.image && (
                                    <>
                                        <img
                                            src={c.image}
                                            alt={`${c.title} illustration`}
                                            className=" object-cover"
                                            loading="lazy"
                                            decoding="async"
                                            width="400"
                                            height="200"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                                        <div className="absolute inset-0 p-5 flex flex-col ">
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                {c.title}
                                            </h3>
                                            <p className="text-sm leading-6 text-white/90">
                                                {c.desc}
                                            </p>
                                        </div>
                                    </>
                                )}

                                {!c.image && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-[var(--color-heading)] mb-2">
                                            {c.title}
                                        </h3>
                                        <p className="text-sm leading-6 text-[var(--color-paragraph)]/80">
                                            {c.desc}
                                        </p>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-unique to-accent px-6 py-14" aria-labelledby="process-heading">
                <div className="mx-auto max-w-5xl">
                    <h2 id="process-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl mb-3">
                        Kinds of Businesses We Cater to
                    </h2>


                    <div className="mt-10 space-y-10">
                        {gmbProcess.map((it, idx) => (
                            <article key={idx} className="space-y-3">
                                <span className="text-[var(--color-secondary)] font-medium text-xl" aria-label={`Step ${idx + 1}`}>
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                                    {it.title}
                                </h3>
                                <p className="max-w-[85ch] text-[var(--color-paragraph)]/80">
                                    {it.desc}
                                </p>
                                <hr className="mt-4 border-[var(--color-paragraph)]/20" aria-hidden="true" />
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center text-gray-900 mb-2">
                        Benefits of Choosing Razor Infotech
                    </h2>
                    <p className="text-center text-sm text-gray-600 mb-12">
                        Razor Infotech delivers innovative, high-quality solutions that drive
                        business success.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-green-50 p-6 shadow-sm flex gap-4"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {item.desc}
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

export default Outbound
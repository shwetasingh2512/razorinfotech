import { lazy, Suspense } from 'react';
import BackgroundImagesection from '../../reusable/BackgroundImagesection';
import Descriptionsection from '../../reusable/Descriptionsection';

const Faq = lazy(() => import('../../reusable/Faq'));

export default function AngelInvestor() {
    const firstsection = {
        image: '/images/angle-invester/angle-investor-hero.png',
        title: "Connecting Strategic Angel Capital with High-Growth Ventures",
        description: "We help promising new businesses find the perfect investors. Get the funding you need, advice from experienced mentors, and a true partner to help your company grow."
    };

    const secondsection = {
        image: "/images/angle-invester/Fueling.png",
        title: "Partnering with Startups through Smart Capital.",
        description: "We link startups with angel investors who bring capital, experience, and connections. But do you know how we help startups scale? We mainly focus on three pillars:- \n The right funding \n Advice from experts \n  Powerful partnerships \n By combining these gives you get everything you need to build a successful, high-growth business.",
        background: "bg-accent",
        btn: "Get Funded Today",
        link: "/contact",
        imgWidth: "w-3/5"
    };

    const items = [
        {
            title: "Smart Capital Support",
            desc: "The first step to scaling your business is finding the right financial partner. We introduce innovative startups to angel investors who provide both funding and a belief in their vision. Whether you’re launching capital, we make sure that your startup gets matched with investors who share your vision."
        },
        {
            title: "Pitch Perfect Preparation",
            desc: "Our experts help you to prepare compelling pitch decks, financial projections, and growth strategies that capture investor attention by innovating great ideas and powerful stories. We guide you through every step of becoming an investor, ready with confidence."
        },
        {
            title: "Strategic Investor Business Matchmaking",
            desc: "Choosing the right investor changes everything. We move beyond simple introductions that perfectly match with angels who share your vision and bring relevant industry expertise, connections, and a partnership."
        },
        {
            title: "Proper Guidance",
            desc: "Our investors act as strategic advisors who offer hands-on mentorship and operational wisdom to help you navigate challenges, avoid pitfalls, and accelerate your path to success."
        },
        {
            title: "Strategic Partnerships",
            desc: "True growth comes from a strong network. Our focus is on building relationships that accelerate business expansions and long-term success. "
        },
    ];

    const faqs = [
        {
            question: "What is Angel Investment?",
            answer: "Angel investing is when a wealthy individual provides capital to a business startup in exchange for ownership equity or convertible debt. "
        },
        {
            question: "Is angel a good investment?",
            answer: "Yes, angel investment is good as it has less risk than taking out a small business loan."
        },
        {
            question: "Who is eligible for an angel investor?",
            answer: "Anyone who can provide capital for emerging startups for either ownership equity or convertible debt"
        },
        {
            question: "Who is India’s biggest angel investor?",
            answer: "Kunal Shah is India’s biggest angel investor. "
        },
    ];

    return (
        <>
            <title>Angel Investment Services - Connect Startups with Smart Capital | Razor Infotech</title>
            <meta name="description" content="Connect your startup with strategic angel investors. Access funding, mentorship, and industry networks to accelerate growth. Expert guidance for entrepreneurs seeking early-stage investment." />
            <meta name="keywords" content="angel investment, startup funding, angel investors, seed funding, early-stage investment, venture capital, startup mentorship, business funding, investor network, entrepreneurship funding" />
            <meta name="author" content="Razor Infotech" />
            
            <meta property="og:title" content="Angel Investment Solutions - Strategic Startup Funding" />
            <meta property="og:description" content="Connecting innovative startups with the right angel investors for sustainable growth. Get funding, mentorship, and strategic partnerships." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.razorinfotech.com/services/angel-investor" />
            <meta property="og:image" content="https://www.razorinfotech.com/images/angle-invester/angle-investor-hero.png" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Angel Investment Solutions by Razor Infotech" />
            <meta name="twitter:description" content="Strategic angel investment services connecting startups with smart capital, mentorship, and industry networks." />
            <meta name="twitter:image" content="https://www.razorinfotech.com/images/angle-invester/angle-investor-hero.png" />
            
            <link rel="canonical" href="https://www.razorinfotech.com/services/angel-investor" />
            
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FinancialService",
                    "name": "Angel Investment Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "Razor Infotech",
                        "url": "https://www.razorinfotech.com"
                    },
                    "description": "Strategic angel investment solutions connecting innovative startups with experienced investors for funding, mentorship, and growth acceleration.",
                    "areaServed": "IN",
                    "serviceType": "Angel Investment & Startup Funding",
                    "offers": {
                        "@type": "Offer",
                        "description": "Angel investment matching services for startups seeking early-stage funding and mentorship"
                    }
                })}
            </script>

            <BackgroundImagesection items={firstsection} />
            <Descriptionsection items={secondsection} />
            
            <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14" aria-labelledby="benefits-heading">
                <div className="mx-auto max-w-6xl">
                    <h2 id="benefits-heading" className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
                        Our Angel Investment Approach
                    </h2>

                    <div className="mt-10 space-y-10">
                        {items.map((it, idx) => (
                            <article key={idx} className="space-y-3">
                                <span className="text-[var(--color-secondary)] font-medium" aria-label={`Benefit ${idx + 1}`}>
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                                    {it.title}
                                </h3>
                                <p className="max-w-[78ch] text-[var(--color-paragraph)]/80">
                                    {it.desc}
                                </p>
                                <hr className="mt-4 border-[var(--color-paragraph)]/20" aria-hidden="true" />
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            
            <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
                <Faq faqs={faqs} />
            </Suspense>
        </>
    );
}

import { lazy, Suspense } from 'react';
import BackgroundImagesection from '../../reusable/BackgroundImagesection';
import Descriptionsection from '../../reusable/Descriptionsection';

const Faq = lazy(() => import('../../reusable/Faq'));

export default function AngelInvestor() {
    const firstsection = {
        image: '/images/angle-invester/angle-investor-hero.png',
        title: "Strategic Angel Investment Solutions",
        description: "Connecting innovative startups with the right investors for sustainable growth. Unlock funding, mentorship, and partnerships to accelerate your journey."
    };

    const secondsection = {
        image: "/images/angle-invester/Fueling.png",
        title: "Fueling Startups with Smart Capital",
        description: "We go beyond traditional funding by linking startups with angel investors who bring capital, experience, and connections. Our approach ensures that entrepreneurs receive not only the financial support they need but also the guidance and strategic partnerships required to scale effectively. By combining smart capital with mentorship, we help innovative startups transform into sustainable, high-growth ventures.",
        background: "bg-accent",
        btn: "Get Funded Today",
        imgWidth: "w-3/5"
    };

    const items = [
        {
            title: "Strategic Capital Deployment",
            desc: "Angel investors provide more than just funding—they bring strategic capital that's tailored to your startup's specific growth stage and industry needs, ensuring efficient resource allocation."
        },
        {
            title: "Industry Expertise & Mentorship",
            desc: "Gain access to experienced investors who have built successful businesses themselves. Their mentorship helps you navigate challenges, avoid common pitfalls, and accelerate your path to profitability."
        },
        {
            title: "Network & Partnership Access",
            desc: "Angel investors open doors to valuable networks including potential customers, partners, and future investors. These connections can be as valuable as the capital itself."
        },
        {
            title: "Flexible Investment Terms",
            desc: "Unlike traditional venture capital, angel investors often offer more founder-friendly terms and greater flexibility in deal structures, allowing you to maintain better control of your vision."
        },
    ];

    const faqs = [
        {
            question: "What is angel investing and how does it work?",
            answer: "Angel investing is early-stage funding provided by individual investors (angels) to startups in exchange for equity. Angels typically invest their own capital and often provide mentorship and industry connections alongside funding."
        },
        {
            question: "What types of startups do you connect with angel investors?",
            answer: "We work with innovative startups across various industries including tech, healthcare, fintech, e-commerce, and SaaS. We focus on businesses with strong founding teams, scalable business models, and clear growth potential."
        },
        {
            question: "How much funding can startups typically secure through angel investment?",
            answer: "Angel investment amounts typically range from $25,000 to $500,000, though this varies based on the startup's needs, stage, and investor capacity. We help match startups with investors whose investment range aligns with their funding requirements."
        },
        {
            question: "What do angel investors look for in startups?",
            answer: "Angel investors typically look for strong founding teams, innovative solutions to real problems, scalable business models, market potential, traction or proof of concept, and clear path to profitability. We help startups prepare compelling pitches that highlight these elements."
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
                        Why Choose Angel Investment for
                        <br /> Your Startup Growth
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

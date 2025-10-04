import BelowImageSection from "../../reusable/BelowImageSection"
import Descriptionsection from "../../reusable/Descriptionsection"
import Faq from "../../reusable/Faq";
import { Link } from "react-router-dom";

export default function LegalComplience() {

  const firstSection = {
    title: "Trusted Legal & Compliance Solutions for Every Business",
    description: " Empowering organizations with expert guidance, risk management, and regulatory compliance to ensure sustainable growth and long-term success.",
    image: "/images/Legal-comlience/Legal-complience-hero.png",
    bgcolor: "bg-accent"
  }

  const secondsection = {
    background: "bg-background",
    title: "Legal & Compliance Services That Safeguard Your Business",
    description: `In today’s complex regulatory environment, safeguarding your business requires more than just meeting legal obligations—it demands proactive compliance and risk management. At Razor Infotech, our Legal & Compliance Services are designed to protect your business, ensure operational transparency, and build long-term trust with stakeholders.
From managing contracts and corporate governance to ensuring regulatory compliance and data protection, we provide end-to-end solutions tailored to your industry and business needs. Our team of experts stays ahead of evolving regulations, minimizing risks and enabling you to focus on growth without legal concerns.
With our trusted legal and compliance support, you can confidently navigate challenges, strengthen your reputation, and safeguard your business for a sustainable future.`,
    image: "/images/Legal-comlience/Compliance-Services.png",
    width: "max-w-6xl",
    imgWidth: "w-4/5"
  }

  const items = [
    {
      title: "Cost Efficient",
      desc:
        "Companies that adopt or hire customer support see a decrease in their overall operating expenses. Rather than investing in an in-house team and space, outsourcing comes at an affordable rate.",
    },
    {
      title: "Access to Experts",
      desc:
        "BPO providers employ a team of trained and skilled professionals for service operations. This enables businesses to optimize skilled professionals capable of quick and effective customer handling.",
    },
    {
      title: "Modern Solutions",
      desc:
        "Service providers leverage modern solutions to offer quick and accurate customer responses. It is important to be up-to-date with customer service solutions for enhanced communication.",
    },
    {
      title: "Improved Flexibility",
      desc:
        "With customer support services, businesses are offered enhanced aspects to maintain agility in a dynamic business environment. The services are expandable based on business needs.",
    },
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
      <BelowImageSection items={firstSection} />
      <section className="p-10 bg-accent  flex justify-center flex-col">
        <h3 className="text-3xl text-center text-heading font-semibold">Compliance Solutions for Every Business</h3>
        <p className="text-paragraph text-base text-center mt-3">Empowering organizations with expert guidance, risk management, and regulatory compliance to ensure sustainable growth and long-term success.</p>
        <div className="grid gap-4 mx-auto max-w-6xl mt-5 justify-items-center">
          <div className="col-span-2 col-start-1 row-span-3  bg-background rounded-2xl p-5">
            <img src="/images/Legal-comlience/Regulatory.png" alt="Regulatory Compliance" className="rounded-2xl" />
            <span className="text-heading text-xl font-semibold mt-3">Regulatory Compliance</span>
            <p className="text-paragraph text-base my-4">Stay aligned with local and international laws to avoid risks and penalties.</p>
            <Link to={"#"} className="font-bold ">Learn More</Link>
          </div>
          <div className="col-span-2 row-span-2 col-start-3 flex gap-4 p-5 bg-background rounded-2xl">
            <div>
              <span className="text-heading text-xl font-semibold mt-3">Contract Management</span>
              <p className="text-paragraph text-base my-4">Drafting, reviewing, and managing business contracts with legal precision.</p>
              <Link to={"#"} className="font-bold ">Learn More</Link>
            </div>
            <img src="/images/Legal-comlience/Contract.png" alt="Contract Management" className="rounded-2xl w-2/5" />
          </div>
          <div className="col-span-2 row-span-2 col-start-1 row-start-4  flex gap-4 p-5 bg-background rounded-2xl">
            <div>
              <span className="text-heading text-xl font-semibold mt-3">Corporate Governance</span>
              <p className="text-paragraph text-base my-4">Structuring policies and practices that ensure transparency and accountability.</p>
              <Link to={"#"} className="font-bold ">Learn More</Link>
            </div>
            <img src="/images/Legal-comlience/Corporate.png" alt="Contract Management" className="rounded-2xl w-2/5" />

          </div>
          <div className="col-span-2 row-span-3 col-start-3 row-start-3  bg-background rounded-2xl p-5">
            <img src="/images/Legal-comlience/Risk.png" alt="Risk Assessment & Mitigation" className="rounded-2xl" />
            <span className="text-heading text-xl font-semibold mt-3">Risk Assessment & Mitigation</span>
            <p className="text-paragraph text-base my-4">Identifying potential legal and compliance risks before they impact your business.</p>
            <Link to={"#"} className="font-bold ">Learn More</Link>

          </div>
        </div>

      </section >
      <Descriptionsection items={secondsection} />
      <section className="bg-gradient-to-b from-[var(--color-unique)] to-[var(--color-accent)] px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] md:text-3xl">
            Advantages of Outsourcing Customer
            <br /> Support Services
          </h2>

          <div className="mt-10 space-y-10">
            {items.map((it, idx) => (
              <div key={idx} className="space-y-3">
                <span className="text-[var(--color-secondary)] font-medium">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-[var(--color-heading)]">
                  {it.title}
                </h3>
                <p className="max-w-[78ch] text-[var(--color-paragraph)]/80">
                  {it.desc}
                </p>
                <hr className="mt-4 border-[var(--color-paragraph)]/20" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Faq faqs={faqs} />
    </>
  )
}

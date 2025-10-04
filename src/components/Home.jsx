import HeroSection from "../reusable/HeroSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage from "/images/Home/landing-hero.png";
import Aboutcompany from "/images/Home/about-company.png";
import Crousel from "../reusable/Crousel";
import { FaArrowRightLong } from "react-icons/fa6";
import TestimonialCarousel from "../reusable/TestimonialCarousel";
import { FaEnvelope, FaPhone, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";
import Faq from "../reusable/Faq";

const services = [
  {
    title: "IT SOLUTIONS",
    image: "/images/Home/landing-crausle-1.png",
    description:"Offering innovative Software Development, App Development, and Web Development."
  },
  {
    title: "HR OUTSOURCE",
    image: "/images/Home/landing-crousle-2.png",
    description:"Handling various recruitment aspects from sourcing candidates to managing onboarding."
  },
  {
    title: "LEGAL & COMPLIANCE",
    image: "/images/Home/landing-crousle-3.png",
    description:"Ensure business integrity with our legal and compliance services-risk management, audits, regulatory support, and policy development. Trusted, expert guidance."
  },
  {
    title: "BPO SERVICES",
    image: "/images/Home/landing-crousle-4.jpg",
    description:"Outsourcing services that boost customer retention and drive positive results."
  },
  {
    title: "ANGEL INVESTORS",
    image: "/images/Home/landing-crousle-5.jpg",
    description:"Fuel your startup’s growth with angel investors-early-stage funding, strategic mentorship, and networking to turn ideas into successful ventures."
  },
];

const Blogs = [
  {
    title: "BPO",
    description: "Harness the power of technology with strategic insights and tailored with strategic insights and tailored.",
    image: "/images/Home/Blog-1.jpg",
    dateandtime: "January 27, 2025 | 4 min read"
  },
  {
    title: "IT Solutions",
    description: "Harness the power of technology with strategic insights and tailored with strategic insights and tailored.",
    image: "/images/Home/Blog-2.jpg",
    dateandtime: "January 27, 2025 | 4 min read"
  },
  {
    title: "BPO",
    description: "Harness the power of technology with strategic insights and tailored with strategic insights and tailored.",
    image: "/images/Home/Blog-3.jpg",
    dateandtime: "January 27, 2025 | 4 min read"
  },
]

const images = [
  "/images/Home/Team-1.png",
  "/images/Home/Team-2.png",
  "/images/Home/Team-3.png",
  "/images/Home/Team-4.png",
  "/images/Home/Team-5.png",
  "/images/Home/Team-1.png",
  "/images/Home/Team-2.png",
  "/images/Home/Team-3.png",
  "/images/Home/Team-4.png",
  "/images/Home/Team-5.png",
]

export const goals = [
  {
    id: 1,
    title: "Understanding needs",
    description:
      "Our team starts by connecting and understanding your goals, challenges, and vision for a clear picture.",
    icon: "/images/Home/Icons/Understanding.png",
  },
  {
    id: 2,
    title: "Planning Out Strategy",
    description:
      "Next, we create a tailored strategy ensuring it aligns with objectives and delivers maximum impact.",
    icon: "/images/Home/Icons/Planning.png",
  },
  {
    id: 3,
    title: "Developing & Serving",
    description:
      "Our team brings the strategy to life with their expertise and skills, keeping you relevant in the market.",
    icon: "/images/Home/Icons/Devloping.png",
  },
  {
    id: 4,
    title: "Deliver & Support",
    description:
      "We believe in on-time service delivery and providing ongoing support on projects even after launch for guidance.",
    icon: "/images/Home/Icons/Deliver.png",
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



function Home() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-background relative overflow-hidden">
      <HeroSection
        title="Started to Serve & Building More of Us"
        description="Powering startups to enterprises with our smart IT, BPO, and HR solutions. We simplify the way for you to move faster, innovate bolder, and scale bigger."
        buttonText="Explore Solutions"
        buttonLink="/contact"
        heroImage={heroImage}
        showVector={false}
        vectorImage={""}
        reverse={false}
        connectwithus={true}
      />
      <div className="px-10 pb-4">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-3">
              <div className="relative rounded-xl overflow-hidden shadow-lg group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute flex items-center gap-2 bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent z-10 p-4">
                  <h3 className="text-white font-semibold">{service.title}</h3>
                  <span className="text-white/80 text-lg ml-auto"><IoArrowForwardOutline /></span>
                </div>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/90 text-center px-6 mb-4">
                    {service.description || "Learn more about our premium services"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <HeroSection
        abovetitle="About company"
        title="Services That Power Your Hustle"
        description="At Razor Infotech, we believe in providing businesses of every size with innovative, customized solutions for lasting success in the modern-day market. Blending strategy, creativity, and technology to turn your business's ambitious visions into impactful realities with our expertise in the field."
        buttonText="View Our Services"
        buttonLink="/contact"
        heroImage={Aboutcompany}
        showVector={false}
        vectorImage={""}
        reverse={true}
        connectwithus={false}
        bgcolor={"linear-gradient"}
      />

      <section className="bg-accent p-10">
        <span className="border border-paragraph/60 text-paragraph/60 rounded-full p-3 text-center flex justify-self-center">Steps  to reach your goal</span>
        <h2 className="text-4xl text-heading text-center my-4">One-Stop Solutions For All Business Needs</h2>
        <p className="text-center mx-auto text-paragraph/60">From IT solutions and Digital Marketing to BPO and RPO, we offer a vast range of quality services that transform your ideas into real-life results.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-10 px-20">
          {goals.map((s, i) => (
            <div key={i} className="">
              <div className="bg-background rounded-xl h-89 p-6 flex flex-col gap-4 text-left shadow-md hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <img src={s.icon} alt={s.title} className="w-12" />
                  <span className="text-5xl font-bold text-white/10">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-2xl font-semibold text-heading">{s.title}</h3>
                <div className="flex gap-2">
                  <span className="h-1 w-10 bg-secondary rounded"></span>
                  <span className="h-1 w-4 bg-secondary rounded"></span>
                </div>
                <p className="text-base text-paragraph">
                  {s.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
      <section className="linear-gradient bg-no-repeat bg-cover p-10 ">
        <div className="">
          <p className="text-sm rounded-full p-3 border border-secondary w-fit mx-auto mb-2">Maximize Human Potential</p>
          <h3 className="text-4xl p-8 leading-12 text-center mx-auto font-semibold text-heading max-w-3/5 font-primary">Fostering Better Work Culture & Improving Team Productivity</h3>
          <img src="/images/Home/vector-32.png" alt="vector" className="w-2/5 mx-auto mb-4"/>
          <p className="text-paragraph/60 text-center mx-auto text-lg max-w-3/5">Human Maximizer is developed to connect the dots between vision and execution, culture and KPIs, people and performance. It is for businesses that you aim to replace fragmented tools with one powerful system that grows with you.
          </p>
          <button className="bg-secondary border py-2 pl-5 flex gap-5 items-center rounded-full mx-auto mt-6 text-white">Learn more <span className="p-3 mr-2 bg-accent/40 rounded-full"><FaArrowRightLong /></span></button>
        </div>
        <div className="p-4">
          <img src="/images/Home/groupofphone.png" alt="group-of-phone" className="h-[35vw] mt-6 mx-auto" />
        </div>
      </section>
      <section className="bg-accent relative  p-20">
        <h2 className="text-center font-primary text-4xl mx-auto text-heading font-semibold">Team Behind Our Innovative Solutions</h2>
        <p className="mx-auto text-center text-lg mt-5 text-paragraph/70 mb-16">Every project we undertake is fueled by a diverse team of thinkers, creators, and problem-solvers, bringing your vision to reality.</p>
        <Crousel images={images} />
      </section>
      <section className="p-10">
        <h3 className="text-center text-heading font-semibold text-4xl mx-auto mt-10">Keeping It Real, Straight From Our Clients</h3>
        <p className="text-paragraph/60 text-lg text-center mt-3 max-w-2/5 mx-auto">Testimonial from our clients who are scaling smarter and growing with our services</p>
        <div>
          <TestimonialCarousel />
        </div>
      </section>
      <section className="bg-accent ">
        <div className="w-3/5 mx-auto h-[0.5px] bg-gradient-to-r from-transparent via-white/60 mb-10 to-transparent blur-[1px] brightness-125"></div>
        <h3 className="mx-auto text-center text-heading text-4xl font-semibold">Trending Reads for You</h3>
        <p className="text-paragraph/70 text-center text-lg max-w-2/5 mx-auto mt-6">Discover the latest insights, trends, and tips in the industries from IT to BPO at your fingertips.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center mt-8 px-40">
          {
            Blogs.map((b, i) => (
              <div className="rounded-2xl bg-background p-6" key={i}>
                <img src={b.image} alt={b.title} className="rounded-2xl" />
                <h4 className="font-bold text-center rounded-full bg-white/40 w-fit py-2 px-5 mt-6 text-heading">{b.title}</h4>
                <p className="text-paragraph/50 max-w-4/5 my-4">{b.description}</p>
                <span className="text-paragraph text-base font-bold mt-5">{b.dateandtime}</span>
              </div>
            ))
          }
        </div>
        <div className="w-full mt-20 h-[0.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent blur-[1px] brightness-125"></div>
      </section>
      <section className="linear-gradient  p-10">
        <p className="text-paragraph/60 text-xl text-center mx-auto px-5 py-2 rounded-full border border-secondary w-fit">Get In Touch</p>
        <h2 className="text-center text-5xl my-3 text-heading font-semibold">Hey! Let’s Talk</h2>
        <h5 className="text-paragraph/60 text-center text-xl">We're here to help – Reach out anytime</h5>

        <div className="bg-accent text-paragraph p-8 rounded-2xl w-[70rem] mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-34">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="" className="text-heading text-lg">First Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="bg-transparent border border-[#c3c3c3] mt-4 rounded-xl px-4 py-3 w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-heading text-lg">Last Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="bg-transparent border border-[#c3c3c3] mt-4 rounded-xl px-4 py-3 w-full focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="" className="text-heading text-lg">Email</label>
                <input
                  type="text"
                  placeholder=""
                  className="bg-transparent border border-[#c3c3c3] mt-4 rounded-xl px-4 py-3 w-full focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="" className="text-heading text-lg">Message</label>
                <textarea
                  rows="4"
                  placeholder=""
                  className="bg-transparent border border-[#c3c3c3] rounded-xl mt-4  px-4 py-3 w-full focus:outline-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-secondary" />
                <label className="text-sm text-paragraph">
                  I agree to the Terms and Condition
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary border border-[#c3c3c3] rounded-full py-2 text-white transition"
              >
                Get started
              </button>
            </form>

            <div>
              <img
                src="/images/Home/form-image.jpg"
                alt="Contact"
                className="rounded-xl object-cover w-full h-[30rem]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-4/5 items-center gap-6 mt-8 pt-6 text-sm">
            <div className="flex items-center text-paragraph gap-2  pr-4">
              <span className="bg-secondary/20 p-3 rounded-full"> <FaEnvelope className="text-lg text-secondary" /></span>
              <div>
                <p className="font-semibold text-lg">Email</p>
                <span>business@razorinfotech.com</span>
              </div>
            </div>
            <div className="flex items-center text-paragraph gap-2 pr-4">
              <span className="bg-secondary/20 p-3 rounded-full"> <FaPhone className="text-lg text-secondary" /></span>
             <div>
              <p className="font-semibold text-lg">Phone</p>
               <span>6232 1151 2211</span>
             </div>
            </div>
            <div className="flex items-center gap-4 text-paragraph ">
              <span className="text-lg font-semibold">Follow us</span>
              <span className="p-3 rounded-full bg-background"><FaInstagram className="cursor-pointer text-lg text-secondary" /></span>
              <span className="p-3 rounded-full bg-background"> <FaXTwitter className="cursor-pointer text-lg text-secondary" /></span>
            
            </div>
          </div>
        </div>
      </section>
      <Faq faqs={faqs} />
    </div>
  );
}

export default Home;

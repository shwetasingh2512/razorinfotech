import { lazy, Suspense, useState } from "react";
import HeroSection from "../reusable/HeroSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage from "/images/Home/landing-hero.png";
import Aboutcompany from "/images/Home/about-company.png";
import Crousel from "../reusable/Crousel";
import { FaArrowRightLong, FaEnvelope, FaPhone, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

// Lazy load heavy components
const TestimonialCarousel = lazy(() => import("../reusable/TestimonialCarousel"));
const Faq = lazy(() => import("../reusable/Faq"));

const services = [
  {
    title: "IT SOLUTIONS",
    image: "/images/Home/landing-crausle-1.png",
    description: "Offering innovative Software Development, App Development, and Web Development.",
  },
  {
    title: "HR OUTSOURCE",
    image: "/images/Home/landing-crousle-2.png",
    description: "Handling various recruitment aspects from sourcing candidates to managing onboarding.",
  },
  {
    title: "LEGAL & COMPLIANCE",
    image: "/images/Home/landing-crousle-3.png",
    description: "Ensure business integrity with our legal and compliance services-risk management, audits, regulatory support, and policy development. Trusted, expert guidance.",
  },
  {
    title: "BPO SERVICES",
    image: "/images/Home/landing-crousle-4.jpg",
    description: "Outsourcing services that boost customer retention and drive positive results.",
  },
  {
    title: "ANGEL INVESTORS",
    image: "/images/Home/landing-crousle-5.jpg",
    description: "Fuel your startup's growth with angel investors-early-stage funding, strategic mentorship, and networking to turn ideas into successful ventures.",
  },
];

const Blogs = [
  {
    title: "BPO",
    description: "Harness the power of technology with strategic insights and tailored solutions.",
    image: "/images/Home/Blog-1.jpg",
    dateandtime: "January 27, 2025 | 4 min read",
  },
  {
    title: "IT Solutions",
    description: "Harness the power of technology with strategic insights and tailored solutions.",
    image: "/images/Home/Blog-2.jpg",
    dateandtime: "January 27, 2025 | 4 min read",
  },
  {
    title: "BPO",
    description: "Harness the power of technology with strategic insights and tailored solutions.",
    image: "/images/Home/Blog-3.jpg",
    dateandtime: "January 27, 2025 | 4 min read",
  },
];

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
];

export const goals = [
  {
    id: 1,
    title: "Understanding needs",
    description: "Our team starts by connecting and understanding your goals, challenges, and vision for a clear picture.",
    icon: "/images/Home/Icons/Understanding.png",
  },
  {
    id: 2,
    title: "Planning Out Strategy",
    description: "Next, we create a tailored strategy ensuring it aligns with objectives and delivers maximum impact.",
    icon: "/images/Home/Icons/Planning.png",
  },
  {
    id: 3,
    title: "Developing & Serving",
    description: "Our team brings the strategy to life with their expertise and skills, keeping you relevant in the market.",
    icon: "/images/Home/Icons/Devloping.png",
  },
  {
    id: 4,
    title: "Deliver & Support",
    description: "We believe in on-time service delivery and providing ongoing support on projects even after launch for guidance.",
    icon: "/images/Home/Icons/Deliver.png",
  },
];

const faqs = [
  {
    question: "What services does Razor Infotech provide?",
    answer: "We offer end-to-end IT services, BPO support, HR management, cloud solutions, cybersecurity, and digital transformation.",
  },
  {
    question: "Who can businesses of different sizes benefit from our services?",
    answer: "We provide tailored solutions for startups, SMBs, and enterprises, ensuring value at every stage.",
  },
  {
    question: "How does Razor Infotech ensure quality and security?",
    answer: "Strict compliance, advanced security practices, and transparency with our clients.",
  },
  {
    question: "Can we customize solutions based on your business needs?",
    answer: "Yes, all our solutions can be customized to fit your unique business goals.",
  },
];

function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('https://api.razorinfotech.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'include',
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: 'Failed to send message' }));
        throw new Error(errorData.error || 'Failed to send message');
      }

      toast.success("Thank you for contacting us! We'll get back to you soon.");
      e.currentTarget.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(error.message || 'Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <title>Razor Infotech - IT Solutions, BPO, HR Services | Business Growth Partner</title>
      <meta name="description" content="Razor Infotech offers innovative IT solutions, BPO services, HR outsourcing, legal compliance, and angel investment opportunities for startups and enterprises. Transform your business with our expert services." />
      <meta name="keywords" content="IT solutions, BPO services, HR outsourcing, software development, app development, web development, legal compliance, angel investors, business process outsourcing, recruitment services" />
      <meta name="author" content="Razor Infotech" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
      <meta property="og:title" content="Razor Infotech - IT Solutions, BPO & HR Services" />
      <meta property="og:description" content="Powering startups to enterprises with smart IT, BPO, and HR solutions. We simplify the way for you to move faster, innovate bolder, and scale bigger." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.razorinfotech.com" />
      <meta property="og:image" content="https://www.razorinfotech.com/images/Home/landing-hero.png" />
    
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Razor Infotech - IT Solutions & Business Services" />
      <meta name="twitter:description" content="Transform your business with our IT solutions, BPO services, and HR outsourcing. Expert solutions for startups and enterprises." />
      <meta name="twitter:image" content="https://www.razorinfotech.com/images/Home/landing-hero.png" />

      <link rel="canonical" href="https://www.razorinfotech.com" />

      <div className="bg-background relative overflow-hidden">
        <HeroSection
          title="Started to Serve & Building More of Us"
          description="Powering startups to enterprises with our smart IT, BPO, and HR solutions. We simplify the way for you to move faster, innovate bolder, and scale bigger."
          buttonText="Explore Solutions"
          buttonLink="/contact"
          heroImage={heroImage}
          buttonHoverbackground="background"
          showVector={false}
          reverse={false}
          connectwithus={true}
        />

        <section className="px-4 sm:px-10 pb-4" aria-label="Our Services">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="px-2">
                <article className="relative rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src={service.image}
                    alt={`${service.title} - ${service.description}`}
                    className="w-full h-60 sm:h-72 md:h-[25rem] object-cover transform group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute flex items-center gap-2 bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent z-10 p-3 sm:p-4">
                    <h3 className="text-white font-semibold text-sm sm:text-base">
                      {service.title}
                    </h3>
                    <span className="text-white/80 text-lg ml-auto" aria-hidden="true">
                      <IoArrowForwardOutline />
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    <p className="text-white/90 text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </section>

        <HeroSection
          abovetitle="About company"
          title="Services That Power Your Hustle"
          description="At Razor Infotech, we believe in providing businesses of every size with innovative, customized solutions for lasting success in the modern-day market. Blending strategy, creativity, and technology to turn your business's ambitious visions into impactful realities with our expertise in the field."
          buttonText="View Our Services"
          buttonLink="/about"
          heroImage={Aboutcompany}
          buttonHoverbackground="accent"
          showVector={false}
          reverse={true}
          connectwithus={false}
          bgcolor="linear-gradient"
        />

        <section className="bg-accent p-6 sm:p-10" aria-labelledby="goals-heading">
          <span className="border border-paragraph/60 text-paragraph/60 rounded-full p-2 sm:p-3 text-center flex justify-center mx-auto max-w-max">
            Steps to reach your goal
          </span>
          <h2 id="goals-heading" className="text-3xl sm:text-4xl text-heading text-center my-4">
            One-Stop Solutions For All Business Needs
          </h2>
          <p className="text-center mx-auto text-paragraph/60 max-w-xl">
            From IT solutions and Digital Marketing to BPO and RPO, we offer a vast range of quality services that transform ideas into real-life results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 mt-8 sm:mt-10 px-4 sm:px-20">
            {goals.map((goal, i) => (
              <article
                key={goal.id}
                className="bg-background rounded-xl p-4 sm:p-6 flex flex-col gap-3 text-left shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between">
                  <img 
                    src={goal.icon} 
                    alt={`${goal.title} icon`} 
                    className="w-10 sm:w-12"
                    loading="lazy"
                  />
                  <span className="text-4xl sm:text-5xl font-bold text-white/10" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-heading">
                  {goal.title}
                </h3>
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-1 w-10 bg-secondary rounded"></span>
                  <span className="h-1 w-4 bg-secondary rounded"></span>
                </div>
                <p className="text-sm sm:text-base text-paragraph">{goal.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="linear-gradient bg-no-repeat bg-cover p-6 sm:p-10 text-center" aria-labelledby="hcm-heading">
          <p className="text-sm rounded-full p-2 border border-secondary inline-block mb-2">
            Maximize Human Potential
          </p>
          <h3 id="hcm-heading" className="text-3xl sm:text-4xl font-semibold text-heading max-w-3xl mx-auto leading-snug mb-4 font-primary">
            Fostering Better Work Culture & Improving Team Productivity
          </h3>
          <img
            src="/images/Home/vector-32.png"
            alt="Work culture illustration"
            className="w-3/5 max-w-xs sm:max-w-md mx-auto mb-4"
            loading="lazy"
          />
          <p className="text-paragraph/60 text-lg max-w-3xl mx-auto mb-6 px-4">
            Human Maximizer connects vision and execution, culture and KPIs, people and performance. It replaces fragmented tools with one powerful system that grows with you.
          </p>
          <Link to="./products" >
            <button className="bg-secondary border py-2 pl-5 flex gap-3 items-center rounded-full mx-auto text-white transition group hover:bg-accent hover:text-secondary  " aria-label="Learn more about Human Maximizer">
              Learn more <span className="p-3 bg-accent/40 group-hover:text-white rounded-full mr-1 group-hover:bg-secondary" aria-hidden="true"><FaArrowRightLong /></span>
            </button>
          </Link>
          <div className="mt-6 p-4">
            <img
              src="/images/Home/groupofphone.png"
              alt="Human Maximizer mobile app interface"
              className="mx-auto max-h-[35vw] w-auto"
              loading="lazy"
            />
          </div>
        </section>

        <section className="bg-accent relative p-10 sm:p-20 text-center" aria-labelledby="team-heading">
          <h2 id="team-heading" className="font-primary text-3xl sm:text-4xl font-semibold text-heading mb-4">
            Team Behind Our Innovative Solutions
          </h2>
          <p className="text-lg text-paragraph/70 max-w-3xl mx-auto mb-12">
            Every project we undertake is fueled by a diverse team of thinkers, creators, and problem-solvers.
          </p>
          <Crousel images={images} />
        </section>

        <section className="p-6 sm:p-10 max-w-7xl mx-auto" aria-labelledby="testimonials-heading">
          <h3 id="testimonials-heading" className="text-center text-heading font-semibold text-3xl sm:text-4xl mt-6 mb-3">
            Keeping It Real, Straight From Our Clients
          </h3>
          <p className="text-paragraph/60 text-lg text-center max-w-2xl mx-auto">
            Testimonial from our clients who are scaling smarter and growing with our services.
          </p>
        </section>
        <div className="w-full px-10">
          <Suspense fallback={<div className="text-center py-10">Loading testimonials...</div>}>
            <TestimonialCarousel />
          </Suspense>
        </div>

        <section className="bg-accent" aria-labelledby="blog-heading">
          <div className="w-full max-w-5xl mx-auto h-[0.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent blur brightness-125 my-10" aria-hidden="true" />
          <h3 id="blog-heading" className="text-center text-heading text-3xl sm:text-4xl font-semibold">
            Trending Reads for You
          </h3>
          <p className="text-paragraph/70 text-center text-lg max-w-2xl mx-auto mt-6 px-4">
            Discover the latest insights, trends, and tips from IT to BPO industries.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 justify-center mt-8 px-6 sm:px-40">
            {Blogs.map((b, i) => (
              <article className="rounded-2xl bg-background p-4 sm:p-6" key={i}>
                <img 
                  src={b.image} 
                  alt={`${b.title} blog post`} 
                  className="rounded-2xl"
                  loading="lazy"
                />
                <h4 className="font-bold text-center rounded-full bg-white/40 w-fit py-2 px-5 mt-4 text-heading">
                  {b.title}
                </h4>
                <p className="text-paragraph/50 my-3 mx-auto text-sm sm:text-base">
                  {b.description}
                </p>
                <time className="text-paragraph text-base font-bold">{b.dateandtime}</time>
              </article>
            ))}
          </div>
          <div className="w-full max-w-5xl mx-auto h-[0.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent blur brightness-125 my-10" aria-hidden="true" />
        </section>

        <section className="linear-gradient p-6 sm:p-10 " aria-labelledby="contact-heading">
          <div className="text-center">
            <p className="text-paragraph/60 text-xl mx-auto inline-block py-2 px-6 rounded-full border border-secondary mb-3">
              Get In Touch
            </p>
            <h2 id="contact-heading" className="text-4xl sm:text-5xl my-3 text-heading font-semibold">
              Hey! Let's Talk
            </h2>
            <h5 className="text-paragraph/60 text-xl mb-8">We're here to help – Reach out anytime</h5>
          </div>

          <div className="bg-accent text-paragraph p-6 sm:p-8 rounded-2xl max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <form className="space-y-6" aria-label="Contact form" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-heading text-md uppercase font-medium " htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="bg-transparent border border-[#c3c3c3] rounded-xl px-4 py-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-heading text-md uppercase font-medium" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="bg-transparent border border-[#c3c3c3] rounded-xl px-4 py-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-heading text-md uppercase font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-transparent border border-[#c3c3c3] rounded-xl px-4 py-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>

                <div>
                  <label className="text-heading text-md uppercase font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="bg-transparent border border-[#c3c3c3] rounded-xl px-4 py-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="accent-secondary" required />
                  <label htmlFor="terms" className="text-sm text-paragraph">
                    I agree to the Terms and Condition
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary border border-[#c3c3c3] rounded-full py-4 text-white transition hover:bg-secondary/90 disabled:opacity-60 disabled:cursor-not-allowed font-medium"
                >
                  {isSubmitting ? 'Sending...' : 'Get started'}
                </button>
              </form>

              <div>
                <img
                  src="/images/Home/form-image.jpg"
                  alt="Contact us - Razor Infotech office"
                  className="rounded-xl object-cover w-full h-72 sm:h-[30rem]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-full md:w-4/5 items-center gap-6 mt-8 pt-6 text-sm mx-auto">
              <address className="flex items-center text-paragraph gap-2 pr-4 not-italic">
                <span className="bg-secondary/20 p-3 rounded-full" aria-hidden="true">
                  <FaEnvelope className="text-lg text-secondary" />
                </span>
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <a href="mailto:business@razorinfotech.com" className="hover:underline">
                    business@razorinfotech.com
                  </a>
                </div>
              </address>
              <address className="flex items-center text-paragraph gap-2 pr-4 not-italic">
                <span className="bg-secondary/20 p-3 rounded-full" aria-hidden="true">
                  <FaPhone className="text-lg text-secondary" />
                </span>
                <div>
                  <p className="font-semibold text-lg">Phone</p>
                  <a href="tel:+916232115122" className="hover:underline">
                    6232 1151 2211
                  </a>
                </div>
              </address>
              <div className="flex items-center gap-4 text-paragraph">
                <span className="text-lg font-semibold">Follow us</span>
                <a 
                  href="https://instagram.com/razorinfotech" 
                  className="p-3 rounded-full bg-background hover:bg-background/80 transition"
                  aria-label="Follow us on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-lg text-secondary" />
                </a>
                <a 
                  href="https://twitter.com/razorinfotech" 
                  className="p-3 rounded-full bg-background hover:bg-background/80 transition"
                  aria-label="Follow us on Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="text-lg text-secondary" />
                </a>
              </div>
            </div>
          </div>
          <ToastContainer 
            position="top-right" 
            autoClose={5000} 
            hideProgressBar={false} 
            newestOnTop={false} 
            closeOnClick 
            rtl={false} 
            pauseOnFocusLoss 
            draggable 
            pauseOnHover 
          />
        </section>
        
        <Suspense fallback={<div className="text-center py-10">Loading FAQs...</div>}>
          <Faq faqs={faqs} />
        </Suspense>
      </div>
    </>
  );
}

export default Home;

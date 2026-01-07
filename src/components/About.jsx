import { lazy, Suspense } from "react";
import HeroSection from "../reusable/HeroSection";
import heroImage from "/images/About/About-hero.png";
import { IoEyeOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import industries from "/images/About/Industories.jpg";
import { SiTicktick } from "react-icons/si";
import Crousel from "../reusable/Crousel";
import { FaArrowRight } from "react-icons/fa6";
import { UsersRound, Briefcase, BarChart3, Cpu } from "lucide-react";

// Lazy load heavy components
const TestimonialCarousel = lazy(() => import("../reusable/TestimonialCarousel"));
const Faq = lazy(() => import("../reusable/Faq"));

const goals = [
  {
    title: "Vision",
    description:
      "We envision a dynamic business landscape where enterprises of all sizes and stages can thrive independently, free from the constraints imposed by monopolistic giants. Our team delivers smart and efficient solutions, bringing expertise, simplifying tasks, and skills accessible to every business.",
    icon: IoEyeOutline,
  },
  {
    title: "Mission",
    description:
      "Our mission is to deliver top-notch quality of support solutions and technology that empowers each of our clients to grow and thrive. It allows them to focus on their core business activities and frees up the in-house team from all the time-consuming non-core tasks.",
    icon: TbTargetArrow,
  },
  {
    title: "Purpose",
    description:
      "We are dedicated to making sure that our clients' businesses evolve and expand in the ever-changing marketplace, enhancing their experiences and fostering long-term growth. Our services are scalable to enable the continuous growth of any business, whether a startup or an enterprise, to thrive.",
    icon: VscGraphLine,
  },
];

const industriesList = [
  { name: "IT and Software", description: "Offering IT companies enhanced help desk and customer support experience." },
  { name: "Finance Sector", description: "We deliver robust, secure, and compliant solutions tailored to the financial industry." },
  { name: "Real Estate", description: "We provide improved client interactions and streamline documentation." },
  { name: "Healthcare", description: "Providing a helping hand in appointment scheduling and quality care with efficiency." },
  { name: "Travel Agency", description: "Delivering smooth customer interaction for high customer booking experiences." },
  { name: "E-Commerce", description: "Empower e-commerce businesses in driving sales and customer loyalty." },
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

const pageRedirection = [
  {
    title: "Business Consulting",
    description: "Providing expert advice and services that help businesses improve performance.",
    image: "/images/About/Icons/ph_handshake-light.png",
  },
  {
    title: "BPO Services",
    description: "Outsourcing services that boost customer retention and drive positive results.",
    image: "/images/About/Icons/streamline-plump_customer-support-7.png",
  },
  {
    title: "Digital Marketing",
    description: "Creating a digital presence with marketing that attracts the targeted audience.",
    image: "/images/About/Icons/hugeicons_legal-document-01.png",
  },
  {
    title: "Financial Services",
    description: "Comprehensive financial solutions tailored to drive business growth and stability.",
    image: "/images/About/Icons/streamline-ultimate_human-resources-search-men.png",
  },
  {
    title: "IT Solutions",
    description: "Offering innovative Software Development, App Development, and Web Development.",
    image: "/images/About/Icons/solar_code-outline.png",
  },
  {
    title: "Angel Investor",
    description: "Strategic funding and mentorship to fuel startup growth and innovation.",
    image: "/images/About/Icons/solar_code-outline.png",
  },
  {
    title: "HR Outsourcing",
    description: "Handling various recruitment aspects from sourcing candidates to managing onboarding.",
    image: "/images/About/Icons/streamline-ultimate_human-resources-network.png",
  },
];

const principles = [
  {
    title: "People-Centric Approach",
    desc:
      "We believe in empowering human potential. By focusing on talent, collaboration, and customer-first strategies, we create meaningful experiences for businesses and their customers.",
    icon: UsersRound,
  },
  {
    title: "Excellence in Outsourcing",
    desc:
      "Outsourcing with Razor Infotech goes beyond cost savings—it's about reliability, efficiency, and results. We streamline operations while maintaining uncompromised quality and security.",
    icon: Briefcase,
  },
  {
    title: "Growth Through Partnership",
    desc:
      "We see ourselves as more than just service providers—we're growth partners. Our scalable solutions and cross-industry expertise ensure long-term success for every client we serve.",
    icon: BarChart3,
  },
  {
    title: "Technology-Driven Innovation",
    desc:
      "From IT solutions to digital transformation, we harness the power of cutting-edge tools and technologies to help companies scale smarter and stay future-ready.",
    icon: Cpu,
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

export default function About() {
  return (
    <>
      {/* SEO Meta Tags - React 19 Native Support */}
      <title>About Razor Infotech - Mission, Vision & IT Outsourcing Solutions</title>
      <meta name="description" content="Learn about Razor Infotech's mission to empower businesses through IT solutions, BPO services, and HR outsourcing. We serve IT, finance, healthcare, e-commerce, and more industries worldwide." />
      <meta name="keywords" content="about razor infotech, IT outsourcing company, BPO services provider, HR outsourcing, business process outsourcing, digital transformation, enterprise solutions, startup solutions, IT consulting" />
      <meta name="author" content="Razor Infotech" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="About Razor Infotech - Beyond Outsourcing" />
      <meta property="og:description" content="Discover how Razor Infotech connects business processes, people, and technology to deliver transformative results across multiple industries." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.razorinfotech.com/about" />
      <meta property="og:image" content="https://www.razorinfotech.com/images/About/About-hero.png" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Razor Infotech - Our Mission & Values" />
      <meta name="twitter:description" content="Going beyond outsourcing to connect business processes, people, and technology for transformative results." />
      <meta name="twitter:image" content="https://www.razorinfotech.com/images/About/About-hero.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.razorinfotech.com/about" />

      <HeroSection
        title="Going Beyond Outsourcing"
        description="At Razor Infotech, we aim to go beyond just outsourcing and connect business processes, people, and technology to deliver transformative results. From customer support and back-office management to recruitment management and digital innovations, we help companies scale faster and smarter."
        buttonText="View Our Services"
        buttonLink="/contact"
        heroImage={heroImage}
        showVector={false}
        buttonHoverbackground="background"
        vectorImage=""
        reverse={false}
        connectwithus={false}
      />

      <section className="bg-accent px-5 py-12 md:py-16 lg:px-24" aria-labelledby="vision-mission-heading">
        <h2 id="vision-mission-heading" className="sr-only">Our Vision, Mission, and Purpose</h2>
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <article key={index} className="w-full rounded-2xl border border-paragraph/20 bg-accent p-6">
                <div className="w-fit rounded-2xl bg-secondary p-2">
                  <div className="rounded-2xl bg-accent/40 p-2">
                    <Icon className="text-2xl text-accent" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="my-4 text-lg font-semibold text-heading md:text-xl">{goal.title}</h3>
                <p className="text-sm text-paragraph/70 md:text-base">{goal.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-background px-6 py-12 text-heading md:px-12 lg:px-24" aria-labelledby="industries-heading">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <h2 id="industries-heading" className="text-3xl font-semibold text-heading sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="max-w-[60ch] text-paragraph/80">
              Razor Infotech understands that every industry requires customized services for the unique challenges that it faces. That's why our team delivers tailored solutions that strengthen work operations and drive results across diverse sectors.
            </p>
            <img 
              src={industries} 
              alt="Industries we serve including IT, finance, healthcare, e-commerce" 
              className="w-3/4 max-w-md object-contain sm:w-2/3 lg:w-1/2"
              loading="lazy"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:mt-0 lg:place-items-start">
            {industriesList.map((industry, index) => (
              <article key={index} className="max-w-xs text-center sm:text-left">
                <div className="mb-2 flex items-center justify-center gap-3 sm:justify-start">
                  <div className="rounded-full bg-secondary/10 p-2" aria-hidden="true">
                    <SiTicktick className="text-lg text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading">{industry.name}</h3>
                </div>
                <p className="text-base text-paragraph/70">{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-6 py-12 md:py-16 lg:px-24" aria-labelledby="team-heading">
        <h2 id="team-heading" className="mx-auto text-center font-primary text-3xl font-semibold text-heading sm:text-4xl">
          Team Behind Our Innovative Solutions
        </h2>
        <p className="mx-auto mb-10 mt-5 max-w-[60ch] text-center text-sm text-paragraph/70 sm:text-base">
          Every project we undertake is fueled by a diverse team of thinkers, creators, and problem-solvers, bringing your vision to reality.
        </p>
        <Crousel images={images} />
      </section>

      <section 
        className="bg-accent px-6 py-12 md:py-16 lg:px-24 relative isolate before:pointer-events-none before:absolute before:inset-x-0 before:top-[-7rem] before:z-0 before:flex before:justify-center before:text-secondary before:opacity-10 before:content-['SERVICES'] before:text-[6rem] before:font-extrabold before:tracking-tight sm:before:text-[8rem] md:before:text-[10rem]"
        aria-labelledby="services-heading"
      >
        <h2 id="services-heading" className="relative z-10 mb-5 text-center text-2xl font-semibold text-heading sm:text-3xl">
          Expanding Innovation with Our Growing Network
        </h2>

        <nav className="mt-8 grid grid-cols-1 gap-3 sm:gap-10 lg:mt-32 lg:grid-cols-2" aria-label="Service categories">
          {pageRedirection.map((e, i) => (
            <a
              key={i}
              href={`/services/${e.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group flex items-center gap-4 rounded-2xl p-4 ring-1 ring-secondary/20 hover:bg-secondary transition-all"
              aria-label={`Learn more about ${e.title}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-secondary group-hover:bg-white/40 transition-colors">
                <img 
                  src={e.image} 
                  alt="" 
                  className="h-7 w-7 object-contain" 
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-heading group-hover:text-white sm:text-lg transition-colors">
                  {e.title}
                </h3>
                <p className="mt-1 text-sm text-paragraph/70 group-hover:text-white/80 sm:line-clamp-3 sm:max-w-[48ch] transition-colors">
                  {e.description}
                </p>
              </div>

              <div className="ml-auto shrink-0 rounded-full bg-secondary p-3 transition-all group-hover:scale-110 group-hover:bg-white/20">
                <FaArrowRight className="text-lg text-white" aria-hidden="true" />
              </div>
            </a>
          ))}
        </nav>
      </section>

      <section className="relative bg-background px-6 py-12 md:py-16 lg:px-24" aria-labelledby="principles-heading">
        <h2 id="principles-heading" className="my-4 text-center text-2xl font-semibold text-heading sm:text-3xl">
          What Our Service Stands For
        </h2>
        <p className="mx-auto mb-8 max-w-[60ch] text-center text-sm text-paragraph/70 sm:mb-10 sm:text-base">
          The principles that guide our work, inspire innovation, and shape every solution we deliver.
        </p>

        <div className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 hidden md:block">
            <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-secondary/0 via-secondary/40 to-secondary/0" />
            <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-secondary/0 via-secondary/40 to-secondary/0" />
            <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent ring-1 ring-secondary/40 shadow-[0_0_0_6px_rgba(255,255,255,1)] sm:h-20 sm:w-20">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-heading sm:h-12 sm:w-12">H</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              const surface =
                index === 0
                  ? "bg-gradient-to-br from-secondary-light to-accent"
                  : index === 3
                  ? "bg-gradient-to-tl from-secondary-light to-accent"
                  : "bg-accent";

              return (
                <article key={index} className={`relative overflow-hidden p-6 sm:p-8 ${surface}`}>
                  <div className="mx-auto mb-4 flex w-full max-w-md flex-col items-center text-center">
                    <div className="mb-3 grid h-12 w-12 place-items-center rounded-xl bg-secondary">
                      <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-semibold text-heading sm:text-lg">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paragraph/80">{principle.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="linear-gradient px-6 md:px-12 lg:px-24" aria-labelledby="locations-heading">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="mt-4 p-2 sm:p-5">
            <div className="border-l-4 border-primary pl-3">
              <h2 id="locations-heading" className="text-2xl font-semibold text-heading">Our Locations</h2>
              <p className="max-w-[45ch] text-sm text-paragraph/70">
                Strategically placed offices worldwide, delivering consistent excellence in every region.
              </p>
            </div>
            <img 
              src="/images/About/Our-location.png" 
              alt="Razor Infotech global office locations map" 
              className="mt-6 w-4/5"
              loading="lazy"
            />
          </div>
          <div>
            <img 
              src="/images/About/street-location.png" 
              alt="Razor Infotech office building exterior" 
              className="w-full max-w-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-12 lg:px-24" aria-labelledby="testimonials-heading">
        <h3 id="testimonials-heading" className="mx-auto mt-6 text-center text-3xl font-semibold text-heading sm:text-4xl">
          Keeping It Real, Straight From Our Clients
        </h3>
        <p className="mx-auto mt-3 max-w-[60ch] text-center text-base text-paragraph/70">
          Testimonial from our clients who are scaling smarter and growing with our services
        </p>
        <div className="mt-6">
          <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading testimonials...</div>}>
            <TestimonialCarousel />
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<div className="text-center py-10 text-paragraph">Loading FAQs...</div>}>
        <Faq faqs={faqs} />
      </Suspense>
    </>
  );
}

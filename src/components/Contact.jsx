import { FaPhoneAlt, FaFacebook, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { IoMail, IoLocationSharp, IoShareSocial } from "react-icons/io5";
import { useState } from "react";

const company = [
  { 
    title: "Call us", 
    description: "+91-6232-1151-2211", 
    icon: FaPhoneAlt,
    href: "tel:+916232115122",
  },
  { 
    title: "Email us", 
    description: "business@razorinfotech.com", 
    icon: IoMail,
    href: "mailto:business@razorinfotech.com",
  },
  {
    title: "Visit us",
    description: "627, F/F, Westend Marg, Saiyad Ul Ajaib Extension, Sainik Farm, New Delhi, Delhi-110030",
    icon: IoLocationSharp,
    href: "https://maps.google.com/?q=Razor+Infotech+Pvt+Ltd+New+Delhi",
  },
  {
    title: "Social Network",
    icon: IoShareSocial,
    children: [
      { Icon: FaFacebook, label: "Facebook", href: "https://facebook.com/razorinfotech" },
      { Icon: FaInstagramSquare, label: "Instagram", href: "https://instagram.com/razorinfotech" },
      { Icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/company/razorinfotech" },
      { Icon: FaWhatsappSquare, label: "WhatsApp", href: "https://wa.me/916232115122" },
    ],
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const data = new FormData(e.currentTarget);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      agree: !!data.get("agree"),
    };

    try {
      // Replace with your actual form submission endpoint
      console.log("Contact form:", payload);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus("success");
      e.currentTarget.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* SEO Meta Tags - React 19 Native Support */}
      <title>Contact Razor Infotech - Get in Touch | IT Solutions & BPO Services</title>
      <meta name="description" content="Contact Razor Infotech for IT solutions, BPO services, and HR outsourcing. Call +91-6232-1151-2211 or email business@razorinfotech.com. Located in New Delhi, India." />
      <meta name="keywords" content="contact razor infotech, IT solutions contact, BPO services inquiry, business contact, New Delhi IT company, software development contact, outsourcing services contact" />
      <meta name="author" content="Razor Infotech" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Contact Razor Infotech - Let's Talk" />
      <meta property="og:description" content="Get in touch with Razor Infotech for IT solutions, BPO services, and business consulting. We're here to help your business grow." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.razorinfotech.com/contact" />
      <meta property="og:image" content="https://www.razorinfotech.com/images/contact-hero.png" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact Razor Infotech" />
      <meta name="twitter:description" content="Connect with us for IT solutions, BPO services, and business growth strategies." />
      <meta name="twitter:image" content="https://www.razorinfotech.com/images/contact-hero.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.razorinfotech.com/contact" />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Razor Infotech Pvt. Ltd.",
          "image": "https://www.razorinfotech.com/logo.png",
          "description": "IT solutions, BPO services, and HR outsourcing company in New Delhi",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "627, F/F, Westend Marg, Saiyad Ul Ajaib Extension, Sainik Farm",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110030",
            "addressCountry": "IN"
          },
          "telephone": "+91-6232-1151-2211",
          "email": "business@razorinfotech.com",
          "url": "https://www.razorinfotech.com",
          "openingHours": "Mo-Fr 09:00-18:00",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.517411",
            "longitude": "77.198138"
          },
          "sameAs": [
            "https://www.linkedin.com/company/razorinfotech",
            "https://www.facebook.com/razorinfotech",
            "https://www.instagram.com/razorinfotech",
            "https://twitter.com/razorinfotech"
          ]
        })}
      </script>

      <section className="relative w-full overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <header className="flex flex-col items-center text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-paragraph)]/15 bg-[var(--color-secondary-light)] px-4 py-2 text-sm font-medium tracking-wide text-[var(--color-paragraph)]/70">
              Connecting People
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-heading)] md:text-5xl">
              Let's Talk
            </h1>
            <p className="mt-3 max-w-prose text-[var(--color-paragraph)]/80">
              Together, we can build smarter solutions for your business.
            </p>
          </header>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <form onSubmit={handleSubmit} className="max-w-xl space-y-6" aria-label="Contact form">
              <div>
                <label 
                  htmlFor="name" 
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--color-paragraph)]/80"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border-0 bg-transparent px-4 py-3 text-[var(--color-heading)] placeholder-[var(--color-paragraph)]/40 outline-none ring-1 ring-inset ring-[var(--color-paragraph)]/20 transition focus:ring-2 focus:ring-[var(--color-secondary)]"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--color-paragraph)]/80"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="hello@example.com"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border-0 bg-transparent px-4 py-3 text-[var(--color-heading)] placeholder-[var(--color-paragraph)]/40 outline-none ring-1 ring-inset ring-[var(--color-paragraph)]/20 transition focus:ring-2 focus:ring-[var(--color-secondary)]"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--color-paragraph)]/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="I'd love to learn more about your services"
                  required
                  className="w-full resize-y rounded-xl border-0 bg-transparent px-4 py-3 text-[var(--color-heading)] placeholder-[var(--color-paragraph)]/40 outline-none ring-1 ring-inset ring-[var(--color-paragraph)]/20 transition focus:ring-2 focus:ring-[var(--color-secondary)]"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  required
                  className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-[var(--color-paragraph)]/30 bg-[var(--color-accent)] text-[var(--color-secondary)] focus:ring-[var(--color-secondary)]"
                />
                <label htmlFor="agree" className="cursor-pointer text-sm text-[var(--color-paragraph)]">
                  I agree to the{" "}
                  <a href="/terms" className="underline text-blue-600 underline-offset-4 hover:text-blue-700">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              {submitStatus === "success" && (
                <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800" role="alert">
                  Thank you for contacting us! We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800" role="alert">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-6 py-3 font-medium text-[var(--color-accent)] shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)]/40 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send now"}
                </button>
              </div>
            </form>

            <div className="relative -order-1 md:order-none">
              <div className="relative overflow-hidden rounded-3xl border border-[var(--color-paragraph)]/15 bg-[var(--color-secondary-light)] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496529574-be85d6a60704?q=80&w=1460&auto=format&fit=crop"
                  alt="Professional customer support representative assisting clients"
                  className="h-[480px] sm:h-[540px] w-full object-cover"
                  loading="eager"
                  width="1460"
                  height="540"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-accent)]" aria-labelledby="contact-info-heading">
        <div className="px-6 py-10 md:px-10 max-w-7xl mx-auto">
          <h2 id="contact-info-heading" className="text-center text-3xl md:text-4xl font-semibold text-[var(--color-heading)]">
            Get in Touch – We're Here to Help!
          </h2>
          <p className="mx-auto my-5 max-w-[65ch] text-center text-base text-[var(--color-paragraph)]/70">
            Have questions or need assistance? Our team is always ready to guide you on your journey.
          </p>

          <address className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 not-italic">
            {company.map((item, i) => {
              const Icon = item.icon;
              const isContactInfo = item.href && !item.children;
              
              return (
                <div className="flex gap-3" key={item.title ?? i}>
                  <div className="mt-1">
                    <Icon className="text-xl text-[var(--color-secondary)]" aria-hidden="true" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--color-heading)]">{item.title}</h3>

                    {Array.isArray(item.children) && item.children.length ? (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.children.map((child, idx) => {
                          const ChildIcon = child.Icon;
                          return (
                            <a
                              key={idx}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Visit our ${child.label}`}
                              className="inline-flex items-center justify-center rounded-full border border-[var(--color-paragraph)]/15 p-3 text-[var(--color-paragraph)]/70 transition hover:bg-[var(--color-secondary)]/10 hover:text-[var(--color-secondary)]"
                            >
                              <ChildIcon />
                            </a>
                          );
                        })}
                      </div>
                    ) : isContactInfo ? (
                      <a 
                        href={item.href}
                        className="text-[var(--color-paragraph)]/70 hover:text-[var(--color-secondary)] transition break-words"
                      >
                        {item.description}
                      </a>
                    ) : (
                      <p className="text-[var(--color-paragraph)]/70">{item.description}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </address>
        </div>
      </section>

      <section className="bg-[var(--color-accent)]" aria-label="Office location map">
        <iframe
          title="Razor Infotech Office Location - Sainik Farm, New Delhi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7419361426278!2d77.198138!3d28.517411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1224e2234dd%3A0x7790e7d5f1699ce4!2sRazor%20Infotech%20Pvt.%20Ltd.%20(%20IT%20solutions)!5e0!3m2!1sen!2sin!4v1758093923686!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[60vh] w-full border-0"
        />
      </section>
    </>
  );
}

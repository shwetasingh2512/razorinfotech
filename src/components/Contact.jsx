import { FaPhoneAlt, FaFacebook, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { IoMail, IoLocationSharp, IoShareSocial } from "react-icons/io5";
import React from "react";

const company = [
  { title: "Call us", description: "+1-940-394-2948, +1-389-385-3807", icon: FaPhoneAlt },
  { title: "Email us", description: "support@razor.io , contact@razor.io", icon: IoMail },
  {
    title: "Visit us",
    description:
      "627, F/F, Westend Marg, Saiyad Ul Ajaib Extension, Sainik Farm, New Delhi, Delhi-110030",
    icon: IoLocationSharp,
  },
  {
    title: "Social Network",
    icon: IoShareSocial,
    children: [FaFacebook, FaInstagramSquare, FaLinkedin, FaWhatsappSquare],
  },
];

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      agree: !!data.get("agree"),
    };
    console.log("Contact form:", payload);
    e.currentTarget.reset();
  }

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex w-full flex-col items-center text-center">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--color-paragraph)]/15 bg-[var(--color-secondary-light)] px-4 py-2 text-sm font-medium tracking-wide text-[var(--color-paragraph)]/70">
              Connecting People
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-heading)] md:text-5xl">
              Let’s Talk
            </h2>
            <p className="mt-3 max-w-prose text-[var(--color-paragraph)]/80">
              Together, we can build smarter solutions for your business.
            </p>
          </div>

          {/* Grid */}
          <div className="md:mt-14 mt-10 grid items-start gap-10 md:grid-cols-2">
            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
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
                  placeholder="Raman"
                  className="w-full rounded-xl border-0 bg-transparent px-4 py-3 text-[var(--color-heading)] placeholder-[var(--color-paragraph)]/40 outline-none ring-1 ring-inset ring-[var(--color-paragraph)]/20 transition focus:ring-2 focus:ring-[var(--color-secondary)]"
                  required
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
                  placeholder="hello@razor.io"
                  className="w-full rounded-xl border-0 bg-transparent px-4 py-3 text-[var(--color-heading)] placeholder-[var(--color-paragraph)]/40 outline-none ring-1 ring-inset ring-[var(--color-paragraph)]/20 transition focus:ring-2 focus:ring-[var(--color-secondary)]"
                  required
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
                  className="w-full resize-y rounded-xl border-0 bg-transparent px-4 py-3 text-[var(--color-heading)] placeholder-[var(--color-paragraph)]/40 outline-none ring-1 ring-inset ring-[var(--color-paragraph)]/20 transition focus:ring-2 focus:ring-[var(--color-secondary)]"
                  required
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
                  <span className="underline text-blue-600 underline-offset-4">Terms and Conditions</span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-6 py-3 font-medium text-[var(--color-accent)] shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)]/40"
                >
                  Send now
                </button>
              </div>
            </form>

            {/* Photo */}
            <div className="relative -order-1 md:order-none">
              <div className="relative overflow-hidden rounded-3xl border border-[var(--color-paragraph)]/15 bg-[var(--color-secondary-light)] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496529574-be85d6a60704?q=80&w=1460&auto=format&fit=crop"
                  alt="Person on the phone taking notes at a laptop"
                  className="h-[540px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company contacts */}
      <section className="bg-[var(--color-accent)]">
        <div className="px-6 py-10 md:px-10">
          <h2 className="text-center text-3xl font-semibold text-[var(--color-heading)]">
            Get in Touch – We're Here to Help!
          </h2>
          <p className="mx-auto my-5 max-w-[65ch] text-center text-base text-[var(--color-paragraph)]/70">
            Have questions or need assistance? Our team is always ready to guide you on your journey.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {company.map((item, i) => {
              const Icon = item.icon;
              return (
                <div className="flex gap-3" key={item.title ?? i}>
                  <div className="icon mt-1">
                    <Icon className="text-xl text-[var(--color-secondary)]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-heading)]">{item.title}</h3>

                    {Array.isArray(item.children) && item.children.length ? (
                      <div className="mt-2 flex flex-wrap gap-2 text-[var(--color-paragraph)]/70">
                        {item.children.map((ChildIcon, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center justify-center rounded-full border border-[var(--color-paragraph)]/15 p-3"
                          >
                            <ChildIcon />
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[var(--color-paragraph)]/70">{item.description}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[var(--color-accent)]">
        <iframe
          title="Razor Infotech Location"
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
